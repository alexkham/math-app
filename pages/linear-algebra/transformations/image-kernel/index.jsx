
// // tables-optimized: v4 | 2026-05-22 | 3 tables (obj4 comparison, obj7 comparison, obj10 summary capstone)

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
// const keyWords = [
//   "image linear transformation",
//   "kernel linear transformation",
//   "null space column space",
//   "rank-nullity theorem",
//   "injective linear map",
//   "surjective linear map",
//   "isomorphism linear algebra",
//   "kernel null space",
//   "image range transformation",
//   "one-to-one onto linear",
//   "dimension constraints transformations",
//   "computing image kernel",
//   "fundamental decomposition",
//   "bijective linear transformation"
// ]

// const linkStyle = 'color: inherit; text-decoration: underline;'

// // ---------- TABLES ----------

// // obj4 — comparison: injectivity vs surjectivity equivalence chains
// const obj4Table = `
// <table class="styled-table" style="border-collapse: collapse; width: 75%;margin:auto; background: white; box-shadow: 0 2px 10px rgba(0,0,0,0.1); border-radius: 8px; overflow: hidden; font-family: Arial, sans-serif;">
//   <thead>
//     <tr>
//       <th style="${tableHeaders.comparison}">Equivalent condition</th>
//       <th style="${tableHeaders.comparison}">Injectivity (one-to-one)</th>
//       <th style="${tableHeaders.comparison}">Surjectivity (onto)</th>
//     </tr>
//   </thead>
//   <tbody>
//     <tr style="background: #f8f9fa;">
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Map-level definition</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">T(u) = T(v) ⇒ u = v</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">every w ∈ W is the image of some v</td>
//     </tr>
//     <tr>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Kernel / image</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">ker(T) = {0}</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">Im(T) = W</td>
//     </tr>
//     <tr style="background: #f8f9fa;">
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Rank condition</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">rank(A) = n (full column rank)</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">rank(A) = m (full row rank)</td>
//     </tr>
//     <tr>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Columns / rows of A</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">columns are <a href="/linear-algebra/vector-spaces/linear-independence" style="${linkStyle}">linearly independent</a></td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">columns span ℝᵐ (column space = ℝᵐ)</td>
//     </tr>
//     <tr style="background: #f8f9fa;">
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">System Ax = b behavior</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">at most one solution for every b</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">at least one solution for every b</td>
//     </tr>
//     <tr>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Echelon-form trait</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">no free variables in Ax = 0</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">every row contains a pivot</td>
//     </tr>
//     <tr style="background: #f8f9fa;">
//       <td style="padding: 12px 15px; font-weight: bold; color: #06357a;">Determinant (square A only)</td>
//       <td style="padding: 12px 15px; color: #34495e;">det(A) ≠ 0</td>
//       <td style="padding: 12px 15px; color: #34495e;">det(A) ≠ 0 (collapses to the same test)</td>
//     </tr>
//   </tbody>
// </table>
// `

// // obj7 — comparison: dimension relations × possibility of inj./surj./bij.
// const obj7Table = `
// <table class="styled-table" style="border-collapse: collapse; width: 75%;margin:auto; background: white; box-shadow: 0 2px 10px rgba(0,0,0,0.1); border-radius: 8px; overflow: hidden; font-family: Arial, sans-serif;">
//   <thead>
//     <tr>
//       <th style="${tableHeaders.comparison}">Dimension relation</th>
//       <th style="${tableHeaders.comparison} text-align: center;">Injective possible?</th>
//       <th style="${tableHeaders.comparison} text-align: center;">Surjective possible?</th>
//       <th style="${tableHeaders.comparison} text-align: center;">Bijective possible?</th>
//       <th style="${tableHeaders.comparison}">Forced consequence</th>
//     </tr>
//   </thead>
//   <tbody>
//     <tr style="background: #f8f9fa;">
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">dim(V) &lt; dim(W)</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #27ae60; text-align: center; font-weight: bold; font-size: 18px;">✓</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #e74c3c; text-align: center; font-weight: bold; font-size: 18px;">✗</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #e74c3c; text-align: center; font-weight: bold; font-size: 18px;">✗</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">image is a proper subspace of W</td>
//     </tr>
//     <tr>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">dim(V) = dim(W)</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #27ae60; text-align: center; font-weight: bold; font-size: 18px;">✓</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #27ae60; text-align: center; font-weight: bold; font-size: 18px;">✓</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #27ae60; text-align: center; font-weight: bold; font-size: 18px;">✓</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">injective ⇔ surjective ⇔ bijective (one check establishes all three)</td>
//     </tr>
//     <tr style="background: #f8f9fa;">
//       <td style="padding: 12px 15px; font-weight: bold; color: #06357a;">dim(V) &gt; dim(W)</td>
//       <td style="padding: 12px 15px; color: #e74c3c; text-align: center; font-weight: bold; font-size: 18px;">✗</td>
//       <td style="padding: 12px 15px; color: #27ae60; text-align: center; font-weight: bold; font-size: 18px;">✓</td>
//       <td style="padding: 12px 15px; color: #e74c3c; text-align: center; font-weight: bold; font-size: 18px;">✗</td>
//       <td style="padding: 12px 15px; color: #34495e;">kernel forced to have dim ≥ dim(V) − dim(W)</td>
//     </tr>
//   </tbody>
// </table>
// `

// // obj10 — summary capstone: image vs kernel side-by-side
// const summaryTable = `
// <table class="styled-table" style="border-collapse: collapse; width: 75%;margin:auto; background: white; box-shadow: 0 2px 10px rgba(0,0,0,0.1); border-radius: 8px; overflow: hidden; font-family: Arial, sans-serif;">
//   <thead>
//     <tr>
//       <th style="${tableHeaders.summary}">Attribute</th>
//       <th style="${tableHeaders.summary}">Image of T</th>
//       <th style="${tableHeaders.summary}">Kernel of T</th>
//     </tr>
//   </thead>
//   <tbody>
//     <tr style="background: #f8f9fa;">
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Set-theoretic definition</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">{ T(v) : v ∈ V }</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">{ v ∈ V : T(v) = 0 }</td>
//     </tr>
//     <tr>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Where it lives</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">subspace of the codomain W</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">subspace of the domain V</td>
//     </tr>
//     <tr style="background: #f8f9fa;">
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Matrix counterpart (T(x) = Ax)</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;"><a href="/linear-algebra/vector-spaces/fundamental-spaces" style="${linkStyle}">column space</a> of A</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;"><a href="/linear-algebra/vector-spaces/fundamental-spaces" style="${linkStyle}">null space</a> of A</td>
//     </tr>
//     <tr>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Dimension</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">rank(A)</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">nullity(A) = n − rank(A)</td>
//     </tr>
//     <tr style="background: #f8f9fa;">
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">What it measures</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">reachable outputs — directions T can produce</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">information destroyed — directions T collapses to 0</td>
//     </tr>
//     <tr>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Computed by</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">pivot columns of A (original columns, not RREF)</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">parametric solution of Ax = 0 from RREF</td>
//     </tr>
//     <tr style="background: #f8f9fa;">
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Trivial case</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">{0} ⇔ T is the zero map</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">{0} ⇔ T is injective</td>
//     </tr>
//     <tr>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Full case</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">= W ⇔ T is surjective</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">= V ⇔ T is the zero map</td>
//     </tr>
//     <tr style="background: #f8f9fa;">
//       <td style="padding: 12px 15px; font-weight: bold; color: #06357a;">Linked by rank-nullity</td>
//       <td style="padding: 12px 15px; color: #34495e;" colspan="2">dim(Im(T)) + dim(ker(T)) = dim(V) — what survives plus what is destroyed equals the input dimension</td>
//     </tr>
//   </tbody>
// </table>
// `

// // ---------- SECTIONS ----------

// // const sectionsContent = {
// //   obj1: {
// //     title: `The Image`,
// //     content: `The image (or range) of a linear transformation $T: V \\to W$ is the set of all outputs:

// // $$\\text{Im}(T) = \\{T(\\mathbf{v}) : \\mathbf{v} \\in V\\}$$

// // The image is a [subspace](!/linear-algebra/vector-spaces/subspaces) of $W$. It contains $T(\\mathbf{0}) = \\mathbf{0}$, and if $T(\\mathbf{u})$ and $T(\\mathbf{v})$ are in the image, then so is $cT(\\mathbf{u}) + dT(\\mathbf{v}) = T(c\\mathbf{u} + d\\mathbf{v})$ — closure under both operations follows from linearity.

// // When $T(\\mathbf{x}) = A\\mathbf{x}$ for a [matrix](!/linear-algebra/matrix) $A$, the image is the [column space](!/linear-algebra/vector-spaces/fundamental-spaces) of $A$: the set of all vectors expressible as linear combinations of the columns. The [dimension](!/linear-algebra/vector-spaces/dimension) of the image equals the [rank](!/linear-algebra/matrix/rank) of $A$.

// // The image answers the reachability question: a vector $\\mathbf{w} \\in W$ is in the image if and only if the equation $T(\\mathbf{v}) = \\mathbf{w}$ — equivalently, $A\\mathbf{x} = \\mathbf{w}$ — has a solution.`,
// //     before: ``,
// //     after: ``,
// //     link: ``,
// //   },
// //   obj2: {
// //     title: `The Kernel`,
// //     content: `The kernel (or null space) of $T: V \\to W$ is the set of all inputs that map to zero:

// // $$\\ker(T) = \\{\\mathbf{v} \\in V : T(\\mathbf{v}) = \\mathbf{0}\\}$$

// // The kernel is a [subspace](!/linear-algebra/vector-spaces/subspaces) of $V$. It contains $\\mathbf{0}$ (since $T(\\mathbf{0}) = \\mathbf{0}$), and if $T(\\mathbf{u}) = \\mathbf{0}$ and $T(\\mathbf{v}) = \\mathbf{0}$, then $T(c\\mathbf{u} + d\\mathbf{v}) = cT(\\mathbf{u}) + dT(\\mathbf{v}) = \\mathbf{0}$, so $c\\mathbf{u} + d\\mathbf{v} \\in \\ker(T)$.

// // When $T(\\mathbf{x}) = A\\mathbf{x}$, the kernel is the [null space](!/linear-algebra/vector-spaces/fundamental-spaces) of $A$: all solutions to the [homogeneous](!/linear-algebra/linear-systems/homogeneous) system $A\\mathbf{x} = \\mathbf{0}$. Its dimension is the nullity, equal to $n - \\text{rank}(A)$.

// // The kernel measures the information lost by $T$. Vectors in the kernel are collapsed to $\\mathbf{0}$ — they represent directions that the transformation annihilates. A larger kernel means more information is destroyed.`,
// //     before: ``,
// //     after: ``,
// //     link: ``,
// //   },
// //   obj3: {
// //     title: `Injectivity`,
// //     content: `A linear transformation $T$ is injective (one-to-one) if different inputs always produce different outputs: $T(\\mathbf{u}) = T(\\mathbf{v})$ implies $\\mathbf{u} = \\mathbf{v}$.

// // For linear maps, injectivity has an elegant equivalent: $T$ is injective if and only if $\\ker(T) = \\{\\mathbf{0}\\}$. The proof is short. If $T(\\mathbf{u}) = T(\\mathbf{v})$, then $T(\\mathbf{u} - \\mathbf{v}) = T(\\mathbf{u}) - T(\\mathbf{v}) = \\mathbf{0}$, so $\\mathbf{u} - \\mathbf{v} \\in \\ker(T)$. If the kernel is trivial, $\\mathbf{u} - \\mathbf{v} = \\mathbf{0}$ and $\\mathbf{u} = \\mathbf{v}$.

// // For matrix transformations, injectivity is equivalent to full column rank: $\\text{rank}(A) = n$. This means every column is a pivot column, no free variables exist in $A\\mathbf{x} = \\mathbf{0}$, the columns are [linearly independent](!/linear-algebra/vector-spaces/linear-independence), and the [determinant](!/linear-algebra/determinants) is nonzero (in the square case).

// // Injectivity means the transformation preserves distinctness — no two different inputs are confused with each other.`,
// //     before: ``,
// //     after: ``,
// //     link: ``,
// //   },
// //   obj4: {
// //     title: `Surjectivity`,
// //     content: `A linear transformation $T: V \\to W$ is surjective (onto) if $\\text{Im}(T) = W$ — every vector in the codomain is the image of some vector in the domain.

// // For matrix transformations, surjectivity is equivalent to full row rank: $\\text{rank}(A) = m$. This means every row contains a pivot, the column space is all of $\\mathbb{R}^m$, and the [system](!/linear-algebra/linear-systems) $A\\mathbf{x} = \\mathbf{b}$ has a solution for every right-hand side $\\mathbf{b}$.

// // Surjectivity means the transformation has no blind spots — every output is reachable from some input. Failure of surjectivity means the image is a proper subspace of the codomain: certain vectors in $W$ are inherently unreachable, no matter what input is chosen.`,
// //     before: ``,
// //     after: ``,
// //     link: ``,
// //   },
// //   obj5: {
// //     title: `Bijectivity and Isomorphisms`,
// //     content: `A linear transformation that is both injective and surjective is bijective. A bijective linear transformation is called an isomorphism — it establishes that the domain and codomain are structurally identical as [vector spaces](!/linear-algebra/vector-spaces).

// // For a map $T: V \\to W$ between spaces of equal dimension ($\\dim(V) = \\dim(W) = n$), the three conditions collapse: injective $\\iff$ surjective $\\iff$ bijective. Checking any one of the three establishes the other two. This is because the rank-nullity theorem forces $\\dim(\\text{Im}(T)) + \\dim(\\ker(T)) = n$, and $\\dim(\\text{Im}(T)) \\leq n = \\dim(W)$. If the kernel is trivial (injective), the image has dimension $n$ and must equal all of $W$ (surjective). If the image is all of $W$ (surjective), the kernel must have dimension $0$ (injective).

// // For matrix transformations between spaces of the same dimension, bijectivity is equivalent to the matrix being square and [invertible](!/linear-algebra/matrix/inverse).`,
// //     before: ``,
// //     after: ``,
// //     link: ``,
// //   },
// //   obj6: {
// //     title: `The Rank-Nullity Theorem for Maps`,
// //     content: `For a linear transformation $T: V \\to W$ with $V$ finite-dimensional:

// // $$\\dim(\\text{Im}(T)) + \\dim(\\ker(T)) = \\dim(V)$$

// // The domain dimensions split between what the map preserves and what it destroys. The image captures the dimensions that survive; the kernel captures the dimensions that are annihilated.

// // For [matrix](!/linear-algebra/matrix) transformations $T(\\mathbf{x}) = A\\mathbf{x}$, this becomes $\\text{rank}(A) + \\text{nullity}(A) = n$ — the familiar [rank-nullity theorem](!/linear-algebra/matrix/rank) in concrete language.

// // The theorem constrains the interplay between injectivity and surjectivity. If $\\dim(V) > \\dim(W)$, the image can have at most $\\dim(W)$ dimensions, forcing the kernel to have at least $\\dim(V) - \\dim(W)$ dimensions — the map cannot be injective. If $\\dim(V) < \\dim(W)$, the image cannot fill all of $W$ — the map cannot be surjective.`,
// //     before: ``,
// //     after: ``,
// //     link: ``,
// //   },
// //   obj7: {
// //     title: `Dimension Constraints`,
// //     content: `The rank-nullity theorem imposes hard limits on what a linear transformation can achieve.

// // $T: V \\to W$ can be injective only if $\\dim(V) \\leq \\dim(W)$. A map from a larger space to a smaller one must collapse some directions — the kernel is forced to be nontrivial.

// // $T: V \\to W$ can be surjective only if $\\dim(V) \\geq \\dim(W)$. A map from a smaller space to a larger one cannot cover all directions — the image is a proper subspace.

// // $T$ can be bijective only if $\\dim(V) = \\dim(W)$. This is necessary but not sufficient — even with equal dimensions, the map must still have full rank.

// // These constraints apply to all linear maps, not just matrix transformations. They are consequences of the rank-nullity theorem and the dimension theory of [vector spaces](!/linear-algebra/vector-spaces/dimension).`,
// //     before: ``,
// //     after: ``,
// //     link: ``,
// //   },
// //   obj8: {
// //     title: `Computing the Image and Kernel`,
// //     content: `For a matrix transformation $T(\\mathbf{x}) = A\\mathbf{x}$, the image and kernel are computed by [row reduction](!/linear-algebra/linear-systems/gaussian-elimination).

// // The kernel is the null space of $A$: solve $A\\mathbf{x} = \\mathbf{0}$, reduce to [echelon form](!/linear-algebra/linear-systems/echelon-form), and express the solution in parametric vector form. Each free variable contributes one [basis](!/linear-algebra/vector-spaces) vector for $\\ker(T)$.

// // The image is the column space of $A$: row reduce $A$, identify the pivot columns, and take the corresponding columns of the original matrix $A$ as a basis for $\\text{Im}(T)$.

// // ## Worked Example

// // For $A = \\begin{pmatrix} 1 & 2 & 3 \\\\ 0 & 1 & 1 \\\\ 1 & 3 & 4 \\end{pmatrix}$, row reduction gives $\\begin{pmatrix} 1 & 2 & 3 \\\\ 0 & 1 & 1 \\\\ 0 & 0 & 0 \\end{pmatrix}$. Pivots in columns $1$ and $2$. The image has basis $\\{(1, 0, 1), (2, 1, 3)\\}$ — two-dimensional. The kernel has one free variable ($x_3 = t$), giving $\\ker(T) = \\text{Span}\\{(-1, -1, 1)\\}$ — one-dimensional. Check: $2 + 1 = 3 = n$.`,
// //     before: ``,
// //     after: ``,
// //     link: ``,
// //   },
// //   obj9: {
// //     title: `The Fundamental Decomposition`,
// //     content: `The rank-nullity theorem has a structural interpretation that goes beyond dimension counting. The domain $V$ decomposes as a direct sum:

// // $$V = \\ker(T) \\oplus (\\text{a complement of } \\ker(T))$$

// // The transformation $T$ kills everything in the kernel and maps the complement bijectively onto the image. Every vector $\\mathbf{v} \\in V$ splits as $\\mathbf{v} = \\mathbf{v}_k + \\mathbf{v}_c$ where $\\mathbf{v}_k \\in \\ker(T)$ and $\\mathbf{v}_c$ is in the complement. Then $T(\\mathbf{v}) = T(\\mathbf{v}_c)$, and the restriction of $T$ to the complement is a bijection onto $\\text{Im}(T)$.

// // For matrix transformations, the [four fundamental subspaces](!/linear-algebra/vector-spaces/fundamental-spaces) provide the natural complement: the row space of $A$ is the orthogonal complement of the null space in $\\mathbb{R}^n$, and $A$ maps the row space bijectively onto the column space. The null-space component is destroyed; the row-space component survives intact.`,
// //     before: ``,
// //     after: ``,
// //     link: ``,
// //   },
// //   obj10: {
// //     title: `Summary: Image and Kernel Side by Side`,
// //     content: `The whole page revolves around a single duality: the image lives in the codomain and records what T reaches, while the kernel lives in the domain and records what T destroys. Every concept introduced — injectivity, surjectivity, bijectivity, rank-nullity, dimension constraints, the fundamental decomposition — is a relation between these two subspaces. The table below sets them side by side across every attribute the page has touched, so the symmetry and the link supplied by rank-nullity are visible at a glance.`,
// //     before: ``,
// //     after: ``,
// //     link: ``,
// //   },
// // }


// // tables-optimized: v4 | 2026-05-22 | 3 tables (obj4 comparison, obj7 comparison, obj10 summary capstone)

// // ---------- SECTIONS ----------

// const sectionsContent = {
//   obj1: {
//     title: `The Image`,
//     content: `The image (or range) of a linear transformation $T: V \\to W$ is the set of all outputs:

// @academic[formula_callout:Image Definition
// $$\\text{Im}(T) = \\{T(\\mathbf{v}) : \\mathbf{v} \\in V\\} \\subseteq W$$
// /linear-algebra/formulas#image_definition]@

// @academic[formulas_link:Browse all linear algebra formulas
// /linear-algebra/formulas]@

// The image is a [subspace](!/linear-algebra/vector-spaces/subspaces) of $W$. It contains $T(\\mathbf{0}) = \\mathbf{0}$, and if $T(\\mathbf{u})$ and $T(\\mathbf{v})$ are in the image, then so is $cT(\\mathbf{u}) + dT(\\mathbf{v}) = T(c\\mathbf{u} + d\\mathbf{v})$ — closure under both operations follows from linearity.

// When $T(\\mathbf{x}) = A\\mathbf{x}$ for a [matrix](!/linear-algebra/matrix) $A$, the image is the [column space](!/linear-algebra/vector-spaces/fundamental-spaces) of $A$: the set of all vectors expressible as linear combinations of the columns. The [dimension](!/linear-algebra/vector-spaces/dimension) of the image equals the [rank](!/linear-algebra/matrix/rank) of $A$.

// The image answers the reachability question: a vector $\\mathbf{w} \\in W$ is in the image if and only if the equation $T(\\mathbf{v}) = \\mathbf{w}$ — equivalently, $A\\mathbf{x} = \\mathbf{w}$ — has a solution.`,
//     before: ``,
//     after: ``,
//     link: ``,
//   },
//   obj2: {
//     title: `The Kernel`,
//     content: `The kernel (or null space) of $T: V \\to W$ is the set of all inputs that map to zero:

// @academic[formula_callout:Kernel Definition
// $$\\ker(T) = \\{\\mathbf{v} \\in V : T(\\mathbf{v}) = \\mathbf{0}\\} \\subseteq V$$
// /linear-algebra/formulas#kernel_definition]@

// @academic[formulas_link:Browse all linear algebra formulas
// /linear-algebra/formulas]@

// The kernel is a [subspace](!/linear-algebra/vector-spaces/subspaces) of $V$. It contains $\\mathbf{0}$ (since $T(\\mathbf{0}) = \\mathbf{0}$), and if $T(\\mathbf{u}) = \\mathbf{0}$ and $T(\\mathbf{v}) = \\mathbf{0}$, then $T(c\\mathbf{u} + d\\mathbf{v}) = cT(\\mathbf{u}) + dT(\\mathbf{v}) = \\mathbf{0}$, so $c\\mathbf{u} + d\\mathbf{v} \\in \\ker(T)$.

// When $T(\\mathbf{x}) = A\\mathbf{x}$, the kernel is the [null space](!/linear-algebra/vector-spaces/fundamental-spaces) of $A$: all solutions to the [homogeneous](!/linear-algebra/linear-systems/homogeneous) system $A\\mathbf{x} = \\mathbf{0}$. Its dimension is the nullity, equal to $n - \\text{rank}(A)$.

// The kernel measures the information lost by $T$. Vectors in the kernel are collapsed to $\\mathbf{0}$ — they represent directions that the transformation annihilates. A larger kernel means more information is destroyed.`,
//     before: ``,
//     after: ``,
//     link: ``,
//   },
//   obj3: {
//     title: `Injectivity`,
//     content: `A linear transformation $T$ is injective (one-to-one) if different inputs always produce different outputs: $T(\\mathbf{u}) = T(\\mathbf{v})$ implies $\\mathbf{u} = \\mathbf{v}$.

// For linear maps, injectivity has an elegant equivalent:

// @academic[formula_callout:Injectivity Kernel Criterion
// $$T \\text{ injective} \\iff \\ker(T) = \\{\\mathbf{0}\\}$$
// /linear-algebra/formulas#injectivity_kernel_criterion]@

// @academic[formulas_link:Browse all linear algebra formulas
// /linear-algebra/formulas]@

// The proof is short. If $T(\\mathbf{u}) = T(\\mathbf{v})$, then $T(\\mathbf{u} - \\mathbf{v}) = T(\\mathbf{u}) - T(\\mathbf{v}) = \\mathbf{0}$, so $\\mathbf{u} - \\mathbf{v} \\in \\ker(T)$. If the kernel is trivial, $\\mathbf{u} - \\mathbf{v} = \\mathbf{0}$ and $\\mathbf{u} = \\mathbf{v}$.

// For matrix transformations, injectivity is equivalent to full column rank: $\\text{rank}(A) = n$. This means every column is a pivot column, no free variables exist in $A\\mathbf{x} = \\mathbf{0}$, the columns are [linearly independent](!/linear-algebra/vector-spaces/linear-independence), and the [determinant](!/linear-algebra/determinants) is nonzero (in the square case).

// Injectivity means the transformation preserves distinctness — no two different inputs are confused with each other.`,
//     before: ``,
//     after: ``,
//     link: ``,
//   },
//   obj4: {
//     title: `Surjectivity`,
//     content: `A linear transformation $T: V \\to W$ is surjective (onto) if $\\text{Im}(T) = W$ — every vector in the codomain is the image of some vector in the domain.

// For matrix transformations, surjectivity is equivalent to full row rank: $\\text{rank}(A) = m$. This means every row contains a pivot, the column space is all of $\\mathbb{R}^m$, and the [system](!/linear-algebra/linear-systems) $A\\mathbf{x} = \\mathbf{b}$ has a solution for every right-hand side $\\mathbf{b}$.

// Surjectivity means the transformation has no blind spots — every output is reachable from some input. Failure of surjectivity means the image is a proper subspace of the codomain: certain vectors in $W$ are inherently unreachable, no matter what input is chosen.`,
//     before: ``,
//     after: ``,
//     link: ``,
//   },
//   obj5: {
//     title: `Bijectivity and Isomorphisms`,
//     content: `A linear transformation that is both injective and surjective is bijective. A bijective linear transformation is called an isomorphism — it establishes that the domain and codomain are structurally identical as [vector spaces](!/linear-algebra/vector-spaces).

// For a map $T: V \\to W$ between spaces of equal dimension, the three conditions collapse:

// @academic[formula_callout:Bijectivity Equal Dim Case
// $$\\dim V = \\dim W \\Rightarrow \\bigl(T \\text{ injective} \\iff T \\text{ surjective} \\iff T \\text{ bijective}\\bigr)$$
// /linear-algebra/formulas#bijectivity_equal_dim_case]@

// @academic[formulas_link:Browse all linear algebra formulas
// /linear-algebra/formulas]@

// Checking any one of the three establishes the other two. This is because the rank-nullity theorem forces $\\dim(\\text{Im}(T)) + \\dim(\\ker(T)) = n$ (where $n = \\dim(V) = \\dim(W)$), and $\\dim(\\text{Im}(T)) \\leq n$. If the kernel is trivial (injective), the image has dimension $n$ and must equal all of $W$ (surjective). If the image is all of $W$ (surjective), the kernel must have dimension $0$ (injective).

// For matrix transformations between spaces of the same dimension, bijectivity is equivalent to the matrix being square and [invertible](!/linear-algebra/matrix/inverse).`,
//     before: ``,
//     after: ``,
//     link: ``,
//   },
//   obj6: {
//     title: `The Rank-Nullity Theorem for Maps`,
//     content: `For a linear transformation $T: V \\to W$ with $V$ finite-dimensional:

// @academic[formula_callout:Rank-Nullity for Maps
// $$\\dim\\text{Im}(T) + \\dim\\ker(T) = \\dim V$$
// /linear-algebra/formulas#rank_nullity_for_maps]@

// @academic[formulas_link:Browse all linear algebra formulas
// /linear-algebra/formulas]@

// The domain dimensions split between what the map preserves and what it destroys. The image captures the dimensions that survive; the kernel captures the dimensions that are annihilated.

// For [matrix](!/linear-algebra/matrix) transformations $T(\\mathbf{x}) = A\\mathbf{x}$, this becomes $\\text{rank}(A) + \\text{nullity}(A) = n$ — the familiar [rank-nullity theorem](!/linear-algebra/matrix/rank) in concrete language.

// The theorem constrains the interplay between injectivity and surjectivity. If $\\dim(V) > \\dim(W)$, the image can have at most $\\dim(W)$ dimensions, forcing the kernel to have at least $\\dim(V) - \\dim(W)$ dimensions — the map cannot be injective. If $\\dim(V) < \\dim(W)$, the image cannot fill all of $W$ — the map cannot be surjective.`,
//     before: ``,
//     after: ``,
//     link: ``,
//   },
//   obj7: {
//     title: `Dimension Constraints`,
//     content: `The rank-nullity theorem imposes hard limits on what a linear transformation can achieve.

// $T: V \\to W$ can be injective only if $\\dim(V) \\leq \\dim(W)$. A map from a larger space to a smaller one must collapse some directions — the kernel is forced to be nontrivial.

// $T: V \\to W$ can be surjective only if $\\dim(V) \\geq \\dim(W)$. A map from a smaller space to a larger one cannot cover all directions — the image is a proper subspace.

// $T$ can be bijective only if $\\dim(V) = \\dim(W)$. This is necessary but not sufficient — even with equal dimensions, the map must still have full rank.

// These constraints apply to all linear maps, not just matrix transformations. They are consequences of the rank-nullity theorem and the dimension theory of [vector spaces](!/linear-algebra/vector-spaces/dimension).`,
//     before: ``,
//     after: ``,
//     link: ``,
//   },
//   obj8: {
//     title: `Computing the Image and Kernel`,
//     content: `For a matrix transformation $T(\\mathbf{x}) = A\\mathbf{x}$, the image and kernel are computed by [row reduction](!/linear-algebra/linear-systems/gaussian-elimination).

// The kernel is the null space of $A$: solve $A\\mathbf{x} = \\mathbf{0}$, reduce to [echelon form](!/linear-algebra/linear-systems/echelon-form), and express the solution in parametric vector form. Each free variable contributes one [basis](!/linear-algebra/vector-spaces) vector for $\\ker(T)$.

// The image is the column space of $A$: row reduce $A$, identify the pivot columns, and take the corresponding columns of the original matrix $A$ as a basis for $\\text{Im}(T)$.

// ## Worked Example

// For $A = \\begin{pmatrix} 1 & 2 & 3 \\\\ 0 & 1 & 1 \\\\ 1 & 3 & 4 \\end{pmatrix}$, row reduction gives $\\begin{pmatrix} 1 & 2 & 3 \\\\ 0 & 1 & 1 \\\\ 0 & 0 & 0 \\end{pmatrix}$. Pivots in columns $1$ and $2$. The image has basis $\\{(1, 0, 1), (2, 1, 3)\\}$ — two-dimensional. The kernel has one free variable ($x_3 = t$), giving $\\ker(T) = \\text{Span}\\{(-1, -1, 1)\\}$ — one-dimensional. Check: $2 + 1 = 3 = n$.`,
//     before: ``,
//     after: ``,
//     link: ``,
//   },
//   obj9: {
//     title: `The Fundamental Decomposition`,
//     content: `The rank-nullity theorem has a structural interpretation that goes beyond dimension counting. The domain $V$ decomposes as a direct sum:

// $$V = \\ker(T) \\oplus (\\text{a complement of } \\ker(T))$$

// The transformation $T$ kills everything in the kernel and maps the complement bijectively onto the image. Every vector $\\mathbf{v} \\in V$ splits as $\\mathbf{v} = \\mathbf{v}_k + \\mathbf{v}_c$ where $\\mathbf{v}_k \\in \\ker(T)$ and $\\mathbf{v}_c$ is in the complement. Then $T(\\mathbf{v}) = T(\\mathbf{v}_c)$, and the restriction of $T$ to the complement is a bijection onto $\\text{Im}(T)$.

// For matrix transformations, the [four fundamental subspaces](!/linear-algebra/vector-spaces/fundamental-spaces) provide the natural complement: the row space of $A$ is the orthogonal complement of the null space in $\\mathbb{R}^n$, and $A$ maps the row space bijectively onto the column space. The null-space component is destroyed; the row-space component survives intact.`,
//     before: ``,
//     after: ``,
//     link: ``,
//   },
//   obj10: {
//     title: `Summary: Image and Kernel Side by Side`,
//     content: `The whole page revolves around a single duality: the image lives in the codomain and records what T reaches, while the kernel lives in the domain and records what T destroys. Every concept introduced — injectivity, surjectivity, bijectivity, rank-nullity, dimension constraints, the fundamental decomposition — is a relation between these two subspaces. The table below sets them side by side across every attribute the page has touched, so the symmetry and the link supplied by rank-nullity are visible at a glance.`,
//     before: ``,
//     after: ``,
//     link: ``,
//   },
// }


// const introContent = {
//   title: `What a Transformation Hits and What It Kills`,
//   content: `Every linear transformation partitions its domain into two complementary pieces: the kernel, consisting of everything that maps to zero, and a complement that maps bijectively onto the image. The dimensions of the kernel and image are locked together by the rank-nullity theorem, and their relationship determines whether the transformation is injective, surjective, or neither.`,
// }



// const faqQuestions = {
//   obj1: {
//     question: "What is the image of a linear transformation?",
//     answer: "The image (or range) of T is the set of all outputs: Im(T) = {T(v) : v ∈ V}. It is a subspace of the codomain. For matrix transformations, the image is the column space of A. Its dimension equals the rank of A, and a vector w is in the image if and only if Ax = w has a solution.",
//     sectionId: "1"
//   },
//   obj2: {
//     question: "What is the kernel of a linear transformation?",
//     answer: "The kernel of T is the set of all inputs that map to zero: ker(T) = {v ∈ V : T(v) = 0}. It is a subspace of the domain. For matrix transformations, the kernel is the null space of A. Its dimension (the nullity) equals n minus the rank.",
//     sectionId: "2"
//   },
//   obj3: {
//     question: "How do you determine if a linear transformation is injective?",
//     answer: "A linear transformation is injective (one-to-one) if and only if its kernel is trivial: ker(T) = {0}. For matrix transformations, this is equivalent to full column rank, linearly independent columns, no free variables, and (for square matrices) nonzero determinant.",
//     sectionId: "3"
//   },
//   obj4: {
//     question: "What is the rank-nullity theorem?",
//     answer: "The rank-nullity theorem states that dim(Im(T)) + dim(ker(T)) = dim(V) for any linear transformation T: V → W. The domain dimensions split between what the map preserves (the image) and what it destroys (the kernel). For matrices, rank + nullity = n.",
//     sectionId: "6"
//   },
//   obj5: {
//     question: "When is a linear transformation an isomorphism?",
//     answer: "A linear transformation is an isomorphism when it is both injective and surjective (bijective). For maps between spaces of equal dimension, any one of the three conditions implies the other two. For matrix transformations, this is equivalent to the matrix being square and invertible.",
//     sectionId: "5"
//   }
// }


// const schemas = {
//   learningResource: {
//     "@context": "https://schema.org",
//     "@type": "LearningResource",
//     "name": "Image and Kernel of Linear Transformations",
//     "description": "Image and kernel of linear transformations: definitions, injectivity, surjectivity, isomorphisms, rank-nullity theorem, dimension constraints, computation, and fundamental decomposition.",
//     "url": "https://www.learnmathclass.com/linear-algebra/transformations/image-kernel",
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
//       "name": "Image and Kernel"
//     },
//     "teaches": [
//       "Image (range) as column space of a matrix",
//       "Kernel (null space) as solution set of Ax = 0",
//       "Injectivity via trivial kernel",
//       "Surjectivity via full row rank",
//       "Isomorphisms and bijectivity",
//       "Rank-nullity theorem for linear maps",
//       "Dimension constraints on injectivity and surjectivity",
//       "Fundamental decomposition of the domain"
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
//         "name": "Image and Kernel",
//         "item": "https://www.learnmathclass.com/linear-algebra/transformations/image-kernel"
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
//     obj7Table,
//     summaryTable,
//     faqQuestions,
//     schemas,
//     seoData: {
//       title: "Image & Kernel: Injectivity and Surjectivity | Learn Math Class",
//       description: "Image and kernel of linear transformations: definitions, injectivity, surjectivity, isomorphisms, rank-nullity theorem, dimension constraints, computation, and fundamental decomposition.",
//       keywords: keyWords.join(", "),
//       url: "/linear-algebra/transformations/image-kernel",
//       name: "Image and Kernel of Linear Transformations"
//     },
//   }
// }
//    }

// export default function ImageKernelPage({seoData, sectionsContent, introContent, obj4Table, obj7Table, summaryTable, faqQuestions, schemas}) {

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
//           <div key={'obj7-table'} style={tableWrapStyle}
//                dangerouslySetInnerHTML={{ __html: obj7Table }} />,
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
//           <div key={'summary-table'} style={tableWrapStyle}
//                dangerouslySetInnerHTML={{ __html: summaryTable }} />,
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
//    <h1 className='title' style={{marginTop:'0px',marginBottom:'10px'}}>Image and Kernel of Linear Transformation</h1>
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


// tables-optimized: v4 | 2026-05-22 | 3 tables (obj4 comparison, obj7 comparison, obj10 summary capstone)

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
import NotationSection from '@/app/components/page-components/content-components/NotationSection'
import IdentitySheet from '@/app/components/infographics/linear-algebra/IdentitySheet'
import DiagramFrame from '@/app/components/infographics/DiagramsFrame'


export async function getStaticProps(){
const keyWords = [
  "image linear transformation",
  "kernel linear transformation",
  "null space column space",
  "rank-nullity theorem",
  "injective linear map",
  "surjective linear map",
  "isomorphism linear algebra",
  "kernel null space",
  "image range transformation",
  "one-to-one onto linear",
  "dimension constraints transformations",
  "computing image kernel",
  "fundamental decomposition",
  "bijective linear transformation"
]

const linkStyle = 'color: inherit; text-decoration: underline;'

// ---------- TABLES ----------

// obj4 — comparison: injectivity vs surjectivity equivalence chains
const obj4Table = `
<table class="styled-table" style="border-collapse: collapse; width: 75%;margin:auto; background: white; box-shadow: 0 2px 10px rgba(0,0,0,0.1); border-radius: 8px; overflow: hidden; font-family: Arial, sans-serif;">
  <thead>
    <tr>
      <th style="${tableHeaders.comparison}">Equivalent condition</th>
      <th style="${tableHeaders.comparison}">Injectivity (one-to-one)</th>
      <th style="${tableHeaders.comparison}">Surjectivity (onto)</th>
    </tr>
  </thead>
  <tbody>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Map-level definition</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">T(u) = T(v) ⇒ u = v</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">every w ∈ W is the image of some v</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Kernel / image</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">ker(T) = {0}</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">Im(T) = W</td>
    </tr>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Rank condition</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">rank(A) = n (full column rank)</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">rank(A) = m (full row rank)</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Columns / rows of A</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">columns are <a href="/linear-algebra/vector-spaces/linear-independence" style="${linkStyle}">linearly independent</a></td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">columns span ℝᵐ (column space = ℝᵐ)</td>
    </tr>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">System Ax = b behavior</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">at most one solution for every b</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">at least one solution for every b</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Echelon-form trait</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">no free variables in Ax = 0</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">every row contains a pivot</td>
    </tr>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; font-weight: bold; color: #06357a;">Determinant (square A only)</td>
      <td style="padding: 12px 15px; color: #34495e;">det(A) ≠ 0</td>
      <td style="padding: 12px 15px; color: #34495e;">det(A) ≠ 0 (collapses to the same test)</td>
    </tr>
  </tbody>
</table>
`

// obj7 — comparison: dimension relations × possibility of inj./surj./bij.
const obj7Table = `
<table class="styled-table" style="border-collapse: collapse; width: 75%;margin:auto; background: white; box-shadow: 0 2px 10px rgba(0,0,0,0.1); border-radius: 8px; overflow: hidden; font-family: Arial, sans-serif;">
  <thead>
    <tr>
      <th style="${tableHeaders.comparison}">Dimension relation</th>
      <th style="${tableHeaders.comparison} text-align: center;">Injective possible?</th>
      <th style="${tableHeaders.comparison} text-align: center;">Surjective possible?</th>
      <th style="${tableHeaders.comparison} text-align: center;">Bijective possible?</th>
      <th style="${tableHeaders.comparison}">Forced consequence</th>
    </tr>
  </thead>
  <tbody>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">dim(V) &lt; dim(W)</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #27ae60; text-align: center; font-weight: bold; font-size: 18px;">✓</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #e74c3c; text-align: center; font-weight: bold; font-size: 18px;">✗</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #e74c3c; text-align: center; font-weight: bold; font-size: 18px;">✗</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">image is a proper subspace of W</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">dim(V) = dim(W)</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #27ae60; text-align: center; font-weight: bold; font-size: 18px;">✓</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #27ae60; text-align: center; font-weight: bold; font-size: 18px;">✓</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #27ae60; text-align: center; font-weight: bold; font-size: 18px;">✓</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">injective ⇔ surjective ⇔ bijective (one check establishes all three)</td>
    </tr>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; font-weight: bold; color: #06357a;">dim(V) &gt; dim(W)</td>
      <td style="padding: 12px 15px; color: #e74c3c; text-align: center; font-weight: bold; font-size: 18px;">✗</td>
      <td style="padding: 12px 15px; color: #27ae60; text-align: center; font-weight: bold; font-size: 18px;">✓</td>
      <td style="padding: 12px 15px; color: #e74c3c; text-align: center; font-weight: bold; font-size: 18px;">✗</td>
      <td style="padding: 12px 15px; color: #34495e;">kernel forced to have dim ≥ dim(V) − dim(W)</td>
    </tr>
  </tbody>
</table>
`

// obj10 — summary capstone: image vs kernel side-by-side
// obj10 — the two subspaces, paired attribute by attribute
const imageKernelPairs = {
  kicker: 'Transformations \u00B7 image and kernel',
  title: 'Image and kernel, side by side',
  tallyLabel: 'attributes',
  intro: 'Two subspaces that live in different spaces and answer opposite questions. Every line below states the same attribute for both, and reading them in pairs is what makes the symmetry \u2014 and where it breaks \u2014 visible.',
  footnote: 'The pairing is not decorative: rank-nullity ties the two dimensions together, so the subspaces are not independent objects that happen to be worth comparing. Every direction of the domain is accounted for exactly once \u2014 either it survives into the image or it collapses into the kernel.',
  groups: [
    {
      heading: 'What each one is',
      identities: [
        {
          name: 'Definition',
          anchor: '#1',
          formula: '$\\operatorname{im}(T) = \\{T(\\mathbf{v})\\}$ vs $\\ker(T) = \\{\\mathbf{v} : T(\\mathbf{v}) = \\mathbf{0}\\}$',
          condition: 'outputs produced vs inputs destroyed',
          key: true,
          note: 'The image collects what comes out; the kernel collects what goes in and vanishes. Both are subspaces rather than arbitrary sets \u2014 which is what makes dimension the right way to measure them.',
        },
        {
          name: 'Where it lives',
          anchor: '#1',
          formula: '$\\operatorname{im}(T) \\subseteq W$, $\\ker(T) \\subseteq V$',
          condition: 'codomain vs domain',
          strict: true,
          note: 'They sit in different spaces, so they cannot be compared directly, intersected, or added. This is the asymmetry the side-by-side layout most easily hides \u2014 the two columns are not two views of one object.',
        },
        {
          name: 'Matrix counterpart',
          anchor: '#8',
          formula: '$\\operatorname{Col}(A)$ vs $\\operatorname{Null}(A)$',
          condition: 'for $T(\\mathbf{x}) = A\\mathbf{x}$',
          note: 'The [column space and null space](!/linear-algebra/vector-spaces/fundamental-spaces) under different names. Everything on this page is therefore computable by row reduction, and the abstract statement and the matrix statement never diverge.',
        },
      ],
    },
    {
      heading: 'How each is computed and measured',
      identities: [
        {
          name: 'Dimension',
          anchor: '#6',
          formula: '$\\operatorname{rank}(A)$ vs $n - \\operatorname{rank}(A)$',
          condition: 'summing to $n = \\dim V$',
          key: true,
          note: 'Rank-nullity. The two dimensions are not independently chosen \u2014 fixing one fixes the other, because every dimension of the domain either survives or collapses. Note the sum is $\\dim V$, not $\\dim W$: the theorem is about the domain.',
        },
        {
          name: 'How to compute it',
          anchor: '#8',
          formula: 'pivot columns of the **original** $A$ vs RREF parametric solution',
          condition: 'both from one reduction',
          strict: true,
          note: 'The image basis is taken from $A$ itself \u2014 row operations change the column space \u2014 while the kernel basis comes from the reduced form. Opposite rules from the same computation, and the pair most often confused.',
        },
      ],
    },
    {
      heading: 'What the extreme cases mean',
      identities: [
        {
          name: 'Trivial',
          anchor: '#3',
          formula: '$\\operatorname{im}(T) = \\{\\mathbf{0}\\}$ vs $\\ker(T) = \\{\\mathbf{0}\\}$',
          condition: '$T$ is the zero map vs $T$ is injective',
          note: 'Here the symmetry breaks hardest. A trivial image means the map does nothing at all; a trivial kernel means it loses nothing \u2014 the strongest possible statement in the other direction. Same word, opposite significance.',
        },
        {
          name: 'Full',
          anchor: '#4',
          formula: '$\\operatorname{im}(T) = W$ vs $\\ker(T) = V$',
          condition: '$T$ is surjective vs $T$ is the zero map',
          note: 'And again reversed. A full image is surjectivity; a full kernel is the zero map. Both extremes of the kernel column describe degenerate maps, while the image column runs from degenerate to ideal \u2014 the columns are not mirror images.',
        },
      ],
    },
  ],
}

// ---------- SECTIONS ----------

// const sectionsContent = {
//   obj1: {
//     title: `The Image`,
//     content: `The image (or range) of a linear transformation $T: V \\to W$ is the set of all outputs:

// $$\\text{Im}(T) = \\{T(\\mathbf{v}) : \\mathbf{v} \\in V\\}$$

// The image is a [subspace](!/linear-algebra/vector-spaces/subspaces) of $W$. It contains $T(\\mathbf{0}) = \\mathbf{0}$, and if $T(\\mathbf{u})$ and $T(\\mathbf{v})$ are in the image, then so is $cT(\\mathbf{u}) + dT(\\mathbf{v}) = T(c\\mathbf{u} + d\\mathbf{v})$ — closure under both operations follows from linearity.

// When $T(\\mathbf{x}) = A\\mathbf{x}$ for a [matrix](!/linear-algebra/matrix) $A$, the image is the [column space](!/linear-algebra/vector-spaces/fundamental-spaces) of $A$: the set of all vectors expressible as linear combinations of the columns. The [dimension](!/linear-algebra/vector-spaces/dimension) of the image equals the [rank](!/linear-algebra/matrix/rank) of $A$.

// The image answers the reachability question: a vector $\\mathbf{w} \\in W$ is in the image if and only if the equation $T(\\mathbf{v}) = \\mathbf{w}$ — equivalently, $A\\mathbf{x} = \\mathbf{w}$ — has a solution.`,
//     before: ``,
//     after: ``,
//     link: ``,
//   },
//   obj2: {
//     title: `The Kernel`,
//     content: `The kernel (or null space) of $T: V \\to W$ is the set of all inputs that map to zero:

// $$\\ker(T) = \\{\\mathbf{v} \\in V : T(\\mathbf{v}) = \\mathbf{0}\\}$$

// The kernel is a [subspace](!/linear-algebra/vector-spaces/subspaces) of $V$. It contains $\\mathbf{0}$ (since $T(\\mathbf{0}) = \\mathbf{0}$), and if $T(\\mathbf{u}) = \\mathbf{0}$ and $T(\\mathbf{v}) = \\mathbf{0}$, then $T(c\\mathbf{u} + d\\mathbf{v}) = cT(\\mathbf{u}) + dT(\\mathbf{v}) = \\mathbf{0}$, so $c\\mathbf{u} + d\\mathbf{v} \\in \\ker(T)$.

// When $T(\\mathbf{x}) = A\\mathbf{x}$, the kernel is the [null space](!/linear-algebra/vector-spaces/fundamental-spaces) of $A$: all solutions to the [homogeneous](!/linear-algebra/linear-systems/homogeneous) system $A\\mathbf{x} = \\mathbf{0}$. Its dimension is the nullity, equal to $n - \\text{rank}(A)$.

// The kernel measures the information lost by $T$. Vectors in the kernel are collapsed to $\\mathbf{0}$ — they represent directions that the transformation annihilates. A larger kernel means more information is destroyed.`,
//     before: ``,
//     after: ``,
//     link: ``,
//   },
//   obj3: {
//     title: `Injectivity`,
//     content: `A linear transformation $T$ is injective (one-to-one) if different inputs always produce different outputs: $T(\\mathbf{u}) = T(\\mathbf{v})$ implies $\\mathbf{u} = \\mathbf{v}$.

// For linear maps, injectivity has an elegant equivalent: $T$ is injective if and only if $\\ker(T) = \\{\\mathbf{0}\\}$. The proof is short. If $T(\\mathbf{u}) = T(\\mathbf{v})$, then $T(\\mathbf{u} - \\mathbf{v}) = T(\\mathbf{u}) - T(\\mathbf{v}) = \\mathbf{0}$, so $\\mathbf{u} - \\mathbf{v} \\in \\ker(T)$. If the kernel is trivial, $\\mathbf{u} - \\mathbf{v} = \\mathbf{0}$ and $\\mathbf{u} = \\mathbf{v}$.

// For matrix transformations, injectivity is equivalent to full column rank: $\\text{rank}(A) = n$. This means every column is a pivot column, no free variables exist in $A\\mathbf{x} = \\mathbf{0}$, the columns are [linearly independent](!/linear-algebra/vector-spaces/linear-independence), and the [determinant](!/linear-algebra/determinants) is nonzero (in the square case).

// Injectivity means the transformation preserves distinctness — no two different inputs are confused with each other.`,
//     before: ``,
//     after: ``,
//     link: ``,
//   },
//   obj4: {
//     title: `Surjectivity`,
//     content: `A linear transformation $T: V \\to W$ is surjective (onto) if $\\text{Im}(T) = W$ — every vector in the codomain is the image of some vector in the domain.

// For matrix transformations, surjectivity is equivalent to full row rank: $\\text{rank}(A) = m$. This means every row contains a pivot, the column space is all of $\\mathbb{R}^m$, and the [system](!/linear-algebra/linear-systems) $A\\mathbf{x} = \\mathbf{b}$ has a solution for every right-hand side $\\mathbf{b}$.

// Surjectivity means the transformation has no blind spots — every output is reachable from some input. Failure of surjectivity means the image is a proper subspace of the codomain: certain vectors in $W$ are inherently unreachable, no matter what input is chosen.`,
//     before: ``,
//     after: ``,
//     link: ``,
//   },
//   obj5: {
//     title: `Bijectivity and Isomorphisms`,
//     content: `A linear transformation that is both injective and surjective is bijective. A bijective linear transformation is called an isomorphism — it establishes that the domain and codomain are structurally identical as [vector spaces](!/linear-algebra/vector-spaces).

// For a map $T: V \\to W$ between spaces of equal dimension ($\\dim(V) = \\dim(W) = n$), the three conditions collapse: injective $\\iff$ surjective $\\iff$ bijective. Checking any one of the three establishes the other two. This is because the rank-nullity theorem forces $\\dim(\\text{Im}(T)) + \\dim(\\ker(T)) = n$, and $\\dim(\\text{Im}(T)) \\leq n = \\dim(W)$. If the kernel is trivial (injective), the image has dimension $n$ and must equal all of $W$ (surjective). If the image is all of $W$ (surjective), the kernel must have dimension $0$ (injective).

// For matrix transformations between spaces of the same dimension, bijectivity is equivalent to the matrix being square and [invertible](!/linear-algebra/matrix/inverse).`,
//     before: ``,
//     after: ``,
//     link: ``,
//   },
//   obj6: {
//     title: `The Rank-Nullity Theorem for Maps`,
//     content: `For a linear transformation $T: V \\to W$ with $V$ finite-dimensional:

// $$\\dim(\\text{Im}(T)) + \\dim(\\ker(T)) = \\dim(V)$$

// The domain dimensions split between what the map preserves and what it destroys. The image captures the dimensions that survive; the kernel captures the dimensions that are annihilated.

// For [matrix](!/linear-algebra/matrix) transformations $T(\\mathbf{x}) = A\\mathbf{x}$, this becomes $\\text{rank}(A) + \\text{nullity}(A) = n$ — the familiar [rank-nullity theorem](!/linear-algebra/matrix/rank) in concrete language.

// The theorem constrains the interplay between injectivity and surjectivity. If $\\dim(V) > \\dim(W)$, the image can have at most $\\dim(W)$ dimensions, forcing the kernel to have at least $\\dim(V) - \\dim(W)$ dimensions — the map cannot be injective. If $\\dim(V) < \\dim(W)$, the image cannot fill all of $W$ — the map cannot be surjective.`,
//     before: ``,
//     after: ``,
//     link: ``,
//   },
//   obj7: {
//     title: `Dimension Constraints`,
//     content: `The rank-nullity theorem imposes hard limits on what a linear transformation can achieve.

// $T: V \\to W$ can be injective only if $\\dim(V) \\leq \\dim(W)$. A map from a larger space to a smaller one must collapse some directions — the kernel is forced to be nontrivial.

// $T: V \\to W$ can be surjective only if $\\dim(V) \\geq \\dim(W)$. A map from a smaller space to a larger one cannot cover all directions — the image is a proper subspace.

// $T$ can be bijective only if $\\dim(V) = \\dim(W)$. This is necessary but not sufficient — even with equal dimensions, the map must still have full rank.

// These constraints apply to all linear maps, not just matrix transformations. They are consequences of the rank-nullity theorem and the dimension theory of [vector spaces](!/linear-algebra/vector-spaces/dimension).`,
//     before: ``,
//     after: ``,
//     link: ``,
//   },
//   obj8: {
//     title: `Computing the Image and Kernel`,
//     content: `For a matrix transformation $T(\\mathbf{x}) = A\\mathbf{x}$, the image and kernel are computed by [row reduction](!/linear-algebra/linear-systems/gaussian-elimination).

// The kernel is the null space of $A$: solve $A\\mathbf{x} = \\mathbf{0}$, reduce to [echelon form](!/linear-algebra/linear-systems/echelon-form), and express the solution in parametric vector form. Each free variable contributes one [basis](!/linear-algebra/vector-spaces) vector for $\\ker(T)$.

// The image is the column space of $A$: row reduce $A$, identify the pivot columns, and take the corresponding columns of the original matrix $A$ as a basis for $\\text{Im}(T)$.

// ## Worked Example

// For $A = \\begin{pmatrix} 1 & 2 & 3 \\\\ 0 & 1 & 1 \\\\ 1 & 3 & 4 \\end{pmatrix}$, row reduction gives $\\begin{pmatrix} 1 & 2 & 3 \\\\ 0 & 1 & 1 \\\\ 0 & 0 & 0 \\end{pmatrix}$. Pivots in columns $1$ and $2$. The image has basis $\\{(1, 0, 1), (2, 1, 3)\\}$ — two-dimensional. The kernel has one free variable ($x_3 = t$), giving $\\ker(T) = \\text{Span}\\{(-1, -1, 1)\\}$ — one-dimensional. Check: $2 + 1 = 3 = n$.`,
//     before: ``,
//     after: ``,
//     link: ``,
//   },
//   obj9: {
//     title: `The Fundamental Decomposition`,
//     content: `The rank-nullity theorem has a structural interpretation that goes beyond dimension counting. The domain $V$ decomposes as a direct sum:

// $$V = \\ker(T) \\oplus (\\text{a complement of } \\ker(T))$$

// The transformation $T$ kills everything in the kernel and maps the complement bijectively onto the image. Every vector $\\mathbf{v} \\in V$ splits as $\\mathbf{v} = \\mathbf{v}_k + \\mathbf{v}_c$ where $\\mathbf{v}_k \\in \\ker(T)$ and $\\mathbf{v}_c$ is in the complement. Then $T(\\mathbf{v}) = T(\\mathbf{v}_c)$, and the restriction of $T$ to the complement is a bijection onto $\\text{Im}(T)$.

// For matrix transformations, the [four fundamental subspaces](!/linear-algebra/vector-spaces/fundamental-spaces) provide the natural complement: the row space of $A$ is the orthogonal complement of the null space in $\\mathbb{R}^n$, and $A$ maps the row space bijectively onto the column space. The null-space component is destroyed; the row-space component survives intact.`,
//     before: ``,
//     after: ``,
//     link: ``,
//   },
//   obj10: {
//     title: `Summary: Image and Kernel Side by Side`,
//     content: `The whole page revolves around a single duality: the image lives in the codomain and records what T reaches, while the kernel lives in the domain and records what T destroys. Every concept introduced — injectivity, surjectivity, bijectivity, rank-nullity, dimension constraints, the fundamental decomposition — is a relation between these two subspaces. The table below sets them side by side across every attribute the page has touched, so the symmetry and the link supplied by rank-nullity are visible at a glance.`,
//     before: ``,
//     after: ``,
//     link: ``,
//   },
// }


// tables-optimized: v4 | 2026-05-22 | 3 tables (obj4 comparison, obj7 comparison, obj10 summary capstone)

// ---------- SECTIONS ----------

const sectionsContent = {
  obj1: {
    title: `The Image`,
    content: `The image (or range) of a linear transformation $T: V \\to W$ is the set of all outputs:

@academic[formula_callout:Image Definition
$$\\text{Im}(T) = \\{T(\\mathbf{v}) : \\mathbf{v} \\in V\\} \\subseteq W$$
/linear-algebra/formulas#image_definition]@

@academic[formulas_link:Browse all linear algebra formulas
/linear-algebra/formulas]@

The image is a [subspace](!/linear-algebra/vector-spaces/subspaces) of $W$. It contains $T(\\mathbf{0}) = \\mathbf{0}$, and if $T(\\mathbf{u})$ and $T(\\mathbf{v})$ are in the image, then so is $cT(\\mathbf{u}) + dT(\\mathbf{v}) = T(c\\mathbf{u} + d\\mathbf{v})$ — closure under both operations follows from linearity.

When $T(\\mathbf{x}) = A\\mathbf{x}$ for a [matrix](!/linear-algebra/matrix) $A$, the image is the [column space](!/linear-algebra/vector-spaces/fundamental-spaces) of $A$: the set of all vectors expressible as linear combinations of the columns. The [dimension](!/linear-algebra/vector-spaces/dimension) of the image equals the [rank](!/linear-algebra/matrix/rank) of $A$.

The image answers the reachability question: a vector $\\mathbf{w} \\in W$ is in the image if and only if the equation $T(\\mathbf{v}) = \\mathbf{w}$ — equivalently, $A\\mathbf{x} = \\mathbf{w}$ — has a solution.`,
    before: ``,
    after: ``,
    link: ``,
  },
  obj2: {
    title: `The Kernel`,
    content: `The kernel (or null space) of $T: V \\to W$ is the set of all inputs that map to zero:

@academic[formula_callout:Kernel Definition
$$\\ker(T) = \\{\\mathbf{v} \\in V : T(\\mathbf{v}) = \\mathbf{0}\\} \\subseteq V$$
/linear-algebra/formulas#kernel_definition]@

@academic[formulas_link:Browse all linear algebra formulas
/linear-algebra/formulas]@

The kernel is a [subspace](!/linear-algebra/vector-spaces/subspaces) of $V$. It contains $\\mathbf{0}$ (since $T(\\mathbf{0}) = \\mathbf{0}$), and if $T(\\mathbf{u}) = \\mathbf{0}$ and $T(\\mathbf{v}) = \\mathbf{0}$, then $T(c\\mathbf{u} + d\\mathbf{v}) = cT(\\mathbf{u}) + dT(\\mathbf{v}) = \\mathbf{0}$, so $c\\mathbf{u} + d\\mathbf{v} \\in \\ker(T)$.

When $T(\\mathbf{x}) = A\\mathbf{x}$, the kernel is the [null space](!/linear-algebra/vector-spaces/fundamental-spaces) of $A$: all solutions to the [homogeneous](!/linear-algebra/linear-systems/homogeneous) system $A\\mathbf{x} = \\mathbf{0}$. Its dimension is the nullity, equal to $n - \\text{rank}(A)$.

The kernel measures the information lost by $T$. Vectors in the kernel are collapsed to $\\mathbf{0}$ — they represent directions that the transformation annihilates. A larger kernel means more information is destroyed.`,
    before: ``,
    after: ``,
    link: ``,
  },
  notation: {
    title: `Kernel and Image Notation`,
    lead: `A lowercase German survivor next to a capitalized rival with a double life, the colon that declares a map, and the dictionary between map-speak and matrix-speak.`,
    inherited: `$\\to$ and $\\mapsto$ — [the four-subspace notation](!/linear-algebra/vector-spaces/fundamental-spaces#notation); bold vectors — [vector notation](!/linear-algebra/vectors/basic-operations#notation).`,
    entries: [
      {
        id: 'ker-im-marks',
        tex: `$\\ker(T)$ · $\\text{Im}(T)$`,
        read: `The kernel and image of T`,
        means: `Both defined above — the notational quirk is the mismatched capitalization, faithfully mirroring the literature: lowercase $\\ker$, from the German *Kern* of Emmy Noether's school, against a usually-capitalized $\\text{Im}$.`,
        cases: `The capital on $\\text{Im}$ is partly self-defense: lowercase $\\operatorname{im}$ exists, but $\\text{Im}$ has a double life — $\\text{Im}(z)$ is the [imaginary part](!/complex-numbers/algebraic-form) of a complex number, and in complex vector spaces both readings can occur in one paragraph.`,
        alsoWritten: `$\\operatorname{im}(T)$, $\\operatorname{ran}(T)$, or the word “range” — with range itself ambiguous, as the $R(A)$ wars at the [four subspaces](!/linear-algebra/vector-spaces/fundamental-spaces#notation) attest.`,
        confusedWith: `Each other's habitat. $\\ker(T) \\subseteq V$ lives in the *domain*, $\\text{Im}(T) \\subseteq W$ in the *codomain* — swapping the homes is the commonest conceptual slip the notation guards against.`,
      },
      {
        id: 'map-signature',
        tex: `$T: V \\to W$`,
        read: `T, from V to W`,
        means: `The signature: colon binds the name to its spaces, the arrow points from domain to codomain. It declares *where* the map operates before any formula says *what* it does.`,
        cases: `Linear maps inherit a matrix privilege: $T\\mathbf{v}$ without parentheses, written like the product $A\\mathbf{x}$ it secretly is. General functions keep their parentheses; linearity is what licenses the juxtaposition.`,
        alsoWritten: `$V \\xrightarrow{\\;T\\;} W$ — the name riding on the arrow, standard in diagram-heavy texts.`,
        confusedWith: `The such-that colon. In $\\{\\mathbf{v} : T(\\mathbf{v}) = \\mathbf{0}\\}$ the colon means “such that” — the kernel's own definition above uses it — while in $T: V \\to W$ it binds a name. Same mark, adjacent lines, different grammar.`,
      },
      {
        id: 'two-languages',
        tex: `$\\text{Im}(T) = \\text{Col}(A)$, $\\; \\ker(T) = \\text{Null}(A)$`,
        read: `Image is column space; kernel is null space`,
        means: `The dictionary between the two dialects: map-speak ($\\ker$, $\\text{Im}$) and matrix-speak ($\\text{Null}$, $\\text{Col}$) name identical subspaces whenever $T(\\mathbf{x}) = A\\mathbf{x}$ — the translation both definitions above perform in their closing paragraphs.`,
        cases: `The dimensions translate too: rank–nullity reads $\\dim \\text{Im}(T) + \\dim \\ker(T) = \\dim V$ in map dialect and $\\text{rank}(A) + \\text{nullity}(A) = n$ in matrix dialect — as in **The Rank-Nullity Theorem for Maps** below. One theorem, two vocabularies.`,
        alsoWritten: `“Nullity” — the named dimension of the kernel; the rare case where a *dimension* got its own word instead of a $\\dim$ expression.`,
        confusedWith: `Two different theories. Nothing differs but vocabulary — a reader fluent in one dialect and not the other misses that every fact transfers verbatim.`,
      },
    ],
    symbolsHref: `/math-symbols/linear-algebra`,
    symbolsLabel: `All linear algebra symbols`,
    parentHref: `/linear-algebra/transformations`,
    parentLabel: `Transformations`,
  },
  obj3: {
    title: `Injectivity`,
    content: `A linear transformation $T$ is injective (one-to-one) if different inputs always produce different outputs: $T(\\mathbf{u}) = T(\\mathbf{v})$ implies $\\mathbf{u} = \\mathbf{v}$.

For linear maps, injectivity has an elegant equivalent:

@academic[formula_callout:Injectivity Kernel Criterion
$$T \\text{ injective} \\iff \\ker(T) = \\{\\mathbf{0}\\}$$
/linear-algebra/formulas#injectivity_kernel_criterion]@

@academic[formulas_link:Browse all linear algebra formulas
/linear-algebra/formulas]@

The proof is short. If $T(\\mathbf{u}) = T(\\mathbf{v})$, then $T(\\mathbf{u} - \\mathbf{v}) = T(\\mathbf{u}) - T(\\mathbf{v}) = \\mathbf{0}$, so $\\mathbf{u} - \\mathbf{v} \\in \\ker(T)$. If the kernel is trivial, $\\mathbf{u} - \\mathbf{v} = \\mathbf{0}$ and $\\mathbf{u} = \\mathbf{v}$.

For matrix transformations, injectivity is equivalent to full column rank: $\\text{rank}(A) = n$. This means every column is a pivot column, no free variables exist in $A\\mathbf{x} = \\mathbf{0}$, the columns are [linearly independent](!/linear-algebra/vector-spaces/linear-independence), and the [determinant](!/linear-algebra/determinants) is nonzero (in the square case).

Injectivity means the transformation preserves distinctness — no two different inputs are confused with each other.`,
    before: ``,
    after: ``,
    link: ``,
  },
  obj4: {
    title: `Surjectivity`,
    content: `A linear transformation $T: V \\to W$ is surjective (onto) if $\\text{Im}(T) = W$ — every vector in the codomain is the image of some vector in the domain.

For matrix transformations, surjectivity is equivalent to full row rank: $\\text{rank}(A) = m$. This means every row contains a pivot, the column space is all of $\\mathbb{R}^m$, and the [system](!/linear-algebra/linear-systems) $A\\mathbf{x} = \\mathbf{b}$ has a solution for every right-hand side $\\mathbf{b}$.

Surjectivity means the transformation has no blind spots — every output is reachable from some input. Failure of surjectivity means the image is a proper subspace of the codomain: certain vectors in $W$ are inherently unreachable, no matter what input is chosen.`,
    before: ``,
    after: ``,
    link: ``,
  },
  obj5: {
    title: `Bijectivity and Isomorphisms`,
    content: `A linear transformation that is both injective and surjective is bijective. A bijective linear transformation is called an isomorphism — it establishes that the domain and codomain are structurally identical as [vector spaces](!/linear-algebra/vector-spaces).

For a map $T: V \\to W$ between spaces of equal dimension, the three conditions collapse:

@academic[formula_callout:Bijectivity Equal Dim Case
$$\\dim V = \\dim W \\Rightarrow \\bigl(T \\text{ injective} \\iff T \\text{ surjective} \\iff T \\text{ bijective}\\bigr)$$
/linear-algebra/formulas#bijectivity_equal_dim_case]@

@academic[formulas_link:Browse all linear algebra formulas
/linear-algebra/formulas]@

Checking any one of the three establishes the other two. This is because the rank-nullity theorem forces $\\dim(\\text{Im}(T)) + \\dim(\\ker(T)) = n$ (where $n = \\dim(V) = \\dim(W)$), and $\\dim(\\text{Im}(T)) \\leq n$. If the kernel is trivial (injective), the image has dimension $n$ and must equal all of $W$ (surjective). If the image is all of $W$ (surjective), the kernel must have dimension $0$ (injective).

For matrix transformations between spaces of the same dimension, bijectivity is equivalent to the matrix being square and [invertible](!/linear-algebra/matrix/inverse).`,
    before: ``,
    after: ``,
    link: ``,
  },
  obj6: {
    title: `The Rank-Nullity Theorem for Maps`,
    content: `For a linear transformation $T: V \\to W$ with $V$ finite-dimensional:

@academic[formula_callout:Rank-Nullity for Maps
$$\\dim\\text{Im}(T) + \\dim\\ker(T) = \\dim V$$
/linear-algebra/formulas#rank_nullity_for_maps]@

@academic[formulas_link:Browse all linear algebra formulas
/linear-algebra/formulas]@

The domain dimensions split between what the map preserves and what it destroys. The image captures the dimensions that survive; the kernel captures the dimensions that are annihilated.

For [matrix](!/linear-algebra/matrix) transformations $T(\\mathbf{x}) = A\\mathbf{x}$, this becomes $\\text{rank}(A) + \\text{nullity}(A) = n$ — the familiar [rank-nullity theorem](!/linear-algebra/matrix/rank) in concrete language.

The theorem constrains the interplay between injectivity and surjectivity. If $\\dim(V) > \\dim(W)$, the image can have at most $\\dim(W)$ dimensions, forcing the kernel to have at least $\\dim(V) - \\dim(W)$ dimensions — the map cannot be injective. If $\\dim(V) < \\dim(W)$, the image cannot fill all of $W$ — the map cannot be surjective.`,
    before: ``,
    after: ``,
    link: ``,
  },
  obj7: {
    title: `Dimension Constraints`,
    content: `The rank-nullity theorem imposes hard limits on what a linear transformation can achieve.

$T: V \\to W$ can be injective only if $\\dim(V) \\leq \\dim(W)$. A map from a larger space to a smaller one must collapse some directions — the kernel is forced to be nontrivial.

$T: V \\to W$ can be surjective only if $\\dim(V) \\geq \\dim(W)$. A map from a smaller space to a larger one cannot cover all directions — the image is a proper subspace.

$T$ can be bijective only if $\\dim(V) = \\dim(W)$. This is necessary but not sufficient — even with equal dimensions, the map must still have full rank.

These constraints apply to all linear maps, not just matrix transformations. They are consequences of the rank-nullity theorem and the dimension theory of [vector spaces](!/linear-algebra/vector-spaces/dimension).`,
    before: ``,
    after: ``,
    link: ``,
  },
  obj8: {
    title: `Computing the Image and Kernel`,
    content: `For a matrix transformation $T(\\mathbf{x}) = A\\mathbf{x}$, the image and kernel are computed by [row reduction](!/linear-algebra/linear-systems/gaussian-elimination).

The kernel is the null space of $A$: solve $A\\mathbf{x} = \\mathbf{0}$, reduce to [echelon form](!/linear-algebra/linear-systems/echelon-form), and express the solution in parametric vector form. Each free variable contributes one [basis](!/linear-algebra/vector-spaces) vector for $\\ker(T)$.

The image is the column space of $A$: row reduce $A$, identify the pivot columns, and take the corresponding columns of the original matrix $A$ as a basis for $\\text{Im}(T)$.

## Worked Example

For $A = \\begin{pmatrix} 1 & 2 & 3 \\\\ 0 & 1 & 1 \\\\ 1 & 3 & 4 \\end{pmatrix}$, row reduction gives $\\begin{pmatrix} 1 & 2 & 3 \\\\ 0 & 1 & 1 \\\\ 0 & 0 & 0 \\end{pmatrix}$. Pivots in columns $1$ and $2$. The image has basis $\\{(1, 0, 1), (2, 1, 3)\\}$ — two-dimensional. The kernel has one free variable ($x_3 = t$), giving $\\ker(T) = \\text{Span}\\{(-1, -1, 1)\\}$ — one-dimensional. Check: $2 + 1 = 3 = n$.`,
    before: ``,
    after: ``,
    link: ``,
  },
  obj9: {
    title: `The Fundamental Decomposition`,
    content: `The rank-nullity theorem has a structural interpretation that goes beyond dimension counting. The domain $V$ decomposes as a direct sum:

$$V = \\ker(T) \\oplus (\\text{a complement of } \\ker(T))$$

The transformation $T$ kills everything in the kernel and maps the complement bijectively onto the image. Every vector $\\mathbf{v} \\in V$ splits as $\\mathbf{v} = \\mathbf{v}_k + \\mathbf{v}_c$ where $\\mathbf{v}_k \\in \\ker(T)$ and $\\mathbf{v}_c$ is in the complement. Then $T(\\mathbf{v}) = T(\\mathbf{v}_c)$, and the restriction of $T$ to the complement is a bijection onto $\\text{Im}(T)$.

For matrix transformations, the [four fundamental subspaces](!/linear-algebra/vector-spaces/fundamental-spaces) provide the natural complement: the row space of $A$ is the orthogonal complement of the null space in $\\mathbb{R}^n$, and $A$ maps the row space bijectively onto the column space. The null-space component is destroyed; the row-space component survives intact.`,
    before: ``,
    after: ``,
    link: ``,
  },
  obj10: {
    title: `Summary: Image and Kernel Side by Side`,
    content: `The whole page revolves around a single duality: the image lives in the codomain and records what T reaches, while the kernel lives in the domain and records what T destroys. Every concept introduced — injectivity, surjectivity, bijectivity, rank-nullity, dimension constraints, the fundamental decomposition — is a relation between these two subspaces. The table below sets them side by side across every attribute the page has touched, so the symmetry and the link supplied by rank-nullity are visible at a glance.`,
    before: ``,
    after: ``,
    link: ``,
  },
}


const introContent = {
  title: `What a Transformation Hits and What It Kills`,
  content: `Every linear transformation partitions its domain into two complementary pieces: the kernel, consisting of everything that maps to zero, and a complement that maps bijectively onto the image. The dimensions of the kernel and image are locked together by the rank-nullity theorem, and their relationship determines whether the transformation is injective, surjective, or neither.`,
}



const faqQuestions = {
  obj1: {
    question: "What is the image of a linear transformation?",
    answer: "The image (or range) of T is the set of all outputs: Im(T) = {T(v) : v ∈ V}. It is a subspace of the codomain. For matrix transformations, the image is the column space of A. Its dimension equals the rank of A, and a vector w is in the image if and only if Ax = w has a solution.",
    sectionId: "1"
  },
  obj2: {
    question: "What is the kernel of a linear transformation?",
    answer: "The kernel of T is the set of all inputs that map to zero: ker(T) = {v ∈ V : T(v) = 0}. It is a subspace of the domain. For matrix transformations, the kernel is the null space of A. Its dimension (the nullity) equals n minus the rank.",
    sectionId: "2"
  },
  obj3: {
    question: "How do you determine if a linear transformation is injective?",
    answer: "A linear transformation is injective (one-to-one) if and only if its kernel is trivial: ker(T) = {0}. For matrix transformations, this is equivalent to full column rank, linearly independent columns, no free variables, and (for square matrices) nonzero determinant.",
    sectionId: "3"
  },
  obj4: {
    question: "What is the rank-nullity theorem?",
    answer: "The rank-nullity theorem states that dim(Im(T)) + dim(ker(T)) = dim(V) for any linear transformation T: V → W. The domain dimensions split between what the map preserves (the image) and what it destroys (the kernel). For matrices, rank + nullity = n.",
    sectionId: "6"
  },
  obj5: {
    question: "When is a linear transformation an isomorphism?",
    answer: "A linear transformation is an isomorphism when it is both injective and surjective (bijective). For maps between spaces of equal dimension, any one of the three conditions implies the other two. For matrix transformations, this is equivalent to the matrix being square and invertible.",
    sectionId: "5"
  }
}


const schemas = {
  learningResource: {
    "@context": "https://schema.org",
    "@type": "LearningResource",
    "name": "Image and Kernel of Linear Transformations",
    "description": "Image and kernel of linear transformations: definitions, injectivity, surjectivity, isomorphisms, rank-nullity theorem, dimension constraints, computation, and fundamental decomposition.",
    "url": "https://www.learnmathclass.com/linear-algebra/transformations/image-kernel",
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
      "name": "Image and Kernel"
    },
    "teaches": [
      "Image (range) as column space of a matrix",
      "Kernel (null space) as solution set of Ax = 0",
      "Injectivity via trivial kernel",
      "Surjectivity via full row rank",
      "Isomorphisms and bijectivity",
      "Rank-nullity theorem for linear maps",
      "Dimension constraints on injectivity and surjectivity",
      "Fundamental decomposition of the domain"
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
        "name": "Image and Kernel",
        "item": "https://www.learnmathclass.com/linear-algebra/transformations/image-kernel"
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
    obj7Table,
    imageKernelPairs,
    faqQuestions,
    schemas,
    seoData: {
      title: "Image & Kernel: Injectivity and Surjectivity | Learn Math Class",
      description: "Image and kernel of linear transformations: definitions, injectivity, surjectivity, isomorphisms, rank-nullity theorem, dimension constraints, computation, and fundamental decomposition.",
      keywords: keyWords.join(", "),
      url: "/linear-algebra/transformations/image-kernel",
      name: "Image and Kernel of Linear Transformations"
    },
  }
}
   }

export default function ImageKernelPage({seoData, sectionsContent, introContent, obj4Table, obj7Table, imageKernelPairs, faqQuestions, schemas}) {

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
          <div key={'obj7-table'} style={tableWrapStyle}
               dangerouslySetInnerHTML={{ __html: obj7Table }} />,
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
          `Setting the two side by side invites reading them as mirror images, and for the first few attributes they very nearly are. They are not, and the places where the symmetry fails carry more information than the places where it holds — so the entries below are worth reading in pairs, with attention to which lines match and which reverse.`,
          <DiagramFrame
            key={'obj10-diagram'}
            id="image-kernel-pairs"
            title="Image and kernel, side by side"
            source="/linear-algebra/transformations/image-kernel"
          >
            <IdentitySheet data={imageKernelPairs} theme="navy" variant="ledger" />
          </DiagramFrame>,
          `The clearest break is at the extremes. A trivial kernel is the best case — the map destroys nothing and is injective — while a trivial image is the worst, since the map sends everything to zero. Reverse them and the same reversal happens: a full image means surjectivity, a full kernel means the zero map again. The kernel column runs from ideal to degenerate; the image column runs the other way.`,
          `What ties them together is dimension rather than structure. Rank-nullity says the two dimensions sum to $\\dim V$, so neither can be chosen independently of the other — every direction in the domain is accounted for exactly once, surviving into the image or collapsing into the kernel. Note the sum is over the domain: the codomain plays no part, which is why a map can have a small image without having a large kernel.`,
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
   <h1 className='title' style={{marginTop:'0px',marginBottom:'10px'}}>Image and Kernel of Linear Transformation</h1>
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