// // // // // // // // // tables-optimized: v4 | 2026-05-18 | 4 tables (obj5 comparison, obj6 aggregation, obj9 aggregation, obj12 summary capstone)
// // // // // // // // import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
// // // // // // // // import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
// // // // // // // // import IntroSection from '@/app/components/page-components/section/IntroContentSection'
// // // // // // // // import Sections from '@/app/components/page-components/section/Sections'
// // // // // // // // import SectionTableOfContents from '@/app/components/page-components/section/SectionTableofContents'
// // // // // // // // import React from 'react'
// // // // // // // // import '../../../pages.css'
// // // // // // // // import Head from 'next/head'
// // // // // // // // import KeyTermsCard from '@/app/components/page-components/KeyTermsCard'
// // // // // // // // import { tableHeaders } from '@/app/styles/theme'


// // // // // // // // export async function getStaticProps(){
// // // // // // // // const keyWords = [
// // // // // // // //   "singular value decomposition",
// // // // // // // //   "SVD",
// // // // // // // //   "singular values",
// // // // // // // //   "left right singular vectors",
// // // // // // // //   "low-rank approximation",
// // // // // // // //   "pseudoinverse SVD",
// // // // // // // //   "Moore-Penrose pseudoinverse",
// // // // // // // //   "Eckart-Young theorem",
// // // // // // // //   "matrix rank SVD",
// // // // // // // //   "condition number singular values",
// // // // // // // //   "four fundamental subspaces SVD",
// // // // // // // //   "compact SVD thin SVD",
// // // // // // // //   "SVD image compression",
// // // // // // // //   "operator norm Frobenius norm",
// // // // // // // //   "UΣVᵀ factorization"
// // // // // // // // ]

// // // // // // // //   const linkStyle = 'color: inherit; text-decoration: underline;'

// // // // // // // //   // ---------- TABLES ----------

// // // // // // // //   // obj5 — comparison: three SVD variants
// // // // // // // //   const obj5Table = `
// // // // // // // // <table class="styled-table" style="border-collapse: collapse; width: 78%;margin:auto; background: white; box-shadow: 0 2px 10px rgba(0,0,0,0.1); border-radius: 8px; overflow: hidden; font-family: Arial, sans-serif;">
// // // // // // // //   <thead>
// // // // // // // //     <tr>
// // // // // // // //       <th style="${tableHeaders.comparison}">Form</th>
// // // // // // // //       <th style="${tableHeaders.comparison} text-align: center;">U dimensions</th>
// // // // // // // //       <th style="${tableHeaders.comparison} text-align: center;">Σ dimensions</th>
// // // // // // // //       <th style="${tableHeaders.comparison} text-align: center;">V dimensions</th>
// // // // // // // //       <th style="${tableHeaders.comparison}">What is stored / dropped</th>
// // // // // // // //     </tr>
// // // // // // // //   </thead>
// // // // // // // //   <tbody>
// // // // // // // //     <tr style="background: #f8f9fa;">
// // // // // // // //       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Full SVD</td>
// // // // // // // //       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e; text-align: center;">m × m</td>
// // // // // // // //       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e; text-align: center;">m × n</td>
// // // // // // // //       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e; text-align: center;">n × n</td>
// // // // // // // //       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">orthonormal bases for all four <a href="/linear-algebra/vector-spaces/fundamental-spaces" style="${linkStyle}">fundamental subspaces</a></td>
// // // // // // // //     </tr>
// // // // // // // //     <tr>
// // // // // // // //       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Thin SVD</td>
// // // // // // // //       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e; text-align: center;">m × n</td>
// // // // // // // //       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e; text-align: center;">n × n</td>
// // // // // // // //       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e; text-align: center;">n × n</td>
// // // // // // // //       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">drops the left null space columns of U</td>
// // // // // // // //     </tr>
// // // // // // // //     <tr style="background: #f8f9fa;">
// // // // // // // //       <td style="padding: 12px 15px; font-weight: bold; color: #06357a;">Compact SVD</td>
// // // // // // // //       <td style="padding: 12px 15px; color: #34495e; text-align: center;">m × r</td>
// // // // // // // //       <td style="padding: 12px 15px; color: #34495e; text-align: center;">r × r</td>
// // // // // // // //       <td style="padding: 12px 15px; color: #34495e; text-align: center;">n × r</td>
// // // // // // // //       <td style="padding: 12px 15px; color: #34495e;">only the rank-r content; most economical storage</td>
// // // // // // // //     </tr>
// // // // // // // //   </tbody>
// // // // // // // // </table>
// // // // // // // // `

// // // // // // // //   // obj6 — aggregation: four fundamental subspaces from the SVD
// // // // // // // //   const obj6Table = `
// // // // // // // // <table class="styled-table" style="border-collapse: collapse; width: 75%;margin:auto; background: white; box-shadow: 0 2px 10px rgba(0,0,0,0.1); border-radius: 8px; overflow: hidden; font-family: Arial, sans-serif;">
// // // // // // // //   <thead>
// // // // // // // //     <tr>
// // // // // // // //       <th style="${tableHeaders.aggregation}">Fundamental subspace</th>
// // // // // // // //       <th style="${tableHeaders.aggregation} text-align: center;">Basis from</th>
// // // // // // // //       <th style="${tableHeaders.aggregation} text-align: center;">Column indices</th>
// // // // // // // //       <th style="${tableHeaders.aggregation} text-align: center;">Dimension</th>
// // // // // // // //     </tr>
// // // // // // // //   </thead>
// // // // // // // //   <tbody>
// // // // // // // //     <tr style="background: #f8f9fa;">
// // // // // // // //       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Row space of A</td>
// // // // // // // //       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e; text-align: center;">V</td>
// // // // // // // //       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e; text-align: center;">1, ..., r</td>
// // // // // // // //       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e; text-align: center;">r</td>
// // // // // // // //     </tr>
// // // // // // // //     <tr>
// // // // // // // //       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Null space of A</td>
// // // // // // // //       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e; text-align: center;">V</td>
// // // // // // // //       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e; text-align: center;">r+1, ..., n</td>
// // // // // // // //       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e; text-align: center;">n − r</td>
// // // // // // // //     </tr>
// // // // // // // //     <tr style="background: #f8f9fa;">
// // // // // // // //       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Column space of A</td>
// // // // // // // //       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e; text-align: center;">U</td>
// // // // // // // //       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e; text-align: center;">1, ..., r</td>
// // // // // // // //       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e; text-align: center;">r</td>
// // // // // // // //     </tr>
// // // // // // // //     <tr>
// // // // // // // //       <td style="padding: 12px 15px; font-weight: bold; color: #06357a;">Left null space of A</td>
// // // // // // // //       <td style="padding: 12px 15px; color: #34495e; text-align: center;">U</td>
// // // // // // // //       <td style="padding: 12px 15px; color: #34495e; text-align: center;">r+1, ..., m</td>
// // // // // // // //       <td style="padding: 12px 15px; color: #34495e; text-align: center;">m − r</td>
// // // // // // // //     </tr>
// // // // // // // //   </tbody>
// // // // // // // // </table>
// // // // // // // // `

// // // // // // // //   // obj9 — aggregation: norms and condition number from singular values
// // // // // // // //   const obj9Table = `
// // // // // // // // <table class="styled-table" style="border-collapse: collapse; width: 75%;margin:auto; background: white; box-shadow: 0 2px 10px rgba(0,0,0,0.1); border-radius: 8px; overflow: hidden; font-family: Arial, sans-serif;">
// // // // // // // //   <thead>
// // // // // // // //     <tr>
// // // // // // // //       <th style="${tableHeaders.aggregation}">Quantity</th>
// // // // // // // //       <th style="${tableHeaders.aggregation}">Formula via singular values</th>
// // // // // // // //       <th style="${tableHeaders.aggregation}">Interpretation</th>
// // // // // // // //     </tr>
// // // // // // // //   </thead>
// // // // // // // //   <tbody>
// // // // // // // //     <tr style="background: #f8f9fa;">
// // // // // // // //       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Operator (spectral) norm ‖A‖<sub>2</sub></td>
// // // // // // // //       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">σ<sub>1</sub></td>
// // // // // // // //       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">maximum stretching factor on the unit ball</td>
// // // // // // // //     </tr>
// // // // // // // //     <tr>
// // // // // // // //       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;"><a href="/linear-algebra/matrix/trace" style="${linkStyle}">Frobenius norm</a> ‖A‖<sub>F</sub></td>
// // // // // // // //       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">√(σ<sub>1</sub><sup>2</sup> + σ<sub>2</sub><sup>2</sup> + ··· + σ<sub>r</sub><sup>2</sup>)</td>
// // // // // // // //       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">total "energy" — root-sum-of-squares of singular values</td>
// // // // // // // //     </tr>
// // // // // // // //     <tr style="background: #f8f9fa;">
// // // // // // // //       <td style="padding: 12px 15px; font-weight: bold; color: #06357a;">Condition number κ(A)</td>
// // // // // // // //       <td style="padding: 12px 15px; color: #34495e;">σ<sub>1</sub> / σ<sub>r</sub></td>
// // // // // // // //       <td style="padding: 12px 15px; color: #34495e;">sensitivity to perturbation: κ = 10<sup>k</sup> loses ~k digits</td>
// // // // // // // //     </tr>
// // // // // // // //   </tbody>
// // // // // // // // </table>
// // // // // // // // `

// // // // // // // //   // obj12 — summary capstone: what the SVD reveals
// // // // // // // //   const summaryTable = `
// // // // // // // // <table class="styled-table" style="border-collapse: collapse; width: 78%;margin:auto; background: white; box-shadow: 0 2px 10px rgba(0,0,0,0.1); border-radius: 8px; overflow: hidden; font-family: Arial, sans-serif;">
// // // // // // // //   <thead>
// // // // // // // //     <tr>
// // // // // // // //       <th style="${tableHeaders.summary}">What the SVD reveals</th>
// // // // // // // //       <th style="${tableHeaders.summary}">How to extract from A = UΣV<sup>T</sup></th>
// // // // // // // //       <th style="${tableHeaders.summary}">Form or value</th>
// // // // // // // //     </tr>
// // // // // // // //   </thead>
// // // // // // // //   <tbody>
// // // // // // // //     <tr style="background: #f8f9fa;">
// // // // // // // //       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;"><a href="/linear-algebra/matrix/rank" style="${linkStyle}">Rank</a></td>
// // // // // // // //       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">count the strictly positive singular values</td>
// // // // // // // //       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">r = number of nonzero σ<sub>i</sub></td>
// // // // // // // //     </tr>
// // // // // // // //     <tr>
// // // // // // // //       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;"><a href="#6" style="${linkStyle}">Four fundamental subspaces</a></td>
// // // // // // // //       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">partition columns of U and V at index r</td>
// // // // // // // //       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">orthonormal bases for row, null, column, left-null spaces</td>
// // // // // // // //     </tr>
// // // // // // // //     <tr style="background: #f8f9fa;">
// // // // // // // //       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;"><a href="#7" style="${linkStyle}">Pseudoinverse</a></td>
// // // // // // // //       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">reciprocate nonzero σ<sub>i</sub>, transpose the shape</td>
// // // // // // // //       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">A<sup>+</sup> = VΣ<sup>+</sup>U<sup>T</sup></td>
// // // // // // // //     </tr>
// // // // // // // //     <tr>
// // // // // // // //       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;"><a href="#8" style="${linkStyle}">Best rank-k approximation</a></td>
// // // // // // // //       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">truncate the outer-product sum at k terms</td>
// // // // // // // //       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">A<sub>k</sub> = σ<sub>1</sub>u<sub>1</sub>v<sub>1</sub><sup>T</sup> + ··· + σ<sub>k</sub>u<sub>k</sub>v<sub>k</sub><sup>T</sup></td>
// // // // // // // //     </tr>
// // // // // // // //     <tr style="background: #f8f9fa;">
// // // // // // // //       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;"><a href="#9" style="${linkStyle}">Norms and condition number</a></td>
// // // // // // // //       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">read directly from the singular value list</td>
// // // // // // // //       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">‖A‖<sub>2</sub> = σ<sub>1</sub>; ‖A‖<sub>F</sub> = √Σσ<sub>i</sub><sup>2</sup>; κ = σ<sub>1</sub>/σ<sub>r</sub></td>
// // // // // // // //     </tr>
// // // // // // // //     <tr>
// // // // // // // //       <td style="padding: 12px 15px; font-weight: bold; color: #06357a;"><a href="#2" style="${linkStyle}">Geometry of A</a></td>
// // // // // // // //       <td style="padding: 12px 15px; color: #34495e;">read the three factors in order</td>
// // // // // // // //       <td style="padding: 12px 15px; color: #34495e;">rotation V<sup>T</sup>, then scaling Σ, then rotation U</td>
// // // // // // // //     </tr>
// // // // // // // //   </tbody>
// // // // // // // // </table>
// // // // // // // // `

// // // // // // // // // const sectionsContent = {
// // // // // // // // //   obj1: {
// // // // // // // // //     title: `What the SVD Is`,
// // // // // // // // //     content: `Every $m \\times n$ [matrix](!/linear-algebra/matrix) $A$ — any shape, any [rank](!/linear-algebra/matrix/rank) — factors as

// // // // // // // // // $$A = U\\Sigma V^T$$

// // // // // // // // // $U$ is $m \\times m$ [orthogonal](!/linear-algebra/matrix/types): its columns are the left singular vectors. $V$ is $n \\times n$ orthogonal: its columns are the right singular vectors. $\\Sigma$ is $m \\times n$ with non-negative entries $\\sigma_1 \\geq \\sigma_2 \\geq \\cdots \\geq \\sigma_{\\min(m,n)} \\geq 0$ on the diagonal and zeros elsewhere. These are the singular values.

// // // // // // // // // The SVD exists without any restriction. The matrix need not be square, need not be [invertible](!/linear-algebra/matrix/inverse), need not be [symmetric](!/linear-algebra/matrix/types), and need not have any special structure. It is the most general factorization in linear algebra.`,
// // // // // // // // //     before: ``,
// // // // // // // // //     after: ``,
// // // // // // // // //     link: ``,
// // // // // // // // //   },
// // // // // // // // //   obj2: {
// // // // // // // // //     title: `The Geometric Interpretation`,
// // // // // // // // //     content: `Every [linear transformation](!/linear-algebra/transformations) $\\mathbf{x} \\mapsto A\\mathbf{x}$ decomposes into three geometric steps:

// // // // // // // // // $V^T$ rotates (or reflects) the input space, aligning the input with the "natural axes" of the transformation — the directions along which $A$ stretches most and least.

// // // // // // // // // $\\Sigma$ scales each axis independently by the corresponding singular value. Axes with $\\sigma_i = 0$ are annihilated — those directions are collapsed to zero.

// // // // // // // // // $U$ rotates (or reflects) the scaled result into the output space.

// // // // // // // // // The singular values measure the stretching in each orthogonal direction. $\\sigma_1$ is the maximum stretching: $\\sigma_1 = \\max_{\\|\\mathbf{x}\\|=1}\\|A\\mathbf{x}\\|$. The smallest nonzero singular value $\\sigma_r$ is the minimum stretching on the [row space](!/linear-algebra/vector-spaces/fundamental-spaces). The ratio $\\sigma_1/\\sigma_r$ is the condition number — it measures how distorted the transformation is.

// // // // // // // // // Even the most complex-looking matrix is geometrically just two rotations sandwiching a coordinate-axis scaling.`,
// // // // // // // // //     before: ``,
// // // // // // // // //     after: ``,
// // // // // // // // //     link: ``,
// // // // // // // // //   },
// // // // // // // // //   obj3: {
// // // // // // // // //     title: `Singular Values`,
// // // // // // // // //     content: `The singular values of $A$ are the square roots of the [eigenvalues](!/linear-algebra/eigen) of $A^TA$ (or equivalently $AA^T$):

// // // // // // // // // $$\\sigma_i = \\sqrt{\\lambda_i(A^TA)}$$

// // // // // // // // // Since $A^TA$ is symmetric positive semi-definite, its eigenvalues are all $\\geq 0$, so the singular values are real and non-negative. They are ordered $\\sigma_1 \\geq \\sigma_2 \\geq \\cdots \\geq 0$.

// // // // // // // // // The number of nonzero singular values equals the [rank](!/linear-algebra/matrix/rank) of $A$. This is the most numerically stable method for determining rank: compute the SVD and count singular values above a tolerance.

// // // // // // // // // The largest singular value $\\sigma_1$ is the operator norm $\\|A\\|_2 = \\max_{\\|\\mathbf{x}\\|=1}\\|A\\mathbf{x}\\|$. The [Frobenius norm](!/linear-algebra/matrix/trace) is $\\|A\\|_F = \\sqrt{\\sigma_1^2 + \\sigma_2^2 + \\cdots + \\sigma_r^2}$. The condition number is $\\kappa(A) = \\sigma_1/\\sigma_r$ — a large condition number means the matrix is nearly singular and small perturbations in the input cause large changes in the output.`,
// // // // // // // // //     before: ``,
// // // // // // // // //     after: ``,
// // // // // // // // //     link: ``,
// // // // // // // // //   },
// // // // // // // // //   obj4: {
// // // // // // // // //     title: `Computing the SVD`,
// // // // // // // // //     content: `The standard approach computes the SVD through the eigenvalue decomposition of $A^TA$.

// // // // // // // // // Form $A^TA$ (symmetric, $n \\times n$). Find its eigenvalues $\\lambda_1 \\geq \\cdots \\geq \\lambda_n \\geq 0$ and orthonormal eigenvectors $\\mathbf{v}_1, \\dots, \\mathbf{v}_n$ using the [spectral decomposition](!/linear-algebra/decompositions/spectral). These are the right singular vectors: $V = [\\mathbf{v}_1 \\; \\cdots \\; \\mathbf{v}_n]$.

// // // // // // // // // The singular values are $\\sigma_i = \\sqrt{\\lambda_i}$. The left singular vectors are computed from the right ones: $\\mathbf{u}_i = \\frac{1}{\\sigma_i}A\\mathbf{v}_i$ for each nonzero $\\sigma_i$. If $r < m$, extend $\\{\\mathbf{u}_1, \\dots, \\mathbf{u}_r\\}$ to an [orthonormal basis](!/linear-algebra/orthogonality/orthogonal-sets) for $\\mathbb{R}^m$.

// // // // // // // // // ## Worked Example

// // // // // // // // // For $A = \\begin{pmatrix} 1 & 0 \\\\ 0 & 1 \\\\ 1 & 1 \\end{pmatrix}$: $A^TA = \\begin{pmatrix} 2 & 1 \\\\ 1 & 2 \\end{pmatrix}$, eigenvalues $3$ and $1$, eigenvectors $\\frac{1}{\\sqrt{2}}(1, 1)^T$ and $\\frac{1}{\\sqrt{2}}(1, -1)^T$. Singular values: $\\sqrt{3}$ and $1$. Left singular vectors: $\\mathbf{u}_1 = \\frac{1}{\\sqrt{3}}A\\mathbf{v}_1 = \\frac{1}{\\sqrt{6}}(1, 1, 2)^T$, $\\mathbf{u}_2 = A\\mathbf{v}_2 = \\frac{1}{\\sqrt{2}}(1, -1, 0)^T$. Extend with $\\mathbf{u}_3 = \\frac{1}{\\sqrt{3}}(-1, -1, 1)^T$.`,
// // // // // // // // //     before: ``,
// // // // // // // // //     after: ``,
// // // // // // // // //     link: ``,
// // // // // // // // //   },
// // // // // // // // //   obj5: {
// // // // // // // // //     title: `Compact and Thin Forms`,
// // // // // // // // //     content: `The full SVD has $U$ of size $m \\times m$, $\\Sigma$ of size $m \\times n$, and $V$ of size $n \\times n$. Two economical alternatives retain only the essential information.

// // // // // // // // // The thin SVD keeps only the first $n$ columns of $U$ (call them $U_1$) and the top $n \\times n$ block of $\\Sigma$ (call it $\\Sigma_1$): $A = U_1 \\Sigma_1 V^T$. This drops the columns of $U$ corresponding to the [left null space](!/linear-algebra/vector-spaces/fundamental-spaces).

// // // // // // // // // The compact SVD keeps only the first $r$ columns of $U$ and $V$ (where $r = \\text{rank}(A)$) and the $r \\times r$ diagonal block of nonzero singular values: $A = U_r \\Sigma_r V_r^T$. This is the most economical representation — it captures only the rank-$r$ content of $A$, discarding everything associated with zero singular values.

// // // // // // // // // All three forms represent the same matrix $A$. The compact form uses the least storage; the full form provides bases for all four [fundamental subspaces](!/linear-algebra/vector-spaces/fundamental-spaces). The three variants line up cleanly on factor dimensions and on what each one chooses to keep.`,
// // // // // // // // //     before: ``,
// // // // // // // // //     after: ``,
// // // // // // // // //     link: ``,
// // // // // // // // //   },
// // // // // // // // //   obj6: {
// // // // // // // // //     title: `SVD and the Four Fundamental Subspaces`,
// // // // // // // // //     content: `The SVD simultaneously provides orthonormal [bases](!/linear-algebra/vector-spaces) for all four [fundamental subspaces](!/linear-algebra/vector-spaces/fundamental-spaces) of $A$.

// // // // // // // // // The first $r$ columns of $V$ ($\\mathbf{v}_1, \\dots, \\mathbf{v}_r$) form an orthonormal basis for the row space of $A$.

// // // // // // // // // The last $n - r$ columns of $V$ ($\\mathbf{v}_{r+1}, \\dots, \\mathbf{v}_n$) form an orthonormal basis for the [null space](!/linear-algebra/vector-spaces/fundamental-spaces) of $A$.

// // // // // // // // // The first $r$ columns of $U$ ($\\mathbf{u}_1, \\dots, \\mathbf{u}_r$) form an orthonormal basis for the [column space](!/linear-algebra/vector-spaces/fundamental-spaces) of $A$.

// // // // // // // // // The last $m - r$ columns of $U$ ($\\mathbf{u}_{r+1}, \\dots, \\mathbf{u}_m$) form an orthonormal basis for the left null space of $A$.

// // // // // // // // // No other factorization provides all four bases simultaneously, and no other method guarantees that these bases are orthonormal. The SVD is the complete structural portrait of any matrix.`,
// // // // // // // // //     before: ``,
// // // // // // // // //     after: ``,
// // // // // // // // //     link: ``,
// // // // // // // // //   },
// // // // // // // // //   obj7: {
// // // // // // // // //     title: `The Pseudoinverse`,
// // // // // // // // //     content: `The Moore-Penrose pseudoinverse $A^+$ is computed directly from the SVD:

// // // // // // // // // $$A^+ = V\\Sigma^+ U^T$$

// // // // // // // // // The matrix $\\Sigma^+$ is formed by reciprocating each nonzero singular value and transposing the shape: if $\\Sigma$ is $m \\times n$ with diagonal entries $\\sigma_1, \\dots, \\sigma_r, 0, \\dots, 0$, then $\\Sigma^+$ is $n \\times m$ with diagonal entries $1/\\sigma_1, \\dots, 1/\\sigma_r, 0, \\dots, 0$.

// // // // // // // // // The pseudoinverse satisfies four defining properties: $AA^+A = A$, $A^+AA^+ = A^+$, $(AA^+)^T = AA^+$, $(A^+A)^T = A^+A$.

// // // // // // // // // For a full-rank overdetermined system ($m > n$, rank $= n$), $A^+\\mathbf{b}$ gives the [least-squares](!/linear-algebra/orthogonality/least-squares) solution. For a rank-deficient system, $A^+\\mathbf{b}$ gives the minimum-norm least-squares solution — the solution of smallest length among all minimizers of $\\|A\\mathbf{x} - \\mathbf{b}\\|$.`,
// // // // // // // // //     before: ``,
// // // // // // // // //     after: ``,
// // // // // // // // //     link: ``,
// // // // // // // // //   },
// // // // // // // // //   obj8: {
// // // // // // // // //     title: `Low-Rank Approximation`,
// // // // // // // // //     content: `The best rank-$k$ approximation to $A$ in either the operator norm or the Frobenius norm is obtained by truncating the SVD at $k$ terms:

// // // // // // // // // $$A_k = \\sigma_1\\mathbf{u}_1\\mathbf{v}_1^T + \\sigma_2\\mathbf{u}_2\\mathbf{v}_2^T + \\cdots + \\sigma_k\\mathbf{u}_k\\mathbf{v}_k^T$$

// // // // // // // // // This is the Eckart-Young-Mirsky theorem. Among all matrices of rank at most $k$, $A_k$ is the closest to $A$.

// // // // // // // // // The approximation error is $\\|A - A_k\\|_2 = \\sigma_{k+1}$ (the first discarded singular value) in the operator norm, and $\\|A - A_k\\|_F = \\sqrt{\\sigma_{k+1}^2 + \\cdots + \\sigma_r^2}$ in the Frobenius norm.

// // // // // // // // // When the singular values decay rapidly — $\\sigma_1 \\gg \\sigma_2 \\gg \\cdots$ — a small number of terms captures most of the matrix. This is the basis of image compression (store $k$ singular value triples instead of $mn$ entries), noise reduction (discard small singular values as noise), latent semantic analysis (retain the top-$k$ "concepts" in a document-term matrix), and dimensionality reduction more broadly.`,
// // // // // // // // //     before: ``,
// // // // // // // // //     after: ``,
// // // // // // // // //     link: ``,
// // // // // // // // //   },
// // // // // // // // //   obj9: {
// // // // // // // // //     title: `SVD and Norms`,
// // // // // // // // //     content: `The singular values provide the complete "size profile" of a matrix.

// // // // // // // // // The operator (spectral) norm is the largest singular value: $\\|A\\|_2 = \\sigma_1$. It measures the maximum factor by which $A$ can stretch a unit vector.

// // // // // // // // // The [Frobenius norm](!/linear-algebra/matrix/trace) is the root-sum-of-squares of all singular values: $\\|A\\|_F = \\sqrt{\\sigma_1^2 + \\sigma_2^2 + \\cdots + \\sigma_r^2}$. It measures the total "energy" in the matrix.

// // // // // // // // // The condition number $\\kappa(A) = \\sigma_1/\\sigma_r$ quantifies sensitivity to perturbation. A matrix with $\\kappa = 10^k$ loses roughly $k$ digits of accuracy in solving $A\\mathbf{x} = \\mathbf{b}$ with floating-point arithmetic. A perfectly conditioned matrix ($\\kappa = 1$) is orthogonal. A singular matrix ($\\sigma_r = 0$) has $\\kappa = \\infty$.

// // // // // // // // // The singular values are the natural measuring tool for matrices, just as eigenvalues are the natural measuring tool for symmetric matrices and [linear operators](!/linear-algebra/transformations). For non-symmetric matrices, singular values (not eigenvalues) govern norms and conditioning.`,
// // // // // // // // //     before: ``,
// // // // // // // // //     after: ``,
// // // // // // // // //     link: ``,
// // // // // // // // //   },
// // // // // // // // //   obj10: {
// // // // // // // // //     title: `SVD and the Spectral Decomposition`,
// // // // // // // // //     content: `For a symmetric positive semi-definite matrix $A$ with eigenvalues $\\lambda_1 \\geq \\cdots \\geq \\lambda_n \\geq 0$, the [spectral decomposition](!/linear-algebra/decompositions/spectral) $A = QDQ^T$ is also the SVD: $U = V = Q$ and $\\Sigma = D$. The singular values are the eigenvalues.

// // // // // // // // // For a general symmetric matrix with some negative eigenvalues, the singular values are $|\\lambda_i|$. The signs are absorbed into $U$ or $V$: if $\\lambda_i < 0$, one of the corresponding singular vectors is negated so that $\\sigma_i = |\\lambda_i| > 0$.

// // // // // // // // // For non-symmetric or rectangular matrices, the eigendecomposition does not apply (it requires square matrices and may not exist even then), but the SVD always does. The SVD is the correct generalization of the spectral decomposition to the broadest possible class of matrices.`,
// // // // // // // // //     before: ``,
// // // // // // // // //     after: ``,
// // // // // // // // //     link: ``,
// // // // // // // // //   },
// // // // // // // // //   obj11: {
// // // // // // // // //     title: `The Outer Product Form`,
// // // // // // // // //     content: `The SVD can be written as a sum of rank-one matrices:

// // // // // // // // // $$A = \\sigma_1 \\mathbf{u}_1\\mathbf{v}_1^T + \\sigma_2 \\mathbf{u}_2\\mathbf{v}_2^T + \\cdots + \\sigma_r \\mathbf{u}_r\\mathbf{v}_r^T$$

// // // // // // // // // Each term $\\sigma_i \\mathbf{u}_i\\mathbf{v}_i^T$ is an $m \\times n$ rank-one matrix. The singular value $\\sigma_i$ weights its contribution. The terms are ordered by importance: the first term captures the most of $A$ (in the norm sense), the second captures the most of the remainder, and so on.

// // // // // // // // // Truncating this sum at $k$ terms gives the best rank-$k$ approximation $A_k$. The fraction of the Frobenius norm captured by the first $k$ terms is $(\\sigma_1^2 + \\cdots + \\sigma_k^2)/(\\sigma_1^2 + \\cdots + \\sigma_r^2)$.

// // // // // // // // // This outer product perspective is the basis of nearly every matrix approximation method: keep the large singular values (signal) and discard the small ones (noise or redundancy).`,
// // // // // // // // //     before: ``,
// // // // // // // // //     after: ``,
// // // // // // // // //     link: ``,
// // // // // // // // //   },
// // // // // // // // //   obj12: {
// // // // // // // // //     title: `What the SVD Reveals`,
// // // // // // // // //     content: `No other single factorization provides as much structural information about a matrix.

// // // // // // // // // The [rank](!/linear-algebra/matrix/rank): the number of nonzero singular values.

// // // // // // // // // The four [fundamental subspaces](!/linear-algebra/vector-spaces/fundamental-spaces): orthonormal bases from the columns of $U$ and $V$.

// // // // // // // // // The [pseudoinverse](!/linear-algebra/orthogonality/least-squares): $A^+ = V\\Sigma^+ U^T$.

// // // // // // // // // The best rank-$k$ approximation: truncate at $k$ terms.

// // // // // // // // // Norms and the condition number: directly from the singular values.

// // // // // // // // // The [geometry](!/linear-algebra/transformations/geometric) of the linear map: rotation, scaling, rotation.

// // // // // // // // // For symmetric matrices, the SVD reduces to the [spectral decomposition](!/linear-algebra/decompositions/spectral). For invertible square matrices, the singular values reveal the conditioning that the [determinant](!/linear-algebra/determinants) alone cannot see (a matrix with $\\det = 1$ can still be poorly conditioned). For rectangular matrices, the SVD is the only factorization that applies without modification.

// // // // // // // // // The SVD is the culmination of the decomposition hierarchy — the most general, most informative, and most broadly applicable factorization in linear algebra.

// // // // // // // // // The six structural quantities the SVD exposes — rank, the four fundamental subspaces, the pseudoinverse, the best rank-$k$ approximation, norms and condition number, and the geometric decomposition — collect into a single reference card below.`,
// // // // // // // // //     before: ``,
// // // // // // // // //     after: ``,
// // // // // // // // //     link: ``,
// // // // // // // // //   },
// // // // // // // // // }



// // // // // // // // // linear-algebra/decompositions/svd — sectionsContent with formula callouts (v1)
// // // // // // // // // 10 callouts injected across 6 sections:
// // // // // // // // //   obj1  (SVD) — direct
// // // // // // // // //   obj3  (Singular Values) — direct
// // // // // // // // //   obj3  (SVD Rank) — prose-only insert
// // // // // // // // //   obj6  (SVD Four Fundamental Subspaces) — prose-only insert
// // // // // // // // //   obj7  (Moore-Penrose Pseudoinverse) — direct
// // // // // // // // //   obj8  (Eckart-Young Low-Rank Approximation) — direct, replaced with canonical incl. error bounds
// // // // // // // // //   obj9  (Operator Norm, Frobenius Norm via Singular Values, Condition Number) — inline-promote x3
// // // // // // // // //   obj11 (SVD Outer Product Form) — direct
// // // // // // // // // obj4 worked-example matrix $$ displays preserved.

// // // // // // // // const sectionsContent = {
// // // // // // // //   obj1: {
// // // // // // // //     title: `What the SVD Is`,
// // // // // // // //     content: `Every $m \\times n$ [matrix](!/linear-algebra/matrix) $A$ — any shape, any [rank](!/linear-algebra/matrix/rank) — factors as

// // // // // // // // @academic[formula_callout:svd|SVD|$$A = U\\Sigma V^T$$]@
// // // // // // // // @academic[formulas_link:/linear-algebra/formulas#svd]@

// // // // // // // // $U$ is $m \\times m$ [orthogonal](!/linear-algebra/matrix/types): its columns are the left singular vectors. $V$ is $n \\times n$ orthogonal: its columns are the right singular vectors. $\\Sigma$ is $m \\times n$ with non-negative entries $\\sigma_1 \\geq \\sigma_2 \\geq \\cdots \\geq \\sigma_{\\min(m,n)} \\geq 0$ on the diagonal and zeros elsewhere. These are the singular values.

// // // // // // // // The SVD exists without any restriction. The matrix need not be square, need not be [invertible](!/linear-algebra/matrix/inverse), need not be [symmetric](!/linear-algebra/matrix/types), and need not have any special structure. It is the most general factorization in linear algebra.`,
// // // // // // // //     before: ``,
// // // // // // // //     after: ``,
// // // // // // // //     link: ``,
// // // // // // // //   },
// // // // // // // //   obj2: {
// // // // // // // //     title: `The Geometric Interpretation`,
// // // // // // // //     content: `Every [linear transformation](!/linear-algebra/transformations) $\\mathbf{x} \\mapsto A\\mathbf{x}$ decomposes into three geometric steps:

// // // // // // // // $V^T$ rotates (or reflects) the input space, aligning the input with the "natural axes" of the transformation — the directions along which $A$ stretches most and least.

// // // // // // // // $\\Sigma$ scales each axis independently by the corresponding singular value. Axes with $\\sigma_i = 0$ are annihilated — those directions are collapsed to zero.

// // // // // // // // $U$ rotates (or reflects) the scaled result into the output space.

// // // // // // // // The singular values measure the stretching in each orthogonal direction. $\\sigma_1$ is the maximum stretching: $\\sigma_1 = \\max_{\\|\\mathbf{x}\\|=1}\\|A\\mathbf{x}\\|$. The smallest nonzero singular value $\\sigma_r$ is the minimum stretching on the [row space](!/linear-algebra/vector-spaces/fundamental-spaces). The ratio $\\sigma_1/\\sigma_r$ is the condition number — it measures how distorted the transformation is.

// // // // // // // // Even the most complex-looking matrix is geometrically just two rotations sandwiching a coordinate-axis scaling.`,
// // // // // // // //     before: ``,
// // // // // // // //     after: ``,
// // // // // // // //     link: ``,
// // // // // // // //   },
// // // // // // // //   obj3: {
// // // // // // // //     title: `Singular Values`,
// // // // // // // //     content: `The singular values of $A$ are the square roots of the [eigenvalues](!/linear-algebra/eigen) of $A^TA$ (or equivalently $AA^T$):

// // // // // // // // @academic[formula_callout:singular_values|Singular Values|$$\\sigma_i = \\sqrt{\\lambda_i(A^TA)} = \\sqrt{\\lambda_i(AA^T)}$$]@
// // // // // // // // @academic[formulas_link:/linear-algebra/formulas#singular_values]@

// // // // // // // // Since $A^TA$ is symmetric positive semi-definite, its eigenvalues are all $\\geq 0$, so the singular values are real and non-negative. They are ordered $\\sigma_1 \\geq \\sigma_2 \\geq \\cdots \\geq 0$.

// // // // // // // // The number of nonzero singular values equals the [rank](!/linear-algebra/matrix/rank) of $A$:

// // // // // // // // @academic[formula_callout:svd_rank|SVD Rank|$$\\text{rank}(A) = \\#\\{i : \\sigma_i > 0\\}$$]@
// // // // // // // // @academic[formulas_link:/linear-algebra/formulas#svd_rank]@

// // // // // // // // This is the most numerically stable method for determining rank: compute the SVD and count singular values above a tolerance.

// // // // // // // // The largest singular value $\\sigma_1$ is the operator norm $\\|A\\|_2 = \\max_{\\|\\mathbf{x}\\|=1}\\|A\\mathbf{x}\\|$. The [Frobenius norm](!/linear-algebra/matrix/trace) is $\\|A\\|_F = \\sqrt{\\sigma_1^2 + \\sigma_2^2 + \\cdots + \\sigma_r^2}$. The condition number is $\\kappa(A) = \\sigma_1/\\sigma_r$ — a large condition number means the matrix is nearly singular and small perturbations in the input cause large changes in the output.`,
// // // // // // // //     before: ``,
// // // // // // // //     after: ``,
// // // // // // // //     link: ``,
// // // // // // // //   },
// // // // // // // //   obj4: {
// // // // // // // //     title: `Computing the SVD`,
// // // // // // // //     content: `The standard approach computes the SVD through the eigenvalue decomposition of $A^TA$.

// // // // // // // // Form $A^TA$ (symmetric, $n \\times n$). Find its eigenvalues $\\lambda_1 \\geq \\cdots \\geq \\lambda_n \\geq 0$ and orthonormal eigenvectors $\\mathbf{v}_1, \\dots, \\mathbf{v}_n$ using the [spectral decomposition](!/linear-algebra/decompositions/spectral). These are the right singular vectors: $V = [\\mathbf{v}_1 \\; \\cdots \\; \\mathbf{v}_n]$.

// // // // // // // // The singular values are $\\sigma_i = \\sqrt{\\lambda_i}$. The left singular vectors are computed from the right ones: $\\mathbf{u}_i = \\frac{1}{\\sigma_i}A\\mathbf{v}_i$ for each nonzero $\\sigma_i$. If $r < m$, extend $\\{\\mathbf{u}_1, \\dots, \\mathbf{u}_r\\}$ to an [orthonormal basis](!/linear-algebra/orthogonality/orthogonal-sets) for $\\mathbb{R}^m$.

// // // // // // // // ## Worked Example

// // // // // // // // For $A = \\begin{pmatrix} 1 & 0 \\\\ 0 & 1 \\\\ 1 & 1 \\end{pmatrix}$: $A^TA = \\begin{pmatrix} 2 & 1 \\\\ 1 & 2 \\end{pmatrix}$, eigenvalues $3$ and $1$, eigenvectors $\\frac{1}{\\sqrt{2}}(1, 1)^T$ and $\\frac{1}{\\sqrt{2}}(1, -1)^T$. Singular values: $\\sqrt{3}$ and $1$. Left singular vectors: $\\mathbf{u}_1 = \\frac{1}{\\sqrt{3}}A\\mathbf{v}_1 = \\frac{1}{\\sqrt{6}}(1, 1, 2)^T$, $\\mathbf{u}_2 = A\\mathbf{v}_2 = \\frac{1}{\\sqrt{2}}(1, -1, 0)^T$. Extend with $\\mathbf{u}_3 = \\frac{1}{\\sqrt{3}}(-1, -1, 1)^T$.`,
// // // // // // // //     before: ``,
// // // // // // // //     after: ``,
// // // // // // // //     link: ``,
// // // // // // // //   },
// // // // // // // //   obj5: {
// // // // // // // //     title: `Compact and Thin Forms`,
// // // // // // // //     content: `The full SVD has $U$ of size $m \\times m$, $\\Sigma$ of size $m \\times n$, and $V$ of size $n \\times n$. Two economical alternatives retain only the essential information.

// // // // // // // // The thin SVD keeps only the first $n$ columns of $U$ (call them $U_1$) and the top $n \\times n$ block of $\\Sigma$ (call it $\\Sigma_1$): $A = U_1 \\Sigma_1 V^T$. This drops the columns of $U$ corresponding to the [left null space](!/linear-algebra/vector-spaces/fundamental-spaces).

// // // // // // // // The compact SVD keeps only the first $r$ columns of $U$ and $V$ (where $r = \\text{rank}(A)$) and the $r \\times r$ diagonal block of nonzero singular values: $A = U_r \\Sigma_r V_r^T$. This is the most economical representation — it captures only the rank-$r$ content of $A$, discarding everything associated with zero singular values.

// // // // // // // // All three forms represent the same matrix $A$. The compact form uses the least storage; the full form provides bases for all four [fundamental subspaces](!/linear-algebra/vector-spaces/fundamental-spaces). The three variants line up cleanly on factor dimensions and on what each one chooses to keep.`,
// // // // // // // //     before: ``,
// // // // // // // //     after: ``,
// // // // // // // //     link: ``,
// // // // // // // //   },
// // // // // // // //   obj6: {
// // // // // // // //     title: `SVD and the Four Fundamental Subspaces`,
// // // // // // // //     content: `The SVD simultaneously provides orthonormal [bases](!/linear-algebra/vector-spaces) for all four [fundamental subspaces](!/linear-algebra/vector-spaces/fundamental-spaces) of $A$:

// // // // // // // // @academic[formula_callout:svd_four_fundamental_subspaces|SVD Four Fundamental Subspaces|$$\\begin{aligned} \\text{Col}(A) &= \\text{Span}\\{\\mathbf{u}_1, \\ldots, \\mathbf{u}_r\\} \\\\ \\text{Null}(A^T) &= \\text{Span}\\{\\mathbf{u}_{r+1}, \\ldots, \\mathbf{u}_m\\} \\\\ \\text{Row}(A) &= \\text{Span}\\{\\mathbf{v}_1, \\ldots, \\mathbf{v}_r\\} \\\\ \\text{Null}(A) &= \\text{Span}\\{\\mathbf{v}_{r+1}, \\ldots, \\mathbf{v}_n\\} \\end{aligned}$$]@
// // // // // // // // @academic[formulas_link:/linear-algebra/formulas#svd_four_fundamental_subspaces]@

// // // // // // // // The first $r$ columns of $V$ ($\\mathbf{v}_1, \\dots, \\mathbf{v}_r$) form an orthonormal basis for the row space of $A$.

// // // // // // // // The last $n - r$ columns of $V$ ($\\mathbf{v}_{r+1}, \\dots, \\mathbf{v}_n$) form an orthonormal basis for the [null space](!/linear-algebra/vector-spaces/fundamental-spaces) of $A$.

// // // // // // // // The first $r$ columns of $U$ ($\\mathbf{u}_1, \\dots, \\mathbf{u}_r$) form an orthonormal basis for the [column space](!/linear-algebra/vector-spaces/fundamental-spaces) of $A$.

// // // // // // // // The last $m - r$ columns of $U$ ($\\mathbf{u}_{r+1}, \\dots, \\mathbf{u}_m$) form an orthonormal basis for the left null space of $A$.

// // // // // // // // No other factorization provides all four bases simultaneously, and no other method guarantees that these bases are orthonormal. The SVD is the complete structural portrait of any matrix.`,
// // // // // // // //     before: ``,
// // // // // // // //     after: ``,
// // // // // // // //     link: ``,
// // // // // // // //   },
// // // // // // // //   obj7: {
// // // // // // // //     title: `The Pseudoinverse`,
// // // // // // // //     content: `The Moore-Penrose pseudoinverse $A^+$ is computed directly from the SVD:

// // // // // // // // @academic[formula_callout:moore_penrose_pseudoinverse|Moore-Penrose Pseudoinverse|$$A^+ = V\\Sigma^+ U^T$$]@
// // // // // // // // @academic[formulas_link:/linear-algebra/formulas#moore_penrose_pseudoinverse]@

// // // // // // // // The matrix $\\Sigma^+$ is formed by reciprocating each nonzero singular value and transposing the shape: if $\\Sigma$ is $m \\times n$ with diagonal entries $\\sigma_1, \\dots, \\sigma_r, 0, \\dots, 0$, then $\\Sigma^+$ is $n \\times m$ with diagonal entries $1/\\sigma_1, \\dots, 1/\\sigma_r, 0, \\dots, 0$.

// // // // // // // // The pseudoinverse satisfies four defining properties: $AA^+A = A$, $A^+AA^+ = A^+$, $(AA^+)^T = AA^+$, $(A^+A)^T = A^+A$.

// // // // // // // // For a full-rank overdetermined system ($m > n$, rank $= n$), $A^+\\mathbf{b}$ gives the [least-squares](!/linear-algebra/orthogonality/least-squares) solution. For a rank-deficient system, $A^+\\mathbf{b}$ gives the minimum-norm least-squares solution — the solution of smallest length among all minimizers of $\\|A\\mathbf{x} - \\mathbf{b}\\|$.`,
// // // // // // // //     before: ``,
// // // // // // // //     after: ``,
// // // // // // // //     link: ``,
// // // // // // // //   },
// // // // // // // //   obj8: {
// // // // // // // //     title: `Low-Rank Approximation`,
// // // // // // // //     content: `The best rank-$k$ approximation to $A$ in either the operator norm or the Frobenius norm is obtained by truncating the SVD at $k$ terms:

// // // // // // // // @academic[formula_callout:eckart_young_low_rank_approximation|Eckart-Young Low-Rank Approximation|$$A_k = \\sum_{i=1}^{k} \\sigma_i \\mathbf{u}_i \\mathbf{v}_i^T, \\qquad \\|A - A_k\\|_2 = \\sigma_{k+1}, \\quad \\|A - A_k\\|_F = \\sqrt{\\sum_{i=k+1}^{r}\\sigma_i^2}$$]@
// // // // // // // // @academic[formulas_link:/linear-algebra/formulas#eckart_young_low_rank_approximation]@

// // // // // // // // This is the Eckart-Young-Mirsky theorem. Among all matrices of rank at most $k$, $A_k$ is the closest to $A$. The approximation error equals $\\sigma_{k+1}$ (the first discarded singular value) in the operator norm, and $\\sqrt{\\sigma_{k+1}^2 + \\cdots + \\sigma_r^2}$ in the Frobenius norm.

// // // // // // // // When the singular values decay rapidly — $\\sigma_1 \\gg \\sigma_2 \\gg \\cdots$ — a small number of terms captures most of the matrix. This is the basis of image compression (store $k$ singular value triples instead of $mn$ entries), noise reduction (discard small singular values as noise), latent semantic analysis (retain the top-$k$ "concepts" in a document-term matrix), and dimensionality reduction more broadly.`,
// // // // // // // //     before: ``,
// // // // // // // //     after: ``,
// // // // // // // //     link: ``,
// // // // // // // //   },
// // // // // // // //   obj9: {
// // // // // // // //     title: `SVD and Norms`,
// // // // // // // //     content: `The singular values provide the complete "size profile" of a matrix.

// // // // // // // // The operator (spectral) norm is the largest singular value:

// // // // // // // // @academic[formula_callout:operator_norm|Operator Norm|$$\\|A\\|_2 = \\sigma_1 = \\max_{\\|\\mathbf{x}\\|=1} \\|A\\mathbf{x}\\|$$]@
// // // // // // // // @academic[formulas_link:/linear-algebra/formulas#operator_norm]@

// // // // // // // // It measures the maximum factor by which $A$ can stretch a unit vector.

// // // // // // // // The [Frobenius norm](!/linear-algebra/matrix/trace) is the root-sum-of-squares of all singular values:

// // // // // // // // @academic[formula_callout:frobenius_norm_via_singular_values|Frobenius Norm via Singular Values|$$\\|A\\|_F = \\sqrt{\\sum_{i=1}^{r} \\sigma_i^2}$$]@
// // // // // // // // @academic[formulas_link:/linear-algebra/formulas#frobenius_norm_via_singular_values]@

// // // // // // // // It measures the total "energy" in the matrix.

// // // // // // // // The condition number quantifies sensitivity to perturbation:

// // // // // // // // @academic[formula_callout:condition_number|Condition Number|$$\\kappa(A) = \\frac{\\sigma_1}{\\sigma_r}$$]@
// // // // // // // // @academic[formulas_link:/linear-algebra/formulas#condition_number]@

// // // // // // // // A matrix with $\\kappa = 10^k$ loses roughly $k$ digits of accuracy in solving $A\\mathbf{x} = \\mathbf{b}$ with floating-point arithmetic. A perfectly conditioned matrix ($\\kappa = 1$) is orthogonal. A singular matrix ($\\sigma_r = 0$) has $\\kappa = \\infty$.

// // // // // // // // The singular values are the natural measuring tool for matrices, just as eigenvalues are the natural measuring tool for symmetric matrices and [linear operators](!/linear-algebra/transformations). For non-symmetric matrices, singular values (not eigenvalues) govern norms and conditioning.`,
// // // // // // // //     before: ``,
// // // // // // // //     after: ``,
// // // // // // // //     link: ``,
// // // // // // // //   },
// // // // // // // //   obj10: {
// // // // // // // //     title: `SVD and the Spectral Decomposition`,
// // // // // // // //     content: `For a symmetric positive semi-definite matrix $A$ with eigenvalues $\\lambda_1 \\geq \\cdots \\geq \\lambda_n \\geq 0$, the [spectral decomposition](!/linear-algebra/decompositions/spectral) $A = QDQ^T$ is also the SVD: $U = V = Q$ and $\\Sigma = D$. The singular values are the eigenvalues.

// // // // // // // // For a general symmetric matrix with some negative eigenvalues, the singular values are $|\\lambda_i|$. The signs are absorbed into $U$ or $V$: if $\\lambda_i < 0$, one of the corresponding singular vectors is negated so that $\\sigma_i = |\\lambda_i| > 0$.

// // // // // // // // For non-symmetric or rectangular matrices, the eigendecomposition does not apply (it requires square matrices and may not exist even then), but the SVD always does. The SVD is the correct generalization of the spectral decomposition to the broadest possible class of matrices.`,
// // // // // // // //     before: ``,
// // // // // // // //     after: ``,
// // // // // // // //     link: ``,
// // // // // // // //   },
// // // // // // // //   obj11: {
// // // // // // // //     title: `The Outer Product Form`,
// // // // // // // //     content: `The SVD can be written as a sum of rank-one matrices:

// // // // // // // // @academic[formula_callout:svd_outer_product_form|SVD Outer Product Form|$$A = \\sum_{i=1}^{r} \\sigma_i \\, \\mathbf{u}_i \\mathbf{v}_i^T$$]@
// // // // // // // // @academic[formulas_link:/linear-algebra/formulas#svd_outer_product_form]@

// // // // // // // // Each term $\\sigma_i \\mathbf{u}_i\\mathbf{v}_i^T$ is an $m \\times n$ rank-one matrix. The singular value $\\sigma_i$ weights its contribution. The terms are ordered by importance: the first term captures the most of $A$ (in the norm sense), the second captures the most of the remainder, and so on.

// // // // // // // // Truncating this sum at $k$ terms gives the best rank-$k$ approximation $A_k$. The fraction of the Frobenius norm captured by the first $k$ terms is $(\\sigma_1^2 + \\cdots + \\sigma_k^2)/(\\sigma_1^2 + \\cdots + \\sigma_r^2)$.

// // // // // // // // This outer product perspective is the basis of nearly every matrix approximation method: keep the large singular values (signal) and discard the small ones (noise or redundancy).`,
// // // // // // // //     before: ``,
// // // // // // // //     after: ``,
// // // // // // // //     link: ``,
// // // // // // // //   },
// // // // // // // //   obj12: {
// // // // // // // //     title: `What the SVD Reveals`,
// // // // // // // //     content: `No other single factorization provides as much structural information about a matrix.

// // // // // // // // The [rank](!/linear-algebra/matrix/rank): the number of nonzero singular values.

// // // // // // // // The four [fundamental subspaces](!/linear-algebra/vector-spaces/fundamental-spaces): orthonormal bases from the columns of $U$ and $V$.

// // // // // // // // The [pseudoinverse](!/linear-algebra/orthogonality/least-squares): $A^+ = V\\Sigma^+ U^T$.

// // // // // // // // The best rank-$k$ approximation: truncate at $k$ terms.

// // // // // // // // Norms and the condition number: directly from the singular values.

// // // // // // // // The [geometry](!/linear-algebra/transformations/geometric) of the linear map: rotation, scaling, rotation.

// // // // // // // // For symmetric matrices, the SVD reduces to the [spectral decomposition](!/linear-algebra/decompositions/spectral). For invertible square matrices, the singular values reveal the conditioning that the [determinant](!/linear-algebra/determinants) alone cannot see (a matrix with $\\det = 1$ can still be poorly conditioned). For rectangular matrices, the SVD is the only factorization that applies without modification.

// // // // // // // // The SVD is the culmination of the decomposition hierarchy — the most general, most informative, and most broadly applicable factorization in linear algebra.

// // // // // // // // The six structural quantities the SVD exposes — rank, the four fundamental subspaces, the pseudoinverse, the best rank-$k$ approximation, norms and condition number, and the geometric decomposition — collect into a single reference card below.`,
// // // // // // // //     before: ``,
// // // // // // // //     after: ``,
// // // // // // // //     link: ``,
// // // // // // // //   },
// // // // // // // // }

// // // // // // // // const introContent = {
// // // // // // // //   title: `The Universal Matrix Factorization`,
// // // // // // // //   content: `The singular value decomposition factors any matrix of any shape as UΣVᵀ — two orthogonal matrices sandwiching a diagonal matrix of non-negative singular values. It exists for every matrix, reveals the rank, provides orthonormal bases for all four fundamental subspaces, computes the pseudoinverse, yields the best low-rank approximation, and decomposes every linear transformation into a rotation, a scaling, and another rotation. No other single factorization provides this much information.`,
// // // // // // // // }

// // // // // // // // const faqQuestions = {
// // // // // // // //   obj1: {
// // // // // // // //     question: "What is the singular value decomposition?",
// // // // // // // //     answer: "The SVD factors any m×n matrix A as A = UΣVᵀ, where U and V are orthogonal matrices of left and right singular vectors, and Σ is diagonal with non-negative singular values. It exists for every matrix regardless of shape, rank, or symmetry.",
// // // // // // // //     sectionId: "1"
// // // // // // // //   },
// // // // // // // //   obj2: {
// // // // // // // //     question: "What do singular values represent geometrically?",
// // // // // // // //     answer: "Singular values measure how much a matrix stretches vectors along each orthogonal direction. The largest singular value σ₁ is the maximum stretching factor, and the transformation A decomposes geometrically into a rotation (Vᵀ), a coordinate-axis scaling (Σ), and another rotation (U).",
// // // // // // // //     sectionId: "2"
// // // // // // // //   },
// // // // // // // //   obj3: {
// // // // // // // //     question: "How does SVD give the best low-rank approximation?",
// // // // // // // //     answer: "The Eckart-Young-Mirsky theorem states that truncating the SVD at k terms gives the closest rank-k matrix to A in both operator and Frobenius norms. The approximation error equals σₖ₊₁ in operator norm. This is the basis of image compression and noise reduction.",
// // // // // // // //     sectionId: "8"
// // // // // // // //   },
// // // // // // // //   obj4: {
// // // // // // // //     question: "How is the pseudoinverse computed from the SVD?",
// // // // // // // //     answer: "The Moore-Penrose pseudoinverse is A⁺ = VΣ⁺Uᵀ, where Σ⁺ reciprocates each nonzero singular value and transposes the shape. For overdetermined systems A⁺b gives the least-squares solution; for rank-deficient systems it gives the minimum-norm least-squares solution.",
// // // // // // // //     sectionId: "7"
// // // // // // // //   },
// // // // // // // //   obj5: {
// // // // // // // //     question: "How does SVD reveal the four fundamental subspaces?",
// // // // // // // //     answer: "The first r columns of V span the row space, the remaining n−r columns span the null space. The first r columns of U span the column space, the remaining m−r columns span the left null space. No other factorization provides orthonormal bases for all four subspaces simultaneously.",
// // // // // // // //     sectionId: "6"
// // // // // // // //   },
// // // // // // // //   obj6: {
// // // // // // // //     question: "What is the condition number of a matrix?",
// // // // // // // //     answer: "The condition number κ(A) = σ₁/σᵣ is the ratio of the largest to smallest nonzero singular value. It measures sensitivity to perturbation: a matrix with κ = 10ᵏ loses roughly k digits of accuracy in floating-point computation. Orthogonal matrices have κ = 1; singular matrices have κ = ∞.",
// // // // // // // //     sectionId: "9"
// // // // // // // //   }
// // // // // // // // }


// // // // // // // // const schemas = {
// // // // // // // //   learningResource: {
// // // // // // // //     "@context": "https://schema.org",
// // // // // // // //     "@type": "LearningResource",
// // // // // // // //     "name": "Singular Value Decomposition (SVD)",
// // // // // // // //     "description": "Singular value decomposition A = UΣVᵀ: singular values, geometric interpretation, pseudoinverse, low-rank approximation, four fundamental subspaces, norms, and condition number.",
// // // // // // // //     "url": "https://www.learnmathclass.com/linear-algebra/decompositions/svd",
// // // // // // // //     "inLanguage": "en-US",
// // // // // // // //     "learningResourceType": "Explanation",
// // // // // // // //     "educationalLevel": "College",
// // // // // // // //     "educationalUse": "Learning",
// // // // // // // //     "audience": {
// // // // // // // //       "@type": "EducationalAudience",
// // // // // // // //       "educationalRole": "student"
// // // // // // // //     },
// // // // // // // //     "about": {
// // // // // // // //       "@type": "Thing",
// // // // // // // //       "name": "Singular Value Decomposition"
// // // // // // // //     },
// // // // // // // //     "teaches": [
// // // // // // // //       "SVD factorization A = UΣVᵀ for any matrix",
// // // // // // // //       "Geometric interpretation as rotation-scaling-rotation",
// // // // // // // //       "Singular values from eigenvalues of AᵀA",
// // // // // // // //       "Four fundamental subspaces from U and V",
// // // // // // // //       "Moore-Penrose pseudoinverse via SVD",
// // // // // // // //       "Best low-rank approximation (Eckart-Young theorem)",
// // // // // // // //       "Matrix norms and condition number from singular values",
// // // // // // // //       "Outer product form and relationship to spectral decomposition",
// // // // // // // //       "Side-by-side comparison of full, thin, and compact SVD forms",
// // // // // // // //       "Reference card collecting everything the SVD reveals about a matrix"
// // // // // // // //     ],
// // // // // // // //     "keywords": keyWords.join(", "),
// // // // // // // //     "author": {
// // // // // // // //       "@type": "Organization",
// // // // // // // //       "name": "Learn Math Class"
// // // // // // // //     },
// // // // // // // //     "publisher": {
// // // // // // // //       "@type": "Organization",
// // // // // // // //       "name": "Learn Math Class"
// // // // // // // //     },
// // // // // // // //     "datePublished": "2024-01-15",
// // // // // // // //     "dateModified": new Date().toISOString()
// // // // // // // //   },

// // // // // // // //   breadcrumb: {
// // // // // // // //     "@context": "https://schema.org",
// // // // // // // //     "@type": "BreadcrumbList",
// // // // // // // //     "itemListElement": [
// // // // // // // //       {
// // // // // // // //         "@type": "ListItem",
// // // // // // // //         "position": 1,
// // // // // // // //         "name": "Home",
// // // // // // // //         "item": "https://www.learnmathclass.com"
// // // // // // // //       },
// // // // // // // //       {
// // // // // // // //         "@type": "ListItem",
// // // // // // // //         "position": 2,
// // // // // // // //         "name": "Linear Algebra",
// // // // // // // //         "item": "https://www.learnmathclass.com/linear-algebra"
// // // // // // // //       },
// // // // // // // //       {
// // // // // // // //         "@type": "ListItem",
// // // // // // // //         "position": 3,
// // // // // // // //         "name": "Decompositions",
// // // // // // // //         "item": "https://www.learnmathclass.com/linear-algebra/decompositions"
// // // // // // // //       },
// // // // // // // //       {
// // // // // // // //         "@type": "ListItem",
// // // // // // // //         "position": 4,
// // // // // // // //         "name": "Singular Value Decomposition",
// // // // // // // //         "item": "https://www.learnmathclass.com/linear-algebra/decompositions/svd"
// // // // // // // //       }
// // // // // // // //     ]
// // // // // // // //   },

// // // // // // // //   faq: {
// // // // // // // //     "@context": "https://schema.org",
// // // // // // // //     "@type": "FAQPage",
// // // // // // // //     "mainEntity": Object.keys(faqQuestions).map(key => ({
// // // // // // // //       "@type": "Question",
// // // // // // // //       "name": faqQuestions[key].question,
// // // // // // // //       "acceptedAnswer": {
// // // // // // // //         "@type": "Answer",
// // // // // // // //         "text": faqQuestions[key].answer
// // // // // // // //       }
// // // // // // // //     }))
// // // // // // // //   }
// // // // // // // // }


// // // // // // // //   return {
// // // // // // // //   props:{
// // // // // // // //     sectionsContent,
// // // // // // // //     introContent,
// // // // // // // //     obj5Table,
// // // // // // // //     obj6Table,
// // // // // // // //     obj9Table,
// // // // // // // //     summaryTable,
// // // // // // // //     faqQuestions,
// // // // // // // //     schemas,
// // // // // // // //     seoData: {
// // // // // // // //       title: "SVD: Singular Value Decomposition | Learn Math Class",
// // // // // // // //       description: "Singular value decomposition A = UΣVᵀ: singular values, geometric interpretation, pseudoinverse, low-rank approximation, four fundamental subspaces, norms, and condition number.",
// // // // // // // //       keywords: keyWords.join(", "),
// // // // // // // //       url: "/linear-algebra/decompositions/svd",
// // // // // // // //       name: "Singular Value Decomposition (SVD)"
// // // // // // // //     },
// // // // // // // //   }
// // // // // // // // }
// // // // // // // //    }

// // // // // // // // // export default function PageTemplate({seoData,sectionsContent , introContent}) {
// // // // // // // // export default function SVDPage({
// // // // // // // //   seoData,
// // // // // // // //   sectionsContent,
// // // // // // // //   introContent,
// // // // // // // //   obj5Table,
// // // // // // // //   obj6Table,
// // // // // // // //   obj9Table,
// // // // // // // //   summaryTable,
// // // // // // // //   faqQuestions,
// // // // // // // //   schemas,
// // // // // // // // }) {

// // // // // // // //   const tableWrapStyle = { margin: '20px auto', width: '100%' }

// // // // // // // //   const genericSections=[
// // // // // // // //     {
// // // // // // // //         id:'1',
// // // // // // // //         title:sectionsContent.obj1.title,
// // // // // // // //         link:sectionsContent.obj1.link,
// // // // // // // //         content:[
// // // // // // // //           sectionsContent.obj1.content,
// // // // // // // //         ]
// // // // // // // //     },
// // // // // // // //     {
// // // // // // // //         id:'2',
// // // // // // // //         title:sectionsContent.obj2.title,
// // // // // // // //         link:sectionsContent.obj2.link,
// // // // // // // //         content:[
// // // // // // // //           sectionsContent.obj2.content,
// // // // // // // //         ]
// // // // // // // //     },
// // // // // // // //     {
// // // // // // // //         id:'3',
// // // // // // // //         title:sectionsContent.obj3.title,
// // // // // // // //         link:sectionsContent.obj3.link,
// // // // // // // //         content:[
// // // // // // // //           sectionsContent.obj3.content,
// // // // // // // //         ]
// // // // // // // //     },
// // // // // // // //     {
// // // // // // // //         id:'4',
// // // // // // // //         title:sectionsContent.obj4.title,
// // // // // // // //         link:sectionsContent.obj4.link,
// // // // // // // //         content:[
// // // // // // // //           sectionsContent.obj4.content,
// // // // // // // //         ]
// // // // // // // //     },
// // // // // // // //     {
// // // // // // // //         id:'5',
// // // // // // // //         title:sectionsContent.obj5.title,
// // // // // // // //         link:sectionsContent.obj5.link,
// // // // // // // //         content:[
// // // // // // // //           sectionsContent.obj5.content,
// // // // // // // //           <div key={'obj5-table'} style={tableWrapStyle}
// // // // // // // //                dangerouslySetInnerHTML={{ __html: obj5Table }} />,
// // // // // // // //         ]
// // // // // // // //     },
// // // // // // // //     {
// // // // // // // //         id:'6',
// // // // // // // //         title:sectionsContent.obj6.title,
// // // // // // // //         link:sectionsContent.obj6.link,
// // // // // // // //         content:[
// // // // // // // //           sectionsContent.obj6.content,
// // // // // // // //           <div key={'obj6-table'} style={tableWrapStyle}
// // // // // // // //                dangerouslySetInnerHTML={{ __html: obj6Table }} />,
// // // // // // // //         ]
// // // // // // // //     },
// // // // // // // //     {
// // // // // // // //         id:'7',
// // // // // // // //         title:sectionsContent.obj7.title,
// // // // // // // //         link:sectionsContent.obj7.link,
// // // // // // // //         content:[
// // // // // // // //           sectionsContent.obj7.content,
// // // // // // // //         ]
// // // // // // // //     },
// // // // // // // //     {
// // // // // // // //         id:'8',
// // // // // // // //         title:sectionsContent.obj8.title,
// // // // // // // //         link:sectionsContent.obj8.link,
// // // // // // // //         content:[
// // // // // // // //           sectionsContent.obj8.content,
// // // // // // // //         ]
// // // // // // // //     },
// // // // // // // //     {
// // // // // // // //         id:'9',
// // // // // // // //         title:sectionsContent.obj9.title,
// // // // // // // //         link:sectionsContent.obj9.link,
// // // // // // // //         content:[
// // // // // // // //           sectionsContent.obj9.content,
// // // // // // // //           <div key={'obj9-table'} style={tableWrapStyle}
// // // // // // // //                dangerouslySetInnerHTML={{ __html: obj9Table }} />,
// // // // // // // //         ]
// // // // // // // //     },
// // // // // // // //     {
// // // // // // // //         id:'10',
// // // // // // // //         title:sectionsContent.obj10.title,
// // // // // // // //         link:sectionsContent.obj10.link,
// // // // // // // //         content:[
// // // // // // // //           sectionsContent.obj10.content,
// // // // // // // //         ]
// // // // // // // //     },
// // // // // // // //     {
// // // // // // // //         id:'11',
// // // // // // // //         title:sectionsContent.obj11.title,
// // // // // // // //         link:sectionsContent.obj11.link,
// // // // // // // //         content:[
// // // // // // // //           sectionsContent.obj11.content,
// // // // // // // //         ]
// // // // // // // //     },
// // // // // // // //     {
// // // // // // // //         id:'12',
// // // // // // // //         title:sectionsContent.obj12.title,
// // // // // // // //         link:sectionsContent.obj12.link,
// // // // // // // //         content:[
// // // // // // // //           sectionsContent.obj12.content,
// // // // // // // //           <div key={'summary-table'} style={tableWrapStyle}
// // // // // // // //                dangerouslySetInnerHTML={{ __html: summaryTable }} />,
// // // // // // // //         ]
// // // // // // // //     },
// // // // // // // //     // {
// // // // // // // //     //     id:'13',
// // // // // // // //     //     title:sectionsContent.obj13.title,
// // // // // // // //     //     link:sectionsContent.obj13.link,
// // // // // // // //     //     content:[
// // // // // // // //     //       sectionsContent.obj13.content,
// // // // // // // //     //     ]
// // // // // // // //     // },
// // // // // // // //     // {
// // // // // // // //     //     id:'14',
// // // // // // // //     //     title:sectionsContent.obj14.title,
// // // // // // // //     //     link:sectionsContent.obj14.link,
// // // // // // // //     //     content:[
// // // // // // // //     //       sectionsContent.obj14.content,
// // // // // // // //     //     ]
// // // // // // // //     // },
// // // // // // // //     // {
// // // // // // // //     //     id:'15',
// // // // // // // //     //     title:sectionsContent.obj15.title,
// // // // // // // //     //     link:sectionsContent.obj15.link,
// // // // // // // //     //     content:[
// // // // // // // //     //       sectionsContent.obj15.content,
// // // // // // // //     //     ]
// // // // // // // //     // },
// // // // // // // //     // {
// // // // // // // //     //     id:'1',
// // // // // // // //     //     title:sectionsContent.obj1.title,
// // // // // // // //     //     link:sectionsContent.obj1.link,
// // // // // // // //     //     content:[
// // // // // // // //     //       sectionsContent.obj1.content,
// // // // // // // //     //     ]
// // // // // // // //     // },
// // // // // // // //     // {
// // // // // // // //     //     id:'1',
// // // // // // // //     //     title:sectionsContent.obj1.title,
// // // // // // // //     //     link:sectionsContent.obj1.link,
// // // // // // // //     //     content:[
// // // // // // // //     //       sectionsContent.obj1.content,
// // // // // // // //     //     ]
// // // // // // // //     // },
// // // // // // // //     // {
// // // // // // // //     //     id:'1',
// // // // // // // //     //     title:sectionsContent.obj1.title,
// // // // // // // //     //     link:sectionsContent.obj1.link,
// // // // // // // //     //     content:[
// // // // // // // //     //       sectionsContent.obj1.content,
// // // // // // // //     //     ]
// // // // // // // //     // },

// // // // // // // // ]

// // // // // // // //   return (
// // // // // // // //    <>
// // // // // // // //    {/* <Head>
// // // // // // // //   <title>{seoData.title}</title>
// // // // // // // //   <meta name="description" content={seoData.description} />
// // // // // // // //   <meta name="keywords" content={seoData.keywords} />
// // // // // // // //   <link rel="canonical" href={`https://www.learnmathclass.com${seoData.url}`} />

// // // // // // // //   <meta property="og:title" content={seoData.title} />
// // // // // // // //   <meta property="og:description" content={seoData.description} />
// // // // // // // //   <meta property="og:url" content={`https://www.learnmathclass.com${seoData.url}`} />
// // // // // // // //   <meta property="og:type" content="article" />
// // // // // // // //   <meta property="og:site_name" content="Learn Math Class" />

// // // // // // // //   <meta name="twitter:card" content="summary" />
// // // // // // // //   <meta name="twitter:title" content={seoData.title} />
// // // // // // // //   <meta name="twitter:description" content={seoData.description} />

// // // // // // // //   <meta name="robots" content="index, follow" />

// // // // // // // //   <script
// // // // // // // //     type="application/ld+json"
// // // // // // // //     dangerouslySetInnerHTML={{
// // // // // // // //       __html: JSON.stringify({
// // // // // // // //         "@context": "https://schema.org",
// // // // // // // //         "@type": "WebPage",
// // // // // // // //         "name": seoData.name,
// // // // // // // //         "description": seoData.description,
// // // // // // // //         "keywords": seoData.keywords,
// // // // // // // //         "url": `https://www.learnmathclass.com${seoData.url}`,
// // // // // // // //         "dateModified": new Date().toISOString(),
// // // // // // // //         "inLanguage": "en-US",
// // // // // // // //         "mainEntity": {
// // // // // // // //           "@type": "Article",
// // // // // // // //           "name": seoData.name,
// // // // // // // //           "dateModified": new Date().toISOString(),
// // // // // // // //           "author": {
// // // // // // // //             "@type": "Organization",
// // // // // // // //             "name": "Learn Math Class"
// // // // // // // //           }
// // // // // // // //         }
// // // // // // // //       })
// // // // // // // //     }}
// // // // // // // //   />
// // // // // // // // </Head> */}

// // // // // // // // <Head>
// // // // // // // //   <title>{seoData.title}</title>
// // // // // // // //   <meta name="description" content={seoData.description} />
// // // // // // // //   <meta name="keywords" content={seoData.keywords} />
// // // // // // // //   <link rel="canonical" href={`https://www.learnmathclass.com${seoData.url}`} />

// // // // // // // //   <meta property="og:title" content={seoData.title} />
// // // // // // // //   <meta property="og:description" content={seoData.description} />
// // // // // // // //   <meta property="og:url" content={`https://www.learnmathclass.com${seoData.url}`} />
// // // // // // // //   <meta property="og:type" content="article" />
// // // // // // // //   <meta property="og:site_name" content="Learn Math Class" />

// // // // // // // //   <meta name="twitter:card" content="summary" />
// // // // // // // //   <meta name="twitter:title" content={seoData.title} />
// // // // // // // //   <meta name="twitter:description" content={seoData.description} />

// // // // // // // //   <meta name="robots" content="index, follow" />

// // // // // // // //   <script
// // // // // // // //     type="application/ld+json"
// // // // // // // //     dangerouslySetInnerHTML={{
// // // // // // // //       __html: JSON.stringify(schemas.learningResource)
// // // // // // // //     }}
// // // // // // // //   />

// // // // // // // //   <script
// // // // // // // //     type="application/ld+json"
// // // // // // // //     dangerouslySetInnerHTML={{
// // // // // // // //       __html: JSON.stringify(schemas.breadcrumb)
// // // // // // // //     }}
// // // // // // // //   />

// // // // // // // //   <script
// // // // // // // //     type="application/ld+json"
// // // // // // // //     dangerouslySetInnerHTML={{
// // // // // // // //       __html: JSON.stringify(schemas.faq)
// // // // // // // //     }}
// // // // // // // //   />
// // // // // // // // </Head>
// // // // // // // //    {/* <GenericNavbar/> */}
// // // // // // // //    <br/>
// // // // // // // //    <br/>
// // // // // // // //    <br/>
// // // // // // // //    <br/>
// // // // // // // //     <OperaSidebar
// // // // // // // //            side='right'
// // // // // // // //            // topOffset='65px'
// // // // // // // //            sidebarWidth='45px'
// // // // // // // //            panelWidth='200px'
// // // // // // // //            iconColor='white'
// // // // // // // //            panelBackgroundColor='#f2f2f2'
// // // // // // // //          />
// // // // // // // //    <Breadcrumb/>
// // // // // // // //    <br/>
// // // // // // // //    <br/>
// // // // // // // //    <h1 className='title' style={{marginTop:'0px',marginBottom:'10px'}}>SVD Decompositions</h1>
// // // // // // // //    <br/>
// // // // // // // //    <br/>
// // // // // // // //    <SectionTableOfContents sections={genericSections}
// // // // // // // //     showSecondaryNav={true}
// // // // // // // //          secondaryNavMode="siblings"  // or "children"
// // // // // // // //          secondaryNavTitle="More in this Section"

// // // // // // // //    />
// // // // // // // //    <br/>
// // // // // // // //    <br/>
// // // // // // // //    <br/>
// // // // // // // //     <IntroSection
// // // // // // // //           id={introContent.id}
// // // // // // // //           title={introContent.title}
// // // // // // // //           content={introContent.content}
// // // // // // // //            backgroundColor='#f9fafb'
// // // // // // // //           //  "#f2f2f2"
// // // // // // // //           textColor="#06357a"
// // // // // // // //         />
// // // // // // // //    <br/>
// // // // // // // //    <br/>
// // // // // // // //    <Sections sections={genericSections}/>
// // // // // // // //    <br/>
// // // // // // // //    <br/>
// // // // // // // //    <br/>
// // // // // // // //    {/* <ScrollUpButton/> */}
// // // // // // // //    </>
// // // // // // // //   )
// // // // // // // // }



// // // // // // // // tables-optimized: v4 | 2026-05-18 | 4 tables (obj5 comparison, obj6 aggregation, obj9 aggregation, obj12 summary capstone)
// // // // // // // import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
// // // // // // // import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
// // // // // // // import IntroSection from '@/app/components/page-components/section/IntroContentSection'
// // // // // // // import Sections from '@/app/components/page-components/section/Sections'
// // // // // // // import SectionTableOfContents from '@/app/components/page-components/section/SectionTableofContents'
// // // // // // // import React from 'react'
// // // // // // // import '../../../pages.css'
// // // // // // // import Head from 'next/head'
// // // // // // // import KeyTermsCard from '@/app/components/page-components/KeyTermsCard'
// // // // // // // import { tableHeaders } from '@/app/styles/theme'
// // // // // // // import IdentitySheet from '@/app/components/infographics/linear-algebra/IdentitySheet'
// // // // // // // import DiagramFrame from '@/app/components/infographics/DiagramsFrame'


// // // // // // // export async function getStaticProps(){
// // // // // // // const keyWords = [
// // // // // // //   "singular value decomposition",
// // // // // // //   "SVD",
// // // // // // //   "singular values",
// // // // // // //   "left right singular vectors",
// // // // // // //   "low-rank approximation",
// // // // // // //   "pseudoinverse SVD",
// // // // // // //   "Moore-Penrose pseudoinverse",
// // // // // // //   "Eckart-Young theorem",
// // // // // // //   "matrix rank SVD",
// // // // // // //   "condition number singular values",
// // // // // // //   "four fundamental subspaces SVD",
// // // // // // //   "compact SVD thin SVD",
// // // // // // //   "SVD image compression",
// // // // // // //   "operator norm Frobenius norm",
// // // // // // //   "UΣVᵀ factorization"
// // // // // // // ]

// // // // // // //   const linkStyle = 'color: inherit; text-decoration: underline;'

// // // // // // //   // ---------- TABLES ----------

// // // // // // //   // obj5 — comparison: three SVD variants
// // // // // // //   const obj5Table = `
// // // // // // // <table class="styled-table" style="border-collapse: collapse; width: 78%;margin:auto; background: white; box-shadow: 0 2px 10px rgba(0,0,0,0.1); border-radius: 8px; overflow: hidden; font-family: Arial, sans-serif;">
// // // // // // //   <thead>
// // // // // // //     <tr>
// // // // // // //       <th style="${tableHeaders.comparison}">Form</th>
// // // // // // //       <th style="${tableHeaders.comparison} text-align: center;">U dimensions</th>
// // // // // // //       <th style="${tableHeaders.comparison} text-align: center;">Σ dimensions</th>
// // // // // // //       <th style="${tableHeaders.comparison} text-align: center;">V dimensions</th>
// // // // // // //       <th style="${tableHeaders.comparison}">What is stored / dropped</th>
// // // // // // //     </tr>
// // // // // // //   </thead>
// // // // // // //   <tbody>
// // // // // // //     <tr style="background: #f8f9fa;">
// // // // // // //       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Full SVD</td>
// // // // // // //       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e; text-align: center;">m × m</td>
// // // // // // //       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e; text-align: center;">m × n</td>
// // // // // // //       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e; text-align: center;">n × n</td>
// // // // // // //       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">orthonormal bases for all four <a href="/linear-algebra/vector-spaces/fundamental-spaces" style="${linkStyle}">fundamental subspaces</a></td>
// // // // // // //     </tr>
// // // // // // //     <tr>
// // // // // // //       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Thin SVD</td>
// // // // // // //       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e; text-align: center;">m × n</td>
// // // // // // //       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e; text-align: center;">n × n</td>
// // // // // // //       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e; text-align: center;">n × n</td>
// // // // // // //       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">drops the left null space columns of U</td>
// // // // // // //     </tr>
// // // // // // //     <tr style="background: #f8f9fa;">
// // // // // // //       <td style="padding: 12px 15px; font-weight: bold; color: #06357a;">Compact SVD</td>
// // // // // // //       <td style="padding: 12px 15px; color: #34495e; text-align: center;">m × r</td>
// // // // // // //       <td style="padding: 12px 15px; color: #34495e; text-align: center;">r × r</td>
// // // // // // //       <td style="padding: 12px 15px; color: #34495e; text-align: center;">n × r</td>
// // // // // // //       <td style="padding: 12px 15px; color: #34495e;">only the rank-r content; most economical storage</td>
// // // // // // //     </tr>
// // // // // // //   </tbody>
// // // // // // // </table>
// // // // // // // `

// // // // // // //   // obj6 — aggregation: four fundamental subspaces from the SVD
// // // // // // //   const obj6Table = `
// // // // // // // <table class="styled-table" style="border-collapse: collapse; width: 75%;margin:auto; background: white; box-shadow: 0 2px 10px rgba(0,0,0,0.1); border-radius: 8px; overflow: hidden; font-family: Arial, sans-serif;">
// // // // // // //   <thead>
// // // // // // //     <tr>
// // // // // // //       <th style="${tableHeaders.aggregation}">Fundamental subspace</th>
// // // // // // //       <th style="${tableHeaders.aggregation} text-align: center;">Basis from</th>
// // // // // // //       <th style="${tableHeaders.aggregation} text-align: center;">Column indices</th>
// // // // // // //       <th style="${tableHeaders.aggregation} text-align: center;">Dimension</th>
// // // // // // //     </tr>
// // // // // // //   </thead>
// // // // // // //   <tbody>
// // // // // // //     <tr style="background: #f8f9fa;">
// // // // // // //       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Row space of A</td>
// // // // // // //       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e; text-align: center;">V</td>
// // // // // // //       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e; text-align: center;">1, ..., r</td>
// // // // // // //       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e; text-align: center;">r</td>
// // // // // // //     </tr>
// // // // // // //     <tr>
// // // // // // //       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Null space of A</td>
// // // // // // //       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e; text-align: center;">V</td>
// // // // // // //       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e; text-align: center;">r+1, ..., n</td>
// // // // // // //       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e; text-align: center;">n − r</td>
// // // // // // //     </tr>
// // // // // // //     <tr style="background: #f8f9fa;">
// // // // // // //       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Column space of A</td>
// // // // // // //       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e; text-align: center;">U</td>
// // // // // // //       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e; text-align: center;">1, ..., r</td>
// // // // // // //       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e; text-align: center;">r</td>
// // // // // // //     </tr>
// // // // // // //     <tr>
// // // // // // //       <td style="padding: 12px 15px; font-weight: bold; color: #06357a;">Left null space of A</td>
// // // // // // //       <td style="padding: 12px 15px; color: #34495e; text-align: center;">U</td>
// // // // // // //       <td style="padding: 12px 15px; color: #34495e; text-align: center;">r+1, ..., m</td>
// // // // // // //       <td style="padding: 12px 15px; color: #34495e; text-align: center;">m − r</td>
// // // // // // //     </tr>
// // // // // // //   </tbody>
// // // // // // // </table>
// // // // // // // `

// // // // // // //   // obj9 — aggregation: norms and condition number from singular values
// // // // // // //   const obj9Table = `
// // // // // // // <table class="styled-table" style="border-collapse: collapse; width: 75%;margin:auto; background: white; box-shadow: 0 2px 10px rgba(0,0,0,0.1); border-radius: 8px; overflow: hidden; font-family: Arial, sans-serif;">
// // // // // // //   <thead>
// // // // // // //     <tr>
// // // // // // //       <th style="${tableHeaders.aggregation}">Quantity</th>
// // // // // // //       <th style="${tableHeaders.aggregation}">Formula via singular values</th>
// // // // // // //       <th style="${tableHeaders.aggregation}">Interpretation</th>
// // // // // // //     </tr>
// // // // // // //   </thead>
// // // // // // //   <tbody>
// // // // // // //     <tr style="background: #f8f9fa;">
// // // // // // //       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Operator (spectral) norm ‖A‖<sub>2</sub></td>
// // // // // // //       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">σ<sub>1</sub></td>
// // // // // // //       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">maximum stretching factor on the unit ball</td>
// // // // // // //     </tr>
// // // // // // //     <tr>
// // // // // // //       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;"><a href="/linear-algebra/matrix/trace" style="${linkStyle}">Frobenius norm</a> ‖A‖<sub>F</sub></td>
// // // // // // //       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">√(σ<sub>1</sub><sup>2</sup> + σ<sub>2</sub><sup>2</sup> + ··· + σ<sub>r</sub><sup>2</sup>)</td>
// // // // // // //       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">total "energy" — root-sum-of-squares of singular values</td>
// // // // // // //     </tr>
// // // // // // //     <tr style="background: #f8f9fa;">
// // // // // // //       <td style="padding: 12px 15px; font-weight: bold; color: #06357a;">Condition number κ(A)</td>
// // // // // // //       <td style="padding: 12px 15px; color: #34495e;">σ<sub>1</sub> / σ<sub>r</sub></td>
// // // // // // //       <td style="padding: 12px 15px; color: #34495e;">sensitivity to perturbation: κ = 10<sup>k</sup> loses ~k digits</td>
// // // // // // //     </tr>
// // // // // // //   </tbody>
// // // // // // // </table>
// // // // // // // `

// // // // // // //   // obj12 — summary capstone: what the SVD reveals
// // // // // // //   // obj12 — what one factorization yields, sorted by which factor carries it
// // // // // // //   const svdReadings = {
// // // // // // //     kicker: 'Decompositions \u00B7 SVD',
// // // // // // //     title: 'What the SVD reveals',
// // // // // // //     tallyLabel: 'readings',
// // // // // // //     intro: 'Every entry comes from the same three factors. What changes is which one is being read \u2014 the singular values for size, the columns of $U$ and $V$ for structure, and all three together for geometry.',
// // // // // // //     footnote: 'No other factorization answers this many questions, and none exists for every matrix. That combination is why the SVD is the one to reach for when the matrix is rectangular, rank-deficient, or simply unknown \u2014 the conditions the [other decompositions](!/linear-algebra/decompositions) require are exactly the ones it does without.',
// // // // // // //     groups: [
// // // // // // //       {
// // // // // // //         heading: 'From the singular values',
// // // // // // //         identities: [
// // // // // // //           {
// // // // // // //             name: 'Rank',
// // // // // // //             anchor: '#3',
// // // // // // //             formula: '$r = $ count of $\\sigma_i > 0$',
// // // // // // //             condition: 'strictly positive only',
// // // // // // //             note: 'The most numerically reliable rank there is. Row reduction decides rank by comparing entries against zero, which floating point makes arbitrary; the singular values instead show a gap, and where that gap falls is a judgement the numbers themselves support.',
// // // // // // //           },
// // // // // // //           {
// // // // // // //             name: 'Norms',
// // // // // // //             anchor: '#9',
// // // // // // //             formula: '$\\|A\\|_2 = \\sigma_1, \\quad \\|A\\|_F^2 = \\textstyle\\sum \\sigma_i^2$',
// // // // // // //             condition: 'read straight off the list',
// // // // // // //             note: 'The largest singular value is the most any unit vector is stretched. The Frobenius norm is the whole list in quadrature \u2014 so both common matrix norms are functions of the same numbers.',
// // // // // // //           },
// // // // // // //           {
// // // // // // //             name: 'Condition number',
// // // // // // //             anchor: '#9',
// // // // // // //             formula: '$\\kappa(A) = \\sigma_1 / \\sigma_r$',
// // // // // // //             condition: '$A$ of full rank',
// // // // // // //             strict: true,
// // // // // // //             note: 'The ratio of most to least stretched. A large $\\kappa$ means the matrix is nearly singular in some direction, and small changes to $\\mathbf{b}$ produce large changes to the solution \u2014 which no determinant reports, since a matrix can have $\\det = 1$ and be badly conditioned.',
// // // // // // //           },
// // // // // // //         ],
// // // // // // //       },
// // // // // // //       {
// // // // // // //         heading: 'From the columns of U and V',
// // // // // // //         identities: [
// // // // // // //           {
// // // // // // //             name: 'The four subspaces',
// // // // // // //             anchor: '#6',
// // // // // // //             formula: 'partition $U$ and $V$ at index $r$',
// // // // // // //             condition: 'orthonormal bases, all four at once',
// // // // // // //             key: true,
// // // // // // //             note: 'First $r$ columns of $V$ span the row space and the rest the null space; first $r$ of $U$ span the column space and the rest the left null space. The only method giving [all four](!/linear-algebra/vector-spaces/fundamental-spaces) orthonormally from one computation.',
// // // // // // //           },
// // // // // // //           {
// // // // // // //             name: 'Pseudoinverse',
// // // // // // //             anchor: '#7',
// // // // // // //             formula: '$A^{+} = V\\Sigma^{+}U^{\\mathsf{T}}$',
// // // // // // //             condition: 'reciprocate the nonzero $\\sigma$, leave zeros alone',
// // // // // // //             note: 'Defined for every matrix, square or not, invertible or not. When $A$ is invertible it coincides with $A^{-1}$; otherwise it returns the least-squares solution of minimum norm, which is the sense in which it is the closest thing to an [inverse](!/linear-algebra/matrix/inverse).',
// // // // // // //           },
// // // // // // //         ],
// // // // // // //       },
// // // // // // //       {
// // // // // // //         heading: 'From all three factors',
// // // // // // //         identities: [
// // // // // // //           {
// // // // // // //             name: 'Low-rank approximation',
// // // // // // //             anchor: '#8',
// // // // // // //             formula: '$A_k = \\sum_{i=1}^{k} \\sigma_i \\mathbf{u}_i \\mathbf{v}_i^{\\mathsf{T}}$',
// // // // // // //             condition: 'optimal for every unitarily invariant norm',
// // // // // // //             key: true,
// // // // // // //             note: 'Truncating the outer-product sum gives the best rank-$k$ approximation there is \u2014 the Eckart\u2013Young theorem, and it is why the SVD underlies image compression and principal component analysis. The error is exactly $\\sigma_{k+1}$, so the singular values say in advance how much is lost.',
// // // // // // //           },
// // // // // // //           {
// // // // // // //             name: 'Geometric action',
// // // // // // //             anchor: '#2',
// // // // // // //             formula: '$A = U\\Sigma V^{\\mathsf{T}}$ \u2014 rotate, stretch, rotate',
// // // // // // //             condition: 'every matrix, no hypotheses',
// // // // // // //             note: 'Read right to left: $V^{\\mathsf{T}}$ rotates, $\\Sigma$ scales along axes, $U$ rotates again. Every linear map is those three steps, which is the claim that makes the factorization worth having as geometry rather than only as algebra.',
// // // // // // //           },
// // // // // // //         ],
// // // // // // //       },
// // // // // // //     ],
// // // // // // //   }

// // // // // // // // const sectionsContent = {
// // // // // // // //   obj1: {
// // // // // // // //     title: `What the SVD Is`,
// // // // // // // //     content: `Every $m \\times n$ [matrix](!/linear-algebra/matrix) $A$ — any shape, any [rank](!/linear-algebra/matrix/rank) — factors as

// // // // // // // // $$A = U\\Sigma V^T$$

// // // // // // // // $U$ is $m \\times m$ [orthogonal](!/linear-algebra/matrix/types): its columns are the left singular vectors. $V$ is $n \\times n$ orthogonal: its columns are the right singular vectors. $\\Sigma$ is $m \\times n$ with non-negative entries $\\sigma_1 \\geq \\sigma_2 \\geq \\cdots \\geq \\sigma_{\\min(m,n)} \\geq 0$ on the diagonal and zeros elsewhere. These are the singular values.

// // // // // // // // The SVD exists without any restriction. The matrix need not be square, need not be [invertible](!/linear-algebra/matrix/inverse), need not be [symmetric](!/linear-algebra/matrix/types), and need not have any special structure. It is the most general factorization in linear algebra.`,
// // // // // // // //     before: ``,
// // // // // // // //     after: ``,
// // // // // // // //     link: ``,
// // // // // // // //   },
// // // // // // // //   obj2: {
// // // // // // // //     title: `The Geometric Interpretation`,
// // // // // // // //     content: `Every [linear transformation](!/linear-algebra/transformations) $\\mathbf{x} \\mapsto A\\mathbf{x}$ decomposes into three geometric steps:

// // // // // // // // $V^T$ rotates (or reflects) the input space, aligning the input with the "natural axes" of the transformation — the directions along which $A$ stretches most and least.

// // // // // // // // $\\Sigma$ scales each axis independently by the corresponding singular value. Axes with $\\sigma_i = 0$ are annihilated — those directions are collapsed to zero.

// // // // // // // // $U$ rotates (or reflects) the scaled result into the output space.

// // // // // // // // The singular values measure the stretching in each orthogonal direction. $\\sigma_1$ is the maximum stretching: $\\sigma_1 = \\max_{\\|\\mathbf{x}\\|=1}\\|A\\mathbf{x}\\|$. The smallest nonzero singular value $\\sigma_r$ is the minimum stretching on the [row space](!/linear-algebra/vector-spaces/fundamental-spaces). The ratio $\\sigma_1/\\sigma_r$ is the condition number — it measures how distorted the transformation is.

// // // // // // // // Even the most complex-looking matrix is geometrically just two rotations sandwiching a coordinate-axis scaling.`,
// // // // // // // //     before: ``,
// // // // // // // //     after: ``,
// // // // // // // //     link: ``,
// // // // // // // //   },
// // // // // // // //   obj3: {
// // // // // // // //     title: `Singular Values`,
// // // // // // // //     content: `The singular values of $A$ are the square roots of the [eigenvalues](!/linear-algebra/eigen) of $A^TA$ (or equivalently $AA^T$):

// // // // // // // // $$\\sigma_i = \\sqrt{\\lambda_i(A^TA)}$$

// // // // // // // // Since $A^TA$ is symmetric positive semi-definite, its eigenvalues are all $\\geq 0$, so the singular values are real and non-negative. They are ordered $\\sigma_1 \\geq \\sigma_2 \\geq \\cdots \\geq 0$.

// // // // // // // // The number of nonzero singular values equals the [rank](!/linear-algebra/matrix/rank) of $A$. This is the most numerically stable method for determining rank: compute the SVD and count singular values above a tolerance.

// // // // // // // // The largest singular value $\\sigma_1$ is the operator norm $\\|A\\|_2 = \\max_{\\|\\mathbf{x}\\|=1}\\|A\\mathbf{x}\\|$. The [Frobenius norm](!/linear-algebra/matrix/trace) is $\\|A\\|_F = \\sqrt{\\sigma_1^2 + \\sigma_2^2 + \\cdots + \\sigma_r^2}$. The condition number is $\\kappa(A) = \\sigma_1/\\sigma_r$ — a large condition number means the matrix is nearly singular and small perturbations in the input cause large changes in the output.`,
// // // // // // // //     before: ``,
// // // // // // // //     after: ``,
// // // // // // // //     link: ``,
// // // // // // // //   },
// // // // // // // //   obj4: {
// // // // // // // //     title: `Computing the SVD`,
// // // // // // // //     content: `The standard approach computes the SVD through the eigenvalue decomposition of $A^TA$.

// // // // // // // // Form $A^TA$ (symmetric, $n \\times n$). Find its eigenvalues $\\lambda_1 \\geq \\cdots \\geq \\lambda_n \\geq 0$ and orthonormal eigenvectors $\\mathbf{v}_1, \\dots, \\mathbf{v}_n$ using the [spectral decomposition](!/linear-algebra/decompositions/spectral). These are the right singular vectors: $V = [\\mathbf{v}_1 \\; \\cdots \\; \\mathbf{v}_n]$.

// // // // // // // // The singular values are $\\sigma_i = \\sqrt{\\lambda_i}$. The left singular vectors are computed from the right ones: $\\mathbf{u}_i = \\frac{1}{\\sigma_i}A\\mathbf{v}_i$ for each nonzero $\\sigma_i$. If $r < m$, extend $\\{\\mathbf{u}_1, \\dots, \\mathbf{u}_r\\}$ to an [orthonormal basis](!/linear-algebra/orthogonality/orthogonal-sets) for $\\mathbb{R}^m$.

// // // // // // // // ## Worked Example

// // // // // // // // For $A = \\begin{pmatrix} 1 & 0 \\\\ 0 & 1 \\\\ 1 & 1 \\end{pmatrix}$: $A^TA = \\begin{pmatrix} 2 & 1 \\\\ 1 & 2 \\end{pmatrix}$, eigenvalues $3$ and $1$, eigenvectors $\\frac{1}{\\sqrt{2}}(1, 1)^T$ and $\\frac{1}{\\sqrt{2}}(1, -1)^T$. Singular values: $\\sqrt{3}$ and $1$. Left singular vectors: $\\mathbf{u}_1 = \\frac{1}{\\sqrt{3}}A\\mathbf{v}_1 = \\frac{1}{\\sqrt{6}}(1, 1, 2)^T$, $\\mathbf{u}_2 = A\\mathbf{v}_2 = \\frac{1}{\\sqrt{2}}(1, -1, 0)^T$. Extend with $\\mathbf{u}_3 = \\frac{1}{\\sqrt{3}}(-1, -1, 1)^T$.`,
// // // // // // // //     before: ``,
// // // // // // // //     after: ``,
// // // // // // // //     link: ``,
// // // // // // // //   },
// // // // // // // //   obj5: {
// // // // // // // //     title: `Compact and Thin Forms`,
// // // // // // // //     content: `The full SVD has $U$ of size $m \\times m$, $\\Sigma$ of size $m \\times n$, and $V$ of size $n \\times n$. Two economical alternatives retain only the essential information.

// // // // // // // // The thin SVD keeps only the first $n$ columns of $U$ (call them $U_1$) and the top $n \\times n$ block of $\\Sigma$ (call it $\\Sigma_1$): $A = U_1 \\Sigma_1 V^T$. This drops the columns of $U$ corresponding to the [left null space](!/linear-algebra/vector-spaces/fundamental-spaces).

// // // // // // // // The compact SVD keeps only the first $r$ columns of $U$ and $V$ (where $r = \\text{rank}(A)$) and the $r \\times r$ diagonal block of nonzero singular values: $A = U_r \\Sigma_r V_r^T$. This is the most economical representation — it captures only the rank-$r$ content of $A$, discarding everything associated with zero singular values.

// // // // // // // // All three forms represent the same matrix $A$. The compact form uses the least storage; the full form provides bases for all four [fundamental subspaces](!/linear-algebra/vector-spaces/fundamental-spaces). The three variants line up cleanly on factor dimensions and on what each one chooses to keep.`,
// // // // // // // //     before: ``,
// // // // // // // //     after: ``,
// // // // // // // //     link: ``,
// // // // // // // //   },
// // // // // // // //   obj6: {
// // // // // // // //     title: `SVD and the Four Fundamental Subspaces`,
// // // // // // // //     content: `The SVD simultaneously provides orthonormal [bases](!/linear-algebra/vector-spaces) for all four [fundamental subspaces](!/linear-algebra/vector-spaces/fundamental-spaces) of $A$.

// // // // // // // // The first $r$ columns of $V$ ($\\mathbf{v}_1, \\dots, \\mathbf{v}_r$) form an orthonormal basis for the row space of $A$.

// // // // // // // // The last $n - r$ columns of $V$ ($\\mathbf{v}_{r+1}, \\dots, \\mathbf{v}_n$) form an orthonormal basis for the [null space](!/linear-algebra/vector-spaces/fundamental-spaces) of $A$.

// // // // // // // // The first $r$ columns of $U$ ($\\mathbf{u}_1, \\dots, \\mathbf{u}_r$) form an orthonormal basis for the [column space](!/linear-algebra/vector-spaces/fundamental-spaces) of $A$.

// // // // // // // // The last $m - r$ columns of $U$ ($\\mathbf{u}_{r+1}, \\dots, \\mathbf{u}_m$) form an orthonormal basis for the left null space of $A$.

// // // // // // // // No other factorization provides all four bases simultaneously, and no other method guarantees that these bases are orthonormal. The SVD is the complete structural portrait of any matrix.`,
// // // // // // // //     before: ``,
// // // // // // // //     after: ``,
// // // // // // // //     link: ``,
// // // // // // // //   },
// // // // // // // //   obj7: {
// // // // // // // //     title: `The Pseudoinverse`,
// // // // // // // //     content: `The Moore-Penrose pseudoinverse $A^+$ is computed directly from the SVD:

// // // // // // // // $$A^+ = V\\Sigma^+ U^T$$

// // // // // // // // The matrix $\\Sigma^+$ is formed by reciprocating each nonzero singular value and transposing the shape: if $\\Sigma$ is $m \\times n$ with diagonal entries $\\sigma_1, \\dots, \\sigma_r, 0, \\dots, 0$, then $\\Sigma^+$ is $n \\times m$ with diagonal entries $1/\\sigma_1, \\dots, 1/\\sigma_r, 0, \\dots, 0$.

// // // // // // // // The pseudoinverse satisfies four defining properties: $AA^+A = A$, $A^+AA^+ = A^+$, $(AA^+)^T = AA^+$, $(A^+A)^T = A^+A$.

// // // // // // // // For a full-rank overdetermined system ($m > n$, rank $= n$), $A^+\\mathbf{b}$ gives the [least-squares](!/linear-algebra/orthogonality/least-squares) solution. For a rank-deficient system, $A^+\\mathbf{b}$ gives the minimum-norm least-squares solution — the solution of smallest length among all minimizers of $\\|A\\mathbf{x} - \\mathbf{b}\\|$.`,
// // // // // // // //     before: ``,
// // // // // // // //     after: ``,
// // // // // // // //     link: ``,
// // // // // // // //   },
// // // // // // // //   obj8: {
// // // // // // // //     title: `Low-Rank Approximation`,
// // // // // // // //     content: `The best rank-$k$ approximation to $A$ in either the operator norm or the Frobenius norm is obtained by truncating the SVD at $k$ terms:

// // // // // // // // $$A_k = \\sigma_1\\mathbf{u}_1\\mathbf{v}_1^T + \\sigma_2\\mathbf{u}_2\\mathbf{v}_2^T + \\cdots + \\sigma_k\\mathbf{u}_k\\mathbf{v}_k^T$$

// // // // // // // // This is the Eckart-Young-Mirsky theorem. Among all matrices of rank at most $k$, $A_k$ is the closest to $A$.

// // // // // // // // The approximation error is $\\|A - A_k\\|_2 = \\sigma_{k+1}$ (the first discarded singular value) in the operator norm, and $\\|A - A_k\\|_F = \\sqrt{\\sigma_{k+1}^2 + \\cdots + \\sigma_r^2}$ in the Frobenius norm.

// // // // // // // // When the singular values decay rapidly — $\\sigma_1 \\gg \\sigma_2 \\gg \\cdots$ — a small number of terms captures most of the matrix. This is the basis of image compression (store $k$ singular value triples instead of $mn$ entries), noise reduction (discard small singular values as noise), latent semantic analysis (retain the top-$k$ "concepts" in a document-term matrix), and dimensionality reduction more broadly.`,
// // // // // // // //     before: ``,
// // // // // // // //     after: ``,
// // // // // // // //     link: ``,
// // // // // // // //   },
// // // // // // // //   obj9: {
// // // // // // // //     title: `SVD and Norms`,
// // // // // // // //     content: `The singular values provide the complete "size profile" of a matrix.

// // // // // // // // The operator (spectral) norm is the largest singular value: $\\|A\\|_2 = \\sigma_1$. It measures the maximum factor by which $A$ can stretch a unit vector.

// // // // // // // // The [Frobenius norm](!/linear-algebra/matrix/trace) is the root-sum-of-squares of all singular values: $\\|A\\|_F = \\sqrt{\\sigma_1^2 + \\sigma_2^2 + \\cdots + \\sigma_r^2}$. It measures the total "energy" in the matrix.

// // // // // // // // The condition number $\\kappa(A) = \\sigma_1/\\sigma_r$ quantifies sensitivity to perturbation. A matrix with $\\kappa = 10^k$ loses roughly $k$ digits of accuracy in solving $A\\mathbf{x} = \\mathbf{b}$ with floating-point arithmetic. A perfectly conditioned matrix ($\\kappa = 1$) is orthogonal. A singular matrix ($\\sigma_r = 0$) has $\\kappa = \\infty$.

// // // // // // // // The singular values are the natural measuring tool for matrices, just as eigenvalues are the natural measuring tool for symmetric matrices and [linear operators](!/linear-algebra/transformations). For non-symmetric matrices, singular values (not eigenvalues) govern norms and conditioning.`,
// // // // // // // //     before: ``,
// // // // // // // //     after: ``,
// // // // // // // //     link: ``,
// // // // // // // //   },
// // // // // // // //   obj10: {
// // // // // // // //     title: `SVD and the Spectral Decomposition`,
// // // // // // // //     content: `For a symmetric positive semi-definite matrix $A$ with eigenvalues $\\lambda_1 \\geq \\cdots \\geq \\lambda_n \\geq 0$, the [spectral decomposition](!/linear-algebra/decompositions/spectral) $A = QDQ^T$ is also the SVD: $U = V = Q$ and $\\Sigma = D$. The singular values are the eigenvalues.

// // // // // // // // For a general symmetric matrix with some negative eigenvalues, the singular values are $|\\lambda_i|$. The signs are absorbed into $U$ or $V$: if $\\lambda_i < 0$, one of the corresponding singular vectors is negated so that $\\sigma_i = |\\lambda_i| > 0$.

// // // // // // // // For non-symmetric or rectangular matrices, the eigendecomposition does not apply (it requires square matrices and may not exist even then), but the SVD always does. The SVD is the correct generalization of the spectral decomposition to the broadest possible class of matrices.`,
// // // // // // // //     before: ``,
// // // // // // // //     after: ``,
// // // // // // // //     link: ``,
// // // // // // // //   },
// // // // // // // //   obj11: {
// // // // // // // //     title: `The Outer Product Form`,
// // // // // // // //     content: `The SVD can be written as a sum of rank-one matrices:

// // // // // // // // $$A = \\sigma_1 \\mathbf{u}_1\\mathbf{v}_1^T + \\sigma_2 \\mathbf{u}_2\\mathbf{v}_2^T + \\cdots + \\sigma_r \\mathbf{u}_r\\mathbf{v}_r^T$$

// // // // // // // // Each term $\\sigma_i \\mathbf{u}_i\\mathbf{v}_i^T$ is an $m \\times n$ rank-one matrix. The singular value $\\sigma_i$ weights its contribution. The terms are ordered by importance: the first term captures the most of $A$ (in the norm sense), the second captures the most of the remainder, and so on.

// // // // // // // // Truncating this sum at $k$ terms gives the best rank-$k$ approximation $A_k$. The fraction of the Frobenius norm captured by the first $k$ terms is $(\\sigma_1^2 + \\cdots + \\sigma_k^2)/(\\sigma_1^2 + \\cdots + \\sigma_r^2)$.

// // // // // // // // This outer product perspective is the basis of nearly every matrix approximation method: keep the large singular values (signal) and discard the small ones (noise or redundancy).`,
// // // // // // // //     before: ``,
// // // // // // // //     after: ``,
// // // // // // // //     link: ``,
// // // // // // // //   },
// // // // // // // //   obj12: {
// // // // // // // //     title: `What the SVD Reveals`,
// // // // // // // //     content: `No other single factorization provides as much structural information about a matrix.

// // // // // // // // The [rank](!/linear-algebra/matrix/rank): the number of nonzero singular values.

// // // // // // // // The four [fundamental subspaces](!/linear-algebra/vector-spaces/fundamental-spaces): orthonormal bases from the columns of $U$ and $V$.

// // // // // // // // The [pseudoinverse](!/linear-algebra/orthogonality/least-squares): $A^+ = V\\Sigma^+ U^T$.

// // // // // // // // The best rank-$k$ approximation: truncate at $k$ terms.

// // // // // // // // Norms and the condition number: directly from the singular values.

// // // // // // // // The [geometry](!/linear-algebra/transformations/geometric) of the linear map: rotation, scaling, rotation.

// // // // // // // // For symmetric matrices, the SVD reduces to the [spectral decomposition](!/linear-algebra/decompositions/spectral). For invertible square matrices, the singular values reveal the conditioning that the [determinant](!/linear-algebra/determinants) alone cannot see (a matrix with $\\det = 1$ can still be poorly conditioned). For rectangular matrices, the SVD is the only factorization that applies without modification.

// // // // // // // // The SVD is the culmination of the decomposition hierarchy — the most general, most informative, and most broadly applicable factorization in linear algebra.

// // // // // // // // The six structural quantities the SVD exposes — rank, the four fundamental subspaces, the pseudoinverse, the best rank-$k$ approximation, norms and condition number, and the geometric decomposition — collect into a single reference card below.`,
// // // // // // // //     before: ``,
// // // // // // // //     after: ``,
// // // // // // // //     link: ``,
// // // // // // // //   },
// // // // // // // // }



// // // // // // // // linear-algebra/decompositions/svd — sectionsContent with formula callouts (v1)
// // // // // // // // 10 callouts injected across 6 sections:
// // // // // // // //   obj1  (SVD) — direct
// // // // // // // //   obj3  (Singular Values) — direct
// // // // // // // //   obj3  (SVD Rank) — prose-only insert
// // // // // // // //   obj6  (SVD Four Fundamental Subspaces) — prose-only insert
// // // // // // // //   obj7  (Moore-Penrose Pseudoinverse) — direct
// // // // // // // //   obj8  (Eckart-Young Low-Rank Approximation) — direct, replaced with canonical incl. error bounds
// // // // // // // //   obj9  (Operator Norm, Frobenius Norm via Singular Values, Condition Number) — inline-promote x3
// // // // // // // //   obj11 (SVD Outer Product Form) — direct
// // // // // // // // obj4 worked-example matrix $$ displays preserved.

// // // // // // // const sectionsContent = {
// // // // // // //   obj1: {
// // // // // // //     title: `What the SVD Is`,
// // // // // // //     content: `Every $m \\times n$ [matrix](!/linear-algebra/matrix) $A$ — any shape, any [rank](!/linear-algebra/matrix/rank) — factors as

// // // // // // // @academic[formula_callout:svd|SVD|$$A = U\\Sigma V^T$$]@
// // // // // // // @academic[formulas_link:/linear-algebra/formulas#svd]@

// // // // // // // $U$ is $m \\times m$ [orthogonal](!/linear-algebra/matrix/types): its columns are the left singular vectors. $V$ is $n \\times n$ orthogonal: its columns are the right singular vectors. $\\Sigma$ is $m \\times n$ with non-negative entries $\\sigma_1 \\geq \\sigma_2 \\geq \\cdots \\geq \\sigma_{\\min(m,n)} \\geq 0$ on the diagonal and zeros elsewhere. These are the singular values.

// // // // // // // The SVD exists without any restriction. The matrix need not be square, need not be [invertible](!/linear-algebra/matrix/inverse), need not be [symmetric](!/linear-algebra/matrix/types), and need not have any special structure. It is the most general factorization in linear algebra.`,
// // // // // // //     before: ``,
// // // // // // //     after: ``,
// // // // // // //     link: ``,
// // // // // // //   },
// // // // // // //   obj2: {
// // // // // // //     title: `The Geometric Interpretation`,
// // // // // // //     content: `Every [linear transformation](!/linear-algebra/transformations) $\\mathbf{x} \\mapsto A\\mathbf{x}$ decomposes into three geometric steps:

// // // // // // // $V^T$ rotates (or reflects) the input space, aligning the input with the "natural axes" of the transformation — the directions along which $A$ stretches most and least.

// // // // // // // $\\Sigma$ scales each axis independently by the corresponding singular value. Axes with $\\sigma_i = 0$ are annihilated — those directions are collapsed to zero.

// // // // // // // $U$ rotates (or reflects) the scaled result into the output space.

// // // // // // // The singular values measure the stretching in each orthogonal direction. $\\sigma_1$ is the maximum stretching: $\\sigma_1 = \\max_{\\|\\mathbf{x}\\|=1}\\|A\\mathbf{x}\\|$. The smallest nonzero singular value $\\sigma_r$ is the minimum stretching on the [row space](!/linear-algebra/vector-spaces/fundamental-spaces). The ratio $\\sigma_1/\\sigma_r$ is the condition number — it measures how distorted the transformation is.

// // // // // // // Even the most complex-looking matrix is geometrically just two rotations sandwiching a coordinate-axis scaling.`,
// // // // // // //     before: ``,
// // // // // // //     after: ``,
// // // // // // //     link: ``,
// // // // // // //   },
// // // // // // //   obj3: {
// // // // // // //     title: `Singular Values`,
// // // // // // //     content: `The singular values of $A$ are the square roots of the [eigenvalues](!/linear-algebra/eigen) of $A^TA$ (or equivalently $AA^T$):

// // // // // // // @academic[formula_callout:singular_values|Singular Values|$$\\sigma_i = \\sqrt{\\lambda_i(A^TA)} = \\sqrt{\\lambda_i(AA^T)}$$]@
// // // // // // // @academic[formulas_link:/linear-algebra/formulas#singular_values]@

// // // // // // // Since $A^TA$ is symmetric positive semi-definite, its eigenvalues are all $\\geq 0$, so the singular values are real and non-negative. They are ordered $\\sigma_1 \\geq \\sigma_2 \\geq \\cdots \\geq 0$.

// // // // // // // The number of nonzero singular values equals the [rank](!/linear-algebra/matrix/rank) of $A$:

// // // // // // // @academic[formula_callout:svd_rank|SVD Rank|$$\\text{rank}(A) = \\#\\{i : \\sigma_i > 0\\}$$]@
// // // // // // // @academic[formulas_link:/linear-algebra/formulas#svd_rank]@

// // // // // // // This is the most numerically stable method for determining rank: compute the SVD and count singular values above a tolerance.

// // // // // // // The largest singular value $\\sigma_1$ is the operator norm $\\|A\\|_2 = \\max_{\\|\\mathbf{x}\\|=1}\\|A\\mathbf{x}\\|$. The [Frobenius norm](!/linear-algebra/matrix/trace) is $\\|A\\|_F = \\sqrt{\\sigma_1^2 + \\sigma_2^2 + \\cdots + \\sigma_r^2}$. The condition number is $\\kappa(A) = \\sigma_1/\\sigma_r$ — a large condition number means the matrix is nearly singular and small perturbations in the input cause large changes in the output.`,
// // // // // // //     before: ``,
// // // // // // //     after: ``,
// // // // // // //     link: ``,
// // // // // // //   },
// // // // // // //   obj4: {
// // // // // // //     title: `Computing the SVD`,
// // // // // // //     content: `The standard approach computes the SVD through the eigenvalue decomposition of $A^TA$.

// // // // // // // Form $A^TA$ (symmetric, $n \\times n$). Find its eigenvalues $\\lambda_1 \\geq \\cdots \\geq \\lambda_n \\geq 0$ and orthonormal eigenvectors $\\mathbf{v}_1, \\dots, \\mathbf{v}_n$ using the [spectral decomposition](!/linear-algebra/decompositions/spectral). These are the right singular vectors: $V = [\\mathbf{v}_1 \\; \\cdots \\; \\mathbf{v}_n]$.

// // // // // // // The singular values are $\\sigma_i = \\sqrt{\\lambda_i}$. The left singular vectors are computed from the right ones: $\\mathbf{u}_i = \\frac{1}{\\sigma_i}A\\mathbf{v}_i$ for each nonzero $\\sigma_i$. If $r < m$, extend $\\{\\mathbf{u}_1, \\dots, \\mathbf{u}_r\\}$ to an [orthonormal basis](!/linear-algebra/orthogonality/orthogonal-sets) for $\\mathbb{R}^m$.

// // // // // // // ## Worked Example

// // // // // // // For $A = \\begin{pmatrix} 1 & 0 \\\\ 0 & 1 \\\\ 1 & 1 \\end{pmatrix}$: $A^TA = \\begin{pmatrix} 2 & 1 \\\\ 1 & 2 \\end{pmatrix}$, eigenvalues $3$ and $1$, eigenvectors $\\frac{1}{\\sqrt{2}}(1, 1)^T$ and $\\frac{1}{\\sqrt{2}}(1, -1)^T$. Singular values: $\\sqrt{3}$ and $1$. Left singular vectors: $\\mathbf{u}_1 = \\frac{1}{\\sqrt{3}}A\\mathbf{v}_1 = \\frac{1}{\\sqrt{6}}(1, 1, 2)^T$, $\\mathbf{u}_2 = A\\mathbf{v}_2 = \\frac{1}{\\sqrt{2}}(1, -1, 0)^T$. Extend with $\\mathbf{u}_3 = \\frac{1}{\\sqrt{3}}(-1, -1, 1)^T$.`,
// // // // // // //     before: ``,
// // // // // // //     after: ``,
// // // // // // //     link: ``,
// // // // // // //   },
// // // // // // //   obj5: {
// // // // // // //     title: `Compact and Thin Forms`,
// // // // // // //     content: `The full SVD has $U$ of size $m \\times m$, $\\Sigma$ of size $m \\times n$, and $V$ of size $n \\times n$. Two economical alternatives retain only the essential information.

// // // // // // // The thin SVD keeps only the first $n$ columns of $U$ (call them $U_1$) and the top $n \\times n$ block of $\\Sigma$ (call it $\\Sigma_1$): $A = U_1 \\Sigma_1 V^T$. This drops the columns of $U$ corresponding to the [left null space](!/linear-algebra/vector-spaces/fundamental-spaces).

// // // // // // // The compact SVD keeps only the first $r$ columns of $U$ and $V$ (where $r = \\text{rank}(A)$) and the $r \\times r$ diagonal block of nonzero singular values: $A = U_r \\Sigma_r V_r^T$. This is the most economical representation — it captures only the rank-$r$ content of $A$, discarding everything associated with zero singular values.

// // // // // // // All three forms represent the same matrix $A$. The compact form uses the least storage; the full form provides bases for all four [fundamental subspaces](!/linear-algebra/vector-spaces/fundamental-spaces). The three variants line up cleanly on factor dimensions and on what each one chooses to keep.`,
// // // // // // //     before: ``,
// // // // // // //     after: ``,
// // // // // // //     link: ``,
// // // // // // //   },
// // // // // // //   obj6: {
// // // // // // //     title: `SVD and the Four Fundamental Subspaces`,
// // // // // // //     content: `The SVD simultaneously provides orthonormal [bases](!/linear-algebra/vector-spaces) for all four [fundamental subspaces](!/linear-algebra/vector-spaces/fundamental-spaces) of $A$:

// // // // // // // @academic[formula_callout:svd_four_fundamental_subspaces|SVD Four Fundamental Subspaces|$$\\begin{aligned} \\text{Col}(A) &= \\text{Span}\\{\\mathbf{u}_1, \\ldots, \\mathbf{u}_r\\} \\\\ \\text{Null}(A^T) &= \\text{Span}\\{\\mathbf{u}_{r+1}, \\ldots, \\mathbf{u}_m\\} \\\\ \\text{Row}(A) &= \\text{Span}\\{\\mathbf{v}_1, \\ldots, \\mathbf{v}_r\\} \\\\ \\text{Null}(A) &= \\text{Span}\\{\\mathbf{v}_{r+1}, \\ldots, \\mathbf{v}_n\\} \\end{aligned}$$]@
// // // // // // // @academic[formulas_link:/linear-algebra/formulas#svd_four_fundamental_subspaces]@

// // // // // // // The first $r$ columns of $V$ ($\\mathbf{v}_1, \\dots, \\mathbf{v}_r$) form an orthonormal basis for the row space of $A$.

// // // // // // // The last $n - r$ columns of $V$ ($\\mathbf{v}_{r+1}, \\dots, \\mathbf{v}_n$) form an orthonormal basis for the [null space](!/linear-algebra/vector-spaces/fundamental-spaces) of $A$.

// // // // // // // The first $r$ columns of $U$ ($\\mathbf{u}_1, \\dots, \\mathbf{u}_r$) form an orthonormal basis for the [column space](!/linear-algebra/vector-spaces/fundamental-spaces) of $A$.

// // // // // // // The last $m - r$ columns of $U$ ($\\mathbf{u}_{r+1}, \\dots, \\mathbf{u}_m$) form an orthonormal basis for the left null space of $A$.

// // // // // // // No other factorization provides all four bases simultaneously, and no other method guarantees that these bases are orthonormal. The SVD is the complete structural portrait of any matrix.`,
// // // // // // //     before: ``,
// // // // // // //     after: ``,
// // // // // // //     link: ``,
// // // // // // //   },
// // // // // // //   obj7: {
// // // // // // //     title: `The Pseudoinverse`,
// // // // // // //     content: `The Moore-Penrose pseudoinverse $A^+$ is computed directly from the SVD:

// // // // // // // @academic[formula_callout:moore_penrose_pseudoinverse|Moore-Penrose Pseudoinverse|$$A^+ = V\\Sigma^+ U^T$$]@
// // // // // // // @academic[formulas_link:/linear-algebra/formulas#moore_penrose_pseudoinverse]@

// // // // // // // The matrix $\\Sigma^+$ is formed by reciprocating each nonzero singular value and transposing the shape: if $\\Sigma$ is $m \\times n$ with diagonal entries $\\sigma_1, \\dots, \\sigma_r, 0, \\dots, 0$, then $\\Sigma^+$ is $n \\times m$ with diagonal entries $1/\\sigma_1, \\dots, 1/\\sigma_r, 0, \\dots, 0$.

// // // // // // // The pseudoinverse satisfies four defining properties: $AA^+A = A$, $A^+AA^+ = A^+$, $(AA^+)^T = AA^+$, $(A^+A)^T = A^+A$.

// // // // // // // For a full-rank overdetermined system ($m > n$, rank $= n$), $A^+\\mathbf{b}$ gives the [least-squares](!/linear-algebra/orthogonality/least-squares) solution. For a rank-deficient system, $A^+\\mathbf{b}$ gives the minimum-norm least-squares solution — the solution of smallest length among all minimizers of $\\|A\\mathbf{x} - \\mathbf{b}\\|$.`,
// // // // // // //     before: ``,
// // // // // // //     after: ``,
// // // // // // //     link: ``,
// // // // // // //   },
// // // // // // //   obj8: {
// // // // // // //     title: `Low-Rank Approximation`,
// // // // // // //     content: `The best rank-$k$ approximation to $A$ in either the operator norm or the Frobenius norm is obtained by truncating the SVD at $k$ terms:

// // // // // // // @academic[formula_callout:eckart_young_low_rank_approximation|Eckart-Young Low-Rank Approximation|$$A_k = \\sum_{i=1}^{k} \\sigma_i \\mathbf{u}_i \\mathbf{v}_i^T, \\qquad \\|A - A_k\\|_2 = \\sigma_{k+1}, \\quad \\|A - A_k\\|_F = \\sqrt{\\sum_{i=k+1}^{r}\\sigma_i^2}$$]@
// // // // // // // @academic[formulas_link:/linear-algebra/formulas#eckart_young_low_rank_approximation]@

// // // // // // // This is the Eckart-Young-Mirsky theorem. Among all matrices of rank at most $k$, $A_k$ is the closest to $A$. The approximation error equals $\\sigma_{k+1}$ (the first discarded singular value) in the operator norm, and $\\sqrt{\\sigma_{k+1}^2 + \\cdots + \\sigma_r^2}$ in the Frobenius norm.

// // // // // // // When the singular values decay rapidly — $\\sigma_1 \\gg \\sigma_2 \\gg \\cdots$ — a small number of terms captures most of the matrix. This is the basis of image compression (store $k$ singular value triples instead of $mn$ entries), noise reduction (discard small singular values as noise), latent semantic analysis (retain the top-$k$ "concepts" in a document-term matrix), and dimensionality reduction more broadly.`,
// // // // // // //     before: ``,
// // // // // // //     after: ``,
// // // // // // //     link: ``,
// // // // // // //   },
// // // // // // //   obj9: {
// // // // // // //     title: `SVD and Norms`,
// // // // // // //     content: `The singular values provide the complete "size profile" of a matrix.

// // // // // // // The operator (spectral) norm is the largest singular value:

// // // // // // // @academic[formula_callout:operator_norm|Operator Norm|$$\\|A\\|_2 = \\sigma_1 = \\max_{\\|\\mathbf{x}\\|=1} \\|A\\mathbf{x}\\|$$]@
// // // // // // // @academic[formulas_link:/linear-algebra/formulas#operator_norm]@

// // // // // // // It measures the maximum factor by which $A$ can stretch a unit vector.

// // // // // // // The [Frobenius norm](!/linear-algebra/matrix/trace) is the root-sum-of-squares of all singular values:

// // // // // // // @academic[formula_callout:frobenius_norm_via_singular_values|Frobenius Norm via Singular Values|$$\\|A\\|_F = \\sqrt{\\sum_{i=1}^{r} \\sigma_i^2}$$]@
// // // // // // // @academic[formulas_link:/linear-algebra/formulas#frobenius_norm_via_singular_values]@

// // // // // // // It measures the total "energy" in the matrix.

// // // // // // // The condition number quantifies sensitivity to perturbation:

// // // // // // // @academic[formula_callout:condition_number|Condition Number|$$\\kappa(A) = \\frac{\\sigma_1}{\\sigma_r}$$]@
// // // // // // // @academic[formulas_link:/linear-algebra/formulas#condition_number]@

// // // // // // // A matrix with $\\kappa = 10^k$ loses roughly $k$ digits of accuracy in solving $A\\mathbf{x} = \\mathbf{b}$ with floating-point arithmetic. A perfectly conditioned matrix ($\\kappa = 1$) is orthogonal. A singular matrix ($\\sigma_r = 0$) has $\\kappa = \\infty$.

// // // // // // // The singular values are the natural measuring tool for matrices, just as eigenvalues are the natural measuring tool for symmetric matrices and [linear operators](!/linear-algebra/transformations). For non-symmetric matrices, singular values (not eigenvalues) govern norms and conditioning.`,
// // // // // // //     before: ``,
// // // // // // //     after: ``,
// // // // // // //     link: ``,
// // // // // // //   },
// // // // // // //   obj10: {
// // // // // // //     title: `SVD and the Spectral Decomposition`,
// // // // // // //     content: `For a symmetric positive semi-definite matrix $A$ with eigenvalues $\\lambda_1 \\geq \\cdots \\geq \\lambda_n \\geq 0$, the [spectral decomposition](!/linear-algebra/decompositions/spectral) $A = QDQ^T$ is also the SVD: $U = V = Q$ and $\\Sigma = D$. The singular values are the eigenvalues.

// // // // // // // For a general symmetric matrix with some negative eigenvalues, the singular values are $|\\lambda_i|$. The signs are absorbed into $U$ or $V$: if $\\lambda_i < 0$, one of the corresponding singular vectors is negated so that $\\sigma_i = |\\lambda_i| > 0$.

// // // // // // // For non-symmetric or rectangular matrices, the eigendecomposition does not apply (it requires square matrices and may not exist even then), but the SVD always does. The SVD is the correct generalization of the spectral decomposition to the broadest possible class of matrices.`,
// // // // // // //     before: ``,
// // // // // // //     after: ``,
// // // // // // //     link: ``,
// // // // // // //   },
// // // // // // //   obj11: {
// // // // // // //     title: `The Outer Product Form`,
// // // // // // //     content: `The SVD can be written as a sum of rank-one matrices:

// // // // // // // @academic[formula_callout:svd_outer_product_form|SVD Outer Product Form|$$A = \\sum_{i=1}^{r} \\sigma_i \\, \\mathbf{u}_i \\mathbf{v}_i^T$$]@
// // // // // // // @academic[formulas_link:/linear-algebra/formulas#svd_outer_product_form]@

// // // // // // // Each term $\\sigma_i \\mathbf{u}_i\\mathbf{v}_i^T$ is an $m \\times n$ rank-one matrix. The singular value $\\sigma_i$ weights its contribution. The terms are ordered by importance: the first term captures the most of $A$ (in the norm sense), the second captures the most of the remainder, and so on.

// // // // // // // Truncating this sum at $k$ terms gives the best rank-$k$ approximation $A_k$. The fraction of the Frobenius norm captured by the first $k$ terms is $(\\sigma_1^2 + \\cdots + \\sigma_k^2)/(\\sigma_1^2 + \\cdots + \\sigma_r^2)$.

// // // // // // // This outer product perspective is the basis of nearly every matrix approximation method: keep the large singular values (signal) and discard the small ones (noise or redundancy).`,
// // // // // // //     before: ``,
// // // // // // //     after: ``,
// // // // // // //     link: ``,
// // // // // // //   },
// // // // // // //   obj12: {
// // // // // // //     title: `What the SVD Reveals`,
// // // // // // //     content: `No other single factorization provides as much structural information about a matrix.

// // // // // // // The [rank](!/linear-algebra/matrix/rank): the number of nonzero singular values.

// // // // // // // The four [fundamental subspaces](!/linear-algebra/vector-spaces/fundamental-spaces): orthonormal bases from the columns of $U$ and $V$.

// // // // // // // The [pseudoinverse](!/linear-algebra/orthogonality/least-squares): $A^+ = V\\Sigma^+ U^T$.

// // // // // // // The best rank-$k$ approximation: truncate at $k$ terms.

// // // // // // // Norms and the condition number: directly from the singular values.

// // // // // // // The [geometry](!/linear-algebra/transformations/geometric) of the linear map: rotation, scaling, rotation.

// // // // // // // For symmetric matrices, the SVD reduces to the [spectral decomposition](!/linear-algebra/decompositions/spectral). For invertible square matrices, the singular values reveal the conditioning that the [determinant](!/linear-algebra/determinants) alone cannot see (a matrix with $\\det = 1$ can still be poorly conditioned). For rectangular matrices, the SVD is the only factorization that applies without modification.

// // // // // // // The SVD is the culmination of the decomposition hierarchy — the most general, most informative, and most broadly applicable factorization in linear algebra.

// // // // // // // The six structural quantities the SVD exposes — rank, the four fundamental subspaces, the pseudoinverse, the best rank-$k$ approximation, norms and condition number, and the geometric decomposition — collect into a single reference card below.`,
// // // // // // //     before: ``,
// // // // // // //     after: ``,
// // // // // // //     link: ``,
// // // // // // //   },
// // // // // // // }

// // // // // // // const introContent = {
// // // // // // //   title: `The Universal Matrix Factorization`,
// // // // // // //   content: `The singular value decomposition factors any matrix of any shape as UΣVᵀ — two orthogonal matrices sandwiching a diagonal matrix of non-negative singular values. It exists for every matrix, reveals the rank, provides orthonormal bases for all four fundamental subspaces, computes the pseudoinverse, yields the best low-rank approximation, and decomposes every linear transformation into a rotation, a scaling, and another rotation. No other single factorization provides this much information.`,
// // // // // // // }

// // // // // // // const faqQuestions = {
// // // // // // //   obj1: {
// // // // // // //     question: "What is the singular value decomposition?",
// // // // // // //     answer: "The SVD factors any m×n matrix A as A = UΣVᵀ, where U and V are orthogonal matrices of left and right singular vectors, and Σ is diagonal with non-negative singular values. It exists for every matrix regardless of shape, rank, or symmetry.",
// // // // // // //     sectionId: "1"
// // // // // // //   },
// // // // // // //   obj2: {
// // // // // // //     question: "What do singular values represent geometrically?",
// // // // // // //     answer: "Singular values measure how much a matrix stretches vectors along each orthogonal direction. The largest singular value σ₁ is the maximum stretching factor, and the transformation A decomposes geometrically into a rotation (Vᵀ), a coordinate-axis scaling (Σ), and another rotation (U).",
// // // // // // //     sectionId: "2"
// // // // // // //   },
// // // // // // //   obj3: {
// // // // // // //     question: "How does SVD give the best low-rank approximation?",
// // // // // // //     answer: "The Eckart-Young-Mirsky theorem states that truncating the SVD at k terms gives the closest rank-k matrix to A in both operator and Frobenius norms. The approximation error equals σₖ₊₁ in operator norm. This is the basis of image compression and noise reduction.",
// // // // // // //     sectionId: "8"
// // // // // // //   },
// // // // // // //   obj4: {
// // // // // // //     question: "How is the pseudoinverse computed from the SVD?",
// // // // // // //     answer: "The Moore-Penrose pseudoinverse is A⁺ = VΣ⁺Uᵀ, where Σ⁺ reciprocates each nonzero singular value and transposes the shape. For overdetermined systems A⁺b gives the least-squares solution; for rank-deficient systems it gives the minimum-norm least-squares solution.",
// // // // // // //     sectionId: "7"
// // // // // // //   },
// // // // // // //   obj5: {
// // // // // // //     question: "How does SVD reveal the four fundamental subspaces?",
// // // // // // //     answer: "The first r columns of V span the row space, the remaining n−r columns span the null space. The first r columns of U span the column space, the remaining m−r columns span the left null space. No other factorization provides orthonormal bases for all four subspaces simultaneously.",
// // // // // // //     sectionId: "6"
// // // // // // //   },
// // // // // // //   obj6: {
// // // // // // //     question: "What is the condition number of a matrix?",
// // // // // // //     answer: "The condition number κ(A) = σ₁/σᵣ is the ratio of the largest to smallest nonzero singular value. It measures sensitivity to perturbation: a matrix with κ = 10ᵏ loses roughly k digits of accuracy in floating-point computation. Orthogonal matrices have κ = 1; singular matrices have κ = ∞.",
// // // // // // //     sectionId: "9"
// // // // // // //   }
// // // // // // // }


// // // // // // // const schemas = {
// // // // // // //   learningResource: {
// // // // // // //     "@context": "https://schema.org",
// // // // // // //     "@type": "LearningResource",
// // // // // // //     "name": "Singular Value Decomposition (SVD)",
// // // // // // //     "description": "Singular value decomposition A = UΣVᵀ: singular values, geometric interpretation, pseudoinverse, low-rank approximation, four fundamental subspaces, norms, and condition number.",
// // // // // // //     "url": "https://www.learnmathclass.com/linear-algebra/decompositions/svd",
// // // // // // //     "inLanguage": "en-US",
// // // // // // //     "learningResourceType": "Explanation",
// // // // // // //     "educationalLevel": "College",
// // // // // // //     "educationalUse": "Learning",
// // // // // // //     "audience": {
// // // // // // //       "@type": "EducationalAudience",
// // // // // // //       "educationalRole": "student"
// // // // // // //     },
// // // // // // //     "about": {
// // // // // // //       "@type": "Thing",
// // // // // // //       "name": "Singular Value Decomposition"
// // // // // // //     },
// // // // // // //     "teaches": [
// // // // // // //       "SVD factorization A = UΣVᵀ for any matrix",
// // // // // // //       "Geometric interpretation as rotation-scaling-rotation",
// // // // // // //       "Singular values from eigenvalues of AᵀA",
// // // // // // //       "Four fundamental subspaces from U and V",
// // // // // // //       "Moore-Penrose pseudoinverse via SVD",
// // // // // // //       "Best low-rank approximation (Eckart-Young theorem)",
// // // // // // //       "Matrix norms and condition number from singular values",
// // // // // // //       "Outer product form and relationship to spectral decomposition",
// // // // // // //       "Side-by-side comparison of full, thin, and compact SVD forms",
// // // // // // //       "Reference card collecting everything the SVD reveals about a matrix"
// // // // // // //     ],
// // // // // // //     "keywords": keyWords.join(", "),
// // // // // // //     "author": {
// // // // // // //       "@type": "Organization",
// // // // // // //       "name": "Learn Math Class"
// // // // // // //     },
// // // // // // //     "publisher": {
// // // // // // //       "@type": "Organization",
// // // // // // //       "name": "Learn Math Class"
// // // // // // //     },
// // // // // // //     "datePublished": "2024-01-15",
// // // // // // //     "dateModified": new Date().toISOString()
// // // // // // //   },

// // // // // // //   breadcrumb: {
// // // // // // //     "@context": "https://schema.org",
// // // // // // //     "@type": "BreadcrumbList",
// // // // // // //     "itemListElement": [
// // // // // // //       {
// // // // // // //         "@type": "ListItem",
// // // // // // //         "position": 1,
// // // // // // //         "name": "Home",
// // // // // // //         "item": "https://www.learnmathclass.com"
// // // // // // //       },
// // // // // // //       {
// // // // // // //         "@type": "ListItem",
// // // // // // //         "position": 2,
// // // // // // //         "name": "Linear Algebra",
// // // // // // //         "item": "https://www.learnmathclass.com/linear-algebra"
// // // // // // //       },
// // // // // // //       {
// // // // // // //         "@type": "ListItem",
// // // // // // //         "position": 3,
// // // // // // //         "name": "Decompositions",
// // // // // // //         "item": "https://www.learnmathclass.com/linear-algebra/decompositions"
// // // // // // //       },
// // // // // // //       {
// // // // // // //         "@type": "ListItem",
// // // // // // //         "position": 4,
// // // // // // //         "name": "Singular Value Decomposition",
// // // // // // //         "item": "https://www.learnmathclass.com/linear-algebra/decompositions/svd"
// // // // // // //       }
// // // // // // //     ]
// // // // // // //   },

// // // // // // //   faq: {
// // // // // // //     "@context": "https://schema.org",
// // // // // // //     "@type": "FAQPage",
// // // // // // //     "mainEntity": Object.keys(faqQuestions).map(key => ({
// // // // // // //       "@type": "Question",
// // // // // // //       "name": faqQuestions[key].question,
// // // // // // //       "acceptedAnswer": {
// // // // // // //         "@type": "Answer",
// // // // // // //         "text": faqQuestions[key].answer
// // // // // // //       }
// // // // // // //     }))
// // // // // // //   }
// // // // // // // }


// // // // // // //   return {
// // // // // // //   props:{
// // // // // // //     sectionsContent,
// // // // // // //     introContent,
// // // // // // //     obj5Table,
// // // // // // //     obj6Table,
// // // // // // //     obj9Table,
// // // // // // //     svdReadings,
// // // // // // //     faqQuestions,
// // // // // // //     schemas,
// // // // // // //     seoData: {
// // // // // // //       title: "SVD: Singular Value Decomposition | Learn Math Class",
// // // // // // //       description: "Singular value decomposition A = UΣVᵀ: singular values, geometric interpretation, pseudoinverse, low-rank approximation, four fundamental subspaces, norms, and condition number.",
// // // // // // //       keywords: keyWords.join(", "),
// // // // // // //       url: "/linear-algebra/decompositions/svd",
// // // // // // //       name: "Singular Value Decomposition (SVD)"
// // // // // // //     },
// // // // // // //   }
// // // // // // // }
// // // // // // //    }

// // // // // // // // export default function PageTemplate({seoData,sectionsContent , introContent}) {
// // // // // // // export default function SVDPage({
// // // // // // //   seoData,
// // // // // // //   sectionsContent,
// // // // // // //   introContent,
// // // // // // //   obj5Table,
// // // // // // //   obj6Table,
// // // // // // //   obj9Table,
// // // // // // //   svdReadings,
// // // // // // //   faqQuestions,
// // // // // // //   schemas,
// // // // // // // }) {

// // // // // // //   const tableWrapStyle = { margin: '20px auto', width: '100%' }

// // // // // // //   const genericSections=[
// // // // // // //     {
// // // // // // //         id:'1',
// // // // // // //         title:sectionsContent.obj1.title,
// // // // // // //         link:sectionsContent.obj1.link,
// // // // // // //         content:[
// // // // // // //           sectionsContent.obj1.content,
// // // // // // //         ]
// // // // // // //     },
// // // // // // //     {
// // // // // // //         id:'2',
// // // // // // //         title:sectionsContent.obj2.title,
// // // // // // //         link:sectionsContent.obj2.link,
// // // // // // //         content:[
// // // // // // //           sectionsContent.obj2.content,
// // // // // // //         ]
// // // // // // //     },
// // // // // // //     {
// // // // // // //         id:'3',
// // // // // // //         title:sectionsContent.obj3.title,
// // // // // // //         link:sectionsContent.obj3.link,
// // // // // // //         content:[
// // // // // // //           sectionsContent.obj3.content,
// // // // // // //         ]
// // // // // // //     },
// // // // // // //     {
// // // // // // //         id:'4',
// // // // // // //         title:sectionsContent.obj4.title,
// // // // // // //         link:sectionsContent.obj4.link,
// // // // // // //         content:[
// // // // // // //           sectionsContent.obj4.content,
// // // // // // //         ]
// // // // // // //     },
// // // // // // //     {
// // // // // // //         id:'5',
// // // // // // //         title:sectionsContent.obj5.title,
// // // // // // //         link:sectionsContent.obj5.link,
// // // // // // //         content:[
// // // // // // //           sectionsContent.obj5.content,
// // // // // // //           <div key={'obj5-table'} style={tableWrapStyle}
// // // // // // //                dangerouslySetInnerHTML={{ __html: obj5Table }} />,
// // // // // // //         ]
// // // // // // //     },
// // // // // // //     {
// // // // // // //         id:'6',
// // // // // // //         title:sectionsContent.obj6.title,
// // // // // // //         link:sectionsContent.obj6.link,
// // // // // // //         content:[
// // // // // // //           sectionsContent.obj6.content,
// // // // // // //           <div key={'obj6-table'} style={tableWrapStyle}
// // // // // // //                dangerouslySetInnerHTML={{ __html: obj6Table }} />,
// // // // // // //         ]
// // // // // // //     },
// // // // // // //     {
// // // // // // //         id:'7',
// // // // // // //         title:sectionsContent.obj7.title,
// // // // // // //         link:sectionsContent.obj7.link,
// // // // // // //         content:[
// // // // // // //           sectionsContent.obj7.content,
// // // // // // //         ]
// // // // // // //     },
// // // // // // //     {
// // // // // // //         id:'8',
// // // // // // //         title:sectionsContent.obj8.title,
// // // // // // //         link:sectionsContent.obj8.link,
// // // // // // //         content:[
// // // // // // //           sectionsContent.obj8.content,
// // // // // // //         ]
// // // // // // //     },
// // // // // // //     {
// // // // // // //         id:'9',
// // // // // // //         title:sectionsContent.obj9.title,
// // // // // // //         link:sectionsContent.obj9.link,
// // // // // // //         content:[
// // // // // // //           sectionsContent.obj9.content,
// // // // // // //           <div key={'obj9-table'} style={tableWrapStyle}
// // // // // // //                dangerouslySetInnerHTML={{ __html: obj9Table }} />,
// // // // // // //         ]
// // // // // // //     },
// // // // // // //     {
// // // // // // //         id:'10',
// // // // // // //         title:sectionsContent.obj10.title,
// // // // // // //         link:sectionsContent.obj10.link,
// // // // // // //         content:[
// // // // // // //           sectionsContent.obj10.content,
// // // // // // //         ]
// // // // // // //     },
// // // // // // //     {
// // // // // // //         id:'11',
// // // // // // //         title:sectionsContent.obj11.title,
// // // // // // //         link:sectionsContent.obj11.link,
// // // // // // //         content:[
// // // // // // //           sectionsContent.obj11.content,
// // // // // // //         ]
// // // // // // //     },
// // // // // // //     {
// // // // // // //         id:'12',
// // // // // // //         title:sectionsContent.obj12.title,
// // // // // // //         link:sectionsContent.obj12.link,
// // // // // // //         content:[
// // // // // // //           sectionsContent.obj12.content,
// // // // // // //           `Grouping these by which factor supplies the answer is what makes them one computation rather than seven. Three come from the singular values alone, two from the columns of the orthogonal factors, and two require reading all three factors together. Nothing below needs the matrix again once the factorization is in hand.`,
// // // // // // //           <DiagramFrame
// // // // // // //             key={'obj12-diagram'}
// // // // // // //             id="svd-readings"
// // // // // // //             title="What the SVD reveals"
// // // // // // //             source="/linear-algebra/decompositions/svd"
// // // // // // //           >
// // // // // // //             <IdentitySheet data={svdReadings} theme="navy" variant="ledger" />
// // // // // // //           </DiagramFrame>,
// // // // // // //           `Two of these deserve emphasis because nothing else supplies them. The **condition number** measures how badly a system amplifies error, and it is invisible to the determinant — a matrix can have determinant one and still be nearly singular in some direction. **Low-rank approximation** is optimal rather than merely reasonable: truncating the sum at $k$ terms gives the closest rank-$k$ matrix in every unitarily invariant norm, with error exactly $\\sigma_{k+1}$.`,
// // // // // // //           `The reason all of this comes from one factorization is that the SVD asks nothing of the matrix. It need not be square, invertible, symmetric or full rank — the factorization exists regardless, which is what separates it from every other decomposition in this section and why it is the one to reach for when the matrix is unknown.`,
// // // // // // //         ]
// // // // // // //     },
// // // // // // //     // {
// // // // // // //     //     id:'13',
// // // // // // //     //     title:sectionsContent.obj13.title,
// // // // // // //     //     link:sectionsContent.obj13.link,
// // // // // // //     //     content:[
// // // // // // //     //       sectionsContent.obj13.content,
// // // // // // //     //     ]
// // // // // // //     // },
// // // // // // //     // {
// // // // // // //     //     id:'14',
// // // // // // //     //     title:sectionsContent.obj14.title,
// // // // // // //     //     link:sectionsContent.obj14.link,
// // // // // // //     //     content:[
// // // // // // //     //       sectionsContent.obj14.content,
// // // // // // //     //     ]
// // // // // // //     // },
// // // // // // //     // {
// // // // // // //     //     id:'15',
// // // // // // //     //     title:sectionsContent.obj15.title,
// // // // // // //     //     link:sectionsContent.obj15.link,
// // // // // // //     //     content:[
// // // // // // //     //       sectionsContent.obj15.content,
// // // // // // //     //     ]
// // // // // // //     // },
// // // // // // //     // {
// // // // // // //     //     id:'1',
// // // // // // //     //     title:sectionsContent.obj1.title,
// // // // // // //     //     link:sectionsContent.obj1.link,
// // // // // // //     //     content:[
// // // // // // //     //       sectionsContent.obj1.content,
// // // // // // //     //     ]
// // // // // // //     // },
// // // // // // //     // {
// // // // // // //     //     id:'1',
// // // // // // //     //     title:sectionsContent.obj1.title,
// // // // // // //     //     link:sectionsContent.obj1.link,
// // // // // // //     //     content:[
// // // // // // //     //       sectionsContent.obj1.content,
// // // // // // //     //     ]
// // // // // // //     // },
// // // // // // //     // {
// // // // // // //     //     id:'1',
// // // // // // //     //     title:sectionsContent.obj1.title,
// // // // // // //     //     link:sectionsContent.obj1.link,
// // // // // // //     //     content:[
// // // // // // //     //       sectionsContent.obj1.content,
// // // // // // //     //     ]
// // // // // // //     // },

// // // // // // // ]

// // // // // // //   return (
// // // // // // //    <>
// // // // // // //    {/* <Head>
// // // // // // //   <title>{seoData.title}</title>
// // // // // // //   <meta name="description" content={seoData.description} />
// // // // // // //   <meta name="keywords" content={seoData.keywords} />
// // // // // // //   <link rel="canonical" href={`https://www.learnmathclass.com${seoData.url}`} />

// // // // // // //   <meta property="og:title" content={seoData.title} />
// // // // // // //   <meta property="og:description" content={seoData.description} />
// // // // // // //   <meta property="og:url" content={`https://www.learnmathclass.com${seoData.url}`} />
// // // // // // //   <meta property="og:type" content="article" />
// // // // // // //   <meta property="og:site_name" content="Learn Math Class" />

// // // // // // //   <meta name="twitter:card" content="summary" />
// // // // // // //   <meta name="twitter:title" content={seoData.title} />
// // // // // // //   <meta name="twitter:description" content={seoData.description} />

// // // // // // //   <meta name="robots" content="index, follow" />

// // // // // // //   <script
// // // // // // //     type="application/ld+json"
// // // // // // //     dangerouslySetInnerHTML={{
// // // // // // //       __html: JSON.stringify({
// // // // // // //         "@context": "https://schema.org",
// // // // // // //         "@type": "WebPage",
// // // // // // //         "name": seoData.name,
// // // // // // //         "description": seoData.description,
// // // // // // //         "keywords": seoData.keywords,
// // // // // // //         "url": `https://www.learnmathclass.com${seoData.url}`,
// // // // // // //         "dateModified": new Date().toISOString(),
// // // // // // //         "inLanguage": "en-US",
// // // // // // //         "mainEntity": {
// // // // // // //           "@type": "Article",
// // // // // // //           "name": seoData.name,
// // // // // // //           "dateModified": new Date().toISOString(),
// // // // // // //           "author": {
// // // // // // //             "@type": "Organization",
// // // // // // //             "name": "Learn Math Class"
// // // // // // //           }
// // // // // // //         }
// // // // // // //       })
// // // // // // //     }}
// // // // // // //   />
// // // // // // // </Head> */}

// // // // // // // <Head>
// // // // // // //   <title>{seoData.title}</title>
// // // // // // //   <meta name="description" content={seoData.description} />
// // // // // // //   <meta name="keywords" content={seoData.keywords} />
// // // // // // //   <link rel="canonical" href={`https://www.learnmathclass.com${seoData.url}`} />

// // // // // // //   <meta property="og:title" content={seoData.title} />
// // // // // // //   <meta property="og:description" content={seoData.description} />
// // // // // // //   <meta property="og:url" content={`https://www.learnmathclass.com${seoData.url}`} />
// // // // // // //   <meta property="og:type" content="article" />
// // // // // // //   <meta property="og:site_name" content="Learn Math Class" />

// // // // // // //   <meta name="twitter:card" content="summary" />
// // // // // // //   <meta name="twitter:title" content={seoData.title} />
// // // // // // //   <meta name="twitter:description" content={seoData.description} />

// // // // // // //   <meta name="robots" content="index, follow" />

// // // // // // //   <script
// // // // // // //     type="application/ld+json"
// // // // // // //     dangerouslySetInnerHTML={{
// // // // // // //       __html: JSON.stringify(schemas.learningResource)
// // // // // // //     }}
// // // // // // //   />

// // // // // // //   <script
// // // // // // //     type="application/ld+json"
// // // // // // //     dangerouslySetInnerHTML={{
// // // // // // //       __html: JSON.stringify(schemas.breadcrumb)
// // // // // // //     }}
// // // // // // //   />

// // // // // // //   <script
// // // // // // //     type="application/ld+json"
// // // // // // //     dangerouslySetInnerHTML={{
// // // // // // //       __html: JSON.stringify(schemas.faq)
// // // // // // //     }}
// // // // // // //   />
// // // // // // // </Head>
// // // // // // //    {/* <GenericNavbar/> */}
// // // // // // //    <br/>
// // // // // // //    <br/>
// // // // // // //    <br/>
// // // // // // //    <br/>
// // // // // // //     <OperaSidebar
// // // // // // //            side='right'
// // // // // // //            // topOffset='65px'
// // // // // // //            sidebarWidth='45px'
// // // // // // //            panelWidth='200px'
// // // // // // //            iconColor='white'
// // // // // // //            panelBackgroundColor='#f2f2f2'
// // // // // // //          />
// // // // // // //    <Breadcrumb/>
// // // // // // //    <br/>
// // // // // // //    <br/>
// // // // // // //    <h1 className='title' style={{marginTop:'0px',marginBottom:'10px'}}>SVD Decompositions</h1>
// // // // // // //    <br/>
// // // // // // //    <br/>
// // // // // // //    <SectionTableOfContents sections={genericSections}
// // // // // // //     showSecondaryNav={true}
// // // // // // //          secondaryNavMode="siblings"  // or "children"
// // // // // // //          secondaryNavTitle="More in this Section"

// // // // // // //    />
// // // // // // //    <br/>
// // // // // // //    <br/>
// // // // // // //    <br/>
// // // // // // //     <IntroSection
// // // // // // //           id={introContent.id}
// // // // // // //           title={introContent.title}
// // // // // // //           content={introContent.content}
// // // // // // //            backgroundColor='#f9fafb'
// // // // // // //           //  "#f2f2f2"
// // // // // // //           textColor="#06357a"
// // // // // // //         />
// // // // // // //    <br/>
// // // // // // //    <br/>
// // // // // // //    <br/>
// // // // // // //    <br/>
// // // // // // //    <br/>
// // // // // // //    <br/>
// // // // // // //    <Sections sections={genericSections}/>
// // // // // // //    <br/>
// // // // // // //    <br/>
// // // // // // //    <br/>
// // // // // // //    {/* <ScrollUpButton/> */}
// // // // // // //    </>
// // // // // // //   )
// // // // // // // }


// // // // // // // tables-optimized: v4 | 2026-05-18 | 4 tables (obj5 comparison, obj6 aggregation, obj9 aggregation, obj12 summary capstone)
// // // // // // import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
// // // // // // import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
// // // // // // import IntroSection from '@/app/components/page-components/section/IntroContentSection'
// // // // // // import Sections from '@/app/components/page-components/section/Sections'
// // // // // // import SectionTableOfContents from '@/app/components/page-components/section/SectionTableofContents'
// // // // // // import React from 'react'
// // // // // // import '../../../pages.css'
// // // // // // import Head from 'next/head'
// // // // // // import KeyTermsCard from '@/app/components/page-components/KeyTermsCard'
// // // // // // import { tableHeaders } from '@/app/styles/theme'
// // // // // // import IdentitySheet from '@/app/components/infographics/linear-algebra/IdentitySheet'
// // // // // // import ObjectTypeProfile from '@/app/components/infographics/linear-algebra/ObjectTypeProfile'
// // // // // // import DiagramFrame from '@/app/components/infographics/DiagramsFrame'


// // // // // // export async function getStaticProps(){
// // // // // // const keyWords = [
// // // // // //   "singular value decomposition",
// // // // // //   "SVD",
// // // // // //   "singular values",
// // // // // //   "left right singular vectors",
// // // // // //   "low-rank approximation",
// // // // // //   "pseudoinverse SVD",
// // // // // //   "Moore-Penrose pseudoinverse",
// // // // // //   "Eckart-Young theorem",
// // // // // //   "matrix rank SVD",
// // // // // //   "condition number singular values",
// // // // // //   "four fundamental subspaces SVD",
// // // // // //   "compact SVD thin SVD",
// // // // // //   "SVD image compression",
// // // // // //   "operator norm Frobenius norm",
// // // // // //   "UΣVᵀ factorization"
// // // // // // ]

// // // // // //   const linkStyle = 'color: inherit; text-decoration: underline;'

// // // // // //   // ---------- TABLES ----------

// // // // // //   // obj5 — comparison: three SVD variants
// // // // // //   // obj5 — three storage forms of one factorization
// // // // // //   const svdForms = {
// // // // // //     kicker: 'Decompositions \u00B7 SVD',
// // // // // //     title: 'Three forms, one factorization',
// // // // // //     tallyLabel: 'forms',
// // // // // //     intro: 'All three reconstruct $A$ exactly. They differ in how much of $U$ and $\\Sigma$ is kept \u2014 and what is dropped is precisely the part that multiplies against zero singular values.',
// // // // // //     footnote: 'Nothing is approximated anywhere in this table. The full form carries orthonormal bases for all four [fundamental subspaces](!/linear-algebra/vector-spaces/fundamental-spaces), which is why it is the one to state theorems with; the compact form carries only what contributes to $A$, which is why it is the one to store. Approximation begins only when the compact form is truncated below rank $r$.',
// // // // // //     slots: [
// // // // // //       { key: 'shapes',  label: 'shapes' },
// // // // // //       { key: 'stored',  label: 'what is kept' },
// // // // // //       { key: 'dropped', label: 'what is dropped' },
// // // // // //       { key: 'usedFor', label: 'used for' },
// // // // // //     ],
// // // // // //     groups: [
// // // // // //       {
// // // // // //         heading: 'Everything kept',
// // // // // //         types: [
// // // // // //           {
// // // // // //             name: 'Full SVD',
// // // // // //             anchor: '#1',
// // // // // //             shape: 'dense',
// // // // // //             condition: '$U$ and $V$ both square and orthogonal',
// // // // // //             properties: {
// // // // // //               shapes: '$U: m \\times m$, $\\Sigma: m \\times n$, $V: n \\times n$',
// // // // // //               stored: 'all of $U$, $V$, and a rectangular $\\Sigma$',
// // // // // //               dropped: 'nothing',
// // // // // //               usedFor: 'theory, the four subspaces',
// // // // // //             },
// // // // // //             note: 'The only form where $U$ and $V$ are genuinely orthogonal matrices, so $UU^{\\mathsf{T}} = I$ as well as $U^{\\mathsf{T}}U = I$. That is what makes it the form to state results with \u2014 the last $m - r$ columns of $U$ span the left null space and would otherwise be gone.',
// // // // // //           },
// // // // // //         ],
// // // // // //       },
// // // // // //       {
// // // // // //         heading: 'Trimmed to what multiplies',
// // // // // //         types: [
// // // // // //           {
// // // // // //             name: 'Thin SVD',
// // // // // //             anchor: '#5',
// // // // // //             shape: 'lower',
// // // // // //             condition: '$m > n$ \u2014 keep $n$ columns of $U$',
// // // // // //             properties: {
// // // // // //               shapes: '$U_n: m \\times n$, $\\Sigma_n: n \\times n$, $V: n \\times n$',
// // // // // //               stored: 'the first $n$ columns of $U$',
// // // // // //               dropped: 'the last $m - n$ columns of $U$',
// // // // // //               usedFor: 'least squares on tall matrices',
// // // // // //             },
// // // // // //             note: 'The dropped columns multiply rows of $\\Sigma$ that are entirely zero, so removing them changes nothing about the product. Note $U_n$ is no longer square: $U_n^{\\mathsf{T}}U_n = I_n$ still holds, but $U_nU_n^{\\mathsf{T}}$ does not.',
// // // // // //           },
// // // // // //           {
// // // // // //             name: 'Compact SVD',
// // // // // //             anchor: '#5',
// // // // // //             shape: 'block',
// // // // // //             condition: 'keep only the $r$ nonzero singular values',
// // // // // //             properties: {
// // // // // //               shapes: '$U_r: m \\times r$, $\\Sigma_r: r \\times r$, $V_r: n \\times r$',
// // // // // //               stored: 'the rank-$r$ content only',
// // // // // //               dropped: 'every zero singular value and its vectors',
// // // // // //               usedFor: 'storage, rank-deficient matrices',
// // // // // //             },
// // // // // //             note: 'The most economical exact form: $\\Sigma_r$ is square with a strictly positive diagonal, so it is invertible \u2014 which is what makes the [pseudoinverse](#7) computable as $V_r\\Sigma_r^{-1}U_r^{\\mathsf{T}}$.',
// // // // // //           },
// // // // // //         ],
// // // // // //       },
// // // // // //     ],
// // // // // //   }

// // // // // //   // obj6 — aggregation: four fundamental subspaces from the SVD
// // // // // //   const obj6Table = `
// // // // // // <table class="styled-table" style="border-collapse: collapse; width: 75%;margin:auto; background: white; box-shadow: 0 2px 10px rgba(0,0,0,0.1); border-radius: 8px; overflow: hidden; font-family: Arial, sans-serif;">
// // // // // //   <thead>
// // // // // //     <tr>
// // // // // //       <th style="${tableHeaders.aggregation}">Fundamental subspace</th>
// // // // // //       <th style="${tableHeaders.aggregation} text-align: center;">Basis from</th>
// // // // // //       <th style="${tableHeaders.aggregation} text-align: center;">Column indices</th>
// // // // // //       <th style="${tableHeaders.aggregation} text-align: center;">Dimension</th>
// // // // // //     </tr>
// // // // // //   </thead>
// // // // // //   <tbody>
// // // // // //     <tr style="background: #f8f9fa;">
// // // // // //       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Row space of A</td>
// // // // // //       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e; text-align: center;">V</td>
// // // // // //       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e; text-align: center;">1, ..., r</td>
// // // // // //       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e; text-align: center;">r</td>
// // // // // //     </tr>
// // // // // //     <tr>
// // // // // //       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Null space of A</td>
// // // // // //       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e; text-align: center;">V</td>
// // // // // //       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e; text-align: center;">r+1, ..., n</td>
// // // // // //       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e; text-align: center;">n − r</td>
// // // // // //     </tr>
// // // // // //     <tr style="background: #f8f9fa;">
// // // // // //       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Column space of A</td>
// // // // // //       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e; text-align: center;">U</td>
// // // // // //       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e; text-align: center;">1, ..., r</td>
// // // // // //       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e; text-align: center;">r</td>
// // // // // //     </tr>
// // // // // //     <tr>
// // // // // //       <td style="padding: 12px 15px; font-weight: bold; color: #06357a;">Left null space of A</td>
// // // // // //       <td style="padding: 12px 15px; color: #34495e; text-align: center;">U</td>
// // // // // //       <td style="padding: 12px 15px; color: #34495e; text-align: center;">r+1, ..., m</td>
// // // // // //       <td style="padding: 12px 15px; color: #34495e; text-align: center;">m − r</td>
// // // // // //     </tr>
// // // // // //   </tbody>
// // // // // // </table>
// // // // // // `

// // // // // //   // obj9 — aggregation: norms and condition number from singular values
// // // // // //   const obj9Table = `
// // // // // // <table class="styled-table" style="border-collapse: collapse; width: 75%;margin:auto; background: white; box-shadow: 0 2px 10px rgba(0,0,0,0.1); border-radius: 8px; overflow: hidden; font-family: Arial, sans-serif;">
// // // // // //   <thead>
// // // // // //     <tr>
// // // // // //       <th style="${tableHeaders.aggregation}">Quantity</th>
// // // // // //       <th style="${tableHeaders.aggregation}">Formula via singular values</th>
// // // // // //       <th style="${tableHeaders.aggregation}">Interpretation</th>
// // // // // //     </tr>
// // // // // //   </thead>
// // // // // //   <tbody>
// // // // // //     <tr style="background: #f8f9fa;">
// // // // // //       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Operator (spectral) norm ‖A‖<sub>2</sub></td>
// // // // // //       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">σ<sub>1</sub></td>
// // // // // //       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">maximum stretching factor on the unit ball</td>
// // // // // //     </tr>
// // // // // //     <tr>
// // // // // //       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;"><a href="/linear-algebra/matrix/trace" style="${linkStyle}">Frobenius norm</a> ‖A‖<sub>F</sub></td>
// // // // // //       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">√(σ<sub>1</sub><sup>2</sup> + σ<sub>2</sub><sup>2</sup> + ··· + σ<sub>r</sub><sup>2</sup>)</td>
// // // // // //       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">total "energy" — root-sum-of-squares of singular values</td>
// // // // // //     </tr>
// // // // // //     <tr style="background: #f8f9fa;">
// // // // // //       <td style="padding: 12px 15px; font-weight: bold; color: #06357a;">Condition number κ(A)</td>
// // // // // //       <td style="padding: 12px 15px; color: #34495e;">σ<sub>1</sub> / σ<sub>r</sub></td>
// // // // // //       <td style="padding: 12px 15px; color: #34495e;">sensitivity to perturbation: κ = 10<sup>k</sup> loses ~k digits</td>
// // // // // //     </tr>
// // // // // //   </tbody>
// // // // // // </table>
// // // // // // `

// // // // // //   // obj12 — summary capstone: what the SVD reveals
// // // // // //   // obj12 — what one factorization yields, sorted by which factor carries it
// // // // // //   const svdReadings = {
// // // // // //     kicker: 'Decompositions \u00B7 SVD',
// // // // // //     title: 'What the SVD reveals',
// // // // // //     tallyLabel: 'readings',
// // // // // //     intro: 'Every entry comes from the same three factors. What changes is which one is being read \u2014 the singular values for size, the columns of $U$ and $V$ for structure, and all three together for geometry.',
// // // // // //     footnote: 'No other factorization answers this many questions, and none exists for every matrix. That combination is why the SVD is the one to reach for when the matrix is rectangular, rank-deficient, or simply unknown \u2014 the conditions the [other decompositions](!/linear-algebra/decompositions) require are exactly the ones it does without.',
// // // // // //     groups: [
// // // // // //       {
// // // // // //         heading: 'From the singular values',
// // // // // //         identities: [
// // // // // //           {
// // // // // //             name: 'Rank',
// // // // // //             anchor: '#3',
// // // // // //             formula: '$r = $ count of $\\sigma_i > 0$',
// // // // // //             condition: 'strictly positive only',
// // // // // //             note: 'The most numerically reliable rank there is. Row reduction decides rank by comparing entries against zero, which floating point makes arbitrary; the singular values instead show a gap, and where that gap falls is a judgement the numbers themselves support.',
// // // // // //           },
// // // // // //           {
// // // // // //             name: 'Norms',
// // // // // //             anchor: '#9',
// // // // // //             formula: '$\\|A\\|_2 = \\sigma_1, \\quad \\|A\\|_F^2 = \\textstyle\\sum \\sigma_i^2$',
// // // // // //             condition: 'read straight off the list',
// // // // // //             note: 'The largest singular value is the most any unit vector is stretched. The Frobenius norm is the whole list in quadrature \u2014 so both common matrix norms are functions of the same numbers.',
// // // // // //           },
// // // // // //           {
// // // // // //             name: 'Condition number',
// // // // // //             anchor: '#9',
// // // // // //             formula: '$\\kappa(A) = \\sigma_1 / \\sigma_r$',
// // // // // //             condition: '$A$ of full rank',
// // // // // //             strict: true,
// // // // // //             note: 'The ratio of most to least stretched. A large $\\kappa$ means the matrix is nearly singular in some direction, and small changes to $\\mathbf{b}$ produce large changes to the solution \u2014 which no determinant reports, since a matrix can have $\\det = 1$ and be badly conditioned.',
// // // // // //           },
// // // // // //         ],
// // // // // //       },
// // // // // //       {
// // // // // //         heading: 'From the columns of U and V',
// // // // // //         identities: [
// // // // // //           {
// // // // // //             name: 'The four subspaces',
// // // // // //             anchor: '#6',
// // // // // //             formula: 'partition $U$ and $V$ at index $r$',
// // // // // //             condition: 'orthonormal bases, all four at once',
// // // // // //             key: true,
// // // // // //             note: 'First $r$ columns of $V$ span the row space and the rest the null space; first $r$ of $U$ span the column space and the rest the left null space. The only method giving [all four](!/linear-algebra/vector-spaces/fundamental-spaces) orthonormally from one computation.',
// // // // // //           },
// // // // // //           {
// // // // // //             name: 'Pseudoinverse',
// // // // // //             anchor: '#7',
// // // // // //             formula: '$A^{+} = V\\Sigma^{+}U^{\\mathsf{T}}$',
// // // // // //             condition: 'reciprocate the nonzero $\\sigma$, leave zeros alone',
// // // // // //             note: 'Defined for every matrix, square or not, invertible or not. When $A$ is invertible it coincides with $A^{-1}$; otherwise it returns the least-squares solution of minimum norm, which is the sense in which it is the closest thing to an [inverse](!/linear-algebra/matrix/inverse).',
// // // // // //           },
// // // // // //         ],
// // // // // //       },
// // // // // //       {
// // // // // //         heading: 'From all three factors',
// // // // // //         identities: [
// // // // // //           {
// // // // // //             name: 'Low-rank approximation',
// // // // // //             anchor: '#8',
// // // // // //             formula: '$A_k = \\sum_{i=1}^{k} \\sigma_i \\mathbf{u}_i \\mathbf{v}_i^{\\mathsf{T}}$',
// // // // // //             condition: 'optimal for every unitarily invariant norm',
// // // // // //             key: true,
// // // // // //             note: 'Truncating the outer-product sum gives the best rank-$k$ approximation there is \u2014 the Eckart\u2013Young theorem, and it is why the SVD underlies image compression and principal component analysis. The error is exactly $\\sigma_{k+1}$, so the singular values say in advance how much is lost.',
// // // // // //           },
// // // // // //           {
// // // // // //             name: 'Geometric action',
// // // // // //             anchor: '#2',
// // // // // //             formula: '$A = U\\Sigma V^{\\mathsf{T}}$ \u2014 rotate, stretch, rotate',
// // // // // //             condition: 'every matrix, no hypotheses',
// // // // // //             note: 'Read right to left: $V^{\\mathsf{T}}$ rotates, $\\Sigma$ scales along axes, $U$ rotates again. Every linear map is those three steps, which is the claim that makes the factorization worth having as geometry rather than only as algebra.',
// // // // // //           },
// // // // // //         ],
// // // // // //       },
// // // // // //     ],
// // // // // //   }

// // // // // // // const sectionsContent = {
// // // // // // //   obj1: {
// // // // // // //     title: `What the SVD Is`,
// // // // // // //     content: `Every $m \\times n$ [matrix](!/linear-algebra/matrix) $A$ — any shape, any [rank](!/linear-algebra/matrix/rank) — factors as

// // // // // // // $$A = U\\Sigma V^T$$

// // // // // // // $U$ is $m \\times m$ [orthogonal](!/linear-algebra/matrix/types): its columns are the left singular vectors. $V$ is $n \\times n$ orthogonal: its columns are the right singular vectors. $\\Sigma$ is $m \\times n$ with non-negative entries $\\sigma_1 \\geq \\sigma_2 \\geq \\cdots \\geq \\sigma_{\\min(m,n)} \\geq 0$ on the diagonal and zeros elsewhere. These are the singular values.

// // // // // // // The SVD exists without any restriction. The matrix need not be square, need not be [invertible](!/linear-algebra/matrix/inverse), need not be [symmetric](!/linear-algebra/matrix/types), and need not have any special structure. It is the most general factorization in linear algebra.`,
// // // // // // //     before: ``,
// // // // // // //     after: ``,
// // // // // // //     link: ``,
// // // // // // //   },
// // // // // // //   obj2: {
// // // // // // //     title: `The Geometric Interpretation`,
// // // // // // //     content: `Every [linear transformation](!/linear-algebra/transformations) $\\mathbf{x} \\mapsto A\\mathbf{x}$ decomposes into three geometric steps:

// // // // // // // $V^T$ rotates (or reflects) the input space, aligning the input with the "natural axes" of the transformation — the directions along which $A$ stretches most and least.

// // // // // // // $\\Sigma$ scales each axis independently by the corresponding singular value. Axes with $\\sigma_i = 0$ are annihilated — those directions are collapsed to zero.

// // // // // // // $U$ rotates (or reflects) the scaled result into the output space.

// // // // // // // The singular values measure the stretching in each orthogonal direction. $\\sigma_1$ is the maximum stretching: $\\sigma_1 = \\max_{\\|\\mathbf{x}\\|=1}\\|A\\mathbf{x}\\|$. The smallest nonzero singular value $\\sigma_r$ is the minimum stretching on the [row space](!/linear-algebra/vector-spaces/fundamental-spaces). The ratio $\\sigma_1/\\sigma_r$ is the condition number — it measures how distorted the transformation is.

// // // // // // // Even the most complex-looking matrix is geometrically just two rotations sandwiching a coordinate-axis scaling.`,
// // // // // // //     before: ``,
// // // // // // //     after: ``,
// // // // // // //     link: ``,
// // // // // // //   },
// // // // // // //   obj3: {
// // // // // // //     title: `Singular Values`,
// // // // // // //     content: `The singular values of $A$ are the square roots of the [eigenvalues](!/linear-algebra/eigen) of $A^TA$ (or equivalently $AA^T$):

// // // // // // // $$\\sigma_i = \\sqrt{\\lambda_i(A^TA)}$$

// // // // // // // Since $A^TA$ is symmetric positive semi-definite, its eigenvalues are all $\\geq 0$, so the singular values are real and non-negative. They are ordered $\\sigma_1 \\geq \\sigma_2 \\geq \\cdots \\geq 0$.

// // // // // // // The number of nonzero singular values equals the [rank](!/linear-algebra/matrix/rank) of $A$. This is the most numerically stable method for determining rank: compute the SVD and count singular values above a tolerance.

// // // // // // // The largest singular value $\\sigma_1$ is the operator norm $\\|A\\|_2 = \\max_{\\|\\mathbf{x}\\|=1}\\|A\\mathbf{x}\\|$. The [Frobenius norm](!/linear-algebra/matrix/trace) is $\\|A\\|_F = \\sqrt{\\sigma_1^2 + \\sigma_2^2 + \\cdots + \\sigma_r^2}$. The condition number is $\\kappa(A) = \\sigma_1/\\sigma_r$ — a large condition number means the matrix is nearly singular and small perturbations in the input cause large changes in the output.`,
// // // // // // //     before: ``,
// // // // // // //     after: ``,
// // // // // // //     link: ``,
// // // // // // //   },
// // // // // // //   obj4: {
// // // // // // //     title: `Computing the SVD`,
// // // // // // //     content: `The standard approach computes the SVD through the eigenvalue decomposition of $A^TA$.

// // // // // // // Form $A^TA$ (symmetric, $n \\times n$). Find its eigenvalues $\\lambda_1 \\geq \\cdots \\geq \\lambda_n \\geq 0$ and orthonormal eigenvectors $\\mathbf{v}_1, \\dots, \\mathbf{v}_n$ using the [spectral decomposition](!/linear-algebra/decompositions/spectral). These are the right singular vectors: $V = [\\mathbf{v}_1 \\; \\cdots \\; \\mathbf{v}_n]$.

// // // // // // // The singular values are $\\sigma_i = \\sqrt{\\lambda_i}$. The left singular vectors are computed from the right ones: $\\mathbf{u}_i = \\frac{1}{\\sigma_i}A\\mathbf{v}_i$ for each nonzero $\\sigma_i$. If $r < m$, extend $\\{\\mathbf{u}_1, \\dots, \\mathbf{u}_r\\}$ to an [orthonormal basis](!/linear-algebra/orthogonality/orthogonal-sets) for $\\mathbb{R}^m$.

// // // // // // // ## Worked Example

// // // // // // // For $A = \\begin{pmatrix} 1 & 0 \\\\ 0 & 1 \\\\ 1 & 1 \\end{pmatrix}$: $A^TA = \\begin{pmatrix} 2 & 1 \\\\ 1 & 2 \\end{pmatrix}$, eigenvalues $3$ and $1$, eigenvectors $\\frac{1}{\\sqrt{2}}(1, 1)^T$ and $\\frac{1}{\\sqrt{2}}(1, -1)^T$. Singular values: $\\sqrt{3}$ and $1$. Left singular vectors: $\\mathbf{u}_1 = \\frac{1}{\\sqrt{3}}A\\mathbf{v}_1 = \\frac{1}{\\sqrt{6}}(1, 1, 2)^T$, $\\mathbf{u}_2 = A\\mathbf{v}_2 = \\frac{1}{\\sqrt{2}}(1, -1, 0)^T$. Extend with $\\mathbf{u}_3 = \\frac{1}{\\sqrt{3}}(-1, -1, 1)^T$.`,
// // // // // // //     before: ``,
// // // // // // //     after: ``,
// // // // // // //     link: ``,
// // // // // // //   },
// // // // // // //   obj5: {
// // // // // // //     title: `Compact and Thin Forms`,
// // // // // // //     content: `The full SVD has $U$ of size $m \\times m$, $\\Sigma$ of size $m \\times n$, and $V$ of size $n \\times n$. Two economical alternatives retain only the essential information.

// // // // // // // The thin SVD keeps only the first $n$ columns of $U$ (call them $U_1$) and the top $n \\times n$ block of $\\Sigma$ (call it $\\Sigma_1$): $A = U_1 \\Sigma_1 V^T$. This drops the columns of $U$ corresponding to the [left null space](!/linear-algebra/vector-spaces/fundamental-spaces).

// // // // // // // The compact SVD keeps only the first $r$ columns of $U$ and $V$ (where $r = \\text{rank}(A)$) and the $r \\times r$ diagonal block of nonzero singular values: $A = U_r \\Sigma_r V_r^T$. This is the most economical representation — it captures only the rank-$r$ content of $A$, discarding everything associated with zero singular values.

// // // // // // // All three forms represent the same matrix $A$. The compact form uses the least storage; the full form provides bases for all four [fundamental subspaces](!/linear-algebra/vector-spaces/fundamental-spaces). The three variants line up cleanly on factor dimensions and on what each one chooses to keep.`,
// // // // // // //     before: ``,
// // // // // // //     after: ``,
// // // // // // //     link: ``,
// // // // // // //   },
// // // // // // //   obj6: {
// // // // // // //     title: `SVD and the Four Fundamental Subspaces`,
// // // // // // //     content: `The SVD simultaneously provides orthonormal [bases](!/linear-algebra/vector-spaces) for all four [fundamental subspaces](!/linear-algebra/vector-spaces/fundamental-spaces) of $A$.

// // // // // // // The first $r$ columns of $V$ ($\\mathbf{v}_1, \\dots, \\mathbf{v}_r$) form an orthonormal basis for the row space of $A$.

// // // // // // // The last $n - r$ columns of $V$ ($\\mathbf{v}_{r+1}, \\dots, \\mathbf{v}_n$) form an orthonormal basis for the [null space](!/linear-algebra/vector-spaces/fundamental-spaces) of $A$.

// // // // // // // The first $r$ columns of $U$ ($\\mathbf{u}_1, \\dots, \\mathbf{u}_r$) form an orthonormal basis for the [column space](!/linear-algebra/vector-spaces/fundamental-spaces) of $A$.

// // // // // // // The last $m - r$ columns of $U$ ($\\mathbf{u}_{r+1}, \\dots, \\mathbf{u}_m$) form an orthonormal basis for the left null space of $A$.

// // // // // // // No other factorization provides all four bases simultaneously, and no other method guarantees that these bases are orthonormal. The SVD is the complete structural portrait of any matrix.`,
// // // // // // //     before: ``,
// // // // // // //     after: ``,
// // // // // // //     link: ``,
// // // // // // //   },
// // // // // // //   obj7: {
// // // // // // //     title: `The Pseudoinverse`,
// // // // // // //     content: `The Moore-Penrose pseudoinverse $A^+$ is computed directly from the SVD:

// // // // // // // $$A^+ = V\\Sigma^+ U^T$$

// // // // // // // The matrix $\\Sigma^+$ is formed by reciprocating each nonzero singular value and transposing the shape: if $\\Sigma$ is $m \\times n$ with diagonal entries $\\sigma_1, \\dots, \\sigma_r, 0, \\dots, 0$, then $\\Sigma^+$ is $n \\times m$ with diagonal entries $1/\\sigma_1, \\dots, 1/\\sigma_r, 0, \\dots, 0$.

// // // // // // // The pseudoinverse satisfies four defining properties: $AA^+A = A$, $A^+AA^+ = A^+$, $(AA^+)^T = AA^+$, $(A^+A)^T = A^+A$.

// // // // // // // For a full-rank overdetermined system ($m > n$, rank $= n$), $A^+\\mathbf{b}$ gives the [least-squares](!/linear-algebra/orthogonality/least-squares) solution. For a rank-deficient system, $A^+\\mathbf{b}$ gives the minimum-norm least-squares solution — the solution of smallest length among all minimizers of $\\|A\\mathbf{x} - \\mathbf{b}\\|$.`,
// // // // // // //     before: ``,
// // // // // // //     after: ``,
// // // // // // //     link: ``,
// // // // // // //   },
// // // // // // //   obj8: {
// // // // // // //     title: `Low-Rank Approximation`,
// // // // // // //     content: `The best rank-$k$ approximation to $A$ in either the operator norm or the Frobenius norm is obtained by truncating the SVD at $k$ terms:

// // // // // // // $$A_k = \\sigma_1\\mathbf{u}_1\\mathbf{v}_1^T + \\sigma_2\\mathbf{u}_2\\mathbf{v}_2^T + \\cdots + \\sigma_k\\mathbf{u}_k\\mathbf{v}_k^T$$

// // // // // // // This is the Eckart-Young-Mirsky theorem. Among all matrices of rank at most $k$, $A_k$ is the closest to $A$.

// // // // // // // The approximation error is $\\|A - A_k\\|_2 = \\sigma_{k+1}$ (the first discarded singular value) in the operator norm, and $\\|A - A_k\\|_F = \\sqrt{\\sigma_{k+1}^2 + \\cdots + \\sigma_r^2}$ in the Frobenius norm.

// // // // // // // When the singular values decay rapidly — $\\sigma_1 \\gg \\sigma_2 \\gg \\cdots$ — a small number of terms captures most of the matrix. This is the basis of image compression (store $k$ singular value triples instead of $mn$ entries), noise reduction (discard small singular values as noise), latent semantic analysis (retain the top-$k$ "concepts" in a document-term matrix), and dimensionality reduction more broadly.`,
// // // // // // //     before: ``,
// // // // // // //     after: ``,
// // // // // // //     link: ``,
// // // // // // //   },
// // // // // // //   obj9: {
// // // // // // //     title: `SVD and Norms`,
// // // // // // //     content: `The singular values provide the complete "size profile" of a matrix.

// // // // // // // The operator (spectral) norm is the largest singular value: $\\|A\\|_2 = \\sigma_1$. It measures the maximum factor by which $A$ can stretch a unit vector.

// // // // // // // The [Frobenius norm](!/linear-algebra/matrix/trace) is the root-sum-of-squares of all singular values: $\\|A\\|_F = \\sqrt{\\sigma_1^2 + \\sigma_2^2 + \\cdots + \\sigma_r^2}$. It measures the total "energy" in the matrix.

// // // // // // // The condition number $\\kappa(A) = \\sigma_1/\\sigma_r$ quantifies sensitivity to perturbation. A matrix with $\\kappa = 10^k$ loses roughly $k$ digits of accuracy in solving $A\\mathbf{x} = \\mathbf{b}$ with floating-point arithmetic. A perfectly conditioned matrix ($\\kappa = 1$) is orthogonal. A singular matrix ($\\sigma_r = 0$) has $\\kappa = \\infty$.

// // // // // // // The singular values are the natural measuring tool for matrices, just as eigenvalues are the natural measuring tool for symmetric matrices and [linear operators](!/linear-algebra/transformations). For non-symmetric matrices, singular values (not eigenvalues) govern norms and conditioning.`,
// // // // // // //     before: ``,
// // // // // // //     after: ``,
// // // // // // //     link: ``,
// // // // // // //   },
// // // // // // //   obj10: {
// // // // // // //     title: `SVD and the Spectral Decomposition`,
// // // // // // //     content: `For a symmetric positive semi-definite matrix $A$ with eigenvalues $\\lambda_1 \\geq \\cdots \\geq \\lambda_n \\geq 0$, the [spectral decomposition](!/linear-algebra/decompositions/spectral) $A = QDQ^T$ is also the SVD: $U = V = Q$ and $\\Sigma = D$. The singular values are the eigenvalues.

// // // // // // // For a general symmetric matrix with some negative eigenvalues, the singular values are $|\\lambda_i|$. The signs are absorbed into $U$ or $V$: if $\\lambda_i < 0$, one of the corresponding singular vectors is negated so that $\\sigma_i = |\\lambda_i| > 0$.

// // // // // // // For non-symmetric or rectangular matrices, the eigendecomposition does not apply (it requires square matrices and may not exist even then), but the SVD always does. The SVD is the correct generalization of the spectral decomposition to the broadest possible class of matrices.`,
// // // // // // //     before: ``,
// // // // // // //     after: ``,
// // // // // // //     link: ``,
// // // // // // //   },
// // // // // // //   obj11: {
// // // // // // //     title: `The Outer Product Form`,
// // // // // // //     content: `The SVD can be written as a sum of rank-one matrices:

// // // // // // // $$A = \\sigma_1 \\mathbf{u}_1\\mathbf{v}_1^T + \\sigma_2 \\mathbf{u}_2\\mathbf{v}_2^T + \\cdots + \\sigma_r \\mathbf{u}_r\\mathbf{v}_r^T$$

// // // // // // // Each term $\\sigma_i \\mathbf{u}_i\\mathbf{v}_i^T$ is an $m \\times n$ rank-one matrix. The singular value $\\sigma_i$ weights its contribution. The terms are ordered by importance: the first term captures the most of $A$ (in the norm sense), the second captures the most of the remainder, and so on.

// // // // // // // Truncating this sum at $k$ terms gives the best rank-$k$ approximation $A_k$. The fraction of the Frobenius norm captured by the first $k$ terms is $(\\sigma_1^2 + \\cdots + \\sigma_k^2)/(\\sigma_1^2 + \\cdots + \\sigma_r^2)$.

// // // // // // // This outer product perspective is the basis of nearly every matrix approximation method: keep the large singular values (signal) and discard the small ones (noise or redundancy).`,
// // // // // // //     before: ``,
// // // // // // //     after: ``,
// // // // // // //     link: ``,
// // // // // // //   },
// // // // // // //   obj12: {
// // // // // // //     title: `What the SVD Reveals`,
// // // // // // //     content: `No other single factorization provides as much structural information about a matrix.

// // // // // // // The [rank](!/linear-algebra/matrix/rank): the number of nonzero singular values.

// // // // // // // The four [fundamental subspaces](!/linear-algebra/vector-spaces/fundamental-spaces): orthonormal bases from the columns of $U$ and $V$.

// // // // // // // The [pseudoinverse](!/linear-algebra/orthogonality/least-squares): $A^+ = V\\Sigma^+ U^T$.

// // // // // // // The best rank-$k$ approximation: truncate at $k$ terms.

// // // // // // // Norms and the condition number: directly from the singular values.

// // // // // // // The [geometry](!/linear-algebra/transformations/geometric) of the linear map: rotation, scaling, rotation.

// // // // // // // For symmetric matrices, the SVD reduces to the [spectral decomposition](!/linear-algebra/decompositions/spectral). For invertible square matrices, the singular values reveal the conditioning that the [determinant](!/linear-algebra/determinants) alone cannot see (a matrix with $\\det = 1$ can still be poorly conditioned). For rectangular matrices, the SVD is the only factorization that applies without modification.

// // // // // // // The SVD is the culmination of the decomposition hierarchy — the most general, most informative, and most broadly applicable factorization in linear algebra.

// // // // // // // The six structural quantities the SVD exposes — rank, the four fundamental subspaces, the pseudoinverse, the best rank-$k$ approximation, norms and condition number, and the geometric decomposition — collect into a single reference card below.`,
// // // // // // //     before: ``,
// // // // // // //     after: ``,
// // // // // // //     link: ``,
// // // // // // //   },
// // // // // // // }



// // // // // // // linear-algebra/decompositions/svd — sectionsContent with formula callouts (v1)
// // // // // // // 10 callouts injected across 6 sections:
// // // // // // //   obj1  (SVD) — direct
// // // // // // //   obj3  (Singular Values) — direct
// // // // // // //   obj3  (SVD Rank) — prose-only insert
// // // // // // //   obj6  (SVD Four Fundamental Subspaces) — prose-only insert
// // // // // // //   obj7  (Moore-Penrose Pseudoinverse) — direct
// // // // // // //   obj8  (Eckart-Young Low-Rank Approximation) — direct, replaced with canonical incl. error bounds
// // // // // // //   obj9  (Operator Norm, Frobenius Norm via Singular Values, Condition Number) — inline-promote x3
// // // // // // //   obj11 (SVD Outer Product Form) — direct
// // // // // // // obj4 worked-example matrix $$ displays preserved.

// // // // // // const sectionsContent = {
// // // // // //   obj1: {
// // // // // //     title: `What the SVD Is`,
// // // // // //     content: `Every $m \\times n$ [matrix](!/linear-algebra/matrix) $A$ — any shape, any [rank](!/linear-algebra/matrix/rank) — factors as

// // // // // // @academic[formula_callout:svd|SVD|$$A = U\\Sigma V^T$$]@
// // // // // // @academic[formulas_link:/linear-algebra/formulas#svd]@

// // // // // // $U$ is $m \\times m$ [orthogonal](!/linear-algebra/matrix/types): its columns are the left singular vectors. $V$ is $n \\times n$ orthogonal: its columns are the right singular vectors. $\\Sigma$ is $m \\times n$ with non-negative entries $\\sigma_1 \\geq \\sigma_2 \\geq \\cdots \\geq \\sigma_{\\min(m,n)} \\geq 0$ on the diagonal and zeros elsewhere. These are the singular values.

// // // // // // The SVD exists without any restriction. The matrix need not be square, need not be [invertible](!/linear-algebra/matrix/inverse), need not be [symmetric](!/linear-algebra/matrix/types), and need not have any special structure. It is the most general factorization in linear algebra.`,
// // // // // //     before: ``,
// // // // // //     after: ``,
// // // // // //     link: ``,
// // // // // //   },
// // // // // //   obj2: {
// // // // // //     title: `The Geometric Interpretation`,
// // // // // //     content: `Every [linear transformation](!/linear-algebra/transformations) $\\mathbf{x} \\mapsto A\\mathbf{x}$ decomposes into three geometric steps:

// // // // // // $V^T$ rotates (or reflects) the input space, aligning the input with the "natural axes" of the transformation — the directions along which $A$ stretches most and least.

// // // // // // $\\Sigma$ scales each axis independently by the corresponding singular value. Axes with $\\sigma_i = 0$ are annihilated — those directions are collapsed to zero.

// // // // // // $U$ rotates (or reflects) the scaled result into the output space.

// // // // // // The singular values measure the stretching in each orthogonal direction. $\\sigma_1$ is the maximum stretching: $\\sigma_1 = \\max_{\\|\\mathbf{x}\\|=1}\\|A\\mathbf{x}\\|$. The smallest nonzero singular value $\\sigma_r$ is the minimum stretching on the [row space](!/linear-algebra/vector-spaces/fundamental-spaces). The ratio $\\sigma_1/\\sigma_r$ is the condition number — it measures how distorted the transformation is.

// // // // // // Even the most complex-looking matrix is geometrically just two rotations sandwiching a coordinate-axis scaling.`,
// // // // // //     before: ``,
// // // // // //     after: ``,
// // // // // //     link: ``,
// // // // // //   },
// // // // // //   obj3: {
// // // // // //     title: `Singular Values`,
// // // // // //     content: `The singular values of $A$ are the square roots of the [eigenvalues](!/linear-algebra/eigen) of $A^TA$ (or equivalently $AA^T$):

// // // // // // @academic[formula_callout:singular_values|Singular Values|$$\\sigma_i = \\sqrt{\\lambda_i(A^TA)} = \\sqrt{\\lambda_i(AA^T)}$$]@
// // // // // // @academic[formulas_link:/linear-algebra/formulas#singular_values]@

// // // // // // Since $A^TA$ is symmetric positive semi-definite, its eigenvalues are all $\\geq 0$, so the singular values are real and non-negative. They are ordered $\\sigma_1 \\geq \\sigma_2 \\geq \\cdots \\geq 0$.

// // // // // // The number of nonzero singular values equals the [rank](!/linear-algebra/matrix/rank) of $A$:

// // // // // // @academic[formula_callout:svd_rank|SVD Rank|$$\\text{rank}(A) = \\#\\{i : \\sigma_i > 0\\}$$]@
// // // // // // @academic[formulas_link:/linear-algebra/formulas#svd_rank]@

// // // // // // This is the most numerically stable method for determining rank: compute the SVD and count singular values above a tolerance.

// // // // // // The largest singular value $\\sigma_1$ is the operator norm $\\|A\\|_2 = \\max_{\\|\\mathbf{x}\\|=1}\\|A\\mathbf{x}\\|$. The [Frobenius norm](!/linear-algebra/matrix/trace) is $\\|A\\|_F = \\sqrt{\\sigma_1^2 + \\sigma_2^2 + \\cdots + \\sigma_r^2}$. The condition number is $\\kappa(A) = \\sigma_1/\\sigma_r$ — a large condition number means the matrix is nearly singular and small perturbations in the input cause large changes in the output.`,
// // // // // //     before: ``,
// // // // // //     after: ``,
// // // // // //     link: ``,
// // // // // //   },
// // // // // //   obj4: {
// // // // // //     title: `Computing the SVD`,
// // // // // //     content: `The standard approach computes the SVD through the eigenvalue decomposition of $A^TA$.

// // // // // // Form $A^TA$ (symmetric, $n \\times n$). Find its eigenvalues $\\lambda_1 \\geq \\cdots \\geq \\lambda_n \\geq 0$ and orthonormal eigenvectors $\\mathbf{v}_1, \\dots, \\mathbf{v}_n$ using the [spectral decomposition](!/linear-algebra/decompositions/spectral). These are the right singular vectors: $V = [\\mathbf{v}_1 \\; \\cdots \\; \\mathbf{v}_n]$.

// // // // // // The singular values are $\\sigma_i = \\sqrt{\\lambda_i}$. The left singular vectors are computed from the right ones: $\\mathbf{u}_i = \\frac{1}{\\sigma_i}A\\mathbf{v}_i$ for each nonzero $\\sigma_i$. If $r < m$, extend $\\{\\mathbf{u}_1, \\dots, \\mathbf{u}_r\\}$ to an [orthonormal basis](!/linear-algebra/orthogonality/orthogonal-sets) for $\\mathbb{R}^m$.

// // // // // // ## Worked Example

// // // // // // For $A = \\begin{pmatrix} 1 & 0 \\\\ 0 & 1 \\\\ 1 & 1 \\end{pmatrix}$: $A^TA = \\begin{pmatrix} 2 & 1 \\\\ 1 & 2 \\end{pmatrix}$, eigenvalues $3$ and $1$, eigenvectors $\\frac{1}{\\sqrt{2}}(1, 1)^T$ and $\\frac{1}{\\sqrt{2}}(1, -1)^T$. Singular values: $\\sqrt{3}$ and $1$. Left singular vectors: $\\mathbf{u}_1 = \\frac{1}{\\sqrt{3}}A\\mathbf{v}_1 = \\frac{1}{\\sqrt{6}}(1, 1, 2)^T$, $\\mathbf{u}_2 = A\\mathbf{v}_2 = \\frac{1}{\\sqrt{2}}(1, -1, 0)^T$. Extend with $\\mathbf{u}_3 = \\frac{1}{\\sqrt{3}}(-1, -1, 1)^T$.`,
// // // // // //     before: ``,
// // // // // //     after: ``,
// // // // // //     link: ``,
// // // // // //   },
// // // // // //   obj5: {
// // // // // //     title: `Compact and Thin Forms`,
// // // // // //     content: `The full SVD has $U$ of size $m \\times m$, $\\Sigma$ of size $m \\times n$, and $V$ of size $n \\times n$. Two economical alternatives retain only the essential information.

// // // // // // The thin SVD keeps only the first $n$ columns of $U$ (call them $U_1$) and the top $n \\times n$ block of $\\Sigma$ (call it $\\Sigma_1$): $A = U_1 \\Sigma_1 V^T$. This drops the columns of $U$ corresponding to the [left null space](!/linear-algebra/vector-spaces/fundamental-spaces).

// // // // // // The compact SVD keeps only the first $r$ columns of $U$ and $V$ (where $r = \\text{rank}(A)$) and the $r \\times r$ diagonal block of nonzero singular values: $A = U_r \\Sigma_r V_r^T$. This is the most economical representation — it captures only the rank-$r$ content of $A$, discarding everything associated with zero singular values.

// // // // // // All three forms represent the same matrix $A$. The compact form uses the least storage; the full form provides bases for all four [fundamental subspaces](!/linear-algebra/vector-spaces/fundamental-spaces). The three variants line up cleanly on factor dimensions and on what each one chooses to keep.`,
// // // // // //     before: ``,
// // // // // //     after: ``,
// // // // // //     link: ``,
// // // // // //   },
// // // // // //   obj6: {
// // // // // //     title: `SVD and the Four Fundamental Subspaces`,
// // // // // //     content: `The SVD simultaneously provides orthonormal [bases](!/linear-algebra/vector-spaces) for all four [fundamental subspaces](!/linear-algebra/vector-spaces/fundamental-spaces) of $A$:

// // // // // // @academic[formula_callout:svd_four_fundamental_subspaces|SVD Four Fundamental Subspaces|$$\\begin{aligned} \\text{Col}(A) &= \\text{Span}\\{\\mathbf{u}_1, \\ldots, \\mathbf{u}_r\\} \\\\ \\text{Null}(A^T) &= \\text{Span}\\{\\mathbf{u}_{r+1}, \\ldots, \\mathbf{u}_m\\} \\\\ \\text{Row}(A) &= \\text{Span}\\{\\mathbf{v}_1, \\ldots, \\mathbf{v}_r\\} \\\\ \\text{Null}(A) &= \\text{Span}\\{\\mathbf{v}_{r+1}, \\ldots, \\mathbf{v}_n\\} \\end{aligned}$$]@
// // // // // // @academic[formulas_link:/linear-algebra/formulas#svd_four_fundamental_subspaces]@

// // // // // // The first $r$ columns of $V$ ($\\mathbf{v}_1, \\dots, \\mathbf{v}_r$) form an orthonormal basis for the row space of $A$.

// // // // // // The last $n - r$ columns of $V$ ($\\mathbf{v}_{r+1}, \\dots, \\mathbf{v}_n$) form an orthonormal basis for the [null space](!/linear-algebra/vector-spaces/fundamental-spaces) of $A$.

// // // // // // The first $r$ columns of $U$ ($\\mathbf{u}_1, \\dots, \\mathbf{u}_r$) form an orthonormal basis for the [column space](!/linear-algebra/vector-spaces/fundamental-spaces) of $A$.

// // // // // // The last $m - r$ columns of $U$ ($\\mathbf{u}_{r+1}, \\dots, \\mathbf{u}_m$) form an orthonormal basis for the left null space of $A$.

// // // // // // No other factorization provides all four bases simultaneously, and no other method guarantees that these bases are orthonormal. The SVD is the complete structural portrait of any matrix.`,
// // // // // //     before: ``,
// // // // // //     after: ``,
// // // // // //     link: ``,
// // // // // //   },
// // // // // //   obj7: {
// // // // // //     title: `The Pseudoinverse`,
// // // // // //     content: `The Moore-Penrose pseudoinverse $A^+$ is computed directly from the SVD:

// // // // // // @academic[formula_callout:moore_penrose_pseudoinverse|Moore-Penrose Pseudoinverse|$$A^+ = V\\Sigma^+ U^T$$]@
// // // // // // @academic[formulas_link:/linear-algebra/formulas#moore_penrose_pseudoinverse]@

// // // // // // The matrix $\\Sigma^+$ is formed by reciprocating each nonzero singular value and transposing the shape: if $\\Sigma$ is $m \\times n$ with diagonal entries $\\sigma_1, \\dots, \\sigma_r, 0, \\dots, 0$, then $\\Sigma^+$ is $n \\times m$ with diagonal entries $1/\\sigma_1, \\dots, 1/\\sigma_r, 0, \\dots, 0$.

// // // // // // The pseudoinverse satisfies four defining properties: $AA^+A = A$, $A^+AA^+ = A^+$, $(AA^+)^T = AA^+$, $(A^+A)^T = A^+A$.

// // // // // // For a full-rank overdetermined system ($m > n$, rank $= n$), $A^+\\mathbf{b}$ gives the [least-squares](!/linear-algebra/orthogonality/least-squares) solution. For a rank-deficient system, $A^+\\mathbf{b}$ gives the minimum-norm least-squares solution — the solution of smallest length among all minimizers of $\\|A\\mathbf{x} - \\mathbf{b}\\|$.`,
// // // // // //     before: ``,
// // // // // //     after: ``,
// // // // // //     link: ``,
// // // // // //   },
// // // // // //   obj8: {
// // // // // //     title: `Low-Rank Approximation`,
// // // // // //     content: `The best rank-$k$ approximation to $A$ in either the operator norm or the Frobenius norm is obtained by truncating the SVD at $k$ terms:

// // // // // // @academic[formula_callout:eckart_young_low_rank_approximation|Eckart-Young Low-Rank Approximation|$$A_k = \\sum_{i=1}^{k} \\sigma_i \\mathbf{u}_i \\mathbf{v}_i^T, \\qquad \\|A - A_k\\|_2 = \\sigma_{k+1}, \\quad \\|A - A_k\\|_F = \\sqrt{\\sum_{i=k+1}^{r}\\sigma_i^2}$$]@
// // // // // // @academic[formulas_link:/linear-algebra/formulas#eckart_young_low_rank_approximation]@

// // // // // // This is the Eckart-Young-Mirsky theorem. Among all matrices of rank at most $k$, $A_k$ is the closest to $A$. The approximation error equals $\\sigma_{k+1}$ (the first discarded singular value) in the operator norm, and $\\sqrt{\\sigma_{k+1}^2 + \\cdots + \\sigma_r^2}$ in the Frobenius norm.

// // // // // // When the singular values decay rapidly — $\\sigma_1 \\gg \\sigma_2 \\gg \\cdots$ — a small number of terms captures most of the matrix. This is the basis of image compression (store $k$ singular value triples instead of $mn$ entries), noise reduction (discard small singular values as noise), latent semantic analysis (retain the top-$k$ "concepts" in a document-term matrix), and dimensionality reduction more broadly.`,
// // // // // //     before: ``,
// // // // // //     after: ``,
// // // // // //     link: ``,
// // // // // //   },
// // // // // //   obj9: {
// // // // // //     title: `SVD and Norms`,
// // // // // //     content: `The singular values provide the complete "size profile" of a matrix.

// // // // // // The operator (spectral) norm is the largest singular value:

// // // // // // @academic[formula_callout:operator_norm|Operator Norm|$$\\|A\\|_2 = \\sigma_1 = \\max_{\\|\\mathbf{x}\\|=1} \\|A\\mathbf{x}\\|$$]@
// // // // // // @academic[formulas_link:/linear-algebra/formulas#operator_norm]@

// // // // // // It measures the maximum factor by which $A$ can stretch a unit vector.

// // // // // // The [Frobenius norm](!/linear-algebra/matrix/trace) is the root-sum-of-squares of all singular values:

// // // // // // @academic[formula_callout:frobenius_norm_via_singular_values|Frobenius Norm via Singular Values|$$\\|A\\|_F = \\sqrt{\\sum_{i=1}^{r} \\sigma_i^2}$$]@
// // // // // // @academic[formulas_link:/linear-algebra/formulas#frobenius_norm_via_singular_values]@

// // // // // // It measures the total "energy" in the matrix.

// // // // // // The condition number quantifies sensitivity to perturbation:

// // // // // // @academic[formula_callout:condition_number|Condition Number|$$\\kappa(A) = \\frac{\\sigma_1}{\\sigma_r}$$]@
// // // // // // @academic[formulas_link:/linear-algebra/formulas#condition_number]@

// // // // // // A matrix with $\\kappa = 10^k$ loses roughly $k$ digits of accuracy in solving $A\\mathbf{x} = \\mathbf{b}$ with floating-point arithmetic. A perfectly conditioned matrix ($\\kappa = 1$) is orthogonal. A singular matrix ($\\sigma_r = 0$) has $\\kappa = \\infty$.

// // // // // // The singular values are the natural measuring tool for matrices, just as eigenvalues are the natural measuring tool for symmetric matrices and [linear operators](!/linear-algebra/transformations). For non-symmetric matrices, singular values (not eigenvalues) govern norms and conditioning.`,
// // // // // //     before: ``,
// // // // // //     after: ``,
// // // // // //     link: ``,
// // // // // //   },
// // // // // //   obj10: {
// // // // // //     title: `SVD and the Spectral Decomposition`,
// // // // // //     content: `For a symmetric positive semi-definite matrix $A$ with eigenvalues $\\lambda_1 \\geq \\cdots \\geq \\lambda_n \\geq 0$, the [spectral decomposition](!/linear-algebra/decompositions/spectral) $A = QDQ^T$ is also the SVD: $U = V = Q$ and $\\Sigma = D$. The singular values are the eigenvalues.

// // // // // // For a general symmetric matrix with some negative eigenvalues, the singular values are $|\\lambda_i|$. The signs are absorbed into $U$ or $V$: if $\\lambda_i < 0$, one of the corresponding singular vectors is negated so that $\\sigma_i = |\\lambda_i| > 0$.

// // // // // // For non-symmetric or rectangular matrices, the eigendecomposition does not apply (it requires square matrices and may not exist even then), but the SVD always does. The SVD is the correct generalization of the spectral decomposition to the broadest possible class of matrices.`,
// // // // // //     before: ``,
// // // // // //     after: ``,
// // // // // //     link: ``,
// // // // // //   },
// // // // // //   obj11: {
// // // // // //     title: `The Outer Product Form`,
// // // // // //     content: `The SVD can be written as a sum of rank-one matrices:

// // // // // // @academic[formula_callout:svd_outer_product_form|SVD Outer Product Form|$$A = \\sum_{i=1}^{r} \\sigma_i \\, \\mathbf{u}_i \\mathbf{v}_i^T$$]@
// // // // // // @academic[formulas_link:/linear-algebra/formulas#svd_outer_product_form]@

// // // // // // Each term $\\sigma_i \\mathbf{u}_i\\mathbf{v}_i^T$ is an $m \\times n$ rank-one matrix. The singular value $\\sigma_i$ weights its contribution. The terms are ordered by importance: the first term captures the most of $A$ (in the norm sense), the second captures the most of the remainder, and so on.

// // // // // // Truncating this sum at $k$ terms gives the best rank-$k$ approximation $A_k$. The fraction of the Frobenius norm captured by the first $k$ terms is $(\\sigma_1^2 + \\cdots + \\sigma_k^2)/(\\sigma_1^2 + \\cdots + \\sigma_r^2)$.

// // // // // // This outer product perspective is the basis of nearly every matrix approximation method: keep the large singular values (signal) and discard the small ones (noise or redundancy).`,
// // // // // //     before: ``,
// // // // // //     after: ``,
// // // // // //     link: ``,
// // // // // //   },
// // // // // //   obj12: {
// // // // // //     title: `What the SVD Reveals`,
// // // // // //     content: `No other single factorization provides as much structural information about a matrix.

// // // // // // The [rank](!/linear-algebra/matrix/rank): the number of nonzero singular values.

// // // // // // The four [fundamental subspaces](!/linear-algebra/vector-spaces/fundamental-spaces): orthonormal bases from the columns of $U$ and $V$.

// // // // // // The [pseudoinverse](!/linear-algebra/orthogonality/least-squares): $A^+ = V\\Sigma^+ U^T$.

// // // // // // The best rank-$k$ approximation: truncate at $k$ terms.

// // // // // // Norms and the condition number: directly from the singular values.

// // // // // // The [geometry](!/linear-algebra/transformations/geometric) of the linear map: rotation, scaling, rotation.

// // // // // // For symmetric matrices, the SVD reduces to the [spectral decomposition](!/linear-algebra/decompositions/spectral). For invertible square matrices, the singular values reveal the conditioning that the [determinant](!/linear-algebra/determinants) alone cannot see (a matrix with $\\det = 1$ can still be poorly conditioned). For rectangular matrices, the SVD is the only factorization that applies without modification.

// // // // // // The SVD is the culmination of the decomposition hierarchy — the most general, most informative, and most broadly applicable factorization in linear algebra.

// // // // // // The six structural quantities the SVD exposes — rank, the four fundamental subspaces, the pseudoinverse, the best rank-$k$ approximation, norms and condition number, and the geometric decomposition — collect into a single reference card below.`,
// // // // // //     before: ``,
// // // // // //     after: ``,
// // // // // //     link: ``,
// // // // // //   },
// // // // // // }

// // // // // // const introContent = {
// // // // // //   title: `The Universal Matrix Factorization`,
// // // // // //   content: `The singular value decomposition factors any matrix of any shape as UΣVᵀ — two orthogonal matrices sandwiching a diagonal matrix of non-negative singular values. It exists for every matrix, reveals the rank, provides orthonormal bases for all four fundamental subspaces, computes the pseudoinverse, yields the best low-rank approximation, and decomposes every linear transformation into a rotation, a scaling, and another rotation. No other single factorization provides this much information.`,
// // // // // // }

// // // // // // const faqQuestions = {
// // // // // //   obj1: {
// // // // // //     question: "What is the singular value decomposition?",
// // // // // //     answer: "The SVD factors any m×n matrix A as A = UΣVᵀ, where U and V are orthogonal matrices of left and right singular vectors, and Σ is diagonal with non-negative singular values. It exists for every matrix regardless of shape, rank, or symmetry.",
// // // // // //     sectionId: "1"
// // // // // //   },
// // // // // //   obj2: {
// // // // // //     question: "What do singular values represent geometrically?",
// // // // // //     answer: "Singular values measure how much a matrix stretches vectors along each orthogonal direction. The largest singular value σ₁ is the maximum stretching factor, and the transformation A decomposes geometrically into a rotation (Vᵀ), a coordinate-axis scaling (Σ), and another rotation (U).",
// // // // // //     sectionId: "2"
// // // // // //   },
// // // // // //   obj3: {
// // // // // //     question: "How does SVD give the best low-rank approximation?",
// // // // // //     answer: "The Eckart-Young-Mirsky theorem states that truncating the SVD at k terms gives the closest rank-k matrix to A in both operator and Frobenius norms. The approximation error equals σₖ₊₁ in operator norm. This is the basis of image compression and noise reduction.",
// // // // // //     sectionId: "8"
// // // // // //   },
// // // // // //   obj4: {
// // // // // //     question: "How is the pseudoinverse computed from the SVD?",
// // // // // //     answer: "The Moore-Penrose pseudoinverse is A⁺ = VΣ⁺Uᵀ, where Σ⁺ reciprocates each nonzero singular value and transposes the shape. For overdetermined systems A⁺b gives the least-squares solution; for rank-deficient systems it gives the minimum-norm least-squares solution.",
// // // // // //     sectionId: "7"
// // // // // //   },
// // // // // //   obj5: {
// // // // // //     question: "How does SVD reveal the four fundamental subspaces?",
// // // // // //     answer: "The first r columns of V span the row space, the remaining n−r columns span the null space. The first r columns of U span the column space, the remaining m−r columns span the left null space. No other factorization provides orthonormal bases for all four subspaces simultaneously.",
// // // // // //     sectionId: "6"
// // // // // //   },
// // // // // //   obj6: {
// // // // // //     question: "What is the condition number of a matrix?",
// // // // // //     answer: "The condition number κ(A) = σ₁/σᵣ is the ratio of the largest to smallest nonzero singular value. It measures sensitivity to perturbation: a matrix with κ = 10ᵏ loses roughly k digits of accuracy in floating-point computation. Orthogonal matrices have κ = 1; singular matrices have κ = ∞.",
// // // // // //     sectionId: "9"
// // // // // //   }
// // // // // // }


// // // // // // const schemas = {
// // // // // //   learningResource: {
// // // // // //     "@context": "https://schema.org",
// // // // // //     "@type": "LearningResource",
// // // // // //     "name": "Singular Value Decomposition (SVD)",
// // // // // //     "description": "Singular value decomposition A = UΣVᵀ: singular values, geometric interpretation, pseudoinverse, low-rank approximation, four fundamental subspaces, norms, and condition number.",
// // // // // //     "url": "https://www.learnmathclass.com/linear-algebra/decompositions/svd",
// // // // // //     "inLanguage": "en-US",
// // // // // //     "learningResourceType": "Explanation",
// // // // // //     "educationalLevel": "College",
// // // // // //     "educationalUse": "Learning",
// // // // // //     "audience": {
// // // // // //       "@type": "EducationalAudience",
// // // // // //       "educationalRole": "student"
// // // // // //     },
// // // // // //     "about": {
// // // // // //       "@type": "Thing",
// // // // // //       "name": "Singular Value Decomposition"
// // // // // //     },
// // // // // //     "teaches": [
// // // // // //       "SVD factorization A = UΣVᵀ for any matrix",
// // // // // //       "Geometric interpretation as rotation-scaling-rotation",
// // // // // //       "Singular values from eigenvalues of AᵀA",
// // // // // //       "Four fundamental subspaces from U and V",
// // // // // //       "Moore-Penrose pseudoinverse via SVD",
// // // // // //       "Best low-rank approximation (Eckart-Young theorem)",
// // // // // //       "Matrix norms and condition number from singular values",
// // // // // //       "Outer product form and relationship to spectral decomposition",
// // // // // //       "Side-by-side comparison of full, thin, and compact SVD forms",
// // // // // //       "Reference card collecting everything the SVD reveals about a matrix"
// // // // // //     ],
// // // // // //     "keywords": keyWords.join(", "),
// // // // // //     "author": {
// // // // // //       "@type": "Organization",
// // // // // //       "name": "Learn Math Class"
// // // // // //     },
// // // // // //     "publisher": {
// // // // // //       "@type": "Organization",
// // // // // //       "name": "Learn Math Class"
// // // // // //     },
// // // // // //     "datePublished": "2024-01-15",
// // // // // //     "dateModified": new Date().toISOString()
// // // // // //   },

// // // // // //   breadcrumb: {
// // // // // //     "@context": "https://schema.org",
// // // // // //     "@type": "BreadcrumbList",
// // // // // //     "itemListElement": [
// // // // // //       {
// // // // // //         "@type": "ListItem",
// // // // // //         "position": 1,
// // // // // //         "name": "Home",
// // // // // //         "item": "https://www.learnmathclass.com"
// // // // // //       },
// // // // // //       {
// // // // // //         "@type": "ListItem",
// // // // // //         "position": 2,
// // // // // //         "name": "Linear Algebra",
// // // // // //         "item": "https://www.learnmathclass.com/linear-algebra"
// // // // // //       },
// // // // // //       {
// // // // // //         "@type": "ListItem",
// // // // // //         "position": 3,
// // // // // //         "name": "Decompositions",
// // // // // //         "item": "https://www.learnmathclass.com/linear-algebra/decompositions"
// // // // // //       },
// // // // // //       {
// // // // // //         "@type": "ListItem",
// // // // // //         "position": 4,
// // // // // //         "name": "Singular Value Decomposition",
// // // // // //         "item": "https://www.learnmathclass.com/linear-algebra/decompositions/svd"
// // // // // //       }
// // // // // //     ]
// // // // // //   },

// // // // // //   faq: {
// // // // // //     "@context": "https://schema.org",
// // // // // //     "@type": "FAQPage",
// // // // // //     "mainEntity": Object.keys(faqQuestions).map(key => ({
// // // // // //       "@type": "Question",
// // // // // //       "name": faqQuestions[key].question,
// // // // // //       "acceptedAnswer": {
// // // // // //         "@type": "Answer",
// // // // // //         "text": faqQuestions[key].answer
// // // // // //       }
// // // // // //     }))
// // // // // //   }
// // // // // // }


// // // // // //   return {
// // // // // //   props:{
// // // // // //     sectionsContent,
// // // // // //     introContent,
// // // // // //     svdForms,
// // // // // //     obj6Table,
// // // // // //     obj9Table,
// // // // // //     svdReadings,
// // // // // //     faqQuestions,
// // // // // //     schemas,
// // // // // //     seoData: {
// // // // // //       title: "SVD: Singular Value Decomposition | Learn Math Class",
// // // // // //       description: "Singular value decomposition A = UΣVᵀ: singular values, geometric interpretation, pseudoinverse, low-rank approximation, four fundamental subspaces, norms, and condition number.",
// // // // // //       keywords: keyWords.join(", "),
// // // // // //       url: "/linear-algebra/decompositions/svd",
// // // // // //       name: "Singular Value Decomposition (SVD)"
// // // // // //     },
// // // // // //   }
// // // // // // }
// // // // // //    }

// // // // // // // export default function PageTemplate({seoData,sectionsContent , introContent}) {
// // // // // // export default function SVDPage({
// // // // // //   seoData,
// // // // // //   sectionsContent,
// // // // // //   introContent,
// // // // // //   svdForms,
// // // // // //   obj6Table,
// // // // // //   obj9Table,
// // // // // //   svdReadings,
// // // // // //   faqQuestions,
// // // // // //   schemas,
// // // // // // }) {

// // // // // //   const tableWrapStyle = { margin: '20px auto', width: '100%' }

// // // // // //   const genericSections=[
// // // // // //     {
// // // // // //         id:'1',
// // // // // //         title:sectionsContent.obj1.title,
// // // // // //         link:sectionsContent.obj1.link,
// // // // // //         content:[
// // // // // //           sectionsContent.obj1.content,
// // // // // //         ]
// // // // // //     },
// // // // // //     {
// // // // // //         id:'2',
// // // // // //         title:sectionsContent.obj2.title,
// // // // // //         link:sectionsContent.obj2.link,
// // // // // //         content:[
// // // // // //           sectionsContent.obj2.content,
// // // // // //         ]
// // // // // //     },
// // // // // //     {
// // // // // //         id:'3',
// // // // // //         title:sectionsContent.obj3.title,
// // // // // //         link:sectionsContent.obj3.link,
// // // // // //         content:[
// // // // // //           sectionsContent.obj3.content,
// // // // // //         ]
// // // // // //     },
// // // // // //     {
// // // // // //         id:'4',
// // // // // //         title:sectionsContent.obj4.title,
// // // // // //         link:sectionsContent.obj4.link,
// // // // // //         content:[
// // // // // //           sectionsContent.obj4.content,
// // // // // //         ]
// // // // // //     },
// // // // // //     {
// // // // // //         id:'5',
// // // // // //         title:sectionsContent.obj5.title,
// // // // // //         link:sectionsContent.obj5.link,
// // // // // //         content:[
// // // // // //           sectionsContent.obj5.content,
// // // // // //           <DiagramFrame
// // // // // //             key={'obj5-diagram'}
// // // // // //             id="svd-forms"
// // // // // //             title="Three forms, one factorization"
// // // // // //             source="/linear-algebra/decompositions/svd"
// // // // // //           >
// // // // // //             <ObjectTypeProfile data={svdForms} theme="navy" variant="stack" />
// // // // // //           </DiagramFrame>,
// // // // // //           `The distinction to keep hold of is that none of these is an approximation. Each drops columns that multiply against zero singular values, so the product is unchanged and $A$ is reconstructed exactly in all three. What is lost is not accuracy but the orthogonality of $U$ as a square matrix — $U_r^{\\mathsf{T}}U_r = I_r$ still holds, but $U_rU_r^{\\mathsf{T}}$ no longer does, and any argument relying on the left null space needs the full form.`,
// // // // // //         ]
// // // // // //     },
// // // // // //     {
// // // // // //         id:'6',
// // // // // //         title:sectionsContent.obj6.title,
// // // // // //         link:sectionsContent.obj6.link,
// // // // // //         content:[
// // // // // //           sectionsContent.obj6.content,
// // // // // //           <div key={'obj6-table'} style={tableWrapStyle}
// // // // // //                dangerouslySetInnerHTML={{ __html: obj6Table }} />,
// // // // // //         ]
// // // // // //     },
// // // // // //     {
// // // // // //         id:'7',
// // // // // //         title:sectionsContent.obj7.title,
// // // // // //         link:sectionsContent.obj7.link,
// // // // // //         content:[
// // // // // //           sectionsContent.obj7.content,
// // // // // //         ]
// // // // // //     },
// // // // // //     {
// // // // // //         id:'8',
// // // // // //         title:sectionsContent.obj8.title,
// // // // // //         link:sectionsContent.obj8.link,
// // // // // //         content:[
// // // // // //           sectionsContent.obj8.content,
// // // // // //         ]
// // // // // //     },
// // // // // //     {
// // // // // //         id:'9',
// // // // // //         title:sectionsContent.obj9.title,
// // // // // //         link:sectionsContent.obj9.link,
// // // // // //         content:[
// // // // // //           sectionsContent.obj9.content,
// // // // // //           <div key={'obj9-table'} style={tableWrapStyle}
// // // // // //                dangerouslySetInnerHTML={{ __html: obj9Table }} />,
// // // // // //         ]
// // // // // //     },
// // // // // //     {
// // // // // //         id:'10',
// // // // // //         title:sectionsContent.obj10.title,
// // // // // //         link:sectionsContent.obj10.link,
// // // // // //         content:[
// // // // // //           sectionsContent.obj10.content,
// // // // // //         ]
// // // // // //     },
// // // // // //     {
// // // // // //         id:'11',
// // // // // //         title:sectionsContent.obj11.title,
// // // // // //         link:sectionsContent.obj11.link,
// // // // // //         content:[
// // // // // //           sectionsContent.obj11.content,
// // // // // //         ]
// // // // // //     },
// // // // // //     {
// // // // // //         id:'12',
// // // // // //         title:sectionsContent.obj12.title,
// // // // // //         link:sectionsContent.obj12.link,
// // // // // //         content:[
// // // // // //           sectionsContent.obj12.content,
// // // // // //           `Grouping these by which factor supplies the answer is what makes them one computation rather than seven. Three come from the singular values alone, two from the columns of the orthogonal factors, and two require reading all three factors together. Nothing below needs the matrix again once the factorization is in hand.`,
// // // // // //           <DiagramFrame
// // // // // //             key={'obj12-diagram'}
// // // // // //             id="svd-readings"
// // // // // //             title="What the SVD reveals"
// // // // // //             source="/linear-algebra/decompositions/svd"
// // // // // //           >
// // // // // //             <IdentitySheet data={svdReadings} theme="navy" variant="ledger" />
// // // // // //           </DiagramFrame>,
// // // // // //           `Two of these deserve emphasis because nothing else supplies them. The **condition number** measures how badly a system amplifies error, and it is invisible to the determinant — a matrix can have determinant one and still be nearly singular in some direction. **Low-rank approximation** is optimal rather than merely reasonable: truncating the sum at $k$ terms gives the closest rank-$k$ matrix in every unitarily invariant norm, with error exactly $\\sigma_{k+1}$.`,
// // // // // //           `The reason all of this comes from one factorization is that the SVD asks nothing of the matrix. It need not be square, invertible, symmetric or full rank — the factorization exists regardless, which is what separates it from every other decomposition in this section and why it is the one to reach for when the matrix is unknown.`,
// // // // // //         ]
// // // // // //     },
// // // // // //     // {
// // // // // //     //     id:'13',
// // // // // //     //     title:sectionsContent.obj13.title,
// // // // // //     //     link:sectionsContent.obj13.link,
// // // // // //     //     content:[
// // // // // //     //       sectionsContent.obj13.content,
// // // // // //     //     ]
// // // // // //     // },
// // // // // //     // {
// // // // // //     //     id:'14',
// // // // // //     //     title:sectionsContent.obj14.title,
// // // // // //     //     link:sectionsContent.obj14.link,
// // // // // //     //     content:[
// // // // // //     //       sectionsContent.obj14.content,
// // // // // //     //     ]
// // // // // //     // },
// // // // // //     // {
// // // // // //     //     id:'15',
// // // // // //     //     title:sectionsContent.obj15.title,
// // // // // //     //     link:sectionsContent.obj15.link,
// // // // // //     //     content:[
// // // // // //     //       sectionsContent.obj15.content,
// // // // // //     //     ]
// // // // // //     // },
// // // // // //     // {
// // // // // //     //     id:'1',
// // // // // //     //     title:sectionsContent.obj1.title,
// // // // // //     //     link:sectionsContent.obj1.link,
// // // // // //     //     content:[
// // // // // //     //       sectionsContent.obj1.content,
// // // // // //     //     ]
// // // // // //     // },
// // // // // //     // {
// // // // // //     //     id:'1',
// // // // // //     //     title:sectionsContent.obj1.title,
// // // // // //     //     link:sectionsContent.obj1.link,
// // // // // //     //     content:[
// // // // // //     //       sectionsContent.obj1.content,
// // // // // //     //     ]
// // // // // //     // },
// // // // // //     // {
// // // // // //     //     id:'1',
// // // // // //     //     title:sectionsContent.obj1.title,
// // // // // //     //     link:sectionsContent.obj1.link,
// // // // // //     //     content:[
// // // // // //     //       sectionsContent.obj1.content,
// // // // // //     //     ]
// // // // // //     // },

// // // // // // ]

// // // // // //   return (
// // // // // //    <>
// // // // // //    {/* <Head>
// // // // // //   <title>{seoData.title}</title>
// // // // // //   <meta name="description" content={seoData.description} />
// // // // // //   <meta name="keywords" content={seoData.keywords} />
// // // // // //   <link rel="canonical" href={`https://www.learnmathclass.com${seoData.url}`} />

// // // // // //   <meta property="og:title" content={seoData.title} />
// // // // // //   <meta property="og:description" content={seoData.description} />
// // // // // //   <meta property="og:url" content={`https://www.learnmathclass.com${seoData.url}`} />
// // // // // //   <meta property="og:type" content="article" />
// // // // // //   <meta property="og:site_name" content="Learn Math Class" />

// // // // // //   <meta name="twitter:card" content="summary" />
// // // // // //   <meta name="twitter:title" content={seoData.title} />
// // // // // //   <meta name="twitter:description" content={seoData.description} />

// // // // // //   <meta name="robots" content="index, follow" />

// // // // // //   <script
// // // // // //     type="application/ld+json"
// // // // // //     dangerouslySetInnerHTML={{
// // // // // //       __html: JSON.stringify({
// // // // // //         "@context": "https://schema.org",
// // // // // //         "@type": "WebPage",
// // // // // //         "name": seoData.name,
// // // // // //         "description": seoData.description,
// // // // // //         "keywords": seoData.keywords,
// // // // // //         "url": `https://www.learnmathclass.com${seoData.url}`,
// // // // // //         "dateModified": new Date().toISOString(),
// // // // // //         "inLanguage": "en-US",
// // // // // //         "mainEntity": {
// // // // // //           "@type": "Article",
// // // // // //           "name": seoData.name,
// // // // // //           "dateModified": new Date().toISOString(),
// // // // // //           "author": {
// // // // // //             "@type": "Organization",
// // // // // //             "name": "Learn Math Class"
// // // // // //           }
// // // // // //         }
// // // // // //       })
// // // // // //     }}
// // // // // //   />
// // // // // // </Head> */}

// // // // // // <Head>
// // // // // //   <title>{seoData.title}</title>
// // // // // //   <meta name="description" content={seoData.description} />
// // // // // //   <meta name="keywords" content={seoData.keywords} />
// // // // // //   <link rel="canonical" href={`https://www.learnmathclass.com${seoData.url}`} />

// // // // // //   <meta property="og:title" content={seoData.title} />
// // // // // //   <meta property="og:description" content={seoData.description} />
// // // // // //   <meta property="og:url" content={`https://www.learnmathclass.com${seoData.url}`} />
// // // // // //   <meta property="og:type" content="article" />
// // // // // //   <meta property="og:site_name" content="Learn Math Class" />

// // // // // //   <meta name="twitter:card" content="summary" />
// // // // // //   <meta name="twitter:title" content={seoData.title} />
// // // // // //   <meta name="twitter:description" content={seoData.description} />

// // // // // //   <meta name="robots" content="index, follow" />

// // // // // //   <script
// // // // // //     type="application/ld+json"
// // // // // //     dangerouslySetInnerHTML={{
// // // // // //       __html: JSON.stringify(schemas.learningResource)
// // // // // //     }}
// // // // // //   />

// // // // // //   <script
// // // // // //     type="application/ld+json"
// // // // // //     dangerouslySetInnerHTML={{
// // // // // //       __html: JSON.stringify(schemas.breadcrumb)
// // // // // //     }}
// // // // // //   />

// // // // // //   <script
// // // // // //     type="application/ld+json"
// // // // // //     dangerouslySetInnerHTML={{
// // // // // //       __html: JSON.stringify(schemas.faq)
// // // // // //     }}
// // // // // //   />
// // // // // // </Head>
// // // // // //    {/* <GenericNavbar/> */}
// // // // // //    <br/>
// // // // // //    <br/>
// // // // // //    <br/>
// // // // // //    <br/>
// // // // // //     <OperaSidebar
// // // // // //            side='right'
// // // // // //            // topOffset='65px'
// // // // // //            sidebarWidth='45px'
// // // // // //            panelWidth='200px'
// // // // // //            iconColor='white'
// // // // // //            panelBackgroundColor='#f2f2f2'
// // // // // //          />
// // // // // //    <Breadcrumb/>
// // // // // //    <br/>
// // // // // //    <br/>
// // // // // //    <h1 className='title' style={{marginTop:'0px',marginBottom:'10px'}}>SVD Decompositions</h1>
// // // // // //    <br/>
// // // // // //    <br/>
// // // // // //    <SectionTableOfContents sections={genericSections}
// // // // // //     showSecondaryNav={true}
// // // // // //          secondaryNavMode="siblings"  // or "children"
// // // // // //          secondaryNavTitle="More in this Section"

// // // // // //    />
// // // // // //    <br/>
// // // // // //    <br/>
// // // // // //    <br/>
// // // // // //     <IntroSection
// // // // // //           id={introContent.id}
// // // // // //           title={introContent.title}
// // // // // //           content={introContent.content}
// // // // // //            backgroundColor='#f9fafb'
// // // // // //           //  "#f2f2f2"
// // // // // //           textColor="#06357a"
// // // // // //         />
// // // // // //    <br/>
// // // // // //    <br/>
// // // // // //    <Sections sections={genericSections}/>
// // // // // //    <br/>
// // // // // //    <br/>
// // // // // //    <br/>
// // // // // //    {/* <ScrollUpButton/> */}
// // // // // //    </>
// // // // // //   )
// // // // // // }


// // // // // // intro-methodology: v1 | template D (comparison) applied to obj1
// // // // // // tables-optimized: v4 | 2026-05-18 | 4 tables (obj5 comparison, obj6 aggregation, obj9 aggregation, obj12 summary capstone)
// // // // // // formulas-injected: v1 | 2026-06-16 | 10 callouts across obj1, obj3, obj6, obj7, obj8, obj9, obj11
// // // // // import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
// // // // // import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
// // // // // import IntroSection from '@/app/components/page-components/section/IntroContentSection'
// // // // // import Sections from '@/app/components/page-components/section/Sections'
// // // // // import SectionTableOfContents from '@/app/components/page-components/section/SectionTableofContents'
// // // // // import React from 'react'
// // // // // import '../../../pages.css'
// // // // // import Head from 'next/head'
// // // // // import KeyTermsCard from '@/app/components/page-components/KeyTermsCard'
// // // // // import { tableHeaders } from '@/app/styles/theme'
// // // // // import IdentitySheet from '@/app/components/infographics/linear-algebra/IdentitySheet'
// // // // // import ObjectTypeProfile from '@/app/components/infographics/linear-algebra/ObjectTypeProfile'
// // // // // import DiagramFrame from '@/app/components/infographics/DiagramsFrame'


// // // // // export async function getStaticProps(){
// // // // // const keyWords = [
// // // // //   "singular value decomposition",
// // // // //   "SVD",
// // // // //   "singular values",
// // // // //   "left right singular vectors",
// // // // //   "low-rank approximation",
// // // // //   "pseudoinverse SVD",
// // // // //   "Moore-Penrose pseudoinverse",
// // // // //   "Eckart-Young theorem",
// // // // //   "matrix rank SVD",
// // // // //   "condition number singular values",
// // // // //   "four fundamental subspaces SVD",
// // // // //   "compact SVD thin SVD",
// // // // //   "SVD image compression",
// // // // //   "operator norm Frobenius norm",
// // // // //   "UΣVᵀ factorization"
// // // // // ]

// // // // //   const linkStyle = 'color: inherit; text-decoration: underline;'

// // // // //   // ---------- TABLES ----------

// // // // //   // obj5 — three storage forms of one factorization
// // // // //   const svdForms = {
// // // // //     kicker: 'Decompositions \u00B7 SVD',
// // // // //     title: 'Three forms, one factorization',
// // // // //     tallyLabel: 'forms',
// // // // //     intro: 'All three reconstruct $A$ exactly. They differ in how much of $U$ and $\\Sigma$ is kept \u2014 and what is dropped is precisely the part that multiplies against zero singular values.',
// // // // //     footnote: 'Nothing is approximated anywhere in this table. The full form carries orthonormal bases for all four [fundamental subspaces](!/linear-algebra/vector-spaces/fundamental-spaces), which is why it is the one to state theorems with; the compact form carries only what contributes to $A$, which is why it is the one to store. Approximation begins only when the compact form is truncated below rank $r$.',
// // // // //     slots: [
// // // // //       { key: 'shapes',  label: 'shapes' },
// // // // //       { key: 'stored',  label: 'what is kept' },
// // // // //       { key: 'dropped', label: 'what is dropped' },
// // // // //       { key: 'usedFor', label: 'used for' },
// // // // //     ],
// // // // //     groups: [
// // // // //       {
// // // // //         heading: 'Everything kept',
// // // // //         types: [
// // // // //           {
// // // // //             name: 'Full SVD',
// // // // //             anchor: '#1',
// // // // //             shape: 'dense',
// // // // //             condition: '$U$ and $V$ both square and orthogonal',
// // // // //             properties: {
// // // // //               shapes: '$U: m \\times m$, $\\Sigma: m \\times n$, $V: n \\times n$',
// // // // //               stored: 'all of $U$, $V$, and a rectangular $\\Sigma$',
// // // // //               dropped: 'nothing',
// // // // //               usedFor: 'theory, the four subspaces',
// // // // //             },
// // // // //             note: 'The only form where $U$ and $V$ are genuinely orthogonal matrices, so $UU^{\\mathsf{T}} = I$ as well as $U^{\\mathsf{T}}U = I$. That is what makes it the form to state results with \u2014 the last $m - r$ columns of $U$ span the left null space and would otherwise be gone.',
// // // // //           },
// // // // //         ],
// // // // //       },
// // // // //       {
// // // // //         heading: 'Trimmed to what multiplies',
// // // // //         types: [
// // // // //           {
// // // // //             name: 'Thin SVD',
// // // // //             anchor: '#5',
// // // // //             shape: 'lower',
// // // // //             condition: '$m > n$ \u2014 keep $n$ columns of $U$',
// // // // //             properties: {
// // // // //               shapes: '$U_n: m \\times n$, $\\Sigma_n: n \\times n$, $V: n \\times n$',
// // // // //               stored: 'the first $n$ columns of $U$',
// // // // //               dropped: 'the last $m - n$ columns of $U$',
// // // // //               usedFor: 'least squares on tall matrices',
// // // // //             },
// // // // //             note: 'The dropped columns multiply rows of $\\Sigma$ that are entirely zero, so removing them changes nothing about the product. Note $U_n$ is no longer square: $U_n^{\\mathsf{T}}U_n = I_n$ still holds, but $U_nU_n^{\\mathsf{T}}$ does not.',
// // // // //           },
// // // // //           {
// // // // //             name: 'Compact SVD',
// // // // //             anchor: '#5',
// // // // //             shape: 'block',
// // // // //             condition: 'keep only the $r$ nonzero singular values',
// // // // //             properties: {
// // // // //               shapes: '$U_r: m \\times r$, $\\Sigma_r: r \\times r$, $V_r: n \\times r$',
// // // // //               stored: 'the rank-$r$ content only',
// // // // //               dropped: 'every zero singular value and its vectors',
// // // // //               usedFor: 'storage, rank-deficient matrices',
// // // // //             },
// // // // //             note: 'The most economical exact form: $\\Sigma_r$ is square with a strictly positive diagonal, so it is invertible \u2014 which is what makes the [pseudoinverse](#7) computable as $V_r\\Sigma_r^{-1}U_r^{\\mathsf{T}}$.',
// // // // //           },
// // // // //         ],
// // // // //       },
// // // // //     ],
// // // // //   }

// // // // //   // obj6 — aggregation: four fundamental subspaces from the SVD
// // // // //   const obj6Table = `
// // // // // <table class="styled-table" style="border-collapse: collapse; width: 75%;margin:auto; background: white; box-shadow: 0 2px 10px rgba(0,0,0,0.1); border-radius: 8px; overflow: hidden; font-family: Arial, sans-serif;">
// // // // //   <thead>
// // // // //     <tr>
// // // // //       <th style="${tableHeaders.aggregation}">Fundamental subspace</th>
// // // // //       <th style="${tableHeaders.aggregation} text-align: center;">Basis from</th>
// // // // //       <th style="${tableHeaders.aggregation} text-align: center;">Column indices</th>
// // // // //       <th style="${tableHeaders.aggregation} text-align: center;">Dimension</th>
// // // // //     </tr>
// // // // //   </thead>
// // // // //   <tbody>
// // // // //     <tr style="background: #f8f9fa;">
// // // // //       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Row space of A</td>
// // // // //       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e; text-align: center;">V</td>
// // // // //       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e; text-align: center;">1, ..., r</td>
// // // // //       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e; text-align: center;">r</td>
// // // // //     </tr>
// // // // //     <tr>
// // // // //       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Null space of A</td>
// // // // //       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e; text-align: center;">V</td>
// // // // //       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e; text-align: center;">r+1, ..., n</td>
// // // // //       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e; text-align: center;">n − r</td>
// // // // //     </tr>
// // // // //     <tr style="background: #f8f9fa;">
// // // // //       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Column space of A</td>
// // // // //       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e; text-align: center;">U</td>
// // // // //       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e; text-align: center;">1, ..., r</td>
// // // // //       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e; text-align: center;">r</td>
// // // // //     </tr>
// // // // //     <tr>
// // // // //       <td style="padding: 12px 15px; font-weight: bold; color: #06357a;">Left null space of A</td>
// // // // //       <td style="padding: 12px 15px; color: #34495e; text-align: center;">U</td>
// // // // //       <td style="padding: 12px 15px; color: #34495e; text-align: center;">r+1, ..., m</td>
// // // // //       <td style="padding: 12px 15px; color: #34495e; text-align: center;">m − r</td>
// // // // //     </tr>
// // // // //   </tbody>
// // // // // </table>
// // // // // `

// // // // //   // obj9 — aggregation: norms and condition number from singular values
// // // // //   const obj9Table = `
// // // // // <table class="styled-table" style="border-collapse: collapse; width: 75%;margin:auto; background: white; box-shadow: 0 2px 10px rgba(0,0,0,0.1); border-radius: 8px; overflow: hidden; font-family: Arial, sans-serif;">
// // // // //   <thead>
// // // // //     <tr>
// // // // //       <th style="${tableHeaders.aggregation}">Quantity</th>
// // // // //       <th style="${tableHeaders.aggregation}">Formula via singular values</th>
// // // // //       <th style="${tableHeaders.aggregation}">Interpretation</th>
// // // // //     </tr>
// // // // //   </thead>
// // // // //   <tbody>
// // // // //     <tr style="background: #f8f9fa;">
// // // // //       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Operator (spectral) norm ‖A‖<sub>2</sub></td>
// // // // //       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">σ<sub>1</sub></td>
// // // // //       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">maximum stretching factor on the unit ball</td>
// // // // //     </tr>
// // // // //     <tr>
// // // // //       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;"><a href="/linear-algebra/matrix/trace" style="${linkStyle}">Frobenius norm</a> ‖A‖<sub>F</sub></td>
// // // // //       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">√(σ<sub>1</sub><sup>2</sup> + σ<sub>2</sub><sup>2</sup> + ··· + σ<sub>r</sub><sup>2</sup>)</td>
// // // // //       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">total size of the matrix — root-sum-of-squares of singular values</td>
// // // // //     </tr>
// // // // //     <tr style="background: #f8f9fa;">
// // // // //       <td style="padding: 12px 15px; font-weight: bold; color: #06357a;">Condition number κ(A)</td>
// // // // //       <td style="padding: 12px 15px; color: #34495e;">σ<sub>1</sub> / σ<sub>r</sub></td>
// // // // //       <td style="padding: 12px 15px; color: #34495e;">sensitivity to perturbation: κ = 10<sup>k</sup> loses about k digits</td>
// // // // //     </tr>
// // // // //   </tbody>
// // // // // </table>
// // // // // `

// // // // //   // obj12 — summary capstone: what one factorization yields, sorted by which factor carries it
// // // // //   const svdReadings = {
// // // // //     kicker: 'Decompositions \u00B7 SVD',
// // // // //     title: 'What the SVD reveals',
// // // // //     tallyLabel: 'readings',
// // // // //     intro: 'Every entry comes from the same three factors. What changes is which one is being read \u2014 the singular values for size, the columns of $U$ and $V$ for structure, and all three together for geometry.',
// // // // //     footnote: 'No other factorization answers this many questions, and none exists for every matrix. That combination is why the SVD is the one to reach for when the matrix is rectangular, rank-deficient, or simply unknown \u2014 the conditions the [other decompositions](!/linear-algebra/decompositions) require are exactly the ones it does without.',
// // // // //     groups: [
// // // // //       {
// // // // //         heading: 'From the singular values',
// // // // //         identities: [
// // // // //           {
// // // // //             name: 'Rank',
// // // // //             anchor: '#3',
// // // // //             formula: '$r = $ count of $\\sigma_i > 0$',
// // // // //             condition: 'strictly positive only',
// // // // //             note: 'The most numerically reliable rank there is. Row reduction decides rank by comparing entries against zero, which floating point makes arbitrary; the singular values instead show a gap, and where that gap falls is a judgement the numbers themselves support.',
// // // // //           },
// // // // //           {
// // // // //             name: 'Norms',
// // // // //             anchor: '#9',
// // // // //             formula: '$\\|A\\|_2 = \\sigma_1, \\quad \\|A\\|_F^2 = \\textstyle\\sum \\sigma_i^2$',
// // // // //             condition: 'read straight off the list',
// // // // //             note: 'The largest singular value is the most any unit vector is stretched. The Frobenius norm is the whole list in quadrature \u2014 so both common matrix norms are functions of the same numbers.',
// // // // //           },
// // // // //           {
// // // // //             name: 'Condition number',
// // // // //             anchor: '#9',
// // // // //             formula: '$\\kappa(A) = \\sigma_1 / \\sigma_r$',
// // // // //             condition: '$A$ of full rank',
// // // // //             strict: true,
// // // // //             note: 'The ratio of most to least stretched. A large $\\kappa$ means the matrix is nearly singular in some direction, and small changes to $\\mathbf{b}$ produce large changes to the solution \u2014 which no determinant reports, since a matrix can have $\\det = 1$ and be badly conditioned.',
// // // // //           },
// // // // //         ],
// // // // //       },
// // // // //       {
// // // // //         heading: 'From the columns of U and V',
// // // // //         identities: [
// // // // //           {
// // // // //             name: 'The four subspaces',
// // // // //             anchor: '#6',
// // // // //             formula: 'partition $U$ and $V$ at index $r$',
// // // // //             condition: 'orthonormal bases, all four at once',
// // // // //             key: true,
// // // // //             note: 'First $r$ columns of $V$ span the row space and the rest the null space; first $r$ of $U$ span the column space and the rest the left null space. The only method giving [all four](!/linear-algebra/vector-spaces/fundamental-spaces) orthonormally from one computation.',
// // // // //           },
// // // // //           {
// // // // //             name: 'Pseudoinverse',
// // // // //             anchor: '#7',
// // // // //             formula: '$A^{+} = V\\Sigma^{+}U^{\\mathsf{T}}$',
// // // // //             condition: 'reciprocate the nonzero $\\sigma$, leave zeros alone',
// // // // //             note: 'Defined for every matrix, square or not, invertible or not. When $A$ is invertible it coincides with $A^{-1}$; otherwise it returns the least-squares solution of minimum norm, which is the sense in which it is the closest thing to an [inverse](!/linear-algebra/matrix/inverse).',
// // // // //           },
// // // // //         ],
// // // // //       },
// // // // //       {
// // // // //         heading: 'From all three factors',
// // // // //         identities: [
// // // // //           {
// // // // //             name: 'Low-rank approximation',
// // // // //             anchor: '#8',
// // // // //             formula: '$A_k = \\sum_{i=1}^{k} \\sigma_i \\mathbf{u}_i \\mathbf{v}_i^{\\mathsf{T}}$',
// // // // //             condition: 'optimal for every unitarily invariant norm',
// // // // //             key: true,
// // // // //             note: 'Truncating the outer-product sum gives the best rank-$k$ approximation there is \u2014 the Eckart\u2013Young theorem, and it is why the SVD underlies image compression and principal component analysis. The error is exactly $\\sigma_{k+1}$, so the singular values say in advance how much is lost.',
// // // // //           },
// // // // //           {
// // // // //             name: 'Geometric action',
// // // // //             anchor: '#2',
// // // // //             formula: '$A = U\\Sigma V^{\\mathsf{T}}$ \u2014 rotate, stretch, rotate',
// // // // //             condition: 'every matrix, no hypotheses',
// // // // //             note: 'Read right to left: $V^{\\mathsf{T}}$ rotates, $\\Sigma$ scales along axes, $U$ rotates again. Every linear map is those three steps, which is the claim that makes the factorization worth having as geometry rather than only as algebra.',
// // // // //           },
// // // // //         ],
// // // // //       },
// // // // //     ],
// // // // //   }

// // // // //   // ---------- SECTIONS ----------

// // // // // const sectionsContent = {
// // // // // //   obj1: {
// // // // // //     title: `Why One Basis Is Not Enough`,
// // // // // //     content: `Diagonalization already does this job, and does it well. Writing $A = PDP^{-1}$ turns a matrix into a pure scaling: the columns of $P$ are directions the matrix merely stretches, $D$ holds the stretching factors, and every hard question about $A$ becomes an easy question about a diagonal matrix. Powers, inverses, and long-run behaviour all fall out at once. A second factorization for the same purpose therefore owes an explanation, and the explanation cannot be that diagonalization gives wrong answers. It does not.

// // // // // // **What it demands is one basis doing two jobs.** In $A = PDP^{-1}$ the same matrix $P$ appears on both sides — its columns are used to read the input and again to write the output. The factorization insists that input and output be described in identical terms, and that requirement is far stronger than it looks. Most matrices cannot meet it.

// // // // // // Two matrices show the two ways it fails. A $3 \\times 2$ matrix takes vectors from $\\mathbb{R}^2$ and returns vectors in $\\mathbb{R}^3$, so no single basis can serve both ends; the question of an [eigenvector](!/linear-algebra/eigen) cannot even be posed, since $A\\mathbf{v} = \\lambda\\mathbf{v}$ compares vectors living in different spaces. The matrix $\\begin{pmatrix} 1 & 1 \\\\ 0 & 1 \\end{pmatrix}$ is square and perfectly ordinary, and it fails for a different reason: every eigenvector is a multiple of $(1, 0)$, so there is no basis of eigenvectors to build $P$ from. Rectangular shape rules diagonalization out in principle, defective structure rules it out in practice, and between them they account for most matrices anyone meets.

// // // // // // **Drop the demand that the two bases be the same and both obstructions disappear.** Allow one orthonormal basis for the input space and a different one for the output space, and ask only that the matrix carry the first to the second with a scaling in between. Nothing in that requires the two spaces to have equal dimension, and nothing requires the matrix to fix any direction at all.

// // // // // // The [singular value decomposition](!/linear-algebra/definitions#SVD_ANCHOR) is that arrangement written down — an orthonormal input basis in $V$, an orthonormal output basis in $U$, and the scaling factors between them along the diagonal of $\\Sigma$.

// // // // // // @academic[formula_callout:svd|SVD|$$A = U\\Sigma V^T$$]@
// // // // // // @academic[formulas_link:/linear-algebra/formulas#svd]@

// // // // // // This is a factorization, not an approximation: the three matrices multiply back to $A$ exactly, with no error term and no conditions attached. $U$ is $m \\times m$ [orthogonal](!/linear-algebra/matrix/types) and its columns are the left singular vectors. $V$ is $n \\times n$ orthogonal and its columns are the right singular vectors. $\\Sigma$ is $m \\times n$, zero everywhere off the diagonal, carrying $\\sigma_1 \\geq \\sigma_2 \\geq \\cdots \\geq 0$ along it. Those are the singular values.

// // // // // // **Several things arrive without being asked for.** Both bases come out orthonormal rather than merely independent, so $U^{-1} = U^T$ and $V^{-1} = V^T$ and neither factor ever has to be inverted. The scaling factors come out real and non-negative, because they measure lengths, and can therefore be ordered largest to smallest — which no set of [eigenvalues](!/linear-algebra/eigen) can be, since eigenvalues may be complex. And the factorization exists for every matrix without exception: any shape, any [rank](!/linear-algebra/matrix/rank), [symmetric](!/linear-algebra/matrix/types) or not, [invertible](!/linear-algebra/matrix/inverse) or not.

// // // // // // **All of it follows from the single decision to stop insisting on one basis, and that decision has a price.** Because $U$ and $V$ are different, they do not cancel when the matrix is applied twice: $A^2 = U\\Sigma V^TU\\Sigma V^T$, and the inner $V^TU$ simplifies to nothing. The SVD is therefore no help with powers, with iteration, or with any question about what a matrix does when applied repeatedly — which is precisely what eigenvalues answer. The two factorizations are not rivals but answers to different questions: one about invariant directions, the other about stretching. What the three factors do to a vector geometrically is the subject of the next section.`,
// // // // // //     before: ``,
// // // // // //     after: ``,
// // // // // //     link: ``,
// // // // // //   },
  
// // // // // // obj1: {
// // // // // //     title: `What the SVD Is`,
// // // // // //     content: `Diagonalization already does this job, and does it well. Writing $A = PDP^{-1}$ turns a matrix into a pure scaling: the columns of $P$ are directions the matrix merely stretches, $D$ holds the stretching factors, and every hard question about $A$ becomes an easy question about a diagonal matrix. Powers, inverses, and long-run behaviour all fall out at once. A second factorization for the same purpose therefore owes an explanation, and the explanation cannot be that diagonalization gives wrong answers. It does not.

// // // // // // ## Why One Basis Is Not Enough

// // // // // // In $A = PDP^{-1}$ the same matrix $P$ appears on both sides — its columns are used to read the input and again to write the output. The factorization insists that input and output be described in identical terms, and that requirement is far stronger than it looks. Most matrices cannot meet it.

// // // // // // Two matrices show the two ways it fails. A $3 \\times 2$ matrix takes vectors from $\\mathbb{R}^2$ and returns vectors in $\\mathbb{R}^3$, so no single basis can serve both ends; the question of an [eigenvector](!/linear-algebra/eigen) cannot even be posed, since $A\\mathbf{v} = \\lambda\\mathbf{v}$ compares vectors living in different spaces. The matrix $\\begin{pmatrix} 1 & 1 \\\\ 0 & 1 \\end{pmatrix}$ is square and perfectly ordinary, and it fails for a different reason: every eigenvector is a multiple of $(1, 0)$, so there is no basis of eigenvectors to build $P$ from. Rectangular shape rules diagonalization out in principle, defective structure rules it out in practice, and between them they account for most matrices anyone meets.

// // // // // // ## Dropping the Requirement

// // // // // // Allow one orthonormal basis for the input space and a different one for the output space, and ask only that the matrix carry the first to the second with a scaling in between. Nothing in that requires the two spaces to have equal dimension, and nothing requires the matrix to fix any direction at all. Both obstructions disappear at once.

// // // // // // The [singular value decomposition](!/linear-algebra/definitions#SVD_ANCHOR) is that arrangement written down — an orthonormal input basis in $V$, an orthonormal output basis in $U$, and the scaling factors between them along the diagonal of $\\Sigma$.

// // // // // // @academic[formula_callout:svd|SVD|$$A = U\\Sigma V^T$$]@
// // // // // // @academic[formulas_link:/linear-algebra/formulas#svd]@

// // // // // // This is a factorization, not an approximation: the three matrices multiply back to $A$ exactly, with no error term and no conditions attached. $U$ is $m \\times m$ [orthogonal](!/linear-algebra/matrix/types) and its columns are the left singular vectors. $V$ is $n \\times n$ orthogonal and its columns are the right singular vectors. $\\Sigma$ is $m \\times n$, zero everywhere off the diagonal, carrying $\\sigma_1 \\geq \\sigma_2 \\geq \\cdots \\geq 0$ along it. Those are the singular values.

// // // // // // ## What It Buys and What It Costs

// // // // // // Several things arrive without being asked for. Both bases come out orthonormal rather than merely independent, so $U^{-1} = U^T$ and $V^{-1} = V^T$ and neither factor ever has to be inverted. The scaling factors come out real and non-negative, because they measure lengths, and can therefore be ordered largest to smallest — which no set of [eigenvalues](!/linear-algebra/eigen) can be, since eigenvalues may be complex. And the factorization exists for every matrix without exception: any shape, any [rank](!/linear-algebra/matrix/rank), [symmetric](!/linear-algebra/matrix/types) or not, [invertible](!/linear-algebra/matrix/inverse) or not.

// // // // // // All of it follows from the single decision to stop insisting on one basis, and that decision has a price. Because $U$ and $V$ are different, they do not cancel when the matrix is applied twice: $A^2 = U\\Sigma V^TU\\Sigma V^T$, and the inner $V^TU$ simplifies to nothing. The SVD is therefore no help with powers, with iteration, or with any question about what a matrix does when applied repeatedly — which is precisely what eigenvalues answer. The two factorizations are not rivals but answers to different questions: one about invariant directions, the other about stretching. What the three factors do to a vector geometrically is the subject of the next section.`,
// // // // // //     before: ``,
// // // // // //     after: ``,
// // // // // //     link: ``,
// // // // // //   },

// // // // // // obj1: {
// // // // // //     title: `What the SVD Is`,
// // // // // //     content: `Diagonalization already does this job, and does it well. Writing $A = PDP^{-1}$ turns a matrix into a pure scaling: the columns of $P$ are directions the matrix merely stretches, $D$ holds the stretching factors, and every hard question about $A$ becomes an easy question about a diagonal matrix. Powers, inverses, and long-run behaviour all fall out at once. A second factorization for the same purpose therefore owes an explanation, and the explanation cannot be that diagonalization gives wrong answers. It does not.

// // // // // // <h3 style="font-size:17px;line-height:1.4;color:#06357a;font-weight:700;margin:34px 0 14px;padding-top:14px;border-top:1px solid #e2e6ec;">Why One Basis Is Not Enough</h3>

// // // // // // In $A = PDP^{-1}$ the same matrix $P$ appears on both sides — its columns are used to read the input and again to write the output. The factorization insists that input and output be described in identical terms, and that requirement is far stronger than it looks. Most matrices cannot meet it.

// // // // // // A $3 \\times 2$ matrix takes vectors from $\\mathbb{R}^2$ and returns vectors in $\\mathbb{R}^3$, so no single basis can serve both ends; the question of an [eigenvector](!/linear-algebra/eigen) cannot even be posed, since $A\\mathbf{v} = \\lambda\\mathbf{v}$ compares vectors living in different spaces. A defective matrix fails differently: it is square, but every eigenvector is a multiple of one direction, so there is no basis of eigenvectors to build $P$ from. Rectangular shape rules diagonalization out in principle, defective structure rules it out in practice, and between them they account for most matrices anyone meets.

// // // // // // <h3 style="font-size:17px;line-height:1.4;color:#06357a;font-weight:700;margin:34px 0 14px;padding-top:14px;border-top:1px solid #e2e6ec;">Dropping the Requirement</h3>

// // // // // // Allow one orthonormal basis for the input space and a different one for the output space, and ask only that the matrix carry the first to the second with a scaling in between. Nothing in that requires the two spaces to have equal dimension, and nothing requires the matrix to fix any direction at all. Both obstructions disappear at once.

// // // // // // There is an orthonormal basis $\\mathbf{v}_1, \\dots, \\mathbf{v}_n$ of the input space and an orthonormal basis $\\mathbf{u}_1, \\dots, \\mathbf{u}_m$ of the output space such that

// // // // // // $$A\\mathbf{v}_i = \\sigma_i \\mathbf{u}_i$$

// // // // // // Each input basis vector is sent to a multiple of one output basis vector, and nothing else. Collecting those $n$ statements into a single matrix equation gives the [singular value decomposition](!/linear-algebra/definitions#SVD_ANCHOR).

// // // // // // @academic[formula_callout:svd|SVD|$$A = U\\Sigma V^T$$]@
// // // // // // @academic[formulas_link:/linear-algebra/formulas#svd]@

// // // // // // This is a factorization, not an approximation: the three matrices multiply back to $A$ exactly, with no error term and no conditions attached. $U$ is $m \\times m$ [orthogonal](!/linear-algebra/matrix/types) and its columns are the left singular vectors. $V$ is $n \\times n$ orthogonal and its columns are the right singular vectors. $\\Sigma$ is $m \\times n$, zero everywhere off the diagonal, carrying $\\sigma_1 \\geq \\sigma_2 \\geq \\cdots \\geq 0$ along it. Those are the singular values.

// // // // // // <h3 style="font-size:17px;line-height:1.4;color:#06357a;font-weight:700;margin:34px 0 14px;padding-top:14px;border-top:1px solid #e2e6ec;">What It Buys and What It Costs</h3>

// // // // // // Several things arrive without being asked for. Both bases come out orthonormal rather than merely independent, so $U^{-1} = U^T$ and $V^{-1} = V^T$ and neither factor ever has to be inverted. The scaling factors come out real and non-negative, because they measure lengths, and can therefore be ordered largest to smallest — which no set of [eigenvalues](!/linear-algebra/eigen) can be, since eigenvalues may be complex. And the factorization exists for every matrix without exception: any shape, any [rank](!/linear-algebra/matrix/rank), [symmetric](!/linear-algebra/matrix/types) or not, [invertible](!/linear-algebra/matrix/inverse) or not.

// // // // // // All of it follows from the single decision to stop insisting on one basis, and that decision has a price. Because $U$ and $V$ are different, they do not cancel when the matrix is applied twice: $A^2 = U\\Sigma V^TU\\Sigma V^T$, and the inner $V^TU$ simplifies to nothing. The SVD is therefore no help with powers, with iteration, or with any question about what a matrix does when applied repeatedly — which is precisely what eigenvalues answer. The two factorizations are not rivals but answers to different questions: one about invariant directions, the other about stretching. What the three factors do to a vector geometrically is the subject of the next section.`,
// // // // // //     before: ``,
// // // // // //     after: ``,
// // // // // //     link: ``,
// // // // // //   },


// // // // // obj1: {
// // // // //     title: `Why One Basis Is Not Enough`,
// // // // //     content: `Diagonalization already does this job, and does it well. Writing $A = PDP^{-1}$ turns a matrix into a pure scaling: the columns of $P$ are directions the matrix merely stretches, $D$ holds the stretching factors, and every hard question about $A$ becomes an easy question about a diagonal matrix. Powers, inverses and long-run behaviour all follow immediately. A second factorization serving the same purpose therefore owes an explanation, and the explanation cannot be that diagonalization gives wrong answers. It does not.

// // // // // **What it demands is one basis doing two jobs.** The same matrix $P$ appears on both sides of $A = PDP^{-1}$: its columns are used to read the input and again to write the output. The factorization insists that both ends be described in identical terms, and that requirement is far stronger than it looks. Most matrices cannot meet it.

// // // // // **Two matrices show the two ways it fails.** The first is $3 \\times 2$. It takes vectors from $\\mathbb{R}^2$ and returns vectors in $\\mathbb{R}^3$, so no single basis can serve both ends, and the question of an [eigenvector](!/linear-algebra/eigen) cannot even be posed — the equation $A\\mathbf{v} = \\lambda\\mathbf{v}$ compares vectors living in different spaces. The second is square and entirely ordinary, $\\begin{pmatrix} 1 & 1 \\\\ 0 & 1 \\end{pmatrix}$, and it fails for a different reason: every eigenvector is a multiple of $(1, 0)$, so there is no basis of eigenvectors from which to build $P$. Rectangular shape rules diagonalization out in principle; defective structure rules it out in practice.

// // // // // **Drop the demand that the two bases agree and both obstructions disappear.** Allow one orthonormal basis for the input space and a different one for the output space, and ask only that the matrix carry the first to the second with a scaling in between. Nothing in that arrangement requires the two spaces to have equal dimension, and nothing requires the matrix to fix any direction at all.

// // // // // The singular value decomposition is that arrangement written down: an orthonormal input basis in $V$, an orthonormal output basis in $U$, and the [singular values](!/linear-algebra/definitions#singular_value) scaling between them along the diagonal of $\\Sigma$.

// // // // // @academic[formula_callout:svd|SVD|$$A = U\\Sigma V^T$$]@
// // // // // @academic[formulas_link:/linear-algebra/formulas#svd]@

// // // // // **This is a factorization, not an approximation.** The three matrices multiply back to $A$ exactly, with no error term and no conditions attached. $U$ is $m \\times m$ [orthogonal](!/linear-algebra/matrix/types) and its columns are the left singular vectors; $V$ is $n \\times n$ orthogonal and its columns are the right singular vectors; $\\Sigma$ is $m \\times n$, zero off the diagonal, carrying $\\sigma_1 \\geq \\sigma_2 \\geq \\cdots \\geq 0$ along it.

// // // // // **Several things then arrive without being asked for.** Both bases come out orthonormal rather than merely independent, so $U^{-1} = U^T$ and $V^{-1} = V^T$ and neither factor ever has to be inverted. The scaling factors come out real and non-negative, because they measure lengths, and can therefore be ordered largest to smallest — which no set of [eigenvalues](!/linear-algebra/eigen) can be, since eigenvalues may be complex. And the factorization exists for every matrix without exception: any shape, any [rank](!/linear-algebra/matrix/rank), [symmetric](!/linear-algebra/matrix/types) or not, [invertible](!/linear-algebra/matrix/inverse) or not.

// // // // // **All of it follows from the single decision to stop insisting on one basis, and that decision has a price.** Because $U$ and $V$ differ, they do not cancel when the matrix is applied twice: $A^2 = U\\Sigma V^TU\\Sigma V^T$, and the inner $V^TU$ simplifies to nothing. The decomposition is therefore no help with powers, with iteration, or with any question about what a matrix does when applied repeatedly — precisely the questions eigenvalues answer. The two factorizations are not rivals but answers to different questions, one about invariant directions and the other about stretching. What the three factors do to a vector geometrically is the subject of the next section.`,
// // // // //     before: ``,
// // // // //     after: ``,
// // // // //     link: ``,
// // // // //   },

// // // // // obj2: {
// // // // //     title: `The Geometric Interpretation`,
// // // // //     content: `Read right to left, the three factors describe three successive actions on a vector.

// // // // // $V^T$ rotates or reflects the input space, aligning it with the directions along which $A$ does its stretching. $\\Sigma$ then scales each of those directions independently by its singular value, with any direction whose $\\sigma_i = 0$ collapsed to nothing. $U$ rotates or reflects the scaled result into position in the output space.

// // // // // Neither $U$ nor $V^T$ changes any length, since both are orthogonal. All the stretching lives in $\\Sigma$, and it acts along coordinate axes only. The consequence is worth stating plainly: every [linear transformation](!/linear-algebra/transformations), however complicated its matrix looks, is a rotation followed by an axis-aligned scaling followed by another rotation.

// // // // // The singular values are exactly the stretching factors. The largest is the most any unit vector can be stretched, $\\sigma_1 = \\max_{\\|\\mathbf{x}\\|=1}\\|A\\mathbf{x}\\|$, and the smallest nonzero one is the least stretching applied to anything in the [row space](!/linear-algebra/vector-spaces/fundamental-spaces). Their ratio $\\sigma_1/\\sigma_r$ measures how unevenly the transformation distorts space.

// // // // // A unit sphere makes this visible. Under $A$ it becomes an ellipsoid whose semi-axes have lengths $\\sigma_1, \\sigma_2, \\dots, \\sigma_r$ and point along the first $r$ columns of $U$. Directions with zero singular value are flattened out of the picture entirely, which is why the ellipsoid has $r$ dimensions rather than $m$.`,
// // // // //     before: ``,
// // // // //     after: ``,
// // // // //     link: ``,
// // // // //   },
// // // // //   obj3: {
// // // // //     title: `Singular Values`,
// // // // //     content: `The singular values of $A$ are the square roots of the [eigenvalues](!/linear-algebra/eigen) of $A^TA$, or equivalently of $AA^T$:

// // // // // @academic[formula_callout:singular_values|Singular Values|$$\\sigma_i = \\sqrt{\\lambda_i(A^TA)} = \\sqrt{\\lambda_i(AA^T)}$$]@
// // // // // @academic[formulas_link:/linear-algebra/formulas#singular_values]@

// // // // // The square root is always real. $A^TA$ is symmetric positive semi-definite whatever $A$ is, so its eigenvalues are non-negative, and the singular values are therefore real and $\\geq 0$. They are listed in decreasing order $\\sigma_1 \\geq \\sigma_2 \\geq \\cdots \\geq 0$ by convention, which is possible only because they are real — an ordering no set of complex eigenvalues admits.

// // // // // The count of nonzero singular values is the [rank](!/linear-algebra/matrix/rank):

// // // // // @academic[formula_callout:svd_rank|SVD Rank|$$\\text{rank}(A) = \\#\\{i : \\sigma_i > 0\\}$$]@
// // // // // @academic[formulas_link:/linear-algebra/formulas#svd_rank]@

// // // // // This is the most numerically dependable way to determine rank. [Gaussian elimination](!/linear-algebra/linear-systems/gaussian-elimination) decides rank by testing entries against zero, and in floating-point arithmetic that test is close to arbitrary — a pivot of $10^{-16}$ may be a genuine zero corrupted by rounding or a genuine small number. The singular values instead usually show a visible gap, and the rank is the number of values above it.

// // // // // Three further quantities read straight off the same list. The largest singular value is the operator norm $\\|A\\|_2$; the [Frobenius norm](!/linear-algebra/matrix/trace) is the root-sum-of-squares of all of them; and the ratio of largest to smallest nonzero is the condition number. Each is treated in its own section below.`,
// // // // //     before: ``,
// // // // //     after: ``,
// // // // //     link: ``,
// // // // //   },
// // // // //   obj4: {
// // // // //     title: `Computing the SVD`,
// // // // //     content: `The standard route computes the SVD through the eigenvalue decomposition of $A^TA$.

// // // // // Form $A^TA$, which is symmetric and $n \\times n$. Find its eigenvalues $\\lambda_1 \\geq \\cdots \\geq \\lambda_n \\geq 0$ and an orthonormal set of eigenvectors $\\mathbf{v}_1, \\dots, \\mathbf{v}_n$ using the [spectral decomposition](!/linear-algebra/decompositions/spectral). Those eigenvectors are the right singular vectors, so $V = [\\mathbf{v}_1 \\; \\cdots \\; \\mathbf{v}_n]$.

// // // // // The singular values are $\\sigma_i = \\sqrt{\\lambda_i}$. Each left singular vector then follows from its partner: $\\mathbf{u}_i = \\frac{1}{\\sigma_i}A\\mathbf{v}_i$, defined for every nonzero $\\sigma_i$. When $r < m$ this produces only $r$ columns of $U$, and the remaining ones are obtained by extending $\\{\\mathbf{u}_1, \\dots, \\mathbf{u}_r\\}$ to an [orthonormal basis](!/linear-algebra/orthogonality/orthogonal-sets) for $\\mathbb{R}^m$.

// // // // // ## Worked Example

// // // // // Take $A = \\begin{pmatrix} 1 & 0 \\\\ 0 & 1 \\\\ 1 & 1 \\end{pmatrix}$, so that $A^TA = \\begin{pmatrix} 2 & 1 \\\\ 1 & 2 \\end{pmatrix}$.

// // // // // Its eigenvalues are $3$ and $1$, with orthonormal eigenvectors $\\mathbf{v}_1 = \\frac{1}{\\sqrt{2}}(1, 1)^T$ and $\\mathbf{v}_2 = \\frac{1}{\\sqrt{2}}(1, -1)^T$. The singular values are $\\sigma_1 = \\sqrt{3}$ and $\\sigma_2 = 1$.

// // // // // The left singular vectors follow: $\\mathbf{u}_1 = \\frac{1}{\\sqrt{3}}A\\mathbf{v}_1 = \\frac{1}{\\sqrt{6}}(1, 1, 2)^T$ and $\\mathbf{u}_2 = A\\mathbf{v}_2 = \\frac{1}{\\sqrt{2}}(1, -1, 0)^T$. Since $A$ is $3 \\times 2$ of rank $2$, one more column is needed to complete $U$, and $\\mathbf{u}_3 = \\frac{1}{\\sqrt{3}}(-1, -1, 1)^T$ is orthogonal to both.

// // // // // In practice this route is used for hand computation and small cases only. Forming $A^TA$ squares the condition number, so production software computes the SVD by bidiagonalization instead, which never constructs $A^TA$ at all.`,
// // // // //     before: ``,
// // // // //     after: ``,
// // // // //     link: ``,
// // // // //   },
// // // // //   obj5: {
// // // // //     title: `Compact and Thin Forms`,
// // // // //     content: `The full SVD stores $U$ at $m \\times m$, $\\Sigma$ at $m \\times n$, and $V$ at $n \\times n$. For a tall matrix this is wasteful, since much of $U$ multiplies rows of $\\Sigma$ that are entirely zero.

// // // // // The thin SVD keeps only the first $n$ columns of $U$, written $U_1$, together with the top $n \\times n$ block of $\\Sigma$, written $\\Sigma_1$, giving $A = U_1 \\Sigma_1 V^T$. The discarded columns are those spanning the [left null space](!/linear-algebra/vector-spaces/fundamental-spaces).

// // // // // The compact SVD goes further and keeps only the first $r$ columns of $U$ and of $V$, where $r$ is the rank, along with the $r \\times r$ block of nonzero singular values: $A = U_r \\Sigma_r V_r^T$. This retains exactly the rank-$r$ content of $A$ and nothing else.

// // // // // All three reproduce $A$ exactly. What differs is storage and what remains available afterwards — the full form alone supplies bases for all four [fundamental subspaces](!/linear-algebra/vector-spaces/fundamental-spaces), while the compact form alone gives an invertible $\\Sigma_r$.`,
// // // // //     before: ``,
// // // // //     after: ``,
// // // // //     link: ``,
// // // // //   },
// // // // //   obj6: {
// // // // //     title: `SVD and the Four Fundamental Subspaces`,
// // // // //     content: `Splitting the columns of $U$ and $V$ at index $r$ produces orthonormal [bases](!/linear-algebra/vector-spaces) for all four [fundamental subspaces](!/linear-algebra/vector-spaces/fundamental-spaces) at once:

// // // // // @academic[formula_callout:svd_four_fundamental_subspaces|SVD Four Fundamental Subspaces|$$\\begin{aligned} \\text{Col}(A) &= \\text{Span}\\{\\mathbf{u}_1, \\ldots, \\mathbf{u}_r\\} \\\\ \\text{Null}(A^T) &= \\text{Span}\\{\\mathbf{u}_{r+1}, \\ldots, \\mathbf{u}_m\\} \\\\ \\text{Row}(A) &= \\text{Span}\\{\\mathbf{v}_1, \\ldots, \\mathbf{v}_r\\} \\\\ \\text{Null}(A) &= \\text{Span}\\{\\mathbf{v}_{r+1}, \\ldots, \\mathbf{v}_n\\} \\end{aligned}$$]@
// // // // // @academic[formulas_link:/linear-algebra/formulas#svd_four_fundamental_subspaces]@

// // // // // The split is the same in both factors and falls at the same place. Columns of $V$ before the cut span the row space and those after it span the [null space](!/linear-algebra/vector-spaces/fundamental-spaces); columns of $U$ before the cut span the [column space](!/linear-algebra/vector-spaces/fundamental-spaces) and those after it span the left null space.

// // // // // The orthogonality of the two complementary pairs is immediate rather than something to be proved separately, since the columns of an orthogonal matrix are mutually perpendicular by construction. No other factorization delivers all four bases from one computation, and none guarantees they will be orthonormal.`,
// // // // //     before: ``,
// // // // //     after: ``,
// // // // //     link: ``,
// // // // //   },
// // // // //   obj7: {
// // // // //     title: `The Pseudoinverse`,
// // // // //     content: `The Moore-Penrose pseudoinverse $A^+$ comes directly out of the SVD:

// // // // // @academic[formula_callout:moore_penrose_pseudoinverse|Moore-Penrose Pseudoinverse|$$A^+ = V\\Sigma^+ U^T$$]@
// // // // // @academic[formulas_link:/linear-algebra/formulas#moore_penrose_pseudoinverse]@

// // // // // The factor $\\Sigma^+$ is built by reciprocating each nonzero singular value and transposing the shape. If $\\Sigma$ is $m \\times n$ with diagonal $\\sigma_1, \\dots, \\sigma_r, 0, \\dots, 0$, then $\\Sigma^+$ is $n \\times m$ with diagonal $1/\\sigma_1, \\dots, 1/\\sigma_r, 0, \\dots, 0$. Zeros stay zero — they are not reciprocated, which is what keeps the construction defined for singular matrices.

// // // // // Four identities characterize it: $AA^+A = A$, $A^+AA^+ = A^+$, $(AA^+)^T = AA^+$, and $(A^+A)^T = A^+A$. Exactly one matrix satisfies all four, so the pseudoinverse is unique.

// // // // // When $A$ is square and [invertible](!/linear-algebra/matrix/inverse), $A^+$ coincides with $A^{-1}$. When it is not, $A^+\\mathbf{b}$ returns the [least-squares](!/linear-algebra/orthogonality/least-squares) solution for a full-rank overdetermined system, and for a rank-deficient one the least-squares solution of smallest length among all minimizers of $\\|A\\mathbf{x} - \\mathbf{b}\\|$.`,
// // // // //     before: ``,
// // // // //     after: ``,
// // // // //     link: ``,
// // // // //   },
// // // // //   obj8: {
// // // // //     title: `Low-Rank Approximation`,
// // // // //     content: `Truncating the SVD at $k$ terms gives the best rank-$k$ approximation to $A$ in both the operator and the Frobenius norm:

// // // // // @academic[formula_callout:eckart_young_low_rank_approximation|Eckart-Young Low-Rank Approximation|$$A_k = \\sum_{i=1}^{k} \\sigma_i \\mathbf{u}_i \\mathbf{v}_i^T, \\qquad \\|A - A_k\\|_2 = \\sigma_{k+1}, \\quad \\|A - A_k\\|_F = \\sqrt{\\sum_{i=k+1}^{r}\\sigma_i^2}$$]@
// // // // // @academic[formulas_link:/linear-algebra/formulas#eckart_young_low_rank_approximation]@

// // // // // The claim of the Eckart-Young-Mirsky theorem is stronger than it may appear. Among all matrices of rank at most $k$ — not merely among truncations of this particular sum — none is closer to $A$ than $A_k$. Optimality is proved, not assumed, and it holds in every unitarily invariant norm.

// // // // // The error is known in advance. It equals $\\sigma_{k+1}$, the first discarded singular value, so the singular values say how much will be lost before anything is discarded. When they decay quickly, a handful of terms captures nearly all of the matrix.

// // // // // That decay is what image compression exploits: storing $k$ triples $(\\sigma_i, \\mathbf{u}_i, \\mathbf{v}_i)$ costs $k(m + n + 1)$ numbers against $mn$ for the original. The same truncation underlies noise reduction, where small singular values are treated as noise, and principal component analysis, where the retained terms are the dominant modes of variation.`,
// // // // //     before: ``,
// // // // //     after: ``,
// // // // //     link: ``,
// // // // //   },
// // // // //   obj9: {
// // // // //     title: `SVD and Norms`,
// // // // //     content: `The singular values give a complete account of the size of a matrix.

// // // // // The operator, or spectral, norm is the largest of them:

// // // // // @academic[formula_callout:operator_norm|Operator Norm|$$\\|A\\|_2 = \\sigma_1 = \\max_{\\|\\mathbf{x}\\|=1} \\|A\\mathbf{x}\\|$$]@
// // // // // @academic[formulas_link:/linear-algebra/formulas#operator_norm]@

// // // // // It reports the worst case: the greatest factor by which any unit vector can be stretched.

// // // // // The [Frobenius norm](!/linear-algebra/matrix/trace) is the root-sum-of-squares of all of them:

// // // // // @academic[formula_callout:frobenius_norm_via_singular_values|Frobenius Norm via Singular Values|$$\\|A\\|_F = \\sqrt{\\sum_{i=1}^{r} \\sigma_i^2}$$]@
// // // // // @academic[formulas_link:/linear-algebra/formulas#frobenius_norm_via_singular_values]@

// // // // // It reports the aggregate rather than the extreme, and it is the same number obtained by summing the squares of the entries.

// // // // // The condition number is the ratio of the extremes:

// // // // // @academic[formula_callout:condition_number|Condition Number|$$\\kappa(A) = \\frac{\\sigma_1}{\\sigma_r}$$]@
// // // // // @academic[formulas_link:/linear-algebra/formulas#condition_number]@

// // // // // A matrix with $\\kappa = 10^k$ loses roughly $k$ digits of accuracy when $A\\mathbf{x} = \\mathbf{b}$ is solved in floating-point arithmetic. Orthogonal matrices achieve the minimum $\\kappa = 1$, since they stretch every direction equally; singular matrices have $\\sigma_r = 0$ and $\\kappa = \\infty$.

// // // // // Conditioning is the quantity the [determinant](!/linear-algebra/determinants) cannot see. A matrix can have determinant $1$ and a condition number of $10^{12}$, because the determinant is a product of stretching factors and a very large one can hide a very small one.`,
// // // // //     before: ``,
// // // // //     after: ``,
// // // // //     link: ``,
// // // // //   },
// // // // //   obj10: {
// // // // //     title: `SVD and the Spectral Decomposition`,
// // // // //     content: `For a symmetric positive semi-definite matrix the two factorizations coincide. If $A = QDQ^T$ with eigenvalues $\\lambda_1 \\geq \\cdots \\geq \\lambda_n \\geq 0$, then that is already the SVD, with $U = V = Q$ and $\\Sigma = D$. The singular values are the eigenvalues, and the two bases that the SVD allows to differ happen not to.

// // // // // For a symmetric matrix with negative eigenvalues they differ slightly. The singular values are $|\\lambda_i|$, and the sign is absorbed by negating the corresponding column of $U$ or of $V$ — necessary because singular values are non-negative by definition while eigenvalues are not.

// // // // // For everything else the [spectral decomposition](!/linear-algebra/decompositions/spectral) does not apply at all. It requires a square matrix, and even then may fail to exist. The SVD has neither restriction, which makes it the extension of the spectral decomposition to the widest class of matrices rather than a competitor to it.`,
// // // // //     before: ``,
// // // // //     after: ``,
// // // // //     link: ``,
// // // // //   },
// // // // //   obj11: {
// // // // //     title: `The Outer Product Form`,
// // // // //     content: `Multiplying the three factors out expresses $A$ as a sum of rank-one matrices:

// // // // // @academic[formula_callout:svd_outer_product_form|SVD Outer Product Form|$$A = \\sum_{i=1}^{r} \\sigma_i \\, \\mathbf{u}_i \\mathbf{v}_i^T$$]@
// // // // // @academic[formulas_link:/linear-algebra/formulas#svd_outer_product_form]@

// // // // // Each term $\\sigma_i \\mathbf{u}_i\\mathbf{v}_i^T$ is an $m \\times n$ matrix of rank one, weighted by its singular value. Because the values decrease, the terms are already ordered by importance: the first captures more of $A$ than any other rank-one matrix could, the second captures more of what is left than any other, and so on down the list.

// // // // // The share captured by the first $k$ terms is measurable. In the Frobenius norm it is $(\\sigma_1^2 + \\cdots + \\sigma_k^2)/(\\sigma_1^2 + \\cdots + \\sigma_r^2)$, which is how a truncation level is chosen in practice — keep terms until the ratio reaches whatever fraction the application requires.

// // // // // This is the same statement as the previous section seen from a different angle, and it is the form in which the SVD appears in applications: the large singular values carry the signal, the small ones carry noise and redundancy, and the decision is where to cut.`,
// // // // //     before: ``,
// // // // //     after: ``,
// // // // //     link: ``,
// // // // //   },
// // // // //   obj12: {
// // // // //     title: `What the SVD Reveals`,
// // // // //     content: `Every result on this page came out of the same three factors, computed once.

// // // // // The [rank](!/linear-algebra/matrix/rank) is the count of nonzero singular values. The four [fundamental subspaces](!/linear-algebra/vector-spaces/fundamental-spaces) are the columns of $U$ and $V$, split at $r$. The pseudoinverse is $V\\Sigma^+U^T$. The best rank-$k$ approximation is the sum truncated at $k$. The norms and the condition number are functions of the singular values alone. And the [geometry](!/linear-algebra/transformations/geometric) of the map is the three factors read in order.

// // // // // For symmetric matrices this reduces to the [spectral decomposition](!/linear-algebra/decompositions/spectral). For rectangular ones it is the only factorization in this section that applies without modification. What each reading takes from which factor is collected below.`,
// // // // //     before: ``,
// // // // //     after: ``,
// // // // //     link: ``,
// // // // //   },
// // // // // }

// // // // // const introContent = {
// // // // //   title: `Two Bases Instead of One`,
// // // // //   content: `Diagonalization requires a single basis to describe both the input and the output of a matrix, and most matrices cannot supply one. Allowing two different orthonormal bases removes that obstruction entirely: every matrix, of any shape and any rank, factors as UΣVᵀ. The cost is that the two bases no longer cancel under repeated application, so questions about powers stay with eigenvalues — but rank, the four fundamental subspaces, the pseudoinverse, the optimal low-rank approximation, and the conditioning all follow from this one factorization.`,
// // // // // }

// // // // // const faqQuestions = {
// // // // //   obj1: {
// // // // //     question: "What is the singular value decomposition?",
// // // // //     answer: "The SVD factors any m×n matrix A as A = UΣVᵀ, where U and V are orthogonal matrices of left and right singular vectors, and Σ is diagonal with non-negative singular values. It exists for every matrix regardless of shape, rank, or symmetry.",
// // // // //     sectionId: "1"
// // // // //   },
// // // // //   obj2: {
// // // // //     question: "Why use the SVD instead of diagonalization?",
// // // // //     answer: "Diagonalization requires the same basis for input and output, which rectangular matrices cannot provide and defective matrices cannot supply. The SVD allows two different orthonormal bases, so it exists for every matrix. The trade-off is that the two bases do not cancel under repeated application, so eigenvalues remain the right tool for powers and iteration.",
// // // // //     sectionId: "1"
// // // // //   },
// // // // //   obj3: {
// // // // //     question: "What do singular values represent geometrically?",
// // // // //     answer: "Singular values measure how much a matrix stretches vectors along each orthogonal direction. The largest singular value σ₁ is the maximum stretching factor, and the transformation decomposes into a rotation (Vᵀ), an axis-aligned scaling (Σ), and another rotation (U).",
// // // // //     sectionId: "2"
// // // // //   },
// // // // //   obj4: {
// // // // //     question: "How does SVD give the best low-rank approximation?",
// // // // //     answer: "The Eckart-Young-Mirsky theorem states that truncating the SVD at k terms gives the closest rank-k matrix to A in both operator and Frobenius norms. The approximation error equals σₖ₊₁ in operator norm. This is the basis of image compression and noise reduction.",
// // // // //     sectionId: "8"
// // // // //   },
// // // // //   obj5: {
// // // // //     question: "How is the pseudoinverse computed from the SVD?",
// // // // //     answer: "The Moore-Penrose pseudoinverse is A⁺ = VΣ⁺Uᵀ, where Σ⁺ reciprocates each nonzero singular value and transposes the shape. For overdetermined systems A⁺b gives the least-squares solution; for rank-deficient systems it gives the minimum-norm least-squares solution.",
// // // // //     sectionId: "7"
// // // // //   },
// // // // //   obj6: {
// // // // //     question: "How does SVD reveal the four fundamental subspaces?",
// // // // //     answer: "The first r columns of V span the row space, the remaining n−r columns span the null space. The first r columns of U span the column space, the remaining m−r columns span the left null space. No other factorization provides orthonormal bases for all four subspaces simultaneously.",
// // // // //     sectionId: "6"
// // // // //   },
// // // // //   obj7: {
// // // // //     question: "What is the condition number of a matrix?",
// // // // //     answer: "The condition number κ(A) = σ₁/σᵣ is the ratio of the largest to smallest nonzero singular value. It measures sensitivity to perturbation: a matrix with κ = 10ᵏ loses roughly k digits of accuracy in floating-point computation. Orthogonal matrices have κ = 1; singular matrices have κ = ∞.",
// // // // //     sectionId: "9"
// // // // //   }
// // // // // }


// // // // // const schemas = {
// // // // //   learningResource: {
// // // // //     "@context": "https://schema.org",
// // // // //     "@type": "LearningResource",
// // // // //     "name": "Singular Value Decomposition (SVD)",
// // // // //     "description": "Singular value decomposition A = UΣVᵀ: why two bases are needed, singular values, geometric interpretation, pseudoinverse, low-rank approximation, four fundamental subspaces, norms, and condition number.",
// // // // //     "url": "https://www.learnmathclass.com/linear-algebra/decompositions/svd",
// // // // //     "inLanguage": "en-US",
// // // // //     "learningResourceType": "Explanation",
// // // // //     "educationalLevel": "College",
// // // // //     "educationalUse": "Learning",
// // // // //     "audience": {
// // // // //       "@type": "EducationalAudience",
// // // // //       "educationalRole": "student"
// // // // //     },
// // // // //     "about": {
// // // // //       "@type": "Thing",
// // // // //       "name": "Singular Value Decomposition"
// // // // //     },
// // // // //     "teaches": [
// // // // //       "Why diagonalization fails for rectangular and defective matrices",
// // // // //       "SVD factorization A = UΣVᵀ for any matrix",
// // // // //       "Geometric interpretation as rotation-scaling-rotation",
// // // // //       "Singular values from eigenvalues of AᵀA",
// // // // //       "Four fundamental subspaces from U and V",
// // // // //       "Moore-Penrose pseudoinverse via SVD",
// // // // //       "Best low-rank approximation (Eckart-Young theorem)",
// // // // //       "Matrix norms and condition number from singular values",
// // // // //       "Outer product form and relationship to spectral decomposition",
// // // // //       "Side-by-side comparison of full, thin, and compact SVD forms"
// // // // //     ],
// // // // //     "keywords": keyWords.join(", "),
// // // // //     "author": {
// // // // //       "@type": "Organization",
// // // // //       "name": "Learn Math Class"
// // // // //     },
// // // // //     "publisher": {
// // // // //       "@type": "Organization",
// // // // //       "name": "Learn Math Class"
// // // // //     },
// // // // //     "datePublished": "2024-01-15",
// // // // //     "dateModified": new Date().toISOString()
// // // // //   },

// // // // //   breadcrumb: {
// // // // //     "@context": "https://schema.org",
// // // // //     "@type": "BreadcrumbList",
// // // // //     "itemListElement": [
// // // // //       {
// // // // //         "@type": "ListItem",
// // // // //         "position": 1,
// // // // //         "name": "Home",
// // // // //         "item": "https://www.learnmathclass.com"
// // // // //       },
// // // // //       {
// // // // //         "@type": "ListItem",
// // // // //         "position": 2,
// // // // //         "name": "Linear Algebra",
// // // // //         "item": "https://www.learnmathclass.com/linear-algebra"
// // // // //       },
// // // // //       {
// // // // //         "@type": "ListItem",
// // // // //         "position": 3,
// // // // //         "name": "Decompositions",
// // // // //         "item": "https://www.learnmathclass.com/linear-algebra/decompositions"
// // // // //       },
// // // // //       {
// // // // //         "@type": "ListItem",
// // // // //         "position": 4,
// // // // //         "name": "Singular Value Decomposition",
// // // // //         "item": "https://www.learnmathclass.com/linear-algebra/decompositions/svd"
// // // // //       }
// // // // //     ]
// // // // //   },

// // // // //   faq: {
// // // // //     "@context": "https://schema.org",
// // // // //     "@type": "FAQPage",
// // // // //     "mainEntity": Object.keys(faqQuestions).map(key => ({
// // // // //       "@type": "Question",
// // // // //       "name": faqQuestions[key].question,
// // // // //       "acceptedAnswer": {
// // // // //         "@type": "Answer",
// // // // //         "text": faqQuestions[key].answer
// // // // //       }
// // // // //     }))
// // // // //   }
// // // // // }


// // // // //   return {
// // // // //   props:{
// // // // //     sectionsContent,
// // // // //     introContent,
// // // // //     svdForms,
// // // // //     obj6Table,
// // // // //     obj9Table,
// // // // //     svdReadings,
// // // // //     faqQuestions,
// // // // //     schemas,
// // // // //     seoData: {
// // // // //       title: "SVD: Singular Value Decomposition | Learn Math Class",
// // // // //       description: "Singular value decomposition A = UΣVᵀ: why two bases are needed, singular values, geometric interpretation, pseudoinverse, low-rank approximation, four fundamental subspaces, norms, and condition number.",
// // // // //       keywords: keyWords.join(", "),
// // // // //       url: "/linear-algebra/decompositions/svd",
// // // // //       name: "Singular Value Decomposition (SVD)"
// // // // //     },
// // // // //   }
// // // // // }
// // // // //    }

// // // // // export default function SVDPage({
// // // // //   seoData,
// // // // //   sectionsContent,
// // // // //   introContent,
// // // // //   svdForms,
// // // // //   obj6Table,
// // // // //   obj9Table,
// // // // //   svdReadings,
// // // // //   faqQuestions,
// // // // //   schemas,
// // // // // }) {

// // // // //   const tableWrapStyle = { margin: '20px auto', width: '100%' }

// // // // //   const genericSections=[
// // // // //     {
// // // // //         id:'1',
// // // // //         title:sectionsContent.obj1.title,
// // // // //         link:sectionsContent.obj1.link,
// // // // //         content:[
// // // // //           sectionsContent.obj1.content,
// // // // //         ]
// // // // //     },
// // // // //     {
// // // // //         id:'2',
// // // // //         title:sectionsContent.obj2.title,
// // // // //         link:sectionsContent.obj2.link,
// // // // //         content:[
// // // // //           sectionsContent.obj2.content,
// // // // //         ]
// // // // //     },
// // // // //     {
// // // // //         id:'3',
// // // // //         title:sectionsContent.obj3.title,
// // // // //         link:sectionsContent.obj3.link,
// // // // //         content:[
// // // // //           sectionsContent.obj3.content,
// // // // //         ]
// // // // //     },
// // // // //     {
// // // // //         id:'4',
// // // // //         title:sectionsContent.obj4.title,
// // // // //         link:sectionsContent.obj4.link,
// // // // //         content:[
// // // // //           sectionsContent.obj4.content,
// // // // //         ]
// // // // //     },
// // // // //     {
// // // // //         id:'5',
// // // // //         title:sectionsContent.obj5.title,
// // // // //         link:sectionsContent.obj5.link,
// // // // //         content:[
// // // // //           sectionsContent.obj5.content,
// // // // //           <DiagramFrame
// // // // //             key={'obj5-diagram'}
// // // // //             id="svd-forms"
// // // // //             title="Three forms, one factorization"
// // // // //             source="/linear-algebra/decompositions/svd"
// // // // //           >
// // // // //             <ObjectTypeProfile data={svdForms} theme="navy" variant="stack" />
// // // // //           </DiagramFrame>,
// // // // //           `The distinction to keep hold of is that none of these is an approximation. Each drops columns that multiply against zero singular values, so the product is unchanged and $A$ is reconstructed exactly in all three. What is lost is not accuracy but the orthogonality of $U$ as a square matrix — $U_r^{\\mathsf{T}}U_r = I_r$ still holds, but $U_rU_r^{\\mathsf{T}}$ no longer does, and any argument relying on the left null space needs the full form.`,
// // // // //         ]
// // // // //     },
// // // // //     {
// // // // //         id:'6',
// // // // //         title:sectionsContent.obj6.title,
// // // // //         link:sectionsContent.obj6.link,
// // // // //         content:[
// // // // //           sectionsContent.obj6.content,
// // // // //           <div key={'obj6-table'} style={tableWrapStyle}
// // // // //                dangerouslySetInnerHTML={{ __html: obj6Table }} />,
// // // // //         ]
// // // // //     },
// // // // //     {
// // // // //         id:'7',
// // // // //         title:sectionsContent.obj7.title,
// // // // //         link:sectionsContent.obj7.link,
// // // // //         content:[
// // // // //           sectionsContent.obj7.content,
// // // // //         ]
// // // // //     },
// // // // //     {
// // // // //         id:'8',
// // // // //         title:sectionsContent.obj8.title,
// // // // //         link:sectionsContent.obj8.link,
// // // // //         content:[
// // // // //           sectionsContent.obj8.content,
// // // // //         ]
// // // // //     },
// // // // //     {
// // // // //         id:'9',
// // // // //         title:sectionsContent.obj9.title,
// // // // //         link:sectionsContent.obj9.link,
// // // // //         content:[
// // // // //           sectionsContent.obj9.content,
// // // // //           <div key={'obj9-table'} style={tableWrapStyle}
// // // // //                dangerouslySetInnerHTML={{ __html: obj9Table }} />,
// // // // //         ]
// // // // //     },
// // // // //     {
// // // // //         id:'10',
// // // // //         title:sectionsContent.obj10.title,
// // // // //         link:sectionsContent.obj10.link,
// // // // //         content:[
// // // // //           sectionsContent.obj10.content,
// // // // //         ]
// // // // //     },
// // // // //     {
// // // // //         id:'11',
// // // // //         title:sectionsContent.obj11.title,
// // // // //         link:sectionsContent.obj11.link,
// // // // //         content:[
// // // // //           sectionsContent.obj11.content,
// // // // //         ]
// // // // //     },
// // // // //     {
// // // // //         id:'12',
// // // // //         title:sectionsContent.obj12.title,
// // // // //         link:sectionsContent.obj12.link,
// // // // //         content:[
// // // // //           sectionsContent.obj12.content,
// // // // //           `Grouping these by which factor supplies the answer is what makes them one computation rather than seven. Three come from the singular values alone, two from the columns of the orthogonal factors, and two require reading all three factors together. Nothing below needs the matrix again once the factorization is in hand.`,
// // // // //           <DiagramFrame
// // // // //             key={'obj12-diagram'}
// // // // //             id="svd-readings"
// // // // //             title="What the SVD reveals"
// // // // //             source="/linear-algebra/decompositions/svd"
// // // // //           >
// // // // //             <IdentitySheet data={svdReadings} theme="navy" variant="ledger" />
// // // // //           </DiagramFrame>,
// // // // //           `Two of these deserve emphasis because nothing else supplies them. The **condition number** measures how badly a system amplifies error, and it is invisible to the determinant — a matrix can have determinant one and still be nearly singular in some direction. **Low-rank approximation** is optimal rather than merely reasonable: truncating the sum at $k$ terms gives the closest rank-$k$ matrix in every unitarily invariant norm, with error exactly $\\sigma_{k+1}$.`,
// // // // //           `The reason all of this comes from one factorization is the decision made in the first section. Requiring a single basis for input and output is what restricts diagonalization to square, non-defective matrices; allowing two bases removes the restriction and costs only the ability to compose the factorization with itself. Everything above is what that trade buys.`,
// // // // //         ]
// // // // //     },
// // // // // ]

// // // // //   return (
// // // // //    <>
// // // // // <Head>
// // // // //   <title>{seoData.title}</title>
// // // // //   <meta name="description" content={seoData.description} />
// // // // //   <meta name="keywords" content={seoData.keywords} />
// // // // //   <link rel="canonical" href={`https://www.learnmathclass.com${seoData.url}`} />

// // // // //   <meta property="og:title" content={seoData.title} />
// // // // //   <meta property="og:description" content={seoData.description} />
// // // // //   <meta property="og:url" content={`https://www.learnmathclass.com${seoData.url}`} />
// // // // //   <meta property="og:type" content="article" />
// // // // //   <meta property="og:site_name" content="Learn Math Class" />

// // // // //   <meta name="twitter:card" content="summary" />
// // // // //   <meta name="twitter:title" content={seoData.title} />
// // // // //   <meta name="twitter:description" content={seoData.description} />

// // // // //   <meta name="robots" content="index, follow" />

// // // // //   <script
// // // // //     type="application/ld+json"
// // // // //     dangerouslySetInnerHTML={{
// // // // //       __html: JSON.stringify(schemas.learningResource)
// // // // //     }}
// // // // //   />

// // // // //   <script
// // // // //     type="application/ld+json"
// // // // //     dangerouslySetInnerHTML={{
// // // // //       __html: JSON.stringify(schemas.breadcrumb)
// // // // //     }}
// // // // //   />

// // // // //   <script
// // // // //     type="application/ld+json"
// // // // //     dangerouslySetInnerHTML={{
// // // // //       __html: JSON.stringify(schemas.faq)
// // // // //     }}
// // // // //   />
// // // // // </Head>
// // // // //    <br/>
// // // // //    <br/>
// // // // //    <br/>
// // // // //    <br/>
// // // // //     <OperaSidebar
// // // // //            side='right'
// // // // //            sidebarWidth='45px'
// // // // //            panelWidth='200px'
// // // // //            iconColor='white'
// // // // //            panelBackgroundColor='#f2f2f2'
// // // // //          />
// // // // //    <Breadcrumb/>
// // // // //    <br/>
// // // // //    <br/>
// // // // //    <h1 className='title' style={{marginTop:'0px',marginBottom:'10px'}}>Singular Value Decomposition</h1>
// // // // //    <br/>
// // // // //    <br/>
// // // // //    <SectionTableOfContents sections={genericSections}
// // // // //     showSecondaryNav={true}
// // // // //          secondaryNavMode="siblings"
// // // // //          secondaryNavTitle="More in this Section"
// // // // //    />
// // // // //    <br/>
// // // // //    <br/>
// // // // //    <br/>
// // // // //     <IntroSection
// // // // //           id={introContent.id}
// // // // //           title={introContent.title}
// // // // //           content={introContent.content}
// // // // //           backgroundColor='#f9fafb'
// // // // //           textColor="#06357a"
// // // // //         />
// // // // //    <br/>
// // // // //    <br/>
// // // // //    <Sections sections={genericSections}/>
// // // // //    <br/>
// // // // //    <br/>
// // // // //    <br/>
// // // // //    </>
// // // // //   )
// // // // // }



// // // // // tables-optimized: v4 | 2026-05-18 | 4 tables (obj5 comparison, obj6 aggregation, obj9 aggregation, obj12 summary capstone)
// // // // // intro-rewritten: v3 | obj1 = ConceptIntro (template D), option B subtitles, two inline SVG figures
// // // // import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
// // // // import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
// // // // import IntroSection from '@/app/components/page-components/section/IntroContentSection'
// // // // import Sections from '@/app/components/page-components/section/Sections'
// // // // import SectionTableOfContents from '@/app/components/page-components/section/SectionTableofContents'
// // // // import React from 'react'
// // // // import '../../../pages.css'
// // // // import Head from 'next/head'
// // // // import KeyTermsCard from '@/app/components/page-components/KeyTermsCard'
// // // // import { tableHeaders } from '@/app/styles/theme'
// // // // import IdentitySheet from '@/app/components/infographics/linear-algebra/IdentitySheet'
// // // // import ObjectTypeProfile from '@/app/components/infographics/linear-algebra/ObjectTypeProfile'
// // // // import DiagramFrame from '@/app/components/infographics/DiagramsFrame'
// // // // import ConceptIntro from '@/app/components/page-components/content-components/ConceptIntro'


// // // // export async function getStaticProps(){
// // // // const keyWords = [
// // // //   "singular value decomposition",
// // // //   "SVD",
// // // //   "singular values",
// // // //   "left right singular vectors",
// // // //   "low-rank approximation",
// // // //   "pseudoinverse SVD",
// // // //   "Moore-Penrose pseudoinverse",
// // // //   "Eckart-Young theorem",
// // // //   "matrix rank SVD",
// // // //   "condition number singular values",
// // // //   "four fundamental subspaces SVD",
// // // //   "compact SVD thin SVD",
// // // //   "SVD image compression",
// // // //   "operator norm Frobenius norm",
// // // //   "UΣVᵀ factorization"
// // // // ]

// // // //   const linkStyle = 'color: inherit; text-decoration: underline;'

// // // //   // ---------- CONCEPT INTRODUCTION (obj1) ----------

// // // //   // Template D — comparison. Four groups, separated on the page by option B
// // // //   // subtitles. Visual slots are attached in the page component, not here.
// // // //   const svdIntroBeats = {
// // // //     opening: [
// // // //       {
// // // //         id: 'incumbent',
// // // //         kind: 'prose',
// // // //         content: `Diagonalization already does this job, and does it well. Writing $A = PDP^{-1}$ turns a matrix into a pure scaling: the columns of $P$ are directions the matrix merely stretches, $D$ holds the stretching factors, and every hard question about $A$ becomes an easy question about a diagonal matrix. Powers, inverses and long-run behaviour all follow at once. A second factorization for the same purpose therefore owes an explanation, and the explanation cannot be that diagonalization gives wrong answers. It does not.`,
// // // //       },
// // // //     ],
// // // //     demand: [
// // // //       {
// // // //         id: 'one-basis',
// // // //         kind: 'prose',
// // // //         content: `In $A = PDP^{-1}$ the same matrix $P$ appears on both sides — its columns are used to read the input and again to write the output. The factorization insists that input and output be described in identical terms, and that requirement is far stronger than it looks. Most matrices cannot meet it.`,
// // // //       },
// // // //       {
// // // //         id: 'two-failures',
// // // //         kind: 'instance',
// // // //         lead: `Two matrices show the two ways it fails.`,
// // // //         caption: `Diagonalization needs the same basis on both sides. Most matrices cannot supply one.`,
// // // //         content: `A $3 \\times 2$ matrix takes vectors from $\\mathbb{R}^2$ and returns vectors in $\\mathbb{R}^3$, so no single basis can serve both ends, and the question of an [eigenvector](!/linear-algebra/eigen) cannot even be posed, since $A\\mathbf{v} = \\lambda\\mathbf{v}$ compares vectors living in different spaces. A defective matrix fails differently: it is square, but every eigenvector is a multiple of one direction, so there is no basis of eigenvectors from which to build $P$. Rectangular shape rules diagonalization out in principle, defective structure rules it out in practice, and between them they account for most matrices anyone meets.`,
// // // //       },
// // // //     ],
// // // //     dropping: [
// // // //       {
// // // //         id: 'drop',
// // // //         kind: 'prose',
// // // //         content: `Allow one orthonormal basis for the input space and a different one for the output space, and ask only that the matrix carry the first to the second with a scaling in between. Nothing in that requires the two spaces to have equal dimension, and nothing requires the matrix to fix any direction at all. Both obstructions disappear at once.`,
// // // //       },
// // // //       {
// // // //         id: 'circle-ellipse',
// // // //         kind: 'instance',
// // // //         caption: `The circle becomes an ellipse. Each $\\mathbf{v}_i$ is carried to a multiple of $\\mathbf{u}_i$, and $\\sigma_i$ is that multiple.`,
// // // //         content: `That picture is the whole factorization in one equation. There is an orthonormal basis $\\mathbf{v}_1, \\dots, \\mathbf{v}_n$ of the input space and an orthonormal basis $\\mathbf{u}_1, \\dots, \\mathbf{u}_m$ of the output space such that $A\\mathbf{v}_i = \\sigma_i \\mathbf{u}_i$. Each input basis vector is sent to a multiple of one output basis vector, and nothing else.`,
// // // //       },
// // // //       {
// // // //         id: 'definition',
// // // //         kind: 'definition',
// // // //         kicker: 'The definition',
// // // //         statement: `Collecting those $n$ statements into a single matrix equation gives the [singular value decomposition](!/linear-algebra/definitions#singular_value): an orthonormal input basis in $V$, an orthonormal output basis in $U$, and the scaling factors between them along the diagonal of $\\Sigma$.`,
// // // //         formula: `@academic[formula_callout:svd|SVD|$$A = U\\Sigma V^T$$]@
// // // // @academic[formulas_link:/linear-algebra/formulas#svd]@`,
// // // //         gloss: `This is a factorization, not an approximation: the three matrices multiply back to $A$ exactly, with no error term and no conditions attached.`,
// // // //         kindOfThing: `$U$ is $m \\times m$ [orthogonal](!/linear-algebra/matrix/types) and its columns are the left singular vectors. $V$ is $n \\times n$ orthogonal and its columns are the right singular vectors. $\\Sigma$ is $m \\times n$, zero everywhere off the diagonal, carrying $\\sigma_1 \\geq \\sigma_2 \\geq \\cdots \\geq 0$ along it. Those are the singular values, and they are the lengths of the semi-axes of the ellipse above.`,
// // // //       },
// // // //     ],
// // // //     ledger: [
// // // //       {
// // // //         id: 'free',
// // // //         kind: 'prose',
// // // //         content: `Several things arrive without being asked for. Both bases come out orthonormal rather than merely independent, so $U^{-1} = U^T$ and $V^{-1} = V^T$ and neither factor ever has to be inverted. The scaling factors come out real and non-negative, because they measure lengths, and can therefore be ordered largest to smallest — which no set of [eigenvalues](!/linear-algebra/eigen) can be, since eigenvalues may be complex. And the factorization exists for every matrix without exception: any shape, any [rank](!/linear-algebra/matrix/rank), [symmetric](!/linear-algebra/matrix/types) or not, [invertible](!/linear-algebra/matrix/inverse) or not.`,
// // // //       },
// // // //       {
// // // //         id: 'price',
// // // //         kind: 'prose',
// // // //         content: `All of it follows from the single decision to stop insisting on one basis, and that decision has a price. Because $U$ and $V$ are different, they do not cancel when the matrix is applied twice: $A^2 = U\\Sigma V^TU\\Sigma V^T$, and the inner $V^TU$ simplifies to nothing. The SVD is therefore no help with powers, with iteration, or with any question about what a matrix does when applied repeatedly — which is precisely what eigenvalues answer. The two factorizations are not rivals but answers to different questions: one about invariant directions, the other about stretching. What the three factors do to a vector geometrically is the subject of the next section.`,
// // // //       },
// // // //     ],
// // // //   }

// // // //   // ---------- TABLES ----------

// // // //   // obj5 — three storage forms of one factorization
// // // //   const svdForms = {
// // // //     kicker: 'Decompositions \u00B7 SVD',
// // // //     title: 'Three forms, one factorization',
// // // //     tallyLabel: 'forms',
// // // //     intro: 'All three reconstruct $A$ exactly. They differ in how much of $U$ and $\\Sigma$ is kept \u2014 and what is dropped is precisely the part that multiplies against zero singular values.',
// // // //     footnote: 'Nothing is approximated anywhere in this table. The full form carries orthonormal bases for all four [fundamental subspaces](!/linear-algebra/vector-spaces/fundamental-spaces), which is why it is the one to state theorems with; the compact form carries only what contributes to $A$, which is why it is the one to store. Approximation begins only when the compact form is truncated below rank $r$.',
// // // //     slots: [
// // // //       { key: 'shapes',  label: 'shapes' },
// // // //       { key: 'stored',  label: 'what is kept' },
// // // //       { key: 'dropped', label: 'what is dropped' },
// // // //       { key: 'usedFor', label: 'used for' },
// // // //     ],
// // // //     groups: [
// // // //       {
// // // //         heading: 'Everything kept',
// // // //         types: [
// // // //           {
// // // //             name: 'Full SVD',
// // // //             anchor: '#1',
// // // //             shape: 'dense',
// // // //             condition: '$U$ and $V$ both square and orthogonal',
// // // //             properties: {
// // // //               shapes: '$U: m \\times m$, $\\Sigma: m \\times n$, $V: n \\times n$',
// // // //               stored: 'all of $U$, $V$, and a rectangular $\\Sigma$',
// // // //               dropped: 'nothing',
// // // //               usedFor: 'theory, the four subspaces',
// // // //             },
// // // //             note: 'The only form where $U$ and $V$ are genuinely orthogonal matrices, so $UU^{\\mathsf{T}} = I$ as well as $U^{\\mathsf{T}}U = I$. That is what makes it the form to state results with \u2014 the last $m - r$ columns of $U$ span the left null space and would otherwise be gone.',
// // // //           },
// // // //         ],
// // // //       },
// // // //       {
// // // //         heading: 'Trimmed to what multiplies',
// // // //         types: [
// // // //           {
// // // //             name: 'Thin SVD',
// // // //             anchor: '#5',
// // // //             shape: 'lower',
// // // //             condition: '$m > n$ \u2014 keep $n$ columns of $U$',
// // // //             properties: {
// // // //               shapes: '$U_n: m \\times n$, $\\Sigma_n: n \\times n$, $V: n \\times n$',
// // // //               stored: 'the first $n$ columns of $U$',
// // // //               dropped: 'the last $m - n$ columns of $U$',
// // // //               usedFor: 'least squares on tall matrices',
// // // //             },
// // // //             note: 'The dropped columns multiply rows of $\\Sigma$ that are entirely zero, so removing them changes nothing about the product. Note $U_n$ is no longer square: $U_n^{\\mathsf{T}}U_n = I_n$ still holds, but $U_nU_n^{\\mathsf{T}}$ does not.',
// // // //           },
// // // //           {
// // // //             name: 'Compact SVD',
// // // //             anchor: '#5',
// // // //             shape: 'block',
// // // //             condition: 'keep only the $r$ nonzero singular values',
// // // //             properties: {
// // // //               shapes: '$U_r: m \\times r$, $\\Sigma_r: r \\times r$, $V_r: n \\times r$',
// // // //               stored: 'the rank-$r$ content only',
// // // //               dropped: 'every zero singular value and its vectors',
// // // //               usedFor: 'storage, rank-deficient matrices',
// // // //             },
// // // //             note: 'The most economical exact form: $\\Sigma_r$ is square with a strictly positive diagonal, so it is invertible \u2014 which is what makes the [pseudoinverse](#7) computable as $V_r\\Sigma_r^{-1}U_r^{\\mathsf{T}}$.',
// // // //           },
// // // //         ],
// // // //       },
// // // //     ],
// // // //   }

// // // //   // obj6 — aggregation: four fundamental subspaces from the SVD
// // // //   const obj6Table = `
// // // // <table class="styled-table" style="border-collapse: collapse; width: 75%;margin:auto; background: white; box-shadow: 0 2px 10px rgba(0,0,0,0.1); border-radius: 8px; overflow: hidden; font-family: Arial, sans-serif;">
// // // //   <thead>
// // // //     <tr>
// // // //       <th style="${tableHeaders.aggregation}">Fundamental subspace</th>
// // // //       <th style="${tableHeaders.aggregation} text-align: center;">Basis from</th>
// // // //       <th style="${tableHeaders.aggregation} text-align: center;">Column indices</th>
// // // //       <th style="${tableHeaders.aggregation} text-align: center;">Dimension</th>
// // // //     </tr>
// // // //   </thead>
// // // //   <tbody>
// // // //     <tr style="background: #f8f9fa;">
// // // //       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Row space of A</td>
// // // //       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e; text-align: center;">V</td>
// // // //       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e; text-align: center;">1, ..., r</td>
// // // //       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e; text-align: center;">r</td>
// // // //     </tr>
// // // //     <tr>
// // // //       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Null space of A</td>
// // // //       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e; text-align: center;">V</td>
// // // //       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e; text-align: center;">r+1, ..., n</td>
// // // //       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e; text-align: center;">n − r</td>
// // // //     </tr>
// // // //     <tr style="background: #f8f9fa;">
// // // //       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Column space of A</td>
// // // //       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e; text-align: center;">U</td>
// // // //       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e; text-align: center;">1, ..., r</td>
// // // //       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e; text-align: center;">r</td>
// // // //     </tr>
// // // //     <tr>
// // // //       <td style="padding: 12px 15px; font-weight: bold; color: #06357a;">Left null space of A</td>
// // // //       <td style="padding: 12px 15px; color: #34495e; text-align: center;">U</td>
// // // //       <td style="padding: 12px 15px; color: #34495e; text-align: center;">r+1, ..., m</td>
// // // //       <td style="padding: 12px 15px; color: #34495e; text-align: center;">m − r</td>
// // // //     </tr>
// // // //   </tbody>
// // // // </table>
// // // // `

// // // //   // obj9 — aggregation: norms and condition number from singular values
// // // //   const obj9Table = `
// // // // <table class="styled-table" style="border-collapse: collapse; width: 75%;margin:auto; background: white; box-shadow: 0 2px 10px rgba(0,0,0,0.1); border-radius: 8px; overflow: hidden; font-family: Arial, sans-serif;">
// // // //   <thead>
// // // //     <tr>
// // // //       <th style="${tableHeaders.aggregation}">Quantity</th>
// // // //       <th style="${tableHeaders.aggregation}">Formula via singular values</th>
// // // //       <th style="${tableHeaders.aggregation}">Interpretation</th>
// // // //     </tr>
// // // //   </thead>
// // // //   <tbody>
// // // //     <tr style="background: #f8f9fa;">
// // // //       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Operator (spectral) norm ‖A‖<sub>2</sub></td>
// // // //       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">σ<sub>1</sub></td>
// // // //       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">maximum stretching factor on the unit ball</td>
// // // //     </tr>
// // // //     <tr>
// // // //       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;"><a href="/linear-algebra/matrix/trace" style="${linkStyle}">Frobenius norm</a> ‖A‖<sub>F</sub></td>
// // // //       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">√(σ<sub>1</sub><sup>2</sup> + σ<sub>2</sub><sup>2</sup> + ··· + σ<sub>r</sub><sup>2</sup>)</td>
// // // //       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">total "energy" — root-sum-of-squares of singular values</td>
// // // //     </tr>
// // // //     <tr style="background: #f8f9fa;">
// // // //       <td style="padding: 12px 15px; font-weight: bold; color: #06357a;">Condition number κ(A)</td>
// // // //       <td style="padding: 12px 15px; color: #34495e;">σ<sub>1</sub> / σ<sub>r</sub></td>
// // // //       <td style="padding: 12px 15px; color: #34495e;">sensitivity to perturbation: κ = 10<sup>k</sup> loses ~k digits</td>
// // // //     </tr>
// // // //   </tbody>
// // // // </table>
// // // // `

// // // //   // obj12 — what one factorization yields, sorted by which factor carries it
// // // //   const svdReadings = {
// // // //     kicker: 'Decompositions \u00B7 SVD',
// // // //     title: 'What the SVD reveals',
// // // //     tallyLabel: 'readings',
// // // //     intro: 'Every entry comes from the same three factors. What changes is which one is being read \u2014 the singular values for size, the columns of $U$ and $V$ for structure, and all three together for geometry.',
// // // //     footnote: 'No other factorization answers this many questions, and none exists for every matrix. That combination is why the SVD is the one to reach for when the matrix is rectangular, rank-deficient, or simply unknown \u2014 the conditions the [other decompositions](!/linear-algebra/decompositions) require are exactly the ones it does without.',
// // // //     groups: [
// // // //       {
// // // //         heading: 'From the singular values',
// // // //         identities: [
// // // //           {
// // // //             name: 'Rank',
// // // //             anchor: '#3',
// // // //             formula: '$r = $ count of $\\sigma_i > 0$',
// // // //             condition: 'strictly positive only',
// // // //             note: 'The most numerically reliable rank there is. Row reduction decides rank by comparing entries against zero, which floating point makes arbitrary; the singular values instead show a gap, and where that gap falls is a judgement the numbers themselves support.',
// // // //           },
// // // //           {
// // // //             name: 'Norms',
// // // //             anchor: '#9',
// // // //             formula: '$\\|A\\|_2 = \\sigma_1, \\quad \\|A\\|_F^2 = \\textstyle\\sum \\sigma_i^2$',
// // // //             condition: 'read straight off the list',
// // // //             note: 'The largest singular value is the most any unit vector is stretched. The Frobenius norm is the whole list in quadrature \u2014 so both common matrix norms are functions of the same numbers.',
// // // //           },
// // // //           {
// // // //             name: 'Condition number',
// // // //             anchor: '#9',
// // // //             formula: '$\\kappa(A) = \\sigma_1 / \\sigma_r$',
// // // //             condition: '$A$ of full rank',
// // // //             strict: true,
// // // //             note: 'The ratio of most to least stretched. A large $\\kappa$ means the matrix is nearly singular in some direction, and small changes to $\\mathbf{b}$ produce large changes to the solution \u2014 which no determinant reports, since a matrix can have $\\det = 1$ and be badly conditioned.',
// // // //           },
// // // //         ],
// // // //       },
// // // //       {
// // // //         heading: 'From the columns of U and V',
// // // //         identities: [
// // // //           {
// // // //             name: 'The four subspaces',
// // // //             anchor: '#6',
// // // //             formula: 'partition $U$ and $V$ at index $r$',
// // // //             condition: 'orthonormal bases, all four at once',
// // // //             key: true,
// // // //             note: 'First $r$ columns of $V$ span the row space and the rest the null space; first $r$ of $U$ span the column space and the rest the left null space. The only method giving [all four](!/linear-algebra/vector-spaces/fundamental-spaces) orthonormally from one computation.',
// // // //           },
// // // //           {
// // // //             name: 'Pseudoinverse',
// // // //             anchor: '#7',
// // // //             formula: '$A^{+} = V\\Sigma^{+}U^{\\mathsf{T}}$',
// // // //             condition: 'reciprocate the nonzero $\\sigma$, leave zeros alone',
// // // //             note: 'Defined for every matrix, square or not, invertible or not. When $A$ is invertible it coincides with $A^{-1}$; otherwise it returns the least-squares solution of minimum norm, which is the sense in which it is the closest thing to an [inverse](!/linear-algebra/matrix/inverse).',
// // // //           },
// // // //         ],
// // // //       },
// // // //       {
// // // //         heading: 'From all three factors',
// // // //         identities: [
// // // //           {
// // // //             name: 'Low-rank approximation',
// // // //             anchor: '#8',
// // // //             formula: '$A_k = \\sum_{i=1}^{k} \\sigma_i \\mathbf{u}_i \\mathbf{v}_i^{\\mathsf{T}}$',
// // // //             condition: 'optimal for every unitarily invariant norm',
// // // //             key: true,
// // // //             note: 'Truncating the outer-product sum gives the best rank-$k$ approximation there is \u2014 the Eckart\u2013Young theorem, and it is why the SVD underlies image compression and principal component analysis. The error is exactly $\\sigma_{k+1}$, so the singular values say in advance how much is lost.',
// // // //           },
// // // //           {
// // // //             name: 'Geometric action',
// // // //             anchor: '#2',
// // // //             formula: '$A = U\\Sigma V^{\\mathsf{T}}$ \u2014 rotate, stretch, rotate',
// // // //             condition: 'every matrix, no hypotheses',
// // // //             note: 'Read right to left: $V^{\\mathsf{T}}$ rotates, $\\Sigma$ scales along axes, $U$ rotates again. Every linear map is those three steps, which is the claim that makes the factorization worth having as geometry rather than only as algebra.',
// // // //           },
// // // //         ],
// // // //       },
// // // //     ],
// // // //   }

// // // // const sectionsContent = {
// // // //   obj1: {
// // // //     title: `What the SVD Is`,
// // // //     content: ``,
// // // //     before: ``,
// // // //     after: ``,
// // // //     link: ``,
// // // //   },
// // // //   obj2: {
// // // //     title: `The Geometric Interpretation`,
// // // //     content: `Every [linear transformation](!/linear-algebra/transformations) $\\mathbf{x} \\mapsto A\\mathbf{x}$ decomposes into three geometric steps:

// // // // $V^T$ rotates (or reflects) the input space, aligning the input with the "natural axes" of the transformation — the directions along which $A$ stretches most and least.

// // // // $\\Sigma$ scales each axis independently by the corresponding singular value. Axes with $\\sigma_i = 0$ are annihilated — those directions are collapsed to zero.

// // // // $U$ rotates (or reflects) the scaled result into the output space.

// // // // The singular values measure the stretching in each orthogonal direction. $\\sigma_1$ is the maximum stretching: $\\sigma_1 = \\max_{\\|\\mathbf{x}\\|=1}\\|A\\mathbf{x}\\|$. The smallest nonzero singular value $\\sigma_r$ is the minimum stretching on the [row space](!/linear-algebra/vector-spaces/fundamental-spaces). The ratio $\\sigma_1/\\sigma_r$ is the condition number — it measures how distorted the transformation is.

// // // // Even the most complex-looking matrix is geometrically just two rotations sandwiching a coordinate-axis scaling.`,
// // // //     before: ``,
// // // //     after: ``,
// // // //     link: ``,
// // // //   },
// // // //   obj3: {
// // // //     title: `Singular Values`,
// // // //     content: `The singular values of $A$ are the square roots of the [eigenvalues](!/linear-algebra/eigen) of $A^TA$ (or equivalently $AA^T$):

// // // // @academic[formula_callout:singular_values|Singular Values|$$\\sigma_i = \\sqrt{\\lambda_i(A^TA)} = \\sqrt{\\lambda_i(AA^T)}$$]@
// // // // @academic[formulas_link:/linear-algebra/formulas#singular_values]@

// // // // Since $A^TA$ is symmetric positive semi-definite, its eigenvalues are all $\\geq 0$, so the singular values are real and non-negative. They are ordered $\\sigma_1 \\geq \\sigma_2 \\geq \\cdots \\geq 0$.

// // // // The number of nonzero singular values equals the [rank](!/linear-algebra/matrix/rank) of $A$:

// // // // @academic[formula_callout:svd_rank|SVD Rank|$$\\text{rank}(A) = \\#\\{i : \\sigma_i > 0\\}$$]@
// // // // @academic[formulas_link:/linear-algebra/formulas#svd_rank]@

// // // // This is the most numerically stable method for determining rank: compute the SVD and count singular values above a tolerance.

// // // // The largest singular value $\\sigma_1$ is the operator norm $\\|A\\|_2 = \\max_{\\|\\mathbf{x}\\|=1}\\|A\\mathbf{x}\\|$. The [Frobenius norm](!/linear-algebra/matrix/trace) is $\\|A\\|_F = \\sqrt{\\sigma_1^2 + \\sigma_2^2 + \\cdots + \\sigma_r^2}$. The condition number is $\\kappa(A) = \\sigma_1/\\sigma_r$ — a large condition number means the matrix is nearly singular and small perturbations in the input cause large changes in the output.`,
// // // //     before: ``,
// // // //     after: ``,
// // // //     link: ``,
// // // //   },
// // // //   obj4: {
// // // //     title: `Computing the SVD`,
// // // //     content: `The standard approach computes the SVD through the eigenvalue decomposition of $A^TA$.

// // // // Form $A^TA$ (symmetric, $n \\times n$). Find its eigenvalues $\\lambda_1 \\geq \\cdots \\geq \\lambda_n \\geq 0$ and orthonormal eigenvectors $\\mathbf{v}_1, \\dots, \\mathbf{v}_n$ using the [spectral decomposition](!/linear-algebra/decompositions/spectral). These are the right singular vectors: $V = [\\mathbf{v}_1 \\; \\cdots \\; \\mathbf{v}_n]$.

// // // // The singular values are $\\sigma_i = \\sqrt{\\lambda_i}$. The left singular vectors are computed from the right ones: $\\mathbf{u}_i = \\frac{1}{\\sigma_i}A\\mathbf{v}_i$ for each nonzero $\\sigma_i$. If $r < m$, extend $\\{\\mathbf{u}_1, \\dots, \\mathbf{u}_r\\}$ to an [orthonormal basis](!/linear-algebra/orthogonality/orthogonal-sets) for $\\mathbb{R}^m$.

// // // // ## Worked Example

// // // // For $A = \\begin{pmatrix} 1 & 0 \\\\ 0 & 1 \\\\ 1 & 1 \\end{pmatrix}$: $A^TA = \\begin{pmatrix} 2 & 1 \\\\ 1 & 2 \\end{pmatrix}$, eigenvalues $3$ and $1$, eigenvectors $\\frac{1}{\\sqrt{2}}(1, 1)^T$ and $\\frac{1}{\\sqrt{2}}(1, -1)^T$. Singular values: $\\sqrt{3}$ and $1$. Left singular vectors: $\\mathbf{u}_1 = \\frac{1}{\\sqrt{3}}A\\mathbf{v}_1 = \\frac{1}{\\sqrt{6}}(1, 1, 2)^T$, $\\mathbf{u}_2 = A\\mathbf{v}_2 = \\frac{1}{\\sqrt{2}}(1, -1, 0)^T$. Extend with $\\mathbf{u}_3 = \\frac{1}{\\sqrt{3}}(-1, -1, 1)^T$.`,
// // // //     before: ``,
// // // //     after: ``,
// // // //     link: ``,
// // // //   },
// // // //   obj5: {
// // // //     title: `Compact and Thin Forms`,
// // // //     content: `The full SVD has $U$ of size $m \\times m$, $\\Sigma$ of size $m \\times n$, and $V$ of size $n \\times n$. Two economical alternatives retain only the essential information.

// // // // The thin SVD keeps only the first $n$ columns of $U$ (call them $U_1$) and the top $n \\times n$ block of $\\Sigma$ (call it $\\Sigma_1$): $A = U_1 \\Sigma_1 V^T$. This drops the columns of $U$ corresponding to the [left null space](!/linear-algebra/vector-spaces/fundamental-spaces).

// // // // The compact SVD keeps only the first $r$ columns of $U$ and $V$ (where $r = \\text{rank}(A)$) and the $r \\times r$ diagonal block of nonzero singular values: $A = U_r \\Sigma_r V_r^T$. This is the most economical representation — it captures only the rank-$r$ content of $A$, discarding everything associated with zero singular values.

// // // // All three forms represent the same matrix $A$. The compact form uses the least storage; the full form provides bases for all four [fundamental subspaces](!/linear-algebra/vector-spaces/fundamental-spaces). The three variants line up cleanly on factor dimensions and on what each one chooses to keep.`,
// // // //     before: ``,
// // // //     after: ``,
// // // //     link: ``,
// // // //   },
// // // //   obj6: {
// // // //     title: `SVD and the Four Fundamental Subspaces`,
// // // //     content: `The SVD simultaneously provides orthonormal [bases](!/linear-algebra/vector-spaces) for all four [fundamental subspaces](!/linear-algebra/vector-spaces/fundamental-spaces) of $A$:

// // // // @academic[formula_callout:svd_four_fundamental_subspaces|SVD Four Fundamental Subspaces|$$\\begin{aligned} \\text{Col}(A) &= \\text{Span}\\{\\mathbf{u}_1, \\ldots, \\mathbf{u}_r\\} \\\\ \\text{Null}(A^T) &= \\text{Span}\\{\\mathbf{u}_{r+1}, \\ldots, \\mathbf{u}_m\\} \\\\ \\text{Row}(A) &= \\text{Span}\\{\\mathbf{v}_1, \\ldots, \\mathbf{v}_r\\} \\\\ \\text{Null}(A) &= \\text{Span}\\{\\mathbf{v}_{r+1}, \\ldots, \\mathbf{v}_n\\} \\end{aligned}$$]@
// // // // @academic[formulas_link:/linear-algebra/formulas#svd_four_fundamental_subspaces]@

// // // // The first $r$ columns of $V$ ($\\mathbf{v}_1, \\dots, \\mathbf{v}_r$) form an orthonormal basis for the row space of $A$.

// // // // The last $n - r$ columns of $V$ ($\\mathbf{v}_{r+1}, \\dots, \\mathbf{v}_n$) form an orthonormal basis for the [null space](!/linear-algebra/vector-spaces/fundamental-spaces) of $A$.

// // // // The first $r$ columns of $U$ ($\\mathbf{u}_1, \\dots, \\mathbf{u}_r$) form an orthonormal basis for the [column space](!/linear-algebra/vector-spaces/fundamental-spaces) of $A$.

// // // // The last $m - r$ columns of $U$ ($\\mathbf{u}_{r+1}, \\dots, \\mathbf{u}_m$) form an orthonormal basis for the left null space of $A$.

// // // // No other factorization provides all four bases simultaneously, and no other method guarantees that these bases are orthonormal. The SVD is the complete structural portrait of any matrix.`,
// // // //     before: ``,
// // // //     after: ``,
// // // //     link: ``,
// // // //   },
// // // //   obj7: {
// // // //     title: `The Pseudoinverse`,
// // // //     content: `The Moore-Penrose pseudoinverse $A^+$ is computed directly from the SVD:

// // // // @academic[formula_callout:moore_penrose_pseudoinverse|Moore-Penrose Pseudoinverse|$$A^+ = V\\Sigma^+ U^T$$]@
// // // // @academic[formulas_link:/linear-algebra/formulas#moore_penrose_pseudoinverse]@

// // // // The matrix $\\Sigma^+$ is formed by reciprocating each nonzero singular value and transposing the shape: if $\\Sigma$ is $m \\times n$ with diagonal entries $\\sigma_1, \\dots, \\sigma_r, 0, \\dots, 0$, then $\\Sigma^+$ is $n \\times m$ with diagonal entries $1/\\sigma_1, \\dots, 1/\\sigma_r, 0, \\dots, 0$.

// // // // The pseudoinverse satisfies four defining properties: $AA^+A = A$, $A^+AA^+ = A^+$, $(AA^+)^T = AA^+$, $(A^+A)^T = A^+A$.

// // // // For a full-rank overdetermined system ($m > n$, rank $= n$), $A^+\\mathbf{b}$ gives the [least-squares](!/linear-algebra/orthogonality/least-squares) solution. For a rank-deficient system, $A^+\\mathbf{b}$ gives the minimum-norm least-squares solution — the solution of smallest length among all minimizers of $\\|A\\mathbf{x} - \\mathbf{b}\\|$.`,
// // // //     before: ``,
// // // //     after: ``,
// // // //     link: ``,
// // // //   },
// // // //   obj8: {
// // // //     title: `Low-Rank Approximation`,
// // // //     content: `The best rank-$k$ approximation to $A$ in either the operator norm or the Frobenius norm is obtained by truncating the SVD at $k$ terms:

// // // // @academic[formula_callout:eckart_young_low_rank_approximation|Eckart-Young Low-Rank Approximation|$$A_k = \\sum_{i=1}^{k} \\sigma_i \\mathbf{u}_i \\mathbf{v}_i^T, \\qquad \\|A - A_k\\|_2 = \\sigma_{k+1}, \\quad \\|A - A_k\\|_F = \\sqrt{\\sum_{i=k+1}^{r}\\sigma_i^2}$$]@
// // // // @academic[formulas_link:/linear-algebra/formulas#eckart_young_low_rank_approximation]@

// // // // This is the Eckart-Young-Mirsky theorem. Among all matrices of rank at most $k$, $A_k$ is the closest to $A$. The approximation error equals $\\sigma_{k+1}$ (the first discarded singular value) in the operator norm, and $\\sqrt{\\sigma_{k+1}^2 + \\cdots + \\sigma_r^2}$ in the Frobenius norm.

// // // // When the singular values decay rapidly — $\\sigma_1 \\gg \\sigma_2 \\gg \\cdots$ — a small number of terms captures most of the matrix. This is the basis of image compression (store $k$ singular value triples instead of $mn$ entries), noise reduction (discard small singular values as noise), latent semantic analysis (retain the top-$k$ "concepts" in a document-term matrix), and dimensionality reduction more broadly.`,
// // // //     before: ``,
// // // //     after: ``,
// // // //     link: ``,
// // // //   },
// // // //   obj9: {
// // // //     title: `SVD and Norms`,
// // // //     content: `The singular values provide the complete "size profile" of a matrix.

// // // // The operator (spectral) norm is the largest singular value:

// // // // @academic[formula_callout:operator_norm|Operator Norm|$$\\|A\\|_2 = \\sigma_1 = \\max_{\\|\\mathbf{x}\\|=1} \\|A\\mathbf{x}\\|$$]@
// // // // @academic[formulas_link:/linear-algebra/formulas#operator_norm]@

// // // // It measures the maximum factor by which $A$ can stretch a unit vector.

// // // // The [Frobenius norm](!/linear-algebra/matrix/trace) is the root-sum-of-squares of all singular values:

// // // // @academic[formula_callout:frobenius_norm_via_singular_values|Frobenius Norm via Singular Values|$$\\|A\\|_F = \\sqrt{\\sum_{i=1}^{r} \\sigma_i^2}$$]@
// // // // @academic[formulas_link:/linear-algebra/formulas#frobenius_norm_via_singular_values]@

// // // // It measures the total "energy" in the matrix.

// // // // The condition number quantifies sensitivity to perturbation:

// // // // @academic[formula_callout:condition_number|Condition Number|$$\\kappa(A) = \\frac{\\sigma_1}{\\sigma_r}$$]@
// // // // @academic[formulas_link:/linear-algebra/formulas#condition_number]@

// // // // A matrix with $\\kappa = 10^k$ loses roughly $k$ digits of accuracy in solving $A\\mathbf{x} = \\mathbf{b}$ with floating-point arithmetic. A perfectly conditioned matrix ($\\kappa = 1$) is orthogonal. A singular matrix ($\\sigma_r = 0$) has $\\kappa = \\infty$.

// // // // The singular values are the natural measuring tool for matrices, just as eigenvalues are the natural measuring tool for symmetric matrices and [linear operators](!/linear-algebra/transformations). For non-symmetric matrices, singular values (not eigenvalues) govern norms and conditioning.`,
// // // //     before: ``,
// // // //     after: ``,
// // // //     link: ``,
// // // //   },
// // // //   obj10: {
// // // //     title: `SVD and the Spectral Decomposition`,
// // // //     content: `For a symmetric positive semi-definite matrix $A$ with eigenvalues $\\lambda_1 \\geq \\cdots \\geq \\lambda_n \\geq 0$, the [spectral decomposition](!/linear-algebra/decompositions/spectral) $A = QDQ^T$ is also the SVD: $U = V = Q$ and $\\Sigma = D$. The singular values are the eigenvalues.

// // // // For a general symmetric matrix with some negative eigenvalues, the singular values are $|\\lambda_i|$. The signs are absorbed into $U$ or $V$: if $\\lambda_i < 0$, one of the corresponding singular vectors is negated so that $\\sigma_i = |\\lambda_i| > 0$.

// // // // For non-symmetric or rectangular matrices, the eigendecomposition does not apply (it requires square matrices and may not exist even then), but the SVD always does. The SVD is the correct generalization of the spectral decomposition to the broadest possible class of matrices.`,
// // // //     before: ``,
// // // //     after: ``,
// // // //     link: ``,
// // // //   },
// // // //   obj11: {
// // // //     title: `The Outer Product Form`,
// // // //     content: `The SVD can be written as a sum of rank-one matrices:

// // // // @academic[formula_callout:svd_outer_product_form|SVD Outer Product Form|$$A = \\sum_{i=1}^{r} \\sigma_i \\, \\mathbf{u}_i \\mathbf{v}_i^T$$]@
// // // // @academic[formulas_link:/linear-algebra/formulas#svd_outer_product_form]@

// // // // Each term $\\sigma_i \\mathbf{u}_i\\mathbf{v}_i^T$ is an $m \\times n$ rank-one matrix. The singular value $\\sigma_i$ weights its contribution. The terms are ordered by importance: the first term captures the most of $A$ (in the norm sense), the second captures the most of the remainder, and so on.

// // // // Truncating this sum at $k$ terms gives the best rank-$k$ approximation $A_k$. The fraction of the Frobenius norm captured by the first $k$ terms is $(\\sigma_1^2 + \\cdots + \\sigma_k^2)/(\\sigma_1^2 + \\cdots + \\sigma_r^2)$.

// // // // This outer product perspective is the basis of nearly every matrix approximation method: keep the large singular values (signal) and discard the small ones (noise or redundancy).`,
// // // //     before: ``,
// // // //     after: ``,
// // // //     link: ``,
// // // //   },
// // // //   obj12: {
// // // //     title: `What the SVD Reveals`,
// // // //     content: `No other single factorization provides as much structural information about a matrix.

// // // // The [rank](!/linear-algebra/matrix/rank): the number of nonzero singular values.

// // // // The four [fundamental subspaces](!/linear-algebra/vector-spaces/fundamental-spaces): orthonormal bases from the columns of $U$ and $V$.

// // // // The [pseudoinverse](!/linear-algebra/orthogonality/least-squares): $A^+ = V\\Sigma^+ U^T$.

// // // // The best rank-$k$ approximation: truncate at $k$ terms.

// // // // Norms and the condition number: directly from the singular values.

// // // // The [geometry](!/linear-algebra/transformations/geometric) of the linear map: rotation, scaling, rotation.

// // // // For symmetric matrices, the SVD reduces to the [spectral decomposition](!/linear-algebra/decompositions/spectral). For invertible square matrices, the singular values reveal the conditioning that the [determinant](!/linear-algebra/determinants) alone cannot see (a matrix with $\\det = 1$ can still be poorly conditioned). For rectangular matrices, the SVD is the only factorization that applies without modification.

// // // // The SVD is the culmination of the decomposition hierarchy — the most general, most informative, and most broadly applicable factorization in linear algebra.

// // // // The six structural quantities the SVD exposes — rank, the four fundamental subspaces, the pseudoinverse, the best rank-$k$ approximation, norms and condition number, and the geometric decomposition — collect into a single reference card below.`,
// // // //     before: ``,
// // // //     after: ``,
// // // //     link: ``,
// // // //   },
// // // // }

// // // // const introContent = {
// // // //   title: `The Universal Matrix Factorization`,
// // // //   content: `The singular value decomposition factors any matrix of any shape as UΣVᵀ — two orthogonal matrices sandwiching a diagonal matrix of non-negative singular values. It exists for every matrix, reveals the rank, provides orthonormal bases for all four fundamental subspaces, computes the pseudoinverse, yields the best low-rank approximation, and decomposes every linear transformation into a rotation, a scaling, and another rotation. No other single factorization provides this much information.`,
// // // // }

// // // // const faqQuestions = {
// // // //   obj1: {
// // // //     question: "What is the singular value decomposition?",
// // // //     answer: "The SVD factors any m×n matrix A as A = UΣVᵀ, where U and V are orthogonal matrices of left and right singular vectors, and Σ is diagonal with non-negative singular values. It exists for every matrix regardless of shape, rank, or symmetry.",
// // // //     sectionId: "1"
// // // //   },
// // // //   obj2: {
// // // //     question: "What do singular values represent geometrically?",
// // // //     answer: "Singular values measure how much a matrix stretches vectors along each orthogonal direction. The largest singular value σ₁ is the maximum stretching factor, and the transformation A decomposes geometrically into a rotation (Vᵀ), a coordinate-axis scaling (Σ), and another rotation (U).",
// // // //     sectionId: "2"
// // // //   },
// // // //   obj3: {
// // // //     question: "How does SVD give the best low-rank approximation?",
// // // //     answer: "The Eckart-Young-Mirsky theorem states that truncating the SVD at k terms gives the closest rank-k matrix to A in both operator and Frobenius norms. The approximation error equals σₖ₊₁ in operator norm. This is the basis of image compression and noise reduction.",
// // // //     sectionId: "8"
// // // //   },
// // // //   obj4: {
// // // //     question: "How is the pseudoinverse computed from the SVD?",
// // // //     answer: "The Moore-Penrose pseudoinverse is A⁺ = VΣ⁺Uᵀ, where Σ⁺ reciprocates each nonzero singular value and transposes the shape. For overdetermined systems A⁺b gives the least-squares solution; for rank-deficient systems it gives the minimum-norm least-squares solution.",
// // // //     sectionId: "7"
// // // //   },
// // // //   obj5: {
// // // //     question: "How does SVD reveal the four fundamental subspaces?",
// // // //     answer: "The first r columns of V span the row space, the remaining n−r columns span the null space. The first r columns of U span the column space, the remaining m−r columns span the left null space. No other factorization provides orthonormal bases for all four subspaces simultaneously.",
// // // //     sectionId: "6"
// // // //   },
// // // //   obj6: {
// // // //     question: "What is the condition number of a matrix?",
// // // //     answer: "The condition number κ(A) = σ₁/σᵣ is the ratio of the largest to smallest nonzero singular value. It measures sensitivity to perturbation: a matrix with κ = 10ᵏ loses roughly k digits of accuracy in floating-point computation. Orthogonal matrices have κ = 1; singular matrices have κ = ∞.",
// // // //     sectionId: "9"
// // // //   }
// // // // }


// // // // const schemas = {
// // // //   learningResource: {
// // // //     "@context": "https://schema.org",
// // // //     "@type": "LearningResource",
// // // //     "name": "Singular Value Decomposition (SVD)",
// // // //     "description": "Singular value decomposition A = UΣVᵀ: singular values, geometric interpretation, pseudoinverse, low-rank approximation, four fundamental subspaces, norms, and condition number.",
// // // //     "url": "https://www.learnmathclass.com/linear-algebra/decompositions/svd",
// // // //     "inLanguage": "en-US",
// // // //     "learningResourceType": "Explanation",
// // // //     "educationalLevel": "College",
// // // //     "educationalUse": "Learning",
// // // //     "audience": {
// // // //       "@type": "EducationalAudience",
// // // //       "educationalRole": "student"
// // // //     },
// // // //     "about": {
// // // //       "@type": "Thing",
// // // //       "name": "Singular Value Decomposition"
// // // //     },
// // // //     "teaches": [
// // // //       "SVD factorization A = UΣVᵀ for any matrix",
// // // //       "Geometric interpretation as rotation-scaling-rotation",
// // // //       "Singular values from eigenvalues of AᵀA",
// // // //       "Four fundamental subspaces from U and V",
// // // //       "Moore-Penrose pseudoinverse via SVD",
// // // //       "Best low-rank approximation (Eckart-Young theorem)",
// // // //       "Matrix norms and condition number from singular values",
// // // //       "Outer product form and relationship to spectral decomposition",
// // // //       "Side-by-side comparison of full, thin, and compact SVD forms",
// // // //       "Reference card collecting everything the SVD reveals about a matrix"
// // // //     ],
// // // //     "keywords": keyWords.join(", "),
// // // //     "author": {
// // // //       "@type": "Organization",
// // // //       "name": "Learn Math Class"
// // // //     },
// // // //     "publisher": {
// // // //       "@type": "Organization",
// // // //       "name": "Learn Math Class"
// // // //     },
// // // //     "datePublished": "2024-01-15",
// // // //     "dateModified": new Date().toISOString()
// // // //   },

// // // //   breadcrumb: {
// // // //     "@context": "https://schema.org",
// // // //     "@type": "BreadcrumbList",
// // // //     "itemListElement": [
// // // //       {
// // // //         "@type": "ListItem",
// // // //         "position": 1,
// // // //         "name": "Home",
// // // //         "item": "https://www.learnmathclass.com"
// // // //       },
// // // //       {
// // // //         "@type": "ListItem",
// // // //         "position": 2,
// // // //         "name": "Linear Algebra",
// // // //         "item": "https://www.learnmathclass.com/linear-algebra"
// // // //       },
// // // //       {
// // // //         "@type": "ListItem",
// // // //         "position": 3,
// // // //         "name": "Decompositions",
// // // //         "item": "https://www.learnmathclass.com/linear-algebra/decompositions"
// // // //       },
// // // //       {
// // // //         "@type": "ListItem",
// // // //         "position": 4,
// // // //         "name": "Singular Value Decomposition",
// // // //         "item": "https://www.learnmathclass.com/linear-algebra/decompositions/svd"
// // // //       }
// // // //     ]
// // // //   },

// // // //   faq: {
// // // //     "@context": "https://schema.org",
// // // //     "@type": "FAQPage",
// // // //     "mainEntity": Object.keys(faqQuestions).map(key => ({
// // // //       "@type": "Question",
// // // //       "name": faqQuestions[key].question,
// // // //       "acceptedAnswer": {
// // // //         "@type": "Answer",
// // // //         "text": faqQuestions[key].answer
// // // //       }
// // // //     }))
// // // //   }
// // // // }


// // // //   return {
// // // //   props:{
// // // //     sectionsContent,
// // // //     introContent,
// // // //     svdIntroBeats,
// // // //     svdForms,
// // // //     obj6Table,
// // // //     obj9Table,
// // // //     svdReadings,
// // // //     faqQuestions,
// // // //     schemas,
// // // //     seoData: {
// // // //       title: "SVD: Singular Value Decomposition | Learn Math Class",
// // // //       description: "Singular value decomposition A = UΣVᵀ: singular values, geometric interpretation, pseudoinverse, low-rank approximation, four fundamental subspaces, norms, and condition number.",
// // // //       keywords: keyWords.join(", "),
// // // //       url: "/linear-algebra/decompositions/svd",
// // // //       name: "Singular Value Decomposition (SVD)"
// // // //     },
// // // //   }
// // // // }
// // // //    }

// // // // export default function SVDPage({
// // // //   seoData,
// // // //   sectionsContent,
// // // //   introContent,
// // // //   svdIntroBeats,
// // // //   svdForms,
// // // //   obj6Table,
// // // //   obj9Table,
// // // //   svdReadings,
// // // //   faqQuestions,
// // // //   schemas,
// // // // }) {

// // // //   const tableWrapStyle = { margin: '20px auto', width: '100%' }

// // // //   // Option B subtitle — 17px navy, hairline rule above. Inline, so the global
// // // //   // `##` rule in processContent is left alone.
// // // //   const subtitleStyle = {
// // // //     fontSize: '17px',
// // // //     color: '#06357a',
// // // //     fontWeight: 700,
// // // //     lineHeight: 1.4,
// // // //     margin: '32px 0 12px',
// // // //     paddingTop: '14px',
// // // //     borderTop: '1px solid #e2e6ec',
// // // //   }

// // // //   const figureStyle = {
// // // //     background: '#ffffff',
// // // //     border: '1px solid #e2e6ec',
// // // //     borderRadius: '8px',
// // // //     padding: '18px 16px 8px',
// // // //     margin: '4px auto 14px',
// // // //     width: '100%',
// // // //   }

// // // //   const svgStyle = { display: 'block', margin: '0 auto', maxWidth: '100%' }

// // // //   // ---------- figures for the concept introduction ----------

// // // //   const oneBasisFigure = (
// // // //     <div style={figureStyle}>
// // // //       <svg viewBox="0 0 620 210" width="100%" style={svgStyle}>
// // // //         <defs>
// // // //           <marker id="svdArNavy" markerWidth="9" markerHeight="9" refX="7" refY="3.2" orient="auto">
// // // //             <path d="M0,0 L0,6.4 L7.5,3.2 z" fill="#06357a" />
// // // //           </marker>
// // // //           <marker id="svdArDim" markerWidth="9" markerHeight="9" refX="7" refY="3.2" orient="auto">
// // // //             <path d="M0,0 L0,6.4 L7.5,3.2 z" fill="#8a93a0" />
// // // //           </marker>
// // // //         </defs>
// // // //         <rect x="30" y="24" width="250" height="160" fill="#ffffff" stroke="#e2e6ec" />
// // // //         <text x="155" y="16" fontSize="12.5" fill="#7c8794" textAnchor="middle">one space &mdash; input and output</text>
// // // //         <line x1="60" y1="150" x2="260" y2="150" stroke="#cfd6df" />
// // // //         <line x1="90" y1="40" x2="90" y2="172" stroke="#cfd6df" />
// // // //         <line x1="90" y1="150" x2="170" y2="110" stroke="#06357a" strokeWidth="2" markerEnd="url(#svdArNavy)" />
// // // //         <text x="150" y="103" fontSize="13" fill="#06357a" fontStyle="italic">p&#8321;</text>
// // // //         <line x1="90" y1="150" x2="130" y2="70" stroke="#06357a" strokeWidth="2" markerEnd="url(#svdArNavy)" />
// // // //         <text x="134" y="66" fontSize="13" fill="#06357a" fontStyle="italic">p&#8322;</text>
// // // //         <line x1="90" y1="150" x2="240" y2="75" stroke="#8a93a0" strokeWidth="1.6" strokeDasharray="5,4" markerEnd="url(#svdArDim)" />
// // // //         <text x="215" y="66" fontSize="12.5" fill="#8a93a0" fontStyle="italic">&lambda;&#8321;p&#8321;</text>
// // // //         <text x="155" y="200" fontSize="13" fill="#34495e" textAnchor="middle">the image of p&#8321; is described using p&#8321; itself</text>
// // // //         <text x="330" y="46" fontSize="12.5" fill="#a4243b" fontWeight="bold">Two ways this breaks</text>
// // // //         <line x1="330" y1="62" x2="596" y2="62" stroke="#e2e6ec" />
// // // //         <text x="330" y="84" fontSize="13.5" fill="#34495e">A is 3 &times; 2 &mdash; input and output</text>
// // // //         <text x="330" y="102" fontSize="13.5" fill="#34495e">live in different spaces, so one</text>
// // // //         <text x="330" y="120" fontSize="13.5" fill="#34495e">basis cannot describe both.</text>
// // // //         <text x="596" y="84" fontSize="15" fill="#a4243b" textAnchor="end" fontWeight="bold">&#10007;</text>
// // // //         <line x1="330" y1="134" x2="596" y2="134" stroke="#e2e6ec" />
// // // //         <text x="330" y="156" fontSize="13.5" fill="#34495e">A is square but defective &mdash; every</text>
// // // //         <text x="330" y="174" fontSize="13.5" fill="#34495e">eigenvector is a multiple of (1, 0),</text>
// // // //         <text x="330" y="192" fontSize="13.5" fill="#34495e">so no basis of them exists.</text>
// // // //         <text x="596" y="156" fontSize="15" fill="#a4243b" textAnchor="end" fontWeight="bold">&#10007;</text>
// // // //       </svg>
// // // //     </div>
// // // //   )

// // // //   const twoBasesFigure = (
// // // //     <div style={figureStyle}>
// // // //       <svg viewBox="0 0 660 250" width="100%" style={svgStyle}>
// // // //         <defs>
// // // //           <marker id="svdArV" markerWidth="9" markerHeight="9" refX="7" refY="3.2" orient="auto">
// // // //             <path d="M0,0 L0,6.4 L7.5,3.2 z" fill="#1f6f8b" />
// // // //           </marker>
// // // //           <marker id="svdArU" markerWidth="9" markerHeight="9" refX="7" refY="3.2" orient="auto">
// // // //             <path d="M0,0 L0,6.4 L7.5,3.2 z" fill="#b8860b" />
// // // //           </marker>
// // // //           <marker id="svdArBig" markerWidth="11" markerHeight="11" refX="8" refY="4" orient="auto">
// // // //             <path d="M0,0 L0,8 L9,4 z" fill="#06357a" />
// // // //           </marker>
// // // //         </defs>
// // // //         <text x="140" y="26" fontSize="12.5" fill="#7c8794" textAnchor="middle">input space &#8477;&#8319;</text>
// // // //         <line x1="40" y1="130" x2="240" y2="130" stroke="#cfd6df" />
// // // //         <line x1="140" y1="40" x2="140" y2="220" stroke="#cfd6df" />
// // // //         <circle cx="140" cy="130" r="58" fill="#eef2f8" stroke="#06357a" strokeWidth="1.6" />
// // // //         <line x1="140" y1="130" x2="195" y2="112" stroke="#1f6f8b" strokeWidth="2.4" markerEnd="url(#svdArV)" />
// // // //         <text x="200" y="106" fontSize="13.5" fill="#1f6f8b" fontWeight="bold">v&#8321;</text>
// // // //         <line x1="140" y1="130" x2="158" y2="75" stroke="#1f6f8b" strokeWidth="2.4" markerEnd="url(#svdArV)" />
// // // //         <text x="162" y="70" fontSize="13.5" fill="#1f6f8b" fontWeight="bold">v&#8322;</text>
// // // //         <text x="140" y="238" fontSize="13" fill="#34495e" textAnchor="middle">unit circle, orthonormal basis</text>
// // // //         <line x1="262" y1="130" x2="368" y2="130" stroke="#06357a" strokeWidth="2" markerEnd="url(#svdArBig)" />
// // // //         <text x="315" y="120" fontSize="15" fill="#06357a" textAnchor="middle" fontStyle="italic">A</text>
// // // //         <text x="315" y="154" fontSize="14" fill="#06357a" textAnchor="middle" fontWeight="bold">Av&#7522; = &sigma;&#7522;u&#7522;</text>
// // // //         <text x="500" y="26" fontSize="12.5" fill="#7c8794" textAnchor="middle">output space &#8477;&#7504;</text>
// // // //         <line x1="380" y1="130" x2="630" y2="130" stroke="#cfd6df" />
// // // //         <line x1="500" y1="40" x2="500" y2="220" stroke="#cfd6df" />
// // // //         <ellipse cx="500" cy="130" rx="105" ry="40" fill="#fbf6e8" stroke="#b8860b" strokeWidth="1.6" transform="rotate(-18 500 130)" />
// // // //         <line x1="500" y1="130" x2="600" y2="98" stroke="#b8860b" strokeWidth="2.6" markerEnd="url(#svdArU)" />
// // // //         <text x="586" y="88" fontSize="13.5" fill="#b8860b" fontWeight="bold">&sigma;&#8321;u&#8321;</text>
// // // //         <line x1="500" y1="130" x2="512" y2="92" stroke="#b8860b" strokeWidth="2.6" markerEnd="url(#svdArU)" />
// // // //         <text x="516" y="86" fontSize="13.5" fill="#b8860b" fontWeight="bold">&sigma;&#8322;u&#8322;</text>
// // // //         <text x="500" y="238" fontSize="13" fill="#34495e" textAnchor="middle">ellipse, axes &sigma;&#8321; and &sigma;&#8322; along a different orthonormal basis</text>
// // // //       </svg>
// // // //     </div>
// // // //   )

// // // //   // Attach the figures to the instance beats that carry them.
// // // //   const withVisual = (beats, id, visual) =>
// // // //     beats.map(beat => (beat.id === id ? { ...beat, visual } : beat))

// // // //   const introOpening  = { beats: svdIntroBeats.opening }
// // // //   const introDemand   = { beats: withVisual(svdIntroBeats.demand, 'two-failures', oneBasisFigure) }
// // // //   const introDropping = { beats: withVisual(svdIntroBeats.dropping, 'circle-ellipse', twoBasesFigure) }
// // // //   const introLedger   = { beats: svdIntroBeats.ledger }

// // // //   const genericSections=[
// // // //     {
// // // //         id:'1',
// // // //         title:sectionsContent.obj1.title,
// // // //         link:sectionsContent.obj1.link,
// // // //         content:[
// // // //           <ConceptIntro key={'obj1-opening'} variant="flat" data={introOpening} />,
// // // //           <h3 key={'obj1-sub1'} style={subtitleStyle}>Why One Basis Is Not Enough</h3>,
// // // //           <ConceptIntro key={'obj1-demand'} variant="flat" data={introDemand} />,
// // // //           <h3 key={'obj1-sub2'} style={subtitleStyle}>Dropping the Requirement</h3>,
// // // //           <ConceptIntro key={'obj1-dropping'} variant="flat" data={introDropping} />,
// // // //           <h3 key={'obj1-sub3'} style={subtitleStyle}>What It Buys and What It Costs</h3>,
// // // //           <ConceptIntro key={'obj1-ledger'} variant="flat" data={introLedger} />,
// // // //         ]
// // // //     },
// // // //     {
// // // //         id:'2',
// // // //         title:sectionsContent.obj2.title,
// // // //         link:sectionsContent.obj2.link,
// // // //         content:[
// // // //           sectionsContent.obj2.content,
// // // //         ]
// // // //     },
// // // //     {
// // // //         id:'3',
// // // //         title:sectionsContent.obj3.title,
// // // //         link:sectionsContent.obj3.link,
// // // //         content:[
// // // //           sectionsContent.obj3.content,
// // // //         ]
// // // //     },
// // // //     {
// // // //         id:'4',
// // // //         title:sectionsContent.obj4.title,
// // // //         link:sectionsContent.obj4.link,
// // // //         content:[
// // // //           sectionsContent.obj4.content,
// // // //         ]
// // // //     },
// // // //     {
// // // //         id:'5',
// // // //         title:sectionsContent.obj5.title,
// // // //         link:sectionsContent.obj5.link,
// // // //         content:[
// // // //           sectionsContent.obj5.content,
// // // //           <DiagramFrame
// // // //             key={'obj5-diagram'}
// // // //             id="svd-forms"
// // // //             title="Three forms, one factorization"
// // // //             source="/linear-algebra/decompositions/svd"
// // // //           >
// // // //             <ObjectTypeProfile data={svdForms} theme="navy" variant="stack" />
// // // //           </DiagramFrame>,
// // // //           `The distinction to keep hold of is that none of these is an approximation. Each drops columns that multiply against zero singular values, so the product is unchanged and $A$ is reconstructed exactly in all three. What is lost is not accuracy but the orthogonality of $U$ as a square matrix — $U_r^{\\mathsf{T}}U_r = I_r$ still holds, but $U_rU_r^{\\mathsf{T}}$ no longer does, and any argument relying on the left null space needs the full form.`,
// // // //         ]
// // // //     },
// // // //     {
// // // //         id:'6',
// // // //         title:sectionsContent.obj6.title,
// // // //         link:sectionsContent.obj6.link,
// // // //         content:[
// // // //           sectionsContent.obj6.content,
// // // //           <div key={'obj6-table'} style={tableWrapStyle}
// // // //                dangerouslySetInnerHTML={{ __html: obj6Table }} />,
// // // //         ]
// // // //     },
// // // //     {
// // // //         id:'7',
// // // //         title:sectionsContent.obj7.title,
// // // //         link:sectionsContent.obj7.link,
// // // //         content:[
// // // //           sectionsContent.obj7.content,
// // // //         ]
// // // //     },
// // // //     {
// // // //         id:'8',
// // // //         title:sectionsContent.obj8.title,
// // // //         link:sectionsContent.obj8.link,
// // // //         content:[
// // // //           sectionsContent.obj8.content,
// // // //         ]
// // // //     },
// // // //     {
// // // //         id:'9',
// // // //         title:sectionsContent.obj9.title,
// // // //         link:sectionsContent.obj9.link,
// // // //         content:[
// // // //           sectionsContent.obj9.content,
// // // //           <div key={'obj9-table'} style={tableWrapStyle}
// // // //                dangerouslySetInnerHTML={{ __html: obj9Table }} />,
// // // //         ]
// // // //     },
// // // //     {
// // // //         id:'10',
// // // //         title:sectionsContent.obj10.title,
// // // //         link:sectionsContent.obj10.link,
// // // //         content:[
// // // //           sectionsContent.obj10.content,
// // // //         ]
// // // //     },
// // // //     {
// // // //         id:'11',
// // // //         title:sectionsContent.obj11.title,
// // // //         link:sectionsContent.obj11.link,
// // // //         content:[
// // // //           sectionsContent.obj11.content,
// // // //         ]
// // // //     },
// // // //     {
// // // //         id:'12',
// // // //         title:sectionsContent.obj12.title,
// // // //         link:sectionsContent.obj12.link,
// // // //         content:[
// // // //           sectionsContent.obj12.content,
// // // //           `Grouping these by which factor supplies the answer is what makes them one computation rather than seven. Three come from the singular values alone, two from the columns of the orthogonal factors, and two require reading all three factors together. Nothing below needs the matrix again once the factorization is in hand.`,
// // // //           <DiagramFrame
// // // //             key={'obj12-diagram'}
// // // //             id="svd-readings"
// // // //             title="What the SVD reveals"
// // // //             source="/linear-algebra/decompositions/svd"
// // // //           >
// // // //             <IdentitySheet data={svdReadings} theme="navy" variant="ledger" />
// // // //           </DiagramFrame>,
// // // //           `Two of these deserve emphasis because nothing else supplies them. The **condition number** measures how badly a system amplifies error, and it is invisible to the determinant — a matrix can have determinant one and still be nearly singular in some direction. **Low-rank approximation** is optimal rather than merely reasonable: truncating the sum at $k$ terms gives the closest rank-$k$ matrix in every unitarily invariant norm, with error exactly $\\sigma_{k+1}$.`,
// // // //           `The reason all of this comes from one factorization is that the SVD asks nothing of the matrix. It need not be square, invertible, symmetric or full rank — the factorization exists regardless, which is what separates it from every other decomposition in this section and why it is the one to reach for when the matrix is unknown.`,
// // // //         ]
// // // //     },

// // // // ]

// // // //   return (
// // // //    <>

// // // // <Head>
// // // //   <title>{seoData.title}</title>
// // // //   <meta name="description" content={seoData.description} />
// // // //   <meta name="keywords" content={seoData.keywords} />
// // // //   <link rel="canonical" href={`https://www.learnmathclass.com${seoData.url}`} />

// // // //   <meta property="og:title" content={seoData.title} />
// // // //   <meta property="og:description" content={seoData.description} />
// // // //   <meta property="og:url" content={`https://www.learnmathclass.com${seoData.url}`} />
// // // //   <meta property="og:type" content="article" />
// // // //   <meta property="og:site_name" content="Learn Math Class" />

// // // //   <meta name="twitter:card" content="summary" />
// // // //   <meta name="twitter:title" content={seoData.title} />
// // // //   <meta name="twitter:description" content={seoData.description} />

// // // //   <meta name="robots" content="index, follow" />

// // // //   <script
// // // //     type="application/ld+json"
// // // //     dangerouslySetInnerHTML={{
// // // //       __html: JSON.stringify(schemas.learningResource)
// // // //     }}
// // // //   />

// // // //   <script
// // // //     type="application/ld+json"
// // // //     dangerouslySetInnerHTML={{
// // // //       __html: JSON.stringify(schemas.breadcrumb)
// // // //     }}
// // // //   />

// // // //   <script
// // // //     type="application/ld+json"
// // // //     dangerouslySetInnerHTML={{
// // // //       __html: JSON.stringify(schemas.faq)
// // // //     }}
// // // //   />
// // // // </Head>
// // // //    <br/>
// // // //    <br/>
// // // //    <br/>
// // // //    <br/>
// // // //     <OperaSidebar
// // // //            side='right'
// // // //            sidebarWidth='45px'
// // // //            panelWidth='200px'
// // // //            iconColor='white'
// // // //            panelBackgroundColor='#f2f2f2'
// // // //          />
// // // //    <Breadcrumb/>
// // // //    <br/>
// // // //    <br/>
// // // //    <h1 className='title' style={{marginTop:'0px',marginBottom:'10px'}}>SVD Decompositions</h1>
// // // //    <br/>
// // // //    <br/>
// // // //    <SectionTableOfContents sections={genericSections}
// // // //     showSecondaryNav={true}
// // // //          secondaryNavMode="siblings"
// // // //          secondaryNavTitle="More in this Section"

// // // //    />
// // // //    <br/>
// // // //    <br/>
// // // //    <br/>
// // // //     <IntroSection
// // // //           id={introContent.id}
// // // //           title={introContent.title}
// // // //           content={introContent.content}
// // // //            backgroundColor='#f9fafb'
// // // //           textColor="#06357a"
// // // //         />
// // // //    <br/>
// // // //    <br/>
// // // //    <Sections sections={genericSections}/>
// // // //    <br/>
// // // //    <br/>
// // // //    <br/>
// // // //    </>
// // // //   )
// // // // }


// // // // tables-optimized: v4 | 2026-05-18 | 4 tables (obj5 comparison, obj6 aggregation, obj9 aggregation, obj12 summary capstone)
// // // // intro-rewritten: v5 | obj1 = one ConceptIntro call, ordered block array
// // // import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
// // // import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
// // // import IntroSection from '@/app/components/page-components/section/IntroContentSection'
// // // import Sections from '@/app/components/page-components/section/Sections'
// // // import SectionTableOfContents from '@/app/components/page-components/section/SectionTableofContents'
// // // import React from 'react'
// // // import '../../../pages.css'
// // // import Head from 'next/head'
// // // import KeyTermsCard from '@/app/components/page-components/KeyTermsCard'
// // // import { tableHeaders } from '@/app/styles/theme'
// // // import IdentitySheet from '@/app/components/infographics/linear-algebra/IdentitySheet'
// // // import ObjectTypeProfile from '@/app/components/infographics/linear-algebra/ObjectTypeProfile'
// // // import DiagramFrame from '@/app/components/infographics/DiagramsFrame'
// // // import ConceptIntro from '@/app/components/page-components/content-components/ConceptIntro'


// // // export async function getStaticProps(){
// // // const keyWords = [
// // //   "singular value decomposition",
// // //   "SVD",
// // //   "singular values",
// // //   "left right singular vectors",
// // //   "low-rank approximation",
// // //   "pseudoinverse SVD",
// // //   "Moore-Penrose pseudoinverse",
// // //   "Eckart-Young theorem",
// // //   "matrix rank SVD",
// // //   "condition number singular values",
// // //   "four fundamental subspaces SVD",
// // //   "compact SVD thin SVD",
// // //   "SVD image compression",
// // //   "operator norm Frobenius norm",
// // //   "UΣVᵀ factorization"
// // // ]

// // //   const linkStyle = 'color: inherit; text-decoration: underline;'

// // //   // ---------- obj1 · concept introduction ----------
// // //   // One ordered array. Visual elements are attached in the page component,
// // //   // keyed by block id, since React elements cannot serialize through props.

// // //   const obj1Blocks = [
// // //     {
// // //       id: 'the-problem',
// // //       type: 'text',
// // //       content: `A matrix mixes coordinates. Every entry of the output is built out of every entry of the input, which means that almost nothing worth knowing about $A$ is visible in $A$ itself. What is $A^{10}$? Multiply ten times and see. What happens to a vector pushed through $A$ a thousand times — does it grow, shrink, settle into some direction? There is no answer short of running it.`,
// // //     },
// // //     {
// // //       id: 'the-response',
// // //       type: 'text',
// // //       content: `Factorization is the response to that. Break $A$ into pieces that each do one simple thing, and questions that needed arithmetic can be answered by looking instead.`,
// // //     },
// // //     {
// // //       id: 'sub-buys',
// // //       type: 'subtitle',
// // //       text: `What Diagonalization Buys`,
// // //     },
// // //     {
// // //       id: 'incumbent',
// // //       type: 'text',
// // //       content: `[Diagonalization](!/linear-algebra/eigen/diagonalization) does exactly that, and does it well. Writing $A = PDP^{-1}$ says: change coordinates, and the mixing is gone. The columns of $P$ are directions the matrix only stretches, $D$ holds the stretching factors, and in that basis nothing bleeds into anything else.`,
// // //     },
// // //     {
// // //       id: 'cheap-questions',
// // //       type: 'instance',
// // //       lead: `Every question above becomes cheap.`,
// // //       content: `The tenth power is $A^{10} = PD^{10}P^{-1}$, and $D^{10}$ is a handful of numbers raised to the tenth. The inverse is $PD^{-1}P^{-1}$, with no elimination anywhere. Long-run behaviour is whichever $\\lambda$ is largest, read off by eye. Nothing is approximated and nothing is computed twice — the work was done once, when the factorization was found.`,
// // //     },
// // //     {
// // //       id: 'the-debt',
// // //       type: 'text',
// // //       content: `A second factorization aiming at the same job therefore owes an explanation, and the explanation cannot be that diagonalization gives wrong answers. It does not. The trouble is that it is usually unavailable.`,
// // //     },
// // //     {
// // //       id: 'sub-one-basis',
// // //       type: 'subtitle',
// // //       text: `Why One Basis Is Not Enough`,
// // //     },
// // //     {
// // //       id: 'the-demand',
// // //       type: 'text',
// // //       content: `The same matrix $P$ appears on both sides of $A = PDP^{-1}$. Its columns are used to read the input and again to write the output, so the factorization insists that both ends be described in identical terms. That demand is far stronger than it looks, and most matrices cannot meet it.`,
// // //     },
// // //     {
// // //       id: 'two-failures',
// // //       type: 'instance',
// // //       lead: `Two matrices, two ways it fails.`,
// // //       content: `A $3 \\times 2$ matrix takes vectors from $\\mathbb{R}^2$ and returns vectors in $\\mathbb{R}^3$, so no single basis can serve both ends, and the question of an [eigenvector](!/linear-algebra/eigen) cannot even be posed, since $A\\mathbf{v} = \\lambda\\mathbf{v}$ compares vectors living in different spaces. A defective matrix fails differently: it is square, but every eigenvector is a multiple of one direction, so there is no basis of eigenvectors from which to build $P$. Rectangular shape rules diagonalization out in principle, defective structure rules it out in practice, and between them they account for most matrices anyone meets.`,
// // //     },
// // //     {
// // //       id: 'sub-dropping',
// // //       type: 'subtitle',
// // //       text: `Dropping the Requirement`,
// // //     },
// // //     {
// // //       id: 'the-drop',
// // //       type: 'text',
// // //       content: `Only one thing was ever asked for beyond necessity: that the two bases be the same one. Drop it. Allow one orthonormal basis for the input space and a different one for the output space, and ask only that the matrix carry the first to the second with a scaling in between. Nothing there requires the two spaces to have equal dimension, and nothing requires the matrix to fix any direction at all. Both obstructions disappear at once.`,
// // //     },
// // //     {
// // //       id: 'circle-ellipse',
// // //       type: 'instance',
// // //       caption: `The circle becomes an ellipse. Each $\\mathbf{v}_i$ is carried to a multiple of $\\mathbf{u}_i$, and $\\sigma_i$ is that multiple.`,
// // //       content: `That picture is the whole factorization in one equation. There is an orthonormal basis $\\mathbf{v}_1, \\dots, \\mathbf{v}_n$ of the input space and an orthonormal basis $\\mathbf{u}_1, \\dots, \\mathbf{u}_m$ of the output space with $A\\mathbf{v}_i = \\sigma_i \\mathbf{u}_i$ for every $i$. Each input basis vector is sent to a multiple of one output basis vector, and nothing else.`,
// // //     },
// // //     {
// // //       id: 'definition',
// // //       type: 'definition',
// // //       kicker: 'The definition',
// // //       statement: `Collecting those $n$ statements into a single matrix equation gives the [singular value decomposition](!/linear-algebra/definitions#singular_value): an orthonormal input basis in $V$, an orthonormal output basis in $U$, and the scaling factors between them along the diagonal of $\\Sigma$.`,
// // //       formula: `@academic[formula_callout:svd|SVD|$$A = U\\Sigma V^T$$]@
// // // @academic[formulas_link:/linear-algebra/formulas#svd]@`,
// // //       gloss: `It is a factorization, not an approximation: the three matrices multiply back to $A$ exactly, with no error term and no conditions attached.`,
// // //       kindOfThing: `$U$ is $m \\times m$ [orthogonal](!/linear-algebra/matrix/types) and its columns are the left singular vectors. $V$ is $n \\times n$ orthogonal and its columns are the right singular vectors. $\\Sigma$ is $m \\times n$, zero everywhere off the diagonal, carrying $\\sigma_1 \\geq \\sigma_2 \\geq \\cdots \\geq 0$ along it. Those are the singular values, and they are the lengths of the semi-axes of the ellipse above.`,
// // //     },
// // //     {
// // //       id: 'sub-buys-costs',
// // //       type: 'subtitle',
// // //       text: `What It Buys and What It Costs`,
// // //     },
// // //     {
// // //       id: 'free',
// // //       type: 'text',
// // //       content: `Several things arrive without being asked for. Both bases come out orthonormal rather than merely independent, so $U^{-1} = U^T$ and $V^{-1} = V^T$ and neither factor ever has to be inverted. The scaling factors come out real and non-negative, because they measure lengths, and can therefore be ordered largest to smallest — which no set of [eigenvalues](!/linear-algebra/eigen) can be, since eigenvalues may be complex. And the factorization exists for every matrix without exception: any shape, any [rank](!/linear-algebra/matrix/rank), [symmetric](!/linear-algebra/matrix/types) or not, [invertible](!/linear-algebra/matrix/inverse) or not.`,
// // //     },
// // //     {
// // //       id: 'price',
// // //       type: 'text',
// // //       content: `All of it follows from the single decision to stop insisting on one basis, and that decision has a price. Because $U$ and $V$ are different, they do not cancel when the matrix is applied twice: $A^2 = U\\Sigma V^TU\\Sigma V^T$, and the inner $V^TU$ simplifies to nothing. So the very question this section opened with — the tenth power, the long run — is the one question the singular value decomposition cannot answer and diagonalization can. The two are not rivals but answers to different questions: one about invariant directions, the other about stretching. What the three factors do to a vector geometrically is the subject of the next section.`,
// // //     },
// // //   ]

// // //   // ---------- TABLES ----------

// // //   // obj5 — three storage forms of one factorization
// // //   const svdForms = {
// // //     kicker: 'Decompositions \u00B7 SVD',
// // //     title: 'Three forms, one factorization',
// // //     tallyLabel: 'forms',
// // //     intro: 'All three reconstruct $A$ exactly. They differ in how much of $U$ and $\\Sigma$ is kept \u2014 and what is dropped is precisely the part that multiplies against zero singular values.',
// // //     footnote: 'Nothing is approximated anywhere in this table. The full form carries orthonormal bases for all four [fundamental subspaces](!/linear-algebra/vector-spaces/fundamental-spaces), which is why it is the one to state theorems with; the compact form carries only what contributes to $A$, which is why it is the one to store. Approximation begins only when the compact form is truncated below rank $r$.',
// // //     slots: [
// // //       { key: 'shapes',  label: 'shapes' },
// // //       { key: 'stored',  label: 'what is kept' },
// // //       { key: 'dropped', label: 'what is dropped' },
// // //       { key: 'usedFor', label: 'used for' },
// // //     ],
// // //     groups: [
// // //       {
// // //         heading: 'Everything kept',
// // //         types: [
// // //           {
// // //             name: 'Full SVD',
// // //             anchor: '#1',
// // //             shape: 'dense',
// // //             condition: '$U$ and $V$ both square and orthogonal',
// // //             properties: {
// // //               shapes: '$U: m \\times m$, $\\Sigma: m \\times n$, $V: n \\times n$',
// // //               stored: 'all of $U$, $V$, and a rectangular $\\Sigma$',
// // //               dropped: 'nothing',
// // //               usedFor: 'theory, the four subspaces',
// // //             },
// // //             note: 'The only form where $U$ and $V$ are genuinely orthogonal matrices, so $UU^{\\mathsf{T}} = I$ as well as $U^{\\mathsf{T}}U = I$. That is what makes it the form to state results with \u2014 the last $m - r$ columns of $U$ span the left null space and would otherwise be gone.',
// // //           },
// // //         ],
// // //       },
// // //       {
// // //         heading: 'Trimmed to what multiplies',
// // //         types: [
// // //           {
// // //             name: 'Thin SVD',
// // //             anchor: '#5',
// // //             shape: 'lower',
// // //             condition: '$m > n$ \u2014 keep $n$ columns of $U$',
// // //             properties: {
// // //               shapes: '$U_n: m \\times n$, $\\Sigma_n: n \\times n$, $V: n \\times n$',
// // //               stored: 'the first $n$ columns of $U$',
// // //               dropped: 'the last $m - n$ columns of $U$',
// // //               usedFor: 'least squares on tall matrices',
// // //             },
// // //             note: 'The dropped columns multiply rows of $\\Sigma$ that are entirely zero, so removing them changes nothing about the product. Note $U_n$ is no longer square: $U_n^{\\mathsf{T}}U_n = I_n$ still holds, but $U_nU_n^{\\mathsf{T}}$ does not.',
// // //           },
// // //           {
// // //             name: 'Compact SVD',
// // //             anchor: '#5',
// // //             shape: 'block',
// // //             condition: 'keep only the $r$ nonzero singular values',
// // //             properties: {
// // //               shapes: '$U_r: m \\times r$, $\\Sigma_r: r \\times r$, $V_r: n \\times r$',
// // //               stored: 'the rank-$r$ content only',
// // //               dropped: 'every zero singular value and its vectors',
// // //               usedFor: 'storage, rank-deficient matrices',
// // //             },
// // //             note: 'The most economical exact form: $\\Sigma_r$ is square with a strictly positive diagonal, so it is invertible \u2014 which is what makes the [pseudoinverse](#7) computable as $V_r\\Sigma_r^{-1}U_r^{\\mathsf{T}}$.',
// // //           },
// // //         ],
// // //       },
// // //     ],
// // //   }

// // //   // obj6 — aggregation: four fundamental subspaces from the SVD
// // //   const obj6Table = `
// // // <table class="styled-table" style="border-collapse: collapse; width: 75%;margin:auto; background: white; box-shadow: 0 2px 10px rgba(0,0,0,0.1); border-radius: 8px; overflow: hidden; font-family: Arial, sans-serif;">
// // //   <thead>
// // //     <tr>
// // //       <th style="${tableHeaders.aggregation}">Fundamental subspace</th>
// // //       <th style="${tableHeaders.aggregation} text-align: center;">Basis from</th>
// // //       <th style="${tableHeaders.aggregation} text-align: center;">Column indices</th>
// // //       <th style="${tableHeaders.aggregation} text-align: center;">Dimension</th>
// // //     </tr>
// // //   </thead>
// // //   <tbody>
// // //     <tr style="background: #f8f9fa;">
// // //       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Row space of A</td>
// // //       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e; text-align: center;">V</td>
// // //       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e; text-align: center;">1, ..., r</td>
// // //       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e; text-align: center;">r</td>
// // //     </tr>
// // //     <tr>
// // //       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Null space of A</td>
// // //       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e; text-align: center;">V</td>
// // //       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e; text-align: center;">r+1, ..., n</td>
// // //       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e; text-align: center;">n − r</td>
// // //     </tr>
// // //     <tr style="background: #f8f9fa;">
// // //       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Column space of A</td>
// // //       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e; text-align: center;">U</td>
// // //       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e; text-align: center;">1, ..., r</td>
// // //       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e; text-align: center;">r</td>
// // //     </tr>
// // //     <tr>
// // //       <td style="padding: 12px 15px; font-weight: bold; color: #06357a;">Left null space of A</td>
// // //       <td style="padding: 12px 15px; color: #34495e; text-align: center;">U</td>
// // //       <td style="padding: 12px 15px; color: #34495e; text-align: center;">r+1, ..., m</td>
// // //       <td style="padding: 12px 15px; color: #34495e; text-align: center;">m − r</td>
// // //     </tr>
// // //   </tbody>
// // // </table>
// // // `

// // //   // obj9 — aggregation: norms and condition number from singular values
// // //   const obj9Table = `
// // // <table class="styled-table" style="border-collapse: collapse; width: 75%;margin:auto; background: white; box-shadow: 0 2px 10px rgba(0,0,0,0.1); border-radius: 8px; overflow: hidden; font-family: Arial, sans-serif;">
// // //   <thead>
// // //     <tr>
// // //       <th style="${tableHeaders.aggregation}">Quantity</th>
// // //       <th style="${tableHeaders.aggregation}">Formula via singular values</th>
// // //       <th style="${tableHeaders.aggregation}">Interpretation</th>
// // //     </tr>
// // //   </thead>
// // //   <tbody>
// // //     <tr style="background: #f8f9fa;">
// // //       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Operator (spectral) norm ‖A‖<sub>2</sub></td>
// // //       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">σ<sub>1</sub></td>
// // //       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">maximum stretching factor on the unit ball</td>
// // //     </tr>
// // //     <tr>
// // //       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;"><a href="/linear-algebra/matrix/trace" style="${linkStyle}">Frobenius norm</a> ‖A‖<sub>F</sub></td>
// // //       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">√(σ<sub>1</sub><sup>2</sup> + σ<sub>2</sub><sup>2</sup> + ··· + σ<sub>r</sub><sup>2</sup>)</td>
// // //       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">total "energy" — root-sum-of-squares of singular values</td>
// // //     </tr>
// // //     <tr style="background: #f8f9fa;">
// // //       <td style="padding: 12px 15px; font-weight: bold; color: #06357a;">Condition number κ(A)</td>
// // //       <td style="padding: 12px 15px; color: #34495e;">σ<sub>1</sub> / σ<sub>r</sub></td>
// // //       <td style="padding: 12px 15px; color: #34495e;">sensitivity to perturbation: κ = 10<sup>k</sup> loses ~k digits</td>
// // //     </tr>
// // //   </tbody>
// // // </table>
// // // `

// // //   // obj12 — what one factorization yields, sorted by which factor carries it
// // //   const svdReadings = {
// // //     kicker: 'Decompositions \u00B7 SVD',
// // //     title: 'What the SVD reveals',
// // //     tallyLabel: 'readings',
// // //     intro: 'Every entry comes from the same three factors. What changes is which one is being read \u2014 the singular values for size, the columns of $U$ and $V$ for structure, and all three together for geometry.',
// // //     footnote: 'No other factorization answers this many questions, and none exists for every matrix. That combination is why the SVD is the one to reach for when the matrix is rectangular, rank-deficient, or simply unknown \u2014 the conditions the [other decompositions](!/linear-algebra/decompositions) require are exactly the ones it does without.',
// // //     groups: [
// // //       {
// // //         heading: 'From the singular values',
// // //         identities: [
// // //           {
// // //             name: 'Rank',
// // //             anchor: '#3',
// // //             formula: '$r = $ count of $\\sigma_i > 0$',
// // //             condition: 'strictly positive only',
// // //             note: 'The most numerically reliable rank there is. Row reduction decides rank by comparing entries against zero, which floating point makes arbitrary; the singular values instead show a gap, and where that gap falls is a judgement the numbers themselves support.',
// // //           },
// // //           {
// // //             name: 'Norms',
// // //             anchor: '#9',
// // //             formula: '$\\|A\\|_2 = \\sigma_1, \\quad \\|A\\|_F^2 = \\textstyle\\sum \\sigma_i^2$',
// // //             condition: 'read straight off the list',
// // //             note: 'The largest singular value is the most any unit vector is stretched. The Frobenius norm is the whole list in quadrature \u2014 so both common matrix norms are functions of the same numbers.',
// // //           },
// // //           {
// // //             name: 'Condition number',
// // //             anchor: '#9',
// // //             formula: '$\\kappa(A) = \\sigma_1 / \\sigma_r$',
// // //             condition: '$A$ of full rank',
// // //             strict: true,
// // //             note: 'The ratio of most to least stretched. A large $\\kappa$ means the matrix is nearly singular in some direction, and small changes to $\\mathbf{b}$ produce large changes to the solution \u2014 which no determinant reports, since a matrix can have $\\det = 1$ and be badly conditioned.',
// // //           },
// // //         ],
// // //       },
// // //       {
// // //         heading: 'From the columns of U and V',
// // //         identities: [
// // //           {
// // //             name: 'The four subspaces',
// // //             anchor: '#6',
// // //             formula: 'partition $U$ and $V$ at index $r$',
// // //             condition: 'orthonormal bases, all four at once',
// // //             key: true,
// // //             note: 'First $r$ columns of $V$ span the row space and the rest the null space; first $r$ of $U$ span the column space and the rest the left null space. The only method giving [all four](!/linear-algebra/vector-spaces/fundamental-spaces) orthonormally from one computation.',
// // //           },
// // //           {
// // //             name: 'Pseudoinverse',
// // //             anchor: '#7',
// // //             formula: '$A^{+} = V\\Sigma^{+}U^{\\mathsf{T}}$',
// // //             condition: 'reciprocate the nonzero $\\sigma$, leave zeros alone',
// // //             note: 'Defined for every matrix, square or not, invertible or not. When $A$ is invertible it coincides with $A^{-1}$; otherwise it returns the least-squares solution of minimum norm, which is the sense in which it is the closest thing to an [inverse](!/linear-algebra/matrix/inverse).',
// // //           },
// // //         ],
// // //       },
// // //       {
// // //         heading: 'From all three factors',
// // //         identities: [
// // //           {
// // //             name: 'Low-rank approximation',
// // //             anchor: '#8',
// // //             formula: '$A_k = \\sum_{i=1}^{k} \\sigma_i \\mathbf{u}_i \\mathbf{v}_i^{\\mathsf{T}}$',
// // //             condition: 'optimal for every unitarily invariant norm',
// // //             key: true,
// // //             note: 'Truncating the outer-product sum gives the best rank-$k$ approximation there is \u2014 the Eckart\u2013Young theorem, and it is why the SVD underlies image compression and principal component analysis. The error is exactly $\\sigma_{k+1}$, so the singular values say in advance how much is lost.',
// // //           },
// // //           {
// // //             name: 'Geometric action',
// // //             anchor: '#2',
// // //             formula: '$A = U\\Sigma V^{\\mathsf{T}}$ \u2014 rotate, stretch, rotate',
// // //             condition: 'every matrix, no hypotheses',
// // //             note: 'Read right to left: $V^{\\mathsf{T}}$ rotates, $\\Sigma$ scales along axes, $U$ rotates again. Every linear map is those three steps, which is the claim that makes the factorization worth having as geometry rather than only as algebra.',
// // //           },
// // //         ],
// // //       },
// // //     ],
// // //   }

// // // const sectionsContent = {
// // //   obj1: {
// // //     title: `One Basis or Two`,
// // //     content: ``,
// // //     before: ``,
// // //     after: ``,
// // //     link: ``,
// // //   },
// // //   obj2: {
// // //     title: `The Geometric Interpretation`,
// // //     content: `Every [linear transformation](!/linear-algebra/transformations) $\\mathbf{x} \\mapsto A\\mathbf{x}$ decomposes into three geometric steps:

// // // $V^T$ rotates (or reflects) the input space, aligning the input with the "natural axes" of the transformation — the directions along which $A$ stretches most and least.

// // // $\\Sigma$ scales each axis independently by the corresponding singular value. Axes with $\\sigma_i = 0$ are annihilated — those directions are collapsed to zero.

// // // $U$ rotates (or reflects) the scaled result into the output space.

// // // The singular values measure the stretching in each orthogonal direction. $\\sigma_1$ is the maximum stretching: $\\sigma_1 = \\max_{\\|\\mathbf{x}\\|=1}\\|A\\mathbf{x}\\|$. The smallest nonzero singular value $\\sigma_r$ is the minimum stretching on the [row space](!/linear-algebra/vector-spaces/fundamental-spaces). The ratio $\\sigma_1/\\sigma_r$ is the condition number — it measures how distorted the transformation is.

// // // Even the most complex-looking matrix is geometrically just two rotations sandwiching a coordinate-axis scaling.`,
// // //     before: ``,
// // //     after: ``,
// // //     link: ``,
// // //   },
// // //   obj3: {
// // //     title: `Singular Values`,
// // //     content: `The singular values of $A$ are the square roots of the [eigenvalues](!/linear-algebra/eigen) of $A^TA$ (or equivalently $AA^T$):

// // // @academic[formula_callout:singular_values|Singular Values|$$\\sigma_i = \\sqrt{\\lambda_i(A^TA)} = \\sqrt{\\lambda_i(AA^T)}$$]@
// // // @academic[formulas_link:/linear-algebra/formulas#singular_values]@

// // // Since $A^TA$ is symmetric positive semi-definite, its eigenvalues are all $\\geq 0$, so the singular values are real and non-negative. They are ordered $\\sigma_1 \\geq \\sigma_2 \\geq \\cdots \\geq 0$.

// // // The number of nonzero singular values equals the [rank](!/linear-algebra/matrix/rank) of $A$:

// // // @academic[formula_callout:svd_rank|SVD Rank|$$\\text{rank}(A) = \\#\\{i : \\sigma_i > 0\\}$$]@
// // // @academic[formulas_link:/linear-algebra/formulas#svd_rank]@

// // // This is the most numerically stable method for determining rank: compute the SVD and count singular values above a tolerance.

// // // The largest singular value $\\sigma_1$ is the operator norm $\\|A\\|_2 = \\max_{\\|\\mathbf{x}\\|=1}\\|A\\mathbf{x}\\|$. The [Frobenius norm](!/linear-algebra/matrix/trace) is $\\|A\\|_F = \\sqrt{\\sigma_1^2 + \\sigma_2^2 + \\cdots + \\sigma_r^2}$. The condition number is $\\kappa(A) = \\sigma_1/\\sigma_r$ — a large condition number means the matrix is nearly singular and small perturbations in the input cause large changes in the output.`,
// // //     before: ``,
// // //     after: ``,
// // //     link: ``,
// // //   },
// // //   obj4: {
// // //     title: `Computing the SVD`,
// // //     content: `The standard approach computes the SVD through the eigenvalue decomposition of $A^TA$.

// // // Form $A^TA$ (symmetric, $n \\times n$). Find its eigenvalues $\\lambda_1 \\geq \\cdots \\geq \\lambda_n \\geq 0$ and orthonormal eigenvectors $\\mathbf{v}_1, \\dots, \\mathbf{v}_n$ using the [spectral decomposition](!/linear-algebra/decompositions/spectral). These are the right singular vectors: $V = [\\mathbf{v}_1 \\; \\cdots \\; \\mathbf{v}_n]$.

// // // The singular values are $\\sigma_i = \\sqrt{\\lambda_i}$. The left singular vectors are computed from the right ones: $\\mathbf{u}_i = \\frac{1}{\\sigma_i}A\\mathbf{v}_i$ for each nonzero $\\sigma_i$. If $r < m$, extend $\\{\\mathbf{u}_1, \\dots, \\mathbf{u}_r\\}$ to an [orthonormal basis](!/linear-algebra/orthogonality/orthogonal-sets) for $\\mathbb{R}^m$.

// // // ## Worked Example

// // // For $A = \\begin{pmatrix} 1 & 0 \\\\ 0 & 1 \\\\ 1 & 1 \\end{pmatrix}$: $A^TA = \\begin{pmatrix} 2 & 1 \\\\ 1 & 2 \\end{pmatrix}$, eigenvalues $3$ and $1$, eigenvectors $\\frac{1}{\\sqrt{2}}(1, 1)^T$ and $\\frac{1}{\\sqrt{2}}(1, -1)^T$. Singular values: $\\sqrt{3}$ and $1$. Left singular vectors: $\\mathbf{u}_1 = \\frac{1}{\\sqrt{3}}A\\mathbf{v}_1 = \\frac{1}{\\sqrt{6}}(1, 1, 2)^T$, $\\mathbf{u}_2 = A\\mathbf{v}_2 = \\frac{1}{\\sqrt{2}}(1, -1, 0)^T$. Extend with $\\mathbf{u}_3 = \\frac{1}{\\sqrt{3}}(-1, -1, 1)^T$.`,
// // //     before: ``,
// // //     after: ``,
// // //     link: ``,
// // //   },
// // //   obj5: {
// // //     title: `Compact and Thin Forms`,
// // //     content: `The full SVD has $U$ of size $m \\times m$, $\\Sigma$ of size $m \\times n$, and $V$ of size $n \\times n$. Two economical alternatives retain only the essential information.

// // // The thin SVD keeps only the first $n$ columns of $U$ (call them $U_1$) and the top $n \\times n$ block of $\\Sigma$ (call it $\\Sigma_1$): $A = U_1 \\Sigma_1 V^T$. This drops the columns of $U$ corresponding to the [left null space](!/linear-algebra/vector-spaces/fundamental-spaces).

// // // The compact SVD keeps only the first $r$ columns of $U$ and $V$ (where $r = \\text{rank}(A)$) and the $r \\times r$ diagonal block of nonzero singular values: $A = U_r \\Sigma_r V_r^T$. This is the most economical representation — it captures only the rank-$r$ content of $A$, discarding everything associated with zero singular values.

// // // All three forms represent the same matrix $A$. The compact form uses the least storage; the full form provides bases for all four [fundamental subspaces](!/linear-algebra/vector-spaces/fundamental-spaces). The three variants line up cleanly on factor dimensions and on what each one chooses to keep.`,
// // //     before: ``,
// // //     after: ``,
// // //     link: ``,
// // //   },
// // //   obj6: {
// // //     title: `SVD and the Four Fundamental Subspaces`,
// // //     content: `The SVD simultaneously provides orthonormal [bases](!/linear-algebra/vector-spaces) for all four [fundamental subspaces](!/linear-algebra/vector-spaces/fundamental-spaces) of $A$:

// // // @academic[formula_callout:svd_four_fundamental_subspaces|SVD Four Fundamental Subspaces|$$\\begin{aligned} \\text{Col}(A) &= \\text{Span}\\{\\mathbf{u}_1, \\ldots, \\mathbf{u}_r\\} \\\\ \\text{Null}(A^T) &= \\text{Span}\\{\\mathbf{u}_{r+1}, \\ldots, \\mathbf{u}_m\\} \\\\ \\text{Row}(A) &= \\text{Span}\\{\\mathbf{v}_1, \\ldots, \\mathbf{v}_r\\} \\\\ \\text{Null}(A) &= \\text{Span}\\{\\mathbf{v}_{r+1}, \\ldots, \\mathbf{v}_n\\} \\end{aligned}$$]@
// // // @academic[formulas_link:/linear-algebra/formulas#svd_four_fundamental_subspaces]@

// // // The first $r$ columns of $V$ ($\\mathbf{v}_1, \\dots, \\mathbf{v}_r$) form an orthonormal basis for the row space of $A$.

// // // The last $n - r$ columns of $V$ ($\\mathbf{v}_{r+1}, \\dots, \\mathbf{v}_n$) form an orthonormal basis for the [null space](!/linear-algebra/vector-spaces/fundamental-spaces) of $A$.

// // // The first $r$ columns of $U$ ($\\mathbf{u}_1, \\dots, \\mathbf{u}_r$) form an orthonormal basis for the [column space](!/linear-algebra/vector-spaces/fundamental-spaces) of $A$.

// // // The last $m - r$ columns of $U$ ($\\mathbf{u}_{r+1}, \\dots, \\mathbf{u}_m$) form an orthonormal basis for the left null space of $A$.

// // // No other factorization provides all four bases simultaneously, and no other method guarantees that these bases are orthonormal. The SVD is the complete structural portrait of any matrix.`,
// // //     before: ``,
// // //     after: ``,
// // //     link: ``,
// // //   },
// // //   obj7: {
// // //     title: `The Pseudoinverse`,
// // //     content: `The Moore-Penrose pseudoinverse $A^+$ is computed directly from the SVD:

// // // @academic[formula_callout:moore_penrose_pseudoinverse|Moore-Penrose Pseudoinverse|$$A^+ = V\\Sigma^+ U^T$$]@
// // // @academic[formulas_link:/linear-algebra/formulas#moore_penrose_pseudoinverse]@

// // // The matrix $\\Sigma^+$ is formed by reciprocating each nonzero singular value and transposing the shape: if $\\Sigma$ is $m \\times n$ with diagonal entries $\\sigma_1, \\dots, \\sigma_r, 0, \\dots, 0$, then $\\Sigma^+$ is $n \\times m$ with diagonal entries $1/\\sigma_1, \\dots, 1/\\sigma_r, 0, \\dots, 0$.

// // // The pseudoinverse satisfies four defining properties: $AA^+A = A$, $A^+AA^+ = A^+$, $(AA^+)^T = AA^+$, $(A^+A)^T = A^+A$.

// // // For a full-rank overdetermined system ($m > n$, rank $= n$), $A^+\\mathbf{b}$ gives the [least-squares](!/linear-algebra/orthogonality/least-squares) solution. For a rank-deficient system, $A^+\\mathbf{b}$ gives the minimum-norm least-squares solution — the solution of smallest length among all minimizers of $\\|A\\mathbf{x} - \\mathbf{b}\\|$.`,
// // //     before: ``,
// // //     after: ``,
// // //     link: ``,
// // //   },
// // //   obj8: {
// // //     title: `Low-Rank Approximation`,
// // //     content: `The best rank-$k$ approximation to $A$ in either the operator norm or the Frobenius norm is obtained by truncating the SVD at $k$ terms:

// // // @academic[formula_callout:eckart_young_low_rank_approximation|Eckart-Young Low-Rank Approximation|$$A_k = \\sum_{i=1}^{k} \\sigma_i \\mathbf{u}_i \\mathbf{v}_i^T, \\qquad \\|A - A_k\\|_2 = \\sigma_{k+1}, \\quad \\|A - A_k\\|_F = \\sqrt{\\sum_{i=k+1}^{r}\\sigma_i^2}$$]@
// // // @academic[formulas_link:/linear-algebra/formulas#eckart_young_low_rank_approximation]@

// // // This is the Eckart-Young-Mirsky theorem. Among all matrices of rank at most $k$, $A_k$ is the closest to $A$. The approximation error equals $\\sigma_{k+1}$ (the first discarded singular value) in the operator norm, and $\\sqrt{\\sigma_{k+1}^2 + \\cdots + \\sigma_r^2}$ in the Frobenius norm.

// // // When the singular values decay rapidly — $\\sigma_1 \\gg \\sigma_2 \\gg \\cdots$ — a small number of terms captures most of the matrix. This is the basis of image compression (store $k$ singular value triples instead of $mn$ entries), noise reduction (discard small singular values as noise), latent semantic analysis (retain the top-$k$ "concepts" in a document-term matrix), and dimensionality reduction more broadly.`,
// // //     before: ``,
// // //     after: ``,
// // //     link: ``,
// // //   },
// // //   obj9: {
// // //     title: `SVD and Norms`,
// // //     content: `The singular values provide the complete "size profile" of a matrix.

// // // The operator (spectral) norm is the largest singular value:

// // // @academic[formula_callout:operator_norm|Operator Norm|$$\\|A\\|_2 = \\sigma_1 = \\max_{\\|\\mathbf{x}\\|=1} \\|A\\mathbf{x}\\|$$]@
// // // @academic[formulas_link:/linear-algebra/formulas#operator_norm]@

// // // It measures the maximum factor by which $A$ can stretch a unit vector.

// // // The [Frobenius norm](!/linear-algebra/matrix/trace) is the root-sum-of-squares of all singular values:

// // // @academic[formula_callout:frobenius_norm_via_singular_values|Frobenius Norm via Singular Values|$$\\|A\\|_F = \\sqrt{\\sum_{i=1}^{r} \\sigma_i^2}$$]@
// // // @academic[formulas_link:/linear-algebra/formulas#frobenius_norm_via_singular_values]@

// // // It measures the total "energy" in the matrix.

// // // The condition number quantifies sensitivity to perturbation:

// // // @academic[formula_callout:condition_number|Condition Number|$$\\kappa(A) = \\frac{\\sigma_1}{\\sigma_r}$$]@
// // // @academic[formulas_link:/linear-algebra/formulas#condition_number]@

// // // A matrix with $\\kappa = 10^k$ loses roughly $k$ digits of accuracy in solving $A\\mathbf{x} = \\mathbf{b}$ with floating-point arithmetic. A perfectly conditioned matrix ($\\kappa = 1$) is orthogonal. A singular matrix ($\\sigma_r = 0$) has $\\kappa = \\infty$.

// // // The singular values are the natural measuring tool for matrices, just as eigenvalues are the natural measuring tool for symmetric matrices and [linear operators](!/linear-algebra/transformations). For non-symmetric matrices, singular values (not eigenvalues) govern norms and conditioning.`,
// // //     before: ``,
// // //     after: ``,
// // //     link: ``,
// // //   },
// // //   obj10: {
// // //     title: `SVD and the Spectral Decomposition`,
// // //     content: `For a symmetric positive semi-definite matrix $A$ with eigenvalues $\\lambda_1 \\geq \\cdots \\geq \\lambda_n \\geq 0$, the [spectral decomposition](!/linear-algebra/decompositions/spectral) $A = QDQ^T$ is also the SVD: $U = V = Q$ and $\\Sigma = D$. The singular values are the eigenvalues.

// // // For a general symmetric matrix with some negative eigenvalues, the singular values are $|\\lambda_i|$. The signs are absorbed into $U$ or $V$: if $\\lambda_i < 0$, one of the corresponding singular vectors is negated so that $\\sigma_i = |\\lambda_i| > 0$.

// // // For non-symmetric or rectangular matrices, the eigendecomposition does not apply (it requires square matrices and may not exist even then), but the SVD always does. The SVD is the correct generalization of the spectral decomposition to the broadest possible class of matrices.`,
// // //     before: ``,
// // //     after: ``,
// // //     link: ``,
// // //   },
// // //   obj11: {
// // //     title: `The Outer Product Form`,
// // //     content: `The SVD can be written as a sum of rank-one matrices:

// // // @academic[formula_callout:svd_outer_product_form|SVD Outer Product Form|$$A = \\sum_{i=1}^{r} \\sigma_i \\, \\mathbf{u}_i \\mathbf{v}_i^T$$]@
// // // @academic[formulas_link:/linear-algebra/formulas#svd_outer_product_form]@

// // // Each term $\\sigma_i \\mathbf{u}_i\\mathbf{v}_i^T$ is an $m \\times n$ rank-one matrix. The singular value $\\sigma_i$ weights its contribution. The terms are ordered by importance: the first term captures the most of $A$ (in the norm sense), the second captures the most of the remainder, and so on.

// // // Truncating this sum at $k$ terms gives the best rank-$k$ approximation $A_k$. The fraction of the Frobenius norm captured by the first $k$ terms is $(\\sigma_1^2 + \\cdots + \\sigma_k^2)/(\\sigma_1^2 + \\cdots + \\sigma_r^2)$.

// // // This outer product perspective is the basis of nearly every matrix approximation method: keep the large singular values (signal) and discard the small ones (noise or redundancy).`,
// // //     before: ``,
// // //     after: ``,
// // //     link: ``,
// // //   },
// // //   obj12: {
// // //     title: `What the SVD Reveals`,
// // //     content: `No other single factorization provides as much structural information about a matrix.

// // // The [rank](!/linear-algebra/matrix/rank): the number of nonzero singular values.

// // // The four [fundamental subspaces](!/linear-algebra/vector-spaces/fundamental-spaces): orthonormal bases from the columns of $U$ and $V$.

// // // The [pseudoinverse](!/linear-algebra/orthogonality/least-squares): $A^+ = V\\Sigma^+ U^T$.

// // // The best rank-$k$ approximation: truncate at $k$ terms.

// // // Norms and the condition number: directly from the singular values.

// // // The [geometry](!/linear-algebra/transformations/geometric) of the linear map: rotation, scaling, rotation.

// // // For symmetric matrices, the SVD reduces to the [spectral decomposition](!/linear-algebra/decompositions/spectral). For invertible square matrices, the singular values reveal the conditioning that the [determinant](!/linear-algebra/determinants) alone cannot see (a matrix with $\\det = 1$ can still be poorly conditioned). For rectangular matrices, the SVD is the only factorization that applies without modification.

// // // The SVD is the culmination of the decomposition hierarchy — the most general, most informative, and most broadly applicable factorization in linear algebra.

// // // The six structural quantities the SVD exposes — rank, the four fundamental subspaces, the pseudoinverse, the best rank-$k$ approximation, norms and condition number, and the geometric decomposition — collect into a single reference card below.`,
// // //     before: ``,
// // //     after: ``,
// // //     link: ``,
// // //   },
// // // }

// // // const introContent = {
// // //   title: `The Universal Matrix Factorization`,
// // //   content: `The singular value decomposition, written SVD, factors any matrix of any shape as UΣVᵀ — two orthogonal matrices sandwiching a diagonal matrix of non-negative singular values. It exists for every matrix, reveals the rank, provides orthonormal bases for all four fundamental subspaces, computes the pseudoinverse, yields the best low-rank approximation, and decomposes every linear transformation into a rotation, a scaling, and another rotation. No other single factorization provides this much information.`,
// // // }

// // // const faqQuestions = {
// // //   obj1: {
// // //     question: "What is the singular value decomposition?",
// // //     answer: "The SVD factors any m×n matrix A as A = UΣVᵀ, where U and V are orthogonal matrices of left and right singular vectors, and Σ is diagonal with non-negative singular values. It exists for every matrix regardless of shape, rank, or symmetry.",
// // //     sectionId: "1"
// // //   },
// // //   obj2: {
// // //     question: "What do singular values represent geometrically?",
// // //     answer: "Singular values measure how much a matrix stretches vectors along each orthogonal direction. The largest singular value σ₁ is the maximum stretching factor, and the transformation A decomposes geometrically into a rotation (Vᵀ), a coordinate-axis scaling (Σ), and another rotation (U).",
// // //     sectionId: "2"
// // //   },
// // //   obj3: {
// // //     question: "How does SVD give the best low-rank approximation?",
// // //     answer: "The Eckart-Young-Mirsky theorem states that truncating the SVD at k terms gives the closest rank-k matrix to A in both operator and Frobenius norms. The approximation error equals σₖ₊₁ in operator norm. This is the basis of image compression and noise reduction.",
// // //     sectionId: "8"
// // //   },
// // //   obj4: {
// // //     question: "How is the pseudoinverse computed from the SVD?",
// // //     answer: "The Moore-Penrose pseudoinverse is A⁺ = VΣ⁺Uᵀ, where Σ⁺ reciprocates each nonzero singular value and transposes the shape. For overdetermined systems A⁺b gives the least-squares solution; for rank-deficient systems it gives the minimum-norm least-squares solution.",
// // //     sectionId: "7"
// // //   },
// // //   obj5: {
// // //     question: "How does SVD reveal the four fundamental subspaces?",
// // //     answer: "The first r columns of V span the row space, the remaining n−r columns span the null space. The first r columns of U span the column space, the remaining m−r columns span the left null space. No other factorization provides orthonormal bases for all four subspaces simultaneously.",
// // //     sectionId: "6"
// // //   },
// // //   obj6: {
// // //     question: "What is the condition number of a matrix?",
// // //     answer: "The condition number κ(A) = σ₁/σᵣ is the ratio of the largest to smallest nonzero singular value. It measures sensitivity to perturbation: a matrix with κ = 10ᵏ loses roughly k digits of accuracy in floating-point computation. Orthogonal matrices have κ = 1; singular matrices have κ = ∞.",
// // //     sectionId: "9"
// // //   }
// // // }


// // // const schemas = {
// // //   learningResource: {
// // //     "@context": "https://schema.org",
// // //     "@type": "LearningResource",
// // //     "name": "Singular Value Decomposition (SVD)",
// // //     "description": "Singular value decomposition A = UΣVᵀ: singular values, geometric interpretation, pseudoinverse, low-rank approximation, four fundamental subspaces, norms, and condition number.",
// // //     "url": "https://www.learnmathclass.com/linear-algebra/decompositions/svd",
// // //     "inLanguage": "en-US",
// // //     "learningResourceType": "Explanation",
// // //     "educationalLevel": "College",
// // //     "educationalUse": "Learning",
// // //     "audience": {
// // //       "@type": "EducationalAudience",
// // //       "educationalRole": "student"
// // //     },
// // //     "about": {
// // //       "@type": "Thing",
// // //       "name": "Singular Value Decomposition"
// // //     },
// // //     "teaches": [
// // //       "SVD factorization A = UΣVᵀ for any matrix",
// // //       "Geometric interpretation as rotation-scaling-rotation",
// // //       "Singular values from eigenvalues of AᵀA",
// // //       "Four fundamental subspaces from U and V",
// // //       "Moore-Penrose pseudoinverse via SVD",
// // //       "Best low-rank approximation (Eckart-Young theorem)",
// // //       "Matrix norms and condition number from singular values",
// // //       "Outer product form and relationship to spectral decomposition",
// // //       "Side-by-side comparison of full, thin, and compact SVD forms",
// // //       "Reference card collecting everything the SVD reveals about a matrix"
// // //     ],
// // //     "keywords": keyWords.join(", "),
// // //     "author": {
// // //       "@type": "Organization",
// // //       "name": "Learn Math Class"
// // //     },
// // //     "publisher": {
// // //       "@type": "Organization",
// // //       "name": "Learn Math Class"
// // //     },
// // //     "datePublished": "2024-01-15",
// // //     "dateModified": new Date().toISOString()
// // //   },

// // //   breadcrumb: {
// // //     "@context": "https://schema.org",
// // //     "@type": "BreadcrumbList",
// // //     "itemListElement": [
// // //       {
// // //         "@type": "ListItem",
// // //         "position": 1,
// // //         "name": "Home",
// // //         "item": "https://www.learnmathclass.com"
// // //       },
// // //       {
// // //         "@type": "ListItem",
// // //         "position": 2,
// // //         "name": "Linear Algebra",
// // //         "item": "https://www.learnmathclass.com/linear-algebra"
// // //       },
// // //       {
// // //         "@type": "ListItem",
// // //         "position": 3,
// // //         "name": "Decompositions",
// // //         "item": "https://www.learnmathclass.com/linear-algebra/decompositions"
// // //       },
// // //       {
// // //         "@type": "ListItem",
// // //         "position": 4,
// // //         "name": "Singular Value Decomposition",
// // //         "item": "https://www.learnmathclass.com/linear-algebra/decompositions/svd"
// // //       }
// // //     ]
// // //   },

// // //   faq: {
// // //     "@context": "https://schema.org",
// // //     "@type": "FAQPage",
// // //     "mainEntity": Object.keys(faqQuestions).map(key => ({
// // //       "@type": "Question",
// // //       "name": faqQuestions[key].question,
// // //       "acceptedAnswer": {
// // //         "@type": "Answer",
// // //         "text": faqQuestions[key].answer
// // //       }
// // //     }))
// // //   }
// // // }


// // //   return {
// // //   props:{
// // //     sectionsContent,
// // //     introContent,
// // //     obj1Blocks,
// // //     svdForms,
// // //     obj6Table,
// // //     obj9Table,
// // //     svdReadings,
// // //     faqQuestions,
// // //     schemas,
// // //     seoData: {
// // //       title: "SVD: Singular Value Decomposition | Learn Math Class",
// // //       description: "Singular value decomposition A = UΣVᵀ: singular values, geometric interpretation, pseudoinverse, low-rank approximation, four fundamental subspaces, norms, and condition number.",
// // //       keywords: keyWords.join(", "),
// // //       url: "/linear-algebra/decompositions/svd",
// // //       name: "Singular Value Decomposition (SVD)"
// // //     },
// // //   }
// // // }
// // //    }

// // // export default function SVDPage({
// // //   seoData,
// // //   sectionsContent,
// // //   introContent,
// // //   obj1Blocks,
// // //   svdForms,
// // //   obj6Table,
// // //   obj9Table,
// // //   svdReadings,
// // //   faqQuestions,
// // //   schemas,
// // // }) {

// // //   const tableWrapStyle = { margin: '20px auto', width: '100%' }
// // //   const svgStyle = { display: 'block', margin: '0 auto', maxWidth: '100%' }

// // //   // ---------- figures for the concept introduction ----------

// // //   const oneBasisFigure = (
// // //     <svg viewBox="0 0 620 200" width="100%" style={svgStyle}>
// // //       <defs>
// // //         <marker id="svdArNavy" markerWidth="9" markerHeight="9" refX="7" refY="3.2" orient="auto">
// // //           <path d="M0,0 L0,6.4 L7.5,3.2 z" fill="#06357a" />
// // //         </marker>
// // //         <marker id="svdArDim" markerWidth="9" markerHeight="9" refX="7" refY="3.2" orient="auto">
// // //           <path d="M0,0 L0,6.4 L7.5,3.2 z" fill="#8a93a0" />
// // //         </marker>
// // //       </defs>
// // //       <rect x="26" y="20" width="250" height="158" fill="#ffffff" stroke="#e2e6ec" />
// // //       <text x="151" y="13" fontSize="12.5" fill="#7c8794" textAnchor="middle">one space &mdash; input and output</text>
// // //       <line x1="56" y1="146" x2="256" y2="146" stroke="#cfd6df" />
// // //       <line x1="86" y1="36" x2="86" y2="168" stroke="#cfd6df" />
// // //       <line x1="86" y1="146" x2="166" y2="106" stroke="#06357a" strokeWidth="2" markerEnd="url(#svdArNavy)" />
// // //       <text x="146" y="99" fontSize="13" fill="#06357a" fontStyle="italic">p&#8321;</text>
// // //       <line x1="86" y1="146" x2="126" y2="66" stroke="#06357a" strokeWidth="2" markerEnd="url(#svdArNavy)" />
// // //       <text x="130" y="62" fontSize="13" fill="#06357a" fontStyle="italic">p&#8322;</text>
// // //       <line x1="86" y1="146" x2="236" y2="71" stroke="#8a93a0" strokeWidth="1.6" strokeDasharray="5,4" markerEnd="url(#svdArDim)" />
// // //       <text x="211" y="62" fontSize="12.5" fill="#8a93a0" fontStyle="italic">&lambda;&#8321;p&#8321;</text>
// // //       <text x="151" y="194" fontSize="13" fill="#34495e" textAnchor="middle">the image of p&#8321; is written using p&#8321; itself</text>
// // //       <text x="326" y="42" fontSize="12.5" fill="#a4243b" fontWeight="bold">Two ways this breaks</text>
// // //       <line x1="326" y1="58" x2="592" y2="58" stroke="#e2e6ec" />
// // //       <text x="326" y="80" fontSize="13.5" fill="#34495e">A is 3 &times; 2 &mdash; input and output</text>
// // //       <text x="326" y="98" fontSize="13.5" fill="#34495e">live in different spaces, so one</text>
// // //       <text x="326" y="116" fontSize="13.5" fill="#34495e">basis cannot describe both.</text>
// // //       <text x="592" y="80" fontSize="15" fill="#a4243b" textAnchor="end" fontWeight="bold">&#10007;</text>
// // //       <line x1="326" y1="130" x2="592" y2="130" stroke="#e2e6ec" />
// // //       <text x="326" y="152" fontSize="13.5" fill="#34495e">A is square but defective &mdash; every</text>
// // //       <text x="326" y="170" fontSize="13.5" fill="#34495e">eigenvector is a multiple of (1, 0),</text>
// // //       <text x="326" y="188" fontSize="13.5" fill="#34495e">so no basis of them exists.</text>
// // //       <text x="592" y="152" fontSize="15" fill="#a4243b" textAnchor="end" fontWeight="bold">&#10007;</text>
// // //     </svg>
// // //   )

// // //   const twoBasesFigure = (
// // //     <svg viewBox="0 0 660 250" width="100%" style={svgStyle}>
// // //       <defs>
// // //         <marker id="svdArV" markerWidth="9" markerHeight="9" refX="7" refY="3.2" orient="auto">
// // //           <path d="M0,0 L0,6.4 L7.5,3.2 z" fill="#1f6f8b" />
// // //         </marker>
// // //         <marker id="svdArU" markerWidth="9" markerHeight="9" refX="7" refY="3.2" orient="auto">
// // //           <path d="M0,0 L0,6.4 L7.5,3.2 z" fill="#b8860b" />
// // //         </marker>
// // //         <marker id="svdArBig" markerWidth="11" markerHeight="11" refX="8" refY="4" orient="auto">
// // //           <path d="M0,0 L0,8 L9,4 z" fill="#06357a" />
// // //         </marker>
// // //       </defs>
// // //       <text x="140" y="26" fontSize="12.5" fill="#7c8794" textAnchor="middle">input space &#8477;&#8319;</text>
// // //       <line x1="40" y1="130" x2="240" y2="130" stroke="#cfd6df" />
// // //       <line x1="140" y1="40" x2="140" y2="220" stroke="#cfd6df" />
// // //       <circle cx="140" cy="130" r="58" fill="#eef2f8" stroke="#06357a" strokeWidth="1.6" />
// // //       <line x1="140" y1="130" x2="195" y2="112" stroke="#1f6f8b" strokeWidth="2.4" markerEnd="url(#svdArV)" />
// // //       <text x="200" y="106" fontSize="13.5" fill="#1f6f8b" fontWeight="bold">v&#8321;</text>
// // //       <line x1="140" y1="130" x2="158" y2="75" stroke="#1f6f8b" strokeWidth="2.4" markerEnd="url(#svdArV)" />
// // //       <text x="162" y="70" fontSize="13.5" fill="#1f6f8b" fontWeight="bold">v&#8322;</text>
// // //       <text x="140" y="238" fontSize="13" fill="#34495e" textAnchor="middle">unit circle, orthonormal basis</text>
// // //       <line x1="262" y1="130" x2="368" y2="130" stroke="#06357a" strokeWidth="2" markerEnd="url(#svdArBig)" />
// // //       <text x="315" y="120" fontSize="15" fill="#06357a" textAnchor="middle" fontStyle="italic">A</text>
// // //       <text x="315" y="154" fontSize="14" fill="#06357a" textAnchor="middle" fontWeight="bold">Av&#7522; = &sigma;&#7522;u&#7522;</text>
// // //       <text x="500" y="26" fontSize="12.5" fill="#7c8794" textAnchor="middle">output space &#8477;&#7504;</text>
// // //       <line x1="380" y1="130" x2="630" y2="130" stroke="#cfd6df" />
// // //       <line x1="500" y1="40" x2="500" y2="220" stroke="#cfd6df" />
// // //       <ellipse cx="500" cy="130" rx="105" ry="40" fill="#fbf6e8" stroke="#b8860b" strokeWidth="1.6" transform="rotate(-18 500 130)" />
// // //       <line x1="500" y1="130" x2="600" y2="98" stroke="#b8860b" strokeWidth="2.6" markerEnd="url(#svdArU)" />
// // //       <text x="586" y="88" fontSize="13.5" fill="#b8860b" fontWeight="bold">&sigma;&#8321;u&#8321;</text>
// // //       <line x1="500" y1="130" x2="512" y2="92" stroke="#b8860b" strokeWidth="2.6" markerEnd="url(#svdArU)" />
// // //       <text x="516" y="86" fontSize="13.5" fill="#b8860b" fontWeight="bold">&sigma;&#8322;u&#8322;</text>
// // //       <text x="500" y="238" fontSize="13" fill="#34495e" textAnchor="middle">ellipse, axes &sigma;&#8321; and &sigma;&#8322; along a different orthonormal basis</text>
// // //     </svg>
// // //   )

// // //   // React elements cannot serialize through getStaticProps, so the figures are
// // //   // attached here, keyed by block id.
// // //   const obj1Visuals = {
// // //     'two-failures': oneBasisFigure,
// // //     'circle-ellipse': twoBasesFigure,
// // //   }

// // //   const obj1Data = {
// // //     blocks: obj1Blocks.map(block =>
// // //       obj1Visuals[block.id] ? { ...block, visual: obj1Visuals[block.id] } : block
// // //     ),
// // //   }

// // //   const genericSections=[
// // //     {
// // //         id:'1',
// // //         title:sectionsContent.obj1.title,
// // //         link:sectionsContent.obj1.link,
// // //         content:[
// // //           <ConceptIntro key={'obj1-intro'} data={obj1Data} />,
// // //         ]
// // //     },
// // //     {
// // //         id:'2',
// // //         title:sectionsContent.obj2.title,
// // //         link:sectionsContent.obj2.link,
// // //         content:[
// // //           sectionsContent.obj2.content,
// // //         ]
// // //     },
// // //     {
// // //         id:'3',
// // //         title:sectionsContent.obj3.title,
// // //         link:sectionsContent.obj3.link,
// // //         content:[
// // //           sectionsContent.obj3.content,
// // //         ]
// // //     },
// // //     {
// // //         id:'4',
// // //         title:sectionsContent.obj4.title,
// // //         link:sectionsContent.obj4.link,
// // //         content:[
// // //           sectionsContent.obj4.content,
// // //         ]
// // //     },
// // //     {
// // //         id:'5',
// // //         title:sectionsContent.obj5.title,
// // //         link:sectionsContent.obj5.link,
// // //         content:[
// // //           sectionsContent.obj5.content,
// // //           <DiagramFrame
// // //             key={'obj5-diagram'}
// // //             id="svd-forms"
// // //             title="Three forms, one factorization"
// // //             source="/linear-algebra/decompositions/svd"
// // //           >
// // //             <ObjectTypeProfile data={svdForms} theme="navy" variant="stack" />
// // //           </DiagramFrame>,
// // //           `The distinction to keep hold of is that none of these is an approximation. Each drops columns that multiply against zero singular values, so the product is unchanged and $A$ is reconstructed exactly in all three. What is lost is not accuracy but the orthogonality of $U$ as a square matrix — $U_r^{\\mathsf{T}}U_r = I_r$ still holds, but $U_rU_r^{\\mathsf{T}}$ no longer does, and any argument relying on the left null space needs the full form.`,
// // //         ]
// // //     },
// // //     {
// // //         id:'6',
// // //         title:sectionsContent.obj6.title,
// // //         link:sectionsContent.obj6.link,
// // //         content:[
// // //           sectionsContent.obj6.content,
// // //           <div key={'obj6-table'} style={tableWrapStyle}
// // //                dangerouslySetInnerHTML={{ __html: obj6Table }} />,
// // //         ]
// // //     },
// // //     {
// // //         id:'7',
// // //         title:sectionsContent.obj7.title,
// // //         link:sectionsContent.obj7.link,
// // //         content:[
// // //           sectionsContent.obj7.content,
// // //         ]
// // //     },
// // //     {
// // //         id:'8',
// // //         title:sectionsContent.obj8.title,
// // //         link:sectionsContent.obj8.link,
// // //         content:[
// // //           sectionsContent.obj8.content,
// // //         ]
// // //     },
// // //     {
// // //         id:'9',
// // //         title:sectionsContent.obj9.title,
// // //         link:sectionsContent.obj9.link,
// // //         content:[
// // //           sectionsContent.obj9.content,
// // //           <div key={'obj9-table'} style={tableWrapStyle}
// // //                dangerouslySetInnerHTML={{ __html: obj9Table }} />,
// // //         ]
// // //     },
// // //     {
// // //         id:'10',
// // //         title:sectionsContent.obj10.title,
// // //         link:sectionsContent.obj10.link,
// // //         content:[
// // //           sectionsContent.obj10.content,
// // //         ]
// // //     },
// // //     {
// // //         id:'11',
// // //         title:sectionsContent.obj11.title,
// // //         link:sectionsContent.obj11.link,
// // //         content:[
// // //           sectionsContent.obj11.content,
// // //         ]
// // //     },
// // //     {
// // //         id:'12',
// // //         title:sectionsContent.obj12.title,
// // //         link:sectionsContent.obj12.link,
// // //         content:[
// // //           sectionsContent.obj12.content,
// // //           `Grouping these by which factor supplies the answer is what makes them one computation rather than seven. Three come from the singular values alone, two from the columns of the orthogonal factors, and two require reading all three factors together. Nothing below needs the matrix again once the factorization is in hand.`,
// // //           <DiagramFrame
// // //             key={'obj12-diagram'}
// // //             id="svd-readings"
// // //             title="What the SVD reveals"
// // //             source="/linear-algebra/decompositions/svd"
// // //           >
// // //             <IdentitySheet data={svdReadings} theme="navy" variant="ledger" />
// // //           </DiagramFrame>,
// // //           `Two of these deserve emphasis because nothing else supplies them. The **condition number** measures how badly a system amplifies error, and it is invisible to the determinant — a matrix can have determinant one and still be nearly singular in some direction. **Low-rank approximation** is optimal rather than merely reasonable: truncating the sum at $k$ terms gives the closest rank-$k$ matrix in every unitarily invariant norm, with error exactly $\\sigma_{k+1}$.`,
// // //           `The reason all of this comes from one factorization is that the SVD asks nothing of the matrix. It need not be square, invertible, symmetric or full rank — the factorization exists regardless, which is what separates it from every other decomposition in this section and why it is the one to reach for when the matrix is unknown.`,
// // //         ]
// // //     },

// // // ]

// // //   return (
// // //    <>

// // // <Head>
// // //   <title>{seoData.title}</title>
// // //   <meta name="description" content={seoData.description} />
// // //   <meta name="keywords" content={seoData.keywords} />
// // //   <link rel="canonical" href={`https://www.learnmathclass.com${seoData.url}`} />

// // //   <meta property="og:title" content={seoData.title} />
// // //   <meta property="og:description" content={seoData.description} />
// // //   <meta property="og:url" content={`https://www.learnmathclass.com${seoData.url}`} />
// // //   <meta property="og:type" content="article" />
// // //   <meta property="og:site_name" content="Learn Math Class" />

// // //   <meta name="twitter:card" content="summary" />
// // //   <meta name="twitter:title" content={seoData.title} />
// // //   <meta name="twitter:description" content={seoData.description} />

// // //   <meta name="robots" content="index, follow" />

// // //   <script
// // //     type="application/ld+json"
// // //     dangerouslySetInnerHTML={{
// // //       __html: JSON.stringify(schemas.learningResource)
// // //     }}
// // //   />

// // //   <script
// // //     type="application/ld+json"
// // //     dangerouslySetInnerHTML={{
// // //       __html: JSON.stringify(schemas.breadcrumb)
// // //     }}
// // //   />

// // //   <script
// // //     type="application/ld+json"
// // //     dangerouslySetInnerHTML={{
// // //       __html: JSON.stringify(schemas.faq)
// // //     }}
// // //   />
// // // </Head>
// // //    <br/>
// // //    <br/>
// // //    <br/>
// // //    <br/>
// // //     <OperaSidebar
// // //            side='right'
// // //            sidebarWidth='45px'
// // //            panelWidth='200px'
// // //            iconColor='white'
// // //            panelBackgroundColor='#f2f2f2'
// // //          />
// // //    <Breadcrumb/>
// // //    <br/>
// // //    <br/>
// // //    <h1 className='title' style={{marginTop:'0px',marginBottom:'10px'}}>Singular Value Decomposition</h1>
// // //    <br/>
// // //    <br/>
// // //    <SectionTableOfContents sections={genericSections}
// // //     showSecondaryNav={true}
// // //          secondaryNavMode="siblings"
// // //          secondaryNavTitle="More in this Section"

// // //    />
// // //    <br/>
// // //    <br/>
// // //    <br/>
// // //     <IntroSection
// // //           id={introContent.id}
// // //           title={introContent.title}
// // //           content={introContent.content}
// // //            backgroundColor='#f9fafb'
// // //           textColor="#06357a"
// // //         />
// // //    <br/>
// // //    <br/>
// // //    <Sections sections={genericSections}/>
// // //    <br/>
// // //    <br/>
// // //    <br/>
// // //    </>
// // //   )
// // // }

// // // tables-optimized: v4 | 2026-05-18 | 4 tables (obj5 comparison, obj6 aggregation, obj9 aggregation, obj12 summary capstone)
// // // intro-rewritten: v6 | obj1 = one ConceptIntro call, ordered block array
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
// // import IdentitySheet from '@/app/components/infographics/linear-algebra/IdentitySheet'
// // import ObjectTypeProfile from '@/app/components/infographics/linear-algebra/ObjectTypeProfile'
// // import DiagramFrame from '@/app/components/infographics/DiagramsFrame'
// // import ConceptIntro from '@/app/components/page-components/content-components/ConceptIntro'


// // export async function getStaticProps(){
// // const keyWords = [
// //   "singular value decomposition",
// //   "SVD",
// //   "singular values",
// //   "left right singular vectors",
// //   "low-rank approximation",
// //   "pseudoinverse SVD",
// //   "Moore-Penrose pseudoinverse",
// //   "Eckart-Young theorem",
// //   "matrix rank SVD",
// //   "condition number singular values",
// //   "four fundamental subspaces SVD",
// //   "compact SVD thin SVD",
// //   "SVD image compression",
// //   "operator norm Frobenius norm",
// //   "UΣVᵀ factorization"
// // ]

// //   const linkStyle = 'color: inherit; text-decoration: underline;'

// //   // ---------- obj1 · concept introduction ----------
// //   // One ordered array. Visual elements are attached in the page component,
// //   // keyed by block id, since React elements cannot serialize through props.

// //   const obj1Blocks = [
// //     {
// //       id: 'the-obstacle',
// //       type: 'text',
// //       content: `A matrix mixes coordinates. Every entry of the output is assembled from every entry of the input, so almost nothing worth knowing about $A$ can be read from $A$ itself. What is $A^{10}$? Multiply ten times and find out. What happens to a vector pushed through $A$ a thousand times — does it grow, shrink, settle into some direction? There is no answer short of running it.`,
// //     },
// //     {
// //       id: 'the-remedy',
// //       type: 'text',
// //       content: `Factorization removes the obstacle. Split $A$ into factors that each do one simple thing, and questions that required arithmetic can be settled by inspection.`,
// //     },
// //     {
// //       id: 'sub-diagonalization',
// //       type: 'subtitle',
// //       text: `Diagonalization and Its Requirement`,
// //     },
// //     {
// //       id: 'incumbent',
// //       type: 'text',
// //       content: `[Diagonalization](!/linear-algebra/eigen/diagonalization) does exactly that. Writing $A = PDP^{-1}$ amounts to changing coordinates so that the mixing is absent: the columns of $P$ are directions the matrix only stretches, $D$ holds the stretching factors, and in that basis no coordinate influences any other.`,
// //     },
// //     {
// //       id: 'consequences',
// //       type: 'instance',
// //       lead: `Every question above then collapses.`,
// //       content: `The tenth power is $A^{10} = PD^{10}P^{-1}$, and $D^{10}$ raises a handful of diagonal entries to the tenth. The inverse is $PD^{-1}P^{-1}$, with no elimination anywhere. Long-run behaviour is governed by whichever $\\lambda$ is largest. Nothing is approximated and nothing is recomputed — the work was done once, when the factorization was found.`,
// //     },
// //     {
// //       id: 'the-requirement',
// //       type: 'text',
// //       content: `That performance comes with a condition, and the condition is visible in the formula. The same matrix $P$ stands on both sides of $A = PDP^{-1}$: its columns are used to read the input and again to write the output. The factorization requires that both ends be described in identical terms — one basis, serving twice.`,
// //     },
// //     {
// //       id: 'two-failures',
// //       type: 'instance',
// //       lead: `Two matrices, two ways the requirement fails.`,
// //       content: `A $3 \\times 2$ matrix takes vectors from $\\mathbb{R}^2$ and returns vectors in $\\mathbb{R}^3$, so no single basis can describe both ends, and the question of an [eigenvector](!/linear-algebra/eigen) cannot even be posed: $A\\mathbf{v} = \\lambda\\mathbf{v}$ compares vectors living in different spaces. A defective matrix fails otherwise. It is square, but every eigenvector is a multiple of one direction, so no basis of eigenvectors exists and $P$ cannot be assembled. Rectangular shape excludes diagonalization in principle, defective structure excludes it in practice, and between them they account for most matrices anyone meets.`,
// //     },
// //     {
// //       id: 'sub-two-bases',
// //       type: 'subtitle',
// //       text: `Two Bases Instead of One`,
// //     },
// //     {
// //       id: 'relaxation',
// //       type: 'text',
// //       content: `Nothing forced the two bases to coincide. That was an additional demand, and it can be withdrawn. Admit one orthonormal basis for the input space and a separate one for the output space, and require only that the matrix carry the first to the second with a scaling in between. Equal dimensions are then unnecessary, fixed directions are unnecessary, and both obstructions vanish together.`,
// //     },
// //     {
// //       id: 'circle-ellipse',
// //       type: 'instance',
// //       caption: `The unit circle becomes an ellipse. Each $\\mathbf{v}_i$ is carried to a multiple of $\\mathbf{u}_i$, and $\\sigma_i$ is that multiple.`,
// //       content: `The picture states the entire factorization in one equation. There is an orthonormal basis $\\mathbf{v}_1, \\dots, \\mathbf{v}_n$ of the input space and an orthonormal basis $\\mathbf{u}_1, \\dots, \\mathbf{u}_m$ of the output space satisfying $A\\mathbf{v}_i = \\sigma_i \\mathbf{u}_i$ for every $i$. Each input basis vector is sent to a multiple of a single output basis vector, and to nothing else.`,
// //     },
// //     {
// //       id: 'definition',
// //       type: 'definition',
// //       kicker: 'The definition',
// //       statement: `Collecting those $n$ statements into one matrix equation gives the [singular value decomposition](!/linear-algebra/definitions#singular_value): an orthonormal input basis in $V$, an orthonormal output basis in $U$, and the scaling factors between them along the diagonal of $\\Sigma$.`,
// //       formula: `@academic[formula_callout:svd|SVD|$$A = U\\Sigma V^T$$]@
// // @academic[formulas_link:/linear-algebra/formulas#svd]@`,
// //       gloss: `It is a factorization, not an approximation: the three matrices multiply back to $A$ exactly, with no error term and no conditions attached.`,
// //       kindOfThing: `$U$ is $m \\times m$ [orthogonal](!/linear-algebra/matrix/types) and its columns are the left singular vectors. $V$ is $n \\times n$ orthogonal and its columns are the right singular vectors. $\\Sigma$ is $m \\times n$, zero everywhere off the diagonal, carrying $\\sigma_1 \\geq \\sigma_2 \\geq \\cdots \\geq 0$ along it. Those are the singular values, and they are the lengths of the semi-axes of the ellipse above.`,
// //     },
// //     {
// //       id: 'sub-consequences',
// //       type: 'subtitle',
// //       text: `What Follows and What Does Not`,
// //     },
// //     {
// //       id: 'follows',
// //       type: 'text',
// //       content: `Several properties follow from the construction rather than from any further assumption. Both bases are orthonormal rather than merely independent, so $U^{-1} = U^T$ and $V^{-1} = V^T$ and neither factor is ever inverted. The scaling factors are real and non-negative, since they measure lengths, and can therefore be ordered from largest to smallest — an ordering no set of [eigenvalues](!/linear-algebra/eigen) admits, eigenvalues being possibly complex. And the factorization exists for every matrix without exception: any shape, any [rank](!/linear-algebra/matrix/rank), [symmetric](!/linear-algebra/matrix/types) or not, [invertible](!/linear-algebra/matrix/inverse) or not.`,
// //     },
// //     {
// //       id: 'limitation',
// //       type: 'text',
// //       content: `The same relaxation imposes a limitation. Since $U$ and $V$ are distinct, they do not cancel when the matrix is applied twice: $A^2 = U\\Sigma V^TU\\Sigma V^T$, and the interior $V^TU$ reduces to nothing. The question this section opened with — the tenth power, the long run — is therefore the one question the singular value decomposition cannot answer and diagonalization can. The two factorizations address different questions: one invariant directions, the other stretching. What the three factors do to a vector geometrically is the subject of the next section.`,
// //     },
// //   ]

// //   // ---------- TABLES ----------

// //   // obj5 — three storage forms of one factorization
// //   const svdForms = {
// //     kicker: 'Decompositions \u00B7 SVD',
// //     title: 'Three forms, one factorization',
// //     tallyLabel: 'forms',
// //     intro: 'All three reconstruct $A$ exactly. They differ in how much of $U$ and $\\Sigma$ is kept \u2014 and what is dropped is precisely the part that multiplies against zero singular values.',
// //     footnote: 'Nothing is approximated anywhere in this table. The full form carries orthonormal bases for all four [fundamental subspaces](!/linear-algebra/vector-spaces/fundamental-spaces), which is why it is the one to state theorems with; the compact form carries only what contributes to $A$, which is why it is the one to store. Approximation begins only when the compact form is truncated below rank $r$.',
// //     slots: [
// //       { key: 'shapes',  label: 'shapes' },
// //       { key: 'stored',  label: 'what is kept' },
// //       { key: 'dropped', label: 'what is dropped' },
// //       { key: 'usedFor', label: 'used for' },
// //     ],
// //     groups: [
// //       {
// //         heading: 'Everything kept',
// //         types: [
// //           {
// //             name: 'Full SVD',
// //             anchor: '#1',
// //             shape: 'dense',
// //             condition: '$U$ and $V$ both square and orthogonal',
// //             properties: {
// //               shapes: '$U: m \\times m$, $\\Sigma: m \\times n$, $V: n \\times n$',
// //               stored: 'all of $U$, $V$, and a rectangular $\\Sigma$',
// //               dropped: 'nothing',
// //               usedFor: 'theory, the four subspaces',
// //             },
// //             note: 'The only form where $U$ and $V$ are genuinely orthogonal matrices, so $UU^{\\mathsf{T}} = I$ as well as $U^{\\mathsf{T}}U = I$. That is what makes it the form to state results with \u2014 the last $m - r$ columns of $U$ span the left null space and would otherwise be gone.',
// //           },
// //         ],
// //       },
// //       {
// //         heading: 'Trimmed to what multiplies',
// //         types: [
// //           {
// //             name: 'Thin SVD',
// //             anchor: '#5',
// //             shape: 'lower',
// //             condition: '$m > n$ \u2014 keep $n$ columns of $U$',
// //             properties: {
// //               shapes: '$U_n: m \\times n$, $\\Sigma_n: n \\times n$, $V: n \\times n$',
// //               stored: 'the first $n$ columns of $U$',
// //               dropped: 'the last $m - n$ columns of $U$',
// //               usedFor: 'least squares on tall matrices',
// //             },
// //             note: 'The dropped columns multiply rows of $\\Sigma$ that are entirely zero, so removing them changes nothing about the product. Note $U_n$ is no longer square: $U_n^{\\mathsf{T}}U_n = I_n$ still holds, but $U_nU_n^{\\mathsf{T}}$ does not.',
// //           },
// //           {
// //             name: 'Compact SVD',
// //             anchor: '#5',
// //             shape: 'block',
// //             condition: 'keep only the $r$ nonzero singular values',
// //             properties: {
// //               shapes: '$U_r: m \\times r$, $\\Sigma_r: r \\times r$, $V_r: n \\times r$',
// //               stored: 'the rank-$r$ content only',
// //               dropped: 'every zero singular value and its vectors',
// //               usedFor: 'storage, rank-deficient matrices',
// //             },
// //             note: 'The most economical exact form: $\\Sigma_r$ is square with a strictly positive diagonal, so it is invertible \u2014 which is what makes the [pseudoinverse](#7) computable as $V_r\\Sigma_r^{-1}U_r^{\\mathsf{T}}$.',
// //           },
// //         ],
// //       },
// //     ],
// //   }

// //   // obj6 — aggregation: four fundamental subspaces from the SVD
// //   const obj6Table = `
// // <table class="styled-table" style="border-collapse: collapse; width: 75%;margin:auto; background: white; box-shadow: 0 2px 10px rgba(0,0,0,0.1); border-radius: 8px; overflow: hidden; font-family: Arial, sans-serif;">
// //   <thead>
// //     <tr>
// //       <th style="${tableHeaders.aggregation}">Fundamental subspace</th>
// //       <th style="${tableHeaders.aggregation} text-align: center;">Basis from</th>
// //       <th style="${tableHeaders.aggregation} text-align: center;">Column indices</th>
// //       <th style="${tableHeaders.aggregation} text-align: center;">Dimension</th>
// //     </tr>
// //   </thead>
// //   <tbody>
// //     <tr style="background: #f8f9fa;">
// //       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Row space of A</td>
// //       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e; text-align: center;">V</td>
// //       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e; text-align: center;">1, ..., r</td>
// //       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e; text-align: center;">r</td>
// //     </tr>
// //     <tr>
// //       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Null space of A</td>
// //       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e; text-align: center;">V</td>
// //       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e; text-align: center;">r+1, ..., n</td>
// //       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e; text-align: center;">n − r</td>
// //     </tr>
// //     <tr style="background: #f8f9fa;">
// //       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Column space of A</td>
// //       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e; text-align: center;">U</td>
// //       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e; text-align: center;">1, ..., r</td>
// //       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e; text-align: center;">r</td>
// //     </tr>
// //     <tr>
// //       <td style="padding: 12px 15px; font-weight: bold; color: #06357a;">Left null space of A</td>
// //       <td style="padding: 12px 15px; color: #34495e; text-align: center;">U</td>
// //       <td style="padding: 12px 15px; color: #34495e; text-align: center;">r+1, ..., m</td>
// //       <td style="padding: 12px 15px; color: #34495e; text-align: center;">m − r</td>
// //     </tr>
// //   </tbody>
// // </table>
// // `

// //   // obj9 — aggregation: norms and condition number from singular values
// //   const obj9Table = `
// // <table class="styled-table" style="border-collapse: collapse; width: 75%;margin:auto; background: white; box-shadow: 0 2px 10px rgba(0,0,0,0.1); border-radius: 8px; overflow: hidden; font-family: Arial, sans-serif;">
// //   <thead>
// //     <tr>
// //       <th style="${tableHeaders.aggregation}">Quantity</th>
// //       <th style="${tableHeaders.aggregation}">Formula via singular values</th>
// //       <th style="${tableHeaders.aggregation}">Interpretation</th>
// //     </tr>
// //   </thead>
// //   <tbody>
// //     <tr style="background: #f8f9fa;">
// //       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Operator (spectral) norm ‖A‖<sub>2</sub></td>
// //       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">σ<sub>1</sub></td>
// //       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">maximum stretching factor on the unit ball</td>
// //     </tr>
// //     <tr>
// //       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;"><a href="/linear-algebra/matrix/trace" style="${linkStyle}">Frobenius norm</a> ‖A‖<sub>F</sub></td>
// //       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">√(σ<sub>1</sub><sup>2</sup> + σ<sub>2</sub><sup>2</sup> + ··· + σ<sub>r</sub><sup>2</sup>)</td>
// //       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">total "energy" — root-sum-of-squares of singular values</td>
// //     </tr>
// //     <tr style="background: #f8f9fa;">
// //       <td style="padding: 12px 15px; font-weight: bold; color: #06357a;">Condition number κ(A)</td>
// //       <td style="padding: 12px 15px; color: #34495e;">σ<sub>1</sub> / σ<sub>r</sub></td>
// //       <td style="padding: 12px 15px; color: #34495e;">sensitivity to perturbation: κ = 10<sup>k</sup> loses ~k digits</td>
// //     </tr>
// //   </tbody>
// // </table>
// // `

// //   // obj12 — what one factorization yields, sorted by which factor carries it
// //   const svdReadings = {
// //     kicker: 'Decompositions \u00B7 SVD',
// //     title: 'What the SVD reveals',
// //     tallyLabel: 'readings',
// //     intro: 'Every entry comes from the same three factors. What changes is which one is being read \u2014 the singular values for size, the columns of $U$ and $V$ for structure, and all three together for geometry.',
// //     footnote: 'No other factorization answers this many questions, and none exists for every matrix. That combination is why the SVD is the one to reach for when the matrix is rectangular, rank-deficient, or simply unknown \u2014 the conditions the [other decompositions](!/linear-algebra/decompositions) require are exactly the ones it does without.',
// //     groups: [
// //       {
// //         heading: 'From the singular values',
// //         identities: [
// //           {
// //             name: 'Rank',
// //             anchor: '#3',
// //             formula: '$r = $ count of $\\sigma_i > 0$',
// //             condition: 'strictly positive only',
// //             note: 'The most numerically reliable rank there is. Row reduction decides rank by comparing entries against zero, which floating point makes arbitrary; the singular values instead show a gap, and where that gap falls is a judgement the numbers themselves support.',
// //           },
// //           {
// //             name: 'Norms',
// //             anchor: '#9',
// //             formula: '$\\|A\\|_2 = \\sigma_1, \\quad \\|A\\|_F^2 = \\textstyle\\sum \\sigma_i^2$',
// //             condition: 'read straight off the list',
// //             note: 'The largest singular value is the most any unit vector is stretched. The Frobenius norm is the whole list in quadrature \u2014 so both common matrix norms are functions of the same numbers.',
// //           },
// //           {
// //             name: 'Condition number',
// //             anchor: '#9',
// //             formula: '$\\kappa(A) = \\sigma_1 / \\sigma_r$',
// //             condition: '$A$ of full rank',
// //             strict: true,
// //             note: 'The ratio of most to least stretched. A large $\\kappa$ means the matrix is nearly singular in some direction, and small changes to $\\mathbf{b}$ produce large changes to the solution \u2014 which no determinant reports, since a matrix can have $\\det = 1$ and be badly conditioned.',
// //           },
// //         ],
// //       },
// //       {
// //         heading: 'From the columns of U and V',
// //         identities: [
// //           {
// //             name: 'The four subspaces',
// //             anchor: '#6',
// //             formula: 'partition $U$ and $V$ at index $r$',
// //             condition: 'orthonormal bases, all four at once',
// //             key: true,
// //             note: 'First $r$ columns of $V$ span the row space and the rest the null space; first $r$ of $U$ span the column space and the rest the left null space. The only method giving [all four](!/linear-algebra/vector-spaces/fundamental-spaces) orthonormally from one computation.',
// //           },
// //           {
// //             name: 'Pseudoinverse',
// //             anchor: '#7',
// //             formula: '$A^{+} = V\\Sigma^{+}U^{\\mathsf{T}}$',
// //             condition: 'reciprocate the nonzero $\\sigma$, leave zeros alone',
// //             note: 'Defined for every matrix, square or not, invertible or not. When $A$ is invertible it coincides with $A^{-1}$; otherwise it returns the least-squares solution of minimum norm, which is the sense in which it is the closest thing to an [inverse](!/linear-algebra/matrix/inverse).',
// //           },
// //         ],
// //       },
// //       {
// //         heading: 'From all three factors',
// //         identities: [
// //           {
// //             name: 'Low-rank approximation',
// //             anchor: '#8',
// //             formula: '$A_k = \\sum_{i=1}^{k} \\sigma_i \\mathbf{u}_i \\mathbf{v}_i^{\\mathsf{T}}$',
// //             condition: 'optimal for every unitarily invariant norm',
// //             key: true,
// //             note: 'Truncating the outer-product sum gives the best rank-$k$ approximation there is \u2014 the Eckart\u2013Young theorem, and it is why the SVD underlies image compression and principal component analysis. The error is exactly $\\sigma_{k+1}$, so the singular values say in advance how much is lost.',
// //           },
// //           {
// //             name: 'Geometric action',
// //             anchor: '#2',
// //             formula: '$A = U\\Sigma V^{\\mathsf{T}}$ \u2014 rotate, stretch, rotate',
// //             condition: 'every matrix, no hypotheses',
// //             note: 'Read right to left: $V^{\\mathsf{T}}$ rotates, $\\Sigma$ scales along axes, $U$ rotates again. Every linear map is those three steps, which is the claim that makes the factorization worth having as geometry rather than only as algebra.',
// //           },
// //         ],
// //       },
// //     ],
// //   }

// // const sectionsContent = {
// //   obj1: {
// //     title: `What the Singular Value Decomposition Is`,
// //     content: ``,
// //     before: ``,
// //     after: ``,
// //     link: ``,
// //   },
// //   obj2: {
// //     title: `The Geometric Interpretation`,
// //     content: `Every [linear transformation](!/linear-algebra/transformations) $\\mathbf{x} \\mapsto A\\mathbf{x}$ decomposes into three geometric steps:

// // $V^T$ rotates (or reflects) the input space, aligning the input with the "natural axes" of the transformation — the directions along which $A$ stretches most and least.

// // $\\Sigma$ scales each axis independently by the corresponding singular value. Axes with $\\sigma_i = 0$ are annihilated — those directions are collapsed to zero.

// // $U$ rotates (or reflects) the scaled result into the output space.

// // The singular values measure the stretching in each orthogonal direction. $\\sigma_1$ is the maximum stretching: $\\sigma_1 = \\max_{\\|\\mathbf{x}\\|=1}\\|A\\mathbf{x}\\|$. The smallest nonzero singular value $\\sigma_r$ is the minimum stretching on the [row space](!/linear-algebra/vector-spaces/fundamental-spaces). The ratio $\\sigma_1/\\sigma_r$ is the condition number — it measures how distorted the transformation is.

// // Even the most complex-looking matrix is geometrically just two rotations sandwiching a coordinate-axis scaling.`,
// //     before: ``,
// //     after: ``,
// //     link: ``,
// //   },
// //   obj3: {
// //     title: `Singular Values`,
// //     content: `The singular values of $A$ are the square roots of the [eigenvalues](!/linear-algebra/eigen) of $A^TA$ (or equivalently $AA^T$):

// // @academic[formula_callout:singular_values|Singular Values|$$\\sigma_i = \\sqrt{\\lambda_i(A^TA)} = \\sqrt{\\lambda_i(AA^T)}$$]@
// // @academic[formulas_link:/linear-algebra/formulas#singular_values]@

// // Since $A^TA$ is symmetric positive semi-definite, its eigenvalues are all $\\geq 0$, so the singular values are real and non-negative. They are ordered $\\sigma_1 \\geq \\sigma_2 \\geq \\cdots \\geq 0$.

// // The number of nonzero singular values equals the [rank](!/linear-algebra/matrix/rank) of $A$:

// // @academic[formula_callout:svd_rank|SVD Rank|$$\\text{rank}(A) = \\#\\{i : \\sigma_i > 0\\}$$]@
// // @academic[formulas_link:/linear-algebra/formulas#svd_rank]@

// // This is the most numerically stable method for determining rank: compute the SVD and count singular values above a tolerance.

// // The largest singular value $\\sigma_1$ is the operator norm $\\|A\\|_2 = \\max_{\\|\\mathbf{x}\\|=1}\\|A\\mathbf{x}\\|$. The [Frobenius norm](!/linear-algebra/matrix/trace) is $\\|A\\|_F = \\sqrt{\\sigma_1^2 + \\sigma_2^2 + \\cdots + \\sigma_r^2}$. The condition number is $\\kappa(A) = \\sigma_1/\\sigma_r$ — a large condition number means the matrix is nearly singular and small perturbations in the input cause large changes in the output.`,
// //     before: ``,
// //     after: ``,
// //     link: ``,
// //   },
// //   obj4: {
// //     title: `Computing the SVD`,
// //     content: `The standard approach computes the SVD through the eigenvalue decomposition of $A^TA$.

// // Form $A^TA$ (symmetric, $n \\times n$). Find its eigenvalues $\\lambda_1 \\geq \\cdots \\geq \\lambda_n \\geq 0$ and orthonormal eigenvectors $\\mathbf{v}_1, \\dots, \\mathbf{v}_n$ using the [spectral decomposition](!/linear-algebra/decompositions/spectral). These are the right singular vectors: $V = [\\mathbf{v}_1 \\; \\cdots \\; \\mathbf{v}_n]$.

// // The singular values are $\\sigma_i = \\sqrt{\\lambda_i}$. The left singular vectors are computed from the right ones: $\\mathbf{u}_i = \\frac{1}{\\sigma_i}A\\mathbf{v}_i$ for each nonzero $\\sigma_i$. If $r < m$, extend $\\{\\mathbf{u}_1, \\dots, \\mathbf{u}_r\\}$ to an [orthonormal basis](!/linear-algebra/orthogonality/orthogonal-sets) for $\\mathbb{R}^m$.

// // ## Worked Example

// // For $A = \\begin{pmatrix} 1 & 0 \\\\ 0 & 1 \\\\ 1 & 1 \\end{pmatrix}$: $A^TA = \\begin{pmatrix} 2 & 1 \\\\ 1 & 2 \\end{pmatrix}$, eigenvalues $3$ and $1$, eigenvectors $\\frac{1}{\\sqrt{2}}(1, 1)^T$ and $\\frac{1}{\\sqrt{2}}(1, -1)^T$. Singular values: $\\sqrt{3}$ and $1$. Left singular vectors: $\\mathbf{u}_1 = \\frac{1}{\\sqrt{3}}A\\mathbf{v}_1 = \\frac{1}{\\sqrt{6}}(1, 1, 2)^T$, $\\mathbf{u}_2 = A\\mathbf{v}_2 = \\frac{1}{\\sqrt{2}}(1, -1, 0)^T$. Extend with $\\mathbf{u}_3 = \\frac{1}{\\sqrt{3}}(-1, -1, 1)^T$.`,
// //     before: ``,
// //     after: ``,
// //     link: ``,
// //   },
// //   obj5: {
// //     title: `Compact and Thin Forms`,
// //     content: `The full SVD has $U$ of size $m \\times m$, $\\Sigma$ of size $m \\times n$, and $V$ of size $n \\times n$. Two economical alternatives retain only the essential information.

// // The thin SVD keeps only the first $n$ columns of $U$ (call them $U_1$) and the top $n \\times n$ block of $\\Sigma$ (call it $\\Sigma_1$): $A = U_1 \\Sigma_1 V^T$. This drops the columns of $U$ corresponding to the [left null space](!/linear-algebra/vector-spaces/fundamental-spaces).

// // The compact SVD keeps only the first $r$ columns of $U$ and $V$ (where $r = \\text{rank}(A)$) and the $r \\times r$ diagonal block of nonzero singular values: $A = U_r \\Sigma_r V_r^T$. This is the most economical representation — it captures only the rank-$r$ content of $A$, discarding everything associated with zero singular values.

// // All three forms represent the same matrix $A$. The compact form uses the least storage; the full form provides bases for all four [fundamental subspaces](!/linear-algebra/vector-spaces/fundamental-spaces). The three variants line up cleanly on factor dimensions and on what each one chooses to keep.`,
// //     before: ``,
// //     after: ``,
// //     link: ``,
// //   },
// //   obj6: {
// //     title: `SVD and the Four Fundamental Subspaces`,
// //     content: `The SVD simultaneously provides orthonormal [bases](!/linear-algebra/vector-spaces) for all four [fundamental subspaces](!/linear-algebra/vector-spaces/fundamental-spaces) of $A$:

// // @academic[formula_callout:svd_four_fundamental_subspaces|SVD Four Fundamental Subspaces|$$\\begin{aligned} \\text{Col}(A) &= \\text{Span}\\{\\mathbf{u}_1, \\ldots, \\mathbf{u}_r\\} \\\\ \\text{Null}(A^T) &= \\text{Span}\\{\\mathbf{u}_{r+1}, \\ldots, \\mathbf{u}_m\\} \\\\ \\text{Row}(A) &= \\text{Span}\\{\\mathbf{v}_1, \\ldots, \\mathbf{v}_r\\} \\\\ \\text{Null}(A) &= \\text{Span}\\{\\mathbf{v}_{r+1}, \\ldots, \\mathbf{v}_n\\} \\end{aligned}$$]@
// // @academic[formulas_link:/linear-algebra/formulas#svd_four_fundamental_subspaces]@

// // The first $r$ columns of $V$ ($\\mathbf{v}_1, \\dots, \\mathbf{v}_r$) form an orthonormal basis for the row space of $A$.

// // The last $n - r$ columns of $V$ ($\\mathbf{v}_{r+1}, \\dots, \\mathbf{v}_n$) form an orthonormal basis for the [null space](!/linear-algebra/vector-spaces/fundamental-spaces) of $A$.

// // The first $r$ columns of $U$ ($\\mathbf{u}_1, \\dots, \\mathbf{u}_r$) form an orthonormal basis for the [column space](!/linear-algebra/vector-spaces/fundamental-spaces) of $A$.

// // The last $m - r$ columns of $U$ ($\\mathbf{u}_{r+1}, \\dots, \\mathbf{u}_m$) form an orthonormal basis for the left null space of $A$.

// // No other factorization provides all four bases simultaneously, and no other method guarantees that these bases are orthonormal. The SVD is the complete structural portrait of any matrix.`,
// //     before: ``,
// //     after: ``,
// //     link: ``,
// //   },
// //   obj7: {
// //     title: `The Pseudoinverse`,
// //     content: `The Moore-Penrose pseudoinverse $A^+$ is computed directly from the SVD:

// // @academic[formula_callout:moore_penrose_pseudoinverse|Moore-Penrose Pseudoinverse|$$A^+ = V\\Sigma^+ U^T$$]@
// // @academic[formulas_link:/linear-algebra/formulas#moore_penrose_pseudoinverse]@

// // The matrix $\\Sigma^+$ is formed by reciprocating each nonzero singular value and transposing the shape: if $\\Sigma$ is $m \\times n$ with diagonal entries $\\sigma_1, \\dots, \\sigma_r, 0, \\dots, 0$, then $\\Sigma^+$ is $n \\times m$ with diagonal entries $1/\\sigma_1, \\dots, 1/\\sigma_r, 0, \\dots, 0$.

// // The pseudoinverse satisfies four defining properties: $AA^+A = A$, $A^+AA^+ = A^+$, $(AA^+)^T = AA^+$, $(A^+A)^T = A^+A$.

// // For a full-rank overdetermined system ($m > n$, rank $= n$), $A^+\\mathbf{b}$ gives the [least-squares](!/linear-algebra/orthogonality/least-squares) solution. For a rank-deficient system, $A^+\\mathbf{b}$ gives the minimum-norm least-squares solution — the solution of smallest length among all minimizers of $\\|A\\mathbf{x} - \\mathbf{b}\\|$.`,
// //     before: ``,
// //     after: ``,
// //     link: ``,
// //   },
// //   obj8: {
// //     title: `Low-Rank Approximation`,
// //     content: `The best rank-$k$ approximation to $A$ in either the operator norm or the Frobenius norm is obtained by truncating the SVD at $k$ terms:

// // @academic[formula_callout:eckart_young_low_rank_approximation|Eckart-Young Low-Rank Approximation|$$A_k = \\sum_{i=1}^{k} \\sigma_i \\mathbf{u}_i \\mathbf{v}_i^T, \\qquad \\|A - A_k\\|_2 = \\sigma_{k+1}, \\quad \\|A - A_k\\|_F = \\sqrt{\\sum_{i=k+1}^{r}\\sigma_i^2}$$]@
// // @academic[formulas_link:/linear-algebra/formulas#eckart_young_low_rank_approximation]@

// // This is the Eckart-Young-Mirsky theorem. Among all matrices of rank at most $k$, $A_k$ is the closest to $A$. The approximation error equals $\\sigma_{k+1}$ (the first discarded singular value) in the operator norm, and $\\sqrt{\\sigma_{k+1}^2 + \\cdots + \\sigma_r^2}$ in the Frobenius norm.

// // When the singular values decay rapidly — $\\sigma_1 \\gg \\sigma_2 \\gg \\cdots$ — a small number of terms captures most of the matrix. This is the basis of image compression (store $k$ singular value triples instead of $mn$ entries), noise reduction (discard small singular values as noise), latent semantic analysis (retain the top-$k$ "concepts" in a document-term matrix), and dimensionality reduction more broadly.`,
// //     before: ``,
// //     after: ``,
// //     link: ``,
// //   },
// //   obj9: {
// //     title: `SVD and Norms`,
// //     content: `The singular values provide the complete "size profile" of a matrix.

// // The operator (spectral) norm is the largest singular value:

// // @academic[formula_callout:operator_norm|Operator Norm|$$\\|A\\|_2 = \\sigma_1 = \\max_{\\|\\mathbf{x}\\|=1} \\|A\\mathbf{x}\\|$$]@
// // @academic[formulas_link:/linear-algebra/formulas#operator_norm]@

// // It measures the maximum factor by which $A$ can stretch a unit vector.

// // The [Frobenius norm](!/linear-algebra/matrix/trace) is the root-sum-of-squares of all singular values:

// // @academic[formula_callout:frobenius_norm_via_singular_values|Frobenius Norm via Singular Values|$$\\|A\\|_F = \\sqrt{\\sum_{i=1}^{r} \\sigma_i^2}$$]@
// // @academic[formulas_link:/linear-algebra/formulas#frobenius_norm_via_singular_values]@

// // It measures the total "energy" in the matrix.

// // The condition number quantifies sensitivity to perturbation:

// // @academic[formula_callout:condition_number|Condition Number|$$\\kappa(A) = \\frac{\\sigma_1}{\\sigma_r}$$]@
// // @academic[formulas_link:/linear-algebra/formulas#condition_number]@

// // A matrix with $\\kappa = 10^k$ loses roughly $k$ digits of accuracy in solving $A\\mathbf{x} = \\mathbf{b}$ with floating-point arithmetic. A perfectly conditioned matrix ($\\kappa = 1$) is orthogonal. A singular matrix ($\\sigma_r = 0$) has $\\kappa = \\infty$.

// // The singular values are the natural measuring tool for matrices, just as eigenvalues are the natural measuring tool for symmetric matrices and [linear operators](!/linear-algebra/transformations). For non-symmetric matrices, singular values (not eigenvalues) govern norms and conditioning.`,
// //     before: ``,
// //     after: ``,
// //     link: ``,
// //   },
// //   obj10: {
// //     title: `SVD and the Spectral Decomposition`,
// //     content: `For a symmetric positive semi-definite matrix $A$ with eigenvalues $\\lambda_1 \\geq \\cdots \\geq \\lambda_n \\geq 0$, the [spectral decomposition](!/linear-algebra/decompositions/spectral) $A = QDQ^T$ is also the SVD: $U = V = Q$ and $\\Sigma = D$. The singular values are the eigenvalues.

// // For a general symmetric matrix with some negative eigenvalues, the singular values are $|\\lambda_i|$. The signs are absorbed into $U$ or $V$: if $\\lambda_i < 0$, one of the corresponding singular vectors is negated so that $\\sigma_i = |\\lambda_i| > 0$.

// // For non-symmetric or rectangular matrices, the eigendecomposition does not apply (it requires square matrices and may not exist even then), but the SVD always does. The SVD is the correct generalization of the spectral decomposition to the broadest possible class of matrices.`,
// //     before: ``,
// //     after: ``,
// //     link: ``,
// //   },
// //   obj11: {
// //     title: `The Outer Product Form`,
// //     content: `The SVD can be written as a sum of rank-one matrices:

// // @academic[formula_callout:svd_outer_product_form|SVD Outer Product Form|$$A = \\sum_{i=1}^{r} \\sigma_i \\, \\mathbf{u}_i \\mathbf{v}_i^T$$]@
// // @academic[formulas_link:/linear-algebra/formulas#svd_outer_product_form]@

// // Each term $\\sigma_i \\mathbf{u}_i\\mathbf{v}_i^T$ is an $m \\times n$ rank-one matrix. The singular value $\\sigma_i$ weights its contribution. The terms are ordered by importance: the first term captures the most of $A$ (in the norm sense), the second captures the most of the remainder, and so on.

// // Truncating this sum at $k$ terms gives the best rank-$k$ approximation $A_k$. The fraction of the Frobenius norm captured by the first $k$ terms is $(\\sigma_1^2 + \\cdots + \\sigma_k^2)/(\\sigma_1^2 + \\cdots + \\sigma_r^2)$.

// // This outer product perspective is the basis of nearly every matrix approximation method: keep the large singular values (signal) and discard the small ones (noise or redundancy).`,
// //     before: ``,
// //     after: ``,
// //     link: ``,
// //   },
// //   obj12: {
// //     title: `What the SVD Reveals`,
// //     content: `No other single factorization provides as much structural information about a matrix.

// // The [rank](!/linear-algebra/matrix/rank): the number of nonzero singular values.

// // The four [fundamental subspaces](!/linear-algebra/vector-spaces/fundamental-spaces): orthonormal bases from the columns of $U$ and $V$.

// // The [pseudoinverse](!/linear-algebra/orthogonality/least-squares): $A^+ = V\\Sigma^+ U^T$.

// // The best rank-$k$ approximation: truncate at $k$ terms.

// // Norms and the condition number: directly from the singular values.

// // The [geometry](!/linear-algebra/transformations/geometric) of the linear map: rotation, scaling, rotation.

// // For symmetric matrices, the SVD reduces to the [spectral decomposition](!/linear-algebra/decompositions/spectral). For invertible square matrices, the singular values reveal the conditioning that the [determinant](!/linear-algebra/determinants) alone cannot see (a matrix with $\\det = 1$ can still be poorly conditioned). For rectangular matrices, the SVD is the only factorization that applies without modification.

// // The SVD is the culmination of the decomposition hierarchy — the most general, most informative, and most broadly applicable factorization in linear algebra.

// // The six structural quantities the SVD exposes — rank, the four fundamental subspaces, the pseudoinverse, the best rank-$k$ approximation, norms and condition number, and the geometric decomposition — collect into a single reference card below.`,
// //     before: ``,
// //     after: ``,
// //     link: ``,
// //   },
// // }

// // const introContent = {
// //   title: `The Universal Matrix Factorization`,
// //   content: `The singular value decomposition, written SVD, factors any matrix of any shape as UΣVᵀ — two orthogonal matrices sandwiching a diagonal matrix of non-negative singular values. It exists for every matrix, reveals the rank, provides orthonormal bases for all four fundamental subspaces, computes the pseudoinverse, yields the best low-rank approximation, and decomposes every linear transformation into a rotation, a scaling, and another rotation. No other single factorization provides this much information.`,
// // }

// // const faqQuestions = {
// //   obj1: {
// //     question: "What is the singular value decomposition?",
// //     answer: "The SVD factors any m×n matrix A as A = UΣVᵀ, where U and V are orthogonal matrices of left and right singular vectors, and Σ is diagonal with non-negative singular values. It exists for every matrix regardless of shape, rank, or symmetry.",
// //     sectionId: "1"
// //   },
// //   obj2: {
// //     question: "What do singular values represent geometrically?",
// //     answer: "Singular values measure how much a matrix stretches vectors along each orthogonal direction. The largest singular value σ₁ is the maximum stretching factor, and the transformation A decomposes geometrically into a rotation (Vᵀ), a coordinate-axis scaling (Σ), and another rotation (U).",
// //     sectionId: "2"
// //   },
// //   obj3: {
// //     question: "How does SVD give the best low-rank approximation?",
// //     answer: "The Eckart-Young-Mirsky theorem states that truncating the SVD at k terms gives the closest rank-k matrix to A in both operator and Frobenius norms. The approximation error equals σₖ₊₁ in operator norm. This is the basis of image compression and noise reduction.",
// //     sectionId: "8"
// //   },
// //   obj4: {
// //     question: "How is the pseudoinverse computed from the SVD?",
// //     answer: "The Moore-Penrose pseudoinverse is A⁺ = VΣ⁺Uᵀ, where Σ⁺ reciprocates each nonzero singular value and transposes the shape. For overdetermined systems A⁺b gives the least-squares solution; for rank-deficient systems it gives the minimum-norm least-squares solution.",
// //     sectionId: "7"
// //   },
// //   obj5: {
// //     question: "How does SVD reveal the four fundamental subspaces?",
// //     answer: "The first r columns of V span the row space, the remaining n−r columns span the null space. The first r columns of U span the column space, the remaining m−r columns span the left null space. No other factorization provides orthonormal bases for all four subspaces simultaneously.",
// //     sectionId: "6"
// //   },
// //   obj6: {
// //     question: "What is the condition number of a matrix?",
// //     answer: "The condition number κ(A) = σ₁/σᵣ is the ratio of the largest to smallest nonzero singular value. It measures sensitivity to perturbation: a matrix with κ = 10ᵏ loses roughly k digits of accuracy in floating-point computation. Orthogonal matrices have κ = 1; singular matrices have κ = ∞.",
// //     sectionId: "9"
// //   }
// // }


// // const schemas = {
// //   learningResource: {
// //     "@context": "https://schema.org",
// //     "@type": "LearningResource",
// //     "name": "Singular Value Decomposition (SVD)",
// //     "description": "Singular value decomposition A = UΣVᵀ: singular values, geometric interpretation, pseudoinverse, low-rank approximation, four fundamental subspaces, norms, and condition number.",
// //     "url": "https://www.learnmathclass.com/linear-algebra/decompositions/svd",
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
// //       "name": "Singular Value Decomposition"
// //     },
// //     "teaches": [
// //       "SVD factorization A = UΣVᵀ for any matrix",
// //       "Geometric interpretation as rotation-scaling-rotation",
// //       "Singular values from eigenvalues of AᵀA",
// //       "Four fundamental subspaces from U and V",
// //       "Moore-Penrose pseudoinverse via SVD",
// //       "Best low-rank approximation (Eckart-Young theorem)",
// //       "Matrix norms and condition number from singular values",
// //       "Outer product form and relationship to spectral decomposition",
// //       "Side-by-side comparison of full, thin, and compact SVD forms",
// //       "Reference card collecting everything the SVD reveals about a matrix"
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
// //         "name": "Singular Value Decomposition",
// //         "item": "https://www.learnmathclass.com/linear-algebra/decompositions/svd"
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
// //     obj1Blocks,
// //     svdForms,
// //     obj6Table,
// //     obj9Table,
// //     svdReadings,
// //     faqQuestions,
// //     schemas,
// //     seoData: {
// //       title: "SVD: Singular Value Decomposition | Learn Math Class",
// //       description: "Singular value decomposition A = UΣVᵀ: singular values, geometric interpretation, pseudoinverse, low-rank approximation, four fundamental subspaces, norms, and condition number.",
// //       keywords: keyWords.join(", "),
// //       url: "/linear-algebra/decompositions/svd",
// //       name: "Singular Value Decomposition (SVD)"
// //     },
// //   }
// // }
// //    }

// // export default function SVDPage({
// //   seoData,
// //   sectionsContent,
// //   introContent,
// //   obj1Blocks,
// //   svdForms,
// //   obj6Table,
// //   obj9Table,
// //   svdReadings,
// //   faqQuestions,
// //   schemas,
// // }) {

// //   const tableWrapStyle = { margin: '20px auto', width: '100%' }
// //   const svgStyle = { display: 'block', margin: '0 auto', maxWidth: '100%' }

// //   // ---------- figures for the concept introduction ----------

// //   const oneBasisFigure = (
// //     <svg viewBox="0 0 620 200" width="100%" style={svgStyle}>
// //       <defs>
// //         <marker id="svdArNavy" markerWidth="9" markerHeight="9" refX="7" refY="3.2" orient="auto">
// //           <path d="M0,0 L0,6.4 L7.5,3.2 z" fill="#06357a" />
// //         </marker>
// //         <marker id="svdArDim" markerWidth="9" markerHeight="9" refX="7" refY="3.2" orient="auto">
// //           <path d="M0,0 L0,6.4 L7.5,3.2 z" fill="#8a93a0" />
// //         </marker>
// //       </defs>
// //       <rect x="26" y="20" width="250" height="158" fill="#ffffff" stroke="#e2e6ec" />
// //       <text x="151" y="13" fontSize="12.5" fill="#7c8794" textAnchor="middle">one space &mdash; input and output</text>
// //       <line x1="56" y1="146" x2="256" y2="146" stroke="#cfd6df" />
// //       <line x1="86" y1="36" x2="86" y2="168" stroke="#cfd6df" />
// //       <line x1="86" y1="146" x2="166" y2="106" stroke="#06357a" strokeWidth="2" markerEnd="url(#svdArNavy)" />
// //       <text x="146" y="99" fontSize="13" fill="#06357a" fontStyle="italic">p&#8321;</text>
// //       <line x1="86" y1="146" x2="126" y2="66" stroke="#06357a" strokeWidth="2" markerEnd="url(#svdArNavy)" />
// //       <text x="130" y="62" fontSize="13" fill="#06357a" fontStyle="italic">p&#8322;</text>
// //       <line x1="86" y1="146" x2="236" y2="71" stroke="#8a93a0" strokeWidth="1.6" strokeDasharray="5,4" markerEnd="url(#svdArDim)" />
// //       <text x="211" y="62" fontSize="12.5" fill="#8a93a0" fontStyle="italic">&lambda;&#8321;p&#8321;</text>
// //       <text x="151" y="194" fontSize="13" fill="#34495e" textAnchor="middle">the image of p&#8321; is written using p&#8321; itself</text>
// //       <text x="326" y="42" fontSize="12.5" fill="#a4243b" fontWeight="bold">Two ways this breaks</text>
// //       <line x1="326" y1="58" x2="592" y2="58" stroke="#e2e6ec" />
// //       <text x="326" y="80" fontSize="13.5" fill="#34495e">A is 3 &times; 2 &mdash; input and output</text>
// //       <text x="326" y="98" fontSize="13.5" fill="#34495e">live in different spaces, so one</text>
// //       <text x="326" y="116" fontSize="13.5" fill="#34495e">basis cannot describe both.</text>
// //       <text x="592" y="80" fontSize="15" fill="#a4243b" textAnchor="end" fontWeight="bold">&#10007;</text>
// //       <line x1="326" y1="130" x2="592" y2="130" stroke="#e2e6ec" />
// //       <text x="326" y="152" fontSize="13.5" fill="#34495e">A is square but defective &mdash; every</text>
// //       <text x="326" y="170" fontSize="13.5" fill="#34495e">eigenvector is a multiple of (1, 0),</text>
// //       <text x="326" y="188" fontSize="13.5" fill="#34495e">so no basis of them exists.</text>
// //       <text x="592" y="152" fontSize="15" fill="#a4243b" textAnchor="end" fontWeight="bold">&#10007;</text>
// //     </svg>
// //   )

// //   const twoBasesFigure = (
// //     <svg viewBox="0 0 660 250" width="100%" style={svgStyle}>
// //       <defs>
// //         <marker id="svdArV" markerWidth="9" markerHeight="9" refX="7" refY="3.2" orient="auto">
// //           <path d="M0,0 L0,6.4 L7.5,3.2 z" fill="#1f6f8b" />
// //         </marker>
// //         <marker id="svdArU" markerWidth="9" markerHeight="9" refX="7" refY="3.2" orient="auto">
// //           <path d="M0,0 L0,6.4 L7.5,3.2 z" fill="#b8860b" />
// //         </marker>
// //         <marker id="svdArBig" markerWidth="11" markerHeight="11" refX="8" refY="4" orient="auto">
// //           <path d="M0,0 L0,8 L9,4 z" fill="#06357a" />
// //         </marker>
// //       </defs>
// //       <text x="140" y="26" fontSize="12.5" fill="#7c8794" textAnchor="middle">input space &#8477;&#8319;</text>
// //       <line x1="40" y1="130" x2="240" y2="130" stroke="#cfd6df" />
// //       <line x1="140" y1="40" x2="140" y2="220" stroke="#cfd6df" />
// //       <circle cx="140" cy="130" r="58" fill="#eef2f8" stroke="#06357a" strokeWidth="1.6" />
// //       <line x1="140" y1="130" x2="195" y2="112" stroke="#1f6f8b" strokeWidth="2.4" markerEnd="url(#svdArV)" />
// //       <text x="200" y="106" fontSize="13.5" fill="#1f6f8b" fontWeight="bold">v&#8321;</text>
// //       <line x1="140" y1="130" x2="158" y2="75" stroke="#1f6f8b" strokeWidth="2.4" markerEnd="url(#svdArV)" />
// //       <text x="162" y="70" fontSize="13.5" fill="#1f6f8b" fontWeight="bold">v&#8322;</text>
// //       <text x="140" y="238" fontSize="13" fill="#34495e" textAnchor="middle">unit circle, orthonormal basis</text>
// //       <line x1="262" y1="130" x2="368" y2="130" stroke="#06357a" strokeWidth="2" markerEnd="url(#svdArBig)" />
// //       <text x="315" y="120" fontSize="15" fill="#06357a" textAnchor="middle" fontStyle="italic">A</text>
// //       <text x="315" y="154" fontSize="14" fill="#06357a" textAnchor="middle" fontWeight="bold">Av&#7522; = &sigma;&#7522;u&#7522;</text>
// //       <text x="500" y="26" fontSize="12.5" fill="#7c8794" textAnchor="middle">output space &#8477;&#7504;</text>
// //       <line x1="380" y1="130" x2="630" y2="130" stroke="#cfd6df" />
// //       <line x1="500" y1="40" x2="500" y2="220" stroke="#cfd6df" />
// //       <ellipse cx="500" cy="130" rx="105" ry="40" fill="#fbf6e8" stroke="#b8860b" strokeWidth="1.6" transform="rotate(-18 500 130)" />
// //       <line x1="500" y1="130" x2="600" y2="98" stroke="#b8860b" strokeWidth="2.6" markerEnd="url(#svdArU)" />
// //       <text x="586" y="88" fontSize="13.5" fill="#b8860b" fontWeight="bold">&sigma;&#8321;u&#8321;</text>
// //       <line x1="500" y1="130" x2="512" y2="92" stroke="#b8860b" strokeWidth="2.6" markerEnd="url(#svdArU)" />
// //       <text x="516" y="86" fontSize="13.5" fill="#b8860b" fontWeight="bold">&sigma;&#8322;u&#8322;</text>
// //       <text x="500" y="238" fontSize="13" fill="#34495e" textAnchor="middle">ellipse, axes &sigma;&#8321; and &sigma;&#8322; along a different orthonormal basis</text>
// //     </svg>
// //   )

// //   // React elements cannot serialize through getStaticProps, so the figures are
// //   // attached here, keyed by block id.
// //   const obj1Visuals = {
// //     'two-failures': oneBasisFigure,
// //     'circle-ellipse': twoBasesFigure,
// //   }

// //   const obj1Data = {
// //     blocks: obj1Blocks.map(block =>
// //       obj1Visuals[block.id] ? { ...block, visual: obj1Visuals[block.id] } : block
// //     ),
// //   }

// //   const genericSections=[
// //     {
// //         id:'1',
// //         title:sectionsContent.obj1.title,
// //         link:sectionsContent.obj1.link,
// //         content:[
// //           <ConceptIntro key={'obj1-intro'} data={obj1Data} />,
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
// //           <DiagramFrame
// //             key={'obj5-diagram'}
// //             id="svd-forms"
// //             title="Three forms, one factorization"
// //             source="/linear-algebra/decompositions/svd"
// //           >
// //             <ObjectTypeProfile data={svdForms} theme="navy" variant="stack" />
// //           </DiagramFrame>,
// //           `The distinction to keep hold of is that none of these is an approximation. Each drops columns that multiply against zero singular values, so the product is unchanged and $A$ is reconstructed exactly in all three. What is lost is not accuracy but the orthogonality of $U$ as a square matrix — $U_r^{\\mathsf{T}}U_r = I_r$ still holds, but $U_rU_r^{\\mathsf{T}}$ no longer does, and any argument relying on the left null space needs the full form.`,
// //         ]
// //     },
// //     {
// //         id:'6',
// //         title:sectionsContent.obj6.title,
// //         link:sectionsContent.obj6.link,
// //         content:[
// //           sectionsContent.obj6.content,
// //           <div key={'obj6-table'} style={tableWrapStyle}
// //                dangerouslySetInnerHTML={{ __html: obj6Table }} />,
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
// //           <div key={'obj9-table'} style={tableWrapStyle}
// //                dangerouslySetInnerHTML={{ __html: obj9Table }} />,
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
// //         ]
// //     },
// //     {
// //         id:'12',
// //         title:sectionsContent.obj12.title,
// //         link:sectionsContent.obj12.link,
// //         content:[
// //           sectionsContent.obj12.content,
// //           `Grouping these by which factor supplies the answer is what makes them one computation rather than seven. Three come from the singular values alone, two from the columns of the orthogonal factors, and two require reading all three factors together. Nothing below needs the matrix again once the factorization is in hand.`,
// //           <DiagramFrame
// //             key={'obj12-diagram'}
// //             id="svd-readings"
// //             title="What the SVD reveals"
// //             source="/linear-algebra/decompositions/svd"
// //           >
// //             <IdentitySheet data={svdReadings} theme="navy" variant="ledger" />
// //           </DiagramFrame>,
// //           `Two of these deserve emphasis because nothing else supplies them. The **condition number** measures how badly a system amplifies error, and it is invisible to the determinant — a matrix can have determinant one and still be nearly singular in some direction. **Low-rank approximation** is optimal rather than merely reasonable: truncating the sum at $k$ terms gives the closest rank-$k$ matrix in every unitarily invariant norm, with error exactly $\\sigma_{k+1}$.`,
// //           `The reason all of this comes from one factorization is that the SVD asks nothing of the matrix. It need not be square, invertible, symmetric or full rank — the factorization exists regardless, which is what separates it from every other decomposition in this section and why it is the one to reach for when the matrix is unknown.`,
// //         ]
// //     },

// // ]

// //   return (
// //    <>

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
// //    <br/>
// //    <br/>
// //    <br/>
// //    <br/>
// //     <OperaSidebar
// //            side='right'
// //            sidebarWidth='45px'
// //            panelWidth='200px'
// //            iconColor='white'
// //            panelBackgroundColor='#f2f2f2'
// //          />
// //    <Breadcrumb/>
// //    <br/>
// //    <br/>
// //    <h1 className='title' style={{marginTop:'0px',marginBottom:'10px'}}>Singular Value Decomposition</h1>
// //    <br/>
// //    <br/>
// //    <SectionTableOfContents sections={genericSections}
// //     showSecondaryNav={true}
// //          secondaryNavMode="siblings"
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
// //           textColor="#06357a"
// //         />
// //    <br/>
// //    <br/>
// //    <Sections sections={genericSections}/>
// //    <br/>
// //    <br/>
// //    <br/>
// //    </>
// //   )
// // }




// // tables-optimized: v4 | 2026-05-18 | 4 tables (obj5 comparison, obj6 aggregation, obj9 aggregation, obj12 summary capstone)
// // intro-rewritten: v7 | diagrams at 80% | obj1 = one ConceptIntro call, ordered block array
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
// import ObjectTypeProfile from '@/app/components/infographics/linear-algebra/ObjectTypeProfile'
// import DiagramFrame from '@/app/components/infographics/DiagramsFrame'
// import ConceptIntro from '@/app/components/page-components/content-components/ConceptIntro'


// export async function getStaticProps(){
// const keyWords = [
//   "singular value decomposition",
//   "SVD",
//   "singular values",
//   "left right singular vectors",
//   "low-rank approximation",
//   "pseudoinverse SVD",
//   "Moore-Penrose pseudoinverse",
//   "Eckart-Young theorem",
//   "matrix rank SVD",
//   "condition number singular values",
//   "four fundamental subspaces SVD",
//   "compact SVD thin SVD",
//   "SVD image compression",
//   "operator norm Frobenius norm",
//   "UΣVᵀ factorization"
// ]

//   const linkStyle = 'color: inherit; text-decoration: underline;'

//   // ---------- obj1 · concept introduction ----------
//   // One ordered array. Visual elements are attached in the page component,
//   // keyed by block id, since React elements cannot serialize through props.

//   const obj1Blocks = [
//     {
//       id: 'the-obstacle',
//       type: 'text',
//       content: `A matrix mixes coordinates. Every entry of the output is assembled from every entry of the input, so almost nothing worth knowing about $A$ can be read from $A$ itself. What is $A^{10}$? Multiply ten times and find out. What happens to a vector pushed through $A$ a thousand times — does it grow, shrink, settle into some direction? There is no answer short of running it.`,
//     },
//     {
//       id: 'the-remedy',
//       type: 'text',
//       content: `Factorization removes the obstacle. Split $A$ into factors that each do one simple thing, and questions that required arithmetic can be settled by inspection.`,
//     },
//     {
//       id: 'sub-diagonalization',
//       type: 'subtitle',
//       text: `Diagonalization and Its Requirement`,
//     },
//     {
//       id: 'incumbent',
//       type: 'text',
//       content: `[Diagonalization](!/linear-algebra/eigen/diagonalization) does exactly that. Writing $A = PDP^{-1}$ amounts to changing coordinates so that the mixing is absent: the columns of $P$ are directions the matrix only stretches, $D$ holds the stretching factors, and in that basis no coordinate influences any other.`,
//     },
//     {
//       id: 'consequences',
//       type: 'instance',
//       lead: `Every question above then collapses.`,
//       content: `The tenth power is $A^{10} = PD^{10}P^{-1}$, and $D^{10}$ raises a handful of diagonal entries to the tenth. The inverse is $PD^{-1}P^{-1}$, with no elimination anywhere. Long-run behaviour is governed by whichever $\\lambda$ is largest. Nothing is approximated and nothing is recomputed — the work was done once, when the factorization was found.`,
//     },
//     {
//       id: 'the-requirement',
//       type: 'text',
//       content: `That performance comes with a condition, and the condition is visible in the formula. The same matrix $P$ stands on both sides of $A = PDP^{-1}$: its columns are used to read the input and again to write the output. The factorization requires that both ends be described in identical terms — one basis, serving twice.`,
//     },
//     {
//       id: 'two-failures',
//       type: 'instance',
//       lead: `Two matrices, two ways the requirement fails.`,
//       content: `A $3 \\times 2$ matrix takes vectors from $\\mathbb{R}^2$ and returns vectors in $\\mathbb{R}^3$, so no single basis can describe both ends, and the question of an [eigenvector](!/linear-algebra/eigen) cannot even be posed: $A\\mathbf{v} = \\lambda\\mathbf{v}$ compares vectors living in different spaces. A defective matrix fails otherwise. It is square, but every eigenvector is a multiple of one direction, so no basis of eigenvectors exists and $P$ cannot be assembled. Rectangular shape excludes diagonalization in principle, defective structure excludes it in practice, and between them they account for most matrices anyone meets.`,
//     },
//     {
//       id: 'sub-two-bases',
//       type: 'subtitle',
//       text: `Two Bases Instead of One`,
//     },
//     {
//       id: 'relaxation',
//       type: 'text',
//       content: `Nothing forced the two bases to coincide. That was an additional demand, and it can be withdrawn. Admit one orthonormal basis for the input space and a separate one for the output space, and require only that the matrix carry the first to the second with a scaling in between. Equal dimensions are then unnecessary, fixed directions are unnecessary, and both obstructions vanish together.`,
//     },
//     {
//       id: 'circle-ellipse',
//       type: 'instance',
//       caption: `The unit circle becomes an ellipse. Each $\\mathbf{v}_i$ is carried to a multiple of $\\mathbf{u}_i$, and $\\sigma_i$ is that multiple.`,
//       content: `The picture states the entire factorization in one equation. There is an orthonormal basis $\\mathbf{v}_1, \\dots, \\mathbf{v}_n$ of the input space and an orthonormal basis $\\mathbf{u}_1, \\dots, \\mathbf{u}_m$ of the output space satisfying $A\\mathbf{v}_i = \\sigma_i \\mathbf{u}_i$ for every $i$. Each input basis vector is sent to a multiple of a single output basis vector, and to nothing else.`,
//     },
//     {
//       id: 'definition',
//       type: 'definition',
//       kicker: 'The definition',
//       statement: `Collecting those $n$ statements into one matrix equation gives the [singular value decomposition](!/linear-algebra/definitions#singular_value): an orthonormal input basis in $V$, an orthonormal output basis in $U$, and the scaling factors between them along the diagonal of $\\Sigma$.`,
//       formula: `@academic[formula_callout:svd|SVD|$$A = U\\Sigma V^T$$]@
// @academic[formulas_link:/linear-algebra/formulas#svd]@`,
//       gloss: `It is a factorization, not an approximation: the three matrices multiply back to $A$ exactly, with no error term and no conditions attached.`,
//       kindOfThing: `$U$ is $m \\times m$ [orthogonal](!/linear-algebra/matrix/types) and its columns are the left singular vectors. $V$ is $n \\times n$ orthogonal and its columns are the right singular vectors. $\\Sigma$ is $m \\times n$, zero everywhere off the diagonal, carrying $\\sigma_1 \\geq \\sigma_2 \\geq \\cdots \\geq 0$ along it. Those are the singular values, and they are the lengths of the semi-axes of the ellipse above.`,
//     },
//     {
//       id: 'sub-consequences',
//       type: 'subtitle',
//       text: `What Follows and What Does Not`,
//     },
//     {
//       id: 'follows',
//       type: 'text',
//       content: `Several properties follow from the construction rather than from any further assumption. Both bases are orthonormal rather than merely independent, so $U^{-1} = U^T$ and $V^{-1} = V^T$ and neither factor is ever inverted. The scaling factors are real and non-negative, since they measure lengths, and can therefore be ordered from largest to smallest — an ordering no set of [eigenvalues](!/linear-algebra/eigen) admits, eigenvalues being possibly complex. And the factorization exists for every matrix without exception: any shape, any [rank](!/linear-algebra/matrix/rank), [symmetric](!/linear-algebra/matrix/types) or not, [invertible](!/linear-algebra/matrix/inverse) or not.`,
//     },
//     {
//       id: 'limitation',
//       type: 'text',
//       content: `The same relaxation imposes a limitation. Since $U$ and $V$ are distinct, they do not cancel when the matrix is applied twice: $A^2 = U\\Sigma V^TU\\Sigma V^T$, and the interior $V^TU$ reduces to nothing. The question this section opened with — the tenth power, the long run — is therefore the one question the singular value decomposition cannot answer and diagonalization can. The two factorizations address different questions: one invariant directions, the other stretching. What the three factors do to a vector geometrically is the subject of the next section.`,
//     },
//   ]

//   // ---------- TABLES ----------

//   // obj5 — three storage forms of one factorization
//   const svdForms = {
//     kicker: 'Decompositions \u00B7 SVD',
//     title: 'Three forms, one factorization',
//     tallyLabel: 'forms',
//     intro: 'All three reconstruct $A$ exactly. They differ in how much of $U$ and $\\Sigma$ is kept \u2014 and what is dropped is precisely the part that multiplies against zero singular values.',
//     footnote: 'Nothing is approximated anywhere in this table. The full form carries orthonormal bases for all four [fundamental subspaces](!/linear-algebra/vector-spaces/fundamental-spaces), which is why it is the one to state theorems with; the compact form carries only what contributes to $A$, which is why it is the one to store. Approximation begins only when the compact form is truncated below rank $r$.',
//     slots: [
//       { key: 'shapes',  label: 'shapes' },
//       { key: 'stored',  label: 'what is kept' },
//       { key: 'dropped', label: 'what is dropped' },
//       { key: 'usedFor', label: 'used for' },
//     ],
//     groups: [
//       {
//         heading: 'Everything kept',
//         types: [
//           {
//             name: 'Full SVD',
//             anchor: '#1',
//             shape: 'dense',
//             condition: '$U$ and $V$ both square and orthogonal',
//             properties: {
//               shapes: '$U: m \\times m$, $\\Sigma: m \\times n$, $V: n \\times n$',
//               stored: 'all of $U$, $V$, and a rectangular $\\Sigma$',
//               dropped: 'nothing',
//               usedFor: 'theory, the four subspaces',
//             },
//             note: 'The only form where $U$ and $V$ are genuinely orthogonal matrices, so $UU^{\\mathsf{T}} = I$ as well as $U^{\\mathsf{T}}U = I$. That is what makes it the form to state results with \u2014 the last $m - r$ columns of $U$ span the left null space and would otherwise be gone.',
//           },
//         ],
//       },
//       {
//         heading: 'Trimmed to what multiplies',
//         types: [
//           {
//             name: 'Thin SVD',
//             anchor: '#5',
//             shape: 'lower',
//             condition: '$m > n$ \u2014 keep $n$ columns of $U$',
//             properties: {
//               shapes: '$U_n: m \\times n$, $\\Sigma_n: n \\times n$, $V: n \\times n$',
//               stored: 'the first $n$ columns of $U$',
//               dropped: 'the last $m - n$ columns of $U$',
//               usedFor: 'least squares on tall matrices',
//             },
//             note: 'The dropped columns multiply rows of $\\Sigma$ that are entirely zero, so removing them changes nothing about the product. Note $U_n$ is no longer square: $U_n^{\\mathsf{T}}U_n = I_n$ still holds, but $U_nU_n^{\\mathsf{T}}$ does not.',
//           },
//           {
//             name: 'Compact SVD',
//             anchor: '#5',
//             shape: 'block',
//             condition: 'keep only the $r$ nonzero singular values',
//             properties: {
//               shapes: '$U_r: m \\times r$, $\\Sigma_r: r \\times r$, $V_r: n \\times r$',
//               stored: 'the rank-$r$ content only',
//               dropped: 'every zero singular value and its vectors',
//               usedFor: 'storage, rank-deficient matrices',
//             },
//             note: 'The most economical exact form: $\\Sigma_r$ is square with a strictly positive diagonal, so it is invertible \u2014 which is what makes the [pseudoinverse](#7) computable as $V_r\\Sigma_r^{-1}U_r^{\\mathsf{T}}$.',
//           },
//         ],
//       },
//     ],
//   }

//   // obj6 — aggregation: four fundamental subspaces from the SVD
//   const obj6Table = `
// <table class="styled-table" style="border-collapse: collapse; width: 75%;margin:auto; background: white; box-shadow: 0 2px 10px rgba(0,0,0,0.1); border-radius: 8px; overflow: hidden; font-family: Arial, sans-serif;">
//   <thead>
//     <tr>
//       <th style="${tableHeaders.aggregation}">Fundamental subspace</th>
//       <th style="${tableHeaders.aggregation} text-align: center;">Basis from</th>
//       <th style="${tableHeaders.aggregation} text-align: center;">Column indices</th>
//       <th style="${tableHeaders.aggregation} text-align: center;">Dimension</th>
//     </tr>
//   </thead>
//   <tbody>
//     <tr style="background: #f8f9fa;">
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Row space of A</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e; text-align: center;">V</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e; text-align: center;">1, ..., r</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e; text-align: center;">r</td>
//     </tr>
//     <tr>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Null space of A</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e; text-align: center;">V</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e; text-align: center;">r+1, ..., n</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e; text-align: center;">n − r</td>
//     </tr>
//     <tr style="background: #f8f9fa;">
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Column space of A</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e; text-align: center;">U</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e; text-align: center;">1, ..., r</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e; text-align: center;">r</td>
//     </tr>
//     <tr>
//       <td style="padding: 12px 15px; font-weight: bold; color: #06357a;">Left null space of A</td>
//       <td style="padding: 12px 15px; color: #34495e; text-align: center;">U</td>
//       <td style="padding: 12px 15px; color: #34495e; text-align: center;">r+1, ..., m</td>
//       <td style="padding: 12px 15px; color: #34495e; text-align: center;">m − r</td>
//     </tr>
//   </tbody>
// </table>
// `

//   // obj9 — aggregation: norms and condition number from singular values
//   const obj9Table = `
// <table class="styled-table" style="border-collapse: collapse; width: 75%;margin:auto; background: white; box-shadow: 0 2px 10px rgba(0,0,0,0.1); border-radius: 8px; overflow: hidden; font-family: Arial, sans-serif;">
//   <thead>
//     <tr>
//       <th style="${tableHeaders.aggregation}">Quantity</th>
//       <th style="${tableHeaders.aggregation}">Formula via singular values</th>
//       <th style="${tableHeaders.aggregation}">Interpretation</th>
//     </tr>
//   </thead>
//   <tbody>
//     <tr style="background: #f8f9fa;">
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Operator (spectral) norm ‖A‖<sub>2</sub></td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">σ<sub>1</sub></td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">maximum stretching factor on the unit ball</td>
//     </tr>
//     <tr>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;"><a href="/linear-algebra/matrix/trace" style="${linkStyle}">Frobenius norm</a> ‖A‖<sub>F</sub></td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">√(σ<sub>1</sub><sup>2</sup> + σ<sub>2</sub><sup>2</sup> + ··· + σ<sub>r</sub><sup>2</sup>)</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">total "energy" — root-sum-of-squares of singular values</td>
//     </tr>
//     <tr style="background: #f8f9fa;">
//       <td style="padding: 12px 15px; font-weight: bold; color: #06357a;">Condition number κ(A)</td>
//       <td style="padding: 12px 15px; color: #34495e;">σ<sub>1</sub> / σ<sub>r</sub></td>
//       <td style="padding: 12px 15px; color: #34495e;">sensitivity to perturbation: κ = 10<sup>k</sup> loses ~k digits</td>
//     </tr>
//   </tbody>
// </table>
// `

//   // obj12 — what one factorization yields, sorted by which factor carries it
//   const svdReadings = {
//     kicker: 'Decompositions \u00B7 SVD',
//     title: 'What the SVD reveals',
//     tallyLabel: 'readings',
//     intro: 'Every entry comes from the same three factors. What changes is which one is being read \u2014 the singular values for size, the columns of $U$ and $V$ for structure, and all three together for geometry.',
//     footnote: 'No other factorization answers this many questions, and none exists for every matrix. That combination is why the SVD is the one to reach for when the matrix is rectangular, rank-deficient, or simply unknown \u2014 the conditions the [other decompositions](!/linear-algebra/decompositions) require are exactly the ones it does without.',
//     groups: [
//       {
//         heading: 'From the singular values',
//         identities: [
//           {
//             name: 'Rank',
//             anchor: '#3',
//             formula: '$r = $ count of $\\sigma_i > 0$',
//             condition: 'strictly positive only',
//             note: 'The most numerically reliable rank there is. Row reduction decides rank by comparing entries against zero, which floating point makes arbitrary; the singular values instead show a gap, and where that gap falls is a judgement the numbers themselves support.',
//           },
//           {
//             name: 'Norms',
//             anchor: '#9',
//             formula: '$\\|A\\|_2 = \\sigma_1, \\quad \\|A\\|_F^2 = \\textstyle\\sum \\sigma_i^2$',
//             condition: 'read straight off the list',
//             note: 'The largest singular value is the most any unit vector is stretched. The Frobenius norm is the whole list in quadrature \u2014 so both common matrix norms are functions of the same numbers.',
//           },
//           {
//             name: 'Condition number',
//             anchor: '#9',
//             formula: '$\\kappa(A) = \\sigma_1 / \\sigma_r$',
//             condition: '$A$ of full rank',
//             strict: true,
//             note: 'The ratio of most to least stretched. A large $\\kappa$ means the matrix is nearly singular in some direction, and small changes to $\\mathbf{b}$ produce large changes to the solution \u2014 which no determinant reports, since a matrix can have $\\det = 1$ and be badly conditioned.',
//           },
//         ],
//       },
//       {
//         heading: 'From the columns of U and V',
//         identities: [
//           {
//             name: 'The four subspaces',
//             anchor: '#6',
//             formula: 'partition $U$ and $V$ at index $r$',
//             condition: 'orthonormal bases, all four at once',
//             key: true,
//             note: 'First $r$ columns of $V$ span the row space and the rest the null space; first $r$ of $U$ span the column space and the rest the left null space. The only method giving [all four](!/linear-algebra/vector-spaces/fundamental-spaces) orthonormally from one computation.',
//           },
//           {
//             name: 'Pseudoinverse',
//             anchor: '#7',
//             formula: '$A^{+} = V\\Sigma^{+}U^{\\mathsf{T}}$',
//             condition: 'reciprocate the nonzero $\\sigma$, leave zeros alone',
//             note: 'Defined for every matrix, square or not, invertible or not. When $A$ is invertible it coincides with $A^{-1}$; otherwise it returns the least-squares solution of minimum norm, which is the sense in which it is the closest thing to an [inverse](!/linear-algebra/matrix/inverse).',
//           },
//         ],
//       },
//       {
//         heading: 'From all three factors',
//         identities: [
//           {
//             name: 'Low-rank approximation',
//             anchor: '#8',
//             formula: '$A_k = \\sum_{i=1}^{k} \\sigma_i \\mathbf{u}_i \\mathbf{v}_i^{\\mathsf{T}}$',
//             condition: 'optimal for every unitarily invariant norm',
//             key: true,
//             note: 'Truncating the outer-product sum gives the best rank-$k$ approximation there is \u2014 the Eckart\u2013Young theorem, and it is why the SVD underlies image compression and principal component analysis. The error is exactly $\\sigma_{k+1}$, so the singular values say in advance how much is lost.',
//           },
//           {
//             name: 'Geometric action',
//             anchor: '#2',
//             formula: '$A = U\\Sigma V^{\\mathsf{T}}$ \u2014 rotate, stretch, rotate',
//             condition: 'every matrix, no hypotheses',
//             note: 'Read right to left: $V^{\\mathsf{T}}$ rotates, $\\Sigma$ scales along axes, $U$ rotates again. Every linear map is those three steps, which is the claim that makes the factorization worth having as geometry rather than only as algebra.',
//           },
//         ],
//       },
//     ],
//   }

// const sectionsContent = {
//   obj1: {
//     title: `What the Singular Value Decomposition Is`,
//     content: ``,
//     before: ``,
//     after: ``,
//     link: ``,
//   },
//   obj2: {
//     title: `The Geometric Interpretation`,
//     content: `Every [linear transformation](!/linear-algebra/transformations) $\\mathbf{x} \\mapsto A\\mathbf{x}$ decomposes into three geometric steps:

// $V^T$ rotates (or reflects) the input space, aligning the input with the "natural axes" of the transformation — the directions along which $A$ stretches most and least.

// $\\Sigma$ scales each axis independently by the corresponding singular value. Axes with $\\sigma_i = 0$ are annihilated — those directions are collapsed to zero.

// $U$ rotates (or reflects) the scaled result into the output space.

// The singular values measure the stretching in each orthogonal direction. $\\sigma_1$ is the maximum stretching: $\\sigma_1 = \\max_{\\|\\mathbf{x}\\|=1}\\|A\\mathbf{x}\\|$. The smallest nonzero singular value $\\sigma_r$ is the minimum stretching on the [row space](!/linear-algebra/vector-spaces/fundamental-spaces). The ratio $\\sigma_1/\\sigma_r$ is the condition number — it measures how distorted the transformation is.

// Even the most complex-looking matrix is geometrically just two rotations sandwiching a coordinate-axis scaling.`,
//     before: ``,
//     after: ``,
//     link: ``,
//   },
//   obj3: {
//     title: `Singular Values`,
//     content: `The singular values of $A$ are the square roots of the [eigenvalues](!/linear-algebra/eigen) of $A^TA$ (or equivalently $AA^T$):

// @academic[formula_callout:singular_values|Singular Values|$$\\sigma_i = \\sqrt{\\lambda_i(A^TA)} = \\sqrt{\\lambda_i(AA^T)}$$]@
// @academic[formulas_link:/linear-algebra/formulas#singular_values]@

// Since $A^TA$ is symmetric positive semi-definite, its eigenvalues are all $\\geq 0$, so the singular values are real and non-negative. They are ordered $\\sigma_1 \\geq \\sigma_2 \\geq \\cdots \\geq 0$.

// The number of nonzero singular values equals the [rank](!/linear-algebra/matrix/rank) of $A$:

// @academic[formula_callout:svd_rank|SVD Rank|$$\\text{rank}(A) = \\#\\{i : \\sigma_i > 0\\}$$]@
// @academic[formulas_link:/linear-algebra/formulas#svd_rank]@

// This is the most numerically stable method for determining rank: compute the SVD and count singular values above a tolerance.

// The largest singular value $\\sigma_1$ is the operator norm $\\|A\\|_2 = \\max_{\\|\\mathbf{x}\\|=1}\\|A\\mathbf{x}\\|$. The [Frobenius norm](!/linear-algebra/matrix/trace) is $\\|A\\|_F = \\sqrt{\\sigma_1^2 + \\sigma_2^2 + \\cdots + \\sigma_r^2}$. The condition number is $\\kappa(A) = \\sigma_1/\\sigma_r$ — a large condition number means the matrix is nearly singular and small perturbations in the input cause large changes in the output.`,
//     before: ``,
//     after: ``,
//     link: ``,
//   },
//   obj4: {
//     title: `Computing the SVD`,
//     content: `The standard approach computes the SVD through the eigenvalue decomposition of $A^TA$.

// Form $A^TA$ (symmetric, $n \\times n$). Find its eigenvalues $\\lambda_1 \\geq \\cdots \\geq \\lambda_n \\geq 0$ and orthonormal eigenvectors $\\mathbf{v}_1, \\dots, \\mathbf{v}_n$ using the [spectral decomposition](!/linear-algebra/decompositions/spectral). These are the right singular vectors: $V = [\\mathbf{v}_1 \\; \\cdots \\; \\mathbf{v}_n]$.

// The singular values are $\\sigma_i = \\sqrt{\\lambda_i}$. The left singular vectors are computed from the right ones: $\\mathbf{u}_i = \\frac{1}{\\sigma_i}A\\mathbf{v}_i$ for each nonzero $\\sigma_i$. If $r < m$, extend $\\{\\mathbf{u}_1, \\dots, \\mathbf{u}_r\\}$ to an [orthonormal basis](!/linear-algebra/orthogonality/orthogonal-sets) for $\\mathbb{R}^m$.

// ## Worked Example

// For $A = \\begin{pmatrix} 1 & 0 \\\\ 0 & 1 \\\\ 1 & 1 \\end{pmatrix}$: $A^TA = \\begin{pmatrix} 2 & 1 \\\\ 1 & 2 \\end{pmatrix}$, eigenvalues $3$ and $1$, eigenvectors $\\frac{1}{\\sqrt{2}}(1, 1)^T$ and $\\frac{1}{\\sqrt{2}}(1, -1)^T$. Singular values: $\\sqrt{3}$ and $1$. Left singular vectors: $\\mathbf{u}_1 = \\frac{1}{\\sqrt{3}}A\\mathbf{v}_1 = \\frac{1}{\\sqrt{6}}(1, 1, 2)^T$, $\\mathbf{u}_2 = A\\mathbf{v}_2 = \\frac{1}{\\sqrt{2}}(1, -1, 0)^T$. Extend with $\\mathbf{u}_3 = \\frac{1}{\\sqrt{3}}(-1, -1, 1)^T$.`,
//     before: ``,
//     after: ``,
//     link: ``,
//   },
//   obj5: {
//     title: `Compact and Thin Forms`,
//     content: `The full SVD has $U$ of size $m \\times m$, $\\Sigma$ of size $m \\times n$, and $V$ of size $n \\times n$. Two economical alternatives retain only the essential information.

// The thin SVD keeps only the first $n$ columns of $U$ (call them $U_1$) and the top $n \\times n$ block of $\\Sigma$ (call it $\\Sigma_1$): $A = U_1 \\Sigma_1 V^T$. This drops the columns of $U$ corresponding to the [left null space](!/linear-algebra/vector-spaces/fundamental-spaces).

// The compact SVD keeps only the first $r$ columns of $U$ and $V$ (where $r = \\text{rank}(A)$) and the $r \\times r$ diagonal block of nonzero singular values: $A = U_r \\Sigma_r V_r^T$. This is the most economical representation — it captures only the rank-$r$ content of $A$, discarding everything associated with zero singular values.

// All three forms represent the same matrix $A$. The compact form uses the least storage; the full form provides bases for all four [fundamental subspaces](!/linear-algebra/vector-spaces/fundamental-spaces). The three variants line up cleanly on factor dimensions and on what each one chooses to keep.`,
//     before: ``,
//     after: ``,
//     link: ``,
//   },
//   obj6: {
//     title: `SVD and the Four Fundamental Subspaces`,
//     content: `The SVD simultaneously provides orthonormal [bases](!/linear-algebra/vector-spaces) for all four [fundamental subspaces](!/linear-algebra/vector-spaces/fundamental-spaces) of $A$:

// @academic[formula_callout:svd_four_fundamental_subspaces|SVD Four Fundamental Subspaces|$$\\begin{aligned} \\text{Col}(A) &= \\text{Span}\\{\\mathbf{u}_1, \\ldots, \\mathbf{u}_r\\} \\\\ \\text{Null}(A^T) &= \\text{Span}\\{\\mathbf{u}_{r+1}, \\ldots, \\mathbf{u}_m\\} \\\\ \\text{Row}(A) &= \\text{Span}\\{\\mathbf{v}_1, \\ldots, \\mathbf{v}_r\\} \\\\ \\text{Null}(A) &= \\text{Span}\\{\\mathbf{v}_{r+1}, \\ldots, \\mathbf{v}_n\\} \\end{aligned}$$]@
// @academic[formulas_link:/linear-algebra/formulas#svd_four_fundamental_subspaces]@

// The first $r$ columns of $V$ ($\\mathbf{v}_1, \\dots, \\mathbf{v}_r$) form an orthonormal basis for the row space of $A$.

// The last $n - r$ columns of $V$ ($\\mathbf{v}_{r+1}, \\dots, \\mathbf{v}_n$) form an orthonormal basis for the [null space](!/linear-algebra/vector-spaces/fundamental-spaces) of $A$.

// The first $r$ columns of $U$ ($\\mathbf{u}_1, \\dots, \\mathbf{u}_r$) form an orthonormal basis for the [column space](!/linear-algebra/vector-spaces/fundamental-spaces) of $A$.

// The last $m - r$ columns of $U$ ($\\mathbf{u}_{r+1}, \\dots, \\mathbf{u}_m$) form an orthonormal basis for the left null space of $A$.

// No other factorization provides all four bases simultaneously, and no other method guarantees that these bases are orthonormal. The SVD is the complete structural portrait of any matrix.`,
//     before: ``,
//     after: ``,
//     link: ``,
//   },
//   obj7: {
//     title: `The Pseudoinverse`,
//     content: `The Moore-Penrose pseudoinverse $A^+$ is computed directly from the SVD:

// @academic[formula_callout:moore_penrose_pseudoinverse|Moore-Penrose Pseudoinverse|$$A^+ = V\\Sigma^+ U^T$$]@
// @academic[formulas_link:/linear-algebra/formulas#moore_penrose_pseudoinverse]@

// The matrix $\\Sigma^+$ is formed by reciprocating each nonzero singular value and transposing the shape: if $\\Sigma$ is $m \\times n$ with diagonal entries $\\sigma_1, \\dots, \\sigma_r, 0, \\dots, 0$, then $\\Sigma^+$ is $n \\times m$ with diagonal entries $1/\\sigma_1, \\dots, 1/\\sigma_r, 0, \\dots, 0$.

// The pseudoinverse satisfies four defining properties: $AA^+A = A$, $A^+AA^+ = A^+$, $(AA^+)^T = AA^+$, $(A^+A)^T = A^+A$.

// For a full-rank overdetermined system ($m > n$, rank $= n$), $A^+\\mathbf{b}$ gives the [least-squares](!/linear-algebra/orthogonality/least-squares) solution. For a rank-deficient system, $A^+\\mathbf{b}$ gives the minimum-norm least-squares solution — the solution of smallest length among all minimizers of $\\|A\\mathbf{x} - \\mathbf{b}\\|$.`,
//     before: ``,
//     after: ``,
//     link: ``,
//   },
//   obj8: {
//     title: `Low-Rank Approximation`,
//     content: `The best rank-$k$ approximation to $A$ in either the operator norm or the Frobenius norm is obtained by truncating the SVD at $k$ terms:

// @academic[formula_callout:eckart_young_low_rank_approximation|Eckart-Young Low-Rank Approximation|$$A_k = \\sum_{i=1}^{k} \\sigma_i \\mathbf{u}_i \\mathbf{v}_i^T, \\qquad \\|A - A_k\\|_2 = \\sigma_{k+1}, \\quad \\|A - A_k\\|_F = \\sqrt{\\sum_{i=k+1}^{r}\\sigma_i^2}$$]@
// @academic[formulas_link:/linear-algebra/formulas#eckart_young_low_rank_approximation]@

// This is the Eckart-Young-Mirsky theorem. Among all matrices of rank at most $k$, $A_k$ is the closest to $A$. The approximation error equals $\\sigma_{k+1}$ (the first discarded singular value) in the operator norm, and $\\sqrt{\\sigma_{k+1}^2 + \\cdots + \\sigma_r^2}$ in the Frobenius norm.

// When the singular values decay rapidly — $\\sigma_1 \\gg \\sigma_2 \\gg \\cdots$ — a small number of terms captures most of the matrix. This is the basis of image compression (store $k$ singular value triples instead of $mn$ entries), noise reduction (discard small singular values as noise), latent semantic analysis (retain the top-$k$ "concepts" in a document-term matrix), and dimensionality reduction more broadly.`,
//     before: ``,
//     after: ``,
//     link: ``,
//   },
//   obj9: {
//     title: `SVD and Norms`,
//     content: `The singular values provide the complete "size profile" of a matrix.

// The operator (spectral) norm is the largest singular value:

// @academic[formula_callout:operator_norm|Operator Norm|$$\\|A\\|_2 = \\sigma_1 = \\max_{\\|\\mathbf{x}\\|=1} \\|A\\mathbf{x}\\|$$]@
// @academic[formulas_link:/linear-algebra/formulas#operator_norm]@

// It measures the maximum factor by which $A$ can stretch a unit vector.

// The [Frobenius norm](!/linear-algebra/matrix/trace) is the root-sum-of-squares of all singular values:

// @academic[formula_callout:frobenius_norm_via_singular_values|Frobenius Norm via Singular Values|$$\\|A\\|_F = \\sqrt{\\sum_{i=1}^{r} \\sigma_i^2}$$]@
// @academic[formulas_link:/linear-algebra/formulas#frobenius_norm_via_singular_values]@

// It measures the total "energy" in the matrix.

// The condition number quantifies sensitivity to perturbation:

// @academic[formula_callout:condition_number|Condition Number|$$\\kappa(A) = \\frac{\\sigma_1}{\\sigma_r}$$]@
// @academic[formulas_link:/linear-algebra/formulas#condition_number]@

// A matrix with $\\kappa = 10^k$ loses roughly $k$ digits of accuracy in solving $A\\mathbf{x} = \\mathbf{b}$ with floating-point arithmetic. A perfectly conditioned matrix ($\\kappa = 1$) is orthogonal. A singular matrix ($\\sigma_r = 0$) has $\\kappa = \\infty$.

// The singular values are the natural measuring tool for matrices, just as eigenvalues are the natural measuring tool for symmetric matrices and [linear operators](!/linear-algebra/transformations). For non-symmetric matrices, singular values (not eigenvalues) govern norms and conditioning.`,
//     before: ``,
//     after: ``,
//     link: ``,
//   },
//   obj10: {
//     title: `SVD and the Spectral Decomposition`,
//     content: `For a symmetric positive semi-definite matrix $A$ with eigenvalues $\\lambda_1 \\geq \\cdots \\geq \\lambda_n \\geq 0$, the [spectral decomposition](!/linear-algebra/decompositions/spectral) $A = QDQ^T$ is also the SVD: $U = V = Q$ and $\\Sigma = D$. The singular values are the eigenvalues.

// For a general symmetric matrix with some negative eigenvalues, the singular values are $|\\lambda_i|$. The signs are absorbed into $U$ or $V$: if $\\lambda_i < 0$, one of the corresponding singular vectors is negated so that $\\sigma_i = |\\lambda_i| > 0$.

// For non-symmetric or rectangular matrices, the eigendecomposition does not apply (it requires square matrices and may not exist even then), but the SVD always does. The SVD is the correct generalization of the spectral decomposition to the broadest possible class of matrices.`,
//     before: ``,
//     after: ``,
//     link: ``,
//   },
//   obj11: {
//     title: `The Outer Product Form`,
//     content: `The SVD can be written as a sum of rank-one matrices:

// @academic[formula_callout:svd_outer_product_form|SVD Outer Product Form|$$A = \\sum_{i=1}^{r} \\sigma_i \\, \\mathbf{u}_i \\mathbf{v}_i^T$$]@
// @academic[formulas_link:/linear-algebra/formulas#svd_outer_product_form]@

// Each term $\\sigma_i \\mathbf{u}_i\\mathbf{v}_i^T$ is an $m \\times n$ rank-one matrix. The singular value $\\sigma_i$ weights its contribution. The terms are ordered by importance: the first term captures the most of $A$ (in the norm sense), the second captures the most of the remainder, and so on.

// Truncating this sum at $k$ terms gives the best rank-$k$ approximation $A_k$. The fraction of the Frobenius norm captured by the first $k$ terms is $(\\sigma_1^2 + \\cdots + \\sigma_k^2)/(\\sigma_1^2 + \\cdots + \\sigma_r^2)$.

// This outer product perspective is the basis of nearly every matrix approximation method: keep the large singular values (signal) and discard the small ones (noise or redundancy).`,
//     before: ``,
//     after: ``,
//     link: ``,
//   },
//   obj12: {
//     title: `What the SVD Reveals`,
//     content: `No other single factorization provides as much structural information about a matrix.

// The [rank](!/linear-algebra/matrix/rank): the number of nonzero singular values.

// The four [fundamental subspaces](!/linear-algebra/vector-spaces/fundamental-spaces): orthonormal bases from the columns of $U$ and $V$.

// The [pseudoinverse](!/linear-algebra/orthogonality/least-squares): $A^+ = V\\Sigma^+ U^T$.

// The best rank-$k$ approximation: truncate at $k$ terms.

// Norms and the condition number: directly from the singular values.

// The [geometry](!/linear-algebra/transformations/geometric) of the linear map: rotation, scaling, rotation.

// For symmetric matrices, the SVD reduces to the [spectral decomposition](!/linear-algebra/decompositions/spectral). For invertible square matrices, the singular values reveal the conditioning that the [determinant](!/linear-algebra/determinants) alone cannot see (a matrix with $\\det = 1$ can still be poorly conditioned). For rectangular matrices, the SVD is the only factorization that applies without modification.

// The SVD is the culmination of the decomposition hierarchy — the most general, most informative, and most broadly applicable factorization in linear algebra.

// The six structural quantities the SVD exposes — rank, the four fundamental subspaces, the pseudoinverse, the best rank-$k$ approximation, norms and condition number, and the geometric decomposition — collect into a single reference card below.`,
//     before: ``,
//     after: ``,
//     link: ``,
//   },
// }

// const introContent = {
//   title: `The Universal Matrix Factorization`,
//   content: `The singular value decomposition, written SVD, factors any matrix of any shape as UΣVᵀ — two orthogonal matrices sandwiching a diagonal matrix of non-negative singular values. It exists for every matrix, reveals the rank, provides orthonormal bases for all four fundamental subspaces, computes the pseudoinverse, yields the best low-rank approximation, and decomposes every linear transformation into a rotation, a scaling, and another rotation. No other single factorization provides this much information.`,
// }

// const faqQuestions = {
//   obj1: {
//     question: "What is the singular value decomposition?",
//     answer: "The SVD factors any m×n matrix A as A = UΣVᵀ, where U and V are orthogonal matrices of left and right singular vectors, and Σ is diagonal with non-negative singular values. It exists for every matrix regardless of shape, rank, or symmetry.",
//     sectionId: "1"
//   },
//   obj2: {
//     question: "What do singular values represent geometrically?",
//     answer: "Singular values measure how much a matrix stretches vectors along each orthogonal direction. The largest singular value σ₁ is the maximum stretching factor, and the transformation A decomposes geometrically into a rotation (Vᵀ), a coordinate-axis scaling (Σ), and another rotation (U).",
//     sectionId: "2"
//   },
//   obj3: {
//     question: "How does SVD give the best low-rank approximation?",
//     answer: "The Eckart-Young-Mirsky theorem states that truncating the SVD at k terms gives the closest rank-k matrix to A in both operator and Frobenius norms. The approximation error equals σₖ₊₁ in operator norm. This is the basis of image compression and noise reduction.",
//     sectionId: "8"
//   },
//   obj4: {
//     question: "How is the pseudoinverse computed from the SVD?",
//     answer: "The Moore-Penrose pseudoinverse is A⁺ = VΣ⁺Uᵀ, where Σ⁺ reciprocates each nonzero singular value and transposes the shape. For overdetermined systems A⁺b gives the least-squares solution; for rank-deficient systems it gives the minimum-norm least-squares solution.",
//     sectionId: "7"
//   },
//   obj5: {
//     question: "How does SVD reveal the four fundamental subspaces?",
//     answer: "The first r columns of V span the row space, the remaining n−r columns span the null space. The first r columns of U span the column space, the remaining m−r columns span the left null space. No other factorization provides orthonormal bases for all four subspaces simultaneously.",
//     sectionId: "6"
//   },
//   obj6: {
//     question: "What is the condition number of a matrix?",
//     answer: "The condition number κ(A) = σ₁/σᵣ is the ratio of the largest to smallest nonzero singular value. It measures sensitivity to perturbation: a matrix with κ = 10ᵏ loses roughly k digits of accuracy in floating-point computation. Orthogonal matrices have κ = 1; singular matrices have κ = ∞.",
//     sectionId: "9"
//   }
// }


// const schemas = {
//   learningResource: {
//     "@context": "https://schema.org",
//     "@type": "LearningResource",
//     "name": "Singular Value Decomposition (SVD)",
//     "description": "Singular value decomposition A = UΣVᵀ: singular values, geometric interpretation, pseudoinverse, low-rank approximation, four fundamental subspaces, norms, and condition number.",
//     "url": "https://www.learnmathclass.com/linear-algebra/decompositions/svd",
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
//       "name": "Singular Value Decomposition"
//     },
//     "teaches": [
//       "SVD factorization A = UΣVᵀ for any matrix",
//       "Geometric interpretation as rotation-scaling-rotation",
//       "Singular values from eigenvalues of AᵀA",
//       "Four fundamental subspaces from U and V",
//       "Moore-Penrose pseudoinverse via SVD",
//       "Best low-rank approximation (Eckart-Young theorem)",
//       "Matrix norms and condition number from singular values",
//       "Outer product form and relationship to spectral decomposition",
//       "Side-by-side comparison of full, thin, and compact SVD forms",
//       "Reference card collecting everything the SVD reveals about a matrix"
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
//         "name": "Singular Value Decomposition",
//         "item": "https://www.learnmathclass.com/linear-algebra/decompositions/svd"
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
//     obj1Blocks,
//     svdForms,
//     obj6Table,
//     obj9Table,
//     svdReadings,
//     faqQuestions,
//     schemas,
//     seoData: {
//       title: "SVD: Singular Value Decomposition | Learn Math Class",
//       description: "Singular value decomposition A = UΣVᵀ: singular values, geometric interpretation, pseudoinverse, low-rank approximation, four fundamental subspaces, norms, and condition number.",
//       keywords: keyWords.join(", "),
//       url: "/linear-algebra/decompositions/svd",
//       name: "Singular Value Decomposition (SVD)"
//     },
//   }
// }
//    }

// export default function SVDPage({
//   seoData,
//   sectionsContent,
//   introContent,
//   obj1Blocks,
//   svdForms,
//   obj6Table,
//   obj9Table,
//   svdReadings,
//   faqQuestions,
//   schemas,
// }) {

//   const tableWrapStyle = { margin: '20px auto', width: '100%' }
//   const svgStyle = { display: 'block', margin: '0 auto', width: '80%', maxWidth: '80%' }

//   // ---------- figures for the concept introduction ----------

//   const oneBasisFigure = (
//     <svg viewBox="0 0 620 200" width="80%" style={svgStyle}>
//       <defs>
//         <marker id="svdArNavy" markerWidth="9" markerHeight="9" refX="7" refY="3.2" orient="auto">
//           <path d="M0,0 L0,6.4 L7.5,3.2 z" fill="#06357a" />
//         </marker>
//         <marker id="svdArDim" markerWidth="9" markerHeight="9" refX="7" refY="3.2" orient="auto">
//           <path d="M0,0 L0,6.4 L7.5,3.2 z" fill="#8a93a0" />
//         </marker>
//       </defs>
//       <rect x="26" y="20" width="250" height="158" fill="#ffffff" stroke="#e2e6ec" />
//       <text x="151" y="13" fontSize="12.5" fill="#7c8794" textAnchor="middle">one space &mdash; input and output</text>
//       <line x1="56" y1="146" x2="256" y2="146" stroke="#cfd6df" />
//       <line x1="86" y1="36" x2="86" y2="168" stroke="#cfd6df" />
//       <line x1="86" y1="146" x2="166" y2="106" stroke="#06357a" strokeWidth="2" markerEnd="url(#svdArNavy)" />
//       <text x="146" y="99" fontSize="13" fill="#06357a" fontStyle="italic">p&#8321;</text>
//       <line x1="86" y1="146" x2="126" y2="66" stroke="#06357a" strokeWidth="2" markerEnd="url(#svdArNavy)" />
//       <text x="130" y="62" fontSize="13" fill="#06357a" fontStyle="italic">p&#8322;</text>
//       <line x1="86" y1="146" x2="236" y2="71" stroke="#8a93a0" strokeWidth="1.6" strokeDasharray="5,4" markerEnd="url(#svdArDim)" />
//       <text x="211" y="62" fontSize="12.5" fill="#8a93a0" fontStyle="italic">&lambda;&#8321;p&#8321;</text>
//       <text x="151" y="194" fontSize="13" fill="#34495e" textAnchor="middle">the image of p&#8321; is written using p&#8321; itself</text>
//       <text x="326" y="42" fontSize="12.5" fill="#a4243b" fontWeight="bold">Two ways this breaks</text>
//       <line x1="326" y1="58" x2="592" y2="58" stroke="#e2e6ec" />
//       <text x="326" y="80" fontSize="13.5" fill="#34495e">A is 3 &times; 2 &mdash; input and output</text>
//       <text x="326" y="98" fontSize="13.5" fill="#34495e">live in different spaces, so one</text>
//       <text x="326" y="116" fontSize="13.5" fill="#34495e">basis cannot describe both.</text>
//       <text x="592" y="80" fontSize="15" fill="#a4243b" textAnchor="end" fontWeight="bold">&#10007;</text>
//       <line x1="326" y1="130" x2="592" y2="130" stroke="#e2e6ec" />
//       <text x="326" y="152" fontSize="13.5" fill="#34495e">A is square but defective &mdash; every</text>
//       <text x="326" y="170" fontSize="13.5" fill="#34495e">eigenvector is a multiple of (1, 0),</text>
//       <text x="326" y="188" fontSize="13.5" fill="#34495e">so no basis of them exists.</text>
//       <text x="592" y="152" fontSize="15" fill="#a4243b" textAnchor="end" fontWeight="bold">&#10007;</text>
//     </svg>
//   )

//   const twoBasesFigure = (
//     <svg viewBox="0 0 660 250" width="80%" style={svgStyle}>
//       <defs>
//         <marker id="svdArV" markerWidth="9" markerHeight="9" refX="7" refY="3.2" orient="auto">
//           <path d="M0,0 L0,6.4 L7.5,3.2 z" fill="#1f6f8b" />
//         </marker>
//         <marker id="svdArU" markerWidth="9" markerHeight="9" refX="7" refY="3.2" orient="auto">
//           <path d="M0,0 L0,6.4 L7.5,3.2 z" fill="#b8860b" />
//         </marker>
//         <marker id="svdArBig" markerWidth="11" markerHeight="11" refX="8" refY="4" orient="auto">
//           <path d="M0,0 L0,8 L9,4 z" fill="#06357a" />
//         </marker>
//       </defs>
//       <text x="140" y="26" fontSize="12.5" fill="#7c8794" textAnchor="middle">input space &#8477;&#8319;</text>
//       <line x1="40" y1="130" x2="240" y2="130" stroke="#cfd6df" />
//       <line x1="140" y1="40" x2="140" y2="220" stroke="#cfd6df" />
//       <circle cx="140" cy="130" r="58" fill="#eef2f8" stroke="#06357a" strokeWidth="1.6" />
//       <line x1="140" y1="130" x2="195" y2="112" stroke="#1f6f8b" strokeWidth="2.4" markerEnd="url(#svdArV)" />
//       <text x="200" y="106" fontSize="13.5" fill="#1f6f8b" fontWeight="bold">v&#8321;</text>
//       <line x1="140" y1="130" x2="158" y2="75" stroke="#1f6f8b" strokeWidth="2.4" markerEnd="url(#svdArV)" />
//       <text x="162" y="70" fontSize="13.5" fill="#1f6f8b" fontWeight="bold">v&#8322;</text>
//       <text x="140" y="238" fontSize="13" fill="#34495e" textAnchor="middle">unit circle, orthonormal basis</text>
//       <line x1="262" y1="130" x2="368" y2="130" stroke="#06357a" strokeWidth="2" markerEnd="url(#svdArBig)" />
//       <text x="315" y="120" fontSize="15" fill="#06357a" textAnchor="middle" fontStyle="italic">A</text>
//       <text x="315" y="154" fontSize="14" fill="#06357a" textAnchor="middle" fontWeight="bold">Av&#7522; = &sigma;&#7522;u&#7522;</text>
//       <text x="500" y="26" fontSize="12.5" fill="#7c8794" textAnchor="middle">output space &#8477;&#7504;</text>
//       <line x1="380" y1="130" x2="630" y2="130" stroke="#cfd6df" />
//       <line x1="500" y1="40" x2="500" y2="220" stroke="#cfd6df" />
//       <ellipse cx="500" cy="130" rx="105" ry="40" fill="#fbf6e8" stroke="#b8860b" strokeWidth="1.6" transform="rotate(-18 500 130)" />
//       <line x1="500" y1="130" x2="600" y2="98" stroke="#b8860b" strokeWidth="2.6" markerEnd="url(#svdArU)" />
//       <text x="586" y="88" fontSize="13.5" fill="#b8860b" fontWeight="bold">&sigma;&#8321;u&#8321;</text>
//       <line x1="500" y1="130" x2="512" y2="92" stroke="#b8860b" strokeWidth="2.6" markerEnd="url(#svdArU)" />
//       <text x="516" y="86" fontSize="13.5" fill="#b8860b" fontWeight="bold">&sigma;&#8322;u&#8322;</text>
//       <text x="500" y="238" fontSize="13" fill="#34495e" textAnchor="middle">ellipse, axes &sigma;&#8321; and &sigma;&#8322; along a different orthonormal basis</text>
//     </svg>
//   )

//   // React elements cannot serialize through getStaticProps, so the figures are
//   // attached here, keyed by block id.
//   const obj1Visuals = {
//     'two-failures': oneBasisFigure,
//     'circle-ellipse': twoBasesFigure,
//   }

//   const obj1Data = {
//     blocks: obj1Blocks.map(block =>
//       obj1Visuals[block.id] ? { ...block, visual: obj1Visuals[block.id] } : block
//     ),
//   }

//   const genericSections=[
//     {
//         id:'1',
//         title:sectionsContent.obj1.title,
//         link:sectionsContent.obj1.link,
//         content:[
//           <ConceptIntro key={'obj1-intro'} data={obj1Data} />,
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
//           <DiagramFrame
//             key={'obj5-diagram'}
//             id="svd-forms"
//             title="Three forms, one factorization"
//             source="/linear-algebra/decompositions/svd"
//           >
//             <ObjectTypeProfile data={svdForms} theme="navy" variant="stack" />
//           </DiagramFrame>,
//           `The distinction to keep hold of is that none of these is an approximation. Each drops columns that multiply against zero singular values, so the product is unchanged and $A$ is reconstructed exactly in all three. What is lost is not accuracy but the orthogonality of $U$ as a square matrix — $U_r^{\\mathsf{T}}U_r = I_r$ still holds, but $U_rU_r^{\\mathsf{T}}$ no longer does, and any argument relying on the left null space needs the full form.`,
//         ]
//     },
//     {
//         id:'6',
//         title:sectionsContent.obj6.title,
//         link:sectionsContent.obj6.link,
//         content:[
//           sectionsContent.obj6.content,
//           <div key={'obj6-table'} style={tableWrapStyle}
//                dangerouslySetInnerHTML={{ __html: obj6Table }} />,
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
//           <div key={'obj9-table'} style={tableWrapStyle}
//                dangerouslySetInnerHTML={{ __html: obj9Table }} />,
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
//         ]
//     },
//     {
//         id:'12',
//         title:sectionsContent.obj12.title,
//         link:sectionsContent.obj12.link,
//         content:[
//           sectionsContent.obj12.content,
//           `Grouping these by which factor supplies the answer is what makes them one computation rather than seven. Three come from the singular values alone, two from the columns of the orthogonal factors, and two require reading all three factors together. Nothing below needs the matrix again once the factorization is in hand.`,
//           <DiagramFrame
//             key={'obj12-diagram'}
//             id="svd-readings"
//             title="What the SVD reveals"
//             source="/linear-algebra/decompositions/svd"
//           >
//             <IdentitySheet data={svdReadings} theme="navy" variant="ledger" />
//           </DiagramFrame>,
//           `Two of these deserve emphasis because nothing else supplies them. The **condition number** measures how badly a system amplifies error, and it is invisible to the determinant — a matrix can have determinant one and still be nearly singular in some direction. **Low-rank approximation** is optimal rather than merely reasonable: truncating the sum at $k$ terms gives the closest rank-$k$ matrix in every unitarily invariant norm, with error exactly $\\sigma_{k+1}$.`,
//           `The reason all of this comes from one factorization is that the SVD asks nothing of the matrix. It need not be square, invertible, symmetric or full rank — the factorization exists regardless, which is what separates it from every other decomposition in this section and why it is the one to reach for when the matrix is unknown.`,
//         ]
//     },

// ]

//   return (
//    <>

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
//    <br/>
//    <br/>
//    <br/>
//    <br/>
//     <OperaSidebar
//            side='right'
//            sidebarWidth='45px'
//            panelWidth='200px'
//            iconColor='white'
//            panelBackgroundColor='#f2f2f2'
//          />
//    <Breadcrumb/>
//    <br/>
//    <br/>
//    <h1 className='title' style={{marginTop:'0px',marginBottom:'10px'}}>Singular Value Decomposition</h1>
//    <br/>
//    <br/>
//    <SectionTableOfContents sections={genericSections}
//     showSecondaryNav={true}
//          secondaryNavMode="siblings"
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
//           textColor="#06357a"
//         />
//    <br/>
//    <br/>
//    <Sections sections={genericSections}/>
//    <br/>
//    <br/>
//    <br/>
//    </>
//   )
// }



// tables-optimized: v4 | 2026-05-18 | 4 tables (obj5 comparison, obj6 aggregation, obj9 aggregation, obj12 summary capstone)
// intro-rewritten: v8 | worked arithmetic in blocks | diagrams at 80% | obj1 = one ConceptIntro call, ordered block array
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
import ConceptIntro from '@/app/components/page-components/content-components/ConceptIntro'


export async function getStaticProps(){
const keyWords = [
  "singular value decomposition",
  "SVD",
  "singular values",
  "left right singular vectors",
  "low-rank approximation",
  "pseudoinverse SVD",
  "Moore-Penrose pseudoinverse",
  "Eckart-Young theorem",
  "matrix rank SVD",
  "condition number singular values",
  "four fundamental subspaces SVD",
  "compact SVD thin SVD",
  "SVD image compression",
  "operator norm Frobenius norm",
  "UΣVᵀ factorization"
]

  const linkStyle = 'color: inherit; text-decoration: underline;'

  // ---------- obj1 · concept introduction ----------
  // One ordered array. Visual elements are attached in the page component,
  // keyed by block id, since React elements cannot serialize through props.

  const obj1Blocks = [
    {
      id: 'the-obstacle',
      type: 'text',
      content: `A matrix mixes coordinates. Every entry of the output is assembled from every entry of the input, so almost nothing worth knowing about $A$ can be read from $A$ itself. What is $A^{10}$? Multiply ten times and find out. What happens to a vector pushed through $A$ a thousand times — does it grow, shrink, settle into some direction? There is no answer short of running it.`,
    },
    {
      id: 'the-remedy',
      type: 'text',
      content: `Factorization removes the obstacle. Split $A$ into factors that each do one simple thing, and questions that required arithmetic can be settled by inspection.`,
    },
    {
      id: 'sub-diagonalization',
      type: 'subtitle',
      text: `Diagonalization and Its Requirement`,
    },
    {
      id: 'incumbent',
      type: 'text',
      content: `[Diagonalization](!/linear-algebra/eigen/diagonalization) does exactly that. Writing $A = PDP^{-1}$ amounts to changing coordinates so that the mixing is absent: the columns of $P$ are directions the matrix only stretches, $D$ holds the stretching factors, and in that basis no coordinate influences any other.`,
    },
    {
      id: 'consequences',
      type: 'instance',
      lead: `Take $B = \\begin{pmatrix} 2 & 1 \\\\ 0 & 1 \\end{pmatrix}$.`,
      content: `Its eigenvalues are $2$ and $1$, with eigenvectors $(1, 0)$ and $(1, -1)$, so

$$B = PDP^{-1}, \\qquad P = \\begin{pmatrix} 1 & 1 \\\\ 0 & -1 \\end{pmatrix}, \\qquad D = \\begin{pmatrix} 2 & 0 \\\\ 0 & 1 \\end{pmatrix}$$

The tenth power then costs nothing: $B^{10} = PD^{10}P^{-1}$, and $D^{10} = \\begin{pmatrix} 1024 & 0 \\\\ 0 & 1 \\end{pmatrix}$ because $2^{10} = 1024$. Restoring the original coordinates gives $B^{10} = \\begin{pmatrix} 1024 & 1023 \\\\ 0 & 1 \\end{pmatrix}$ without a single matrix multiplication. The inverse is $PD^{-1}P^{-1}$, with no elimination anywhere. Long-run behaviour is governed by whichever $\\lambda$ is largest, here $2$. Nothing is approximated and nothing is recomputed — the work was done once, when the factorization was found.`,
    },
    {
      id: 'the-requirement',
      type: 'text',
      content: `That performance comes with a condition, and the condition is visible in the formula. The same matrix $P$ stands on both sides of $A = PDP^{-1}$: its columns are used to read the input and again to write the output. The factorization requires that both ends be described in identical terms — one basis, serving twice.`,
    },
    {
      id: 'two-failures',
      type: 'instance',
      lead: `Two matrices, two ways the requirement fails.`,
      content: `A $3 \\times 2$ matrix takes vectors from $\\mathbb{R}^2$ and returns vectors in $\\mathbb{R}^3$, so no single basis can describe both ends, and the question of an [eigenvector](!/linear-algebra/eigen) cannot even be posed: $A\\mathbf{v} = \\lambda\\mathbf{v}$ compares vectors living in different spaces. A defective matrix fails otherwise. It is square, but every eigenvector is a multiple of one direction, so no basis of eigenvectors exists and $P$ cannot be assembled. Rectangular shape excludes diagonalization in principle, defective structure excludes it in practice, and between them they account for most matrices anyone meets.`,
    },
    {
      id: 'shear-fails',
      type: 'instance',
      lead: `The second failure takes three lines to verify.`,
      content: `Change one entry of $B$ and take $A = \\begin{pmatrix} 1 & 1 \\\\ 0 & 1 \\end{pmatrix}$. Its characteristic polynomial is

$$\\det(A - \\lambda I) = (1 - \\lambda)^2$$

so $\\lambda = 1$ is a repeated root. Solving $(A - I)\\mathbf{v} = \\mathbf{0}$ means solving $\\begin{pmatrix} 0 & 1 \\\\ 0 & 0 \\end{pmatrix}\\mathbf{v} = \\mathbf{0}$, which forces $v_2 = 0$ and leaves $v_1$ free. Every eigenvector is a multiple of $(1, 0)$: one direction, in two dimensions. There is no second column for $P$, so $A$ has no diagonalization — not because the arithmetic is hard, but because the object being asked for does not exist.`,
    },
    {
      id: 'sub-two-bases',
      type: 'subtitle',
      text: `Two Bases Instead of One`,
    },
    {
      id: 'relaxation',
      type: 'text',
      content: `Nothing forced the two bases to coincide. That was an additional demand, and it can be withdrawn. Admit one orthonormal basis for the input space and a separate one for the output space, and require only that the matrix carry the first to the second with a scaling in between. Equal dimensions are then unnecessary, fixed directions are unnecessary, and both obstructions vanish together.`,
    },
    {
      id: 'circle-ellipse',
      type: 'instance',
      caption: `The unit circle becomes an ellipse. Each $\\mathbf{v}_i$ is carried to a multiple of $\\mathbf{u}_i$, and $\\sigma_i$ is that multiple.`,
      content: `The picture states the entire factorization in one equation. There is an orthonormal basis $\\mathbf{v}_1, \\dots, \\mathbf{v}_n$ of the input space and an orthonormal basis $\\mathbf{u}_1, \\dots, \\mathbf{u}_m$ of the output space satisfying $A\\mathbf{v}_i = \\sigma_i \\mathbf{u}_i$ for every $i$. Each input basis vector is sent to a multiple of a single output basis vector, and to nothing else.`,
    },
    {
      id: 'shear-factors',
      type: 'instance',
      lead: `The matrix that had no diagonalization has this one.`,
      content: `For the same $A = \\begin{pmatrix} 1 & 1 \\\\ 0 & 1 \\end{pmatrix}$, form

$$A^TA = \\begin{pmatrix} 1 & 1 \\\\ 1 & 2 \\end{pmatrix}, \\qquad \\det(A^TA - \\lambda I) = \\lambda^2 - 3\\lambda + 1$$

whose roots are $\\lambda = \\frac{3 \\pm \\sqrt{5}}{2}$. The scaling factors are their square roots,

$$\\sigma_1 = \\frac{1 + \\sqrt{5}}{2} \\approx 1.618, \\qquad \\sigma_2 = \\frac{\\sqrt{5} - 1}{2} \\approx 0.618$$

Two of them, both real, both positive, for a matrix with only one eigenvector. As a check, $\\sigma_1\\sigma_2 = 1$, which is $|\\det A|$ — the area scaling has to agree however it is computed. The eigenvectors of $A^TA$ supply $\\mathbf{v}_1$ and $\\mathbf{v}_2$, and $\\mathbf{u}_i = A\\mathbf{v}_i/\\sigma_i$ supplies the other basis.`,
    },
    {
      id: 'definition',
      type: 'definition',
      kicker: 'The definition',
      statement: `Collecting those $n$ statements into one matrix equation gives the [singular value decomposition](!/linear-algebra/definitions#singular_value): an orthonormal input basis in $V$, an orthonormal output basis in $U$, and the scaling factors between them along the diagonal of $\\Sigma$.`,
      formula: `@academic[formula_callout:svd|SVD|$$A = U\\Sigma V^T$$]@
@academic[formulas_link:/linear-algebra/formulas#svd]@`,
      gloss: `It is a factorization, not an approximation: the three matrices multiply back to $A$ exactly, with no error term and no conditions attached.`,
      kindOfThing: `$U$ is $m \\times m$ [orthogonal](!/linear-algebra/matrix/types) and its columns are the left singular vectors. $V$ is $n \\times n$ orthogonal and its columns are the right singular vectors. $\\Sigma$ is $m \\times n$, zero everywhere off the diagonal, carrying $\\sigma_1 \\geq \\sigma_2 \\geq \\cdots \\geq 0$ along it. Those are the singular values, and they are the lengths of the semi-axes of the ellipse above.`,
    },
    {
      id: 'sub-consequences',
      type: 'subtitle',
      text: `What Follows and What Does Not`,
    },
    {
      id: 'follows',
      type: 'text',
      content: `Several properties follow from the construction rather than from any further assumption. Both bases are orthonormal rather than merely independent, so $U^{-1} = U^T$ and $V^{-1} = V^T$ and neither factor is ever inverted. The scaling factors are real and non-negative, since they measure lengths, and can therefore be ordered from largest to smallest — an ordering no set of [eigenvalues](!/linear-algebra/eigen) admits, eigenvalues being possibly complex. And the factorization exists for every matrix without exception: any shape, any [rank](!/linear-algebra/matrix/rank), [symmetric](!/linear-algebra/matrix/types) or not, [invertible](!/linear-algebra/matrix/inverse) or not.`,
    },
    {
      id: 'limitation',
      type: 'instance',
      lead: `The same relaxation imposes a limitation, and the algebra shows exactly where.`,
      content: `Applying the matrix twice gives

$$A^2 = U\\Sigma V^T \\cdot U\\Sigma V^T$$

and everything depends on the interior $V^TU$. Under diagonalization the corresponding product is $P^{-1}P = I$, which cancels and leaves $PD^2P^{-1}$. Here $V$ and $U$ are different orthogonal matrices, so $V^TU$ is not the identity but a rotation — for the shear above, by about $26.6^{\\circ}$ — and nothing collapses. The question this section opened with, the tenth power and the long run, is therefore the one question the singular value decomposition cannot answer and diagonalization can. The two factorizations address different questions: one invariant directions, the other stretching. What the three factors do to a vector geometrically is the subject of the next section.`,
    },
  ]

  // ---------- TABLES ----------

  // obj5 — three storage forms of one factorization
  const svdForms = {
    kicker: 'Decompositions \u00B7 SVD',
    title: 'Three forms, one factorization',
    tallyLabel: 'forms',
    intro: 'All three reconstruct $A$ exactly. They differ in how much of $U$ and $\\Sigma$ is kept \u2014 and what is dropped is precisely the part that multiplies against zero singular values.',
    footnote: 'Nothing is approximated anywhere in this table. The full form carries orthonormal bases for all four [fundamental subspaces](!/linear-algebra/vector-spaces/fundamental-spaces), which is why it is the one to state theorems with; the compact form carries only what contributes to $A$, which is why it is the one to store. Approximation begins only when the compact form is truncated below rank $r$.',
    slots: [
      { key: 'shapes',  label: 'shapes' },
      { key: 'stored',  label: 'what is kept' },
      { key: 'dropped', label: 'what is dropped' },
      { key: 'usedFor', label: 'used for' },
    ],
    groups: [
      {
        heading: 'Everything kept',
        types: [
          {
            name: 'Full SVD',
            anchor: '#1',
            shape: 'dense',
            condition: '$U$ and $V$ both square and orthogonal',
            properties: {
              shapes: '$U: m \\times m$, $\\Sigma: m \\times n$, $V: n \\times n$',
              stored: 'all of $U$, $V$, and a rectangular $\\Sigma$',
              dropped: 'nothing',
              usedFor: 'theory, the four subspaces',
            },
            note: 'The only form where $U$ and $V$ are genuinely orthogonal matrices, so $UU^{\\mathsf{T}} = I$ as well as $U^{\\mathsf{T}}U = I$. That is what makes it the form to state results with \u2014 the last $m - r$ columns of $U$ span the left null space and would otherwise be gone.',
          },
        ],
      },
      {
        heading: 'Trimmed to what multiplies',
        types: [
          {
            name: 'Thin SVD',
            anchor: '#5',
            shape: 'lower',
            condition: '$m > n$ \u2014 keep $n$ columns of $U$',
            properties: {
              shapes: '$U_n: m \\times n$, $\\Sigma_n: n \\times n$, $V: n \\times n$',
              stored: 'the first $n$ columns of $U$',
              dropped: 'the last $m - n$ columns of $U$',
              usedFor: 'least squares on tall matrices',
            },
            note: 'The dropped columns multiply rows of $\\Sigma$ that are entirely zero, so removing them changes nothing about the product. Note $U_n$ is no longer square: $U_n^{\\mathsf{T}}U_n = I_n$ still holds, but $U_nU_n^{\\mathsf{T}}$ does not.',
          },
          {
            name: 'Compact SVD',
            anchor: '#5',
            shape: 'block',
            condition: 'keep only the $r$ nonzero singular values',
            properties: {
              shapes: '$U_r: m \\times r$, $\\Sigma_r: r \\times r$, $V_r: n \\times r$',
              stored: 'the rank-$r$ content only',
              dropped: 'every zero singular value and its vectors',
              usedFor: 'storage, rank-deficient matrices',
            },
            note: 'The most economical exact form: $\\Sigma_r$ is square with a strictly positive diagonal, so it is invertible \u2014 which is what makes the [pseudoinverse](#7) computable as $V_r\\Sigma_r^{-1}U_r^{\\mathsf{T}}$.',
          },
        ],
      },
    ],
  }

  // obj6 — aggregation: four fundamental subspaces from the SVD
  const obj6Table = `
<table class="styled-table" style="border-collapse: collapse; width: 75%;margin:auto; background: white; box-shadow: 0 2px 10px rgba(0,0,0,0.1); border-radius: 8px; overflow: hidden; font-family: Arial, sans-serif;">
  <thead>
    <tr>
      <th style="${tableHeaders.aggregation}">Fundamental subspace</th>
      <th style="${tableHeaders.aggregation} text-align: center;">Basis from</th>
      <th style="${tableHeaders.aggregation} text-align: center;">Column indices</th>
      <th style="${tableHeaders.aggregation} text-align: center;">Dimension</th>
    </tr>
  </thead>
  <tbody>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Row space of A</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e; text-align: center;">V</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e; text-align: center;">1, ..., r</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e; text-align: center;">r</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Null space of A</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e; text-align: center;">V</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e; text-align: center;">r+1, ..., n</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e; text-align: center;">n − r</td>
    </tr>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Column space of A</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e; text-align: center;">U</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e; text-align: center;">1, ..., r</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e; text-align: center;">r</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; font-weight: bold; color: #06357a;">Left null space of A</td>
      <td style="padding: 12px 15px; color: #34495e; text-align: center;">U</td>
      <td style="padding: 12px 15px; color: #34495e; text-align: center;">r+1, ..., m</td>
      <td style="padding: 12px 15px; color: #34495e; text-align: center;">m − r</td>
    </tr>
  </tbody>
</table>
`

  // obj9 — aggregation: norms and condition number from singular values
  const obj9Table = `
<table class="styled-table" style="border-collapse: collapse; width: 75%;margin:auto; background: white; box-shadow: 0 2px 10px rgba(0,0,0,0.1); border-radius: 8px; overflow: hidden; font-family: Arial, sans-serif;">
  <thead>
    <tr>
      <th style="${tableHeaders.aggregation}">Quantity</th>
      <th style="${tableHeaders.aggregation}">Formula via singular values</th>
      <th style="${tableHeaders.aggregation}">Interpretation</th>
    </tr>
  </thead>
  <tbody>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Operator (spectral) norm ‖A‖<sub>2</sub></td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">σ<sub>1</sub></td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">maximum stretching factor on the unit ball</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;"><a href="/linear-algebra/matrix/trace" style="${linkStyle}">Frobenius norm</a> ‖A‖<sub>F</sub></td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">√(σ<sub>1</sub><sup>2</sup> + σ<sub>2</sub><sup>2</sup> + ··· + σ<sub>r</sub><sup>2</sup>)</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">total "energy" — root-sum-of-squares of singular values</td>
    </tr>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; font-weight: bold; color: #06357a;">Condition number κ(A)</td>
      <td style="padding: 12px 15px; color: #34495e;">σ<sub>1</sub> / σ<sub>r</sub></td>
      <td style="padding: 12px 15px; color: #34495e;">sensitivity to perturbation: κ = 10<sup>k</sup> loses ~k digits</td>
    </tr>
  </tbody>
</table>
`

  // obj12 — what one factorization yields, sorted by which factor carries it
  const svdReadings = {
    kicker: 'Decompositions \u00B7 SVD',
    title: 'What the SVD reveals',
    tallyLabel: 'readings',
    intro: 'Every entry comes from the same three factors. What changes is which one is being read \u2014 the singular values for size, the columns of $U$ and $V$ for structure, and all three together for geometry.',
    footnote: 'No other factorization answers this many questions, and none exists for every matrix. That combination is why the SVD is the one to reach for when the matrix is rectangular, rank-deficient, or simply unknown \u2014 the conditions the [other decompositions](!/linear-algebra/decompositions) require are exactly the ones it does without.',
    groups: [
      {
        heading: 'From the singular values',
        identities: [
          {
            name: 'Rank',
            anchor: '#3',
            formula: '$r = $ count of $\\sigma_i > 0$',
            condition: 'strictly positive only',
            note: 'The most numerically reliable rank there is. Row reduction decides rank by comparing entries against zero, which floating point makes arbitrary; the singular values instead show a gap, and where that gap falls is a judgement the numbers themselves support.',
          },
          {
            name: 'Norms',
            anchor: '#9',
            formula: '$\\|A\\|_2 = \\sigma_1, \\quad \\|A\\|_F^2 = \\textstyle\\sum \\sigma_i^2$',
            condition: 'read straight off the list',
            note: 'The largest singular value is the most any unit vector is stretched. The Frobenius norm is the whole list in quadrature \u2014 so both common matrix norms are functions of the same numbers.',
          },
          {
            name: 'Condition number',
            anchor: '#9',
            formula: '$\\kappa(A) = \\sigma_1 / \\sigma_r$',
            condition: '$A$ of full rank',
            strict: true,
            note: 'The ratio of most to least stretched. A large $\\kappa$ means the matrix is nearly singular in some direction, and small changes to $\\mathbf{b}$ produce large changes to the solution \u2014 which no determinant reports, since a matrix can have $\\det = 1$ and be badly conditioned.',
          },
        ],
      },
      {
        heading: 'From the columns of U and V',
        identities: [
          {
            name: 'The four subspaces',
            anchor: '#6',
            formula: 'partition $U$ and $V$ at index $r$',
            condition: 'orthonormal bases, all four at once',
            key: true,
            note: 'First $r$ columns of $V$ span the row space and the rest the null space; first $r$ of $U$ span the column space and the rest the left null space. The only method giving [all four](!/linear-algebra/vector-spaces/fundamental-spaces) orthonormally from one computation.',
          },
          {
            name: 'Pseudoinverse',
            anchor: '#7',
            formula: '$A^{+} = V\\Sigma^{+}U^{\\mathsf{T}}$',
            condition: 'reciprocate the nonzero $\\sigma$, leave zeros alone',
            note: 'Defined for every matrix, square or not, invertible or not. When $A$ is invertible it coincides with $A^{-1}$; otherwise it returns the least-squares solution of minimum norm, which is the sense in which it is the closest thing to an [inverse](!/linear-algebra/matrix/inverse).',
          },
        ],
      },
      {
        heading: 'From all three factors',
        identities: [
          {
            name: 'Low-rank approximation',
            anchor: '#8',
            formula: '$A_k = \\sum_{i=1}^{k} \\sigma_i \\mathbf{u}_i \\mathbf{v}_i^{\\mathsf{T}}$',
            condition: 'optimal for every unitarily invariant norm',
            key: true,
            note: 'Truncating the outer-product sum gives the best rank-$k$ approximation there is \u2014 the Eckart\u2013Young theorem, and it is why the SVD underlies image compression and principal component analysis. The error is exactly $\\sigma_{k+1}$, so the singular values say in advance how much is lost.',
          },
          {
            name: 'Geometric action',
            anchor: '#2',
            formula: '$A = U\\Sigma V^{\\mathsf{T}}$ \u2014 rotate, stretch, rotate',
            condition: 'every matrix, no hypotheses',
            note: 'Read right to left: $V^{\\mathsf{T}}$ rotates, $\\Sigma$ scales along axes, $U$ rotates again. Every linear map is those three steps, which is the claim that makes the factorization worth having as geometry rather than only as algebra.',
          },
        ],
      },
    ],
  }

const sectionsContent = {
  obj1: {
    title: `What the Singular Value Decomposition Is`,
    content: ``,
    before: ``,
    after: ``,
    link: ``,
  },
  obj2: {
    title: `The Geometric Interpretation`,
    content: `Every [linear transformation](!/linear-algebra/transformations) $\\mathbf{x} \\mapsto A\\mathbf{x}$ decomposes into three geometric steps:

$V^T$ rotates (or reflects) the input space, aligning the input with the "natural axes" of the transformation — the directions along which $A$ stretches most and least.

$\\Sigma$ scales each axis independently by the corresponding singular value. Axes with $\\sigma_i = 0$ are annihilated — those directions are collapsed to zero.

$U$ rotates (or reflects) the scaled result into the output space.

The singular values measure the stretching in each orthogonal direction. $\\sigma_1$ is the maximum stretching: $\\sigma_1 = \\max_{\\|\\mathbf{x}\\|=1}\\|A\\mathbf{x}\\|$. The smallest nonzero singular value $\\sigma_r$ is the minimum stretching on the [row space](!/linear-algebra/vector-spaces/fundamental-spaces). The ratio $\\sigma_1/\\sigma_r$ is the condition number — it measures how distorted the transformation is.

Even the most complex-looking matrix is geometrically just two rotations sandwiching a coordinate-axis scaling.`,
    before: ``,
    after: ``,
    link: ``,
  },
  obj3: {
    title: `Singular Values`,
    content: `The singular values of $A$ are the square roots of the [eigenvalues](!/linear-algebra/eigen) of $A^TA$ (or equivalently $AA^T$):

@academic[formula_callout:singular_values|Singular Values|$$\\sigma_i = \\sqrt{\\lambda_i(A^TA)} = \\sqrt{\\lambda_i(AA^T)}$$]@
@academic[formulas_link:/linear-algebra/formulas#singular_values]@

Since $A^TA$ is symmetric positive semi-definite, its eigenvalues are all $\\geq 0$, so the singular values are real and non-negative. They are ordered $\\sigma_1 \\geq \\sigma_2 \\geq \\cdots \\geq 0$.

The number of nonzero singular values equals the [rank](!/linear-algebra/matrix/rank) of $A$:

@academic[formula_callout:svd_rank|SVD Rank|$$\\text{rank}(A) = \\#\\{i : \\sigma_i > 0\\}$$]@
@academic[formulas_link:/linear-algebra/formulas#svd_rank]@

This is the most numerically stable method for determining rank: compute the SVD and count singular values above a tolerance.

The largest singular value $\\sigma_1$ is the operator norm $\\|A\\|_2 = \\max_{\\|\\mathbf{x}\\|=1}\\|A\\mathbf{x}\\|$. The [Frobenius norm](!/linear-algebra/matrix/trace) is $\\|A\\|_F = \\sqrt{\\sigma_1^2 + \\sigma_2^2 + \\cdots + \\sigma_r^2}$. The condition number is $\\kappa(A) = \\sigma_1/\\sigma_r$ — a large condition number means the matrix is nearly singular and small perturbations in the input cause large changes in the output.`,
    before: ``,
    after: ``,
    link: ``,
  },
  obj4: {
    title: `Computing the SVD`,
    content: `The standard approach computes the SVD through the eigenvalue decomposition of $A^TA$.

Form $A^TA$ (symmetric, $n \\times n$). Find its eigenvalues $\\lambda_1 \\geq \\cdots \\geq \\lambda_n \\geq 0$ and orthonormal eigenvectors $\\mathbf{v}_1, \\dots, \\mathbf{v}_n$ using the [spectral decomposition](!/linear-algebra/decompositions/spectral). These are the right singular vectors: $V = [\\mathbf{v}_1 \\; \\cdots \\; \\mathbf{v}_n]$.

The singular values are $\\sigma_i = \\sqrt{\\lambda_i}$. The left singular vectors are computed from the right ones: $\\mathbf{u}_i = \\frac{1}{\\sigma_i}A\\mathbf{v}_i$ for each nonzero $\\sigma_i$. If $r < m$, extend $\\{\\mathbf{u}_1, \\dots, \\mathbf{u}_r\\}$ to an [orthonormal basis](!/linear-algebra/orthogonality/orthogonal-sets) for $\\mathbb{R}^m$.

## Worked Example

For $A = \\begin{pmatrix} 1 & 0 \\\\ 0 & 1 \\\\ 1 & 1 \\end{pmatrix}$: $A^TA = \\begin{pmatrix} 2 & 1 \\\\ 1 & 2 \\end{pmatrix}$, eigenvalues $3$ and $1$, eigenvectors $\\frac{1}{\\sqrt{2}}(1, 1)^T$ and $\\frac{1}{\\sqrt{2}}(1, -1)^T$. Singular values: $\\sqrt{3}$ and $1$. Left singular vectors: $\\mathbf{u}_1 = \\frac{1}{\\sqrt{3}}A\\mathbf{v}_1 = \\frac{1}{\\sqrt{6}}(1, 1, 2)^T$, $\\mathbf{u}_2 = A\\mathbf{v}_2 = \\frac{1}{\\sqrt{2}}(1, -1, 0)^T$. Extend with $\\mathbf{u}_3 = \\frac{1}{\\sqrt{3}}(-1, -1, 1)^T$.`,
    before: ``,
    after: ``,
    link: ``,
  },
  obj5: {
    title: `Compact and Thin Forms`,
    content: `The full SVD has $U$ of size $m \\times m$, $\\Sigma$ of size $m \\times n$, and $V$ of size $n \\times n$. Two economical alternatives retain only the essential information.

The thin SVD keeps only the first $n$ columns of $U$ (call them $U_1$) and the top $n \\times n$ block of $\\Sigma$ (call it $\\Sigma_1$): $A = U_1 \\Sigma_1 V^T$. This drops the columns of $U$ corresponding to the [left null space](!/linear-algebra/vector-spaces/fundamental-spaces).

The compact SVD keeps only the first $r$ columns of $U$ and $V$ (where $r = \\text{rank}(A)$) and the $r \\times r$ diagonal block of nonzero singular values: $A = U_r \\Sigma_r V_r^T$. This is the most economical representation — it captures only the rank-$r$ content of $A$, discarding everything associated with zero singular values.

All three forms represent the same matrix $A$. The compact form uses the least storage; the full form provides bases for all four [fundamental subspaces](!/linear-algebra/vector-spaces/fundamental-spaces). The three variants line up cleanly on factor dimensions and on what each one chooses to keep.`,
    before: ``,
    after: ``,
    link: ``,
  },
  obj6: {
    title: `SVD and the Four Fundamental Subspaces`,
    content: `The SVD simultaneously provides orthonormal [bases](!/linear-algebra/vector-spaces) for all four [fundamental subspaces](!/linear-algebra/vector-spaces/fundamental-spaces) of $A$:

@academic[formula_callout:svd_four_fundamental_subspaces|SVD Four Fundamental Subspaces|$$\\begin{aligned} \\text{Col}(A) &= \\text{Span}\\{\\mathbf{u}_1, \\ldots, \\mathbf{u}_r\\} \\\\ \\text{Null}(A^T) &= \\text{Span}\\{\\mathbf{u}_{r+1}, \\ldots, \\mathbf{u}_m\\} \\\\ \\text{Row}(A) &= \\text{Span}\\{\\mathbf{v}_1, \\ldots, \\mathbf{v}_r\\} \\\\ \\text{Null}(A) &= \\text{Span}\\{\\mathbf{v}_{r+1}, \\ldots, \\mathbf{v}_n\\} \\end{aligned}$$]@
@academic[formulas_link:/linear-algebra/formulas#svd_four_fundamental_subspaces]@

The first $r$ columns of $V$ ($\\mathbf{v}_1, \\dots, \\mathbf{v}_r$) form an orthonormal basis for the row space of $A$.

The last $n - r$ columns of $V$ ($\\mathbf{v}_{r+1}, \\dots, \\mathbf{v}_n$) form an orthonormal basis for the [null space](!/linear-algebra/vector-spaces/fundamental-spaces) of $A$.

The first $r$ columns of $U$ ($\\mathbf{u}_1, \\dots, \\mathbf{u}_r$) form an orthonormal basis for the [column space](!/linear-algebra/vector-spaces/fundamental-spaces) of $A$.

The last $m - r$ columns of $U$ ($\\mathbf{u}_{r+1}, \\dots, \\mathbf{u}_m$) form an orthonormal basis for the left null space of $A$.

No other factorization provides all four bases simultaneously, and no other method guarantees that these bases are orthonormal. The SVD is the complete structural portrait of any matrix.`,
    before: ``,
    after: ``,
    link: ``,
  },
  obj7: {
    title: `The Pseudoinverse`,
    content: `The Moore-Penrose pseudoinverse $A^+$ is computed directly from the SVD:

@academic[formula_callout:moore_penrose_pseudoinverse|Moore-Penrose Pseudoinverse|$$A^+ = V\\Sigma^+ U^T$$]@
@academic[formulas_link:/linear-algebra/formulas#moore_penrose_pseudoinverse]@

The matrix $\\Sigma^+$ is formed by reciprocating each nonzero singular value and transposing the shape: if $\\Sigma$ is $m \\times n$ with diagonal entries $\\sigma_1, \\dots, \\sigma_r, 0, \\dots, 0$, then $\\Sigma^+$ is $n \\times m$ with diagonal entries $1/\\sigma_1, \\dots, 1/\\sigma_r, 0, \\dots, 0$.

The pseudoinverse satisfies four defining properties: $AA^+A = A$, $A^+AA^+ = A^+$, $(AA^+)^T = AA^+$, $(A^+A)^T = A^+A$.

For a full-rank overdetermined system ($m > n$, rank $= n$), $A^+\\mathbf{b}$ gives the [least-squares](!/linear-algebra/orthogonality/least-squares) solution. For a rank-deficient system, $A^+\\mathbf{b}$ gives the minimum-norm least-squares solution — the solution of smallest length among all minimizers of $\\|A\\mathbf{x} - \\mathbf{b}\\|$.`,
    before: ``,
    after: ``,
    link: ``,
  },
  obj8: {
    title: `Low-Rank Approximation`,
    content: `The best rank-$k$ approximation to $A$ in either the operator norm or the Frobenius norm is obtained by truncating the SVD at $k$ terms:

@academic[formula_callout:eckart_young_low_rank_approximation|Eckart-Young Low-Rank Approximation|$$A_k = \\sum_{i=1}^{k} \\sigma_i \\mathbf{u}_i \\mathbf{v}_i^T, \\qquad \\|A - A_k\\|_2 = \\sigma_{k+1}, \\quad \\|A - A_k\\|_F = \\sqrt{\\sum_{i=k+1}^{r}\\sigma_i^2}$$]@
@academic[formulas_link:/linear-algebra/formulas#eckart_young_low_rank_approximation]@

This is the Eckart-Young-Mirsky theorem. Among all matrices of rank at most $k$, $A_k$ is the closest to $A$. The approximation error equals $\\sigma_{k+1}$ (the first discarded singular value) in the operator norm, and $\\sqrt{\\sigma_{k+1}^2 + \\cdots + \\sigma_r^2}$ in the Frobenius norm.

When the singular values decay rapidly — $\\sigma_1 \\gg \\sigma_2 \\gg \\cdots$ — a small number of terms captures most of the matrix. This is the basis of image compression (store $k$ singular value triples instead of $mn$ entries), noise reduction (discard small singular values as noise), latent semantic analysis (retain the top-$k$ "concepts" in a document-term matrix), and dimensionality reduction more broadly.`,
    before: ``,
    after: ``,
    link: ``,
  },
  obj9: {
    title: `SVD and Norms`,
    content: `The singular values provide the complete "size profile" of a matrix.

The operator (spectral) norm is the largest singular value:

@academic[formula_callout:operator_norm|Operator Norm|$$\\|A\\|_2 = \\sigma_1 = \\max_{\\|\\mathbf{x}\\|=1} \\|A\\mathbf{x}\\|$$]@
@academic[formulas_link:/linear-algebra/formulas#operator_norm]@

It measures the maximum factor by which $A$ can stretch a unit vector.

The [Frobenius norm](!/linear-algebra/matrix/trace) is the root-sum-of-squares of all singular values:

@academic[formula_callout:frobenius_norm_via_singular_values|Frobenius Norm via Singular Values|$$\\|A\\|_F = \\sqrt{\\sum_{i=1}^{r} \\sigma_i^2}$$]@
@academic[formulas_link:/linear-algebra/formulas#frobenius_norm_via_singular_values]@

It measures the total "energy" in the matrix.

The condition number quantifies sensitivity to perturbation:

@academic[formula_callout:condition_number|Condition Number|$$\\kappa(A) = \\frac{\\sigma_1}{\\sigma_r}$$]@
@academic[formulas_link:/linear-algebra/formulas#condition_number]@

A matrix with $\\kappa = 10^k$ loses roughly $k$ digits of accuracy in solving $A\\mathbf{x} = \\mathbf{b}$ with floating-point arithmetic. A perfectly conditioned matrix ($\\kappa = 1$) is orthogonal. A singular matrix ($\\sigma_r = 0$) has $\\kappa = \\infty$.

The singular values are the natural measuring tool for matrices, just as eigenvalues are the natural measuring tool for symmetric matrices and [linear operators](!/linear-algebra/transformations). For non-symmetric matrices, singular values (not eigenvalues) govern norms and conditioning.`,
    before: ``,
    after: ``,
    link: ``,
  },
  obj10: {
    title: `SVD and the Spectral Decomposition`,
    content: `For a symmetric positive semi-definite matrix $A$ with eigenvalues $\\lambda_1 \\geq \\cdots \\geq \\lambda_n \\geq 0$, the [spectral decomposition](!/linear-algebra/decompositions/spectral) $A = QDQ^T$ is also the SVD: $U = V = Q$ and $\\Sigma = D$. The singular values are the eigenvalues.

For a general symmetric matrix with some negative eigenvalues, the singular values are $|\\lambda_i|$. The signs are absorbed into $U$ or $V$: if $\\lambda_i < 0$, one of the corresponding singular vectors is negated so that $\\sigma_i = |\\lambda_i| > 0$.

For non-symmetric or rectangular matrices, the eigendecomposition does not apply (it requires square matrices and may not exist even then), but the SVD always does. The SVD is the correct generalization of the spectral decomposition to the broadest possible class of matrices.`,
    before: ``,
    after: ``,
    link: ``,
  },
  obj11: {
    title: `The Outer Product Form`,
    content: `The SVD can be written as a sum of rank-one matrices:

@academic[formula_callout:svd_outer_product_form|SVD Outer Product Form|$$A = \\sum_{i=1}^{r} \\sigma_i \\, \\mathbf{u}_i \\mathbf{v}_i^T$$]@
@academic[formulas_link:/linear-algebra/formulas#svd_outer_product_form]@

Each term $\\sigma_i \\mathbf{u}_i\\mathbf{v}_i^T$ is an $m \\times n$ rank-one matrix. The singular value $\\sigma_i$ weights its contribution. The terms are ordered by importance: the first term captures the most of $A$ (in the norm sense), the second captures the most of the remainder, and so on.

Truncating this sum at $k$ terms gives the best rank-$k$ approximation $A_k$. The fraction of the Frobenius norm captured by the first $k$ terms is $(\\sigma_1^2 + \\cdots + \\sigma_k^2)/(\\sigma_1^2 + \\cdots + \\sigma_r^2)$.

This outer product perspective is the basis of nearly every matrix approximation method: keep the large singular values (signal) and discard the small ones (noise or redundancy).`,
    before: ``,
    after: ``,
    link: ``,
  },
  obj12: {
    title: `What the SVD Reveals`,
    content: `No other single factorization provides as much structural information about a matrix.

The [rank](!/linear-algebra/matrix/rank): the number of nonzero singular values.

The four [fundamental subspaces](!/linear-algebra/vector-spaces/fundamental-spaces): orthonormal bases from the columns of $U$ and $V$.

The [pseudoinverse](!/linear-algebra/orthogonality/least-squares): $A^+ = V\\Sigma^+ U^T$.

The best rank-$k$ approximation: truncate at $k$ terms.

Norms and the condition number: directly from the singular values.

The [geometry](!/linear-algebra/transformations/geometric) of the linear map: rotation, scaling, rotation.

For symmetric matrices, the SVD reduces to the [spectral decomposition](!/linear-algebra/decompositions/spectral). For invertible square matrices, the singular values reveal the conditioning that the [determinant](!/linear-algebra/determinants) alone cannot see (a matrix with $\\det = 1$ can still be poorly conditioned). For rectangular matrices, the SVD is the only factorization that applies without modification.

The SVD is the culmination of the decomposition hierarchy — the most general, most informative, and most broadly applicable factorization in linear algebra.

The six structural quantities the SVD exposes — rank, the four fundamental subspaces, the pseudoinverse, the best rank-$k$ approximation, norms and condition number, and the geometric decomposition — collect into a single reference card below.`,
    before: ``,
    after: ``,
    link: ``,
  },
}

const introContent = {
  title: `The Universal Matrix Factorization`,
  content: `The singular value decomposition, written SVD, factors any matrix of any shape as UΣVᵀ — two orthogonal matrices sandwiching a diagonal matrix of non-negative singular values. It exists for every matrix, reveals the rank, provides orthonormal bases for all four fundamental subspaces, computes the pseudoinverse, yields the best low-rank approximation, and decomposes every linear transformation into a rotation, a scaling, and another rotation. No other single factorization provides this much information.`,
}

const faqQuestions = {
  obj1: {
    question: "What is the singular value decomposition?",
    answer: "The SVD factors any m×n matrix A as A = UΣVᵀ, where U and V are orthogonal matrices of left and right singular vectors, and Σ is diagonal with non-negative singular values. It exists for every matrix regardless of shape, rank, or symmetry.",
    sectionId: "1"
  },
  obj2: {
    question: "What do singular values represent geometrically?",
    answer: "Singular values measure how much a matrix stretches vectors along each orthogonal direction. The largest singular value σ₁ is the maximum stretching factor, and the transformation A decomposes geometrically into a rotation (Vᵀ), a coordinate-axis scaling (Σ), and another rotation (U).",
    sectionId: "2"
  },
  obj3: {
    question: "How does SVD give the best low-rank approximation?",
    answer: "The Eckart-Young-Mirsky theorem states that truncating the SVD at k terms gives the closest rank-k matrix to A in both operator and Frobenius norms. The approximation error equals σₖ₊₁ in operator norm. This is the basis of image compression and noise reduction.",
    sectionId: "8"
  },
  obj4: {
    question: "How is the pseudoinverse computed from the SVD?",
    answer: "The Moore-Penrose pseudoinverse is A⁺ = VΣ⁺Uᵀ, where Σ⁺ reciprocates each nonzero singular value and transposes the shape. For overdetermined systems A⁺b gives the least-squares solution; for rank-deficient systems it gives the minimum-norm least-squares solution.",
    sectionId: "7"
  },
  obj5: {
    question: "How does SVD reveal the four fundamental subspaces?",
    answer: "The first r columns of V span the row space, the remaining n−r columns span the null space. The first r columns of U span the column space, the remaining m−r columns span the left null space. No other factorization provides orthonormal bases for all four subspaces simultaneously.",
    sectionId: "6"
  },
  obj6: {
    question: "What is the condition number of a matrix?",
    answer: "The condition number κ(A) = σ₁/σᵣ is the ratio of the largest to smallest nonzero singular value. It measures sensitivity to perturbation: a matrix with κ = 10ᵏ loses roughly k digits of accuracy in floating-point computation. Orthogonal matrices have κ = 1; singular matrices have κ = ∞.",
    sectionId: "9"
  }
}


const schemas = {
  learningResource: {
    "@context": "https://schema.org",
    "@type": "LearningResource",
    "name": "Singular Value Decomposition (SVD)",
    "description": "Singular value decomposition A = UΣVᵀ: singular values, geometric interpretation, pseudoinverse, low-rank approximation, four fundamental subspaces, norms, and condition number.",
    "url": "https://www.learnmathclass.com/linear-algebra/decompositions/svd",
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
      "name": "Singular Value Decomposition"
    },
    "teaches": [
      "SVD factorization A = UΣVᵀ for any matrix",
      "Geometric interpretation as rotation-scaling-rotation",
      "Singular values from eigenvalues of AᵀA",
      "Four fundamental subspaces from U and V",
      "Moore-Penrose pseudoinverse via SVD",
      "Best low-rank approximation (Eckart-Young theorem)",
      "Matrix norms and condition number from singular values",
      "Outer product form and relationship to spectral decomposition",
      "Side-by-side comparison of full, thin, and compact SVD forms",
      "Reference card collecting everything the SVD reveals about a matrix"
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
        "name": "Singular Value Decomposition",
        "item": "https://www.learnmathclass.com/linear-algebra/decompositions/svd"
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
    obj1Blocks,
    svdForms,
    obj6Table,
    obj9Table,
    svdReadings,
    faqQuestions,
    schemas,
    seoData: {
      title: "SVD: Singular Value Decomposition | Learn Math Class",
      description: "Singular value decomposition A = UΣVᵀ: singular values, geometric interpretation, pseudoinverse, low-rank approximation, four fundamental subspaces, norms, and condition number.",
      keywords: keyWords.join(", "),
      url: "/linear-algebra/decompositions/svd",
      name: "Singular Value Decomposition (SVD)"
    },
  }
}
   }

export default function SVDPage({
  seoData,
  sectionsContent,
  introContent,
  obj1Blocks,
  svdForms,
  obj6Table,
  obj9Table,
  svdReadings,
  faqQuestions,
  schemas,
}) {

  const tableWrapStyle = { margin: '20px auto', width: '100%' }
  const svgStyle = { display: 'block', margin: '0 auto', width: '80%', maxWidth: '80%' }

  // ---------- figures for the concept introduction ----------

  const oneBasisFigure = (
    <svg viewBox="0 0 620 200" width="80%" style={svgStyle}>
      <defs>
        <marker id="svdArNavy" markerWidth="9" markerHeight="9" refX="7" refY="3.2" orient="auto">
          <path d="M0,0 L0,6.4 L7.5,3.2 z" fill="#06357a" />
        </marker>
        <marker id="svdArDim" markerWidth="9" markerHeight="9" refX="7" refY="3.2" orient="auto">
          <path d="M0,0 L0,6.4 L7.5,3.2 z" fill="#8a93a0" />
        </marker>
      </defs>
      <rect x="26" y="20" width="250" height="158" fill="#ffffff" stroke="#e2e6ec" />
      <text x="151" y="13" fontSize="12.5" fill="#7c8794" textAnchor="middle">one space &mdash; input and output</text>
      <line x1="56" y1="146" x2="256" y2="146" stroke="#cfd6df" />
      <line x1="86" y1="36" x2="86" y2="168" stroke="#cfd6df" />
      <line x1="86" y1="146" x2="166" y2="106" stroke="#06357a" strokeWidth="2" markerEnd="url(#svdArNavy)" />
      <text x="146" y="99" fontSize="13" fill="#06357a" fontStyle="italic">p&#8321;</text>
      <line x1="86" y1="146" x2="126" y2="66" stroke="#06357a" strokeWidth="2" markerEnd="url(#svdArNavy)" />
      <text x="130" y="62" fontSize="13" fill="#06357a" fontStyle="italic">p&#8322;</text>
      <line x1="86" y1="146" x2="236" y2="71" stroke="#8a93a0" strokeWidth="1.6" strokeDasharray="5,4" markerEnd="url(#svdArDim)" />
      <text x="211" y="62" fontSize="12.5" fill="#8a93a0" fontStyle="italic">&lambda;&#8321;p&#8321;</text>
      <text x="151" y="194" fontSize="13" fill="#34495e" textAnchor="middle">the image of p&#8321; is written using p&#8321; itself</text>
      <text x="326" y="42" fontSize="12.5" fill="#a4243b" fontWeight="bold">Two ways this breaks</text>
      <line x1="326" y1="58" x2="592" y2="58" stroke="#e2e6ec" />
      <text x="326" y="80" fontSize="13.5" fill="#34495e">A is 3 &times; 2 &mdash; input and output</text>
      <text x="326" y="98" fontSize="13.5" fill="#34495e">live in different spaces, so one</text>
      <text x="326" y="116" fontSize="13.5" fill="#34495e">basis cannot describe both.</text>
      <text x="592" y="80" fontSize="15" fill="#a4243b" textAnchor="end" fontWeight="bold">&#10007;</text>
      <line x1="326" y1="130" x2="592" y2="130" stroke="#e2e6ec" />
      <text x="326" y="152" fontSize="13.5" fill="#34495e">A is square but defective &mdash; every</text>
      <text x="326" y="170" fontSize="13.5" fill="#34495e">eigenvector is a multiple of (1, 0),</text>
      <text x="326" y="188" fontSize="13.5" fill="#34495e">so no basis of them exists.</text>
      <text x="592" y="152" fontSize="15" fill="#a4243b" textAnchor="end" fontWeight="bold">&#10007;</text>
    </svg>
  )

  const twoBasesFigure = (
    <svg viewBox="0 0 660 250" width="80%" style={svgStyle}>
      <defs>
        <marker id="svdArV" markerWidth="9" markerHeight="9" refX="7" refY="3.2" orient="auto">
          <path d="M0,0 L0,6.4 L7.5,3.2 z" fill="#1f6f8b" />
        </marker>
        <marker id="svdArU" markerWidth="9" markerHeight="9" refX="7" refY="3.2" orient="auto">
          <path d="M0,0 L0,6.4 L7.5,3.2 z" fill="#b8860b" />
        </marker>
        <marker id="svdArBig" markerWidth="11" markerHeight="11" refX="8" refY="4" orient="auto">
          <path d="M0,0 L0,8 L9,4 z" fill="#06357a" />
        </marker>
      </defs>
      <text x="140" y="26" fontSize="12.5" fill="#7c8794" textAnchor="middle">input space &#8477;&#8319;</text>
      <line x1="40" y1="130" x2="240" y2="130" stroke="#cfd6df" />
      <line x1="140" y1="40" x2="140" y2="220" stroke="#cfd6df" />
      <circle cx="140" cy="130" r="58" fill="#eef2f8" stroke="#06357a" strokeWidth="1.6" />
      <line x1="140" y1="130" x2="195" y2="112" stroke="#1f6f8b" strokeWidth="2.4" markerEnd="url(#svdArV)" />
      <text x="200" y="106" fontSize="13.5" fill="#1f6f8b" fontWeight="bold">v&#8321;</text>
      <line x1="140" y1="130" x2="158" y2="75" stroke="#1f6f8b" strokeWidth="2.4" markerEnd="url(#svdArV)" />
      <text x="162" y="70" fontSize="13.5" fill="#1f6f8b" fontWeight="bold">v&#8322;</text>
      <text x="140" y="238" fontSize="13" fill="#34495e" textAnchor="middle">unit circle, orthonormal basis</text>
      <line x1="262" y1="130" x2="368" y2="130" stroke="#06357a" strokeWidth="2" markerEnd="url(#svdArBig)" />
      <text x="315" y="120" fontSize="15" fill="#06357a" textAnchor="middle" fontStyle="italic">A</text>
      <text x="315" y="154" fontSize="14" fill="#06357a" textAnchor="middle" fontWeight="bold">Av&#7522; = &sigma;&#7522;u&#7522;</text>
      <text x="500" y="26" fontSize="12.5" fill="#7c8794" textAnchor="middle">output space &#8477;&#7504;</text>
      <line x1="380" y1="130" x2="630" y2="130" stroke="#cfd6df" />
      <line x1="500" y1="40" x2="500" y2="220" stroke="#cfd6df" />
      <ellipse cx="500" cy="130" rx="105" ry="40" fill="#fbf6e8" stroke="#b8860b" strokeWidth="1.6" transform="rotate(-18 500 130)" />
      <line x1="500" y1="130" x2="600" y2="98" stroke="#b8860b" strokeWidth="2.6" markerEnd="url(#svdArU)" />
      <text x="586" y="88" fontSize="13.5" fill="#b8860b" fontWeight="bold">&sigma;&#8321;u&#8321;</text>
      <line x1="500" y1="130" x2="512" y2="92" stroke="#b8860b" strokeWidth="2.6" markerEnd="url(#svdArU)" />
      <text x="516" y="86" fontSize="13.5" fill="#b8860b" fontWeight="bold">&sigma;&#8322;u&#8322;</text>
      <text x="500" y="238" fontSize="13" fill="#34495e" textAnchor="middle">ellipse, axes &sigma;&#8321; and &sigma;&#8322; along a different orthonormal basis</text>
    </svg>
  )

  // React elements cannot serialize through getStaticProps, so the figures are
  // attached here, keyed by block id.
  const obj1Visuals = {
    'two-failures': oneBasisFigure,
    'circle-ellipse': twoBasesFigure,
  }

  const obj1Data = {
    blocks: obj1Blocks.map(block =>
      obj1Visuals[block.id] ? { ...block, visual: obj1Visuals[block.id] } : block
    ),
  }

  const genericSections=[
    {
        id:'1',
        title:sectionsContent.obj1.title,
        link:sectionsContent.obj1.link,
        content:[
          <ConceptIntro key={'obj1-intro'} data={obj1Data} />,
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
          <DiagramFrame
            key={'obj5-diagram'}
            id="svd-forms"
            title="Three forms, one factorization"
            source="/linear-algebra/decompositions/svd"
          >
            <ObjectTypeProfile data={svdForms} theme="navy" variant="stack" />
          </DiagramFrame>,
          `The distinction to keep hold of is that none of these is an approximation. Each drops columns that multiply against zero singular values, so the product is unchanged and $A$ is reconstructed exactly in all three. What is lost is not accuracy but the orthogonality of $U$ as a square matrix — $U_r^{\\mathsf{T}}U_r = I_r$ still holds, but $U_rU_r^{\\mathsf{T}}$ no longer does, and any argument relying on the left null space needs the full form.`,
        ]
    },
    {
        id:'6',
        title:sectionsContent.obj6.title,
        link:sectionsContent.obj6.link,
        content:[
          sectionsContent.obj6.content,
          <div key={'obj6-table'} style={tableWrapStyle}
               dangerouslySetInnerHTML={{ __html: obj6Table }} />,
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
          <div key={'obj9-table'} style={tableWrapStyle}
               dangerouslySetInnerHTML={{ __html: obj9Table }} />,
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
          `Grouping these by which factor supplies the answer is what makes them one computation rather than seven. Three come from the singular values alone, two from the columns of the orthogonal factors, and two require reading all three factors together. Nothing below needs the matrix again once the factorization is in hand.`,
          <DiagramFrame
            key={'obj12-diagram'}
            id="svd-readings"
            title="What the SVD reveals"
            source="/linear-algebra/decompositions/svd"
          >
            <IdentitySheet data={svdReadings} theme="navy" variant="ledger" />
          </DiagramFrame>,
          `Two of these deserve emphasis because nothing else supplies them. The **condition number** measures how badly a system amplifies error, and it is invisible to the determinant — a matrix can have determinant one and still be nearly singular in some direction. **Low-rank approximation** is optimal rather than merely reasonable: truncating the sum at $k$ terms gives the closest rank-$k$ matrix in every unitarily invariant norm, with error exactly $\\sigma_{k+1}$.`,
          `The reason all of this comes from one factorization is that the SVD asks nothing of the matrix. It need not be square, invertible, symmetric or full rank — the factorization exists regardless, which is what separates it from every other decomposition in this section and why it is the one to reach for when the matrix is unknown.`,
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
   <h1 className='title' style={{marginTop:'0px',marginBottom:'10px'}}>Singular Value Decomposition</h1>
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
   <br/>
   <Sections sections={genericSections}/>
   <br/>
   <br/>
   <br/>
   </>
  )
}