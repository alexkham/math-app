

// // // tables-optimized: v4 | 2026-05-18 | 2 tables (obj4 comparison, obj11 summary capstone)
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
// //   "QR decomposition",
// //   "QR factorization",
// //   "Householder reflections",
// //   "Gram-Schmidt QR",
// //   "Givens rotations",
// //   "QR least squares",
// //   "thin QR full QR",
// //   "QR eigenvalue algorithm",
// //   "orthogonal triangular factorization",
// //   "QR numerical stability",
// //   "condition number QR",
// //   "modified Gram-Schmidt QR",
// //   "QR decomposition example",
// //   "orthonormal columns matrix"
// // ]

// //   const linkStyle = 'color: inherit; text-decoration: underline;'

// //   // ---------- TABLES ----------

// //   // obj4 — comparison: thin QR vs full QR
// //   const obj4Table = `
// // <table class="styled-table" style="border-collapse: collapse; width: 75%;margin:auto; background: white; box-shadow: 0 2px 10px rgba(0,0,0,0.1); border-radius: 8px; overflow: hidden; font-family: Arial, sans-serif;">
// //   <thead>
// //     <tr>
// //       <th style="${tableHeaders.comparison}">Variant</th>
// //       <th style="${tableHeaders.comparison} text-align: center;">Q dimensions</th>
// //       <th style="${tableHeaders.comparison} text-align: center;">R dimensions</th>
// //       <th style="${tableHeaders.comparison}">What is captured</th>
// //       <th style="${tableHeaders.comparison}">When required</th>
// //     </tr>
// //   </thead>
// //   <tbody>
// //     <tr style="background: #f8f9fa;">
// //       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Thin (reduced) QR</td>
// //       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e; text-align: center;">m × n with orthonormal columns</td>
// //       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e; text-align: center;">n × n upper triangular</td>
// //       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">an orthonormal basis for Col(A)</td>
// //       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">system solving, <a href="/linear-algebra/orthogonality/least-squares" style="${linkStyle}">least squares</a> — the usual default</td>
// //     </tr>
// //     <tr>
// //       <td style="padding: 12px 15px; font-weight: bold; color: #06357a;">Full QR</td>
// //       <td style="padding: 12px 15px; color: #34495e; text-align: center;">m × m, fully orthogonal</td>
// //       <td style="padding: 12px 15px; color: #34495e; text-align: center;">m × n (n × n upper block, then m − n rows of zeros)</td>
// //       <td style="padding: 12px 15px; color: #34495e;">orthonormal bases for both Col(A) and Col(A)<sup>⊥</sup></td>
// //       <td style="padding: 12px 15px; color: #34495e;">extracting a basis for the <a href="/linear-algebra/vector-spaces/fundamental-spaces" style="${linkStyle}">left null space</a> of A</td>
// //     </tr>
// //   </tbody>
// // </table>
// // `

// //   // obj11 — summary capstone: four QR computation methods
// //   const summaryTable = `
// // <table class="styled-table" style="border-collapse: collapse; width: 78%;margin:auto; background: white; box-shadow: 0 2px 10px rgba(0,0,0,0.1); border-radius: 8px; overflow: hidden; font-family: Arial, sans-serif;">
// //   <thead>
// //     <tr>
// //       <th style="${tableHeaders.summary}">Method</th>
// //       <th style="${tableHeaders.summary}">How it works</th>
// //       <th style="${tableHeaders.summary}">Numerical stability</th>
// //       <th style="${tableHeaders.summary}">Best for</th>
// //     </tr>
// //   </thead>
// //   <tbody>
// //     <tr style="background: #f8f9fa;">
// //       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Classical <a href="/linear-algebra/orthogonality/gram-schmidt" style="${linkStyle}">Gram-Schmidt</a></td>
// //       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">orthogonalize each column against original earlier columns</td>
// //       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">poor when columns are nearly dependent; loses orthogonality</td>
// //       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">teaching the connection between QR and orthogonalization</td>
// //     </tr>
// //     <tr>
// //       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Modified Gram-Schmidt</td>
// //       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">update remaining columns in place after each projection subtraction</td>
// //       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">significantly better than classical; not backward stable</td>
// //       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">cases where Q is needed explicitly column by column</td>
// //     </tr>
// //     <tr style="background: #f8f9fa;">
// //       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Householder reflections</td>
// //       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">one orthogonal reflection per column zeros all entries below the pivot</td>
// //       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">backward stable — the gold standard</td>
// //       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">dense matrices; default in numerical libraries</td>
// //     </tr>
// //     <tr>
// //       <td style="padding: 12px 15px; font-weight: bold; color: #06357a;">Givens rotations</td>
// //       <td style="padding: 12px 15px; color: #34495e;">a plane rotation zeros one entry at a time</td>
// //       <td style="padding: 12px 15px; color: #34495e;">backward stable, like Householder</td>
// //       <td style="padding: 12px 15px; color: #34495e;">sparse matrices — preserves sparsity by acting locally</td>
// //     </tr>
// //   </tbody>
// // </table>
// // `

// // // const sectionsContent = {
// // //   obj1: {
// // //     title: `What QR Decomposition Is`,
// // //     content: `An $m \\times n$ [matrix](!/linear-algebra/matrix) $A$ with $m \\geq n$ and [linearly independent](!/linear-algebra/vector-spaces/linear-independence) columns factors as

// // // $$A = QR$$

// // // where $Q$ is $m \\times n$ with [orthonormal](!/linear-algebra/orthogonality/orthogonal-sets) columns and $R$ is $n \\times n$ upper [triangular](!/linear-algebra/matrix/types) with positive diagonal entries.

// // // The columns of $Q$ form an orthonormal [basis](!/linear-algebra/vector-spaces) for the column space of $A$. The matrix $R$ stores the coefficients: each column of $A$ is a linear combination of the columns of $Q$ with weights given by the corresponding column of $R$. The upper triangular structure of $R$ reflects the sequential nature of the orthogonalization — each column depends only on the columns that came before it.`,
// // //     before: ``,
// // //     after: ``,
// // //     link: ``,
// // //   },
// // //   obj2: {
// // //     title: `QR via Gram-Schmidt`,
// // //     content: `Applying the [Gram-Schmidt process](!/linear-algebra/orthogonality/gram-schmidt) to the columns $\\mathbf{a}_1, \\dots, \\mathbf{a}_n$ of $A$ produces orthonormal vectors $\\mathbf{q}_1, \\dots, \\mathbf{q}_n$. These become the columns of $Q$.

// // // The entries of $R$ are the dot products computed during Gram-Schmidt: $R_{ij} = \\mathbf{q}_i \\cdot \\mathbf{a}_j$ for $i \\leq j$, and $R_{ij} = 0$ for $i > j$. Each column of $A$ decomposes as

// // // $$\\mathbf{a}_j = R_{1j}\\mathbf{q}_1 + R_{2j}\\mathbf{q}_2 + \\cdots + R_{jj}\\mathbf{q}_j$$

// // // The entry $R_{jj} = \\|\\mathbf{u}_j\\|$ (the norm of the $j$-th orthogonal vector before normalization) is always positive, which makes $R$ unique.

// // // ## Worked Example

// // // For $A = \\begin{pmatrix} 1 & 1 \\\\ 0 & 1 \\\\ 1 & 0 \\end{pmatrix}$: Gram-Schmidt on the two columns gives $\\mathbf{q}_1 = \\frac{1}{\\sqrt{2}}(1, 0, 1)^T$ and $\\mathbf{q}_2 = \\frac{1}{\\sqrt{6}}(1, 2, -1)^T$. Then $R = \\begin{pmatrix} \\sqrt{2} & 1/\\sqrt{2} \\\\ 0 & 3/\\sqrt{6} \\end{pmatrix}$ and $A = QR$.`,
// // //     before: ``,
// // //     after: ``,
// // //     link: ``,
// // //   },
// // //   obj3: {
// // //     title: `QR via Householder Reflections`,
// // //     content: `A Householder reflection is an [orthogonal](!/linear-algebra/matrix/types) matrix $H = I - 2\\mathbf{v}\\mathbf{v}^T/(\\mathbf{v}^T\\mathbf{v})$ that reflects $\\mathbb{R}^m$ across the hyperplane perpendicular to $\\mathbf{v}$. By choosing $\\mathbf{v}$ appropriately, a single Householder reflection zeros out all entries below the pivot in one column.

// // // Applying Householder reflections sequentially — one per column — produces $H_n \\cdots H_2 H_1 A = R$. Since each $H_i$ is orthogonal, $Q = H_1 H_2 \\cdots H_n$ is orthogonal, giving $A = QR$.

// // // Householder QR is more numerically stable than Gram-Schmidt. It achieves backward stability — the computed factors $Q$ and $R$ satisfy $QR = A + E$ where $\\|E\\|$ is on the order of machine precision times $\\|A\\|$. This makes Householder QR the standard algorithm in numerical libraries.`,
// // //     before: ``,
// // //     after: ``,
// // //     link: ``,
// // //   },
// // //   obj4: {
// // //     title: `Thin QR vs. Full QR`,
// // //     content: `The thin (reduced) QR factorization has $Q_1$ of size $m \\times n$ with orthonormal columns and $R_1$ of size $n \\times n$ upper triangular: $A = Q_1 R_1$. This is the version produced by Gram-Schmidt and is sufficient for most applications.

// // // The full QR factorization extends $Q_1$ to a square $m \\times m$ orthogonal matrix $Q$ by appending $m - n$ columns forming an orthonormal basis for $\\text{Col}(A)^\\perp$. The factor $R$ is extended to $m \\times n$ by appending $m - n$ rows of zeros: $A = QR$.

// // // The full version is needed when the [orthogonal complement](!/linear-algebra/orthogonality) of the column space is required — for instance, when extracting a basis for the [left null space](!/linear-algebra/vector-spaces/fundamental-spaces). The thin version is more economical for system solving and [least squares](!/linear-algebra/orthogonality/least-squares).

// // // The two variants compare cleanly on the dimensions of their factors and what each one captures.`,
// // //     before: ``,
// // //     after: ``,
// // //     link: ``,
// // //   },
// // //   obj5: {
// // //     title: `Existence and Uniqueness`,
// // //     content: `Every $m \\times n$ matrix with $m \\geq n$ and linearly independent columns has a thin QR factorization. Every $m \\times n$ matrix (regardless of rank) has a full QR factorization.

// // // The thin QR factorization with positive diagonal entries on $R$ is unique. If negative diagonal entries are permitted, the factorization is not unique — signs can be redistributed between $Q$ and $R$ (multiplying a column of $Q$ by $-1$ and the corresponding row of $R$ by $-1$ preserves the product). The convention of positive diagonal entries on $R$ resolves this ambiguity.`,
// // //     before: ``,
// // //     after: ``,
// // //     link: ``,
// // //   },
// // //   obj6: {
// // //     title: `Solving Least Squares with QR`,
// // //     content: `The [normal equations](!/linear-algebra/orthogonality/least-squares) $A^TA\\hat{\\mathbf{x}} = A^T\\mathbf{b}$ transform under $A = QR$. Since $A^TA = R^TQ^TQR = R^TR$ and $A^T\\mathbf{b} = R^TQ^T\\mathbf{b}$, the normal equations become $R^TR\\hat{\\mathbf{x}} = R^TQ^T\\mathbf{b}$. Canceling $R^T$ (invertible because $R$ has positive diagonal):

// // // $$R\\hat{\\mathbf{x}} = Q^T\\mathbf{b}$$

// // // The right-hand side $Q^T\\mathbf{b}$ is computed by $n$ [dot products](!/linear-algebra/vectors/dot-product). The system $R\\hat{\\mathbf{x}} = Q^T\\mathbf{b}$ is upper triangular, solved by back substitution in $O(n^2)$ operations.

// // // The critical advantage over the normal equations is numerical. Forming $A^TA$ squares the [condition number](!/linear-algebra/matrix/rank): $\\kappa(A^TA) = \\kappa(A)^2$. If $A$ has condition number $10^6$, the normal equations work with condition number $10^{12}$, losing $12$ digits of accuracy in double precision. QR avoids this squaring and works with the original condition number $10^6$.`,
// // //     before: ``,
// // //     after: ``,
// // //     link: ``,
// // //   },
// // //   obj7: {
// // //     title: `The QR Algorithm for Eigenvalues`,
// // //     content: `The QR algorithm is the standard method for computing [eigenvalues](!/linear-algebra/eigen) of general (non-[symmetric](!/linear-algebra/matrix/types)) matrices. It proceeds iteratively:

// // // Set $A_0 = A$. At each step, compute the QR factorization $A_k = Q_k R_k$, then form $A_{k+1} = R_k Q_k$.

// // // Under mild conditions, $A_k$ converges to an upper triangular matrix with the eigenvalues on the diagonal. The convergence is driven by the fact that $A_{k+1} = Q_k^T A_k Q_k$ — each iteration is a [similarity](!/linear-algebra/transformations/basis-change) transformation that preserves the eigenvalues while driving the sub-diagonal entries toward zero.

// // // With shifts (replacing $A_k$ by $A_k - \\sigma_k I$ before factoring and adding $\\sigma_k I$ back), convergence accelerates dramatically — cubic convergence for symmetric matrices with the Wilkinson shift. The QR algorithm computes eigenvalues without ever forming the [characteristic polynomial](!/linear-algebra/eigen/characteristic-equation), avoiding the severe numerical instability of polynomial root-finding.`,
// // //     before: ``,
// // //     after: ``,
// // //     link: ``,
// // //   },
// // //   obj8: {
// // //     title: `Properties of the Factors`,
// // //     content: `The orthonormality of $Q$'s columns ($Q^TQ = I_n$) has several immediate consequences.

// // // The matrix $QQ^T$ is the [projection](!/linear-algebra/orthogonality/projections) matrix onto $\\text{Col}(A)$. For any $\\mathbf{b}$, $QQ^T\\mathbf{b}$ is the orthogonal projection of $\\mathbf{b}$ onto the column space.

// // // Orthogonal multiplication preserves norms: $\\|A\\mathbf{x}\\| = \\|QR\\mathbf{x}\\| = \\|R\\mathbf{x}\\|$, since $\\|Q\\mathbf{y}\\| = \\|\\mathbf{y}\\|$ for any $\\mathbf{y}$. This means $R$ captures all the "size" information of $A$ — the orthogonal factor contributes nothing to stretching or compressing.

// // // $R$ is invertible when $A$ has full column rank (the diagonal entries are the norms of the Gram-Schmidt vectors, all positive). The [singular values](!/linear-algebra/decompositions/svd) of $A$ equal the singular values of $R$, since the orthogonal factor does not affect them.`,
// // //     before: ``,
// // //     after: ``,
// // //     link: ``,
// // //   },
// // //   obj9: {
// // //     title: `Gram-Schmidt vs. Householder`,
// // //     content: `Classical Gram-Schmidt can lose orthogonality in floating-point arithmetic when the columns of $A$ are nearly [dependent](!/linear-algebra/vector-spaces/linear-independence). The computed $\\mathbf{q}_i$'s may fail to be perpendicular to machine precision, and the errors accumulate with each step.

// // // Modified Gram-Schmidt improves stability by updating the remaining vectors in place after each [projection](!/linear-algebra/orthogonality/projections) subtraction, rather than using the original columns throughout. The mathematical result is identical in exact arithmetic, but the numerical behavior is significantly better.

// // // Householder reflections provide the strongest stability guarantee. Each reflection zeros an entire column below the diagonal in a single, orthogonally-implemented step. The resulting QR factorization is backward stable — the gold standard in numerical linear algebra.

// // // Givens rotations offer a third option, zeroing entries one at a time via plane rotations. They are preferred for sparse matrices, where surgically placed zeros can be introduced without disturbing the existing sparsity structure.

// // // In practice, Householder is the default for dense matrices, Givens for sparse ones, and Gram-Schmidt (modified) for situations where the orthogonal factor $Q$ is needed explicitly rather than implicitly.`,
// // //     before: ``,
// // //     after: ``,
// // //     link: ``,
// // //   },
// // //   obj10: {
// // //     title: `QR and Gram-Schmidt: The Connection`,
// // //     content: `The [Gram-Schmidt process](!/linear-algebra/orthogonality/gram-schmidt) and the QR decomposition are two descriptions of the same computation.

// // // Gram-Schmidt takes the columns of $A$ and produces orthonormal vectors $\\mathbf{q}_1, \\dots, \\mathbf{q}_n$ while recording the coefficients $R_{ij} = \\mathbf{q}_i \\cdot \\mathbf{a}_j$ along the way. Assembling these into matrices gives $A = QR$.

// // // Conversely, given $A = QR$, the columns of $Q$ are exactly what Gram-Schmidt would produce, and $R$ stores exactly the dot products Gram-Schmidt would compute. The factorization is the matrix-level summary of the vector-level algorithm.

// // // This duality means every theorem about QR has an interpretation in terms of Gram-Schmidt, and vice versa. The QR decomposition is Gram-Schmidt made systematic, portable, and computable in a single matrix equation.`,
// // //     before: ``,
// // //     after: ``,
// // //     link: ``,
// // //   },
// // //   // NEW capstone section: obj11
// // //   obj11: {
// // //     title: `Summary: Four Routes to the Same Factorization`,
// // //     content: `The QR factorization is unique (with the positive-diagonal convention), but the algorithms that produce it are not. Classical Gram-Schmidt, modified Gram-Schmidt, Householder reflections, and Givens rotations all yield the same $A = QR$ in exact arithmetic, but they differ sharply in numerical stability and in the kinds of matrices they handle most efficiently. The table below collects each method alongside how it operates, its stability behavior, and the setting in which it is the right choice.`,
// // //     before: ``,
// // //     after: ``,
// // //     link: ``,
// // //   },
// // // }



// // // linear-algebra/decompositions/qr — sectionsContent with formula callouts (v1)
// // // 3 callouts injected:
// // //   obj1 (QR Decomposition) — direct $$ replacement
// // //   obj2 (QR Gram-Schmidt R Entries) — inline-promote; dispersed inline R-entry forms consolidated
// // //   obj7 (QR Algorithm for Eigenvalues) — inline-promote of the iteration step
// // // obj6 R x̂ = Qᵀb display left intact — its data-file entry (Least-Squares via QR) targets the
// // // least-squares page, not this one. Worked-example matrices in obj2 preserved.

// // const sectionsContent = {
// //   obj1: {
// //     title: `What QR Decomposition Is`,
// //     content: `An $m \\times n$ [matrix](!/linear-algebra/matrix) $A$ with $m \\geq n$ and [linearly independent](!/linear-algebra/vector-spaces/linear-independence) columns factors as

// // @academic[formula_callout:qr_decomposition|QR Decomposition|$$A = QR$$]@
// // @academic[formulas_link:/linear-algebra/formulas#qr_decomposition]@

// // where $Q$ is $m \\times n$ with [orthonormal](!/linear-algebra/orthogonality/orthogonal-sets) columns and $R$ is $n \\times n$ upper [triangular](!/linear-algebra/matrix/types) with positive diagonal entries.

// // The columns of $Q$ form an orthonormal [basis](!/linear-algebra/vector-spaces) for the column space of $A$. The matrix $R$ stores the coefficients: each column of $A$ is a linear combination of the columns of $Q$ with weights given by the corresponding column of $R$. The upper triangular structure of $R$ reflects the sequential nature of the orthogonalization — each column depends only on the columns that came before it.`,
// //     before: ``,
// //     after: ``,
// //     link: ``,
// //   },
// //   obj2: {
// //     title: `QR via Gram-Schmidt`,
// //     content: `Applying the [Gram-Schmidt process](!/linear-algebra/orthogonality/gram-schmidt) to the columns $\\mathbf{a}_1, \\dots, \\mathbf{a}_n$ of $A$ produces orthonormal vectors $\\mathbf{q}_1, \\dots, \\mathbf{q}_n$. These become the columns of $Q$.

// // The entries of $R$ are the dot products computed during Gram-Schmidt:

// // @academic[formula_callout:qr_gram_schmidt_r_entries|QR Gram-Schmidt R Entries|$$R_{ij} = \\mathbf{q}_i \\cdot \\mathbf{a}_j \\;\\; (i \\leq j), \\qquad R_{ij} = 0 \\;\\; (i > j), \\qquad R_{jj} = \\|\\mathbf{u}_j\\|$$]@
// // @academic[formulas_link:/linear-algebra/formulas#qr_gram_schmidt_r_entries]@

// // Each column of $A$ decomposes as

// // $$\\mathbf{a}_j = R_{1j}\\mathbf{q}_1 + R_{2j}\\mathbf{q}_2 + \\cdots + R_{jj}\\mathbf{q}_j$$

// // The diagonal entry $R_{jj} = \\|\\mathbf{u}_j\\|$ — the norm of the $j$-th orthogonal vector before normalization — is always positive, which makes $R$ unique.

// // ## Worked Example

// // For $A = \\begin{pmatrix} 1 & 1 \\\\ 0 & 1 \\\\ 1 & 0 \\end{pmatrix}$: Gram-Schmidt on the two columns gives $\\mathbf{q}_1 = \\frac{1}{\\sqrt{2}}(1, 0, 1)^T$ and $\\mathbf{q}_2 = \\frac{1}{\\sqrt{6}}(1, 2, -1)^T$. Then $R = \\begin{pmatrix} \\sqrt{2} & 1/\\sqrt{2} \\\\ 0 & 3/\\sqrt{6} \\end{pmatrix}$ and $A = QR$.`,
// //     before: ``,
// //     after: ``,
// //     link: ``,
// //   },
// //   obj3: {
// //     title: `QR via Householder Reflections`,
// //     content: `A Householder reflection is an [orthogonal](!/linear-algebra/matrix/types) matrix $H = I - 2\\mathbf{v}\\mathbf{v}^T/(\\mathbf{v}^T\\mathbf{v})$ that reflects $\\mathbb{R}^m$ across the hyperplane perpendicular to $\\mathbf{v}$. By choosing $\\mathbf{v}$ appropriately, a single Householder reflection zeros out all entries below the pivot in one column.

// // Applying Householder reflections sequentially — one per column — produces $H_n \\cdots H_2 H_1 A = R$. Since each $H_i$ is orthogonal, $Q = H_1 H_2 \\cdots H_n$ is orthogonal, giving $A = QR$.

// // Householder QR is more numerically stable than Gram-Schmidt. It achieves backward stability — the computed factors $Q$ and $R$ satisfy $QR = A + E$ where $\\|E\\|$ is on the order of machine precision times $\\|A\\|$. This makes Householder QR the standard algorithm in numerical libraries.`,
// //     before: ``,
// //     after: ``,
// //     link: ``,
// //   },
// //   obj4: {
// //     title: `Thin QR vs. Full QR`,
// //     content: `The thin (reduced) QR factorization has $Q_1$ of size $m \\times n$ with orthonormal columns and $R_1$ of size $n \\times n$ upper triangular: $A = Q_1 R_1$. This is the version produced by Gram-Schmidt and is sufficient for most applications.

// // The full QR factorization extends $Q_1$ to a square $m \\times m$ orthogonal matrix $Q$ by appending $m - n$ columns forming an orthonormal basis for $\\text{Col}(A)^\\perp$. The factor $R$ is extended to $m \\times n$ by appending $m - n$ rows of zeros: $A = QR$.

// // The full version is needed when the [orthogonal complement](!/linear-algebra/orthogonality) of the column space is required — for instance, when extracting a basis for the [left null space](!/linear-algebra/vector-spaces/fundamental-spaces). The thin version is more economical for system solving and [least squares](!/linear-algebra/orthogonality/least-squares).

// // The two variants compare cleanly on the dimensions of their factors and what each one captures.`,
// //     before: ``,
// //     after: ``,
// //     link: ``,
// //   },
// //   obj5: {
// //     title: `Existence and Uniqueness`,
// //     content: `Every $m \\times n$ matrix with $m \\geq n$ and linearly independent columns has a thin QR factorization. Every $m \\times n$ matrix (regardless of rank) has a full QR factorization.

// // The thin QR factorization with positive diagonal entries on $R$ is unique. If negative diagonal entries are permitted, the factorization is not unique — signs can be redistributed between $Q$ and $R$ (multiplying a column of $Q$ by $-1$ and the corresponding row of $R$ by $-1$ preserves the product). The convention of positive diagonal entries on $R$ resolves this ambiguity.`,
// //     before: ``,
// //     after: ``,
// //     link: ``,
// //   },
// //   obj6: {
// //     title: `Solving Least Squares with QR`,
// //     content: `The [normal equations](!/linear-algebra/orthogonality/least-squares) $A^TA\\hat{\\mathbf{x}} = A^T\\mathbf{b}$ transform under $A = QR$. Since $A^TA = R^TQ^TQR = R^TR$ and $A^T\\mathbf{b} = R^TQ^T\\mathbf{b}$, the normal equations become $R^TR\\hat{\\mathbf{x}} = R^TQ^T\\mathbf{b}$. Canceling $R^T$ (invertible because $R$ has positive diagonal):

// // $$R\\hat{\\mathbf{x}} = Q^T\\mathbf{b}$$

// // The right-hand side $Q^T\\mathbf{b}$ is computed by $n$ [dot products](!/linear-algebra/vectors/dot-product). The system $R\\hat{\\mathbf{x}} = Q^T\\mathbf{b}$ is upper triangular, solved by back substitution in $O(n^2)$ operations.

// // The critical advantage over the normal equations is numerical. Forming $A^TA$ squares the [condition number](!/linear-algebra/matrix/rank): $\\kappa(A^TA) = \\kappa(A)^2$. If $A$ has condition number $10^6$, the normal equations work with condition number $10^{12}$, losing $12$ digits of accuracy in double precision. QR avoids this squaring and works with the original condition number $10^6$.`,
// //     before: ``,
// //     after: ``,
// //     link: ``,
// //   },
// //   obj7: {
// //     title: `The QR Algorithm for Eigenvalues`,
// //     content: `The QR algorithm is the standard method for computing [eigenvalues](!/linear-algebra/eigen) of general (non-[symmetric](!/linear-algebra/matrix/types)) matrices. It proceeds iteratively, starting from $A_0 = A$ and at each step factoring and reassembling the product in reversed order:

// // @academic[formula_callout:qr_algorithm_for_eigenvalues|QR Algorithm for Eigenvalues|$$A_k = Q_k R_k, \\qquad A_{k+1} = R_k Q_k$$]@
// // @academic[formulas_link:/linear-algebra/formulas#qr_algorithm_for_eigenvalues]@

// // Under mild conditions, $A_k$ converges to an upper triangular matrix with the eigenvalues on the diagonal. The convergence is driven by the fact that $A_{k+1} = Q_k^T A_k Q_k$ — each iteration is a [similarity](!/linear-algebra/transformations/basis-change) transformation that preserves the eigenvalues while driving the sub-diagonal entries toward zero.

// // With shifts (replacing $A_k$ by $A_k - \\sigma_k I$ before factoring and adding $\\sigma_k I$ back), convergence accelerates dramatically — cubic convergence for symmetric matrices with the Wilkinson shift. The QR algorithm computes eigenvalues without ever forming the [characteristic polynomial](!/linear-algebra/eigen/characteristic-equation), avoiding the severe numerical instability of polynomial root-finding.`,
// //     before: ``,
// //     after: ``,
// //     link: ``,
// //   },
// //   obj8: {
// //     title: `Properties of the Factors`,
// //     content: `The orthonormality of $Q$'s columns ($Q^TQ = I_n$) has several immediate consequences.

// // The matrix $QQ^T$ is the [projection](!/linear-algebra/orthogonality/projections) matrix onto $\\text{Col}(A)$. For any $\\mathbf{b}$, $QQ^T\\mathbf{b}$ is the orthogonal projection of $\\mathbf{b}$ onto the column space.

// // Orthogonal multiplication preserves norms: $\\|A\\mathbf{x}\\| = \\|QR\\mathbf{x}\\| = \\|R\\mathbf{x}\\|$, since $\\|Q\\mathbf{y}\\| = \\|\\mathbf{y}\\|$ for any $\\mathbf{y}$. This means $R$ captures all the "size" information of $A$ — the orthogonal factor contributes nothing to stretching or compressing.

// // $R$ is invertible when $A$ has full column rank (the diagonal entries are the norms of the Gram-Schmidt vectors, all positive). The [singular values](!/linear-algebra/decompositions/svd) of $A$ equal the singular values of $R$, since the orthogonal factor does not affect them.`,
// //     before: ``,
// //     after: ``,
// //     link: ``,
// //   },
// //   obj9: {
// //     title: `Gram-Schmidt vs. Householder`,
// //     content: `Classical Gram-Schmidt can lose orthogonality in floating-point arithmetic when the columns of $A$ are nearly [dependent](!/linear-algebra/vector-spaces/linear-independence). The computed $\\mathbf{q}_i$'s may fail to be perpendicular to machine precision, and the errors accumulate with each step.

// // Modified Gram-Schmidt improves stability by updating the remaining vectors in place after each [projection](!/linear-algebra/orthogonality/projections) subtraction, rather than using the original columns throughout. The mathematical result is identical in exact arithmetic, but the numerical behavior is significantly better.

// // Householder reflections provide the strongest stability guarantee. Each reflection zeros an entire column below the diagonal in a single, orthogonally-implemented step. The resulting QR factorization is backward stable — the gold standard in numerical linear algebra.

// // Givens rotations offer a third option, zeroing entries one at a time via plane rotations. They are preferred for sparse matrices, where surgically placed zeros can be introduced without disturbing the existing sparsity structure.

// // In practice, Householder is the default for dense matrices, Givens for sparse ones, and Gram-Schmidt (modified) for situations where the orthogonal factor $Q$ is needed explicitly rather than implicitly.`,
// //     before: ``,
// //     after: ``,
// //     link: ``,
// //   },
// //   obj10: {
// //     title: `QR and Gram-Schmidt: The Connection`,
// //     content: `The [Gram-Schmidt process](!/linear-algebra/orthogonality/gram-schmidt) and the QR decomposition are two descriptions of the same computation.

// // Gram-Schmidt takes the columns of $A$ and produces orthonormal vectors $\\mathbf{q}_1, \\dots, \\mathbf{q}_n$ while recording the coefficients $R_{ij} = \\mathbf{q}_i \\cdot \\mathbf{a}_j$ along the way. Assembling these into matrices gives $A = QR$.

// // Conversely, given $A = QR$, the columns of $Q$ are exactly what Gram-Schmidt would produce, and $R$ stores exactly the dot products Gram-Schmidt would compute. The factorization is the matrix-level summary of the vector-level algorithm.

// // This duality means every theorem about QR has an interpretation in terms of Gram-Schmidt, and vice versa. The QR decomposition is Gram-Schmidt made systematic, portable, and computable in a single matrix equation.`,
// //     before: ``,
// //     after: ``,
// //     link: ``,
// //   },
// //   obj11: {
// //     title: `Summary: Four Routes to the Same Factorization`,
// //     content: `The QR factorization is unique (with the positive-diagonal convention), but the algorithms that produce it are not. Classical Gram-Schmidt, modified Gram-Schmidt, Householder reflections, and Givens rotations all yield the same $A = QR$ in exact arithmetic, but they differ sharply in numerical stability and in the kinds of matrices they handle most efficiently. The table below collects each method alongside how it operates, its stability behavior, and the setting in which it is the right choice.`,
// //     before: ``,
// //     after: ``,
// //     link: ``,
// //   },
// // }

// // const introContent = {
// //   title: `Orthogonal Times Triangular`,
// //   content: `The QR decomposition factors a matrix into an orthogonal factor Q and an upper triangular factor R. It is the matrix form of the Gram-Schmidt process, the standard method for least-squares computation, and the foundation of the most widely used eigenvalue algorithm. The orthogonal factor preserves lengths and condition numbers, making QR the numerically safest of the triangular factorizations.`,
// // }

// // const faqQuestions = {
// //   obj1: {
// //     question: "What is the QR decomposition?",
// //     answer: "The QR decomposition factors an m×n matrix A (with independent columns) as A = QR, where Q has orthonormal columns and R is upper triangular with positive diagonal entries. Q spans the column space of A, and R stores the coefficients expressing A's columns in terms of Q's columns.",
// //     sectionId: "1"
// //   },
// //   obj2: {
// //     question: "How is QR computed?",
// //     answer: "QR can be computed via Gram-Schmidt orthogonalization, Householder reflections, or Givens rotations. Householder is the default for dense matrices due to its backward stability. Modified Gram-Schmidt is used when Q is needed explicitly. Givens rotations are preferred for sparse matrices.",
// //     sectionId: "9"
// //   },
// //   obj3: {
// //     question: "Why is QR better than normal equations for least squares?",
// //     answer: "Forming AᵀA squares the condition number of A, amplifying rounding errors. QR reduces least squares to the triangular system Rx̂ = Qᵀb, preserving the original condition number. If A has condition number 10⁶, QR works at 10⁶ while normal equations work at 10¹².",
// //     sectionId: "6"
// //   },
// //   obj4: {
// //     question: "What is the difference between thin QR and full QR?",
// //     answer: "Thin (reduced) QR has Q of size m×n with orthonormal columns and R of size n×n. Full QR extends Q to a square m×m orthogonal matrix by adding columns spanning the orthogonal complement of Col(A). Thin QR suffices for system solving and least squares; full QR is needed when the left null space basis is required.",
// //     sectionId: "4"
// //   },
// //   obj5: {
// //     question: "How does the QR algorithm compute eigenvalues?",
// //     answer: "The QR algorithm iterates: factor Aₖ = QₖRₖ, then form Aₖ₊₁ = RₖQₖ. Each step is a similarity transformation preserving eigenvalues while driving sub-diagonal entries toward zero. With shifts, convergence is cubic for symmetric matrices. It avoids the numerical instability of finding roots of the characteristic polynomial.",
// //     sectionId: "7"
// //   }
// // }


// // const schemas = {
// //   learningResource: {
// //     "@context": "https://schema.org",
// //     "@type": "LearningResource",
// //     "name": "QR Decomposition",
// //     "description": "QR decomposition: Gram-Schmidt, Householder, and Givens methods. Thin vs full QR, least-squares solving, the QR eigenvalue algorithm, numerical stability, and factor properties.",
// //     "url": "https://www.learnmathclass.com/linear-algebra/decompositions/qr",
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
// //       "name": "QR Decomposition"
// //     },
// //     "teaches": [
// //       "QR factorization A = QR definition and structure",
// //       "QR via Gram-Schmidt orthogonalization",
// //       "QR via Householder reflections",
// //       "Thin QR vs full QR decomposition",
// //       "Least-squares solving with QR",
// //       "The QR algorithm for eigenvalue computation",
// //       "Gram-Schmidt vs Householder vs Givens comparison",
// //       "Side-by-side comparison of the four routes to QR on stability and use case"
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
// //         "name": "QR Decomposition",
// //         "item": "https://www.learnmathclass.com/linear-algebra/decompositions/qr"
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
// //     obj4Table,
// //     summaryTable,
// //     faqQuestions,
// //     schemas,
// //     seoData: {
// //       title: "QR Decomposition: Methods & Applications | Learn Math Class",
// //       description: "QR decomposition: Gram-Schmidt, Householder, and Givens methods. Thin vs full QR, least-squares solving, the QR eigenvalue algorithm, numerical stability, and factor properties.",
// //       keywords: keyWords.join(", "),
// //       url: "/linear-algebra/decompositions/qr",
// //       name: "QR Decomposition"
// //     },
// //   }
// // }
// //    }

// // // export default function PageTemplate({seoData,sectionsContent , introContent}) {
// // export default function QRDecompositionPage({
// //   seoData,
// //   sectionsContent,
// //   introContent,
// //   obj4Table,
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
// //           <div key={'obj4-table'} style={tableWrapStyle}
// //                dangerouslySetInnerHTML={{ __html: obj4Table }} />,
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
// //    <h1 className='title' style={{marginTop:'0px',marginBottom:'10px'}}>QR Decompositions</h1>
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


// // tables-optimized: v4 | 2026-05-18 | 2 tables (obj4 comparison, obj11 summary capstone)
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
//   "QR decomposition",
//   "QR factorization",
//   "Householder reflections",
//   "Gram-Schmidt QR",
//   "Givens rotations",
//   "QR least squares",
//   "thin QR full QR",
//   "QR eigenvalue algorithm",
//   "orthogonal triangular factorization",
//   "QR numerical stability",
//   "condition number QR",
//   "modified Gram-Schmidt QR",
//   "QR decomposition example",
//   "orthonormal columns matrix"
// ]

//   const linkStyle = 'color: inherit; text-decoration: underline;'

//   // ---------- TABLES ----------

//   // obj4 — comparison: thin QR vs full QR
//   const obj4Table = `
// <table class="styled-table" style="border-collapse: collapse; width: 75%;margin:auto; background: white; box-shadow: 0 2px 10px rgba(0,0,0,0.1); border-radius: 8px; overflow: hidden; font-family: Arial, sans-serif;">
//   <thead>
//     <tr>
//       <th style="${tableHeaders.comparison}">Variant</th>
//       <th style="${tableHeaders.comparison} text-align: center;">Q dimensions</th>
//       <th style="${tableHeaders.comparison} text-align: center;">R dimensions</th>
//       <th style="${tableHeaders.comparison}">What is captured</th>
//       <th style="${tableHeaders.comparison}">When required</th>
//     </tr>
//   </thead>
//   <tbody>
//     <tr style="background: #f8f9fa;">
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Thin (reduced) QR</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e; text-align: center;">m × n with orthonormal columns</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e; text-align: center;">n × n upper triangular</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">an orthonormal basis for Col(A)</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">system solving, <a href="/linear-algebra/orthogonality/least-squares" style="${linkStyle}">least squares</a> — the usual default</td>
//     </tr>
//     <tr>
//       <td style="padding: 12px 15px; font-weight: bold; color: #06357a;">Full QR</td>
//       <td style="padding: 12px 15px; color: #34495e; text-align: center;">m × m, fully orthogonal</td>
//       <td style="padding: 12px 15px; color: #34495e; text-align: center;">m × n (n × n upper block, then m − n rows of zeros)</td>
//       <td style="padding: 12px 15px; color: #34495e;">orthonormal bases for both Col(A) and Col(A)<sup>⊥</sup></td>
//       <td style="padding: 12px 15px; color: #34495e;">extracting a basis for the <a href="/linear-algebra/vector-spaces/fundamental-spaces" style="${linkStyle}">left null space</a> of A</td>
//     </tr>
//   </tbody>
// </table>
// `

//   // obj11 — summary capstone: four QR computation methods
//   // obj11 — four algorithms, one factorization, sorted by numerical standing
//   const qrRoutes = {
//     kicker: 'Decompositions \u00B7 QR',
//     title: 'Four routes to the same factorization',
//     tallyLabel: 'methods',
//     intro: 'All four produce $A = QR$ and none is a variant of the others in output \u2014 they differ only in how they get there and how much accuracy survives the trip. The split below is by numerical standing, which is the column that decides in practice.',
//     footnote: 'Two of these are used and two are taught. Gram\u2013Schmidt makes the connection between orthogonalization and QR visible, which is why it appears in every course; Householder and Givens are what libraries actually call, because backward stability is the property that matters once the matrix is anything other than well behaved.',
//     groups: [
//       {
//         heading: 'Orthogonalization \u2014 build Q a column at a time',
//         identities: [
//           {
//             name: 'Classical Gram\u2013Schmidt',
//             anchor: '#2',
//             formula: '$\\mathbf{q}_j = \\mathbf{a}_j - \\sum_{i<j} \\operatorname{proj}_{\\mathbf{q}_i}(\\mathbf{a}_j)$',
//             condition: 'unstable \u2014 loses orthogonality',
//             strict: true,
//             note: 'Each column is orthogonalized against the **original** earlier columns. In exact arithmetic this is correct; in floating point the accumulated rounding means $Q^{\\mathsf{T}}Q$ drifts measurably from $I$, and badly when the columns are nearly dependent. Worth knowing as the definition, not as a method.',
//           },
//           {
//             name: 'Modified Gram\u2013Schmidt',
//             anchor: '#9',
//             formula: 'subtract each projection immediately',
//             condition: 'better, still not backward stable',
//             note: 'The same arithmetic reassociated: update the remaining columns in place after each subtraction rather than accumulating. Substantially more accurate than the classical form for no extra cost, which is why it is the version to use if [Gram\u2013Schmidt](!/linear-algebra/orthogonality/gram-schmidt) is used at all.',
//           },
//         ],
//       },
//       {
//         heading: 'Triangularization \u2014 zero out A instead',
//         identities: [
//           {
//             name: 'Householder reflections',
//             anchor: '#3',
//             formula: '$H = I - 2\\mathbf{v}\\mathbf{v}^{\\mathsf{T}} / \\mathbf{v}^{\\mathsf{T}}\\mathbf{v}$',
//             condition: 'backward stable \u2014 the default',
//             key: true,
//             note: 'One reflection per column zeros everything below the pivot at once. $Q$ arrives as a product of reflections rather than being built directly, which is what keeps it orthogonal to machine precision. This is what a numerical library calls unless told otherwise.',
//           },
//           {
//             name: 'Givens rotations',
//             anchor: '#3',
//             formula: 'a plane rotation per entry',
//             condition: 'backward stable; local',
//             note: 'Zeros one entry at a time instead of a whole column. Slower on a dense matrix, but each rotation touches only two rows \u2014 so a sparse matrix stays sparse, and the work can be parallelised. The reason to choose it is structure, not speed.',
//           },
//         ],
//       },
//     ],
//   }

// // const sectionsContent = {
// //   obj1: {
// //     title: `What QR Decomposition Is`,
// //     content: `An $m \\times n$ [matrix](!/linear-algebra/matrix) $A$ with $m \\geq n$ and [linearly independent](!/linear-algebra/vector-spaces/linear-independence) columns factors as

// // $$A = QR$$

// // where $Q$ is $m \\times n$ with [orthonormal](!/linear-algebra/orthogonality/orthogonal-sets) columns and $R$ is $n \\times n$ upper [triangular](!/linear-algebra/matrix/types) with positive diagonal entries.

// // The columns of $Q$ form an orthonormal [basis](!/linear-algebra/vector-spaces) for the column space of $A$. The matrix $R$ stores the coefficients: each column of $A$ is a linear combination of the columns of $Q$ with weights given by the corresponding column of $R$. The upper triangular structure of $R$ reflects the sequential nature of the orthogonalization — each column depends only on the columns that came before it.`,
// //     before: ``,
// //     after: ``,
// //     link: ``,
// //   },
// //   obj2: {
// //     title: `QR via Gram-Schmidt`,
// //     content: `Applying the [Gram-Schmidt process](!/linear-algebra/orthogonality/gram-schmidt) to the columns $\\mathbf{a}_1, \\dots, \\mathbf{a}_n$ of $A$ produces orthonormal vectors $\\mathbf{q}_1, \\dots, \\mathbf{q}_n$. These become the columns of $Q$.

// // The entries of $R$ are the dot products computed during Gram-Schmidt: $R_{ij} = \\mathbf{q}_i \\cdot \\mathbf{a}_j$ for $i \\leq j$, and $R_{ij} = 0$ for $i > j$. Each column of $A$ decomposes as

// // $$\\mathbf{a}_j = R_{1j}\\mathbf{q}_1 + R_{2j}\\mathbf{q}_2 + \\cdots + R_{jj}\\mathbf{q}_j$$

// // The entry $R_{jj} = \\|\\mathbf{u}_j\\|$ (the norm of the $j$-th orthogonal vector before normalization) is always positive, which makes $R$ unique.

// // ## Worked Example

// // For $A = \\begin{pmatrix} 1 & 1 \\\\ 0 & 1 \\\\ 1 & 0 \\end{pmatrix}$: Gram-Schmidt on the two columns gives $\\mathbf{q}_1 = \\frac{1}{\\sqrt{2}}(1, 0, 1)^T$ and $\\mathbf{q}_2 = \\frac{1}{\\sqrt{6}}(1, 2, -1)^T$. Then $R = \\begin{pmatrix} \\sqrt{2} & 1/\\sqrt{2} \\\\ 0 & 3/\\sqrt{6} \\end{pmatrix}$ and $A = QR$.`,
// //     before: ``,
// //     after: ``,
// //     link: ``,
// //   },
// //   obj3: {
// //     title: `QR via Householder Reflections`,
// //     content: `A Householder reflection is an [orthogonal](!/linear-algebra/matrix/types) matrix $H = I - 2\\mathbf{v}\\mathbf{v}^T/(\\mathbf{v}^T\\mathbf{v})$ that reflects $\\mathbb{R}^m$ across the hyperplane perpendicular to $\\mathbf{v}$. By choosing $\\mathbf{v}$ appropriately, a single Householder reflection zeros out all entries below the pivot in one column.

// // Applying Householder reflections sequentially — one per column — produces $H_n \\cdots H_2 H_1 A = R$. Since each $H_i$ is orthogonal, $Q = H_1 H_2 \\cdots H_n$ is orthogonal, giving $A = QR$.

// // Householder QR is more numerically stable than Gram-Schmidt. It achieves backward stability — the computed factors $Q$ and $R$ satisfy $QR = A + E$ where $\\|E\\|$ is on the order of machine precision times $\\|A\\|$. This makes Householder QR the standard algorithm in numerical libraries.`,
// //     before: ``,
// //     after: ``,
// //     link: ``,
// //   },
// //   obj4: {
// //     title: `Thin QR vs. Full QR`,
// //     content: `The thin (reduced) QR factorization has $Q_1$ of size $m \\times n$ with orthonormal columns and $R_1$ of size $n \\times n$ upper triangular: $A = Q_1 R_1$. This is the version produced by Gram-Schmidt and is sufficient for most applications.

// // The full QR factorization extends $Q_1$ to a square $m \\times m$ orthogonal matrix $Q$ by appending $m - n$ columns forming an orthonormal basis for $\\text{Col}(A)^\\perp$. The factor $R$ is extended to $m \\times n$ by appending $m - n$ rows of zeros: $A = QR$.

// // The full version is needed when the [orthogonal complement](!/linear-algebra/orthogonality) of the column space is required — for instance, when extracting a basis for the [left null space](!/linear-algebra/vector-spaces/fundamental-spaces). The thin version is more economical for system solving and [least squares](!/linear-algebra/orthogonality/least-squares).

// // The two variants compare cleanly on the dimensions of their factors and what each one captures.`,
// //     before: ``,
// //     after: ``,
// //     link: ``,
// //   },
// //   obj5: {
// //     title: `Existence and Uniqueness`,
// //     content: `Every $m \\times n$ matrix with $m \\geq n$ and linearly independent columns has a thin QR factorization. Every $m \\times n$ matrix (regardless of rank) has a full QR factorization.

// // The thin QR factorization with positive diagonal entries on $R$ is unique. If negative diagonal entries are permitted, the factorization is not unique — signs can be redistributed between $Q$ and $R$ (multiplying a column of $Q$ by $-1$ and the corresponding row of $R$ by $-1$ preserves the product). The convention of positive diagonal entries on $R$ resolves this ambiguity.`,
// //     before: ``,
// //     after: ``,
// //     link: ``,
// //   },
// //   obj6: {
// //     title: `Solving Least Squares with QR`,
// //     content: `The [normal equations](!/linear-algebra/orthogonality/least-squares) $A^TA\\hat{\\mathbf{x}} = A^T\\mathbf{b}$ transform under $A = QR$. Since $A^TA = R^TQ^TQR = R^TR$ and $A^T\\mathbf{b} = R^TQ^T\\mathbf{b}$, the normal equations become $R^TR\\hat{\\mathbf{x}} = R^TQ^T\\mathbf{b}$. Canceling $R^T$ (invertible because $R$ has positive diagonal):

// // $$R\\hat{\\mathbf{x}} = Q^T\\mathbf{b}$$

// // The right-hand side $Q^T\\mathbf{b}$ is computed by $n$ [dot products](!/linear-algebra/vectors/dot-product). The system $R\\hat{\\mathbf{x}} = Q^T\\mathbf{b}$ is upper triangular, solved by back substitution in $O(n^2)$ operations.

// // The critical advantage over the normal equations is numerical. Forming $A^TA$ squares the [condition number](!/linear-algebra/matrix/rank): $\\kappa(A^TA) = \\kappa(A)^2$. If $A$ has condition number $10^6$, the normal equations work with condition number $10^{12}$, losing $12$ digits of accuracy in double precision. QR avoids this squaring and works with the original condition number $10^6$.`,
// //     before: ``,
// //     after: ``,
// //     link: ``,
// //   },
// //   obj7: {
// //     title: `The QR Algorithm for Eigenvalues`,
// //     content: `The QR algorithm is the standard method for computing [eigenvalues](!/linear-algebra/eigen) of general (non-[symmetric](!/linear-algebra/matrix/types)) matrices. It proceeds iteratively:

// // Set $A_0 = A$. At each step, compute the QR factorization $A_k = Q_k R_k$, then form $A_{k+1} = R_k Q_k$.

// // Under mild conditions, $A_k$ converges to an upper triangular matrix with the eigenvalues on the diagonal. The convergence is driven by the fact that $A_{k+1} = Q_k^T A_k Q_k$ — each iteration is a [similarity](!/linear-algebra/transformations/basis-change) transformation that preserves the eigenvalues while driving the sub-diagonal entries toward zero.

// // With shifts (replacing $A_k$ by $A_k - \\sigma_k I$ before factoring and adding $\\sigma_k I$ back), convergence accelerates dramatically — cubic convergence for symmetric matrices with the Wilkinson shift. The QR algorithm computes eigenvalues without ever forming the [characteristic polynomial](!/linear-algebra/eigen/characteristic-equation), avoiding the severe numerical instability of polynomial root-finding.`,
// //     before: ``,
// //     after: ``,
// //     link: ``,
// //   },
// //   obj8: {
// //     title: `Properties of the Factors`,
// //     content: `The orthonormality of $Q$'s columns ($Q^TQ = I_n$) has several immediate consequences.

// // The matrix $QQ^T$ is the [projection](!/linear-algebra/orthogonality/projections) matrix onto $\\text{Col}(A)$. For any $\\mathbf{b}$, $QQ^T\\mathbf{b}$ is the orthogonal projection of $\\mathbf{b}$ onto the column space.

// // Orthogonal multiplication preserves norms: $\\|A\\mathbf{x}\\| = \\|QR\\mathbf{x}\\| = \\|R\\mathbf{x}\\|$, since $\\|Q\\mathbf{y}\\| = \\|\\mathbf{y}\\|$ for any $\\mathbf{y}$. This means $R$ captures all the "size" information of $A$ — the orthogonal factor contributes nothing to stretching or compressing.

// // $R$ is invertible when $A$ has full column rank (the diagonal entries are the norms of the Gram-Schmidt vectors, all positive). The [singular values](!/linear-algebra/decompositions/svd) of $A$ equal the singular values of $R$, since the orthogonal factor does not affect them.`,
// //     before: ``,
// //     after: ``,
// //     link: ``,
// //   },
// //   obj9: {
// //     title: `Gram-Schmidt vs. Householder`,
// //     content: `Classical Gram-Schmidt can lose orthogonality in floating-point arithmetic when the columns of $A$ are nearly [dependent](!/linear-algebra/vector-spaces/linear-independence). The computed $\\mathbf{q}_i$'s may fail to be perpendicular to machine precision, and the errors accumulate with each step.

// // Modified Gram-Schmidt improves stability by updating the remaining vectors in place after each [projection](!/linear-algebra/orthogonality/projections) subtraction, rather than using the original columns throughout. The mathematical result is identical in exact arithmetic, but the numerical behavior is significantly better.

// // Householder reflections provide the strongest stability guarantee. Each reflection zeros an entire column below the diagonal in a single, orthogonally-implemented step. The resulting QR factorization is backward stable — the gold standard in numerical linear algebra.

// // Givens rotations offer a third option, zeroing entries one at a time via plane rotations. They are preferred for sparse matrices, where surgically placed zeros can be introduced without disturbing the existing sparsity structure.

// // In practice, Householder is the default for dense matrices, Givens for sparse ones, and Gram-Schmidt (modified) for situations where the orthogonal factor $Q$ is needed explicitly rather than implicitly.`,
// //     before: ``,
// //     after: ``,
// //     link: ``,
// //   },
// //   obj10: {
// //     title: `QR and Gram-Schmidt: The Connection`,
// //     content: `The [Gram-Schmidt process](!/linear-algebra/orthogonality/gram-schmidt) and the QR decomposition are two descriptions of the same computation.

// // Gram-Schmidt takes the columns of $A$ and produces orthonormal vectors $\\mathbf{q}_1, \\dots, \\mathbf{q}_n$ while recording the coefficients $R_{ij} = \\mathbf{q}_i \\cdot \\mathbf{a}_j$ along the way. Assembling these into matrices gives $A = QR$.

// // Conversely, given $A = QR$, the columns of $Q$ are exactly what Gram-Schmidt would produce, and $R$ stores exactly the dot products Gram-Schmidt would compute. The factorization is the matrix-level summary of the vector-level algorithm.

// // This duality means every theorem about QR has an interpretation in terms of Gram-Schmidt, and vice versa. The QR decomposition is Gram-Schmidt made systematic, portable, and computable in a single matrix equation.`,
// //     before: ``,
// //     after: ``,
// //     link: ``,
// //   },
// //   // NEW capstone section: obj11
// //   obj11: {
// //     title: `Summary: Four Routes to the Same Factorization`,
// //     content: `The QR factorization is unique (with the positive-diagonal convention), but the algorithms that produce it are not. Classical Gram-Schmidt, modified Gram-Schmidt, Householder reflections, and Givens rotations all yield the same $A = QR$ in exact arithmetic, but they differ sharply in numerical stability and in the kinds of matrices they handle most efficiently. The table below collects each method alongside how it operates, its stability behavior, and the setting in which it is the right choice.`,
// //     before: ``,
// //     after: ``,
// //     link: ``,
// //   },
// // }



// // linear-algebra/decompositions/qr — sectionsContent with formula callouts (v1)
// // 3 callouts injected:
// //   obj1 (QR Decomposition) — direct $$ replacement
// //   obj2 (QR Gram-Schmidt R Entries) — inline-promote; dispersed inline R-entry forms consolidated
// //   obj7 (QR Algorithm for Eigenvalues) — inline-promote of the iteration step
// // obj6 R x̂ = Qᵀb display left intact — its data-file entry (Least-Squares via QR) targets the
// // least-squares page, not this one. Worked-example matrices in obj2 preserved.

// const sectionsContent = {
//   obj1: {
//     title: `What QR Decomposition Is`,
//     content: `An $m \\times n$ [matrix](!/linear-algebra/matrix) $A$ with $m \\geq n$ and [linearly independent](!/linear-algebra/vector-spaces/linear-independence) columns factors as

// @academic[formula_callout:qr_decomposition|QR Decomposition|$$A = QR$$]@
// @academic[formulas_link:/linear-algebra/formulas#qr_decomposition]@

// where $Q$ is $m \\times n$ with [orthonormal](!/linear-algebra/orthogonality/orthogonal-sets) columns and $R$ is $n \\times n$ upper [triangular](!/linear-algebra/matrix/types) with positive diagonal entries.

// The columns of $Q$ form an orthonormal [basis](!/linear-algebra/vector-spaces) for the column space of $A$. The matrix $R$ stores the coefficients: each column of $A$ is a linear combination of the columns of $Q$ with weights given by the corresponding column of $R$. The upper triangular structure of $R$ reflects the sequential nature of the orthogonalization — each column depends only on the columns that came before it.`,
//     before: ``,
//     after: ``,
//     link: ``,
//   },
//   obj2: {
//     title: `QR via Gram-Schmidt`,
//     content: `Applying the [Gram-Schmidt process](!/linear-algebra/orthogonality/gram-schmidt) to the columns $\\mathbf{a}_1, \\dots, \\mathbf{a}_n$ of $A$ produces orthonormal vectors $\\mathbf{q}_1, \\dots, \\mathbf{q}_n$. These become the columns of $Q$.

// The entries of $R$ are the dot products computed during Gram-Schmidt:

// @academic[formula_callout:qr_gram_schmidt_r_entries|QR Gram-Schmidt R Entries|$$R_{ij} = \\mathbf{q}_i \\cdot \\mathbf{a}_j \\;\\; (i \\leq j), \\qquad R_{ij} = 0 \\;\\; (i > j), \\qquad R_{jj} = \\|\\mathbf{u}_j\\|$$]@
// @academic[formulas_link:/linear-algebra/formulas#qr_gram_schmidt_r_entries]@

// Each column of $A$ decomposes as

// $$\\mathbf{a}_j = R_{1j}\\mathbf{q}_1 + R_{2j}\\mathbf{q}_2 + \\cdots + R_{jj}\\mathbf{q}_j$$

// The diagonal entry $R_{jj} = \\|\\mathbf{u}_j\\|$ — the norm of the $j$-th orthogonal vector before normalization — is always positive, which makes $R$ unique.

// ## Worked Example

// For $A = \\begin{pmatrix} 1 & 1 \\\\ 0 & 1 \\\\ 1 & 0 \\end{pmatrix}$: Gram-Schmidt on the two columns gives $\\mathbf{q}_1 = \\frac{1}{\\sqrt{2}}(1, 0, 1)^T$ and $\\mathbf{q}_2 = \\frac{1}{\\sqrt{6}}(1, 2, -1)^T$. Then $R = \\begin{pmatrix} \\sqrt{2} & 1/\\sqrt{2} \\\\ 0 & 3/\\sqrt{6} \\end{pmatrix}$ and $A = QR$.`,
//     before: ``,
//     after: ``,
//     link: ``,
//   },
//   obj3: {
//     title: `QR via Householder Reflections`,
//     content: `A Householder reflection is an [orthogonal](!/linear-algebra/matrix/types) matrix $H = I - 2\\mathbf{v}\\mathbf{v}^T/(\\mathbf{v}^T\\mathbf{v})$ that reflects $\\mathbb{R}^m$ across the hyperplane perpendicular to $\\mathbf{v}$. By choosing $\\mathbf{v}$ appropriately, a single Householder reflection zeros out all entries below the pivot in one column.

// Applying Householder reflections sequentially — one per column — produces $H_n \\cdots H_2 H_1 A = R$. Since each $H_i$ is orthogonal, $Q = H_1 H_2 \\cdots H_n$ is orthogonal, giving $A = QR$.

// Householder QR is more numerically stable than Gram-Schmidt. It achieves backward stability — the computed factors $Q$ and $R$ satisfy $QR = A + E$ where $\\|E\\|$ is on the order of machine precision times $\\|A\\|$. This makes Householder QR the standard algorithm in numerical libraries.`,
//     before: ``,
//     after: ``,
//     link: ``,
//   },
//   obj4: {
//     title: `Thin QR vs. Full QR`,
//     content: `The thin (reduced) QR factorization has $Q_1$ of size $m \\times n$ with orthonormal columns and $R_1$ of size $n \\times n$ upper triangular: $A = Q_1 R_1$. This is the version produced by Gram-Schmidt and is sufficient for most applications.

// The full QR factorization extends $Q_1$ to a square $m \\times m$ orthogonal matrix $Q$ by appending $m - n$ columns forming an orthonormal basis for $\\text{Col}(A)^\\perp$. The factor $R$ is extended to $m \\times n$ by appending $m - n$ rows of zeros: $A = QR$.

// The full version is needed when the [orthogonal complement](!/linear-algebra/orthogonality) of the column space is required — for instance, when extracting a basis for the [left null space](!/linear-algebra/vector-spaces/fundamental-spaces). The thin version is more economical for system solving and [least squares](!/linear-algebra/orthogonality/least-squares).

// The two variants compare cleanly on the dimensions of their factors and what each one captures.`,
//     before: ``,
//     after: ``,
//     link: ``,
//   },
//   obj5: {
//     title: `Existence and Uniqueness`,
//     content: `Every $m \\times n$ matrix with $m \\geq n$ and linearly independent columns has a thin QR factorization. Every $m \\times n$ matrix (regardless of rank) has a full QR factorization.

// The thin QR factorization with positive diagonal entries on $R$ is unique. If negative diagonal entries are permitted, the factorization is not unique — signs can be redistributed between $Q$ and $R$ (multiplying a column of $Q$ by $-1$ and the corresponding row of $R$ by $-1$ preserves the product). The convention of positive diagonal entries on $R$ resolves this ambiguity.`,
//     before: ``,
//     after: ``,
//     link: ``,
//   },
//   obj6: {
//     title: `Solving Least Squares with QR`,
//     content: `The [normal equations](!/linear-algebra/orthogonality/least-squares) $A^TA\\hat{\\mathbf{x}} = A^T\\mathbf{b}$ transform under $A = QR$. Since $A^TA = R^TQ^TQR = R^TR$ and $A^T\\mathbf{b} = R^TQ^T\\mathbf{b}$, the normal equations become $R^TR\\hat{\\mathbf{x}} = R^TQ^T\\mathbf{b}$. Canceling $R^T$ (invertible because $R$ has positive diagonal):

// $$R\\hat{\\mathbf{x}} = Q^T\\mathbf{b}$$

// The right-hand side $Q^T\\mathbf{b}$ is computed by $n$ [dot products](!/linear-algebra/vectors/dot-product). The system $R\\hat{\\mathbf{x}} = Q^T\\mathbf{b}$ is upper triangular, solved by back substitution in $O(n^2)$ operations.

// The critical advantage over the normal equations is numerical. Forming $A^TA$ squares the [condition number](!/linear-algebra/matrix/rank): $\\kappa(A^TA) = \\kappa(A)^2$. If $A$ has condition number $10^6$, the normal equations work with condition number $10^{12}$, losing $12$ digits of accuracy in double precision. QR avoids this squaring and works with the original condition number $10^6$.`,
//     before: ``,
//     after: ``,
//     link: ``,
//   },
//   obj7: {
//     title: `The QR Algorithm for Eigenvalues`,
//     content: `The QR algorithm is the standard method for computing [eigenvalues](!/linear-algebra/eigen) of general (non-[symmetric](!/linear-algebra/matrix/types)) matrices. It proceeds iteratively, starting from $A_0 = A$ and at each step factoring and reassembling the product in reversed order:

// @academic[formula_callout:qr_algorithm_for_eigenvalues|QR Algorithm for Eigenvalues|$$A_k = Q_k R_k, \\qquad A_{k+1} = R_k Q_k$$]@
// @academic[formulas_link:/linear-algebra/formulas#qr_algorithm_for_eigenvalues]@

// Under mild conditions, $A_k$ converges to an upper triangular matrix with the eigenvalues on the diagonal. The convergence is driven by the fact that $A_{k+1} = Q_k^T A_k Q_k$ — each iteration is a [similarity](!/linear-algebra/transformations/basis-change) transformation that preserves the eigenvalues while driving the sub-diagonal entries toward zero.

// With shifts (replacing $A_k$ by $A_k - \\sigma_k I$ before factoring and adding $\\sigma_k I$ back), convergence accelerates dramatically — cubic convergence for symmetric matrices with the Wilkinson shift. The QR algorithm computes eigenvalues without ever forming the [characteristic polynomial](!/linear-algebra/eigen/characteristic-equation), avoiding the severe numerical instability of polynomial root-finding.`,
//     before: ``,
//     after: ``,
//     link: ``,
//   },
//   obj8: {
//     title: `Properties of the Factors`,
//     content: `The orthonormality of $Q$'s columns ($Q^TQ = I_n$) has several immediate consequences.

// The matrix $QQ^T$ is the [projection](!/linear-algebra/orthogonality/projections) matrix onto $\\text{Col}(A)$. For any $\\mathbf{b}$, $QQ^T\\mathbf{b}$ is the orthogonal projection of $\\mathbf{b}$ onto the column space.

// Orthogonal multiplication preserves norms: $\\|A\\mathbf{x}\\| = \\|QR\\mathbf{x}\\| = \\|R\\mathbf{x}\\|$, since $\\|Q\\mathbf{y}\\| = \\|\\mathbf{y}\\|$ for any $\\mathbf{y}$. This means $R$ captures all the "size" information of $A$ — the orthogonal factor contributes nothing to stretching or compressing.

// $R$ is invertible when $A$ has full column rank (the diagonal entries are the norms of the Gram-Schmidt vectors, all positive). The [singular values](!/linear-algebra/decompositions/svd) of $A$ equal the singular values of $R$, since the orthogonal factor does not affect them.`,
//     before: ``,
//     after: ``,
//     link: ``,
//   },
//   obj9: {
//     title: `Gram-Schmidt vs. Householder`,
//     content: `Classical Gram-Schmidt can lose orthogonality in floating-point arithmetic when the columns of $A$ are nearly [dependent](!/linear-algebra/vector-spaces/linear-independence). The computed $\\mathbf{q}_i$'s may fail to be perpendicular to machine precision, and the errors accumulate with each step.

// Modified Gram-Schmidt improves stability by updating the remaining vectors in place after each [projection](!/linear-algebra/orthogonality/projections) subtraction, rather than using the original columns throughout. The mathematical result is identical in exact arithmetic, but the numerical behavior is significantly better.

// Householder reflections provide the strongest stability guarantee. Each reflection zeros an entire column below the diagonal in a single, orthogonally-implemented step. The resulting QR factorization is backward stable — the gold standard in numerical linear algebra.

// Givens rotations offer a third option, zeroing entries one at a time via plane rotations. They are preferred for sparse matrices, where surgically placed zeros can be introduced without disturbing the existing sparsity structure.

// In practice, Householder is the default for dense matrices, Givens for sparse ones, and Gram-Schmidt (modified) for situations where the orthogonal factor $Q$ is needed explicitly rather than implicitly.`,
//     before: ``,
//     after: ``,
//     link: ``,
//   },
//   obj10: {
//     title: `QR and Gram-Schmidt: The Connection`,
//     content: `The [Gram-Schmidt process](!/linear-algebra/orthogonality/gram-schmidt) and the QR decomposition are two descriptions of the same computation.

// Gram-Schmidt takes the columns of $A$ and produces orthonormal vectors $\\mathbf{q}_1, \\dots, \\mathbf{q}_n$ while recording the coefficients $R_{ij} = \\mathbf{q}_i \\cdot \\mathbf{a}_j$ along the way. Assembling these into matrices gives $A = QR$.

// Conversely, given $A = QR$, the columns of $Q$ are exactly what Gram-Schmidt would produce, and $R$ stores exactly the dot products Gram-Schmidt would compute. The factorization is the matrix-level summary of the vector-level algorithm.

// This duality means every theorem about QR has an interpretation in terms of Gram-Schmidt, and vice versa. The QR decomposition is Gram-Schmidt made systematic, portable, and computable in a single matrix equation.`,
//     before: ``,
//     after: ``,
//     link: ``,
//   },
//   obj11: {
//     title: `Summary: Four Routes to the Same Factorization`,
//     content: `The QR factorization is unique (with the positive-diagonal convention), but the algorithms that produce it are not. Classical Gram-Schmidt, modified Gram-Schmidt, Householder reflections, and Givens rotations all yield the same $A = QR$ in exact arithmetic, but they differ sharply in numerical stability and in the kinds of matrices they handle most efficiently. The table below collects each method alongside how it operates, its stability behavior, and the setting in which it is the right choice.`,
//     before: ``,
//     after: ``,
//     link: ``,
//   },
// }

// const introContent = {
//   title: `Orthogonal Times Triangular`,
//   content: `The QR decomposition factors a matrix into an orthogonal factor Q and an upper triangular factor R. It is the matrix form of the Gram-Schmidt process, the standard method for least-squares computation, and the foundation of the most widely used eigenvalue algorithm. The orthogonal factor preserves lengths and condition numbers, making QR the numerically safest of the triangular factorizations.`,
// }

// const faqQuestions = {
//   obj1: {
//     question: "What is the QR decomposition?",
//     answer: "The QR decomposition factors an m×n matrix A (with independent columns) as A = QR, where Q has orthonormal columns and R is upper triangular with positive diagonal entries. Q spans the column space of A, and R stores the coefficients expressing A's columns in terms of Q's columns.",
//     sectionId: "1"
//   },
//   obj2: {
//     question: "How is QR computed?",
//     answer: "QR can be computed via Gram-Schmidt orthogonalization, Householder reflections, or Givens rotations. Householder is the default for dense matrices due to its backward stability. Modified Gram-Schmidt is used when Q is needed explicitly. Givens rotations are preferred for sparse matrices.",
//     sectionId: "9"
//   },
//   obj3: {
//     question: "Why is QR better than normal equations for least squares?",
//     answer: "Forming AᵀA squares the condition number of A, amplifying rounding errors. QR reduces least squares to the triangular system Rx̂ = Qᵀb, preserving the original condition number. If A has condition number 10⁶, QR works at 10⁶ while normal equations work at 10¹².",
//     sectionId: "6"
//   },
//   obj4: {
//     question: "What is the difference between thin QR and full QR?",
//     answer: "Thin (reduced) QR has Q of size m×n with orthonormal columns and R of size n×n. Full QR extends Q to a square m×m orthogonal matrix by adding columns spanning the orthogonal complement of Col(A). Thin QR suffices for system solving and least squares; full QR is needed when the left null space basis is required.",
//     sectionId: "4"
//   },
//   obj5: {
//     question: "How does the QR algorithm compute eigenvalues?",
//     answer: "The QR algorithm iterates: factor Aₖ = QₖRₖ, then form Aₖ₊₁ = RₖQₖ. Each step is a similarity transformation preserving eigenvalues while driving sub-diagonal entries toward zero. With shifts, convergence is cubic for symmetric matrices. It avoids the numerical instability of finding roots of the characteristic polynomial.",
//     sectionId: "7"
//   }
// }


// const schemas = {
//   learningResource: {
//     "@context": "https://schema.org",
//     "@type": "LearningResource",
//     "name": "QR Decomposition",
//     "description": "QR decomposition: Gram-Schmidt, Householder, and Givens methods. Thin vs full QR, least-squares solving, the QR eigenvalue algorithm, numerical stability, and factor properties.",
//     "url": "https://www.learnmathclass.com/linear-algebra/decompositions/qr",
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
//       "name": "QR Decomposition"
//     },
//     "teaches": [
//       "QR factorization A = QR definition and structure",
//       "QR via Gram-Schmidt orthogonalization",
//       "QR via Householder reflections",
//       "Thin QR vs full QR decomposition",
//       "Least-squares solving with QR",
//       "The QR algorithm for eigenvalue computation",
//       "Gram-Schmidt vs Householder vs Givens comparison",
//       "Side-by-side comparison of the four routes to QR on stability and use case"
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
//         "name": "QR Decomposition",
//         "item": "https://www.learnmathclass.com/linear-algebra/decompositions/qr"
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
//     obj4Table,
//     qrRoutes,
//     faqQuestions,
//     schemas,
//     seoData: {
//       title: "QR Decomposition: Methods & Applications | Learn Math Class",
//       description: "QR decomposition: Gram-Schmidt, Householder, and Givens methods. Thin vs full QR, least-squares solving, the QR eigenvalue algorithm, numerical stability, and factor properties.",
//       keywords: keyWords.join(", "),
//       url: "/linear-algebra/decompositions/qr",
//       name: "QR Decomposition"
//     },
//   }
// }
//    }

// // export default function PageTemplate({seoData,sectionsContent , introContent}) {
// export default function QRDecompositionPage({
//   seoData,
//   sectionsContent,
//   introContent,
//   obj4Table,
//   qrRoutes,
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
//           <div key={'obj4-table'} style={tableWrapStyle}
//                dangerouslySetInnerHTML={{ __html: obj4Table }} />,
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
//           `The four methods divide cleanly by strategy. The first two build $Q$ directly, orthogonalizing the columns of $A$ one at a time; the second two leave $Q$ implicit and instead apply orthogonal operations to $A$ until what remains is triangular. That difference is what decides the stability, so the grouping below is also the ranking.`,
//           <DiagramFrame
//             key={'obj11-diagram'}
//             id="qr-routes"
//             title="Four routes to the same factorization"
//             source="/linear-algebra/decompositions/qr"
//           >
//             <IdentitySheet data={qrRoutes} theme="navy" variant="ledger" />
//           </DiagramFrame>,
//           `Why the second group wins is worth stating plainly. Building $Q$ by orthogonalization means every column inherits the rounding error of the columns before it, so orthogonality degrades as the computation proceeds — and degrades fastest exactly when the columns are nearly dependent, which is when the factorization was most needed. Householder and Givens never construct $Q$ from the data at all: each step is an orthogonal matrix by construction, and a product of orthogonal matrices is orthogonal whatever the arithmetic did.`,
//           `In practice the choice is narrow. Householder is the default for dense matrices and is what [least squares](#6) routines call. Givens is chosen when the matrix is sparse or when entries arrive one at a time, since a rotation acts on two rows and leaves the rest untouched. Modified Gram–Schmidt survives where the columns of $Q$ are wanted explicitly and progressively — and classical Gram–Schmidt survives as an explanation.`,
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
//    <h1 className='title' style={{marginTop:'0px',marginBottom:'10px'}}>QR Decompositions</h1>
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


// tables-optimized: v4 | 2026-05-18 | 2 tables (obj4 comparison, obj11 summary capstone)
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
  "QR decomposition",
  "QR factorization",
  "Householder reflections",
  "Gram-Schmidt QR",
  "Givens rotations",
  "QR least squares",
  "thin QR full QR",
  "QR eigenvalue algorithm",
  "orthogonal triangular factorization",
  "QR numerical stability",
  "condition number QR",
  "modified Gram-Schmidt QR",
  "QR decomposition example",
  "orthonormal columns matrix"
]

  const linkStyle = 'color: inherit; text-decoration: underline;'

  // ---------- TABLES ----------

  // obj4 — comparison: thin QR vs full QR
  // obj4 — two shapes of the same factorization
  const qrForms = {
    kicker: 'Decompositions \u00B7 QR',
    title: 'Thin QR and full QR',
    tallyLabel: 'forms',
    intro: 'Both reconstruct $A$ exactly. The full form keeps $m - n$ extra columns of $Q$ that multiply against rows of zeros \u2014 useless for the product, and the only route to a basis for the left null space.',
    footnote: 'The extra columns are not redundant so much as unused. They complete $Q$ into a genuine orthogonal matrix, which is what makes $QQ^{\\mathsf{T}} = I$ hold as well as $Q^{\\mathsf{T}}Q = I$ \u2014 and that second identity is what any argument about the [left null space](!/linear-algebra/vector-spaces/fundamental-spaces) needs.',
    slots: [
      { key: 'qdim',     label: 'Q' },
      { key: 'rdim',     label: 'R' },
      { key: 'captures', label: 'bases obtained' },
      { key: 'usedFor',  label: 'used for' },
    ],
    groups: [
      {
        heading: 'The working form',
        types: [
          {
            name: 'Thin QR',
            anchor: '#4',
            shape: 'lower',
            condition: '$m \\geq n$, columns of $A$ independent',
            properties: {
              qdim: '$m \\times n$, orthonormal columns',
              rdim: '$n \\times n$ upper triangular',
              captures: 'a basis for $\\operatorname{Col}(A)$',
              usedFor: 'solving, [least squares](#6)',
            },
            note: 'The default, and what a library returns unless asked otherwise. $Q$ is not square, so $Q^{\\mathsf{T}}Q = I_n$ holds but $QQ^{\\mathsf{T}}$ does not \u2014 which is enough for every computation on this page.',
          },
        ],
      },
      {
        heading: 'The complete form',
        types: [
          {
            name: 'Full QR',
            anchor: '#4',
            shape: 'dense',
            condition: 'same $A$, $Q$ completed to a square',
            properties: {
              qdim: '$m \\times m$, fully orthogonal',
              rdim: '$m \\times n$ \u2014 triangular block, then zeros',
              captures: 'bases for $\\operatorname{Col}(A)$ **and** its complement',
              usedFor: 'left null space, theory',
            },
            note: 'The last $m - n$ columns of $Q$ span the left null space and the last $m - n$ rows of $R$ are zero, so those columns contribute nothing to $QR$. They are carried for what they describe, not for what they compute.',
          },
        ],
      },
    ],
  }

  // obj11 — summary capstone: four QR computation methods
  // obj11 — four algorithms, one factorization, sorted by numerical standing
  const qrRoutes = {
    kicker: 'Decompositions \u00B7 QR',
    title: 'Four routes to the same factorization',
    tallyLabel: 'methods',
    intro: 'All four produce $A = QR$ and none is a variant of the others in output \u2014 they differ only in how they get there and how much accuracy survives the trip. The split below is by numerical standing, which is the column that decides in practice.',
    footnote: 'Two of these are used and two are taught. Gram\u2013Schmidt makes the connection between orthogonalization and QR visible, which is why it appears in every course; Householder and Givens are what libraries actually call, because backward stability is the property that matters once the matrix is anything other than well behaved.',
    groups: [
      {
        heading: 'Orthogonalization \u2014 build Q a column at a time',
        identities: [
          {
            name: 'Classical Gram\u2013Schmidt',
            anchor: '#2',
            formula: '$\\mathbf{q}_j = \\mathbf{a}_j - \\sum_{i<j} \\operatorname{proj}_{\\mathbf{q}_i}(\\mathbf{a}_j)$',
            condition: 'unstable \u2014 loses orthogonality',
            strict: true,
            note: 'Each column is orthogonalized against the **original** earlier columns. In exact arithmetic this is correct; in floating point the accumulated rounding means $Q^{\\mathsf{T}}Q$ drifts measurably from $I$, and badly when the columns are nearly dependent. Worth knowing as the definition, not as a method.',
          },
          {
            name: 'Modified Gram\u2013Schmidt',
            anchor: '#9',
            formula: 'subtract each projection immediately',
            condition: 'better, still not backward stable',
            note: 'The same arithmetic reassociated: update the remaining columns in place after each subtraction rather than accumulating. Substantially more accurate than the classical form for no extra cost, which is why it is the version to use if [Gram\u2013Schmidt](!/linear-algebra/orthogonality/gram-schmidt) is used at all.',
          },
        ],
      },
      {
        heading: 'Triangularization \u2014 zero out A instead',
        identities: [
          {
            name: 'Householder reflections',
            anchor: '#3',
            formula: '$H = I - 2\\mathbf{v}\\mathbf{v}^{\\mathsf{T}} / \\mathbf{v}^{\\mathsf{T}}\\mathbf{v}$',
            condition: 'backward stable \u2014 the default',
            key: true,
            note: 'One reflection per column zeros everything below the pivot at once. $Q$ arrives as a product of reflections rather than being built directly, which is what keeps it orthogonal to machine precision. This is what a numerical library calls unless told otherwise.',
          },
          {
            name: 'Givens rotations',
            anchor: '#3',
            formula: 'a plane rotation per entry',
            condition: 'backward stable; local',
            note: 'Zeros one entry at a time instead of a whole column. Slower on a dense matrix, but each rotation touches only two rows \u2014 so a sparse matrix stays sparse, and the work can be parallelised. The reason to choose it is structure, not speed.',
          },
        ],
      },
    ],
  }

// const sectionsContent = {
//   obj1: {
//     title: `What QR Decomposition Is`,
//     content: `An $m \\times n$ [matrix](!/linear-algebra/matrix) $A$ with $m \\geq n$ and [linearly independent](!/linear-algebra/vector-spaces/linear-independence) columns factors as

// $$A = QR$$

// where $Q$ is $m \\times n$ with [orthonormal](!/linear-algebra/orthogonality/orthogonal-sets) columns and $R$ is $n \\times n$ upper [triangular](!/linear-algebra/matrix/types) with positive diagonal entries.

// The columns of $Q$ form an orthonormal [basis](!/linear-algebra/vector-spaces) for the column space of $A$. The matrix $R$ stores the coefficients: each column of $A$ is a linear combination of the columns of $Q$ with weights given by the corresponding column of $R$. The upper triangular structure of $R$ reflects the sequential nature of the orthogonalization — each column depends only on the columns that came before it.`,
//     before: ``,
//     after: ``,
//     link: ``,
//   },
//   obj2: {
//     title: `QR via Gram-Schmidt`,
//     content: `Applying the [Gram-Schmidt process](!/linear-algebra/orthogonality/gram-schmidt) to the columns $\\mathbf{a}_1, \\dots, \\mathbf{a}_n$ of $A$ produces orthonormal vectors $\\mathbf{q}_1, \\dots, \\mathbf{q}_n$. These become the columns of $Q$.

// The entries of $R$ are the dot products computed during Gram-Schmidt: $R_{ij} = \\mathbf{q}_i \\cdot \\mathbf{a}_j$ for $i \\leq j$, and $R_{ij} = 0$ for $i > j$. Each column of $A$ decomposes as

// $$\\mathbf{a}_j = R_{1j}\\mathbf{q}_1 + R_{2j}\\mathbf{q}_2 + \\cdots + R_{jj}\\mathbf{q}_j$$

// The entry $R_{jj} = \\|\\mathbf{u}_j\\|$ (the norm of the $j$-th orthogonal vector before normalization) is always positive, which makes $R$ unique.

// ## Worked Example

// For $A = \\begin{pmatrix} 1 & 1 \\\\ 0 & 1 \\\\ 1 & 0 \\end{pmatrix}$: Gram-Schmidt on the two columns gives $\\mathbf{q}_1 = \\frac{1}{\\sqrt{2}}(1, 0, 1)^T$ and $\\mathbf{q}_2 = \\frac{1}{\\sqrt{6}}(1, 2, -1)^T$. Then $R = \\begin{pmatrix} \\sqrt{2} & 1/\\sqrt{2} \\\\ 0 & 3/\\sqrt{6} \\end{pmatrix}$ and $A = QR$.`,
//     before: ``,
//     after: ``,
//     link: ``,
//   },
//   obj3: {
//     title: `QR via Householder Reflections`,
//     content: `A Householder reflection is an [orthogonal](!/linear-algebra/matrix/types) matrix $H = I - 2\\mathbf{v}\\mathbf{v}^T/(\\mathbf{v}^T\\mathbf{v})$ that reflects $\\mathbb{R}^m$ across the hyperplane perpendicular to $\\mathbf{v}$. By choosing $\\mathbf{v}$ appropriately, a single Householder reflection zeros out all entries below the pivot in one column.

// Applying Householder reflections sequentially — one per column — produces $H_n \\cdots H_2 H_1 A = R$. Since each $H_i$ is orthogonal, $Q = H_1 H_2 \\cdots H_n$ is orthogonal, giving $A = QR$.

// Householder QR is more numerically stable than Gram-Schmidt. It achieves backward stability — the computed factors $Q$ and $R$ satisfy $QR = A + E$ where $\\|E\\|$ is on the order of machine precision times $\\|A\\|$. This makes Householder QR the standard algorithm in numerical libraries.`,
//     before: ``,
//     after: ``,
//     link: ``,
//   },
//   obj4: {
//     title: `Thin QR vs. Full QR`,
//     content: `The thin (reduced) QR factorization has $Q_1$ of size $m \\times n$ with orthonormal columns and $R_1$ of size $n \\times n$ upper triangular: $A = Q_1 R_1$. This is the version produced by Gram-Schmidt and is sufficient for most applications.

// The full QR factorization extends $Q_1$ to a square $m \\times m$ orthogonal matrix $Q$ by appending $m - n$ columns forming an orthonormal basis for $\\text{Col}(A)^\\perp$. The factor $R$ is extended to $m \\times n$ by appending $m - n$ rows of zeros: $A = QR$.

// The full version is needed when the [orthogonal complement](!/linear-algebra/orthogonality) of the column space is required — for instance, when extracting a basis for the [left null space](!/linear-algebra/vector-spaces/fundamental-spaces). The thin version is more economical for system solving and [least squares](!/linear-algebra/orthogonality/least-squares).

// The two variants compare cleanly on the dimensions of their factors and what each one captures.`,
//     before: ``,
//     after: ``,
//     link: ``,
//   },
//   obj5: {
//     title: `Existence and Uniqueness`,
//     content: `Every $m \\times n$ matrix with $m \\geq n$ and linearly independent columns has a thin QR factorization. Every $m \\times n$ matrix (regardless of rank) has a full QR factorization.

// The thin QR factorization with positive diagonal entries on $R$ is unique. If negative diagonal entries are permitted, the factorization is not unique — signs can be redistributed between $Q$ and $R$ (multiplying a column of $Q$ by $-1$ and the corresponding row of $R$ by $-1$ preserves the product). The convention of positive diagonal entries on $R$ resolves this ambiguity.`,
//     before: ``,
//     after: ``,
//     link: ``,
//   },
//   obj6: {
//     title: `Solving Least Squares with QR`,
//     content: `The [normal equations](!/linear-algebra/orthogonality/least-squares) $A^TA\\hat{\\mathbf{x}} = A^T\\mathbf{b}$ transform under $A = QR$. Since $A^TA = R^TQ^TQR = R^TR$ and $A^T\\mathbf{b} = R^TQ^T\\mathbf{b}$, the normal equations become $R^TR\\hat{\\mathbf{x}} = R^TQ^T\\mathbf{b}$. Canceling $R^T$ (invertible because $R$ has positive diagonal):

// $$R\\hat{\\mathbf{x}} = Q^T\\mathbf{b}$$

// The right-hand side $Q^T\\mathbf{b}$ is computed by $n$ [dot products](!/linear-algebra/vectors/dot-product). The system $R\\hat{\\mathbf{x}} = Q^T\\mathbf{b}$ is upper triangular, solved by back substitution in $O(n^2)$ operations.

// The critical advantage over the normal equations is numerical. Forming $A^TA$ squares the [condition number](!/linear-algebra/matrix/rank): $\\kappa(A^TA) = \\kappa(A)^2$. If $A$ has condition number $10^6$, the normal equations work with condition number $10^{12}$, losing $12$ digits of accuracy in double precision. QR avoids this squaring and works with the original condition number $10^6$.`,
//     before: ``,
//     after: ``,
//     link: ``,
//   },
//   obj7: {
//     title: `The QR Algorithm for Eigenvalues`,
//     content: `The QR algorithm is the standard method for computing [eigenvalues](!/linear-algebra/eigen) of general (non-[symmetric](!/linear-algebra/matrix/types)) matrices. It proceeds iteratively:

// Set $A_0 = A$. At each step, compute the QR factorization $A_k = Q_k R_k$, then form $A_{k+1} = R_k Q_k$.

// Under mild conditions, $A_k$ converges to an upper triangular matrix with the eigenvalues on the diagonal. The convergence is driven by the fact that $A_{k+1} = Q_k^T A_k Q_k$ — each iteration is a [similarity](!/linear-algebra/transformations/basis-change) transformation that preserves the eigenvalues while driving the sub-diagonal entries toward zero.

// With shifts (replacing $A_k$ by $A_k - \\sigma_k I$ before factoring and adding $\\sigma_k I$ back), convergence accelerates dramatically — cubic convergence for symmetric matrices with the Wilkinson shift. The QR algorithm computes eigenvalues without ever forming the [characteristic polynomial](!/linear-algebra/eigen/characteristic-equation), avoiding the severe numerical instability of polynomial root-finding.`,
//     before: ``,
//     after: ``,
//     link: ``,
//   },
//   obj8: {
//     title: `Properties of the Factors`,
//     content: `The orthonormality of $Q$'s columns ($Q^TQ = I_n$) has several immediate consequences.

// The matrix $QQ^T$ is the [projection](!/linear-algebra/orthogonality/projections) matrix onto $\\text{Col}(A)$. For any $\\mathbf{b}$, $QQ^T\\mathbf{b}$ is the orthogonal projection of $\\mathbf{b}$ onto the column space.

// Orthogonal multiplication preserves norms: $\\|A\\mathbf{x}\\| = \\|QR\\mathbf{x}\\| = \\|R\\mathbf{x}\\|$, since $\\|Q\\mathbf{y}\\| = \\|\\mathbf{y}\\|$ for any $\\mathbf{y}$. This means $R$ captures all the "size" information of $A$ — the orthogonal factor contributes nothing to stretching or compressing.

// $R$ is invertible when $A$ has full column rank (the diagonal entries are the norms of the Gram-Schmidt vectors, all positive). The [singular values](!/linear-algebra/decompositions/svd) of $A$ equal the singular values of $R$, since the orthogonal factor does not affect them.`,
//     before: ``,
//     after: ``,
//     link: ``,
//   },
//   obj9: {
//     title: `Gram-Schmidt vs. Householder`,
//     content: `Classical Gram-Schmidt can lose orthogonality in floating-point arithmetic when the columns of $A$ are nearly [dependent](!/linear-algebra/vector-spaces/linear-independence). The computed $\\mathbf{q}_i$'s may fail to be perpendicular to machine precision, and the errors accumulate with each step.

// Modified Gram-Schmidt improves stability by updating the remaining vectors in place after each [projection](!/linear-algebra/orthogonality/projections) subtraction, rather than using the original columns throughout. The mathematical result is identical in exact arithmetic, but the numerical behavior is significantly better.

// Householder reflections provide the strongest stability guarantee. Each reflection zeros an entire column below the diagonal in a single, orthogonally-implemented step. The resulting QR factorization is backward stable — the gold standard in numerical linear algebra.

// Givens rotations offer a third option, zeroing entries one at a time via plane rotations. They are preferred for sparse matrices, where surgically placed zeros can be introduced without disturbing the existing sparsity structure.

// In practice, Householder is the default for dense matrices, Givens for sparse ones, and Gram-Schmidt (modified) for situations where the orthogonal factor $Q$ is needed explicitly rather than implicitly.`,
//     before: ``,
//     after: ``,
//     link: ``,
//   },
//   obj10: {
//     title: `QR and Gram-Schmidt: The Connection`,
//     content: `The [Gram-Schmidt process](!/linear-algebra/orthogonality/gram-schmidt) and the QR decomposition are two descriptions of the same computation.

// Gram-Schmidt takes the columns of $A$ and produces orthonormal vectors $\\mathbf{q}_1, \\dots, \\mathbf{q}_n$ while recording the coefficients $R_{ij} = \\mathbf{q}_i \\cdot \\mathbf{a}_j$ along the way. Assembling these into matrices gives $A = QR$.

// Conversely, given $A = QR$, the columns of $Q$ are exactly what Gram-Schmidt would produce, and $R$ stores exactly the dot products Gram-Schmidt would compute. The factorization is the matrix-level summary of the vector-level algorithm.

// This duality means every theorem about QR has an interpretation in terms of Gram-Schmidt, and vice versa. The QR decomposition is Gram-Schmidt made systematic, portable, and computable in a single matrix equation.`,
//     before: ``,
//     after: ``,
//     link: ``,
//   },
//   // NEW capstone section: obj11
//   obj11: {
//     title: `Summary: Four Routes to the Same Factorization`,
//     content: `The QR factorization is unique (with the positive-diagonal convention), but the algorithms that produce it are not. Classical Gram-Schmidt, modified Gram-Schmidt, Householder reflections, and Givens rotations all yield the same $A = QR$ in exact arithmetic, but they differ sharply in numerical stability and in the kinds of matrices they handle most efficiently. The table below collects each method alongside how it operates, its stability behavior, and the setting in which it is the right choice.`,
//     before: ``,
//     after: ``,
//     link: ``,
//   },
// }



// linear-algebra/decompositions/qr — sectionsContent with formula callouts (v1)
// 3 callouts injected:
//   obj1 (QR Decomposition) — direct $$ replacement
//   obj2 (QR Gram-Schmidt R Entries) — inline-promote; dispersed inline R-entry forms consolidated
//   obj7 (QR Algorithm for Eigenvalues) — inline-promote of the iteration step
// obj6 R x̂ = Qᵀb display left intact — its data-file entry (Least-Squares via QR) targets the
// least-squares page, not this one. Worked-example matrices in obj2 preserved.

const sectionsContent = {
  obj1: {
    title: `What QR Decomposition Is`,
    content: `An $m \\times n$ [matrix](!/linear-algebra/matrix) $A$ with $m \\geq n$ and [linearly independent](!/linear-algebra/vector-spaces/linear-independence) columns factors as

@academic[formula_callout:qr_decomposition|QR Decomposition|$$A = QR$$]@
@academic[formulas_link:/linear-algebra/formulas#qr_decomposition]@

where $Q$ is $m \\times n$ with [orthonormal](!/linear-algebra/orthogonality/orthogonal-sets) columns and $R$ is $n \\times n$ upper [triangular](!/linear-algebra/matrix/types) with positive diagonal entries.

The columns of $Q$ form an orthonormal [basis](!/linear-algebra/vector-spaces) for the column space of $A$. The matrix $R$ stores the coefficients: each column of $A$ is a linear combination of the columns of $Q$ with weights given by the corresponding column of $R$. The upper triangular structure of $R$ reflects the sequential nature of the orthogonalization — each column depends only on the columns that came before it.`,
    before: ``,
    after: ``,
    link: ``,
  },
  notation: {
    title: `QR Notation`,
    lead: `The same two letters appear on this page with three different jobs, and the shapes behind them are never written down. Five marks decide which reading applies.`,
    inherited: `The contract $A = QR$ itself — what each factor carries and why $R$ comes out upper triangular — is set out at [the Gram-Schmidt process](!/linear-algebra/orthogonality/gram-schmidt). The reserved letter $Q$ and the equation $Q^{T}Q = I$ belong to [orthogonal sets](!/linear-algebra/orthogonality/orthogonal-sets), the normal equations and the hat on $\\hat{\\mathbf{x}}$ to [least squares](!/linear-algebra/orthogonality/least-squares).`,
    entries: [
      {
        id: `thin-versus-full`,
        tex: `A = Q_1R_1 \\qquad \\text{versus} \\qquad A = QR`,
        read: `A equals Q one R one — the thin factorisation — against A equals Q R, the full one`,
        means: `The letters match and the matrices do not. Thin: $Q_1$ is $m \\times n$ with orthonormal columns and $R_1$ is $n \\times n$. Full: $Q$ is square $m \\times m$ and $R$ is $m \\times n$, carrying $m - n$ rows of zeros underneath. The line $A = QR$ records neither shape, so which version is meant has to come from the surrounding sentence.`,
        cases: `The subscript $1$ marks the thin factors only when both versions are in play; on their own the thin factors are usually written $Q$ and $R$ as well. Gram-Schmidt produces the thin version, and the full one is reached by appending $m - n$ columns that span the orthogonal complement of the column space.`,
        alsoWritten: `**Reduced** and **economy** are the same thing as thin. Numerical libraries select between them with an argument rather than a symbol, which is why code and page can disagree about what $Q$ names.`,
        confusedWith: `Assuming $Q$ is square. That assumption is harmless for the full version and is exactly where the identity in the next entry stops holding.`,
        sameGlyphElsewhere: ``,
      },
      {
        id: `column-versus-row-identity`,
        tex: `Q^{T}Q = I_n, \\qquad QQ^{T} \\neq I_m`,
        read: `Q transpose Q is the n by n identity; Q Q transpose is not the identity`,
        means: `For a thin $Q$ the order of the product decides whether the statement is true. Orthonormal columns give $Q^{T}Q = I_n$ directly. Reversing the factors gives $QQ^{T}$, the [projection](!/linear-algebra/orthogonality/projections) onto the column space of $A$ — equal to the identity only when $Q$ is square and there is nothing left over to project away.`,
        cases: `In the full factorisation $Q$ is square and both products give $I_m$, which is the case set out at [orthogonal sets](!/linear-algebra/orthogonality/orthogonal-sets). This page needs the other one, and that is why $QQ^{T}$ appears here as a projection matrix rather than as a way of writing $I$.`,
        alsoWritten: `The thin case is sometimes flagged in words as **orthonormal columns** rather than by the equation, precisely to avoid claiming more than holds.`,
        confusedWith: `Calling a thin $Q$ an orthogonal matrix. That name requires a square matrix, and a thin $Q$ has no inverse at all. The practical version of the error is cancelling $QQ^{T}$ inside a longer expression as though it were $I$.`,
        sameGlyphElsewhere: ``,
      },
      {
        id: `positive-diagonal-convention`,
        tex: `R_{jj} = \\|\\mathbf{u}_j\\| > 0`,
        read: `the j-th diagonal entry of R is the norm of the j-th orthogonal vector, and it is positive`,
        means: `Positivity buys uniqueness and is a convention, not something the factorisation forces. Multiplying a column of $Q$ by $-1$ and the matching row of $R$ by $-1$ leaves the product untouched, so without the sign rule an $n$-column matrix has $2^n$ different QR factorisations. The line $A = QR$ records none of that.`,
        cases: `Gram-Schmidt gets the positive diagonal for free, since each $R_{jj}$ is a norm. Householder reflections do not, and numerical libraries generally do not enforce the convention — two correct computed factorisations of one matrix can differ by a column of sign flips with nothing wrong in either.`,
        alsoWritten: `Stated as a condition on $R$ rather than built into the notation: **with the diagonal of** $R$ **kept positive**, appended to the factorisation whenever uniqueness is being claimed.`,
        confusedWith: `Reading **the** QR factorisation as though the article were earned. It is earned only once the sign convention is stated, in the same way that the diagonal of ones earns uniqueness at [LU](!/linear-algebra/decompositions/lower-upper).`,
        sameGlyphElsewhere: ``,
      },
      {
        id: `qr-iteration`,
        tex: `A_k = Q_kR_k, \\qquad A_{k+1} = R_kQ_k`,
        read: `factor A sub k into Q sub k times R sub k, then multiply those same factors back in the opposite order`,
        means: `The letters $Q$ and $R$ name a factorisation everywhere else on this page and an iteration here. The whole method sits in the reversal: the second line multiplies the factors just produced in swapped order, which amounts to $A_{k+1} = Q_k^{T}A_kQ_k$ — a [similarity](!/linear-algebra/transformations/basis-change) transformation, so the eigenvalues survive while the sub-diagonal shrinks.`,
        cases: `The subscript $k$ counts iteration steps. It is the only subscript on the page that indexes time rather than a column, a row or an entry, and $Q_k$ is a different matrix at every step.`,
        alsoWritten: `The shifted form factors $A_k - \\sigma_kI$ and adds $\\sigma_kI$ back afterwards, keeping the same two-line shape with a scalar moved in and out.`,
        confusedWith: `Reading $R_kQ_k$ as a second factorisation, or expecting the reversal to undo the first line. Swapping the order changes the matrix, and repeating the swap is what drives $A_k$ toward upper triangular form with the eigenvalues on its diagonal.`,
        sameGlyphElsewhere: ``,
      },
      {
        id: `householder-outer-inner`,
        tex: `H = I - \\frac{2\\mathbf{v}\\mathbf{v}^{T}}{\\mathbf{v}^{T}\\mathbf{v}}`,
        read: `H equals the identity minus two times v v transpose, over v transpose v`,
        means: `One vector appears four times in two products that are not the same operation. $\\mathbf{v}\\mathbf{v}^{T}$ is an $m \\times m$ matrix of rank one; $\\mathbf{v}^{T}\\mathbf{v}$ is a single number, the squared length. Only the position of the transpose separates them, and it determines the shape of the result.`,
        cases: `The numerator is a matrix and the denominator a scalar, so the fraction is ordinary scaling of a matrix and the subtraction from $I$ is well formed. Writing $\\mathbf{v}$ as a unit vector makes the denominator $1$ and shortens the formula to $I - 2\\mathbf{v}\\mathbf{v}^{T}$, the form most texts quote — the same reflection either way.`,
        alsoWritten: `The rank-one term is sometimes written $\\mathbf{v} \\otimes \\mathbf{v}$ to name the outer product explicitly instead of leaving it to the transpose position.`,
        confusedWith: `Reading the two products as interchangeable. Swapping them makes the subtraction ill-formed in one direction and the division ill-formed in the other, which is a useful check when the formula is being recalled rather than copied.`,
        sameGlyphElsewhere: ``,
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
    title: `QR via Gram-Schmidt`,
    content: `Applying the [Gram-Schmidt process](!/linear-algebra/orthogonality/gram-schmidt) to the columns $\\mathbf{a}_1, \\dots, \\mathbf{a}_n$ of $A$ produces orthonormal vectors $\\mathbf{q}_1, \\dots, \\mathbf{q}_n$. These become the columns of $Q$.

The entries of $R$ are the dot products computed during Gram-Schmidt:

@academic[formula_callout:qr_gram_schmidt_r_entries|QR Gram-Schmidt R Entries|$$R_{ij} = \\mathbf{q}_i \\cdot \\mathbf{a}_j \\;\\; (i \\leq j), \\qquad R_{ij} = 0 \\;\\; (i > j), \\qquad R_{jj} = \\|\\mathbf{u}_j\\|$$]@
@academic[formulas_link:/linear-algebra/formulas#qr_gram_schmidt_r_entries]@

Each column of $A$ decomposes as

$$\\mathbf{a}_j = R_{1j}\\mathbf{q}_1 + R_{2j}\\mathbf{q}_2 + \\cdots + R_{jj}\\mathbf{q}_j$$

The diagonal entry $R_{jj} = \\|\\mathbf{u}_j\\|$ — the norm of the $j$-th orthogonal vector before normalization — is always positive, which makes $R$ unique.

## Worked Example

For $A = \\begin{pmatrix} 1 & 1 \\\\ 0 & 1 \\\\ 1 & 0 \\end{pmatrix}$: Gram-Schmidt on the two columns gives $\\mathbf{q}_1 = \\frac{1}{\\sqrt{2}}(1, 0, 1)^T$ and $\\mathbf{q}_2 = \\frac{1}{\\sqrt{6}}(1, 2, -1)^T$. Then $R = \\begin{pmatrix} \\sqrt{2} & 1/\\sqrt{2} \\\\ 0 & 3/\\sqrt{6} \\end{pmatrix}$ and $A = QR$.`,
    before: ``,
    after: ``,
    link: ``,
  },
  obj3: {
    title: `QR via Householder Reflections`,
    content: `A Householder reflection is an [orthogonal](!/linear-algebra/matrix/types) matrix $H = I - 2\\mathbf{v}\\mathbf{v}^T/(\\mathbf{v}^T\\mathbf{v})$ that reflects $\\mathbb{R}^m$ across the hyperplane perpendicular to $\\mathbf{v}$. By choosing $\\mathbf{v}$ appropriately, a single Householder reflection zeros out all entries below the pivot in one column.

Applying Householder reflections sequentially — one per column — produces $H_n \\cdots H_2 H_1 A = R$. Since each $H_i$ is orthogonal, $Q = H_1 H_2 \\cdots H_n$ is orthogonal, giving $A = QR$.

Householder QR is more numerically stable than Gram-Schmidt. It achieves backward stability — the computed factors $Q$ and $R$ satisfy $QR = A + E$ where $\\|E\\|$ is on the order of machine precision times $\\|A\\|$. This makes Householder QR the standard algorithm in numerical libraries.`,
    before: ``,
    after: ``,
    link: ``,
  },
  obj4: {
    title: `Thin QR vs. Full QR`,
    content: `The thin (reduced) QR factorization has $Q_1$ of size $m \\times n$ with orthonormal columns and $R_1$ of size $n \\times n$ upper triangular: $A = Q_1 R_1$. This is the version produced by Gram-Schmidt and is sufficient for most applications.

The full QR factorization extends $Q_1$ to a square $m \\times m$ orthogonal matrix $Q$ by appending $m - n$ columns forming an orthonormal basis for $\\text{Col}(A)^\\perp$. The factor $R$ is extended to $m \\times n$ by appending $m - n$ rows of zeros: $A = QR$.

The full version is needed when the [orthogonal complement](!/linear-algebra/orthogonality) of the column space is required — for instance, when extracting a basis for the [left null space](!/linear-algebra/vector-spaces/fundamental-spaces). The thin version is more economical for system solving and [least squares](!/linear-algebra/orthogonality/least-squares).

The two variants compare cleanly on the dimensions of their factors and what each one captures.`,
    before: ``,
    after: ``,
    link: ``,
  },
  obj5: {
    title: `Existence and Uniqueness`,
    content: `Every $m \\times n$ matrix with $m \\geq n$ and linearly independent columns has a thin QR factorization. Every $m \\times n$ matrix (regardless of rank) has a full QR factorization.

The thin QR factorization with positive diagonal entries on $R$ is unique. If negative diagonal entries are permitted, the factorization is not unique — signs can be redistributed between $Q$ and $R$ (multiplying a column of $Q$ by $-1$ and the corresponding row of $R$ by $-1$ preserves the product). The convention of positive diagonal entries on $R$ resolves this ambiguity.`,
    before: ``,
    after: ``,
    link: ``,
  },
  obj6: {
    title: `Solving Least Squares with QR`,
    content: `The [normal equations](!/linear-algebra/orthogonality/least-squares) $A^TA\\hat{\\mathbf{x}} = A^T\\mathbf{b}$ transform under $A = QR$. Since $A^TA = R^TQ^TQR = R^TR$ and $A^T\\mathbf{b} = R^TQ^T\\mathbf{b}$, the normal equations become $R^TR\\hat{\\mathbf{x}} = R^TQ^T\\mathbf{b}$. Canceling $R^T$ (invertible because $R$ has positive diagonal):

$$R\\hat{\\mathbf{x}} = Q^T\\mathbf{b}$$

The right-hand side $Q^T\\mathbf{b}$ is computed by $n$ [dot products](!/linear-algebra/vectors/dot-product). The system $R\\hat{\\mathbf{x}} = Q^T\\mathbf{b}$ is upper triangular, solved by back substitution in $O(n^2)$ operations.

The critical advantage over the normal equations is numerical. Forming $A^TA$ squares the [condition number](!/linear-algebra/matrix/rank): $\\kappa(A^TA) = \\kappa(A)^2$. If $A$ has condition number $10^6$, the normal equations work with condition number $10^{12}$, losing $12$ digits of accuracy in double precision. QR avoids this squaring and works with the original condition number $10^6$.`,
    before: ``,
    after: ``,
    link: ``,
  },
  obj7: {
    title: `The QR Algorithm for Eigenvalues`,
    content: `The QR algorithm is the standard method for computing [eigenvalues](!/linear-algebra/eigen) of general (non-[symmetric](!/linear-algebra/matrix/types)) matrices. It proceeds iteratively, starting from $A_0 = A$ and at each step factoring and reassembling the product in reversed order:

@academic[formula_callout:qr_algorithm_for_eigenvalues|QR Algorithm for Eigenvalues|$$A_k = Q_k R_k, \\qquad A_{k+1} = R_k Q_k$$]@
@academic[formulas_link:/linear-algebra/formulas#qr_algorithm_for_eigenvalues]@

Under mild conditions, $A_k$ converges to an upper triangular matrix with the eigenvalues on the diagonal. The convergence is driven by the fact that $A_{k+1} = Q_k^T A_k Q_k$ — each iteration is a [similarity](!/linear-algebra/transformations/basis-change) transformation that preserves the eigenvalues while driving the sub-diagonal entries toward zero.

With shifts (replacing $A_k$ by $A_k - \\sigma_k I$ before factoring and adding $\\sigma_k I$ back), convergence accelerates dramatically — cubic convergence for symmetric matrices with the Wilkinson shift. The QR algorithm computes eigenvalues without ever forming the [characteristic polynomial](!/linear-algebra/eigen/characteristic-equation), avoiding the severe numerical instability of polynomial root-finding.`,
    before: ``,
    after: ``,
    link: ``,
  },
  obj8: {
    title: `Properties of the Factors`,
    content: `The orthonormality of $Q$'s columns ($Q^TQ = I_n$) has several immediate consequences.

The matrix $QQ^T$ is the [projection](!/linear-algebra/orthogonality/projections) matrix onto $\\text{Col}(A)$. For any $\\mathbf{b}$, $QQ^T\\mathbf{b}$ is the orthogonal projection of $\\mathbf{b}$ onto the column space.

Orthogonal multiplication preserves norms: $\\|A\\mathbf{x}\\| = \\|QR\\mathbf{x}\\| = \\|R\\mathbf{x}\\|$, since $\\|Q\\mathbf{y}\\| = \\|\\mathbf{y}\\|$ for any $\\mathbf{y}$. This means $R$ captures all the "size" information of $A$ — the orthogonal factor contributes nothing to stretching or compressing.

$R$ is invertible when $A$ has full column rank (the diagonal entries are the norms of the Gram-Schmidt vectors, all positive). The [singular values](!/linear-algebra/decompositions/svd) of $A$ equal the singular values of $R$, since the orthogonal factor does not affect them.`,
    before: ``,
    after: ``,
    link: ``,
  },
  obj9: {
    title: `Gram-Schmidt vs. Householder`,
    content: `Classical Gram-Schmidt can lose orthogonality in floating-point arithmetic when the columns of $A$ are nearly [dependent](!/linear-algebra/vector-spaces/linear-independence). The computed $\\mathbf{q}_i$'s may fail to be perpendicular to machine precision, and the errors accumulate with each step.

Modified Gram-Schmidt improves stability by updating the remaining vectors in place after each [projection](!/linear-algebra/orthogonality/projections) subtraction, rather than using the original columns throughout. The mathematical result is identical in exact arithmetic, but the numerical behavior is significantly better.

Householder reflections provide the strongest stability guarantee. Each reflection zeros an entire column below the diagonal in a single, orthogonally-implemented step. The resulting QR factorization is backward stable — the gold standard in numerical linear algebra.

Givens rotations offer a third option, zeroing entries one at a time via plane rotations. They are preferred for sparse matrices, where surgically placed zeros can be introduced without disturbing the existing sparsity structure.

In practice, Householder is the default for dense matrices, Givens for sparse ones, and Gram-Schmidt (modified) for situations where the orthogonal factor $Q$ is needed explicitly rather than implicitly.`,
    before: ``,
    after: ``,
    link: ``,
  },
  obj10: {
    title: `QR and Gram-Schmidt: The Connection`,
    content: `The [Gram-Schmidt process](!/linear-algebra/orthogonality/gram-schmidt) and the QR decomposition are two descriptions of the same computation.

Gram-Schmidt takes the columns of $A$ and produces orthonormal vectors $\\mathbf{q}_1, \\dots, \\mathbf{q}_n$ while recording the coefficients $R_{ij} = \\mathbf{q}_i \\cdot \\mathbf{a}_j$ along the way. Assembling these into matrices gives $A = QR$.

Conversely, given $A = QR$, the columns of $Q$ are exactly what Gram-Schmidt would produce, and $R$ stores exactly the dot products Gram-Schmidt would compute. The factorization is the matrix-level summary of the vector-level algorithm.

This duality means every theorem about QR has an interpretation in terms of Gram-Schmidt, and vice versa. The QR decomposition is Gram-Schmidt made systematic, portable, and computable in a single matrix equation.`,
    before: ``,
    after: ``,
    link: ``,
  },
  obj11: {
    title: `Summary: Four Routes to the Same Factorization`,
    content: `The QR factorization is unique (with the positive-diagonal convention), but the algorithms that produce it are not. Classical Gram-Schmidt, modified Gram-Schmidt, Householder reflections, and Givens rotations all yield the same $A = QR$ in exact arithmetic, but they differ sharply in numerical stability and in the kinds of matrices they handle most efficiently. The table below collects each method alongside how it operates, its stability behavior, and the setting in which it is the right choice.`,
    before: ``,
    after: ``,
    link: ``,
  },
}

const introContent = {
  title: `Orthogonal Times Triangular`,
  content: `The QR decomposition factors a matrix into an orthogonal factor Q and an upper triangular factor R. It is the matrix form of the Gram-Schmidt process, the standard method for least-squares computation, and the foundation of the most widely used eigenvalue algorithm. The orthogonal factor preserves lengths and condition numbers, making QR the numerically safest of the triangular factorizations.`,
}

const faqQuestions = {
  obj1: {
    question: "What is the QR decomposition?",
    answer: "The QR decomposition factors an m×n matrix A (with independent columns) as A = QR, where Q has orthonormal columns and R is upper triangular with positive diagonal entries. Q spans the column space of A, and R stores the coefficients expressing A's columns in terms of Q's columns.",
    sectionId: "1"
  },
  obj2: {
    question: "How is QR computed?",
    answer: "QR can be computed via Gram-Schmidt orthogonalization, Householder reflections, or Givens rotations. Householder is the default for dense matrices due to its backward stability. Modified Gram-Schmidt is used when Q is needed explicitly. Givens rotations are preferred for sparse matrices.",
    sectionId: "9"
  },
  obj3: {
    question: "Why is QR better than normal equations for least squares?",
    answer: "Forming AᵀA squares the condition number of A, amplifying rounding errors. QR reduces least squares to the triangular system Rx̂ = Qᵀb, preserving the original condition number. If A has condition number 10⁶, QR works at 10⁶ while normal equations work at 10¹².",
    sectionId: "6"
  },
  obj4: {
    question: "What is the difference between thin QR and full QR?",
    answer: "Thin (reduced) QR has Q of size m×n with orthonormal columns and R of size n×n. Full QR extends Q to a square m×m orthogonal matrix by adding columns spanning the orthogonal complement of Col(A). Thin QR suffices for system solving and least squares; full QR is needed when the left null space basis is required.",
    sectionId: "4"
  },
  obj5: {
    question: "How does the QR algorithm compute eigenvalues?",
    answer: "The QR algorithm iterates: factor Aₖ = QₖRₖ, then form Aₖ₊₁ = RₖQₖ. Each step is a similarity transformation preserving eigenvalues while driving sub-diagonal entries toward zero. With shifts, convergence is cubic for symmetric matrices. It avoids the numerical instability of finding roots of the characteristic polynomial.",
    sectionId: "7"
  }
}


const schemas = {
  learningResource: {
    "@context": "https://schema.org",
    "@type": "LearningResource",
    "name": "QR Decomposition",
    "description": "QR decomposition: Gram-Schmidt, Householder, and Givens methods. Thin vs full QR, least-squares solving, the QR eigenvalue algorithm, numerical stability, and factor properties.",
    "url": "https://www.learnmathclass.com/linear-algebra/decompositions/qr",
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
      "name": "QR Decomposition"
    },
    "teaches": [
      "QR factorization A = QR definition and structure",
      "QR via Gram-Schmidt orthogonalization",
      "QR via Householder reflections",
      "Thin QR vs full QR decomposition",
      "Least-squares solving with QR",
      "The QR algorithm for eigenvalue computation",
      "Gram-Schmidt vs Householder vs Givens comparison",
      "Side-by-side comparison of the four routes to QR on stability and use case"
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
        "name": "QR Decomposition",
        "item": "https://www.learnmathclass.com/linear-algebra/decompositions/qr"
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
    qrForms,
    qrRoutes,
    faqQuestions,
    schemas,
    seoData: {
      title: "QR Decomposition: Methods & Applications | Learn Math Class",
      description: "QR decomposition: Gram-Schmidt, Householder, and Givens methods. Thin vs full QR, least-squares solving, the QR eigenvalue algorithm, numerical stability, and factor properties.",
      keywords: keyWords.join(", "),
      url: "/linear-algebra/decompositions/qr",
      name: "QR Decomposition"
    },
  }
}
   }

// export default function PageTemplate({seoData,sectionsContent , introContent}) {
export default function QRDecompositionPage({
  seoData,
  sectionsContent,
  introContent,
  qrForms,
  qrRoutes,
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
          <DiagramFrame
            key={'obj4-diagram'}
            id="qr-forms"
            title="Thin QR and full QR"
            source="/linear-algebra/decompositions/qr"
          >
            <ObjectTypeProfile data={qrForms} theme="navy" variant="grid" />
          </DiagramFrame>,
          `The difference is $m - n$ columns of $Q$ paired against $m - n$ rows of zeros in $R$, so they contribute nothing to the product and $A$ comes back identically either way. What they do contribute is a basis for everything $A$ cannot reach — the [left null space](!/linear-algebra/vector-spaces/fundamental-spaces) — and the squareness that makes $Q$ orthogonal in both directions rather than only one.`,
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
          `The four methods divide cleanly by strategy. The first two build $Q$ directly, orthogonalizing the columns of $A$ one at a time; the second two leave $Q$ implicit and instead apply orthogonal operations to $A$ until what remains is triangular. That difference is what decides the stability, so the grouping below is also the ranking.`,
          <DiagramFrame
            key={'obj11-diagram'}
            id="qr-routes"
            title="Four routes to the same factorization"
            source="/linear-algebra/decompositions/qr"
          >
            <IdentitySheet data={qrRoutes} theme="navy" variant="ledger" />
          </DiagramFrame>,
          `Why the second group wins is worth stating plainly. Building $Q$ by orthogonalization means every column inherits the rounding error of the columns before it, so orthogonality degrades as the computation proceeds — and degrades fastest exactly when the columns are nearly dependent, which is when the factorization was most needed. Householder and Givens never construct $Q$ from the data at all: each step is an orthogonal matrix by construction, and a product of orthogonal matrices is orthogonal whatever the arithmetic did.`,
          `In practice the choice is narrow. Householder is the default for dense matrices and is what [least squares](#6) routines call. Givens is chosen when the matrix is sparse or when entries arrive one at a time, since a rotation acts on two rows and leaves the rest untouched. Modified Gram–Schmidt survives where the columns of $Q$ are wanted explicitly and progressively — and classical Gram–Schmidt survives as an explanation.`,
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
   <h1 className='title' style={{marginTop:'0px',marginBottom:'10px'}}>QR Decompositions</h1>
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