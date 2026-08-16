// // // tables-optimized: v4 | 2026-05-22 | 4 tables (obj4 aggregation, obj5 aggregation, obj10 comparison, obj11 summary capstone)

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
// //   "geometric transformations linear algebra",
// //   "rotation matrix",
// //   "reflection matrix",
// //   "projection matrix geometric",
// //   "shear transformation",
// //   "scaling matrix",
// //   "rotation matrix R2 R3",
// //   "Householder reflection",
// //   "determinant area volume",
// //   "orthogonal transformation",
// //   "transformation matrix columns",
// //   "combining linear transformations",
// //   "rotation angle matrix formula",
// //   "geometric interpretation determinant"
// // ]

// // const linkStyle = 'color: inherit; text-decoration: underline;'

// // // ---------- TABLES ----------

// // // obj4 — aggregation: rotations about each coordinate axis in R³
// // const obj4Table = `
// // <table class="styled-table" style="border-collapse: collapse; width: 75%;margin:auto; background: white; box-shadow: 0 2px 10px rgba(0,0,0,0.1); border-radius: 8px; overflow: hidden; font-family: Arial, sans-serif;">
// //   <thead>
// //     <tr>
// //       <th style="${tableHeaders.aggregation}">Axis of rotation</th>
// //       <th style="${tableHeaders.aggregation}">Matrix</th>
// //       <th style="${tableHeaders.aggregation}">Fixed direction</th>
// //       <th style="${tableHeaders.aggregation}">Plane that rotates</th>
// //     </tr>
// //   </thead>
// //   <tbody>
// //     <tr style="background: #f8f9fa;">
// //       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">x-axis: Rₓ(θ)</td>
// //       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">[1 &nbsp;0 &nbsp;0; 0 &nbsp;cosθ &nbsp;−sinθ; 0 &nbsp;sinθ &nbsp;cosθ]</td>
// //       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">x-coordinate unchanged</td>
// //       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">yz-plane</td>
// //     </tr>
// //     <tr>
// //       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">y-axis: R_y(θ)</td>
// //       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">[cosθ &nbsp;0 &nbsp;sinθ; 0 &nbsp;1 &nbsp;0; −sinθ &nbsp;0 &nbsp;cosθ]</td>
// //       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">y-coordinate unchanged</td>
// //       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">xz-plane</td>
// //     </tr>
// //     <tr style="background: #f8f9fa;">
// //       <td style="padding: 12px 15px; font-weight: bold; color: #06357a;">z-axis: R_z(θ)</td>
// //       <td style="padding: 12px 15px; color: #34495e;">[cosθ &nbsp;−sinθ &nbsp;0; sinθ &nbsp;cosθ &nbsp;0; 0 &nbsp;0 &nbsp;1]</td>
// //       <td style="padding: 12px 15px; color: #34495e;">z-coordinate unchanged</td>
// //       <td style="padding: 12px 15px; color: #34495e;">xy-plane</td>
// //     </tr>
// //   </tbody>
// // </table>
// // `

// // // obj5 — aggregation: reflections in R² across common mirror lines
// // const obj5Table = `
// // <table class="styled-table" style="border-collapse: collapse; width: 75%;margin:auto; background: white; box-shadow: 0 2px 10px rgba(0,0,0,0.1); border-radius: 8px; overflow: hidden; font-family: Arial, sans-serif;">
// //   <thead>
// //     <tr>
// //       <th style="${tableHeaders.aggregation}">Mirror line</th>
// //       <th style="${tableHeaders.aggregation}">Matrix</th>
// //       <th style="${tableHeaders.aggregation}">Coordinate effect</th>
// //     </tr>
// //   </thead>
// //   <tbody>
// //     <tr style="background: #f8f9fa;">
// //       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">x-axis</td>
// //       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">[1 &nbsp;0; 0 &nbsp;−1]</td>
// //       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">(x, y) ↦ (x, −y)</td>
// //     </tr>
// //     <tr>
// //       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">y-axis</td>
// //       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">[−1 &nbsp;0; 0 &nbsp;1]</td>
// //       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">(x, y) ↦ (−x, y)</td>
// //     </tr>
// //     <tr style="background: #f8f9fa;">
// //       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">line y = x</td>
// //       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">[0 &nbsp;1; 1 &nbsp;0]</td>
// //       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">(x, y) ↦ (y, x) — swaps coordinates</td>
// //     </tr>
// //     <tr>
// //       <td style="padding: 12px 15px; font-weight: bold; color: #06357a;">line through origin at angle α</td>
// //       <td style="padding: 12px 15px; color: #34495e;">[cos 2α &nbsp;sin 2α; sin 2α &nbsp;−cos 2α]</td>
// //       <td style="padding: 12px 15px; color: #34495e;">general formula; specializes to the rows above for α = 0°, 90°, 45°</td>
// //     </tr>
// //   </tbody>
// // </table>
// // `

// // // obj10 — comparison/decision: classifying transformations by det(A)
// // const obj10Table = `
// // <table class="styled-table" style="border-collapse: collapse; width: 75%;margin:auto; background: white; box-shadow: 0 2px 10px rgba(0,0,0,0.1); border-radius: 8px; overflow: hidden; font-family: Arial, sans-serif;">
// //   <thead>
// //     <tr>
// //       <th style="${tableHeaders.comparison}">det(A)</th>
// //       <th style="${tableHeaders.comparison}">Effect on area / volume</th>
// //       <th style="${tableHeaders.comparison}">Effect on orientation</th>
// //       <th style="${tableHeaders.comparison}">Typical transformations</th>
// //     </tr>
// //   </thead>
// //   <tbody>
// //     <tr style="background: #f8f9fa;">
// //       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">|det(A)| &gt; 1</td>
// //       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">expands by factor |det(A)|</td>
// //       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">preserves if det &gt; 0, reverses if det &lt; 0</td>
// //       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">uniform scaling with |c| &gt; 1</td>
// //     </tr>
// //     <tr>
// //       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">0 &lt; |det(A)| &lt; 1</td>
// //       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">shrinks by factor |det(A)|</td>
// //       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">preserves if det &gt; 0, reverses if det &lt; 0</td>
// //       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">uniform scaling with 0 &lt; |c| &lt; 1</td>
// //     </tr>
// //     <tr style="background: #f8f9fa;">
// //       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">det(A) = +1</td>
// //       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">preserves area / volume</td>
// //       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">preserves orientation</td>
// //       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">rotation, shear</td>
// //     </tr>
// //     <tr>
// //       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">det(A) = −1</td>
// //       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">preserves area / volume</td>
// //       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">reverses orientation (handedness flip)</td>
// //       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">reflection, improper rotation</td>
// //     </tr>
// //     <tr style="background: #f8f9fa;">
// //       <td style="padding: 12px 15px; font-weight: bold; color: #06357a;">det(A) = 0</td>
// //       <td style="padding: 12px 15px; color: #34495e;">collapses at least one dimension (image is a proper subspace)</td>
// //       <td style="padding: 12px 15px; color: #34495e;">undefined / degenerate</td>
// //       <td style="padding: 12px 15px; color: #34495e;">projection onto a proper subspace, any singular matrix</td>
// //     </tr>
// //   </tbody>
// // </table>
// // `

// // // obj11 — summary capstone: algebraic signature of each transformation family
// // const summaryTable = `
// // <table class="styled-table" style="border-collapse: collapse; width: 75%;margin:auto; background: white; box-shadow: 0 2px 10px rgba(0,0,0,0.1); border-radius: 8px; overflow: hidden; font-family: Arial, sans-serif;">
// //   <thead>
// //     <tr>
// //       <th style="${tableHeaders.summary}">Family</th>
// //       <th style="${tableHeaders.summary} text-align: center;">Orthogonal?</th>
// //       <th style="${tableHeaders.summary} text-align: center;">det(A)</th>
// //       <th style="${tableHeaders.summary}">Eigenvalues</th>
// //       <th style="${tableHeaders.summary}">Algebraic identity</th>
// //       <th style="${tableHeaders.summary} text-align: center;">Preserves length?</th>
// //       <th style="${tableHeaders.summary} text-align: center;">Preserves area/vol?</th>
// //     </tr>
// //   </thead>
// //   <tbody>
// //     <tr style="background: #f8f9fa;">
// //       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Scaling (uniform by c)</td>
// //       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e; text-align: center;">only when c = ±1</td>
// //       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e; text-align: center;">cⁿ</td>
// //       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">c (n-fold)</td>
// //       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">A = cI (diagonal)</td>
// //       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e; text-align: center;">only c = ±1</td>
// //       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e; text-align: center;">only c = ±1</td>
// //     </tr>
// //     <tr>
// //       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Rotation R_θ</td>
// //       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #27ae60; text-align: center; font-weight: bold; font-size: 18px;">✓</td>
// //       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e; text-align: center;">+1</td>
// //       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">e^±iθ (complex pair; ℝ: 1 on rotation axis in ℝ³)</td>
// //       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">RᵀR = I; R⁻¹ = Rᵀ</td>
// //       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #27ae60; text-align: center; font-weight: bold; font-size: 18px;">✓</td>
// //       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #27ae60; text-align: center; font-weight: bold; font-size: 18px;">✓</td>
// //     </tr>
// //     <tr style="background: #f8f9fa;">
// //       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Reflection H</td>
// //       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #27ae60; text-align: center; font-weight: bold; font-size: 18px;">✓</td>
// //       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e; text-align: center;">−1</td>
// //       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">+1 (on mirror) and −1 (perpendicular to mirror)</td>
// //       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">H² = I (involutory); Hᵀ = H</td>
// //       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #27ae60; text-align: center; font-weight: bold; font-size: 18px;">✓</td>
// //       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #27ae60; text-align: center; font-weight: bold; font-size: 18px;">✓</td>
// //     </tr>
// //     <tr>
// //       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Projection P (orthogonal)</td>
// //       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e; text-align: center;">only when P = I</td>
// //       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e; text-align: center;">0 (proper); 1 (= I)</td>
// //       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">0 (perpendicular component) and 1 (in-subspace component)</td>
// //       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">P² = P (idempotent); Pᵀ = P</td>
// //       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #e74c3c; text-align: center; font-weight: bold; font-size: 18px;">✗</td>
// //       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #e74c3c; text-align: center; font-weight: bold; font-size: 18px;">✗</td>
// //     </tr>
// //     <tr style="background: #f8f9fa;">
// //       <td style="padding: 12px 15px; font-weight: bold; color: #06357a;">Shear</td>
// //       <td style="padding: 12px 15px; color: #e74c3c; text-align: center; font-weight: bold; font-size: 18px;">✗</td>
// //       <td style="padding: 12px 15px; color: #34495e; text-align: center;">+1</td>
// //       <td style="padding: 12px 15px; color: #34495e;">1 (repeated; defective — not diagonalizable)</td>
// //       <td style="padding: 12px 15px; color: #34495e;">triangular with 1's on the diagonal</td>
// //       <td style="padding: 12px 15px; color: #e74c3c; text-align: center; font-weight: bold; font-size: 18px;">✗</td>
// //       <td style="padding: 12px 15px; color: #27ae60; text-align: center; font-weight: bold; font-size: 18px;">✓</td>
// //     </tr>
// //   </tbody>
// // </table>
// // `

// // // ---------- SECTIONS ----------

// // // const sectionsContent = {
// // //   obj1: {
// // //     title: `How to Read a Transformation Matrix`,
// // //     content: `The geometric effect of a [matrix](!/linear-algebra/matrix) $A$ is revealed by two pieces of information: what it does to the standard [basis](!/linear-algebra/vector-spaces) vectors (the columns) and what its [determinant](!/linear-algebra/determinants) is.

// // // Column $1$ is the image of $\\mathbf{e}_1 = (1, 0)$ in $\\mathbb{R}^2$ or $(1, 0, 0)$ in $\\mathbb{R}^3$. Column $2$ is the image of $\\mathbf{e}_2$. The matrix maps the standard grid to the parallelogram (or parallelepiped) spanned by these column vectors.

// // // The absolute value $|\\det(A)|$ measures how the transformation scales areas (in $\\mathbb{R}^2$) or volumes (in $\\mathbb{R}^3$). The sign of $\\det(A)$ indicates orientation: positive means the transformation preserves handedness, negative means it reverses it. An [orthogonal](!/linear-algebra/matrix/types) matrix ($\\det = \\pm 1$) preserves all lengths and angles — it is a rigid motion.`,
// // //     before: ``,
// // //     after: ``,
// // //     link: ``,
// // //   },
// // //   obj2: {
// // //     title: `Scaling`,
// // //     content: `Uniform scaling multiplies every coordinate by the same factor: $T(\\mathbf{x}) = c\\mathbf{x}$, with matrix $cI$. When $c > 1$ the transformation enlarges, when $0 < c < 1$ it shrinks, and when $c < 0$ it reflects through the origin and scales.

// // // Non-uniform scaling stretches each axis independently. In $\\mathbb{R}^2$, $T(x, y) = (c_1 x, c_2 y)$ has matrix $\\text{diag}(c_1, c_2)$. The horizontal axis is scaled by $c_1$ and the vertical by $c_2$. A unit square maps to a rectangle with side lengths $|c_1|$ and $|c_2|$.

// // // The [determinant](!/linear-algebra/determinants/geometry) is $c^n$ for uniform scaling and $c_1 c_2$ (or $c_1 c_2 c_3$) for non-uniform. When any scaling factor is zero, the transformation collapses that axis entirely and the determinant is zero.

// // // In $\\mathbb{R}^3$, $\\text{diag}(c_1, c_2, c_3)$ scales each coordinate axis independently. The unit cube maps to a rectangular box with side lengths $|c_1|$, $|c_2|$, $|c_3|$ and volume $|c_1 c_2 c_3|$.`,
// // //     before: ``,
// // //     after: ``,
// // //     link: ``,
// // //   },
// // //   obj3: {
// // //     title: `Rotations in R²`,
// // //     content: `Rotation by angle $\\theta$ counterclockwise about the origin has matrix

// // // $$R_\\theta = \\begin{pmatrix} \\cos\\theta & -\\sin\\theta \\\\ \\sin\\theta & \\cos\\theta \\end{pmatrix}$$

// // // The first column $R_\\theta \\mathbf{e}_1 = (\\cos\\theta, \\sin\\theta)$ is the image of $(1, 0)$ — the point on the unit circle at angle $\\theta$. The second column $R_\\theta \\mathbf{e}_2 = (-\\sin\\theta, \\cos\\theta)$ is the image of $(0, 1)$ — the point at angle $\\theta + 90°$.

// // // The determinant is $\\cos^2\\theta + \\sin^2\\theta = 1$ for every $\\theta$: rotations preserve areas and orientation. The matrix is [orthogonal](!/linear-algebra/matrix/types): $R_\\theta^T R_\\theta = I$, so lengths and angles are preserved. The inverse is $R_\\theta^{-1} = R_{-\\theta} = R_\\theta^T$ — rotating backward by the same angle.

// // // Rotations compose by adding angles: $R_\\alpha R_\\beta = R_{\\alpha + \\beta}$. This follows from the trigonometric addition formulas and corresponds to the fact that rotating by $\\beta$ then by $\\alpha$ is the same as rotating by $\\alpha + \\beta$.

// // // Common cases: $R_{90°} = \\begin{pmatrix} 0 & -1 \\\\ 1 & 0 \\end{pmatrix}$, $R_{180°} = \\begin{pmatrix} -1 & 0 \\\\ 0 & -1 \\end{pmatrix}$, $R_{45°} = \\frac{1}{\\sqrt{2}}\\begin{pmatrix} 1 & -1 \\\\ 1 & 1 \\end{pmatrix}$.`,
// // //     before: ``,
// // //     after: ``,
// // //     link: ``,
// // //   },
// // //   obj4: {
// // //     title: `Rotations in R³`,
// // //     content: `In three dimensions, a rotation is specified by an axis and an angle. Rotation by $\\theta$ about the $z$-axis leaves the $z$-coordinate unchanged and rotates the $xy$-plane:

// // // $$R_z(\\theta) = \\begin{pmatrix} \\cos\\theta & -\\sin\\theta & 0 \\\\ \\sin\\theta & \\cos\\theta & 0 \\\\ 0 & 0 & 1 \\end{pmatrix}$$

// // // Rotations about the $x$-axis and $y$-axis have the same $2 \\times 2$ rotation block embedded in different positions:

// // // $$R_x(\\theta) = \\begin{pmatrix} 1 & 0 & 0 \\\\ 0 & \\cos\\theta & -\\sin\\theta \\\\ 0 & \\sin\\theta & \\cos\\theta \\end{pmatrix}, \\quad R_y(\\theta) = \\begin{pmatrix} \\cos\\theta & 0 & \\sin\\theta \\\\ 0 & 1 & 0 \\\\ -\\sin\\theta & 0 & \\cos\\theta \\end{pmatrix}$$

// // // Every $3 \\times 3$ rotation matrix is orthogonal with determinant $+1$. The axis of rotation is the [eigenvector](!/linear-algebra/eigen) with eigenvalue $1$ — the direction that remains fixed. Any rotation in $\\mathbb{R}^3$ can be decomposed into rotations about the coordinate axes (Euler angles), though the decomposition is not unique.`,
// // //     before: ``,
// // //     after: ``,
// // //     link: ``,
// // //   },
// // //   obj5: {
// // //     title: `Reflections in R²`,
// // //     content: `Reflection across the $x$-axis flips the $y$-coordinate: $T(x, y) = (x, -y)$, with matrix $\\begin{pmatrix} 1 & 0 \\\\ 0 & -1 \\end{pmatrix}$.

// // // Reflection across the $y$-axis flips the $x$-coordinate: matrix $\\begin{pmatrix} -1 & 0 \\\\ 0 & 1 \\end{pmatrix}$.

// // // Reflection across the line $y = x$ swaps coordinates: matrix $\\begin{pmatrix} 0 & 1 \\\\ 1 & 0 \\end{pmatrix}$.

// // // Reflection across an arbitrary line through the origin at angle $\\alpha$ has matrix

// // // $$H_\\alpha = \\begin{pmatrix} \\cos 2\\alpha & \\sin 2\\alpha \\\\ \\sin 2\\alpha & -\\cos 2\\alpha \\end{pmatrix}$$

// // // All reflection matrices share the same properties: the determinant is $-1$ (orientation-reversing, area-preserving), the matrix is [orthogonal](!/linear-algebra/matrix/types) (lengths and angles preserved), and the matrix is [involutory](!/linear-algebra/matrix/types) ($H^2 = I$) — reflecting twice returns every vector to its starting point. The [eigenvalues](!/linear-algebra/eigen) are $+1$ (vectors on the mirror line) and $-1$ (vectors perpendicular to it).`,
// // //     before: ``,
// // //     after: ``,
// // //     link: ``,
// // //   },
// // //   obj6: {
// // //     title: `Reflections in R³`,
// // //     content: `Reflection across a coordinate plane negates the coordinate perpendicular to that plane. Reflection across the $xy$-plane: $\\text{diag}(1, 1, -1)$. Across the $xz$-plane: $\\text{diag}(1, -1, 1)$. Across the $yz$-plane: $\\text{diag}(-1, 1, 1)$.

// // // Reflection across an arbitrary plane through the origin with unit normal $\\mathbf{n}$ is given by the Householder matrix:

// // // $$H = I - 2\\mathbf{n}\\mathbf{n}^T$$

// // // This matrix subtracts twice the component of each vector in the direction of $\\mathbf{n}$, effectively mirroring across the plane perpendicular to $\\mathbf{n}$. Householder reflections are orthogonal, have determinant $-1$, and satisfy $H^2 = I$. They are the building blocks of the [QR decomposition](!/linear-algebra/decompositions/qr) and are widely used in numerical algorithms.`,
// // //     before: ``,
// // //     after: ``,
// // //     link: ``,
// // //   },
// // //   obj7: {
// // //     title: `Projections`,
// // //     content: `Orthogonal [projection](!/linear-algebra/orthogonality/projections) onto a subspace collapses each vector onto its nearest point in the subspace, discarding the perpendicular component.

// // // Projection onto the $x$-axis in $\\mathbb{R}^2$: $T(x, y) = (x, 0)$, with matrix $\\begin{pmatrix} 1 & 0 \\\\ 0 & 0 \\end{pmatrix}$.

// // // Projection onto a line through the origin in direction $\\mathbf{u}$:

// // // $$P = \\frac{\\mathbf{u}\\mathbf{u}^T}{\\mathbf{u}^T\\mathbf{u}}$$

// // // Projection onto a plane with unit normal $\\mathbf{n}$ in $\\mathbb{R}^3$:

// // // $$P = I - \\frac{\\mathbf{n}\\mathbf{n}^T}{\\mathbf{n}^T\\mathbf{n}}$$

// // // All orthogonal projection matrices share the same algebraic signature: $P^2 = P$ ([idempotent](!/linear-algebra/matrix/types) — projecting twice is the same as projecting once), $P^T = P$ (symmetric), [eigenvalues](!/linear-algebra/eigen) are $0$ and $1$, and $\\text{rank}(P) = \\text{tr}(P)$. The determinant is $0$ unless the projection is onto the full space — projections always collapse at least one dimension.`,
// // //     before: ``,
// // //     after: ``,
// // //     link: ``,
// // //   },
// // //   obj8: {
// // //     title: `Shears`,
// // //     content: `A shear displaces each point in proportion to its distance from a fixed line or plane. In $\\mathbb{R}^2$, a horizontal shear shifts the $x$-coordinate by $k$ times the $y$-coordinate:

// // // $$T(x, y) = (x + ky, \\; y), \\quad \\text{matrix } \\begin{pmatrix} 1 & k \\\\ 0 & 1 \\end{pmatrix}$$

// // // A vertical shear shifts the $y$-coordinate by $k$ times the $x$-coordinate:

// // // $$T(x, y) = (x, \\; kx + y), \\quad \\text{matrix } \\begin{pmatrix} 1 & 0 \\\\ k & 1 \\end{pmatrix}$$

// // // Both are [triangular](!/linear-algebra/matrix/types) matrices with determinant $1$: shears are area-preserving and orientation-preserving. They are not orthogonal — angles are distorted. A square sheared horizontally becomes a parallelogram of the same area but with tilted sides.

// // // In $\\mathbb{R}^3$, there are six possible shear directions (each coordinate shifted by a multiple of each other coordinate). Each is represented by an identity matrix with one off-diagonal entry replaced by $k$. Shears are fundamental building blocks — any invertible matrix with determinant $1$ can be written as a product of shears.`,
// // //     before: ``,
// // //     after: ``,
// // //     link: ``,
// // //   },
// // //   obj9: {
// // //     title: `Combining Transformations`,
// // //     content: `Composing transformations corresponds to [multiplying](!/linear-algebra/matrix/operations) their matrices. A rotation followed by a scaling is $SA$ where $S$ is the scaling matrix and $A$ is the rotation matrix. The product is applied right-to-left: $A$ acts first, then $S$.

// // // Order matters. Rotating then shearing produces a different result from shearing then rotating: $\\text{Shear} \\cdot \\text{Rotation} \\neq \\text{Rotation} \\cdot \\text{Shear}$ in general.

// // // The [singular value decomposition](!/linear-algebra/decompositions/svd) reveals the hidden geometric structure of any matrix: $A = U\\Sigma V^T$, where $V^T$ is a rotation (or rotation-reflection), $\\Sigma$ is a coordinate-axis scaling, and $U$ is another rotation (or rotation-reflection). Every linear transformation is a rotation, followed by a scaling along the coordinate axes, followed by another rotation. The singular values in $\\Sigma$ measure the maximum stretching in each orthogonal direction.

// // // This decomposition means no linear transformation is truly exotic — even the most complex-looking matrix is just three simple geometric operations composed together.`,
// // //     before: ``,
// // //     after: ``,
// // //     link: ``,
// // //   },
// // //   obj10: {
// // //     title: `Determinant as Geometric Signature`,
// // //     content: `The [determinant](!/linear-algebra/determinants/geometry) classifies every linear transformation by its effect on size and orientation.

// // // $|\\det(A)|$ is the factor by which the transformation scales areas (in $\\mathbb{R}^2$) or volumes (in $\\mathbb{R}^3$). A unit square maps to a parallelogram of area $|\\det(A)|$. A unit cube maps to a parallelepiped of volume $|\\det(A)|$.

// // // $\\det(A) > 0$: the transformation preserves orientation. Counterclockwise stays counterclockwise in $\\mathbb{R}^2$; right-handed stays right-handed in $\\mathbb{R}^3$. Rotations and shears fall in this category.

// // // $\\det(A) < 0$: the transformation reverses orientation. Counterclockwise becomes clockwise; right-handed becomes left-handed. Reflections are the canonical example.

// // // $\\det(A) = 0$: the transformation collapses at least one dimension. The image is a proper subspace — a line or point in $\\mathbb{R}^2$, a plane, line, or point in $\\mathbb{R}^3$. Projections onto proper subspaces and singular matrices fall here.

// // // $|\\det(A)| = 1$: the transformation preserves area or volume. Rotations ($\\det = +1$) and reflections ($\\det = -1$) are the area-preserving and volume-preserving transformations. Shears also have $\\det = 1$, preserving area despite distorting angles.`,
// // //     before: ``,
// // //     after: ``,
// // //     link: ``,
// // //   },
// // //   obj11: {
// // //     title: `Summary: Algebraic Signature of Each Family`,
// // //     content: `Each family of geometric transformations has been treated in its own section, with its own matrix templates and its own algebraic identities. The table below sets all five side by side across the diagnostic signatures that distinguish them — orthogonality, determinant, eigenvalues, the characteristic algebraic identity, and what each family does to length and to area. It is the recognition card to keep nearby when a matrix is in hand and the question is which geometric family it belongs to.`,
// // //     before: ``,
// // //     after: ``,
// // //     link: ``,
// // //   },
// // // }


// // // tables-optimized: v4 | 2026-05-22 | 4 tables (obj4 aggregation, obj5 aggregation, obj10 comparison, obj11 summary capstone)

// // // ---------- SECTIONS ----------

// // const sectionsContent = {
// //   obj1: {
// //     title: `How to Read a Transformation Matrix`,
// //     content: `The geometric effect of a [matrix](!/linear-algebra/matrix) $A$ is revealed by two pieces of information: what it does to the standard [basis](!/linear-algebra/vector-spaces) vectors (the columns) and what its [determinant](!/linear-algebra/determinants) is.

// // Column $1$ is the image of $\\mathbf{e}_1 = (1, 0)$ in $\\mathbb{R}^2$ or $(1, 0, 0)$ in $\\mathbb{R}^3$. Column $2$ is the image of $\\mathbf{e}_2$. The matrix maps the standard grid to the parallelogram (or parallelepiped) spanned by these column vectors.

// // The absolute value $|\\det(A)|$ measures how the transformation scales areas (in $\\mathbb{R}^2$) or volumes (in $\\mathbb{R}^3$). The sign of $\\det(A)$ indicates orientation: positive means the transformation preserves handedness, negative means it reverses it. An [orthogonal](!/linear-algebra/matrix/types) matrix ($\\det = \\pm 1$) preserves all lengths and angles — it is a rigid motion.`,
// //     before: ``,
// //     after: ``,
// //     link: ``,
// //   },
// //   obj2: {
// //     title: `Scaling`,
// //     content: `Uniform scaling multiplies every coordinate by the same factor: $T(\\mathbf{x}) = c\\mathbf{x}$, with matrix $cI$. When $c > 1$ the transformation enlarges, when $0 < c < 1$ it shrinks, and when $c < 0$ it reflects through the origin and scales.

// // Non-uniform scaling stretches each axis independently. In $\\mathbb{R}^2$, $T(x, y) = (c_1 x, c_2 y)$ has matrix $\\text{diag}(c_1, c_2)$. The horizontal axis is scaled by $c_1$ and the vertical by $c_2$. A unit square maps to a rectangle with side lengths $|c_1|$ and $|c_2|$.

// // The [determinant](!/linear-algebra/determinants/geometry) is $c^n$ for uniform scaling and $c_1 c_2$ (or $c_1 c_2 c_3$) for non-uniform. When any scaling factor is zero, the transformation collapses that axis entirely and the determinant is zero.

// // In $\\mathbb{R}^3$, $\\text{diag}(c_1, c_2, c_3)$ scales each coordinate axis independently. The unit cube maps to a rectangular box with side lengths $|c_1|$, $|c_2|$, $|c_3|$ and volume $|c_1 c_2 c_3|$.`,
// //     before: ``,
// //     after: ``,
// //     link: ``,
// //   },
// //   obj3: {
// //     title: `Rotations in R²`,
// //     content: `Rotation by angle $\\theta$ counterclockwise about the origin has matrix

// // @academic[formula_callout:Rotation Matrix 2D
// // $$R_\\theta = \\begin{pmatrix} \\cos\\theta & -\\sin\\theta \\\\ \\sin\\theta & \\cos\\theta \\end{pmatrix}$$
// // /linear-algebra/formulas#rotation_matrix_2d]@

// // @academic[formulas_link:Browse all linear algebra formulas
// // /linear-algebra/formulas]@

// // The first column $R_\\theta \\mathbf{e}_1 = (\\cos\\theta, \\sin\\theta)$ is the image of $(1, 0)$ — the point on the unit circle at angle $\\theta$. The second column $R_\\theta \\mathbf{e}_2 = (-\\sin\\theta, \\cos\\theta)$ is the image of $(0, 1)$ — the point at angle $\\theta + 90°$.

// // The determinant is $\\cos^2\\theta + \\sin^2\\theta = 1$ for every $\\theta$: rotations preserve areas and orientation. The matrix is [orthogonal](!/linear-algebra/matrix/types): $R_\\theta^T R_\\theta = I$, so lengths and angles are preserved. The inverse is $R_\\theta^{-1} = R_{-\\theta} = R_\\theta^T$ — rotating backward by the same angle.

// // Rotations compose by adding angles: $R_\\alpha R_\\beta = R_{\\alpha + \\beta}$. This follows from the trigonometric addition formulas and corresponds to the fact that rotating by $\\beta$ then by $\\alpha$ is the same as rotating by $\\alpha + \\beta$.

// // Common cases: $R_{90°} = \\begin{pmatrix} 0 & -1 \\\\ 1 & 0 \\end{pmatrix}$, $R_{180°} = \\begin{pmatrix} -1 & 0 \\\\ 0 & -1 \\end{pmatrix}$, $R_{45°} = \\frac{1}{\\sqrt{2}}\\begin{pmatrix} 1 & -1 \\\\ 1 & 1 \\end{pmatrix}$.`,
// //     before: ``,
// //     after: ``,
// //     link: ``,
// //   },
// //   obj4: {
// //     title: `Rotations in R³`,
// //     content: `In three dimensions, a rotation is specified by an axis and an angle. The three coordinate-axis rotation matrices are:

// // @academic[formula_callout:Rotation Matrices 3D
// // $$R_x(\\theta) = \\begin{pmatrix} 1 & 0 & 0 \\\\ 0 & \\cos\\theta & -\\sin\\theta \\\\ 0 & \\sin\\theta & \\cos\\theta \\end{pmatrix}, \\;\\; R_y(\\theta) = \\begin{pmatrix} \\cos\\theta & 0 & \\sin\\theta \\\\ 0 & 1 & 0 \\\\ -\\sin\\theta & 0 & \\cos\\theta \\end{pmatrix}, \\;\\; R_z(\\theta) = \\begin{pmatrix} \\cos\\theta & -\\sin\\theta & 0 \\\\ \\sin\\theta & \\cos\\theta & 0 \\\\ 0 & 0 & 1 \\end{pmatrix}$$
// // /linear-algebra/formulas#rotation_matrices_3d]@

// // @academic[formulas_link:Browse all linear algebra formulas
// // /linear-algebra/formulas]@

// // Rotation by $\\theta$ about the $z$-axis leaves the $z$-coordinate unchanged and rotates the $xy$-plane:

// // $$R_z(\\theta) = \\begin{pmatrix} \\cos\\theta & -\\sin\\theta & 0 \\\\ \\sin\\theta & \\cos\\theta & 0 \\\\ 0 & 0 & 1 \\end{pmatrix}$$

// // Rotations about the $x$-axis and $y$-axis have the same $2 \\times 2$ rotation block embedded in different positions:

// // $$R_x(\\theta) = \\begin{pmatrix} 1 & 0 & 0 \\\\ 0 & \\cos\\theta & -\\sin\\theta \\\\ 0 & \\sin\\theta & \\cos\\theta \\end{pmatrix}, \\quad R_y(\\theta) = \\begin{pmatrix} \\cos\\theta & 0 & \\sin\\theta \\\\ 0 & 1 & 0 \\\\ -\\sin\\theta & 0 & \\cos\\theta \\end{pmatrix}$$

// // Every $3 \\times 3$ rotation matrix is orthogonal with determinant $+1$. The axis of rotation is the [eigenvector](!/linear-algebra/eigen) with eigenvalue $1$ — the direction that remains fixed. Any rotation in $\\mathbb{R}^3$ can be decomposed into rotations about the coordinate axes (Euler angles), though the decomposition is not unique.`,
// //     before: ``,
// //     after: ``,
// //     link: ``,
// //   },
// //   obj5: {
// //     title: `Reflections in R²`,
// //     content: `Reflection across the $x$-axis flips the $y$-coordinate: $T(x, y) = (x, -y)$, with matrix $\\begin{pmatrix} 1 & 0 \\\\ 0 & -1 \\end{pmatrix}$.

// // Reflection across the $y$-axis flips the $x$-coordinate: matrix $\\begin{pmatrix} -1 & 0 \\\\ 0 & 1 \\end{pmatrix}$.

// // Reflection across the line $y = x$ swaps coordinates: matrix $\\begin{pmatrix} 0 & 1 \\\\ 1 & 0 \\end{pmatrix}$.

// // Reflection across an arbitrary line through the origin at angle $\\alpha$ has matrix

// // @academic[formula_callout:Reflection Across Line 2D
// // $$H_\\alpha = \\begin{pmatrix} \\cos 2\\alpha & \\sin 2\\alpha \\\\ \\sin 2\\alpha & -\\cos 2\\alpha \\end{pmatrix}$$
// // /linear-algebra/formulas#reflection_across_line_2d]@

// // @academic[formulas_link:Browse all linear algebra formulas
// // /linear-algebra/formulas]@

// // All reflection matrices share the same properties: the determinant is $-1$ (orientation-reversing, area-preserving), the matrix is [orthogonal](!/linear-algebra/matrix/types) (lengths and angles preserved), and the matrix is [involutory](!/linear-algebra/matrix/types) ($H^2 = I$) — reflecting twice returns every vector to its starting point. The [eigenvalues](!/linear-algebra/eigen) are $+1$ (vectors on the mirror line) and $-1$ (vectors perpendicular to it).`,
// //     before: ``,
// //     after: ``,
// //     link: ``,
// //   },
// //   obj6: {
// //     title: `Reflections in R³`,
// //     content: `Reflection across a coordinate plane negates the coordinate perpendicular to that plane. Reflection across the $xy$-plane: $\\text{diag}(1, 1, -1)$. Across the $xz$-plane: $\\text{diag}(1, -1, 1)$. Across the $yz$-plane: $\\text{diag}(-1, 1, 1)$.

// // Reflection across an arbitrary plane through the origin with unit normal $\\mathbf{n}$ is given by the Householder matrix:

// // @academic[formula_callout:Householder Reflection
// // $$H = I - 2\\,\\mathbf{n}\\mathbf{n}^T$$
// // /linear-algebra/formulas#householder_reflection]@

// // @academic[formulas_link:Browse all linear algebra formulas
// // /linear-algebra/formulas]@

// // This matrix subtracts twice the component of each vector in the direction of $\\mathbf{n}$, effectively mirroring across the plane perpendicular to $\\mathbf{n}$. Householder reflections are orthogonal, have determinant $-1$, and satisfy $H^2 = I$. They are the building blocks of the [QR decomposition](!/linear-algebra/decompositions/qr) and are widely used in numerical algorithms.`,
// //     before: ``,
// //     after: ``,
// //     link: ``,
// //   },
// //   obj7: {
// //     title: `Projections`,
// //     content: `Orthogonal [projection](!/linear-algebra/orthogonality/projections) onto a subspace collapses each vector onto its nearest point in the subspace, discarding the perpendicular component.

// // Projection onto the $x$-axis in $\\mathbb{R}^2$: $T(x, y) = (x, 0)$, with matrix $\\begin{pmatrix} 1 & 0 \\\\ 0 & 0 \\end{pmatrix}$.

// // Projection onto a line through the origin in direction $\\mathbf{u}$:

// // @academic[formula_callout:Projection onto Line
// // $$P = \\frac{\\mathbf{u}\\mathbf{u}^T}{\\mathbf{u}^T\\mathbf{u}}$$
// // /linear-algebra/formulas#projection_onto_line]@

// // @academic[formulas_link:Browse all linear algebra formulas
// // /linear-algebra/formulas]@

// // Projection onto a plane with unit normal $\\mathbf{n}$ in $\\mathbb{R}^3$:

// // @academic[formula_callout:Projection onto Plane
// // $$P = I - \\frac{\\mathbf{n}\\mathbf{n}^T}{\\mathbf{n}^T\\mathbf{n}}$$
// // /linear-algebra/formulas#projection_onto_plane]@

// // @academic[formulas_link:Browse all linear algebra formulas
// // /linear-algebra/formulas]@

// // All orthogonal projection matrices share the same algebraic signature: $P^2 = P$ ([idempotent](!/linear-algebra/matrix/types) — projecting twice is the same as projecting once), $P^T = P$ (symmetric), [eigenvalues](!/linear-algebra/eigen) are $0$ and $1$, and $\\text{rank}(P) = \\text{tr}(P)$. The determinant is $0$ unless the projection is onto the full space — projections always collapse at least one dimension.`,
// //     before: ``,
// //     after: ``,
// //     link: ``,
// //   },
// //   obj8: {
// //     title: `Shears`,
// //     content: `A shear displaces each point in proportion to its distance from a fixed line or plane. The two $2 \\times 2$ shear matrices are:

// // @academic[formula_callout:Shear Matrix
// // $$\\text{Shear}_x = \\begin{pmatrix} 1 & k \\\\ 0 & 1 \\end{pmatrix}, \\qquad \\text{Shear}_y = \\begin{pmatrix} 1 & 0 \\\\ k & 1 \\end{pmatrix}$$
// // /linear-algebra/formulas#shear_matrix]@

// // @academic[formulas_link:Browse all linear algebra formulas
// // /linear-algebra/formulas]@

// // In $\\mathbb{R}^2$, a horizontal shear shifts the $x$-coordinate by $k$ times the $y$-coordinate:

// // $$T(x, y) = (x + ky, \\; y), \\quad \\text{matrix } \\begin{pmatrix} 1 & k \\\\ 0 & 1 \\end{pmatrix}$$

// // A vertical shear shifts the $y$-coordinate by $k$ times the $x$-coordinate:

// // $$T(x, y) = (x, \\; kx + y), \\quad \\text{matrix } \\begin{pmatrix} 1 & 0 \\\\ k & 1 \\end{pmatrix}$$

// // Both are [triangular](!/linear-algebra/matrix/types) matrices with determinant $1$: shears are area-preserving and orientation-preserving. They are not orthogonal — angles are distorted. A square sheared horizontally becomes a parallelogram of the same area but with tilted sides.

// // In $\\mathbb{R}^3$, there are six possible shear directions (each coordinate shifted by a multiple of each other coordinate). Each is represented by an identity matrix with one off-diagonal entry replaced by $k$. Shears are fundamental building blocks — any invertible matrix with determinant $1$ can be written as a product of shears.`,
// //     before: ``,
// //     after: ``,
// //     link: ``,
// //   },
// //   obj9: {
// //     title: `Combining Transformations`,
// //     content: `Composing transformations corresponds to [multiplying](!/linear-algebra/matrix/operations) their matrices. A rotation followed by a scaling is $SA$ where $S$ is the scaling matrix and $A$ is the rotation matrix. The product is applied right-to-left: $A$ acts first, then $S$.

// // Order matters. Rotating then shearing produces a different result from shearing then rotating: $\\text{Shear} \\cdot \\text{Rotation} \\neq \\text{Rotation} \\cdot \\text{Shear}$ in general.

// // The [singular value decomposition](!/linear-algebra/decompositions/svd) reveals the hidden geometric structure of any matrix: $A = U\\Sigma V^T$, where $V^T$ is a rotation (or rotation-reflection), $\\Sigma$ is a coordinate-axis scaling, and $U$ is another rotation (or rotation-reflection). Every linear transformation is a rotation, followed by a scaling along the coordinate axes, followed by another rotation. The singular values in $\\Sigma$ measure the maximum stretching in each orthogonal direction.

// // This decomposition means no linear transformation is truly exotic — even the most complex-looking matrix is just three simple geometric operations composed together.`,
// //     before: ``,
// //     after: ``,
// //     link: ``,
// //   },
// //   obj10: {
// //     title: `Determinant as Geometric Signature`,
// //     content: `The [determinant](!/linear-algebra/determinants/geometry) classifies every linear transformation by its effect on size and orientation.

// // $|\\det(A)|$ is the factor by which the transformation scales areas (in $\\mathbb{R}^2$) or volumes (in $\\mathbb{R}^3$). A unit square maps to a parallelogram of area $|\\det(A)|$. A unit cube maps to a parallelepiped of volume $|\\det(A)|$.

// // $\\det(A) > 0$: the transformation preserves orientation. Counterclockwise stays counterclockwise in $\\mathbb{R}^2$; right-handed stays right-handed in $\\mathbb{R}^3$. Rotations and shears fall in this category.

// // $\\det(A) < 0$: the transformation reverses orientation. Counterclockwise becomes clockwise; right-handed becomes left-handed. Reflections are the canonical example.

// // $\\det(A) = 0$: the transformation collapses at least one dimension. The image is a proper subspace — a line or point in $\\mathbb{R}^2$, a plane, line, or point in $\\mathbb{R}^3$. Projections onto proper subspaces and singular matrices fall here.

// // $|\\det(A)| = 1$: the transformation preserves area or volume. Rotations ($\\det = +1$) and reflections ($\\det = -1$) are the area-preserving and volume-preserving transformations. Shears also have $\\det = 1$, preserving area despite distorting angles.`,
// //     before: ``,
// //     after: ``,
// //     link: ``,
// //   },
// //   obj11: {
// //     title: `Summary: Algebraic Signature of Each Family`,
// //     content: `Each family of geometric transformations has been treated in its own section, with its own matrix templates and its own algebraic identities. The table below sets all five side by side across the diagnostic signatures that distinguish them — orthogonality, determinant, eigenvalues, the characteristic algebraic identity, and what each family does to length and to area. It is the recognition card to keep nearby when a matrix is in hand and the question is which geometric family it belongs to.`,
// //     before: ``,
// //     after: ``,
// //     link: ``,
// //   },
// // }



// //  const introContent = {
// //   title: `Rotations, Reflections, Projections, and More`,
// //   content: `In R² and R³, linear transformations have concrete geometric meanings. Each has an explicit matrix encoding its action: rotations spin, reflections mirror, projections flatten, shears skew, and scalings stretch or compress. The determinant of the matrix classifies the transformation by how it affects area, volume, and orientation.`,
// // }

// // const faqQuestions = {
// //   obj1: {
// //     question: "What is the rotation matrix in R²?",
// //     answer: "The matrix for counterclockwise rotation by angle θ about the origin is [[cos θ, −sin θ], [sin θ, cos θ]]. It is orthogonal with determinant 1, preserving lengths, angles, and orientation. Rotations compose by adding angles: R_α · R_β = R_(α+β).",
// //     sectionId: "3"
// //   },
// //   obj2: {
// //     question: "What is a reflection matrix?",
// //     answer: "A reflection matrix mirrors vectors across a line (in R²) or plane (in R³). Reflection across a line at angle α has matrix [[cos 2α, sin 2α], [sin 2α, −cos 2α]]. All reflection matrices are orthogonal, have determinant −1, and satisfy H² = I — reflecting twice returns to the original.",
// //     sectionId: "5"
// //   },
// //   obj3: {
// //     question: "What is a shear transformation?",
// //     answer: "A shear displaces each point proportionally to its distance from a fixed line or plane. A horizontal shear in R² has matrix [[1, k], [0, 1]], shifting x-coordinates by k times the y-coordinate. Shears have determinant 1, so they preserve area despite distorting angles.",
// //     sectionId: "8"
// //   },
// //   obj4: {
// //     question: "How does the determinant classify geometric transformations?",
// //     answer: "The absolute value |det(A)| gives the area or volume scaling factor. Positive determinant means orientation is preserved, negative means reversed. Determinant ±1 means area/volume is preserved (rotations, reflections, shears). Determinant 0 means the transformation collapses at least one dimension.",
// //     sectionId: "10"
// //   },
// //   obj5: {
// //     question: "How do you combine geometric transformations?",
// //     answer: "Composing transformations corresponds to multiplying their matrices, applied right-to-left. Order matters: rotating then shearing differs from shearing then rotating. The SVD reveals that every linear transformation decomposes into a rotation, a coordinate-axis scaling, and another rotation.",
// //     sectionId: "9"
// //   }
// // }


// // const schemas = {
// //   learningResource: {
// //     "@context": "https://schema.org",
// //     "@type": "LearningResource",
// //     "name": "Geometric Transformations",
// //     "description": "Geometric transformations in linear algebra: rotation, reflection, projection, shear, and scaling matrices in R² and R³. Determinant as geometric signature and SVD decomposition.",
// //     "url": "https://www.learnmathclass.com/linear-algebra/transformations/geometric",
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
// //       "name": "Geometric Transformations"
// //     },
// //     "teaches": [
// //       "Reading a transformation from its matrix columns",
// //       "Scaling matrices: uniform and non-uniform",
// //       "Rotation matrices in R² and R³",
// //       "Reflection matrices and Householder reflections",
// //       "Projection matrices as geometric operations",
// //       "Shear transformations and their properties",
// //       "Composing transformations via matrix multiplication",
// //       "Determinant as area/volume scaling and orientation indicator"
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
// //         "name": "Transformations",
// //         "item": "https://www.learnmathclass.com/linear-algebra/transformations"
// //       },
// //       {
// //         "@type": "ListItem",
// //         "position": 4,
// //         "name": "Geometric Transformations",
// //         "item": "https://www.learnmathclass.com/linear-algebra/transformations/geometric"
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

// // return {
// //   props:{
// //     sectionsContent,
// //     introContent,
// //     obj4Table,
// //     obj5Table,
// //     obj10Table,
// //     summaryTable,
// //     faqQuestions,
// //     schemas,
// //     seoData: {
// //       title: "Geometric Transformations: Matrices in R² & R³ | Learn Math Class",
// //       description: "Geometric transformations in linear algebra: rotation, reflection, projection, shear, and scaling matrices in R² and R³. Determinant as geometric signature and SVD decomposition.",
// //       keywords: keyWords.join(", "),
// //       url: "/linear-algebra/transformations/geometric",
// //       name: "Geometric Transformations"
// //     },
// //   }
// // }   

// // }


// // export default function GeometricTransformationsPage({seoData, sectionsContent, introContent, obj4Table, obj5Table, obj10Table, summaryTable, faqQuestions, schemas}) {

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
// //           <div key={'obj5-table'} style={tableWrapStyle}
// //                dangerouslySetInnerHTML={{ __html: obj5Table }} />,
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
// //           <div key={'obj10-table'} style={tableWrapStyle}
// //                dangerouslySetInnerHTML={{ __html: obj10Table }} />,
// //         ]
// //     },
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
// //    <h1 className='title' style={{marginTop:'0px',marginBottom:'10px'}}>Geometric Transformations</h1>
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


// // tables-optimized: v4 | 2026-05-22 | 4 tables (obj4 aggregation, obj5 aggregation, obj10 comparison, obj11 summary capstone)

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
//   "geometric transformations linear algebra",
//   "rotation matrix",
//   "reflection matrix",
//   "projection matrix geometric",
//   "shear transformation",
//   "scaling matrix",
//   "rotation matrix R2 R3",
//   "Householder reflection",
//   "determinant area volume",
//   "orthogonal transformation",
//   "transformation matrix columns",
//   "combining linear transformations",
//   "rotation angle matrix formula",
//   "geometric interpretation determinant"
// ]

// const linkStyle = 'color: inherit; text-decoration: underline;'

// // ---------- TABLES ----------

// // obj4 — aggregation: rotations about each coordinate axis in R³
// const obj4Table = `
// <table class="styled-table" style="border-collapse: collapse; width: 75%;margin:auto; background: white; box-shadow: 0 2px 10px rgba(0,0,0,0.1); border-radius: 8px; overflow: hidden; font-family: Arial, sans-serif;">
//   <thead>
//     <tr>
//       <th style="${tableHeaders.aggregation}">Axis of rotation</th>
//       <th style="${tableHeaders.aggregation}">Matrix</th>
//       <th style="${tableHeaders.aggregation}">Fixed direction</th>
//       <th style="${tableHeaders.aggregation}">Plane that rotates</th>
//     </tr>
//   </thead>
//   <tbody>
//     <tr style="background: #f8f9fa;">
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">x-axis: Rₓ(θ)</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">[1 &nbsp;0 &nbsp;0; 0 &nbsp;cosθ &nbsp;−sinθ; 0 &nbsp;sinθ &nbsp;cosθ]</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">x-coordinate unchanged</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">yz-plane</td>
//     </tr>
//     <tr>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">y-axis: R_y(θ)</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">[cosθ &nbsp;0 &nbsp;sinθ; 0 &nbsp;1 &nbsp;0; −sinθ &nbsp;0 &nbsp;cosθ]</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">y-coordinate unchanged</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">xz-plane</td>
//     </tr>
//     <tr style="background: #f8f9fa;">
//       <td style="padding: 12px 15px; font-weight: bold; color: #06357a;">z-axis: R_z(θ)</td>
//       <td style="padding: 12px 15px; color: #34495e;">[cosθ &nbsp;−sinθ &nbsp;0; sinθ &nbsp;cosθ &nbsp;0; 0 &nbsp;0 &nbsp;1]</td>
//       <td style="padding: 12px 15px; color: #34495e;">z-coordinate unchanged</td>
//       <td style="padding: 12px 15px; color: #34495e;">xy-plane</td>
//     </tr>
//   </tbody>
// </table>
// `

// // obj5 — aggregation: reflections in R² across common mirror lines
// const obj5Table = `
// <table class="styled-table" style="border-collapse: collapse; width: 75%;margin:auto; background: white; box-shadow: 0 2px 10px rgba(0,0,0,0.1); border-radius: 8px; overflow: hidden; font-family: Arial, sans-serif;">
//   <thead>
//     <tr>
//       <th style="${tableHeaders.aggregation}">Mirror line</th>
//       <th style="${tableHeaders.aggregation}">Matrix</th>
//       <th style="${tableHeaders.aggregation}">Coordinate effect</th>
//     </tr>
//   </thead>
//   <tbody>
//     <tr style="background: #f8f9fa;">
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">x-axis</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">[1 &nbsp;0; 0 &nbsp;−1]</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">(x, y) ↦ (x, −y)</td>
//     </tr>
//     <tr>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">y-axis</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">[−1 &nbsp;0; 0 &nbsp;1]</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">(x, y) ↦ (−x, y)</td>
//     </tr>
//     <tr style="background: #f8f9fa;">
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">line y = x</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">[0 &nbsp;1; 1 &nbsp;0]</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">(x, y) ↦ (y, x) — swaps coordinates</td>
//     </tr>
//     <tr>
//       <td style="padding: 12px 15px; font-weight: bold; color: #06357a;">line through origin at angle α</td>
//       <td style="padding: 12px 15px; color: #34495e;">[cos 2α &nbsp;sin 2α; sin 2α &nbsp;−cos 2α]</td>
//       <td style="padding: 12px 15px; color: #34495e;">general formula; specializes to the rows above for α = 0°, 90°, 45°</td>
//     </tr>
//   </tbody>
// </table>
// `

// // obj10 — comparison/decision: classifying transformations by det(A)
// const obj10Table = `
// <table class="styled-table" style="border-collapse: collapse; width: 75%;margin:auto; background: white; box-shadow: 0 2px 10px rgba(0,0,0,0.1); border-radius: 8px; overflow: hidden; font-family: Arial, sans-serif;">
//   <thead>
//     <tr>
//       <th style="${tableHeaders.comparison}">det(A)</th>
//       <th style="${tableHeaders.comparison}">Effect on area / volume</th>
//       <th style="${tableHeaders.comparison}">Effect on orientation</th>
//       <th style="${tableHeaders.comparison}">Typical transformations</th>
//     </tr>
//   </thead>
//   <tbody>
//     <tr style="background: #f8f9fa;">
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">|det(A)| &gt; 1</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">expands by factor |det(A)|</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">preserves if det &gt; 0, reverses if det &lt; 0</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">uniform scaling with |c| &gt; 1</td>
//     </tr>
//     <tr>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">0 &lt; |det(A)| &lt; 1</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">shrinks by factor |det(A)|</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">preserves if det &gt; 0, reverses if det &lt; 0</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">uniform scaling with 0 &lt; |c| &lt; 1</td>
//     </tr>
//     <tr style="background: #f8f9fa;">
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">det(A) = +1</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">preserves area / volume</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">preserves orientation</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">rotation, shear</td>
//     </tr>
//     <tr>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">det(A) = −1</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">preserves area / volume</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">reverses orientation (handedness flip)</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">reflection, improper rotation</td>
//     </tr>
//     <tr style="background: #f8f9fa;">
//       <td style="padding: 12px 15px; font-weight: bold; color: #06357a;">det(A) = 0</td>
//       <td style="padding: 12px 15px; color: #34495e;">collapses at least one dimension (image is a proper subspace)</td>
//       <td style="padding: 12px 15px; color: #34495e;">undefined / degenerate</td>
//       <td style="padding: 12px 15px; color: #34495e;">projection onto a proper subspace, any singular matrix</td>
//     </tr>
//   </tbody>
// </table>
// `

// // obj11 — summary capstone: algebraic signature of each transformation family
// // obj11 — each family identified by its algebra rather than its picture
// const transformationSignatures = {
//   kicker: 'Transformations \u00B7 signatures',
//   title: 'Recognising a family from its matrix',
//   tallyLabel: 'families',
//   intro: 'Each family has an algebraic fingerprint \u2014 an identity its matrix satisfies and a spectrum it must have. Given an unfamiliar matrix, these are what identify it without drawing anything.',
//   footnote: 'The determinant sorts them at a glance: rotations and shears preserve area, reflections flip it, projections destroy it, and scaling multiplies it by $c^n$. Two families share $\\det = 1$ \u2014 rotation and shear \u2014 and the eigenvalues separate them: a rotation has a complex pair, a shear has a repeated real one and too few eigenvectors to diagonalise.',
//   groups: [
//     {
//       heading: 'Rigid \u2014 lengths preserved',
//       identities: [
//         {
//           name: 'Rotation',
//           anchor: '#3',
//           formula: '$R^{\\mathsf{T}}R = I, \\quad \\det R = 1$',
//           condition: 'eigenvalues $e^{\\pm i\\theta}$ \u2014 complex pair',
//           note: 'Orthogonal with positive determinant. Over $\\mathbb{R}$ a plane rotation has no eigenvectors at all, since no direction survives unturned \u2014 which is exactly what the complex pair records. In $\\mathbb{R}^3$ there is one real eigenvalue $1$, and its eigenvector is the axis.',
//         },
//         {
//           name: 'Reflection',
//           anchor: '#5',
//           formula: '$H^2 = I, \\quad H^{\\mathsf{T}} = H, \\quad \\det H = -1$',
//           condition: 'eigenvalues $+1$ on the mirror, $-1$ across it',
//           note: 'Involutory and symmetric. Applying it twice returns the original, so $H$ is its own inverse. The eigenvalue $-1$ is what the negative determinant reports \u2014 orientation reverses, and no rotation can do that.',
//         },
//       ],
//     },
//     {
//       heading: 'Non-rigid \u2014 lengths change',
//       identities: [
//         {
//           name: 'Uniform scaling',
//           anchor: '#2',
//           formula: '$A = cI, \\quad \\det A = c^n$',
//           condition: 'eigenvalue $c$, repeated $n$ times',
//           note: 'The only family commuting with everything, since $cI$ passes through any product. Every direction is an eigenvector, so the matrix is diagonal in every basis \u2014 the extreme opposite of a shear.',
//         },
//         {
//           name: 'Shear',
//           anchor: '#8',
//           formula: 'triangular, $1$s on the diagonal, $\\det = 1$',
//           condition: 'eigenvalue $1$ repeated \u2014 **defective**',
//           strict: true,
//           note: 'Area is preserved yet nothing is rigid. The repeated eigenvalue has only one eigenvector rather than two, so a shear cannot be [diagonalised](!/linear-algebra/eigen/diagonalization) \u2014 the standard example of algebraic multiplicity exceeding geometric.',
//         },
//       ],
//     },
//     {
//       heading: 'Not invertible',
//       identities: [
//         {
//           name: 'Orthogonal projection',
//           anchor: '#7',
//           formula: '$P^2 = P, \\quad P^{\\mathsf{T}} = P, \\quad \\det P = 0$',
//           condition: 'eigenvalues $0$ and $1$ only',
//           key: true,
//           note: 'Idempotent and symmetric. The zero determinant is not incidental \u2014 a projection collapses the perpendicular directions and nothing recovers them, so it is the only family here with no inverse. See [projection properties](!/linear-algebra/orthogonality/projections).',
//         },
//       ],
//     },
//   ],
// }

// // ---------- SECTIONS ----------

// // const sectionsContent = {
// //   obj1: {
// //     title: `How to Read a Transformation Matrix`,
// //     content: `The geometric effect of a [matrix](!/linear-algebra/matrix) $A$ is revealed by two pieces of information: what it does to the standard [basis](!/linear-algebra/vector-spaces) vectors (the columns) and what its [determinant](!/linear-algebra/determinants) is.

// // Column $1$ is the image of $\\mathbf{e}_1 = (1, 0)$ in $\\mathbb{R}^2$ or $(1, 0, 0)$ in $\\mathbb{R}^3$. Column $2$ is the image of $\\mathbf{e}_2$. The matrix maps the standard grid to the parallelogram (or parallelepiped) spanned by these column vectors.

// // The absolute value $|\\det(A)|$ measures how the transformation scales areas (in $\\mathbb{R}^2$) or volumes (in $\\mathbb{R}^3$). The sign of $\\det(A)$ indicates orientation: positive means the transformation preserves handedness, negative means it reverses it. An [orthogonal](!/linear-algebra/matrix/types) matrix ($\\det = \\pm 1$) preserves all lengths and angles — it is a rigid motion.`,
// //     before: ``,
// //     after: ``,
// //     link: ``,
// //   },
// //   obj2: {
// //     title: `Scaling`,
// //     content: `Uniform scaling multiplies every coordinate by the same factor: $T(\\mathbf{x}) = c\\mathbf{x}$, with matrix $cI$. When $c > 1$ the transformation enlarges, when $0 < c < 1$ it shrinks, and when $c < 0$ it reflects through the origin and scales.

// // Non-uniform scaling stretches each axis independently. In $\\mathbb{R}^2$, $T(x, y) = (c_1 x, c_2 y)$ has matrix $\\text{diag}(c_1, c_2)$. The horizontal axis is scaled by $c_1$ and the vertical by $c_2$. A unit square maps to a rectangle with side lengths $|c_1|$ and $|c_2|$.

// // The [determinant](!/linear-algebra/determinants/geometry) is $c^n$ for uniform scaling and $c_1 c_2$ (or $c_1 c_2 c_3$) for non-uniform. When any scaling factor is zero, the transformation collapses that axis entirely and the determinant is zero.

// // In $\\mathbb{R}^3$, $\\text{diag}(c_1, c_2, c_3)$ scales each coordinate axis independently. The unit cube maps to a rectangular box with side lengths $|c_1|$, $|c_2|$, $|c_3|$ and volume $|c_1 c_2 c_3|$.`,
// //     before: ``,
// //     after: ``,
// //     link: ``,
// //   },
// //   obj3: {
// //     title: `Rotations in R²`,
// //     content: `Rotation by angle $\\theta$ counterclockwise about the origin has matrix

// // $$R_\\theta = \\begin{pmatrix} \\cos\\theta & -\\sin\\theta \\\\ \\sin\\theta & \\cos\\theta \\end{pmatrix}$$

// // The first column $R_\\theta \\mathbf{e}_1 = (\\cos\\theta, \\sin\\theta)$ is the image of $(1, 0)$ — the point on the unit circle at angle $\\theta$. The second column $R_\\theta \\mathbf{e}_2 = (-\\sin\\theta, \\cos\\theta)$ is the image of $(0, 1)$ — the point at angle $\\theta + 90°$.

// // The determinant is $\\cos^2\\theta + \\sin^2\\theta = 1$ for every $\\theta$: rotations preserve areas and orientation. The matrix is [orthogonal](!/linear-algebra/matrix/types): $R_\\theta^T R_\\theta = I$, so lengths and angles are preserved. The inverse is $R_\\theta^{-1} = R_{-\\theta} = R_\\theta^T$ — rotating backward by the same angle.

// // Rotations compose by adding angles: $R_\\alpha R_\\beta = R_{\\alpha + \\beta}$. This follows from the trigonometric addition formulas and corresponds to the fact that rotating by $\\beta$ then by $\\alpha$ is the same as rotating by $\\alpha + \\beta$.

// // Common cases: $R_{90°} = \\begin{pmatrix} 0 & -1 \\\\ 1 & 0 \\end{pmatrix}$, $R_{180°} = \\begin{pmatrix} -1 & 0 \\\\ 0 & -1 \\end{pmatrix}$, $R_{45°} = \\frac{1}{\\sqrt{2}}\\begin{pmatrix} 1 & -1 \\\\ 1 & 1 \\end{pmatrix}$.`,
// //     before: ``,
// //     after: ``,
// //     link: ``,
// //   },
// //   obj4: {
// //     title: `Rotations in R³`,
// //     content: `In three dimensions, a rotation is specified by an axis and an angle. Rotation by $\\theta$ about the $z$-axis leaves the $z$-coordinate unchanged and rotates the $xy$-plane:

// // $$R_z(\\theta) = \\begin{pmatrix} \\cos\\theta & -\\sin\\theta & 0 \\\\ \\sin\\theta & \\cos\\theta & 0 \\\\ 0 & 0 & 1 \\end{pmatrix}$$

// // Rotations about the $x$-axis and $y$-axis have the same $2 \\times 2$ rotation block embedded in different positions:

// // $$R_x(\\theta) = \\begin{pmatrix} 1 & 0 & 0 \\\\ 0 & \\cos\\theta & -\\sin\\theta \\\\ 0 & \\sin\\theta & \\cos\\theta \\end{pmatrix}, \\quad R_y(\\theta) = \\begin{pmatrix} \\cos\\theta & 0 & \\sin\\theta \\\\ 0 & 1 & 0 \\\\ -\\sin\\theta & 0 & \\cos\\theta \\end{pmatrix}$$

// // Every $3 \\times 3$ rotation matrix is orthogonal with determinant $+1$. The axis of rotation is the [eigenvector](!/linear-algebra/eigen) with eigenvalue $1$ — the direction that remains fixed. Any rotation in $\\mathbb{R}^3$ can be decomposed into rotations about the coordinate axes (Euler angles), though the decomposition is not unique.`,
// //     before: ``,
// //     after: ``,
// //     link: ``,
// //   },
// //   obj5: {
// //     title: `Reflections in R²`,
// //     content: `Reflection across the $x$-axis flips the $y$-coordinate: $T(x, y) = (x, -y)$, with matrix $\\begin{pmatrix} 1 & 0 \\\\ 0 & -1 \\end{pmatrix}$.

// // Reflection across the $y$-axis flips the $x$-coordinate: matrix $\\begin{pmatrix} -1 & 0 \\\\ 0 & 1 \\end{pmatrix}$.

// // Reflection across the line $y = x$ swaps coordinates: matrix $\\begin{pmatrix} 0 & 1 \\\\ 1 & 0 \\end{pmatrix}$.

// // Reflection across an arbitrary line through the origin at angle $\\alpha$ has matrix

// // $$H_\\alpha = \\begin{pmatrix} \\cos 2\\alpha & \\sin 2\\alpha \\\\ \\sin 2\\alpha & -\\cos 2\\alpha \\end{pmatrix}$$

// // All reflection matrices share the same properties: the determinant is $-1$ (orientation-reversing, area-preserving), the matrix is [orthogonal](!/linear-algebra/matrix/types) (lengths and angles preserved), and the matrix is [involutory](!/linear-algebra/matrix/types) ($H^2 = I$) — reflecting twice returns every vector to its starting point. The [eigenvalues](!/linear-algebra/eigen) are $+1$ (vectors on the mirror line) and $-1$ (vectors perpendicular to it).`,
// //     before: ``,
// //     after: ``,
// //     link: ``,
// //   },
// //   obj6: {
// //     title: `Reflections in R³`,
// //     content: `Reflection across a coordinate plane negates the coordinate perpendicular to that plane. Reflection across the $xy$-plane: $\\text{diag}(1, 1, -1)$. Across the $xz$-plane: $\\text{diag}(1, -1, 1)$. Across the $yz$-plane: $\\text{diag}(-1, 1, 1)$.

// // Reflection across an arbitrary plane through the origin with unit normal $\\mathbf{n}$ is given by the Householder matrix:

// // $$H = I - 2\\mathbf{n}\\mathbf{n}^T$$

// // This matrix subtracts twice the component of each vector in the direction of $\\mathbf{n}$, effectively mirroring across the plane perpendicular to $\\mathbf{n}$. Householder reflections are orthogonal, have determinant $-1$, and satisfy $H^2 = I$. They are the building blocks of the [QR decomposition](!/linear-algebra/decompositions/qr) and are widely used in numerical algorithms.`,
// //     before: ``,
// //     after: ``,
// //     link: ``,
// //   },
// //   obj7: {
// //     title: `Projections`,
// //     content: `Orthogonal [projection](!/linear-algebra/orthogonality/projections) onto a subspace collapses each vector onto its nearest point in the subspace, discarding the perpendicular component.

// // Projection onto the $x$-axis in $\\mathbb{R}^2$: $T(x, y) = (x, 0)$, with matrix $\\begin{pmatrix} 1 & 0 \\\\ 0 & 0 \\end{pmatrix}$.

// // Projection onto a line through the origin in direction $\\mathbf{u}$:

// // $$P = \\frac{\\mathbf{u}\\mathbf{u}^T}{\\mathbf{u}^T\\mathbf{u}}$$

// // Projection onto a plane with unit normal $\\mathbf{n}$ in $\\mathbb{R}^3$:

// // $$P = I - \\frac{\\mathbf{n}\\mathbf{n}^T}{\\mathbf{n}^T\\mathbf{n}}$$

// // All orthogonal projection matrices share the same algebraic signature: $P^2 = P$ ([idempotent](!/linear-algebra/matrix/types) — projecting twice is the same as projecting once), $P^T = P$ (symmetric), [eigenvalues](!/linear-algebra/eigen) are $0$ and $1$, and $\\text{rank}(P) = \\text{tr}(P)$. The determinant is $0$ unless the projection is onto the full space — projections always collapse at least one dimension.`,
// //     before: ``,
// //     after: ``,
// //     link: ``,
// //   },
// //   obj8: {
// //     title: `Shears`,
// //     content: `A shear displaces each point in proportion to its distance from a fixed line or plane. In $\\mathbb{R}^2$, a horizontal shear shifts the $x$-coordinate by $k$ times the $y$-coordinate:

// // $$T(x, y) = (x + ky, \\; y), \\quad \\text{matrix } \\begin{pmatrix} 1 & k \\\\ 0 & 1 \\end{pmatrix}$$

// // A vertical shear shifts the $y$-coordinate by $k$ times the $x$-coordinate:

// // $$T(x, y) = (x, \\; kx + y), \\quad \\text{matrix } \\begin{pmatrix} 1 & 0 \\\\ k & 1 \\end{pmatrix}$$

// // Both are [triangular](!/linear-algebra/matrix/types) matrices with determinant $1$: shears are area-preserving and orientation-preserving. They are not orthogonal — angles are distorted. A square sheared horizontally becomes a parallelogram of the same area but with tilted sides.

// // In $\\mathbb{R}^3$, there are six possible shear directions (each coordinate shifted by a multiple of each other coordinate). Each is represented by an identity matrix with one off-diagonal entry replaced by $k$. Shears are fundamental building blocks — any invertible matrix with determinant $1$ can be written as a product of shears.`,
// //     before: ``,
// //     after: ``,
// //     link: ``,
// //   },
// //   obj9: {
// //     title: `Combining Transformations`,
// //     content: `Composing transformations corresponds to [multiplying](!/linear-algebra/matrix/operations) their matrices. A rotation followed by a scaling is $SA$ where $S$ is the scaling matrix and $A$ is the rotation matrix. The product is applied right-to-left: $A$ acts first, then $S$.

// // Order matters. Rotating then shearing produces a different result from shearing then rotating: $\\text{Shear} \\cdot \\text{Rotation} \\neq \\text{Rotation} \\cdot \\text{Shear}$ in general.

// // The [singular value decomposition](!/linear-algebra/decompositions/svd) reveals the hidden geometric structure of any matrix: $A = U\\Sigma V^T$, where $V^T$ is a rotation (or rotation-reflection), $\\Sigma$ is a coordinate-axis scaling, and $U$ is another rotation (or rotation-reflection). Every linear transformation is a rotation, followed by a scaling along the coordinate axes, followed by another rotation. The singular values in $\\Sigma$ measure the maximum stretching in each orthogonal direction.

// // This decomposition means no linear transformation is truly exotic — even the most complex-looking matrix is just three simple geometric operations composed together.`,
// //     before: ``,
// //     after: ``,
// //     link: ``,
// //   },
// //   obj10: {
// //     title: `Determinant as Geometric Signature`,
// //     content: `The [determinant](!/linear-algebra/determinants/geometry) classifies every linear transformation by its effect on size and orientation.

// // $|\\det(A)|$ is the factor by which the transformation scales areas (in $\\mathbb{R}^2$) or volumes (in $\\mathbb{R}^3$). A unit square maps to a parallelogram of area $|\\det(A)|$. A unit cube maps to a parallelepiped of volume $|\\det(A)|$.

// // $\\det(A) > 0$: the transformation preserves orientation. Counterclockwise stays counterclockwise in $\\mathbb{R}^2$; right-handed stays right-handed in $\\mathbb{R}^3$. Rotations and shears fall in this category.

// // $\\det(A) < 0$: the transformation reverses orientation. Counterclockwise becomes clockwise; right-handed becomes left-handed. Reflections are the canonical example.

// // $\\det(A) = 0$: the transformation collapses at least one dimension. The image is a proper subspace — a line or point in $\\mathbb{R}^2$, a plane, line, or point in $\\mathbb{R}^3$. Projections onto proper subspaces and singular matrices fall here.

// // $|\\det(A)| = 1$: the transformation preserves area or volume. Rotations ($\\det = +1$) and reflections ($\\det = -1$) are the area-preserving and volume-preserving transformations. Shears also have $\\det = 1$, preserving area despite distorting angles.`,
// //     before: ``,
// //     after: ``,
// //     link: ``,
// //   },
// //   obj11: {
// //     title: `Summary: Algebraic Signature of Each Family`,
// //     content: `Each family of geometric transformations has been treated in its own section, with its own matrix templates and its own algebraic identities. The table below sets all five side by side across the diagnostic signatures that distinguish them — orthogonality, determinant, eigenvalues, the characteristic algebraic identity, and what each family does to length and to area. It is the recognition card to keep nearby when a matrix is in hand and the question is which geometric family it belongs to.`,
// //     before: ``,
// //     after: ``,
// //     link: ``,
// //   },
// // }


// // tables-optimized: v4 | 2026-05-22 | 4 tables (obj4 aggregation, obj5 aggregation, obj10 comparison, obj11 summary capstone)

// // ---------- SECTIONS ----------

// const sectionsContent = {
//   obj1: {
//     title: `How to Read a Transformation Matrix`,
//     content: `The geometric effect of a [matrix](!/linear-algebra/matrix) $A$ is revealed by two pieces of information: what it does to the standard [basis](!/linear-algebra/vector-spaces) vectors (the columns) and what its [determinant](!/linear-algebra/determinants) is.

// Column $1$ is the image of $\\mathbf{e}_1 = (1, 0)$ in $\\mathbb{R}^2$ or $(1, 0, 0)$ in $\\mathbb{R}^3$. Column $2$ is the image of $\\mathbf{e}_2$. The matrix maps the standard grid to the parallelogram (or parallelepiped) spanned by these column vectors.

// The absolute value $|\\det(A)|$ measures how the transformation scales areas (in $\\mathbb{R}^2$) or volumes (in $\\mathbb{R}^3$). The sign of $\\det(A)$ indicates orientation: positive means the transformation preserves handedness, negative means it reverses it. An [orthogonal](!/linear-algebra/matrix/types) matrix ($\\det = \\pm 1$) preserves all lengths and angles — it is a rigid motion.`,
//     before: ``,
//     after: ``,
//     link: ``,
//   },
//   obj2: {
//     title: `Scaling`,
//     content: `Uniform scaling multiplies every coordinate by the same factor: $T(\\mathbf{x}) = c\\mathbf{x}$, with matrix $cI$. When $c > 1$ the transformation enlarges, when $0 < c < 1$ it shrinks, and when $c < 0$ it reflects through the origin and scales.

// Non-uniform scaling stretches each axis independently. In $\\mathbb{R}^2$, $T(x, y) = (c_1 x, c_2 y)$ has matrix $\\text{diag}(c_1, c_2)$. The horizontal axis is scaled by $c_1$ and the vertical by $c_2$. A unit square maps to a rectangle with side lengths $|c_1|$ and $|c_2|$.

// The [determinant](!/linear-algebra/determinants/geometry) is $c^n$ for uniform scaling and $c_1 c_2$ (or $c_1 c_2 c_3$) for non-uniform. When any scaling factor is zero, the transformation collapses that axis entirely and the determinant is zero.

// In $\\mathbb{R}^3$, $\\text{diag}(c_1, c_2, c_3)$ scales each coordinate axis independently. The unit cube maps to a rectangular box with side lengths $|c_1|$, $|c_2|$, $|c_3|$ and volume $|c_1 c_2 c_3|$.`,
//     before: ``,
//     after: ``,
//     link: ``,
//   },
//   obj3: {
//     title: `Rotations in R²`,
//     content: `Rotation by angle $\\theta$ counterclockwise about the origin has matrix

// @academic[formula_callout:Rotation Matrix 2D
// $$R_\\theta = \\begin{pmatrix} \\cos\\theta & -\\sin\\theta \\\\ \\sin\\theta & \\cos\\theta \\end{pmatrix}$$
// /linear-algebra/formulas#rotation_matrix_2d]@

// @academic[formulas_link:Browse all linear algebra formulas
// /linear-algebra/formulas]@

// The first column $R_\\theta \\mathbf{e}_1 = (\\cos\\theta, \\sin\\theta)$ is the image of $(1, 0)$ — the point on the unit circle at angle $\\theta$. The second column $R_\\theta \\mathbf{e}_2 = (-\\sin\\theta, \\cos\\theta)$ is the image of $(0, 1)$ — the point at angle $\\theta + 90°$.

// The determinant is $\\cos^2\\theta + \\sin^2\\theta = 1$ for every $\\theta$: rotations preserve areas and orientation. The matrix is [orthogonal](!/linear-algebra/matrix/types): $R_\\theta^T R_\\theta = I$, so lengths and angles are preserved. The inverse is $R_\\theta^{-1} = R_{-\\theta} = R_\\theta^T$ — rotating backward by the same angle.

// Rotations compose by adding angles: $R_\\alpha R_\\beta = R_{\\alpha + \\beta}$. This follows from the trigonometric addition formulas and corresponds to the fact that rotating by $\\beta$ then by $\\alpha$ is the same as rotating by $\\alpha + \\beta$.

// Common cases: $R_{90°} = \\begin{pmatrix} 0 & -1 \\\\ 1 & 0 \\end{pmatrix}$, $R_{180°} = \\begin{pmatrix} -1 & 0 \\\\ 0 & -1 \\end{pmatrix}$, $R_{45°} = \\frac{1}{\\sqrt{2}}\\begin{pmatrix} 1 & -1 \\\\ 1 & 1 \\end{pmatrix}$.`,
//     before: ``,
//     after: ``,
//     link: ``,
//   },
//   obj4: {
//     title: `Rotations in R³`,
//     content: `In three dimensions, a rotation is specified by an axis and an angle. The three coordinate-axis rotation matrices are:

// @academic[formula_callout:Rotation Matrices 3D
// $$R_x(\\theta) = \\begin{pmatrix} 1 & 0 & 0 \\\\ 0 & \\cos\\theta & -\\sin\\theta \\\\ 0 & \\sin\\theta & \\cos\\theta \\end{pmatrix}, \\;\\; R_y(\\theta) = \\begin{pmatrix} \\cos\\theta & 0 & \\sin\\theta \\\\ 0 & 1 & 0 \\\\ -\\sin\\theta & 0 & \\cos\\theta \\end{pmatrix}, \\;\\; R_z(\\theta) = \\begin{pmatrix} \\cos\\theta & -\\sin\\theta & 0 \\\\ \\sin\\theta & \\cos\\theta & 0 \\\\ 0 & 0 & 1 \\end{pmatrix}$$
// /linear-algebra/formulas#rotation_matrices_3d]@

// @academic[formulas_link:Browse all linear algebra formulas
// /linear-algebra/formulas]@

// Rotation by $\\theta$ about the $z$-axis leaves the $z$-coordinate unchanged and rotates the $xy$-plane:

// $$R_z(\\theta) = \\begin{pmatrix} \\cos\\theta & -\\sin\\theta & 0 \\\\ \\sin\\theta & \\cos\\theta & 0 \\\\ 0 & 0 & 1 \\end{pmatrix}$$

// Rotations about the $x$-axis and $y$-axis have the same $2 \\times 2$ rotation block embedded in different positions:

// $$R_x(\\theta) = \\begin{pmatrix} 1 & 0 & 0 \\\\ 0 & \\cos\\theta & -\\sin\\theta \\\\ 0 & \\sin\\theta & \\cos\\theta \\end{pmatrix}, \\quad R_y(\\theta) = \\begin{pmatrix} \\cos\\theta & 0 & \\sin\\theta \\\\ 0 & 1 & 0 \\\\ -\\sin\\theta & 0 & \\cos\\theta \\end{pmatrix}$$

// Every $3 \\times 3$ rotation matrix is orthogonal with determinant $+1$. The axis of rotation is the [eigenvector](!/linear-algebra/eigen) with eigenvalue $1$ — the direction that remains fixed. Any rotation in $\\mathbb{R}^3$ can be decomposed into rotations about the coordinate axes (Euler angles), though the decomposition is not unique.`,
//     before: ``,
//     after: ``,
//     link: ``,
//   },
//   obj5: {
//     title: `Reflections in R²`,
//     content: `Reflection across the $x$-axis flips the $y$-coordinate: $T(x, y) = (x, -y)$, with matrix $\\begin{pmatrix} 1 & 0 \\\\ 0 & -1 \\end{pmatrix}$.

// Reflection across the $y$-axis flips the $x$-coordinate: matrix $\\begin{pmatrix} -1 & 0 \\\\ 0 & 1 \\end{pmatrix}$.

// Reflection across the line $y = x$ swaps coordinates: matrix $\\begin{pmatrix} 0 & 1 \\\\ 1 & 0 \\end{pmatrix}$.

// Reflection across an arbitrary line through the origin at angle $\\alpha$ has matrix

// @academic[formula_callout:Reflection Across Line 2D
// $$H_\\alpha = \\begin{pmatrix} \\cos 2\\alpha & \\sin 2\\alpha \\\\ \\sin 2\\alpha & -\\cos 2\\alpha \\end{pmatrix}$$
// /linear-algebra/formulas#reflection_across_line_2d]@

// @academic[formulas_link:Browse all linear algebra formulas
// /linear-algebra/formulas]@

// All reflection matrices share the same properties: the determinant is $-1$ (orientation-reversing, area-preserving), the matrix is [orthogonal](!/linear-algebra/matrix/types) (lengths and angles preserved), and the matrix is [involutory](!/linear-algebra/matrix/types) ($H^2 = I$) — reflecting twice returns every vector to its starting point. The [eigenvalues](!/linear-algebra/eigen) are $+1$ (vectors on the mirror line) and $-1$ (vectors perpendicular to it).`,
//     before: ``,
//     after: ``,
//     link: ``,
//   },
//   obj6: {
//     title: `Reflections in R³`,
//     content: `Reflection across a coordinate plane negates the coordinate perpendicular to that plane. Reflection across the $xy$-plane: $\\text{diag}(1, 1, -1)$. Across the $xz$-plane: $\\text{diag}(1, -1, 1)$. Across the $yz$-plane: $\\text{diag}(-1, 1, 1)$.

// Reflection across an arbitrary plane through the origin with unit normal $\\mathbf{n}$ is given by the Householder matrix:

// @academic[formula_callout:Householder Reflection
// $$H = I - 2\\,\\mathbf{n}\\mathbf{n}^T$$
// /linear-algebra/formulas#householder_reflection]@

// @academic[formulas_link:Browse all linear algebra formulas
// /linear-algebra/formulas]@

// This matrix subtracts twice the component of each vector in the direction of $\\mathbf{n}$, effectively mirroring across the plane perpendicular to $\\mathbf{n}$. Householder reflections are orthogonal, have determinant $-1$, and satisfy $H^2 = I$. They are the building blocks of the [QR decomposition](!/linear-algebra/decompositions/qr) and are widely used in numerical algorithms.`,
//     before: ``,
//     after: ``,
//     link: ``,
//   },
//   obj7: {
//     title: `Projections`,
//     content: `Orthogonal [projection](!/linear-algebra/orthogonality/projections) onto a subspace collapses each vector onto its nearest point in the subspace, discarding the perpendicular component.

// Projection onto the $x$-axis in $\\mathbb{R}^2$: $T(x, y) = (x, 0)$, with matrix $\\begin{pmatrix} 1 & 0 \\\\ 0 & 0 \\end{pmatrix}$.

// Projection onto a line through the origin in direction $\\mathbf{u}$:

// @academic[formula_callout:Projection onto Line
// $$P = \\frac{\\mathbf{u}\\mathbf{u}^T}{\\mathbf{u}^T\\mathbf{u}}$$
// /linear-algebra/formulas#projection_onto_line]@

// @academic[formulas_link:Browse all linear algebra formulas
// /linear-algebra/formulas]@

// Projection onto a plane with unit normal $\\mathbf{n}$ in $\\mathbb{R}^3$:

// @academic[formula_callout:Projection onto Plane
// $$P = I - \\frac{\\mathbf{n}\\mathbf{n}^T}{\\mathbf{n}^T\\mathbf{n}}$$
// /linear-algebra/formulas#projection_onto_plane]@

// @academic[formulas_link:Browse all linear algebra formulas
// /linear-algebra/formulas]@

// All orthogonal projection matrices share the same algebraic signature: $P^2 = P$ ([idempotent](!/linear-algebra/matrix/types) — projecting twice is the same as projecting once), $P^T = P$ (symmetric), [eigenvalues](!/linear-algebra/eigen) are $0$ and $1$, and $\\text{rank}(P) = \\text{tr}(P)$. The determinant is $0$ unless the projection is onto the full space — projections always collapse at least one dimension.`,
//     before: ``,
//     after: ``,
//     link: ``,
//   },
//   obj8: {
//     title: `Shears`,
//     content: `A shear displaces each point in proportion to its distance from a fixed line or plane. The two $2 \\times 2$ shear matrices are:

// @academic[formula_callout:Shear Matrix
// $$\\text{Shear}_x = \\begin{pmatrix} 1 & k \\\\ 0 & 1 \\end{pmatrix}, \\qquad \\text{Shear}_y = \\begin{pmatrix} 1 & 0 \\\\ k & 1 \\end{pmatrix}$$
// /linear-algebra/formulas#shear_matrix]@

// @academic[formulas_link:Browse all linear algebra formulas
// /linear-algebra/formulas]@

// In $\\mathbb{R}^2$, a horizontal shear shifts the $x$-coordinate by $k$ times the $y$-coordinate:

// $$T(x, y) = (x + ky, \\; y), \\quad \\text{matrix } \\begin{pmatrix} 1 & k \\\\ 0 & 1 \\end{pmatrix}$$

// A vertical shear shifts the $y$-coordinate by $k$ times the $x$-coordinate:

// $$T(x, y) = (x, \\; kx + y), \\quad \\text{matrix } \\begin{pmatrix} 1 & 0 \\\\ k & 1 \\end{pmatrix}$$

// Both are [triangular](!/linear-algebra/matrix/types) matrices with determinant $1$: shears are area-preserving and orientation-preserving. They are not orthogonal — angles are distorted. A square sheared horizontally becomes a parallelogram of the same area but with tilted sides.

// In $\\mathbb{R}^3$, there are six possible shear directions (each coordinate shifted by a multiple of each other coordinate). Each is represented by an identity matrix with one off-diagonal entry replaced by $k$. Shears are fundamental building blocks — any invertible matrix with determinant $1$ can be written as a product of shears.`,
//     before: ``,
//     after: ``,
//     link: ``,
//   },
//   obj9: {
//     title: `Combining Transformations`,
//     content: `Composing transformations corresponds to [multiplying](!/linear-algebra/matrix/operations) their matrices. A rotation followed by a scaling is $SA$ where $S$ is the scaling matrix and $A$ is the rotation matrix. The product is applied right-to-left: $A$ acts first, then $S$.

// Order matters. Rotating then shearing produces a different result from shearing then rotating: $\\text{Shear} \\cdot \\text{Rotation} \\neq \\text{Rotation} \\cdot \\text{Shear}$ in general.

// The [singular value decomposition](!/linear-algebra/decompositions/svd) reveals the hidden geometric structure of any matrix: $A = U\\Sigma V^T$, where $V^T$ is a rotation (or rotation-reflection), $\\Sigma$ is a coordinate-axis scaling, and $U$ is another rotation (or rotation-reflection). Every linear transformation is a rotation, followed by a scaling along the coordinate axes, followed by another rotation. The singular values in $\\Sigma$ measure the maximum stretching in each orthogonal direction.

// This decomposition means no linear transformation is truly exotic — even the most complex-looking matrix is just three simple geometric operations composed together.`,
//     before: ``,
//     after: ``,
//     link: ``,
//   },
//   obj10: {
//     title: `Determinant as Geometric Signature`,
//     content: `The [determinant](!/linear-algebra/determinants/geometry) classifies every linear transformation by its effect on size and orientation.

// $|\\det(A)|$ is the factor by which the transformation scales areas (in $\\mathbb{R}^2$) or volumes (in $\\mathbb{R}^3$). A unit square maps to a parallelogram of area $|\\det(A)|$. A unit cube maps to a parallelepiped of volume $|\\det(A)|$.

// $\\det(A) > 0$: the transformation preserves orientation. Counterclockwise stays counterclockwise in $\\mathbb{R}^2$; right-handed stays right-handed in $\\mathbb{R}^3$. Rotations and shears fall in this category.

// $\\det(A) < 0$: the transformation reverses orientation. Counterclockwise becomes clockwise; right-handed becomes left-handed. Reflections are the canonical example.

// $\\det(A) = 0$: the transformation collapses at least one dimension. The image is a proper subspace — a line or point in $\\mathbb{R}^2$, a plane, line, or point in $\\mathbb{R}^3$. Projections onto proper subspaces and singular matrices fall here.

// $|\\det(A)| = 1$: the transformation preserves area or volume. Rotations ($\\det = +1$) and reflections ($\\det = -1$) are the area-preserving and volume-preserving transformations. Shears also have $\\det = 1$, preserving area despite distorting angles.`,
//     before: ``,
//     after: ``,
//     link: ``,
//   },
//   obj11: {
//     title: `Summary: Algebraic Signature of Each Family`,
//     content: `Each family of geometric transformations has been treated in its own section, with its own matrix templates and its own algebraic identities. The table below sets all five side by side across the diagnostic signatures that distinguish them — orthogonality, determinant, eigenvalues, the characteristic algebraic identity, and what each family does to length and to area. It is the recognition card to keep nearby when a matrix is in hand and the question is which geometric family it belongs to.`,
//     before: ``,
//     after: ``,
//     link: ``,
//   },
// }



//  const introContent = {
//   title: `Rotations, Reflections, Projections, and More`,
//   content: `In R² and R³, linear transformations have concrete geometric meanings. Each has an explicit matrix encoding its action: rotations spin, reflections mirror, projections flatten, shears skew, and scalings stretch or compress. The determinant of the matrix classifies the transformation by how it affects area, volume, and orientation.`,
// }

// const faqQuestions = {
//   obj1: {
//     question: "What is the rotation matrix in R²?",
//     answer: "The matrix for counterclockwise rotation by angle θ about the origin is [[cos θ, −sin θ], [sin θ, cos θ]]. It is orthogonal with determinant 1, preserving lengths, angles, and orientation. Rotations compose by adding angles: R_α · R_β = R_(α+β).",
//     sectionId: "3"
//   },
//   obj2: {
//     question: "What is a reflection matrix?",
//     answer: "A reflection matrix mirrors vectors across a line (in R²) or plane (in R³). Reflection across a line at angle α has matrix [[cos 2α, sin 2α], [sin 2α, −cos 2α]]. All reflection matrices are orthogonal, have determinant −1, and satisfy H² = I — reflecting twice returns to the original.",
//     sectionId: "5"
//   },
//   obj3: {
//     question: "What is a shear transformation?",
//     answer: "A shear displaces each point proportionally to its distance from a fixed line or plane. A horizontal shear in R² has matrix [[1, k], [0, 1]], shifting x-coordinates by k times the y-coordinate. Shears have determinant 1, so they preserve area despite distorting angles.",
//     sectionId: "8"
//   },
//   obj4: {
//     question: "How does the determinant classify geometric transformations?",
//     answer: "The absolute value |det(A)| gives the area or volume scaling factor. Positive determinant means orientation is preserved, negative means reversed. Determinant ±1 means area/volume is preserved (rotations, reflections, shears). Determinant 0 means the transformation collapses at least one dimension.",
//     sectionId: "10"
//   },
//   obj5: {
//     question: "How do you combine geometric transformations?",
//     answer: "Composing transformations corresponds to multiplying their matrices, applied right-to-left. Order matters: rotating then shearing differs from shearing then rotating. The SVD reveals that every linear transformation decomposes into a rotation, a coordinate-axis scaling, and another rotation.",
//     sectionId: "9"
//   }
// }


// const schemas = {
//   learningResource: {
//     "@context": "https://schema.org",
//     "@type": "LearningResource",
//     "name": "Geometric Transformations",
//     "description": "Geometric transformations in linear algebra: rotation, reflection, projection, shear, and scaling matrices in R² and R³. Determinant as geometric signature and SVD decomposition.",
//     "url": "https://www.learnmathclass.com/linear-algebra/transformations/geometric",
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
//       "name": "Geometric Transformations"
//     },
//     "teaches": [
//       "Reading a transformation from its matrix columns",
//       "Scaling matrices: uniform and non-uniform",
//       "Rotation matrices in R² and R³",
//       "Reflection matrices and Householder reflections",
//       "Projection matrices as geometric operations",
//       "Shear transformations and their properties",
//       "Composing transformations via matrix multiplication",
//       "Determinant as area/volume scaling and orientation indicator"
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
//         "name": "Transformations",
//         "item": "https://www.learnmathclass.com/linear-algebra/transformations"
//       },
//       {
//         "@type": "ListItem",
//         "position": 4,
//         "name": "Geometric Transformations",
//         "item": "https://www.learnmathclass.com/linear-algebra/transformations/geometric"
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

// return {
//   props:{
//     sectionsContent,
//     introContent,
//     obj4Table,
//     obj5Table,
//     obj10Table,
//     transformationSignatures,
//     faqQuestions,
//     schemas,
//     seoData: {
//       title: "Geometric Transformations: Matrices in R² & R³ | Learn Math Class",
//       description: "Geometric transformations in linear algebra: rotation, reflection, projection, shear, and scaling matrices in R² and R³. Determinant as geometric signature and SVD decomposition.",
//       keywords: keyWords.join(", "),
//       url: "/linear-algebra/transformations/geometric",
//       name: "Geometric Transformations"
//     },
//   }
// }   

// }


// export default function GeometricTransformationsPage({seoData, sectionsContent, introContent, obj4Table, obj5Table, obj10Table, transformationSignatures, faqQuestions, schemas}) {

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
//           <div key={'obj5-table'} style={tableWrapStyle}
//                dangerouslySetInnerHTML={{ __html: obj5Table }} />,
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
//           <div key={'obj10-table'} style={tableWrapStyle}
//                dangerouslySetInnerHTML={{ __html: obj10Table }} />,
//         ]
//     },
//     {
//         id:'11',
//         title:sectionsContent.obj11.title,
//         link:sectionsContent.obj11.link,
//         content:[
//           sectionsContent.obj11.content,
//           `Read the other way round, this is a recognition problem: given a matrix and no picture, which family is it? The two columns below answer that without any geometry — an identity the matrix satisfies, and the spectrum it must have. Both are checkable by computation, which matters because in dimensions above three the picture is unavailable anyway.`,
//           <DiagramFrame
//             key={'obj11-diagram'}
//             id="transformation-signatures"
//             title="Recognising a family from its matrix"
//             source="/linear-algebra/transformations/geometric"
//           >
//             <IdentitySheet data={transformationSignatures} theme="navy" variant="ledger" />
//           </DiagramFrame>,
//           `Notice which pairs are hard to tell apart. Rotation and shear both have $\\det = 1$, so area alone will not separate them — the eigenvalues do, a complex pair against a defective repeated root. Reflection and projection are both symmetric, and there the determinant separates them: $-1$ against $0$, orientation reversed against information destroyed. No single test identifies a family; the identity and the spectrum together do.`,
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
//    <h1 className='title' style={{marginTop:'0px',marginBottom:'10px'}}>Geometric Transformations</h1>
//    <br/>
//    <br/>
//    <SectionTableOfContents sections={genericSections}
//     showSecondaryNav={true}
//          secondaryNavMode="children"  // or "children"
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



// tables-optimized: v4 | 2026-05-22 | 4 tables (obj4 aggregation, obj5 aggregation, obj10 comparison, obj11 summary capstone)

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
  "geometric transformations linear algebra",
  "rotation matrix",
  "reflection matrix",
  "projection matrix geometric",
  "shear transformation",
  "scaling matrix",
  "rotation matrix R2 R3",
  "Householder reflection",
  "determinant area volume",
  "orthogonal transformation",
  "transformation matrix columns",
  "combining linear transformations",
  "rotation angle matrix formula",
  "geometric interpretation determinant"
]

const linkStyle = 'color: inherit; text-decoration: underline;'

// ---------- TABLES ----------

// obj4 — aggregation: rotations about each coordinate axis in R³
const obj4Table = `
<table class="styled-table" style="border-collapse: collapse; width: 75%;margin:auto; background: white; box-shadow: 0 2px 10px rgba(0,0,0,0.1); border-radius: 8px; overflow: hidden; font-family: Arial, sans-serif;">
  <thead>
    <tr>
      <th style="${tableHeaders.aggregation}">Axis of rotation</th>
      <th style="${tableHeaders.aggregation}">Matrix</th>
      <th style="${tableHeaders.aggregation}">Fixed direction</th>
      <th style="${tableHeaders.aggregation}">Plane that rotates</th>
    </tr>
  </thead>
  <tbody>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">x-axis: Rₓ(θ)</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">[1 &nbsp;0 &nbsp;0; 0 &nbsp;cosθ &nbsp;−sinθ; 0 &nbsp;sinθ &nbsp;cosθ]</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">x-coordinate unchanged</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">yz-plane</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">y-axis: R_y(θ)</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">[cosθ &nbsp;0 &nbsp;sinθ; 0 &nbsp;1 &nbsp;0; −sinθ &nbsp;0 &nbsp;cosθ]</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">y-coordinate unchanged</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">xz-plane</td>
    </tr>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; font-weight: bold; color: #06357a;">z-axis: R_z(θ)</td>
      <td style="padding: 12px 15px; color: #34495e;">[cosθ &nbsp;−sinθ &nbsp;0; sinθ &nbsp;cosθ &nbsp;0; 0 &nbsp;0 &nbsp;1]</td>
      <td style="padding: 12px 15px; color: #34495e;">z-coordinate unchanged</td>
      <td style="padding: 12px 15px; color: #34495e;">xy-plane</td>
    </tr>
  </tbody>
</table>
`

// obj5 — aggregation: reflections in R² across common mirror lines
const reflectionCases = {
  kicker: 'Transformations \u00B7 reflections',
  title: 'Reflections in the plane',
  tallyLabel: 'mirrors',
  intro: 'Four mirrors, four matrices. The first three are special cases of the fourth \u2014 substituting $\\alpha = 0$, $\\tfrac{\\pi}{2}$ and $\\tfrac{\\pi}{4}$ into the general form recovers them exactly.',
  footnote: 'Every reflection has $\\det = -1$, eigenvalues $+1$ along the mirror and $-1$ across it, and equals its own inverse. Those three facts hold whatever $\\alpha$ is, which is what makes reflection a *family* rather than a list \u2014 and why the general row is the only one that has to be remembered.',
  slots: [
    { key: 'matrix', label: 'matrix' },
    { key: 'effect', label: 'effect on (x, y)' },
    { key: 'fixed',  label: 'fixed direction' },
  ],
  groups: [
    {
      heading: 'Mirrors along the axes',
      types: [
        {
          name: 'The x-axis',
          anchor: '#5',
          shape: 'diagonal',
          condition: '$\\alpha = 0$',
          properties: {
            matrix: '$\\begin{bmatrix} 1 & 0 \\\\ 0 & -1 \\end{bmatrix}$',
            effect: '$(x, y) \\mapsto (x, -y)$',
            fixed: 'the $x$-axis',
          },
          note: 'Diagonal, so its action is entrywise: the first coordinate survives and the second flips. The eigenvalues sit on the diagonal, $+1$ and $-1$, exactly as the general result predicts.',
        },
        {
          name: 'The y-axis',
          anchor: '#5',
          shape: 'diagonal',
          condition: '$\\alpha = \\tfrac{\\pi}{2}$',
          properties: {
            matrix: '$\\begin{bmatrix} -1 & 0 \\\\ 0 & 1 \\end{bmatrix}$',
            effect: '$(x, y) \\mapsto (-x, y)$',
            fixed: 'the $y$-axis',
          },
          note: 'The same matrix with the signs exchanged. Note this is not the negative of the row above \u2014 that would be $-I$, a rotation by $\\pi$, which reverses both coordinates and has $\\det = +1$.',
        },
      ],
    },
    {
      heading: 'Mirror at 45 degrees',
      types: [
        {
          name: 'The line $y = x$',
          anchor: '#5',
          shape: 'antidiagonal',
          condition: '$\\alpha = \\tfrac{\\pi}{4}$',
          properties: {
            matrix: '$\\begin{bmatrix} 0 & 1 \\\\ 1 & 0 \\end{bmatrix}$',
            effect: '$(x, y) \\mapsto (y, x)$',
            fixed: 'the line $y = x$',
          },
          note: 'Swapping coordinates is a reflection, which is worth noticing because it also describes the [transpose](!/linear-algebra/matrix/operations) at the level of a $2 \\times 2$ permutation. Its own inverse, as every reflection is.',
        },
      ],
    },
    {
      heading: 'The general mirror',
      types: [
        {
          name: 'Line at angle $\\alpha$',
          anchor: '#5',
          shape: 'symmetric',
          condition: 'any line through the origin',
          properties: {
            matrix: '$\\begin{bmatrix} \\cos 2\\alpha & \\sin 2\\alpha \\\\ \\sin 2\\alpha & -\\cos 2\\alpha \\end{bmatrix}$',
            effect: 'reflects across that line',
            fixed: 'the mirror line itself',
          },
          note: 'The $2\\alpha$ is not a typo: rotating the mirror by $\\alpha$ turns the image by $2\\alpha$, since the incoming and outgoing rays each make angle $\\alpha$ with it. Symmetric and orthogonal at once, which is unusual and is why $A^{-1} = A^{\\mathsf{T}} = A$.',
        },
      ],
    },
  ],
}

// obj10 — comparison/decision: classifying transformations by det(A)
const obj10Table = `
<table class="styled-table" style="border-collapse: collapse; width: 75%;margin:auto; background: white; box-shadow: 0 2px 10px rgba(0,0,0,0.1); border-radius: 8px; overflow: hidden; font-family: Arial, sans-serif;">
  <thead>
    <tr>
      <th style="${tableHeaders.comparison}">det(A)</th>
      <th style="${tableHeaders.comparison}">Effect on area / volume</th>
      <th style="${tableHeaders.comparison}">Effect on orientation</th>
      <th style="${tableHeaders.comparison}">Typical transformations</th>
    </tr>
  </thead>
  <tbody>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">|det(A)| &gt; 1</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">expands by factor |det(A)|</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">preserves if det &gt; 0, reverses if det &lt; 0</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">uniform scaling with |c| &gt; 1</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">0 &lt; |det(A)| &lt; 1</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">shrinks by factor |det(A)|</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">preserves if det &gt; 0, reverses if det &lt; 0</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">uniform scaling with 0 &lt; |c| &lt; 1</td>
    </tr>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">det(A) = +1</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">preserves area / volume</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">preserves orientation</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">rotation, shear</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">det(A) = −1</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">preserves area / volume</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">reverses orientation (handedness flip)</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">reflection, improper rotation</td>
    </tr>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; font-weight: bold; color: #06357a;">det(A) = 0</td>
      <td style="padding: 12px 15px; color: #34495e;">collapses at least one dimension (image is a proper subspace)</td>
      <td style="padding: 12px 15px; color: #34495e;">undefined / degenerate</td>
      <td style="padding: 12px 15px; color: #34495e;">projection onto a proper subspace, any singular matrix</td>
    </tr>
  </tbody>
</table>
`

// obj11 — summary capstone: algebraic signature of each transformation family
// obj11 — each family identified by its algebra rather than its picture
const transformationSignatures = {
  kicker: 'Transformations \u00B7 signatures',
  title: 'Recognising a family from its matrix',
  tallyLabel: 'families',
  intro: 'Each family has an algebraic fingerprint \u2014 an identity its matrix satisfies and a spectrum it must have. Given an unfamiliar matrix, these are what identify it without drawing anything.',
  footnote: 'The determinant sorts them at a glance: rotations and shears preserve area, reflections flip it, projections destroy it, and scaling multiplies it by $c^n$. Two families share $\\det = 1$ \u2014 rotation and shear \u2014 and the eigenvalues separate them: a rotation has a complex pair, a shear has a repeated real one and too few eigenvectors to diagonalise.',
  groups: [
    {
      heading: 'Rigid \u2014 lengths preserved',
      identities: [
        {
          name: 'Rotation',
          anchor: '#3',
          formula: '$R^{\\mathsf{T}}R = I, \\quad \\det R = 1$',
          condition: 'eigenvalues $e^{\\pm i\\theta}$ \u2014 complex pair',
          note: 'Orthogonal with positive determinant. Over $\\mathbb{R}$ a plane rotation has no eigenvectors at all, since no direction survives unturned \u2014 which is exactly what the complex pair records. In $\\mathbb{R}^3$ there is one real eigenvalue $1$, and its eigenvector is the axis.',
        },
        {
          name: 'Reflection',
          anchor: '#5',
          formula: '$H^2 = I, \\quad H^{\\mathsf{T}} = H, \\quad \\det H = -1$',
          condition: 'eigenvalues $+1$ on the mirror, $-1$ across it',
          note: 'Involutory and symmetric. Applying it twice returns the original, so $H$ is its own inverse. The eigenvalue $-1$ is what the negative determinant reports \u2014 orientation reverses, and no rotation can do that.',
        },
      ],
    },
    {
      heading: 'Non-rigid \u2014 lengths change',
      identities: [
        {
          name: 'Uniform scaling',
          anchor: '#2',
          formula: '$A = cI, \\quad \\det A = c^n$',
          condition: 'eigenvalue $c$, repeated $n$ times',
          note: 'The only family commuting with everything, since $cI$ passes through any product. Every direction is an eigenvector, so the matrix is diagonal in every basis \u2014 the extreme opposite of a shear.',
        },
        {
          name: 'Shear',
          anchor: '#8',
          formula: 'triangular, $1$s on the diagonal, $\\det = 1$',
          condition: 'eigenvalue $1$ repeated \u2014 **defective**',
          strict: true,
          note: 'Area is preserved yet nothing is rigid. The repeated eigenvalue has only one eigenvector rather than two, so a shear cannot be [diagonalised](!/linear-algebra/eigen/diagonalization) \u2014 the standard example of algebraic multiplicity exceeding geometric.',
        },
      ],
    },
    {
      heading: 'Not invertible',
      identities: [
        {
          name: 'Orthogonal projection',
          anchor: '#7',
          formula: '$P^2 = P, \\quad P^{\\mathsf{T}} = P, \\quad \\det P = 0$',
          condition: 'eigenvalues $0$ and $1$ only',
          key: true,
          note: 'Idempotent and symmetric. The zero determinant is not incidental \u2014 a projection collapses the perpendicular directions and nothing recovers them, so it is the only family here with no inverse. See [projection properties](!/linear-algebra/orthogonality/projections).',
        },
      ],
    },
  ],
}

// ---------- SECTIONS ----------

// const sectionsContent = {
//   obj1: {
//     title: `How to Read a Transformation Matrix`,
//     content: `The geometric effect of a [matrix](!/linear-algebra/matrix) $A$ is revealed by two pieces of information: what it does to the standard [basis](!/linear-algebra/vector-spaces) vectors (the columns) and what its [determinant](!/linear-algebra/determinants) is.

// Column $1$ is the image of $\\mathbf{e}_1 = (1, 0)$ in $\\mathbb{R}^2$ or $(1, 0, 0)$ in $\\mathbb{R}^3$. Column $2$ is the image of $\\mathbf{e}_2$. The matrix maps the standard grid to the parallelogram (or parallelepiped) spanned by these column vectors.

// The absolute value $|\\det(A)|$ measures how the transformation scales areas (in $\\mathbb{R}^2$) or volumes (in $\\mathbb{R}^3$). The sign of $\\det(A)$ indicates orientation: positive means the transformation preserves handedness, negative means it reverses it. An [orthogonal](!/linear-algebra/matrix/types) matrix ($\\det = \\pm 1$) preserves all lengths and angles — it is a rigid motion.`,
//     before: ``,
//     after: ``,
//     link: ``,
//   },
//   obj2: {
//     title: `Scaling`,
//     content: `Uniform scaling multiplies every coordinate by the same factor: $T(\\mathbf{x}) = c\\mathbf{x}$, with matrix $cI$. When $c > 1$ the transformation enlarges, when $0 < c < 1$ it shrinks, and when $c < 0$ it reflects through the origin and scales.

// Non-uniform scaling stretches each axis independently. In $\\mathbb{R}^2$, $T(x, y) = (c_1 x, c_2 y)$ has matrix $\\text{diag}(c_1, c_2)$. The horizontal axis is scaled by $c_1$ and the vertical by $c_2$. A unit square maps to a rectangle with side lengths $|c_1|$ and $|c_2|$.

// The [determinant](!/linear-algebra/determinants/geometry) is $c^n$ for uniform scaling and $c_1 c_2$ (or $c_1 c_2 c_3$) for non-uniform. When any scaling factor is zero, the transformation collapses that axis entirely and the determinant is zero.

// In $\\mathbb{R}^3$, $\\text{diag}(c_1, c_2, c_3)$ scales each coordinate axis independently. The unit cube maps to a rectangular box with side lengths $|c_1|$, $|c_2|$, $|c_3|$ and volume $|c_1 c_2 c_3|$.`,
//     before: ``,
//     after: ``,
//     link: ``,
//   },
//   obj3: {
//     title: `Rotations in R²`,
//     content: `Rotation by angle $\\theta$ counterclockwise about the origin has matrix

// $$R_\\theta = \\begin{pmatrix} \\cos\\theta & -\\sin\\theta \\\\ \\sin\\theta & \\cos\\theta \\end{pmatrix}$$

// The first column $R_\\theta \\mathbf{e}_1 = (\\cos\\theta, \\sin\\theta)$ is the image of $(1, 0)$ — the point on the unit circle at angle $\\theta$. The second column $R_\\theta \\mathbf{e}_2 = (-\\sin\\theta, \\cos\\theta)$ is the image of $(0, 1)$ — the point at angle $\\theta + 90°$.

// The determinant is $\\cos^2\\theta + \\sin^2\\theta = 1$ for every $\\theta$: rotations preserve areas and orientation. The matrix is [orthogonal](!/linear-algebra/matrix/types): $R_\\theta^T R_\\theta = I$, so lengths and angles are preserved. The inverse is $R_\\theta^{-1} = R_{-\\theta} = R_\\theta^T$ — rotating backward by the same angle.

// Rotations compose by adding angles: $R_\\alpha R_\\beta = R_{\\alpha + \\beta}$. This follows from the trigonometric addition formulas and corresponds to the fact that rotating by $\\beta$ then by $\\alpha$ is the same as rotating by $\\alpha + \\beta$.

// Common cases: $R_{90°} = \\begin{pmatrix} 0 & -1 \\\\ 1 & 0 \\end{pmatrix}$, $R_{180°} = \\begin{pmatrix} -1 & 0 \\\\ 0 & -1 \\end{pmatrix}$, $R_{45°} = \\frac{1}{\\sqrt{2}}\\begin{pmatrix} 1 & -1 \\\\ 1 & 1 \\end{pmatrix}$.`,
//     before: ``,
//     after: ``,
//     link: ``,
//   },
//   obj4: {
//     title: `Rotations in R³`,
//     content: `In three dimensions, a rotation is specified by an axis and an angle. Rotation by $\\theta$ about the $z$-axis leaves the $z$-coordinate unchanged and rotates the $xy$-plane:

// $$R_z(\\theta) = \\begin{pmatrix} \\cos\\theta & -\\sin\\theta & 0 \\\\ \\sin\\theta & \\cos\\theta & 0 \\\\ 0 & 0 & 1 \\end{pmatrix}$$

// Rotations about the $x$-axis and $y$-axis have the same $2 \\times 2$ rotation block embedded in different positions:

// $$R_x(\\theta) = \\begin{pmatrix} 1 & 0 & 0 \\\\ 0 & \\cos\\theta & -\\sin\\theta \\\\ 0 & \\sin\\theta & \\cos\\theta \\end{pmatrix}, \\quad R_y(\\theta) = \\begin{pmatrix} \\cos\\theta & 0 & \\sin\\theta \\\\ 0 & 1 & 0 \\\\ -\\sin\\theta & 0 & \\cos\\theta \\end{pmatrix}$$

// Every $3 \\times 3$ rotation matrix is orthogonal with determinant $+1$. The axis of rotation is the [eigenvector](!/linear-algebra/eigen) with eigenvalue $1$ — the direction that remains fixed. Any rotation in $\\mathbb{R}^3$ can be decomposed into rotations about the coordinate axes (Euler angles), though the decomposition is not unique.`,
//     before: ``,
//     after: ``,
//     link: ``,
//   },
//   obj5: {
//     title: `Reflections in R²`,
//     content: `Reflection across the $x$-axis flips the $y$-coordinate: $T(x, y) = (x, -y)$, with matrix $\\begin{pmatrix} 1 & 0 \\\\ 0 & -1 \\end{pmatrix}$.

// Reflection across the $y$-axis flips the $x$-coordinate: matrix $\\begin{pmatrix} -1 & 0 \\\\ 0 & 1 \\end{pmatrix}$.

// Reflection across the line $y = x$ swaps coordinates: matrix $\\begin{pmatrix} 0 & 1 \\\\ 1 & 0 \\end{pmatrix}$.

// Reflection across an arbitrary line through the origin at angle $\\alpha$ has matrix

// $$H_\\alpha = \\begin{pmatrix} \\cos 2\\alpha & \\sin 2\\alpha \\\\ \\sin 2\\alpha & -\\cos 2\\alpha \\end{pmatrix}$$

// All reflection matrices share the same properties: the determinant is $-1$ (orientation-reversing, area-preserving), the matrix is [orthogonal](!/linear-algebra/matrix/types) (lengths and angles preserved), and the matrix is [involutory](!/linear-algebra/matrix/types) ($H^2 = I$) — reflecting twice returns every vector to its starting point. The [eigenvalues](!/linear-algebra/eigen) are $+1$ (vectors on the mirror line) and $-1$ (vectors perpendicular to it).`,
//     before: ``,
//     after: ``,
//     link: ``,
//   },
//   obj6: {
//     title: `Reflections in R³`,
//     content: `Reflection across a coordinate plane negates the coordinate perpendicular to that plane. Reflection across the $xy$-plane: $\\text{diag}(1, 1, -1)$. Across the $xz$-plane: $\\text{diag}(1, -1, 1)$. Across the $yz$-plane: $\\text{diag}(-1, 1, 1)$.

// Reflection across an arbitrary plane through the origin with unit normal $\\mathbf{n}$ is given by the Householder matrix:

// $$H = I - 2\\mathbf{n}\\mathbf{n}^T$$

// This matrix subtracts twice the component of each vector in the direction of $\\mathbf{n}$, effectively mirroring across the plane perpendicular to $\\mathbf{n}$. Householder reflections are orthogonal, have determinant $-1$, and satisfy $H^2 = I$. They are the building blocks of the [QR decomposition](!/linear-algebra/decompositions/qr) and are widely used in numerical algorithms.`,
//     before: ``,
//     after: ``,
//     link: ``,
//   },
//   obj7: {
//     title: `Projections`,
//     content: `Orthogonal [projection](!/linear-algebra/orthogonality/projections) onto a subspace collapses each vector onto its nearest point in the subspace, discarding the perpendicular component.

// Projection onto the $x$-axis in $\\mathbb{R}^2$: $T(x, y) = (x, 0)$, with matrix $\\begin{pmatrix} 1 & 0 \\\\ 0 & 0 \\end{pmatrix}$.

// Projection onto a line through the origin in direction $\\mathbf{u}$:

// $$P = \\frac{\\mathbf{u}\\mathbf{u}^T}{\\mathbf{u}^T\\mathbf{u}}$$

// Projection onto a plane with unit normal $\\mathbf{n}$ in $\\mathbb{R}^3$:

// $$P = I - \\frac{\\mathbf{n}\\mathbf{n}^T}{\\mathbf{n}^T\\mathbf{n}}$$

// All orthogonal projection matrices share the same algebraic signature: $P^2 = P$ ([idempotent](!/linear-algebra/matrix/types) — projecting twice is the same as projecting once), $P^T = P$ (symmetric), [eigenvalues](!/linear-algebra/eigen) are $0$ and $1$, and $\\text{rank}(P) = \\text{tr}(P)$. The determinant is $0$ unless the projection is onto the full space — projections always collapse at least one dimension.`,
//     before: ``,
//     after: ``,
//     link: ``,
//   },
//   obj8: {
//     title: `Shears`,
//     content: `A shear displaces each point in proportion to its distance from a fixed line or plane. In $\\mathbb{R}^2$, a horizontal shear shifts the $x$-coordinate by $k$ times the $y$-coordinate:

// $$T(x, y) = (x + ky, \\; y), \\quad \\text{matrix } \\begin{pmatrix} 1 & k \\\\ 0 & 1 \\end{pmatrix}$$

// A vertical shear shifts the $y$-coordinate by $k$ times the $x$-coordinate:

// $$T(x, y) = (x, \\; kx + y), \\quad \\text{matrix } \\begin{pmatrix} 1 & 0 \\\\ k & 1 \\end{pmatrix}$$

// Both are [triangular](!/linear-algebra/matrix/types) matrices with determinant $1$: shears are area-preserving and orientation-preserving. They are not orthogonal — angles are distorted. A square sheared horizontally becomes a parallelogram of the same area but with tilted sides.

// In $\\mathbb{R}^3$, there are six possible shear directions (each coordinate shifted by a multiple of each other coordinate). Each is represented by an identity matrix with one off-diagonal entry replaced by $k$. Shears are fundamental building blocks — any invertible matrix with determinant $1$ can be written as a product of shears.`,
//     before: ``,
//     after: ``,
//     link: ``,
//   },
//   obj9: {
//     title: `Combining Transformations`,
//     content: `Composing transformations corresponds to [multiplying](!/linear-algebra/matrix/operations) their matrices. A rotation followed by a scaling is $SA$ where $S$ is the scaling matrix and $A$ is the rotation matrix. The product is applied right-to-left: $A$ acts first, then $S$.

// Order matters. Rotating then shearing produces a different result from shearing then rotating: $\\text{Shear} \\cdot \\text{Rotation} \\neq \\text{Rotation} \\cdot \\text{Shear}$ in general.

// The [singular value decomposition](!/linear-algebra/decompositions/svd) reveals the hidden geometric structure of any matrix: $A = U\\Sigma V^T$, where $V^T$ is a rotation (or rotation-reflection), $\\Sigma$ is a coordinate-axis scaling, and $U$ is another rotation (or rotation-reflection). Every linear transformation is a rotation, followed by a scaling along the coordinate axes, followed by another rotation. The singular values in $\\Sigma$ measure the maximum stretching in each orthogonal direction.

// This decomposition means no linear transformation is truly exotic — even the most complex-looking matrix is just three simple geometric operations composed together.`,
//     before: ``,
//     after: ``,
//     link: ``,
//   },
//   obj10: {
//     title: `Determinant as Geometric Signature`,
//     content: `The [determinant](!/linear-algebra/determinants/geometry) classifies every linear transformation by its effect on size and orientation.

// $|\\det(A)|$ is the factor by which the transformation scales areas (in $\\mathbb{R}^2$) or volumes (in $\\mathbb{R}^3$). A unit square maps to a parallelogram of area $|\\det(A)|$. A unit cube maps to a parallelepiped of volume $|\\det(A)|$.

// $\\det(A) > 0$: the transformation preserves orientation. Counterclockwise stays counterclockwise in $\\mathbb{R}^2$; right-handed stays right-handed in $\\mathbb{R}^3$. Rotations and shears fall in this category.

// $\\det(A) < 0$: the transformation reverses orientation. Counterclockwise becomes clockwise; right-handed becomes left-handed. Reflections are the canonical example.

// $\\det(A) = 0$: the transformation collapses at least one dimension. The image is a proper subspace — a line or point in $\\mathbb{R}^2$, a plane, line, or point in $\\mathbb{R}^3$. Projections onto proper subspaces and singular matrices fall here.

// $|\\det(A)| = 1$: the transformation preserves area or volume. Rotations ($\\det = +1$) and reflections ($\\det = -1$) are the area-preserving and volume-preserving transformations. Shears also have $\\det = 1$, preserving area despite distorting angles.`,
//     before: ``,
//     after: ``,
//     link: ``,
//   },
//   obj11: {
//     title: `Summary: Algebraic Signature of Each Family`,
//     content: `Each family of geometric transformations has been treated in its own section, with its own matrix templates and its own algebraic identities. The table below sets all five side by side across the diagnostic signatures that distinguish them — orthogonality, determinant, eigenvalues, the characteristic algebraic identity, and what each family does to length and to area. It is the recognition card to keep nearby when a matrix is in hand and the question is which geometric family it belongs to.`,
//     before: ``,
//     after: ``,
//     link: ``,
//   },
// }


// tables-optimized: v4 | 2026-05-22 | 4 tables (obj4 aggregation, obj5 aggregation, obj10 comparison, obj11 summary capstone)

// ---------- SECTIONS ----------

const sectionsContent = {
  obj1: {
    title: `How to Read a Transformation Matrix`,
    content: `The geometric effect of a [matrix](!/linear-algebra/matrix) $A$ is revealed by two pieces of information: what it does to the standard [basis](!/linear-algebra/vector-spaces) vectors (the columns) and what its [determinant](!/linear-algebra/determinants) is.

Column $1$ is the image of $\\mathbf{e}_1 = (1, 0)$ in $\\mathbb{R}^2$ or $(1, 0, 0)$ in $\\mathbb{R}^3$. Column $2$ is the image of $\\mathbf{e}_2$. The matrix maps the standard grid to the parallelogram (or parallelepiped) spanned by these column vectors.

The absolute value $|\\det(A)|$ measures how the transformation scales areas (in $\\mathbb{R}^2$) or volumes (in $\\mathbb{R}^3$). The sign of $\\det(A)$ indicates orientation: positive means the transformation preserves handedness, negative means it reverses it. An [orthogonal](!/linear-algebra/matrix/types) matrix ($\\det = \\pm 1$) preserves all lengths and angles — it is a rigid motion.`,
    before: ``,
    after: ``,
    link: ``,
  },
  obj2: {
    title: `Scaling`,
    content: `Uniform scaling multiplies every coordinate by the same factor: $T(\\mathbf{x}) = c\\mathbf{x}$, with matrix $cI$. When $c > 1$ the transformation enlarges, when $0 < c < 1$ it shrinks, and when $c < 0$ it reflects through the origin and scales.

Non-uniform scaling stretches each axis independently. In $\\mathbb{R}^2$, $T(x, y) = (c_1 x, c_2 y)$ has matrix $\\text{diag}(c_1, c_2)$. The horizontal axis is scaled by $c_1$ and the vertical by $c_2$. A unit square maps to a rectangle with side lengths $|c_1|$ and $|c_2|$.

The [determinant](!/linear-algebra/determinants/geometry) is $c^n$ for uniform scaling and $c_1 c_2$ (or $c_1 c_2 c_3$) for non-uniform. When any scaling factor is zero, the transformation collapses that axis entirely and the determinant is zero.

In $\\mathbb{R}^3$, $\\text{diag}(c_1, c_2, c_3)$ scales each coordinate axis independently. The unit cube maps to a rectangular box with side lengths $|c_1|$, $|c_2|$, $|c_3|$ and volume $|c_1 c_2 c_3|$.`,
    before: ``,
    after: ``,
    link: ``,
  },
  obj3: {
    title: `Rotations in R²`,
    content: `Rotation by angle $\\theta$ counterclockwise about the origin has matrix

@academic[formula_callout:Rotation Matrix 2D
$$R_\\theta = \\begin{pmatrix} \\cos\\theta & -\\sin\\theta \\\\ \\sin\\theta & \\cos\\theta \\end{pmatrix}$$
/linear-algebra/formulas#rotation_matrix_2d]@

@academic[formulas_link:Browse all linear algebra formulas
/linear-algebra/formulas]@

The first column $R_\\theta \\mathbf{e}_1 = (\\cos\\theta, \\sin\\theta)$ is the image of $(1, 0)$ — the point on the unit circle at angle $\\theta$. The second column $R_\\theta \\mathbf{e}_2 = (-\\sin\\theta, \\cos\\theta)$ is the image of $(0, 1)$ — the point at angle $\\theta + 90°$.

The determinant is $\\cos^2\\theta + \\sin^2\\theta = 1$ for every $\\theta$: rotations preserve areas and orientation. The matrix is [orthogonal](!/linear-algebra/matrix/types): $R_\\theta^T R_\\theta = I$, so lengths and angles are preserved. The inverse is $R_\\theta^{-1} = R_{-\\theta} = R_\\theta^T$ — rotating backward by the same angle.

Rotations compose by adding angles: $R_\\alpha R_\\beta = R_{\\alpha + \\beta}$. This follows from the trigonometric addition formulas and corresponds to the fact that rotating by $\\beta$ then by $\\alpha$ is the same as rotating by $\\alpha + \\beta$.

Common cases: $R_{90°} = \\begin{pmatrix} 0 & -1 \\\\ 1 & 0 \\end{pmatrix}$, $R_{180°} = \\begin{pmatrix} -1 & 0 \\\\ 0 & -1 \\end{pmatrix}$, $R_{45°} = \\frac{1}{\\sqrt{2}}\\begin{pmatrix} 1 & -1 \\\\ 1 & 1 \\end{pmatrix}$.`,
    before: ``,
    after: ``,
    link: ``,
  },
  obj4: {
    title: `Rotations in R³`,
    content: `In three dimensions, a rotation is specified by an axis and an angle. The three coordinate-axis rotation matrices are:

@academic[formula_callout:Rotation Matrices 3D
$$R_x(\\theta) = \\begin{pmatrix} 1 & 0 & 0 \\\\ 0 & \\cos\\theta & -\\sin\\theta \\\\ 0 & \\sin\\theta & \\cos\\theta \\end{pmatrix}, \\;\\; R_y(\\theta) = \\begin{pmatrix} \\cos\\theta & 0 & \\sin\\theta \\\\ 0 & 1 & 0 \\\\ -\\sin\\theta & 0 & \\cos\\theta \\end{pmatrix}, \\;\\; R_z(\\theta) = \\begin{pmatrix} \\cos\\theta & -\\sin\\theta & 0 \\\\ \\sin\\theta & \\cos\\theta & 0 \\\\ 0 & 0 & 1 \\end{pmatrix}$$
/linear-algebra/formulas#rotation_matrices_3d]@

@academic[formulas_link:Browse all linear algebra formulas
/linear-algebra/formulas]@

Rotation by $\\theta$ about the $z$-axis leaves the $z$-coordinate unchanged and rotates the $xy$-plane:

$$R_z(\\theta) = \\begin{pmatrix} \\cos\\theta & -\\sin\\theta & 0 \\\\ \\sin\\theta & \\cos\\theta & 0 \\\\ 0 & 0 & 1 \\end{pmatrix}$$

Rotations about the $x$-axis and $y$-axis have the same $2 \\times 2$ rotation block embedded in different positions:

$$R_x(\\theta) = \\begin{pmatrix} 1 & 0 & 0 \\\\ 0 & \\cos\\theta & -\\sin\\theta \\\\ 0 & \\sin\\theta & \\cos\\theta \\end{pmatrix}, \\quad R_y(\\theta) = \\begin{pmatrix} \\cos\\theta & 0 & \\sin\\theta \\\\ 0 & 1 & 0 \\\\ -\\sin\\theta & 0 & \\cos\\theta \\end{pmatrix}$$

Every $3 \\times 3$ rotation matrix is orthogonal with determinant $+1$. The axis of rotation is the [eigenvector](!/linear-algebra/eigen) with eigenvalue $1$ — the direction that remains fixed. Any rotation in $\\mathbb{R}^3$ can be decomposed into rotations about the coordinate axes (Euler angles), though the decomposition is not unique.`,
    before: ``,
    after: ``,
    link: ``,
  },
  obj5: {
    title: `Reflections in R²`,
    content: `Reflection across the $x$-axis flips the $y$-coordinate: $T(x, y) = (x, -y)$, with matrix $\\begin{pmatrix} 1 & 0 \\\\ 0 & -1 \\end{pmatrix}$.

Reflection across the $y$-axis flips the $x$-coordinate: matrix $\\begin{pmatrix} -1 & 0 \\\\ 0 & 1 \\end{pmatrix}$.

Reflection across the line $y = x$ swaps coordinates: matrix $\\begin{pmatrix} 0 & 1 \\\\ 1 & 0 \\end{pmatrix}$.

Reflection across an arbitrary line through the origin at angle $\\alpha$ has matrix

@academic[formula_callout:Reflection Across Line 2D
$$H_\\alpha = \\begin{pmatrix} \\cos 2\\alpha & \\sin 2\\alpha \\\\ \\sin 2\\alpha & -\\cos 2\\alpha \\end{pmatrix}$$
/linear-algebra/formulas#reflection_across_line_2d]@

@academic[formulas_link:Browse all linear algebra formulas
/linear-algebra/formulas]@

All reflection matrices share the same properties: the determinant is $-1$ (orientation-reversing, area-preserving), the matrix is [orthogonal](!/linear-algebra/matrix/types) (lengths and angles preserved), and the matrix is [involutory](!/linear-algebra/matrix/types) ($H^2 = I$) — reflecting twice returns every vector to its starting point. The [eigenvalues](!/linear-algebra/eigen) are $+1$ (vectors on the mirror line) and $-1$ (vectors perpendicular to it).`,
    before: ``,
    after: ``,
    link: ``,
  },
  obj6: {
    title: `Reflections in R³`,
    content: `Reflection across a coordinate plane negates the coordinate perpendicular to that plane. Reflection across the $xy$-plane: $\\text{diag}(1, 1, -1)$. Across the $xz$-plane: $\\text{diag}(1, -1, 1)$. Across the $yz$-plane: $\\text{diag}(-1, 1, 1)$.

Reflection across an arbitrary plane through the origin with unit normal $\\mathbf{n}$ is given by the Householder matrix:

@academic[formula_callout:Householder Reflection
$$H = I - 2\\,\\mathbf{n}\\mathbf{n}^T$$
/linear-algebra/formulas#householder_reflection]@

@academic[formulas_link:Browse all linear algebra formulas
/linear-algebra/formulas]@

This matrix subtracts twice the component of each vector in the direction of $\\mathbf{n}$, effectively mirroring across the plane perpendicular to $\\mathbf{n}$. Householder reflections are orthogonal, have determinant $-1$, and satisfy $H^2 = I$. They are the building blocks of the [QR decomposition](!/linear-algebra/decompositions/qr) and are widely used in numerical algorithms.`,
    before: ``,
    after: ``,
    link: ``,
  },
  obj7: {
    title: `Projections`,
    content: `Orthogonal [projection](!/linear-algebra/orthogonality/projections) onto a subspace collapses each vector onto its nearest point in the subspace, discarding the perpendicular component.

Projection onto the $x$-axis in $\\mathbb{R}^2$: $T(x, y) = (x, 0)$, with matrix $\\begin{pmatrix} 1 & 0 \\\\ 0 & 0 \\end{pmatrix}$.

Projection onto a line through the origin in direction $\\mathbf{u}$:

@academic[formula_callout:Projection onto Line
$$P = \\frac{\\mathbf{u}\\mathbf{u}^T}{\\mathbf{u}^T\\mathbf{u}}$$
/linear-algebra/formulas#projection_onto_line]@

@academic[formulas_link:Browse all linear algebra formulas
/linear-algebra/formulas]@

Projection onto a plane with unit normal $\\mathbf{n}$ in $\\mathbb{R}^3$:

@academic[formula_callout:Projection onto Plane
$$P = I - \\frac{\\mathbf{n}\\mathbf{n}^T}{\\mathbf{n}^T\\mathbf{n}}$$
/linear-algebra/formulas#projection_onto_plane]@

@academic[formulas_link:Browse all linear algebra formulas
/linear-algebra/formulas]@

All orthogonal projection matrices share the same algebraic signature: $P^2 = P$ ([idempotent](!/linear-algebra/matrix/types) — projecting twice is the same as projecting once), $P^T = P$ (symmetric), [eigenvalues](!/linear-algebra/eigen) are $0$ and $1$, and $\\text{rank}(P) = \\text{tr}(P)$. The determinant is $0$ unless the projection is onto the full space — projections always collapse at least one dimension.`,
    before: ``,
    after: ``,
    link: ``,
  },
  obj8: {
    title: `Shears`,
    content: `A shear displaces each point in proportion to its distance from a fixed line or plane. The two $2 \\times 2$ shear matrices are:

@academic[formula_callout:Shear Matrix
$$\\text{Shear}_x = \\begin{pmatrix} 1 & k \\\\ 0 & 1 \\end{pmatrix}, \\qquad \\text{Shear}_y = \\begin{pmatrix} 1 & 0 \\\\ k & 1 \\end{pmatrix}$$
/linear-algebra/formulas#shear_matrix]@

@academic[formulas_link:Browse all linear algebra formulas
/linear-algebra/formulas]@

In $\\mathbb{R}^2$, a horizontal shear shifts the $x$-coordinate by $k$ times the $y$-coordinate:

$$T(x, y) = (x + ky, \\; y), \\quad \\text{matrix } \\begin{pmatrix} 1 & k \\\\ 0 & 1 \\end{pmatrix}$$

A vertical shear shifts the $y$-coordinate by $k$ times the $x$-coordinate:

$$T(x, y) = (x, \\; kx + y), \\quad \\text{matrix } \\begin{pmatrix} 1 & 0 \\\\ k & 1 \\end{pmatrix}$$

Both are [triangular](!/linear-algebra/matrix/types) matrices with determinant $1$: shears are area-preserving and orientation-preserving. They are not orthogonal — angles are distorted. A square sheared horizontally becomes a parallelogram of the same area but with tilted sides.

In $\\mathbb{R}^3$, there are six possible shear directions (each coordinate shifted by a multiple of each other coordinate). Each is represented by an identity matrix with one off-diagonal entry replaced by $k$. Shears are fundamental building blocks — any invertible matrix with determinant $1$ can be written as a product of shears.`,
    before: ``,
    after: ``,
    link: ``,
  },
  obj9: {
    title: `Combining Transformations`,
    content: `Composing transformations corresponds to [multiplying](!/linear-algebra/matrix/operations) their matrices. A rotation followed by a scaling is $SA$ where $S$ is the scaling matrix and $A$ is the rotation matrix. The product is applied right-to-left: $A$ acts first, then $S$.

Order matters. Rotating then shearing produces a different result from shearing then rotating: $\\text{Shear} \\cdot \\text{Rotation} \\neq \\text{Rotation} \\cdot \\text{Shear}$ in general.

The [singular value decomposition](!/linear-algebra/decompositions/svd) reveals the hidden geometric structure of any matrix: $A = U\\Sigma V^T$, where $V^T$ is a rotation (or rotation-reflection), $\\Sigma$ is a coordinate-axis scaling, and $U$ is another rotation (or rotation-reflection). Every linear transformation is a rotation, followed by a scaling along the coordinate axes, followed by another rotation. The singular values in $\\Sigma$ measure the maximum stretching in each orthogonal direction.

This decomposition means no linear transformation is truly exotic — even the most complex-looking matrix is just three simple geometric operations composed together.`,
    before: ``,
    after: ``,
    link: ``,
  },
  obj10: {
    title: `Determinant as Geometric Signature`,
    content: `The [determinant](!/linear-algebra/determinants/geometry) classifies every linear transformation by its effect on size and orientation.

$|\\det(A)|$ is the factor by which the transformation scales areas (in $\\mathbb{R}^2$) or volumes (in $\\mathbb{R}^3$). A unit square maps to a parallelogram of area $|\\det(A)|$. A unit cube maps to a parallelepiped of volume $|\\det(A)|$.

$\\det(A) > 0$: the transformation preserves orientation. Counterclockwise stays counterclockwise in $\\mathbb{R}^2$; right-handed stays right-handed in $\\mathbb{R}^3$. Rotations and shears fall in this category.

$\\det(A) < 0$: the transformation reverses orientation. Counterclockwise becomes clockwise; right-handed becomes left-handed. Reflections are the canonical example.

$\\det(A) = 0$: the transformation collapses at least one dimension. The image is a proper subspace — a line or point in $\\mathbb{R}^2$, a plane, line, or point in $\\mathbb{R}^3$. Projections onto proper subspaces and singular matrices fall here.

$|\\det(A)| = 1$: the transformation preserves area or volume. Rotations ($\\det = +1$) and reflections ($\\det = -1$) are the area-preserving and volume-preserving transformations. Shears also have $\\det = 1$, preserving area despite distorting angles.`,
    before: ``,
    after: ``,
    link: ``,
  },
  obj11: {
    title: `Summary: Algebraic Signature of Each Family`,
    content: `Each family of geometric transformations has been treated in its own section, with its own matrix templates and its own algebraic identities. The table below sets all five side by side across the diagnostic signatures that distinguish them — orthogonality, determinant, eigenvalues, the characteristic algebraic identity, and what each family does to length and to area. It is the recognition card to keep nearby when a matrix is in hand and the question is which geometric family it belongs to.`,
    before: ``,
    after: ``,
    link: ``,
  },
}



 const introContent = {
  title: `Rotations, Reflections, Projections, and More`,
  content: `In R² and R³, linear transformations have concrete geometric meanings. Each has an explicit matrix encoding its action: rotations spin, reflections mirror, projections flatten, shears skew, and scalings stretch or compress. The determinant of the matrix classifies the transformation by how it affects area, volume, and orientation.`,
}

const faqQuestions = {
  obj1: {
    question: "What is the rotation matrix in R²?",
    answer: "The matrix for counterclockwise rotation by angle θ about the origin is [[cos θ, −sin θ], [sin θ, cos θ]]. It is orthogonal with determinant 1, preserving lengths, angles, and orientation. Rotations compose by adding angles: R_α · R_β = R_(α+β).",
    sectionId: "3"
  },
  obj2: {
    question: "What is a reflection matrix?",
    answer: "A reflection matrix mirrors vectors across a line (in R²) or plane (in R³). Reflection across a line at angle α has matrix [[cos 2α, sin 2α], [sin 2α, −cos 2α]]. All reflection matrices are orthogonal, have determinant −1, and satisfy H² = I — reflecting twice returns to the original.",
    sectionId: "5"
  },
  obj3: {
    question: "What is a shear transformation?",
    answer: "A shear displaces each point proportionally to its distance from a fixed line or plane. A horizontal shear in R² has matrix [[1, k], [0, 1]], shifting x-coordinates by k times the y-coordinate. Shears have determinant 1, so they preserve area despite distorting angles.",
    sectionId: "8"
  },
  obj4: {
    question: "How does the determinant classify geometric transformations?",
    answer: "The absolute value |det(A)| gives the area or volume scaling factor. Positive determinant means orientation is preserved, negative means reversed. Determinant ±1 means area/volume is preserved (rotations, reflections, shears). Determinant 0 means the transformation collapses at least one dimension.",
    sectionId: "10"
  },
  obj5: {
    question: "How do you combine geometric transformations?",
    answer: "Composing transformations corresponds to multiplying their matrices, applied right-to-left. Order matters: rotating then shearing differs from shearing then rotating. The SVD reveals that every linear transformation decomposes into a rotation, a coordinate-axis scaling, and another rotation.",
    sectionId: "9"
  }
}


const schemas = {
  learningResource: {
    "@context": "https://schema.org",
    "@type": "LearningResource",
    "name": "Geometric Transformations",
    "description": "Geometric transformations in linear algebra: rotation, reflection, projection, shear, and scaling matrices in R² and R³. Determinant as geometric signature and SVD decomposition.",
    "url": "https://www.learnmathclass.com/linear-algebra/transformations/geometric",
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
      "name": "Geometric Transformations"
    },
    "teaches": [
      "Reading a transformation from its matrix columns",
      "Scaling matrices: uniform and non-uniform",
      "Rotation matrices in R² and R³",
      "Reflection matrices and Householder reflections",
      "Projection matrices as geometric operations",
      "Shear transformations and their properties",
      "Composing transformations via matrix multiplication",
      "Determinant as area/volume scaling and orientation indicator"
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
        "name": "Transformations",
        "item": "https://www.learnmathclass.com/linear-algebra/transformations"
      },
      {
        "@type": "ListItem",
        "position": 4,
        "name": "Geometric Transformations",
        "item": "https://www.learnmathclass.com/linear-algebra/transformations/geometric"
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
    obj4Table,
    reflectionCases,
    obj10Table,
    transformationSignatures,
    faqQuestions,
    schemas,
    seoData: {
      title: "Geometric Transformations: Matrices in R² & R³ | Learn Math Class",
      description: "Geometric transformations in linear algebra: rotation, reflection, projection, shear, and scaling matrices in R² and R³. Determinant as geometric signature and SVD decomposition.",
      keywords: keyWords.join(", "),
      url: "/linear-algebra/transformations/geometric",
      name: "Geometric Transformations"
    },
  }
}   

}


export default function GeometricTransformationsPage({seoData, sectionsContent, introContent, obj4Table, reflectionCases, obj10Table, transformationSignatures, faqQuestions, schemas}) {

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
          <div key={'obj4-table'} style={tableWrapStyle}
               dangerouslySetInnerHTML={{ __html: obj4Table }} />,
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
            id="reflection-cases"
            title="Reflections in the plane"
            source="/linear-algebra/transformations/geometric"
          >
            <ObjectTypeProfile data={reflectionCases} theme="navy" variant="stack" />
          </DiagramFrame>,
          `The doubled angle in the general matrix is the detail worth pausing on. Rotating the mirror by $\\alpha$ moves the image by $2\\alpha$, because the incoming ray and the outgoing ray each make angle $\\alpha$ with the line — so the total turn is twice the tilt. It also explains why composing two reflections gives a rotation by twice the angle between their mirrors, which is the fastest route to that result.`,
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
          <div key={'obj10-table'} style={tableWrapStyle}
               dangerouslySetInnerHTML={{ __html: obj10Table }} />,
        ]
    },
    {
        id:'11',
        title:sectionsContent.obj11.title,
        link:sectionsContent.obj11.link,
        content:[
          sectionsContent.obj11.content,
          `Read the other way round, this is a recognition problem: given a matrix and no picture, which family is it? The two columns below answer that without any geometry — an identity the matrix satisfies, and the spectrum it must have. Both are checkable by computation, which matters because in dimensions above three the picture is unavailable anyway.`,
          <DiagramFrame
            key={'obj11-diagram'}
            id="transformation-signatures"
            title="Recognising a family from its matrix"
            source="/linear-algebra/transformations/geometric"
          >
            <IdentitySheet data={transformationSignatures} theme="navy" variant="ledger" />
          </DiagramFrame>,
          `Notice which pairs are hard to tell apart. Rotation and shear both have $\\det = 1$, so area alone will not separate them — the eigenvalues do, a complex pair against a defective repeated root. Reflection and projection are both symmetric, and there the determinant separates them: $-1$ against $0$, orientation reversed against information destroyed. No single test identifies a family; the identity and the spectrum together do.`,
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
   <h1 className='title' style={{marginTop:'0px',marginBottom:'10px'}}>Geometric Transformations</h1>
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