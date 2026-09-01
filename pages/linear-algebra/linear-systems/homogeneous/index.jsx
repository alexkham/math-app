// // tables-optimized: v4 | 2026-05-18 | 3 tables (obj2 aggregation, obj7 comparison, obj10 summary capstone)
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


// export async function getStaticProps(){

//   const keyWords = [
//   "homogeneous linear system",
//   "Ax = 0",
//   "trivial solution nontrivial",
//   "null space solution set",
//   "superposition principle",
//   "homogeneous vs non-homogeneous",
//   "nontrivial solutions rank",
//   "null space basis",
//   "parametric vector form homogeneous",
//   "eigenvalue homogeneous system",
//   "free variables nontrivial solutions",
//   "more unknowns than equations",
//   "nullity rank-nullity",
//   "linear independence homogeneous"
// ]

// const linkStyle = 'color: inherit; text-decoration: underline;'

// // ---------- TABLES ----------

// // obj2 — aggregation: conditions for nontrivial solutions, by matrix shape
// const obj2Table = `
// <table class="styled-table" style="border-collapse: collapse; width: 75%;margin:auto; background: white; box-shadow: 0 2px 10px rgba(0,0,0,0.1); border-radius: 8px; overflow: hidden; font-family: Arial, sans-serif;">
//   <thead>
//     <tr>
//       <th style="${tableHeaders.aggregation}">Setting</th>
//       <th style="${tableHeaders.aggregation}">Condition for nontrivial solutions to A x = 0</th>
//       <th style="${tableHeaders.aggregation}">Equivalent statements</th>
//     </tr>
//   </thead>
//   <tbody>
//     <tr style="background: #f8f9fa;">
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">General m × n matrix</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">rank(A) &lt; n</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">nullity(A) &gt; 0; at least one free variable in the echelon form of A</td>
//     </tr>
//     <tr>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Square n × n matrix</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">det(A) = 0</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">A is singular; A is not <a href="/linear-algebra/matrix/inverse" style="${linkStyle}">invertible</a>; columns are linearly dependent</td>
//     </tr>
//     <tr style="background: #f8f9fa;">
//       <td style="padding: 12px 15px; font-weight: bold; color: #06357a;">Wide matrix (n &gt; m)</td>
//       <td style="padding: 12px 15px; color: #34495e;">always — nontrivial solutions guaranteed</td>
//       <td style="padding: 12px 15px; color: #34495e;">rank(A) ≤ m &lt; n, so n − rank(A) ≥ n − m ≥ 1 free variables remain</td>
//     </tr>
//   </tbody>
// </table>
// `

// // obj7 — comparison: homogeneous vs non-homogeneous systems
// const obj7Table = `
// <table class="styled-table" style="border-collapse: collapse; width: 75%;margin:auto; background: white; box-shadow: 0 2px 10px rgba(0,0,0,0.1); border-radius: 8px; overflow: hidden; font-family: Arial, sans-serif;">
//   <thead>
//     <tr>
//       <th style="${tableHeaders.comparison}">Aspect</th>
//       <th style="${tableHeaders.comparison}">Homogeneous: A x = 0</th>
//       <th style="${tableHeaders.comparison}">Non-homogeneous: A x = b, b ≠ 0</th>
//     </tr>
//   </thead>
//   <tbody>
//     <tr style="background: #f8f9fa;">
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Always consistent?</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">yes — the trivial solution x = 0 always works</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">no — depends on whether b ∈ Col(A)</td>
//     </tr>
//     <tr>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Solution set</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">Null(A) — a subspace passing through the origin</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">x<sub>p</sub> + Null(A) — an affine flat shifted away from the origin</td>
//     </tr>
//     <tr style="background: #f8f9fa;">
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Superposition</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">closed: any linear combination of solutions is a solution</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">not closed: A(x<sub>1</sub> + x<sub>2</sub>) = 2b ≠ b</td>
//     </tr>
//     <tr>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">When uniquely solvable</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">always uniquely &quot;solvable&quot; — only the trivial solution when rank(A) = n</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">when rank(A) = rank([A | b]) = n</td>
//     </tr>
//     <tr style="background: #f8f9fa;">
//       <td style="padding: 12px 15px; font-weight: bold; color: #06357a;">Number of solutions</td>
//       <td style="padding: 12px 15px; color: #34495e;">just the trivial one, or infinitely many (never zero, never finite &gt; 1)</td>
//       <td style="padding: 12px 15px; color: #34495e;">zero, one, or infinitely many</td>
//     </tr>
//   </tbody>
// </table>
// `

// // obj10 — summary capstone: where homogeneous systems show up across linear algebra
// const summaryTable = `
// <table class="styled-table" style="border-collapse: collapse; width: 75%;margin:auto; background: white; box-shadow: 0 2px 10px rgba(0,0,0,0.1); border-radius: 8px; overflow: hidden; font-family: Arial, sans-serif;">
//   <thead>
//     <tr>
//       <th style="${tableHeaders.summary}">Where homogeneous systems appear</th>
//       <th style="${tableHeaders.summary}">The equation</th>
//       <th style="${tableHeaders.summary}">What its solutions represent</th>
//     </tr>
//   </thead>
//   <tbody>
//     <tr style="background: #f8f9fa;">
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;"><a href="/linear-algebra/vector-spaces/fundamental-spaces" style="${linkStyle}">Null space</a> of A</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">A x = 0</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">every vector in Null(A); basis vectors come from free variables</td>
//     </tr>
//     <tr>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;"><a href="/linear-algebra/vector-spaces/linear-independence" style="${linkStyle}">Testing linear independence</a></td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">A c = 0, with A = [v<sub>1</sub> ⋯ v<sub>k</sub>]</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">independent ⟺ only c = 0; nontrivial c gives an explicit dependence relation</td>
//     </tr>
//     <tr style="background: #f8f9fa;">
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;"><a href="/linear-algebra/eigen" style="${linkStyle}">Eigenvectors</a> for eigenvalue λ</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">(A − λI) x = 0</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">eigenvectors of A for λ; the eigenspace is Null(A − λI)</td>
//     </tr>
//     <tr>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Kernel of a linear transformation</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">T(x) = 0</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">inputs mapped to zero; ker(T) measures how far T is from injective</td>
//     </tr>
//     <tr style="background: #f8f9fa;">
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Free part of a <a href="/linear-algebra/linear-systems/solvability" style="${linkStyle}">non-homogeneous</a> system</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">x<sub>h</sub> in x = x<sub>p</sub> + x<sub>h</sub></td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">the freedom in A x = b; shape and dimension of its solution set</td>
//     </tr>
//     <tr>
//       <td style="padding: 12px 15px; font-weight: bold; color: #06357a;">Column dependence relations</td>
//       <td style="padding: 12px 15px; color: #34495e;">A c = 0 (nontrivial c)</td>
//       <td style="padding: 12px 15px; color: #34495e;">entries of c express one column of A as a combination of the others</td>
//     </tr>
//   </tbody>
// </table>
// `


// // const sectionsContent = {
// //   obj1: {
// //     title: `Definition`,
// //     content: `A homogeneous linear system is one where every equation has zero on the right-hand side:

// // $$A\\mathbf{x} = \\mathbf{0}$$

// // The augmented matrix is $[A \\mid \\mathbf{0}]$. Since the last column is all zeros, row operations on the augmented matrix never produce a contradictory row $[0 \\; \\cdots \\; 0 \\mid d]$ with $d \\neq 0$. A homogeneous system is always consistent.

// // The vector $\\mathbf{x} = \\mathbf{0}$ satisfies every equation — this is the trivial solution. It always exists. The central question for a homogeneous system is never "does a solution exist?" but "does a nontrivial solution exist?"`,
// //     before: ``,
// //     after: ``,
// //     link: ``,
// //   },
// //   obj2: {
// //     title: `When Do Nontrivial Solutions Exist?`,
// //     content: `Nontrivial solutions to $A\\mathbf{x} = \\mathbf{0}$ exist if and only if the [rank](!/linear-algebra/matrix/rank) of $A$ is less than $n$, the number of unknowns. When $\\text{rank}(A) < n$, at least one free variable appears in the [echelon form](!/linear-algebra/linear-systems/echelon-form), and that free variable parametrizes a family of nonzero solutions.

// // For a square $n \\times n$ matrix, nontrivial solutions exist if and only if $\\det(A) = 0$. A nonzero [determinant](!/linear-algebra/determinants) means full rank, which means no free variables, which means only the trivial solution.

// // One case is automatic: if the system has more unknowns than equations ($n > m$), nontrivial solutions always exist. The rank of an $m \\times n$ matrix cannot exceed $m$, and when $m < n$, the rank is strictly less than $n$. This guarantees at least $n - m$ free variables, producing an infinite family of nontrivial solutions. Fewer equations than unknowns always leaves room.`,
// //     before: ``,
// //     after: ``,
// //     link: ``,
// //   },
// //   obj3: {
// //     title: `The Solution Set Is the Null Space`,
// //     content: `The set of all solutions to $A\\mathbf{x} = \\mathbf{0}$ is the [null space](!/linear-algebra/vector-spaces/fundamental-spaces) of $A$:

// // $$\\text{Null}(A) = \\{\\mathbf{x} \\in \\mathbb{R}^n : A\\mathbf{x} = \\mathbf{0}\\}$$

// // The null space is a [subspace](!/linear-algebra/vector-spaces/subspaces) of $\\mathbb{R}^n$. It contains $\\mathbf{0}$, and it is closed under addition and scalar multiplication: if $A\\mathbf{u} = \\mathbf{0}$ and $A\\mathbf{v} = \\mathbf{0}$, then $A(\\mathbf{u} + \\mathbf{v}) = \\mathbf{0}$ and $A(c\\mathbf{u}) = \\mathbf{0}$.

// // The [dimension](!/linear-algebra/vector-spaces/dimension) of the null space is the nullity: $\\text{nullity}(A) = n - \\text{rank}(A)$. When the nullity is $0$, the null space is $\\{\\mathbf{0}\\}$ and only the trivial solution exists. When the nullity is $k > 0$, the null space is a $k$-dimensional subspace, and the solution set contains infinitely many vectors forming a $k$-dimensional flat through the origin.`,
// //     before: ``,
// //     after: ``,
// //     link: ``,
// //   },
// //   obj4: {
// //     title: `Finding the Null Space`,
// //     content: `The algorithm is a direct application of [Gaussian elimination](!/linear-algebra/linear-systems/gaussian-elimination). Row reduce $A$ to echelon form (reducing just $A$ — the zero augmented column adds nothing). Identify the pivot variables and the free variables. For each free variable, set it to $1$ with all other free variables at $0$, and solve for the pivot variables by back substitution. Each setting produces one basis vector for the null space.

// // ## Worked Example

// // $$A = \\begin{pmatrix} 1 & 2 & -1 & 0 & 3 \\\\ 2 & 4 & 0 & 2 & 8 \\\\ -1 & -2 & 2 & 1 & 0 \\end{pmatrix}$$

// // Row reduce:

// // $$\\xrightarrow{R_2 - 2R_1,\\; R_3 + R_1} \\begin{pmatrix} 1 & 2 & -1 & 0 & 3 \\\\ 0 & 0 & 2 & 2 & 2 \\\\ 0 & 0 & 1 & 1 & 3 \\end{pmatrix} \\xrightarrow{R_3 - \\frac{1}{2}R_2} \\begin{pmatrix} 1 & 2 & -1 & 0 & 3 \\\\ 0 & 0 & 2 & 2 & 2 \\\\ 0 & 0 & 0 & 0 & 2 \\end{pmatrix}$$

// // Pivots in columns $1$, $3$, $5$. Free variables: $x_2 = s$, $x_4 = t$. Row $3$: $2x_5 = 0 \\Rightarrow x_5 = 0$. Row $2$: $2x_3 + 2t = 0 \\Rightarrow x_3 = -t$. Row $1$: $x_1 + 2s + t + 0 = 0 \\Rightarrow x_1 = -2s - t$.

// // Setting $s = 1, t = 0$: $\\mathbf{v}_1 = (-2, 1, 0, 0, 0)$. Setting $s = 0, t = 1$: $\\mathbf{v}_2 = (-1, 0, -1, 1, 0)$.

// // The null space is $\\text{Span}\\{\\mathbf{v}_1, \\mathbf{v}_2\\}$, a two-dimensional subspace of $\\mathbb{R}^5$.`,
// //     before: ``,
// //     after: ``,
// //     link: ``,
// //   },
// //   obj5: {
// //     title: `Parametric Vector Form`,
// //     content: `The general solution to $A\\mathbf{x} = \\mathbf{0}$ is a linear combination of the null-space basis vectors:

// // $$\\mathbf{x} = t_1\\mathbf{v}_1 + t_2\\mathbf{v}_2 + \\cdots + t_k\\mathbf{v}_k$$

// // where $\\mathbf{v}_1, \\dots, \\mathbf{v}_k$ are the basis vectors found by the algorithm above and $t_1, \\dots, t_k$ are free parameters ranging over all real numbers. The number of parameters $k = n - \\text{rank}(A)$ is the nullity.

// // When $k = 0$, the only solution is $\\mathbf{x} = \\mathbf{0}$. When $k = 1$, the solutions form a line through the origin in $\\mathbb{R}^n$. When $k = 2$, a plane through the origin. In general, the solution set is a $k$-dimensional subspace passing through the origin.

// // There is no particular solution $\\mathbf{x}_p$ to add because the right-hand side is $\\mathbf{0}$ — the zero vector is itself the particular solution. The entire solution set is the null space, unshifted.`,
// //     before: ``,
// //     after: ``,
// //     link: ``,
// //   },
// //   obj6: {
// //     title: `The Superposition Principle`,
// //     content: `If $\\mathbf{x}_1$ and $\\mathbf{x}_2$ are solutions to $A\\mathbf{x} = \\mathbf{0}$, then any linear combination $c_1\\mathbf{x}_1 + c_2\\mathbf{x}_2$ is also a solution:

// // $$A(c_1\\mathbf{x}_1 + c_2\\mathbf{x}_2) = c_1 A\\mathbf{x}_1 + c_2 A\\mathbf{x}_2 = c_1\\mathbf{0} + c_2\\mathbf{0} = \\mathbf{0}$$

// // This is precisely the statement that the solution set is a [subspace](!/linear-algebra/vector-spaces/subspaces) — it is closed under addition and scalar multiplication. The superposition principle is the reason the general solution is a linear combination of basis vectors, and it is the reason the null space has the clean structure of a [vector space](!/linear-algebra/vector-spaces) rather than an arbitrary collection of points.

// // Superposition holds only for homogeneous systems. For a non-homogeneous system $A\\mathbf{x} = \\mathbf{b}$ with $\\mathbf{b} \\neq \\mathbf{0}$, the sum of two solutions is generally not a solution: $A(\\mathbf{x}_1 + \\mathbf{x}_2) = \\mathbf{b} + \\mathbf{b} = 2\\mathbf{b} \\neq \\mathbf{b}$.`,
// //     before: ``,
// //     after: ``,
// //     link: ``,
// //   },
// //   obj7: {
// //     title: `Homogeneous vs. Non-Homogeneous`,
// //     content: `The homogeneous system $A\\mathbf{x} = \\mathbf{0}$ and the non-homogeneous system $A\\mathbf{x} = \\mathbf{b}$ are deeply connected. If $\\mathbf{x}_p$ is any particular solution to $A\\mathbf{x} = \\mathbf{b}$, then every solution has the form

// // $$\\mathbf{x} = \\mathbf{x}_p + \\mathbf{x}_h$$

// // where $\\mathbf{x}_h \\in \\text{Null}(A)$ is a solution to the homogeneous system. The particular solution accounts for $\\mathbf{b}$; the null-space component accounts for the freedom.

// // This decomposition has two immediate consequences. If the null space is trivial ($\\text{nullity} = 0$), the non-homogeneous system has at most one solution — either $\\mathbf{x}_p$ alone or nothing. If the null space is nontrivial ($\\text{nullity} > 0$), then either $A\\mathbf{x} = \\mathbf{b}$ has no solution or it has infinitely many — there is no middle ground.

// // The [solution set](!/linear-algebra/linear-systems/solvability) of $A\\mathbf{x} = \\mathbf{b}$ is therefore a translated copy of the null space: the null space shifted by $\\mathbf{x}_p$. The homogeneous system determines the shape and dimension of the solution set; the particular solution determines its position.`,
// //     before: ``,
// //     after: ``,
// //     link: ``,
// //   },
// //   obj8: {
// //     title: `Homogeneous Systems and Linear Independence`,
// //     content: `Testing whether vectors $\\mathbf{v}_1, \\dots, \\mathbf{v}_k$ are [linearly independent](!/linear-algebra/vector-spaces/linear-independence) is equivalent to checking whether the homogeneous system $A\\mathbf{c} = \\mathbf{0}$ has only the trivial solution, where $A = [\\mathbf{v}_1 \\; \\mathbf{v}_2 \\; \\cdots \\; \\mathbf{v}_k]$.

// // The equation $c_1\\mathbf{v}_1 + c_2\\mathbf{v}_2 + \\cdots + c_k\\mathbf{v}_k = \\mathbf{0}$ is literally the system $A\\mathbf{c} = \\mathbf{0}$. If the null space of $A$ is trivial, the only solution is $\\mathbf{c} = \\mathbf{0}$ and the vectors are independent. If the null space is nontrivial, some nonzero $\\mathbf{c}$ satisfies the equation, providing an explicit dependence relation — the entries of $\\mathbf{c}$ are the coefficients that express one vector as a combination of the others.

// // This is the computational link between homogeneous systems and independence. Row reducing $A$ and checking for free variables is the standard algorithm for deciding independence, and the null-space basis vectors encode the dependence relations when they exist.`,
// //     before: ``,
// //     after: ``,
// //     link: ``,
// //   },
// //   obj9: {
// //     title: `The Eigenvalue Connection`,
// //     content: `The [eigenvalue](!/linear-algebra/eigen) equation $A\\mathbf{x} = \\lambda\\mathbf{x}$ can be rewritten as

// // $$(A - \\lambda I)\\mathbf{x} = \\mathbf{0}$$

// // This is a homogeneous system with coefficient matrix $A - \\lambda I$. Eigenvectors are precisely the nontrivial solutions. They exist when and only when $A - \\lambda I$ is singular — that is, when $\\det(A - \\lambda I) = 0$.

// // The values of $\\lambda$ satisfying this [determinant](!/linear-algebra/determinants) condition are the eigenvalues. For each eigenvalue $\\lambda$, the set of all solutions to $(A - \\lambda I)\\mathbf{x} = \\mathbf{0}$ is the eigenspace — the null space of $A - \\lambda I$. The dimension of this eigenspace is the nullity of $A - \\lambda I$, which equals $n - \\text{rank}(A - \\lambda I)$.

// // This rewriting connects homogeneous systems directly to spectral theory. Every eigenvalue problem is, at its core, a question about when a particular homogeneous system has nontrivial solutions. The machinery of row reduction, null spaces, and rank that governs homogeneous systems is the same machinery that computes eigenvectors and eigenspaces.`,
// //     before: ``,
// //     after: ``,
// //     link: ``,
// //   },
// //   obj10: {
// //     title: `Summary: Where Homogeneous Systems Appear`,
// //     content: `The homogeneous system A·x = 0 shows up far beyond its own statement: every test of linear independence, every eigenvector calculation, every analysis of a non-homogeneous solution set, and every kernel computation reduces to solving one. The table below collects each construction in which homogeneous systems play a role, alongside the specific equation involved and what its solutions represent in that context.`,
// //     before: ``,
// //     after: ``,
// //     link: ``,
// //   },
// // }


// // formulas-injected: v1 | 2026-06-16 | 2 callouts (obj2 underdetermined_homogeneous_has_nontrivial prose-insert, obj3 homogeneous_solution_space_dimension inline-promote)

// const sectionsContent = {
//   obj1: {
//     title: `Definition`,
//     content: `A homogeneous linear system is one where every equation has zero on the right-hand side:

// $$A\\mathbf{x} = \\mathbf{0}$$

// The augmented matrix is $[A \\mid \\mathbf{0}]$. Since the last column is all zeros, row operations on the augmented matrix never produce a contradictory row $[0 \\; \\cdots \\; 0 \\mid d]$ with $d \\neq 0$. A homogeneous system is always consistent.

// The vector $\\mathbf{x} = \\mathbf{0}$ satisfies every equation — this is the trivial solution. It always exists. The central question for a homogeneous system is never &quot;does a solution exist?&quot; but &quot;does a nontrivial solution exist?&quot;`,
//     before: ``,
//     after: ``,
//     link: ``,
//   },
//   obj2: {
//     title: `When Do Nontrivial Solutions Exist?`,
//     content: `Nontrivial solutions to $A\\mathbf{x} = \\mathbf{0}$ exist if and only if the [rank](!/linear-algebra/matrix/rank) of $A$ is less than $n$, the number of unknowns. When $\\text{rank}(A) < n$, at least one free variable appears in the [echelon form](!/linear-algebra/linear-systems/echelon-form), and that free variable parametrizes a family of nonzero solutions.

// For a square $n \\times n$ matrix, nontrivial solutions exist if and only if $\\det(A) = 0$. A nonzero [determinant](!/linear-algebra/determinants) means full rank, which means no free variables, which means only the trivial solution.

// One case is automatic: if the system has more unknowns than equations ($n > m$), nontrivial solutions always exist:

// @academic[formula_callout:underdetermined_homogeneous_has_nontrivial|Underdetermined Homogeneous Has Nontrivial|$$m < n \\Rightarrow A\\mathbf{x} = \\mathbf{0} \\text{ has nontrivial solutions}$$]@
// @academic[formulas_link:/linear-algebra/formulas#underdetermined_homogeneous_has_nontrivial]@

// The rank of an $m \\times n$ matrix cannot exceed $m$, and when $m < n$, the rank is strictly less than $n$. This guarantees at least $n - m$ free variables, producing an infinite family of nontrivial solutions. Fewer equations than unknowns always leaves room.`,
//     before: ``,
//     after: ``,
//     link: ``,
//   },
//   obj3: {
//     title: `The Solution Set Is the Null Space`,
//     content: `The set of all solutions to $A\\mathbf{x} = \\mathbf{0}$ is the [null space](!/linear-algebra/vector-spaces/fundamental-spaces) of $A$:

// $$\\text{Null}(A) = \\{\\mathbf{x} \\in \\mathbb{R}^n : A\\mathbf{x} = \\mathbf{0}\\}$$

// The null space is a [subspace](!/linear-algebra/vector-spaces/subspaces) of $\\mathbb{R}^n$. It contains $\\mathbf{0}$, and it is closed under addition and scalar multiplication: if $A\\mathbf{u} = \\mathbf{0}$ and $A\\mathbf{v} = \\mathbf{0}$, then $A(\\mathbf{u} + \\mathbf{v}) = \\mathbf{0}$ and $A(c\\mathbf{u}) = \\mathbf{0}$.

// The [dimension](!/linear-algebra/vector-spaces/dimension) of the null space is the nullity:

// @academic[formula_callout:homogeneous_solution_space_dimension|Homogeneous Solution Space Dimension|$$\\dim(\\text{Null}(A)) = n - \\text{rank}(A)$$]@
// @academic[formulas_link:/linear-algebra/formulas#homogeneous_solution_space_dimension]@

// When the nullity is $0$, the null space is $\\{\\mathbf{0}\\}$ and only the trivial solution exists. When the nullity is $k > 0$, the null space is a $k$-dimensional subspace, and the solution set contains infinitely many vectors forming a $k$-dimensional flat through the origin.`,
//     before: ``,
//     after: ``,
//     link: ``,
//   },
//   obj4: {
//     title: `Finding the Null Space`,
//     content: `The algorithm is a direct application of [Gaussian elimination](!/linear-algebra/linear-systems/gaussian-elimination). Row reduce $A$ to echelon form (reducing just $A$ — the zero augmented column adds nothing). Identify the pivot variables and the free variables. For each free variable, set it to $1$ with all other free variables at $0$, and solve for the pivot variables by back substitution. Each setting produces one basis vector for the null space.

// ## Worked Example

// $$A = \\begin{pmatrix} 1 & 2 & -1 & 0 & 3 \\\\ 2 & 4 & 0 & 2 & 8 \\\\ -1 & -2 & 2 & 1 & 0 \\end{pmatrix}$$

// Row reduce:

// $$\\xrightarrow{R_2 - 2R_1,\\; R_3 + R_1} \\begin{pmatrix} 1 & 2 & -1 & 0 & 3 \\\\ 0 & 0 & 2 & 2 & 2 \\\\ 0 & 0 & 1 & 1 & 3 \\end{pmatrix} \\xrightarrow{R_3 - \\frac{1}{2}R_2} \\begin{pmatrix} 1 & 2 & -1 & 0 & 3 \\\\ 0 & 0 & 2 & 2 & 2 \\\\ 0 & 0 & 0 & 0 & 2 \\end{pmatrix}$$

// Pivots in columns $1$, $3$, $5$. Free variables: $x_2 = s$, $x_4 = t$. Row $3$: $2x_5 = 0 \\Rightarrow x_5 = 0$. Row $2$: $2x_3 + 2t = 0 \\Rightarrow x_3 = -t$. Row $1$: $x_1 + 2s + t + 0 = 0 \\Rightarrow x_1 = -2s - t$.

// Setting $s = 1, t = 0$: $\\mathbf{v}_1 = (-2, 1, 0, 0, 0)$. Setting $s = 0, t = 1$: $\\mathbf{v}_2 = (-1, 0, -1, 1, 0)$.

// The null space is $\\text{Span}\\{\\mathbf{v}_1, \\mathbf{v}_2\\}$, a two-dimensional subspace of $\\mathbb{R}^5$.`,
//     before: ``,
//     after: ``,
//     link: ``,
//   },
//   obj5: {
//     title: `Parametric Vector Form`,
//     content: `The general solution to $A\\mathbf{x} = \\mathbf{0}$ is a linear combination of the null-space basis vectors:

// $$\\mathbf{x} = t_1\\mathbf{v}_1 + t_2\\mathbf{v}_2 + \\cdots + t_k\\mathbf{v}_k$$

// where $\\mathbf{v}_1, \\dots, \\mathbf{v}_k$ are the basis vectors found by the algorithm above and $t_1, \\dots, t_k$ are free parameters ranging over all real numbers. The number of parameters $k = n - \\text{rank}(A)$ is the nullity.

// When $k = 0$, the only solution is $\\mathbf{x} = \\mathbf{0}$. When $k = 1$, the solutions form a line through the origin in $\\mathbb{R}^n$. When $k = 2$, a plane through the origin. In general, the solution set is a $k$-dimensional subspace passing through the origin.

// There is no particular solution $\\mathbf{x}_p$ to add because the right-hand side is $\\mathbf{0}$ — the zero vector is itself the particular solution. The entire solution set is the null space, unshifted.`,
//     before: ``,
//     after: ``,
//     link: ``,
//   },
//   obj6: {
//     title: `The Superposition Principle`,
//     content: `If $\\mathbf{x}_1$ and $\\mathbf{x}_2$ are solutions to $A\\mathbf{x} = \\mathbf{0}$, then any linear combination $c_1\\mathbf{x}_1 + c_2\\mathbf{x}_2$ is also a solution:

// $$A(c_1\\mathbf{x}_1 + c_2\\mathbf{x}_2) = c_1 A\\mathbf{x}_1 + c_2 A\\mathbf{x}_2 = c_1\\mathbf{0} + c_2\\mathbf{0} = \\mathbf{0}$$

// This is precisely the statement that the solution set is a [subspace](!/linear-algebra/vector-spaces/subspaces) — it is closed under addition and scalar multiplication. The superposition principle is the reason the general solution is a linear combination of basis vectors, and it is the reason the null space has the clean structure of a [vector space](!/linear-algebra/vector-spaces) rather than an arbitrary collection of points.

// Superposition holds only for homogeneous systems. For a non-homogeneous system $A\\mathbf{x} = \\mathbf{b}$ with $\\mathbf{b} \\neq \\mathbf{0}$, the sum of two solutions is generally not a solution: $A(\\mathbf{x}_1 + \\mathbf{x}_2) = \\mathbf{b} + \\mathbf{b} = 2\\mathbf{b} \\neq \\mathbf{b}$.`,
//     before: ``,
//     after: ``,
//     link: ``,
//   },
//   obj7: {
//     title: `Homogeneous vs. Non-Homogeneous`,
//     content: `The homogeneous system $A\\mathbf{x} = \\mathbf{0}$ and the non-homogeneous system $A\\mathbf{x} = \\mathbf{b}$ are deeply connected. If $\\mathbf{x}_p$ is any particular solution to $A\\mathbf{x} = \\mathbf{b}$, then every solution has the form

// $$\\mathbf{x} = \\mathbf{x}_p + \\mathbf{x}_h$$

// where $\\mathbf{x}_h \\in \\text{Null}(A)$ is a solution to the homogeneous system. The particular solution accounts for $\\mathbf{b}$; the null-space component accounts for the freedom.

// This decomposition has two immediate consequences. If the null space is trivial ($\\text{nullity} = 0$), the non-homogeneous system has at most one solution — either $\\mathbf{x}_p$ alone or nothing. If the null space is nontrivial ($\\text{nullity} > 0$), then either $A\\mathbf{x} = \\mathbf{b}$ has no solution or it has infinitely many — there is no middle ground.

// The [solution set](!/linear-algebra/linear-systems/solvability) of $A\\mathbf{x} = \\mathbf{b}$ is therefore a translated copy of the null space: the null space shifted by $\\mathbf{x}_p$. The homogeneous system determines the shape and dimension of the solution set; the particular solution determines its position.`,
//     before: ``,
//     after: ``,
//     link: ``,
//   },
//   obj8: {
//     title: `Homogeneous Systems and Linear Independence`,
//     content: `Testing whether vectors $\\mathbf{v}_1, \\dots, \\mathbf{v}_k$ are [linearly independent](!/linear-algebra/vector-spaces/linear-independence) is equivalent to checking whether the homogeneous system $A\\mathbf{c} = \\mathbf{0}$ has only the trivial solution, where $A = [\\mathbf{v}_1 \\; \\mathbf{v}_2 \\; \\cdots \\; \\mathbf{v}_k]$.

// The equation $c_1\\mathbf{v}_1 + c_2\\mathbf{v}_2 + \\cdots + c_k\\mathbf{v}_k = \\mathbf{0}$ is literally the system $A\\mathbf{c} = \\mathbf{0}$. If the null space of $A$ is trivial, the only solution is $\\mathbf{c} = \\mathbf{0}$ and the vectors are independent. If the null space is nontrivial, some nonzero $\\mathbf{c}$ satisfies the equation, providing an explicit dependence relation — the entries of $\\mathbf{c}$ are the coefficients that express one vector as a combination of the others.

// This is the computational link between homogeneous systems and independence. Row reducing $A$ and checking for free variables is the standard algorithm for deciding independence, and the null-space basis vectors encode the dependence relations when they exist.`,
//     before: ``,
//     after: ``,
//     link: ``,
//   },
//   obj9: {
//     title: `The Eigenvalue Connection`,
//     content: `The [eigenvalue](!/linear-algebra/eigen) equation $A\\mathbf{x} = \\lambda\\mathbf{x}$ can be rewritten as

// $$(A - \\lambda I)\\mathbf{x} = \\mathbf{0}$$

// This is a homogeneous system with coefficient matrix $A - \\lambda I$. Eigenvectors are precisely the nontrivial solutions. They exist when and only when $A - \\lambda I$ is singular — that is, when $\\det(A - \\lambda I) = 0$.

// The values of $\\lambda$ satisfying this [determinant](!/linear-algebra/determinants) condition are the eigenvalues. For each eigenvalue $\\lambda$, the set of all solutions to $(A - \\lambda I)\\mathbf{x} = \\mathbf{0}$ is the eigenspace — the null space of $A - \\lambda I$. The dimension of this eigenspace is the nullity of $A - \\lambda I$, which equals $n - \\text{rank}(A - \\lambda I)$.

// This rewriting connects homogeneous systems directly to spectral theory. Every eigenvalue problem is, at its core, a question about when a particular homogeneous system has nontrivial solutions. The machinery of row reduction, null spaces, and rank that governs homogeneous systems is the same machinery that computes eigenvectors and eigenspaces.`,
//     before: ``,
//     after: ``,
//     link: ``,
//   },
//   obj10: {
//     title: `Summary: Where Homogeneous Systems Appear`,
//     content: `The homogeneous system A·x = 0 shows up far beyond its own statement: every test of linear independence, every eigenvector calculation, every analysis of a non-homogeneous solution set, and every kernel computation reduces to solving one. The table below collects each construction in which homogeneous systems play a role, alongside the specific equation involved and what its solutions represent in that context.`,
//     before: ``,
//     after: ``,
//     link: ``,
//   },
// }


//  const introContent = {
//   title: `Systems with Zero Right-Hand Side`,
//   content: `A homogeneous system Ax = 0 always has the trivial solution x = 0. The real question is whether nontrivial solutions exist — and when they do, the solution set is a subspace of Rⁿ whose structure is governed entirely by the rank of the coefficient matrix.`,
// }


// const faqQuestions = {
//   obj1: {
//     question: "What is a homogeneous linear system?",
//     answer: "A homogeneous system has the form Ax = 0, where every equation has zero on the right-hand side. It is always consistent because x = 0 (the trivial solution) always works. The key question is whether nontrivial (nonzero) solutions exist.",
//     sectionId: "1"
//   },
//   obj2: {
//     question: "When does a homogeneous system have nontrivial solutions?",
//     answer: "Nontrivial solutions exist if and only if rank(A) < n (the number of unknowns). For square matrices, this is equivalent to det(A) = 0. If there are more unknowns than equations (n > m), nontrivial solutions are guaranteed because the rank cannot reach n.",
//     sectionId: "2"
//   },
//   obj3: {
//     question: "What is the superposition principle?",
//     answer: "If x₁ and x₂ are solutions to Ax = 0, then any linear combination c₁x₁ + c₂x₂ is also a solution. This means the solution set is a subspace — the null space. Superposition holds only for homogeneous systems; for Ax = b with b ≠ 0, the sum of two solutions is generally not a solution.",
//     sectionId: "6"
//   },
//   obj4: {
//     question: "How are homogeneous and non-homogeneous systems related?",
//     answer: "Every solution to Ax = b has the form x = xₚ + xₕ, where xₚ is one particular solution and xₕ is any solution to Ax = 0. The homogeneous system determines the shape and dimension of the solution set; the particular solution determines its position.",
//     sectionId: "7"
//   },
//   obj5: {
//     question: "How do homogeneous systems connect to eigenvalues?",
//     answer: "The eigenvalue equation Ax = λx rewrites as (A − λI)x = 0, a homogeneous system. Eigenvectors are its nontrivial solutions. Eigenvalues are the values of λ for which det(A − λI) = 0, making the system have nontrivial solutions. The eigenspace is the null space of A − λI.",
//     sectionId: "9"
//   }
// }


// const schemas = {
//   learningResource: {
//     "@context": "https://schema.org",
//     "@type": "LearningResource",
//     "name": "Homogeneous Systems of Equations",
//     "description": "Homogeneous linear systems Ax = 0: trivial and nontrivial solutions, null space as solution set, superposition principle, connection to non-homogeneous systems, independence, and eigenvalues.",
//     "url": "https://www.learnmathclass.com/linear-algebra/linear-systems/homogeneous",
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
//       "name": "Homogeneous Linear Systems"
//     },
//     "teaches": [
//       "Definition and always-consistent property",
//       "Conditions for nontrivial solutions via rank",
//       "Solution set equals the null space",
//       "Finding null space basis by row reduction",
//       "Parametric vector form of solutions",
//       "Superposition principle for homogeneous systems",
//       "Relationship to non-homogeneous systems via x = xₚ + xₕ",
//       "Connection to linear independence testing",
//       "Eigenvalue problems as homogeneous systems"
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
//         "name": "Homogeneous Systems",
//         "item": "https://www.learnmathclass.com/linear-algebra/linear-systems/homogeneous"
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
// //         url: "/linear-algebra/linear-systems/homogeneous",
// //          name: "name"
// //       },
        
// //        }
// //     }

// return {
//   props:{
//     sectionsContent,
//     introContent,
//     obj2Table,
//     obj7Table,
//     summaryTable,
//     faqQuestions,
//     schemas,
//     seoData: {
//       title: "Homogeneous Systems: Ax = 0 & Null Space | Learn Math Class",
//       description: "Homogeneous linear systems Ax = 0: trivial and nontrivial solutions, null space as solution set, superposition principle, connection to non-homogeneous systems, independence, and eigenvalues.",
//       keywords: keyWords.join(", "),
//       url: "/linear-algebra/linear-systems/homogeneous",
//       name: "Homogeneous Systems of Equations"
//     },
//   }
// }
//    }

// // export default function PageTemplate({seoData,sectionsContent , introContent}) {

// export default function HomogeneousSystemsPage({
//   seoData,
//   sectionsContent,
//   introContent,
//   obj2Table,
//   obj7Table,
//   summaryTable,
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
//             key={'summary-table'}
//             style={tableWrapStyle}
//             dangerouslySetInnerHTML={{ __html: summaryTable }}
//           />,
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
//    <h1 className='title' style={{marginTop:'0px',marginBottom:'10px'}}>Homogeneous Systems of Equations</h1>
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



// tables-optimized: v4 | 2026-05-18 | 3 tables (obj2 aggregation, obj7 comparison, obj10 summary capstone)
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
import DiagramFrame from '@/app/components/infographics/DiagramsFrame'


export async function getStaticProps(){

  const keyWords = [
  "homogeneous linear system",
  "Ax = 0",
  "trivial solution nontrivial",
  "null space solution set",
  "superposition principle",
  "homogeneous vs non-homogeneous",
  "nontrivial solutions rank",
  "null space basis",
  "parametric vector form homogeneous",
  "eigenvalue homogeneous system",
  "free variables nontrivial solutions",
  "more unknowns than equations",
  "nullity rank-nullity",
  "linear independence homogeneous"
]

const linkStyle = 'color: inherit; text-decoration: underline;'

// ---------- TABLES ----------

// obj2 — aggregation: conditions for nontrivial solutions, by matrix shape
const obj2Table = `
<table class="styled-table" style="border-collapse: collapse; width: 75%;margin:auto; background: white; box-shadow: 0 2px 10px rgba(0,0,0,0.1); border-radius: 8px; overflow: hidden; font-family: Arial, sans-serif;">
  <thead>
    <tr>
      <th style="${tableHeaders.aggregation}">Setting</th>
      <th style="${tableHeaders.aggregation}">Condition for nontrivial solutions to A x = 0</th>
      <th style="${tableHeaders.aggregation}">Equivalent statements</th>
    </tr>
  </thead>
  <tbody>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">General m × n matrix</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">rank(A) &lt; n</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">nullity(A) &gt; 0; at least one free variable in the echelon form of A</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Square n × n matrix</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">det(A) = 0</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">A is singular; A is not <a href="/linear-algebra/matrix/inverse" style="${linkStyle}">invertible</a>; columns are linearly dependent</td>
    </tr>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; font-weight: bold; color: #06357a;">Wide matrix (n &gt; m)</td>
      <td style="padding: 12px 15px; color: #34495e;">always — nontrivial solutions guaranteed</td>
      <td style="padding: 12px 15px; color: #34495e;">rank(A) ≤ m &lt; n, so n − rank(A) ≥ n − m ≥ 1 free variables remain</td>
    </tr>
  </tbody>
</table>
`

// obj7 — comparison: homogeneous vs non-homogeneous systems
const obj7Table = `
<table class="styled-table" style="border-collapse: collapse; width: 75%;margin:auto; background: white; box-shadow: 0 2px 10px rgba(0,0,0,0.1); border-radius: 8px; overflow: hidden; font-family: Arial, sans-serif;">
  <thead>
    <tr>
      <th style="${tableHeaders.comparison}">Aspect</th>
      <th style="${tableHeaders.comparison}">Homogeneous: A x = 0</th>
      <th style="${tableHeaders.comparison}">Non-homogeneous: A x = b, b ≠ 0</th>
    </tr>
  </thead>
  <tbody>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Always consistent?</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">yes — the trivial solution x = 0 always works</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">no — depends on whether b ∈ Col(A)</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Solution set</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">Null(A) — a subspace passing through the origin</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">x<sub>p</sub> + Null(A) — an affine flat shifted away from the origin</td>
    </tr>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Superposition</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">closed: any linear combination of solutions is a solution</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">not closed: A(x<sub>1</sub> + x<sub>2</sub>) = 2b ≠ b</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">When uniquely solvable</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">always uniquely &quot;solvable&quot; — only the trivial solution when rank(A) = n</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">when rank(A) = rank([A | b]) = n</td>
    </tr>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; font-weight: bold; color: #06357a;">Number of solutions</td>
      <td style="padding: 12px 15px; color: #34495e;">just the trivial one, or infinitely many (never zero, never finite &gt; 1)</td>
      <td style="padding: 12px 15px; color: #34495e;">zero, one, or infinitely many</td>
    </tr>
  </tbody>
</table>
`

// obj10 — summary capstone: where homogeneous systems show up across linear algebra
// obj10 — the same equation, six places it turns up
const homogeneousAppearances = {
  kicker: 'Linear systems \u00B7 homogeneous',
  title: 'Where $A\\mathbf{x} = \\mathbf{0}$ turns up',
  tallyLabel: 'settings',
  intro: 'Six questions from six different chapters, all of which reduce to solving one homogeneous system. What differs is only what the null space is being called and what its being trivial is taken to mean.',
  footnote: 'One computation serves all six: reduce, identify the free variables, read off a basis. That is why the homogeneous case is worth treating first \u2014 the non-homogeneous system, the independence test, the eigenvector calculation and the kernel are the same reduction asked about differently.',
  groups: [
    {
      heading: 'The system itself',
      identities: [
        {
          name: 'Solution set',
          anchor: '#3',
          formula: '$A\\mathbf{x} = \\mathbf{0}$',
          condition: 'always consistent \u2014 $\\mathbf{x} = \\mathbf{0}$ works',
          key: true,
          note: 'The solution set is $\\operatorname{Null}(A)$, a [subspace](!/linear-algebra/vector-spaces/subspaces) rather than merely a set: closed under addition and scaling, which is the [superposition principle](#6). One basis vector per free variable, so the dimension is $n - \\operatorname{rank}(A)$.',
        },
        {
          name: 'Non-homogeneous solution set',
          anchor: '#7',
          formula: '$\\mathbf{x} = \\mathbf{x}_p + \\operatorname{Null}(A)$',
          condition: 'when $A\\mathbf{x} = \\mathbf{b}$ is consistent',
          note: 'The homogeneous solution supplies the entire shape and size of the general solution; the particular solution only translates it off the origin. This is why the two systems are never solved independently \u2014 the same reduction gives both.',
        },
      ],
    },
    {
      heading: 'The same equation, asked differently',
      identities: [
        {
          name: 'Linear independence',
          anchor: '#8',
          formula: '$A\\mathbf{c} = \\mathbf{0}$, columns $= \\mathbf{v}_i$',
          condition: 'independent $\\iff$ only $\\mathbf{c} = \\mathbf{0}$',
          key: true,
          note: 'Independence is the statement that this system has only the trivial solution. When it does not, the nontrivial $\\mathbf{c}$ is not merely evidence of dependence \u2014 its entries are the coefficients of an explicit [dependence relation](!/linear-algebra/vector-spaces/linear-independence) among the vectors.',
        },
        {
          name: 'Column dependence relations',
          anchor: '#8',
          formula: 'nontrivial $\\mathbf{c}$ with $A\\mathbf{c} = \\mathbf{0}$',
          condition: 'one relation per null space basis vector',
          note: 'Read the same solution the other way round: each entry of $\\mathbf{c}$ says how much of the corresponding column enters the relation, so one column is written as a combination of the others. Which columns are redundant is exactly which are non-pivot.',
        },
        {
          name: 'Eigenvectors',
          anchor: '#9',
          formula: '$(A - \\lambda I)\\mathbf{x} = \\mathbf{0}$',
          condition: '$\\lambda$ already known',
          note: 'The eigenspace for $\\lambda$ is $\\operatorname{Null}(A - \\lambda I)$, so finding [eigenvectors](!/linear-algebra/eigen) is solving a homogeneous system. A nontrivial solution must exist, which is precisely why $\\det(A - \\lambda I) = 0$ is the condition defining $\\lambda$ in the first place.',
        },
        {
          name: 'Kernel of a transformation',
          anchor: '#3',
          formula: '$T(\\mathbf{x}) = \\mathbf{0}$',
          condition: '$\\ker(T) = \\operatorname{Null}(A)$ for the matrix of $T$',
          note: 'The abstract statement of the same thing. $T$ is injective exactly when the kernel is trivial \u2014 so the size of the null space measures how far a [transformation](!/linear-algebra/transformations/image-kernel) is from being one-to-one.',
        },
      ],
    },
  ],
}


// const sectionsContent = {
//   obj1: {
//     title: `Definition`,
//     content: `A homogeneous linear system is one where every equation has zero on the right-hand side:

// $$A\\mathbf{x} = \\mathbf{0}$$

// The augmented matrix is $[A \\mid \\mathbf{0}]$. Since the last column is all zeros, row operations on the augmented matrix never produce a contradictory row $[0 \\; \\cdots \\; 0 \\mid d]$ with $d \\neq 0$. A homogeneous system is always consistent.

// The vector $\\mathbf{x} = \\mathbf{0}$ satisfies every equation — this is the trivial solution. It always exists. The central question for a homogeneous system is never "does a solution exist?" but "does a nontrivial solution exist?"`,
//     before: ``,
//     after: ``,
//     link: ``,
//   },
//   obj2: {
//     title: `When Do Nontrivial Solutions Exist?`,
//     content: `Nontrivial solutions to $A\\mathbf{x} = \\mathbf{0}$ exist if and only if the [rank](!/linear-algebra/matrix/rank) of $A$ is less than $n$, the number of unknowns. When $\\text{rank}(A) < n$, at least one free variable appears in the [echelon form](!/linear-algebra/linear-systems/echelon-form), and that free variable parametrizes a family of nonzero solutions.

// For a square $n \\times n$ matrix, nontrivial solutions exist if and only if $\\det(A) = 0$. A nonzero [determinant](!/linear-algebra/determinants) means full rank, which means no free variables, which means only the trivial solution.

// One case is automatic: if the system has more unknowns than equations ($n > m$), nontrivial solutions always exist. The rank of an $m \\times n$ matrix cannot exceed $m$, and when $m < n$, the rank is strictly less than $n$. This guarantees at least $n - m$ free variables, producing an infinite family of nontrivial solutions. Fewer equations than unknowns always leaves room.`,
//     before: ``,
//     after: ``,
//     link: ``,
//   },
//   obj3: {
//     title: `The Solution Set Is the Null Space`,
//     content: `The set of all solutions to $A\\mathbf{x} = \\mathbf{0}$ is the [null space](!/linear-algebra/vector-spaces/fundamental-spaces) of $A$:

// $$\\text{Null}(A) = \\{\\mathbf{x} \\in \\mathbb{R}^n : A\\mathbf{x} = \\mathbf{0}\\}$$

// The null space is a [subspace](!/linear-algebra/vector-spaces/subspaces) of $\\mathbb{R}^n$. It contains $\\mathbf{0}$, and it is closed under addition and scalar multiplication: if $A\\mathbf{u} = \\mathbf{0}$ and $A\\mathbf{v} = \\mathbf{0}$, then $A(\\mathbf{u} + \\mathbf{v}) = \\mathbf{0}$ and $A(c\\mathbf{u}) = \\mathbf{0}$.

// The [dimension](!/linear-algebra/vector-spaces/dimension) of the null space is the nullity: $\\text{nullity}(A) = n - \\text{rank}(A)$. When the nullity is $0$, the null space is $\\{\\mathbf{0}\\}$ and only the trivial solution exists. When the nullity is $k > 0$, the null space is a $k$-dimensional subspace, and the solution set contains infinitely many vectors forming a $k$-dimensional flat through the origin.`,
//     before: ``,
//     after: ``,
//     link: ``,
//   },
//   obj4: {
//     title: `Finding the Null Space`,
//     content: `The algorithm is a direct application of [Gaussian elimination](!/linear-algebra/linear-systems/gaussian-elimination). Row reduce $A$ to echelon form (reducing just $A$ — the zero augmented column adds nothing). Identify the pivot variables and the free variables. For each free variable, set it to $1$ with all other free variables at $0$, and solve for the pivot variables by back substitution. Each setting produces one basis vector for the null space.

// ## Worked Example

// $$A = \\begin{pmatrix} 1 & 2 & -1 & 0 & 3 \\\\ 2 & 4 & 0 & 2 & 8 \\\\ -1 & -2 & 2 & 1 & 0 \\end{pmatrix}$$

// Row reduce:

// $$\\xrightarrow{R_2 - 2R_1,\\; R_3 + R_1} \\begin{pmatrix} 1 & 2 & -1 & 0 & 3 \\\\ 0 & 0 & 2 & 2 & 2 \\\\ 0 & 0 & 1 & 1 & 3 \\end{pmatrix} \\xrightarrow{R_3 - \\frac{1}{2}R_2} \\begin{pmatrix} 1 & 2 & -1 & 0 & 3 \\\\ 0 & 0 & 2 & 2 & 2 \\\\ 0 & 0 & 0 & 0 & 2 \\end{pmatrix}$$

// Pivots in columns $1$, $3$, $5$. Free variables: $x_2 = s$, $x_4 = t$. Row $3$: $2x_5 = 0 \\Rightarrow x_5 = 0$. Row $2$: $2x_3 + 2t = 0 \\Rightarrow x_3 = -t$. Row $1$: $x_1 + 2s + t + 0 = 0 \\Rightarrow x_1 = -2s - t$.

// Setting $s = 1, t = 0$: $\\mathbf{v}_1 = (-2, 1, 0, 0, 0)$. Setting $s = 0, t = 1$: $\\mathbf{v}_2 = (-1, 0, -1, 1, 0)$.

// The null space is $\\text{Span}\\{\\mathbf{v}_1, \\mathbf{v}_2\\}$, a two-dimensional subspace of $\\mathbb{R}^5$.`,
//     before: ``,
//     after: ``,
//     link: ``,
//   },
//   obj5: {
//     title: `Parametric Vector Form`,
//     content: `The general solution to $A\\mathbf{x} = \\mathbf{0}$ is a linear combination of the null-space basis vectors:

// $$\\mathbf{x} = t_1\\mathbf{v}_1 + t_2\\mathbf{v}_2 + \\cdots + t_k\\mathbf{v}_k$$

// where $\\mathbf{v}_1, \\dots, \\mathbf{v}_k$ are the basis vectors found by the algorithm above and $t_1, \\dots, t_k$ are free parameters ranging over all real numbers. The number of parameters $k = n - \\text{rank}(A)$ is the nullity.

// When $k = 0$, the only solution is $\\mathbf{x} = \\mathbf{0}$. When $k = 1$, the solutions form a line through the origin in $\\mathbb{R}^n$. When $k = 2$, a plane through the origin. In general, the solution set is a $k$-dimensional subspace passing through the origin.

// There is no particular solution $\\mathbf{x}_p$ to add because the right-hand side is $\\mathbf{0}$ — the zero vector is itself the particular solution. The entire solution set is the null space, unshifted.`,
//     before: ``,
//     after: ``,
//     link: ``,
//   },
//   obj6: {
//     title: `The Superposition Principle`,
//     content: `If $\\mathbf{x}_1$ and $\\mathbf{x}_2$ are solutions to $A\\mathbf{x} = \\mathbf{0}$, then any linear combination $c_1\\mathbf{x}_1 + c_2\\mathbf{x}_2$ is also a solution:

// $$A(c_1\\mathbf{x}_1 + c_2\\mathbf{x}_2) = c_1 A\\mathbf{x}_1 + c_2 A\\mathbf{x}_2 = c_1\\mathbf{0} + c_2\\mathbf{0} = \\mathbf{0}$$

// This is precisely the statement that the solution set is a [subspace](!/linear-algebra/vector-spaces/subspaces) — it is closed under addition and scalar multiplication. The superposition principle is the reason the general solution is a linear combination of basis vectors, and it is the reason the null space has the clean structure of a [vector space](!/linear-algebra/vector-spaces) rather than an arbitrary collection of points.

// Superposition holds only for homogeneous systems. For a non-homogeneous system $A\\mathbf{x} = \\mathbf{b}$ with $\\mathbf{b} \\neq \\mathbf{0}$, the sum of two solutions is generally not a solution: $A(\\mathbf{x}_1 + \\mathbf{x}_2) = \\mathbf{b} + \\mathbf{b} = 2\\mathbf{b} \\neq \\mathbf{b}$.`,
//     before: ``,
//     after: ``,
//     link: ``,
//   },
//   obj7: {
//     title: `Homogeneous vs. Non-Homogeneous`,
//     content: `The homogeneous system $A\\mathbf{x} = \\mathbf{0}$ and the non-homogeneous system $A\\mathbf{x} = \\mathbf{b}$ are deeply connected. If $\\mathbf{x}_p$ is any particular solution to $A\\mathbf{x} = \\mathbf{b}$, then every solution has the form

// $$\\mathbf{x} = \\mathbf{x}_p + \\mathbf{x}_h$$

// where $\\mathbf{x}_h \\in \\text{Null}(A)$ is a solution to the homogeneous system. The particular solution accounts for $\\mathbf{b}$; the null-space component accounts for the freedom.

// This decomposition has two immediate consequences. If the null space is trivial ($\\text{nullity} = 0$), the non-homogeneous system has at most one solution — either $\\mathbf{x}_p$ alone or nothing. If the null space is nontrivial ($\\text{nullity} > 0$), then either $A\\mathbf{x} = \\mathbf{b}$ has no solution or it has infinitely many — there is no middle ground.

// The [solution set](!/linear-algebra/linear-systems/solvability) of $A\\mathbf{x} = \\mathbf{b}$ is therefore a translated copy of the null space: the null space shifted by $\\mathbf{x}_p$. The homogeneous system determines the shape and dimension of the solution set; the particular solution determines its position.`,
//     before: ``,
//     after: ``,
//     link: ``,
//   },
//   obj8: {
//     title: `Homogeneous Systems and Linear Independence`,
//     content: `Testing whether vectors $\\mathbf{v}_1, \\dots, \\mathbf{v}_k$ are [linearly independent](!/linear-algebra/vector-spaces/linear-independence) is equivalent to checking whether the homogeneous system $A\\mathbf{c} = \\mathbf{0}$ has only the trivial solution, where $A = [\\mathbf{v}_1 \\; \\mathbf{v}_2 \\; \\cdots \\; \\mathbf{v}_k]$.

// The equation $c_1\\mathbf{v}_1 + c_2\\mathbf{v}_2 + \\cdots + c_k\\mathbf{v}_k = \\mathbf{0}$ is literally the system $A\\mathbf{c} = \\mathbf{0}$. If the null space of $A$ is trivial, the only solution is $\\mathbf{c} = \\mathbf{0}$ and the vectors are independent. If the null space is nontrivial, some nonzero $\\mathbf{c}$ satisfies the equation, providing an explicit dependence relation — the entries of $\\mathbf{c}$ are the coefficients that express one vector as a combination of the others.

// This is the computational link between homogeneous systems and independence. Row reducing $A$ and checking for free variables is the standard algorithm for deciding independence, and the null-space basis vectors encode the dependence relations when they exist.`,
//     before: ``,
//     after: ``,
//     link: ``,
//   },
//   obj9: {
//     title: `The Eigenvalue Connection`,
//     content: `The [eigenvalue](!/linear-algebra/eigen) equation $A\\mathbf{x} = \\lambda\\mathbf{x}$ can be rewritten as

// $$(A - \\lambda I)\\mathbf{x} = \\mathbf{0}$$

// This is a homogeneous system with coefficient matrix $A - \\lambda I$. Eigenvectors are precisely the nontrivial solutions. They exist when and only when $A - \\lambda I$ is singular — that is, when $\\det(A - \\lambda I) = 0$.

// The values of $\\lambda$ satisfying this [determinant](!/linear-algebra/determinants) condition are the eigenvalues. For each eigenvalue $\\lambda$, the set of all solutions to $(A - \\lambda I)\\mathbf{x} = \\mathbf{0}$ is the eigenspace — the null space of $A - \\lambda I$. The dimension of this eigenspace is the nullity of $A - \\lambda I$, which equals $n - \\text{rank}(A - \\lambda I)$.

// This rewriting connects homogeneous systems directly to spectral theory. Every eigenvalue problem is, at its core, a question about when a particular homogeneous system has nontrivial solutions. The machinery of row reduction, null spaces, and rank that governs homogeneous systems is the same machinery that computes eigenvectors and eigenspaces.`,
//     before: ``,
//     after: ``,
//     link: ``,
//   },
//   obj10: {
//     title: `Summary: Where Homogeneous Systems Appear`,
//     content: `The homogeneous system A·x = 0 shows up far beyond its own statement: every test of linear independence, every eigenvector calculation, every analysis of a non-homogeneous solution set, and every kernel computation reduces to solving one. The table below collects each construction in which homogeneous systems play a role, alongside the specific equation involved and what its solutions represent in that context.`,
//     before: ``,
//     after: ``,
//     link: ``,
//   },
// }


// formulas-injected: v1 | 2026-06-16 | 2 callouts (obj2 underdetermined_homogeneous_has_nontrivial prose-insert, obj3 homogeneous_solution_space_dimension inline-promote)

const sectionsContent = {
  obj1: {
    title: `Definition`,
    content: `A homogeneous linear system is one where every equation has zero on the right-hand side:

$$A\\mathbf{x} = \\mathbf{0}$$

The augmented matrix is $[A \\mid \\mathbf{0}]$. Since the last column is all zeros, row operations on the augmented matrix never produce a contradictory row $[0 \\; \\cdots \\; 0 \\mid d]$ with $d \\neq 0$. A homogeneous system is always consistent.

The vector $\\mathbf{x} = \\mathbf{0}$ satisfies every equation — this is the trivial solution. It always exists. The central question for a homogeneous system is never &quot;does a solution exist?&quot; but &quot;does a nontrivial solution exist?&quot;`,
    before: ``,
    after: ``,
    link: ``,
  },

  notation: {
    title: `Homogeneous System Notation`,
    lead: `One boldface character carries the whole definition: the right-hand side is a vector of zeros, not the number zero. From that follow a solution that is guaranteed rather than sought, and a vocabulary that names the two cases a homogeneous system can be in. All of it is catalogued among the [linear algebra symbols](!/math-symbols/linear-algebra).`,
    inherited: `The augmented bar $[A \\mid \\mathbf{0}]$ and the row-operation conventions come from [Gaussian elimination notation](!/linear-algebra/linear-systems/gaussian-elimination#notation); $\\operatorname{Nul}(A)$ from [fundamental-space notation](!/linear-algebra/vector-spaces/fundamental-spaces#notation); $\\operatorname{rank}$ and the free-variable count from [rank](!/linear-algebra/matrix/rank#notation) and [echelon form notation](!/linear-algebra/linear-systems/echelon-form#notation); $\\det$ from [determinant notation](!/linear-algebra/determinants/properties#notation).`,
    entries: [
      {
        id: 'bold-zero',
        tex: `$A\\mathbf{x} = \\mathbf{0}$`,
        read: `A x equals the zero vector`,
        means: `The boldface is the definition, not styling: $\\mathbf{0}$ is a **column of** $m$ **zeros**, while a plain $0$ is a single number. Writing $A\\mathbf{x} = 0$ equates a vector with a scalar — the shapes do not match, and the equation only typechecks once the right side is bold.`,
        alsoWritten: `$\\vec{0}$ where the site's [arrow convention](!/linear-algebra/vectors/basic-operations#notation) is in force, and $\\mathbf{0}_m$ when the length needs stating; handwriting has no bold, so an underline or an arrow does the work at the board — which is exactly where the scalar/vector slip happens.`,
        confusedWith: `The zero **matrix** $O$. Same idea, different shape: $O$ is a rectangular array of zeros, $\\mathbf{0}$ a single column, and [matrix operation notation](!/linear-algebra/matrix/operations#notation) reserves the two letters separately for that reason.`,
      },
      {
        id: 'trivial-solution',
        tex: `$\\mathbf{x} = \\mathbf{0}$`,
        read: `the trivial solution`,
        means: `A named solution rather than a described one: $\\mathbf{x} = \\mathbf{0}$ satisfies $A\\mathbf{x} = \\mathbf{0}$ for every $A$, so it is **guaranteed, never discovered**. As **Definition** above puts it, the question for a homogeneous system is never whether a solution exists but whether another one does.`,
        cases: `"Nontrivial" is the entire vocabulary for the interesting case, and it is a claim about **existence of a second solution**, not about complexity — a nontrivial solution can be as simple as $(1, 0, 0)$. Its presence is equivalent to a free column, to $\\operatorname{rank}(A) < n$, and for square $A$ to $\\det(A) = 0$.`,
        confusedWith: `"Trivial" as a comment on difficulty. Here it is a technical label for one specific vector, not an editorial judgement — and a system whose only solution is trivial is the more constrained, often harder case.`,
      },
      {
        id: 'solution-set-is-a-space',
        tex: `$\\{\\mathbf{x} : A\\mathbf{x} = \\mathbf{0}\\} = \\operatorname{Nul}(A)$`,
        read: `the solution set is the null space of A`,
        means: `An equality between two descriptions of one object: set-builder on the left, a named [fundamental space](!/linear-algebra/vector-spaces/fundamental-spaces#notation) on the right. Only homogeneous systems earn this — the notation records that the solutions form a subspace rather than a scattered set.`,
        cases: `The **Superposition Principle** below is that subspace closure spelled out: if $\\mathbf{u}$ and $\\mathbf{v}$ solve the system then so does $c\\mathbf{u} + d\\mathbf{v}$, which is why the general solution can be written as a span rather than a list.`,
        confusedWith: `Expecting the same of $A\\mathbf{x} = \\mathbf{b}$. A non-homogeneous solution set is a **translate** of $\\operatorname{Nul}(A)$, not a subspace — it misses $\\mathbf{0}$ unless $\\mathbf{b} = \\mathbf{0}$, which is precisely the structural difference **Homogeneous vs. Non-Homogeneous** below turns on.`,
      },
    ],
    symbolsHref: `/math-symbols/linear-algebra`,
    symbolsLabel: `All linear algebra symbols`,
    parentHref: `/linear-algebra/linear-systems`,
    parentLabel: `Linear Systems`,
    before: ``,
    after: ``,
    link: ``,
  },

  obj2: {
    title: `When Do Nontrivial Solutions Exist?`,
    content: `Nontrivial solutions to $A\\mathbf{x} = \\mathbf{0}$ exist if and only if the [rank](!/linear-algebra/matrix/rank) of $A$ is less than $n$, the number of unknowns. When $\\text{rank}(A) < n$, at least one free variable appears in the [echelon form](!/linear-algebra/linear-systems/echelon-form), and that free variable parametrizes a family of nonzero solutions.

For a square $n \\times n$ matrix, nontrivial solutions exist if and only if $\\det(A) = 0$. A nonzero [determinant](!/linear-algebra/determinants) means full rank, which means no free variables, which means only the trivial solution.

One case is automatic: if the system has more unknowns than equations ($n > m$), nontrivial solutions always exist:

@academic[formula_callout:underdetermined_homogeneous_has_nontrivial|Underdetermined Homogeneous Has Nontrivial|$$m < n \\Rightarrow A\\mathbf{x} = \\mathbf{0} \\text{ has nontrivial solutions}$$]@
@academic[formulas_link:/linear-algebra/formulas#underdetermined_homogeneous_has_nontrivial]@

The rank of an $m \\times n$ matrix cannot exceed $m$, and when $m < n$, the rank is strictly less than $n$. This guarantees at least $n - m$ free variables, producing an infinite family of nontrivial solutions. Fewer equations than unknowns always leaves room.`,
    before: ``,
    after: ``,
    link: ``,
  },
  obj3: {
    title: `The Solution Set Is the Null Space`,
    content: `The set of all solutions to $A\\mathbf{x} = \\mathbf{0}$ is the [null space](!/linear-algebra/vector-spaces/fundamental-spaces) of $A$:

$$\\text{Null}(A) = \\{\\mathbf{x} \\in \\mathbb{R}^n : A\\mathbf{x} = \\mathbf{0}\\}$$

The null space is a [subspace](!/linear-algebra/vector-spaces/subspaces) of $\\mathbb{R}^n$. It contains $\\mathbf{0}$, and it is closed under addition and scalar multiplication: if $A\\mathbf{u} = \\mathbf{0}$ and $A\\mathbf{v} = \\mathbf{0}$, then $A(\\mathbf{u} + \\mathbf{v}) = \\mathbf{0}$ and $A(c\\mathbf{u}) = \\mathbf{0}$.

The [dimension](!/linear-algebra/vector-spaces/dimension) of the null space is the nullity:

@academic[formula_callout:homogeneous_solution_space_dimension|Homogeneous Solution Space Dimension|$$\\dim(\\text{Null}(A)) = n - \\text{rank}(A)$$]@
@academic[formulas_link:/linear-algebra/formulas#homogeneous_solution_space_dimension]@

When the nullity is $0$, the null space is $\\{\\mathbf{0}\\}$ and only the trivial solution exists. When the nullity is $k > 0$, the null space is a $k$-dimensional subspace, and the solution set contains infinitely many vectors forming a $k$-dimensional flat through the origin.`,
    before: ``,
    after: ``,
    link: ``,
  },
  obj4: {
    title: `Finding the Null Space`,
    content: `The algorithm is a direct application of [Gaussian elimination](!/linear-algebra/linear-systems/gaussian-elimination). Row reduce $A$ to echelon form (reducing just $A$ — the zero augmented column adds nothing). Identify the pivot variables and the free variables. For each free variable, set it to $1$ with all other free variables at $0$, and solve for the pivot variables by back substitution. Each setting produces one basis vector for the null space.

## Worked Example

$$A = \\begin{pmatrix} 1 & 2 & -1 & 0 & 3 \\\\ 2 & 4 & 0 & 2 & 8 \\\\ -1 & -2 & 2 & 1 & 0 \\end{pmatrix}$$

Row reduce:

$$\\xrightarrow{R_2 - 2R_1,\\; R_3 + R_1} \\begin{pmatrix} 1 & 2 & -1 & 0 & 3 \\\\ 0 & 0 & 2 & 2 & 2 \\\\ 0 & 0 & 1 & 1 & 3 \\end{pmatrix} \\xrightarrow{R_3 - \\frac{1}{2}R_2} \\begin{pmatrix} 1 & 2 & -1 & 0 & 3 \\\\ 0 & 0 & 2 & 2 & 2 \\\\ 0 & 0 & 0 & 0 & 2 \\end{pmatrix}$$

Pivots in columns $1$, $3$, $5$. Free variables: $x_2 = s$, $x_4 = t$. Row $3$: $2x_5 = 0 \\Rightarrow x_5 = 0$. Row $2$: $2x_3 + 2t = 0 \\Rightarrow x_3 = -t$. Row $1$: $x_1 + 2s + t + 0 = 0 \\Rightarrow x_1 = -2s - t$.

Setting $s = 1, t = 0$: $\\mathbf{v}_1 = (-2, 1, 0, 0, 0)$. Setting $s = 0, t = 1$: $\\mathbf{v}_2 = (-1, 0, -1, 1, 0)$.

The null space is $\\text{Span}\\{\\mathbf{v}_1, \\mathbf{v}_2\\}$, a two-dimensional subspace of $\\mathbb{R}^5$.`,
    before: ``,
    after: ``,
    link: ``,
  },
  obj5: {
    title: `Parametric Vector Form`,
    content: `The general solution to $A\\mathbf{x} = \\mathbf{0}$ is a linear combination of the null-space basis vectors:

$$\\mathbf{x} = t_1\\mathbf{v}_1 + t_2\\mathbf{v}_2 + \\cdots + t_k\\mathbf{v}_k$$

where $\\mathbf{v}_1, \\dots, \\mathbf{v}_k$ are the basis vectors found by the algorithm above and $t_1, \\dots, t_k$ are free parameters ranging over all real numbers. The number of parameters $k = n - \\text{rank}(A)$ is the nullity.

When $k = 0$, the only solution is $\\mathbf{x} = \\mathbf{0}$. When $k = 1$, the solutions form a line through the origin in $\\mathbb{R}^n$. When $k = 2$, a plane through the origin. In general, the solution set is a $k$-dimensional subspace passing through the origin.

There is no particular solution $\\mathbf{x}_p$ to add because the right-hand side is $\\mathbf{0}$ — the zero vector is itself the particular solution. The entire solution set is the null space, unshifted.`,
    before: ``,
    after: ``,
    link: ``,
  },
  obj6: {
    title: `The Superposition Principle`,
    content: `If $\\mathbf{x}_1$ and $\\mathbf{x}_2$ are solutions to $A\\mathbf{x} = \\mathbf{0}$, then any linear combination $c_1\\mathbf{x}_1 + c_2\\mathbf{x}_2$ is also a solution:

$$A(c_1\\mathbf{x}_1 + c_2\\mathbf{x}_2) = c_1 A\\mathbf{x}_1 + c_2 A\\mathbf{x}_2 = c_1\\mathbf{0} + c_2\\mathbf{0} = \\mathbf{0}$$

This is precisely the statement that the solution set is a [subspace](!/linear-algebra/vector-spaces/subspaces) — it is closed under addition and scalar multiplication. The superposition principle is the reason the general solution is a linear combination of basis vectors, and it is the reason the null space has the clean structure of a [vector space](!/linear-algebra/vector-spaces) rather than an arbitrary collection of points.

Superposition holds only for homogeneous systems. For a non-homogeneous system $A\\mathbf{x} = \\mathbf{b}$ with $\\mathbf{b} \\neq \\mathbf{0}$, the sum of two solutions is generally not a solution: $A(\\mathbf{x}_1 + \\mathbf{x}_2) = \\mathbf{b} + \\mathbf{b} = 2\\mathbf{b} \\neq \\mathbf{b}$.`,
    before: ``,
    after: ``,
    link: ``,
  },
  obj7: {
    title: `Homogeneous vs. Non-Homogeneous`,
    content: `The homogeneous system $A\\mathbf{x} = \\mathbf{0}$ and the non-homogeneous system $A\\mathbf{x} = \\mathbf{b}$ are deeply connected. If $\\mathbf{x}_p$ is any particular solution to $A\\mathbf{x} = \\mathbf{b}$, then every solution has the form

$$\\mathbf{x} = \\mathbf{x}_p + \\mathbf{x}_h$$

where $\\mathbf{x}_h \\in \\text{Null}(A)$ is a solution to the homogeneous system. The particular solution accounts for $\\mathbf{b}$; the null-space component accounts for the freedom.

This decomposition has two immediate consequences. If the null space is trivial ($\\text{nullity} = 0$), the non-homogeneous system has at most one solution — either $\\mathbf{x}_p$ alone or nothing. If the null space is nontrivial ($\\text{nullity} > 0$), then either $A\\mathbf{x} = \\mathbf{b}$ has no solution or it has infinitely many — there is no middle ground.

The [solution set](!/linear-algebra/linear-systems/solvability) of $A\\mathbf{x} = \\mathbf{b}$ is therefore a translated copy of the null space: the null space shifted by $\\mathbf{x}_p$. The homogeneous system determines the shape and dimension of the solution set; the particular solution determines its position.`,
    before: ``,
    after: ``,
    link: ``,
  },
  obj8: {
    title: `Homogeneous Systems and Linear Independence`,
    content: `Testing whether vectors $\\mathbf{v}_1, \\dots, \\mathbf{v}_k$ are [linearly independent](!/linear-algebra/vector-spaces/linear-independence) is equivalent to checking whether the homogeneous system $A\\mathbf{c} = \\mathbf{0}$ has only the trivial solution, where $A = [\\mathbf{v}_1 \\; \\mathbf{v}_2 \\; \\cdots \\; \\mathbf{v}_k]$.

The equation $c_1\\mathbf{v}_1 + c_2\\mathbf{v}_2 + \\cdots + c_k\\mathbf{v}_k = \\mathbf{0}$ is literally the system $A\\mathbf{c} = \\mathbf{0}$. If the null space of $A$ is trivial, the only solution is $\\mathbf{c} = \\mathbf{0}$ and the vectors are independent. If the null space is nontrivial, some nonzero $\\mathbf{c}$ satisfies the equation, providing an explicit dependence relation — the entries of $\\mathbf{c}$ are the coefficients that express one vector as a combination of the others.

This is the computational link between homogeneous systems and independence. Row reducing $A$ and checking for free variables is the standard algorithm for deciding independence, and the null-space basis vectors encode the dependence relations when they exist.`,
    before: ``,
    after: ``,
    link: ``,
  },
  obj9: {
    title: `The Eigenvalue Connection`,
    content: `The [eigenvalue](!/linear-algebra/eigen) equation $A\\mathbf{x} = \\lambda\\mathbf{x}$ can be rewritten as

$$(A - \\lambda I)\\mathbf{x} = \\mathbf{0}$$

This is a homogeneous system with coefficient matrix $A - \\lambda I$. Eigenvectors are precisely the nontrivial solutions. They exist when and only when $A - \\lambda I$ is singular — that is, when $\\det(A - \\lambda I) = 0$.

The values of $\\lambda$ satisfying this [determinant](!/linear-algebra/determinants) condition are the eigenvalues. For each eigenvalue $\\lambda$, the set of all solutions to $(A - \\lambda I)\\mathbf{x} = \\mathbf{0}$ is the eigenspace — the null space of $A - \\lambda I$. The dimension of this eigenspace is the nullity of $A - \\lambda I$, which equals $n - \\text{rank}(A - \\lambda I)$.

This rewriting connects homogeneous systems directly to spectral theory. Every eigenvalue problem is, at its core, a question about when a particular homogeneous system has nontrivial solutions. The machinery of row reduction, null spaces, and rank that governs homogeneous systems is the same machinery that computes eigenvectors and eigenspaces.`,
    before: ``,
    after: ``,
    link: ``,
  },
  obj10: {
    title: `Summary: Where Homogeneous Systems Appear`,
    content: `The homogeneous system A·x = 0 shows up far beyond its own statement: every test of linear independence, every eigenvector calculation, every analysis of a non-homogeneous solution set, and every kernel computation reduces to solving one. The table below collects each construction in which homogeneous systems play a role, alongside the specific equation involved and what its solutions represent in that context.`,
    before: ``,
    after: ``,
    link: ``,
  },
}


 const introContent = {
  title: `Systems with Zero Right-Hand Side`,
  content: `A homogeneous system Ax = 0 always has the trivial solution x = 0. The real question is whether nontrivial solutions exist — and when they do, the solution set is a subspace of Rⁿ whose structure is governed entirely by the rank of the coefficient matrix.`,
}


const faqQuestions = {
  obj1: {
    question: "What is a homogeneous linear system?",
    answer: "A homogeneous system has the form Ax = 0, where every equation has zero on the right-hand side. It is always consistent because x = 0 (the trivial solution) always works. The key question is whether nontrivial (nonzero) solutions exist.",
    sectionId: "1"
  },
  obj2: {
    question: "When does a homogeneous system have nontrivial solutions?",
    answer: "Nontrivial solutions exist if and only if rank(A) < n (the number of unknowns). For square matrices, this is equivalent to det(A) = 0. If there are more unknowns than equations (n > m), nontrivial solutions are guaranteed because the rank cannot reach n.",
    sectionId: "2"
  },
  obj3: {
    question: "What is the superposition principle?",
    answer: "If x₁ and x₂ are solutions to Ax = 0, then any linear combination c₁x₁ + c₂x₂ is also a solution. This means the solution set is a subspace — the null space. Superposition holds only for homogeneous systems; for Ax = b with b ≠ 0, the sum of two solutions is generally not a solution.",
    sectionId: "6"
  },
  obj4: {
    question: "How are homogeneous and non-homogeneous systems related?",
    answer: "Every solution to Ax = b has the form x = xₚ + xₕ, where xₚ is one particular solution and xₕ is any solution to Ax = 0. The homogeneous system determines the shape and dimension of the solution set; the particular solution determines its position.",
    sectionId: "7"
  },
  obj5: {
    question: "How do homogeneous systems connect to eigenvalues?",
    answer: "The eigenvalue equation Ax = λx rewrites as (A − λI)x = 0, a homogeneous system. Eigenvectors are its nontrivial solutions. Eigenvalues are the values of λ for which det(A − λI) = 0, making the system have nontrivial solutions. The eigenspace is the null space of A − λI.",
    sectionId: "9"
  }
}


const schemas = {
  learningResource: {
    "@context": "https://schema.org",
    "@type": "LearningResource",
    "name": "Homogeneous Systems of Equations",
    "description": "Homogeneous linear systems Ax = 0: trivial and nontrivial solutions, null space as solution set, superposition principle, connection to non-homogeneous systems, independence, and eigenvalues.",
    "url": "https://www.learnmathclass.com/linear-algebra/linear-systems/homogeneous",
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
      "name": "Homogeneous Linear Systems"
    },
    "teaches": [
      "Definition and always-consistent property",
      "Conditions for nontrivial solutions via rank",
      "Solution set equals the null space",
      "Finding null space basis by row reduction",
      "Parametric vector form of solutions",
      "Superposition principle for homogeneous systems",
      "Relationship to non-homogeneous systems via x = xₚ + xₕ",
      "Connection to linear independence testing",
      "Eigenvalue problems as homogeneous systems"
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
        "name": "Homogeneous Systems",
        "item": "https://www.learnmathclass.com/linear-algebra/linear-systems/homogeneous"
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
//         url: "/linear-algebra/linear-systems/homogeneous",
//          name: "name"
//       },
        
//        }
//     }

return {
  props:{
    sectionsContent,
    introContent,
    obj2Table,
    obj7Table,
    homogeneousAppearances,
    faqQuestions,
    schemas,
    seoData: {
      title: "Homogeneous Systems: Ax = 0 & Null Space | Learn Math Class",
      description: "Homogeneous linear systems Ax = 0: trivial and nontrivial solutions, null space as solution set, superposition principle, connection to non-homogeneous systems, independence, and eigenvalues.",
      keywords: keyWords.join(", "),
      url: "/linear-algebra/linear-systems/homogeneous",
      name: "Homogeneous Systems of Equations"
    },
  }
}
   }

// export default function PageTemplate({seoData,sectionsContent , introContent}) {

export default function HomogeneousSystemsPage({
  seoData,
  sectionsContent,
  introContent,
  obj2Table,
  obj7Table,
  homogeneousAppearances,
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
          `The six settings below are not applications of homogeneous systems so much as the same system wearing different names. In each case something is being asked about a null space, and the only thing that changes is what the trivial solution is taken to mean — no redundancy among vectors, no eigenvector for that scalar, no collapse under the transformation.`,
          <DiagramFrame
            key={'obj10-diagram'}
            id="homogeneous-appearances"
            title="Where Ax = 0 turns up"
            source="/linear-algebra/linear-systems/homogeneous"
          >
            <IdentitySheet data={homogeneousAppearances} theme="navy" variant="ledger" />
          </DiagramFrame>,
          `Two of these are worth reading together, because they are the same solution used twice. Solving $A\\mathbf{c} = \\mathbf{0}$ answers whether the columns are independent, and when the answer is no, the vector $\\mathbf{c}$ is not merely a witness to dependence — its entries are the coefficients of the relation. The test and the explanation come from one computation, which is why nothing further is needed once the null space basis is in hand.`,
          `The eigenvector row is where the ordering matters. $(A - \\lambda I)\\mathbf{x} = \\mathbf{0}$ is only worth solving once $\\lambda$ is known, and $\\lambda$ is chosen precisely so that this system has a nontrivial solution — which is what $\\det(A - \\lambda I) = 0$ asserts. The characteristic equation exists to make the homogeneous system interesting; the eigenvector calculation that follows is ordinary null space work.`,
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
   <h1 className='title' style={{marginTop:'0px',marginBottom:'10px'}}>Homogeneous Systems of Equations</h1>
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