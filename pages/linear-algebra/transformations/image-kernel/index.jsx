
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
const summaryTable = `
<table class="styled-table" style="border-collapse: collapse; width: 75%;margin:auto; background: white; box-shadow: 0 2px 10px rgba(0,0,0,0.1); border-radius: 8px; overflow: hidden; font-family: Arial, sans-serif;">
  <thead>
    <tr>
      <th style="${tableHeaders.summary}">Attribute</th>
      <th style="${tableHeaders.summary}">Image of T</th>
      <th style="${tableHeaders.summary}">Kernel of T</th>
    </tr>
  </thead>
  <tbody>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Set-theoretic definition</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">{ T(v) : v ∈ V }</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">{ v ∈ V : T(v) = 0 }</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Where it lives</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">subspace of the codomain W</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">subspace of the domain V</td>
    </tr>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Matrix counterpart (T(x) = Ax)</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;"><a href="/linear-algebra/vector-spaces/fundamental-spaces" style="${linkStyle}">column space</a> of A</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;"><a href="/linear-algebra/vector-spaces/fundamental-spaces" style="${linkStyle}">null space</a> of A</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Dimension</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">rank(A)</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">nullity(A) = n − rank(A)</td>
    </tr>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">What it measures</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">reachable outputs — directions T can produce</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">information destroyed — directions T collapses to 0</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Computed by</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">pivot columns of A (original columns, not RREF)</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">parametric solution of Ax = 0 from RREF</td>
    </tr>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Trivial case</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">{0} ⇔ T is the zero map</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">{0} ⇔ T is injective</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Full case</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">= W ⇔ T is surjective</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">= V ⇔ T is the zero map</td>
    </tr>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; font-weight: bold; color: #06357a;">Linked by rank-nullity</td>
      <td style="padding: 12px 15px; color: #34495e;" colspan="2">dim(Im(T)) + dim(ker(T)) = dim(V) — what survives plus what is destroyed equals the input dimension</td>
    </tr>
  </tbody>
</table>
`

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
    summaryTable,
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

export default function ImageKernelPage({seoData, sectionsContent, introContent, obj4Table, obj7Table, summaryTable, faqQuestions, schemas}) {

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
          <div key={'summary-table'} style={tableWrapStyle}
               dangerouslySetInnerHTML={{ __html: summaryTable }} />,
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