
// tables-optimized: v4 | 2026-05-22 | 3 tables (obj4 comparison, obj5 aggregation, obj10 summary capstone)

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
  "linear transformation properties",
  "linearity conditions",
  "additivity homogeneity",
  "proving linearity",
  "disproving linearity counterexample",
  "one-step linearity test",
  "composition linear transformations",
  "invertible linear transformation",
  "isomorphism linear algebra",
  "T(0) = 0 linear map",
  "linear map consequences",
  "sum scalar multiple transformations",
  "linear transformation verification",
  "superposition principle"
]

const linkStyle = 'color: inherit; text-decoration: underline;'

// ---------- TABLES ----------

// obj4 — comparison/decision: disproof strategies, ordered by speed
const obj4Table = `
<table class="styled-table" style="border-collapse: collapse; width: 75%;margin:auto; background: white; box-shadow: 0 2px 10px rgba(0,0,0,0.1); border-radius: 8px; overflow: hidden; font-family: Arial, sans-serif;">
  <thead>
    <tr>
      <th style="${tableHeaders.comparison}">Strategy</th>
      <th style="${tableHeaders.comparison}">When to reach for it</th>
      <th style="${tableHeaders.comparison}">What it catches</th>
      <th style="${tableHeaders.comparison}">Example</th>
    </tr>
  </thead>
  <tbody>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Check T(0) = 0</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">first, always — the fastest single test</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">constant terms, translations, affine offsets</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">T(x) = x + 1: T(0) = 1 ≠ 0</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Scan components for non-linear terms</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">explicit formula T(x₁,…,xₙ) = (f₁,…,fₘ) given</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">products, powers > 1, |·|, √, constants</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">T(x, y) = (xy, y): product xy disqualifies</td>
    </tr>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Test additivity with specific u, v</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">formula passes T(0)=0 but has a power or product</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">nonlinear interaction between inputs</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">T(x,y) = (x², y): T(1,0)+T(1,0) = (2,0) ≠ T(2,0) = (4,0)</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; font-weight: bold; color: #06357a;">Test homogeneity with specific c</td>
      <td style="padding: 12px 15px; color: #34495e;">formula involves |·| or odd-degree behavior</td>
      <td style="padding: 12px 15px; color: #34495e;">nonlinear scaling (often via sign)</td>
      <td style="padding: 12px 15px; color: #34495e;">T(x) = |x|: T(−1·2) = 2 ≠ −1·T(2) = −2</td>
    </tr>
  </tbody>
</table>
`

// obj5 — aggregation: pointwise preservation identities
const obj5Table = `
<table class="styled-table" style="border-collapse: collapse; width: 75%;margin:auto; background: white; box-shadow: 0 2px 10px rgba(0,0,0,0.1); border-radius: 8px; overflow: hidden; font-family: Arial, sans-serif;">
  <thead>
    <tr>
      <th style="${tableHeaders.aggregation}">Identity</th>
      <th style="${tableHeaders.aggregation}">What it says</th>
      <th style="${tableHeaders.aggregation}">Source</th>
    </tr>
  </thead>
  <tbody>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">T(0) = 0</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">the zero vector always maps to the zero vector</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">homogeneity with c = 0</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">T(−v) = −T(v)</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">negation is preserved</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">homogeneity with c = −1</td>
    </tr>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">T(u − v) = T(u) − T(v)</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">subtraction is preserved</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">additivity combined with negation identity</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">T(Σ cᵢ vᵢ) = Σ cᵢ T(vᵢ)</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">linear combinations of any length are preserved</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">iterating additivity and homogeneity</td>
    </tr>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; font-weight: bold; color: #06357a;"><a href="/linear-algebra/vector-spaces/linear-independence" style="${linkStyle}">Linear dependence</a> is preserved</td>
      <td style="padding: 12px 15px; color: #34495e;">if {vᵢ} is dependent, then {T(vᵢ)} is dependent (independence may be destroyed but never created)</td>
      <td style="padding: 12px 15px; color: #34495e;">applying T to a dependence relation Σ cᵢ vᵢ = 0</td>
    </tr>
  </tbody>
</table>
`

// obj10 — summary capstone: closure under operations on transformations
const summaryTable = `
<table class="styled-table" style="border-collapse: collapse; width: 75%;margin:auto; background: white; box-shadow: 0 2px 10px rgba(0,0,0,0.1); border-radius: 8px; overflow: hidden; font-family: Arial, sans-serif;">
  <thead>
    <tr>
      <th style="${tableHeaders.summary}">Operation on linear maps</th>
      <th style="${tableHeaders.summary}">Definition</th>
      <th style="${tableHeaders.summary}">Result is linear?</th>
      <th style="${tableHeaders.summary}">Structural payoff</th>
    </tr>
  </thead>
  <tbody>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Composition S ∘ T</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">(S ∘ T)(u) = S(T(u))</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">yes — apply T's linearity inside S's</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">corresponds to <a href="/linear-algebra/matrix/operations" style="${linkStyle}">matrix multiplication</a>; associative, not commutative</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Inverse T⁻¹</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">T⁻¹ ∘ T = I, T ∘ T⁻¹ = I (when T is bijective)</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">yes — the inverse of a linear bijection is linear</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">an invertible T between equal-dim spaces is an isomorphism</td>
    </tr>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Sum S + T</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">(S + T)(v) = S(v) + T(v)</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">yes — pointwise sum of linear maps is linear</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">gives 𝓛(V, W) its addition</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Scalar multiple cT</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">(cT)(v) = c · T(v)</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">yes — scaling a linear map keeps it linear</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">gives 𝓛(V, W) its scalar multiplication</td>
    </tr>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; font-weight: bold; color: #06357a;">The whole set 𝓛(V, W)</td>
      <td style="padding: 12px 15px; color: #34495e;">all linear maps V → W with + and scalar mult.</td>
      <td style="padding: 12px 15px; color: #34495e;">— it is itself a vector space</td>
      <td style="padding: 12px 15px; color: #34495e;">dim 𝓛(V, W) = dim(V) · dim(W) (finite-dimensional case)</td>
    </tr>
  </tbody>
</table>
`

// ---------- SECTIONS ----------

// const sectionsContent = {
//   obj1: {
//     title: `The Two Linearity Conditions`,
//     content: `A function $T: V \\to W$ is linear if it satisfies two conditions for all $\\mathbf{u}, \\mathbf{v} \\in V$ and all scalars $c \\in \\mathbb{R}$:

// Additivity: $T(\\mathbf{u} + \\mathbf{v}) = T(\\mathbf{u}) + T(\\mathbf{v})$

// Homogeneity: $T(c\\mathbf{v}) = cT(\\mathbf{v})$

// Both conditions must hold for every choice of vectors and scalars — not just for specific examples. Verifying linearity on a few particular vectors does not suffice. Disproving linearity requires only a single counterexample: one pair of vectors where additivity fails, or one scalar where homogeneity fails.`,
//     before: ``,
//     after: ``,
//     link: ``,
//   },
//   obj2: {
//     title: `The One-Step Test`,
//     content: `The two conditions can be combined into a single check. $T$ is linear if and only if

// $$T(c\\mathbf{u} + d\\mathbf{v}) = cT(\\mathbf{u}) + dT(\\mathbf{v})$$

// for all vectors $\\mathbf{u}, \\mathbf{v} \\in V$ and all scalars $c, d \\in \\mathbb{R}$. Setting $c = d = 1$ recovers additivity. Setting $\\mathbf{v} = \\mathbf{0}$ recovers homogeneity. So the combined condition implies both individual conditions, and the converse is straightforward.

// The one-step test extends to arbitrary linear combinations: if $T$ is linear, then

// $$T(c_1\\mathbf{v}_1 + c_2\\mathbf{v}_2 + \\cdots + c_k\\mathbf{v}_k) = c_1T(\\mathbf{v}_1) + c_2T(\\mathbf{v}_2) + \\cdots + c_kT(\\mathbf{v}_k)$$

// Linear transformations commute with linear combinations of any length. This is the operational content of linearity — it says that $T$ can be "pulled through" any finite sum of scaled vectors.`,
//     before: ``,
//     after: ``,
//     link: ``,
//   },
//   obj3: {
//     title: `Proving Linearity`,
//     content: `To prove a given function $T$ is linear, take arbitrary vectors $\\mathbf{u}, \\mathbf{v}$ and arbitrary scalars $c, d$. Compute $T(c\\mathbf{u} + d\\mathbf{v})$ using the formula that defines $T$, then simplify and show the result equals $cT(\\mathbf{u}) + dT(\\mathbf{v})$.

// ## Worked Example

// Let $T: \\mathbb{R}^3 \\to \\mathbb{R}^2$ be defined by $T(x, y, z) = (2x - y, x + 3z)$. Take $\\mathbf{u} = (u_1, u_2, u_3)$ and $\\mathbf{v} = (v_1, v_2, v_3)$:

// $$T(c\\mathbf{u} + d\\mathbf{v}) = T(cu_1 + dv_1, \\; cu_2 + dv_2, \\; cu_3 + dv_3)$$

// $$= (2(cu_1 + dv_1) - (cu_2 + dv_2), \\; (cu_1 + dv_1) + 3(cu_3 + dv_3))$$

// $$= (c(2u_1 - u_2) + d(2v_1 - v_2), \\; c(u_1 + 3u_3) + d(v_1 + 3v_3))$$

// $$= c(2u_1 - u_2, \\; u_1 + 3u_3) + d(2v_1 - v_2, \\; v_1 + 3v_3) = cT(\\mathbf{u}) + dT(\\mathbf{v})$$

// Linearity holds. The key observation is that every component of $T$ is a linear expression in the input coordinates — no products, powers, or constant terms appear.`,
//     before: ``,
//     after: ``,
//     link: ``,
//   },
//   obj4: {
//     title: `Disproving Linearity`,
//     content: `To show $T$ is not linear, find a single concrete counterexample.

// The fastest first check is $T(\\mathbf{0}) = \\mathbf{0}$. Every linear transformation sends $\\mathbf{0}$ to $\\mathbf{0}$, so if $T(\\mathbf{0}) \\neq \\mathbf{0}$, the function is immediately disqualified. This eliminates translations ($T(\\mathbf{v}) = \\mathbf{v} + \\mathbf{b}$), constant functions ($T(\\mathbf{v}) = \\mathbf{c}$), and any formula with a constant term.

// If $T(\\mathbf{0}) = \\mathbf{0}$ passes, test additivity or homogeneity with specific inputs. For $T(x, y) = (x^2, y)$: $T(1, 0) + T(1, 0) = (1, 0) + (1, 0) = (2, 0)$, but $T((1, 0) + (1, 0)) = T(2, 0) = (4, 0) \\neq (2, 0)$. One failure is enough.

// For $T(x) = x + 1$: $T(0) = 1 \\neq 0$. Done — no need to check anything else.

// Products of unknowns, powers higher than $1$, absolute values, square roots, and constant terms all break linearity. If the formula for $T$ involves any of these, the function is almost certainly not linear (and a counterexample is usually easy to construct).`,
//     before: ``,
//     after: ``,
//     link: ``,
//   },
//   obj5: {
//     title: `Consequences of Linearity`,
//     content: `Once linearity is established, several useful facts follow automatically.

// $T(\\mathbf{0}) = \\mathbf{0}$: the zero vector always maps to the zero vector. Proof: $T(\\mathbf{0}) = T(0 \\cdot \\mathbf{v}) = 0 \\cdot T(\\mathbf{v}) = \\mathbf{0}$.

// $T(-\\mathbf{v}) = -T(\\mathbf{v})$: negation is preserved. Proof: $T(-\\mathbf{v}) = T((-1)\\mathbf{v}) = (-1)T(\\mathbf{v}) = -T(\\mathbf{v})$.

// $T(\\mathbf{u} - \\mathbf{v}) = T(\\mathbf{u}) - T(\\mathbf{v})$: subtraction is preserved. Follows from combining additivity with the negation result.

// If $\\{\\mathbf{v}_1, \\dots, \\mathbf{v}_k\\}$ is [linearly dependent](!/linear-algebra/vector-spaces/linear-independence), then $\\{T(\\mathbf{v}_1), \\dots, T(\\mathbf{v}_k)\\}$ is also dependent. Linear transformations can destroy independence (by collapsing vectors to zero) but cannot create it. A nonzero dependence relation $\\sum c_i \\mathbf{v}_i = \\mathbf{0}$ maps to $\\sum c_i T(\\mathbf{v}_i) = \\mathbf{0}$ with the same coefficients.

// These are not additional axioms — they are free consequences of the two linearity conditions.`,
//     before: ``,
//     after: ``,
//     link: ``,
//   },
//   obj6: {
//     title: `Composition`,
//     content: `If $T: U \\to V$ and $S: V \\to W$ are both linear, the composition $S \\circ T: U \\to W$ defined by $(S \\circ T)(\\mathbf{u}) = S(T(\\mathbf{u}))$ is also linear:

// $$(S \\circ T)(c\\mathbf{u} + d\\mathbf{v}) = S(T(c\\mathbf{u} + d\\mathbf{v})) = S(cT(\\mathbf{u}) + dT(\\mathbf{v})) = cS(T(\\mathbf{u})) + dS(T(\\mathbf{v}))$$

// The first equality applies $T$'s linearity inside $S$; the second applies $S$'s linearity.

// Composition is associative: $(R \\circ S) \\circ T = R \\circ (S \\circ T)$. It is not commutative: $S \\circ T$ and $T \\circ S$ are generally different (and may not even have compatible domains).

// When both transformations are represented by [matrices](!/linear-algebra/transformations/matrix-representation), composition corresponds to matrix multiplication: the matrix of $S \\circ T$ is the product of the matrix of $S$ with the matrix of $T$. This is the fundamental reason matrix multiplication is defined as it is — it encodes the composition of the maps the matrices represent.`,
//     before: ``,
//     after: ``,
//     link: ``,
//   },
//   obj7: {
//     title: `Invertibility`,
//     content: `A linear transformation $T: V \\to W$ is invertible if there exists a linear map $T^{-1}: W \\to V$ satisfying $T^{-1} \\circ T = I_V$ and $T \\circ T^{-1} = I_W$.

// The inverse, when it exists, is itself linear. If $T^{-1}(\\mathbf{w}_1) = \\mathbf{v}_1$ and $T^{-1}(\\mathbf{w}_2) = \\mathbf{v}_2$, then $T(c\\mathbf{v}_1 + d\\mathbf{v}_2) = cT(\\mathbf{v}_1) + dT(\\mathbf{v}_2) = c\\mathbf{w}_1 + d\\mathbf{w}_2$, so $T^{-1}(c\\mathbf{w}_1 + d\\mathbf{w}_2) = c\\mathbf{v}_1 + d\\mathbf{v}_2 = cT^{-1}(\\mathbf{w}_1) + dT^{-1}(\\mathbf{w}_2)$.

// $T$ is invertible if and only if it is bijective: injective (trivial [kernel](!/linear-algebra/transformations/image-kernel)) and surjective (image equals $W$). When $\\dim(V) = \\dim(W)$, these two conditions are equivalent — checking either one establishes both. For [matrix](!/linear-algebra/matrix) transformations, invertibility of $T$ corresponds to [invertibility](!/linear-algebra/matrix/inverse) of the matrix $A$.

// An invertible linear transformation between spaces of the same [dimension](!/linear-algebra/vector-spaces/dimension) is called an isomorphism. It establishes that the two spaces are structurally identical as vector spaces.`,
//     before: ``,
//     after: ``,
//     link: ``,
//   },
//   obj8: {
//     title: `Sums and Scalar Multiples of Transformations`,
//     content: `If $S, T: V \\to W$ are both linear, new transformations can be built from them.

// The sum $(S + T)(\\mathbf{v}) = S(\\mathbf{v}) + T(\\mathbf{v})$ is linear: $(S + T)(c\\mathbf{u} + d\\mathbf{v}) = S(c\\mathbf{u} + d\\mathbf{v}) + T(c\\mathbf{u} + d\\mathbf{v}) = cS(\\mathbf{u}) + dS(\\mathbf{v}) + cT(\\mathbf{u}) + dT(\\mathbf{v}) = c(S + T)(\\mathbf{u}) + d(S + T)(\\mathbf{v})$.

// The scalar multiple $(cT)(\\mathbf{v}) = cT(\\mathbf{v})$ is linear by a similar argument.

// These operations give the set of all linear transformations from $V$ to $W$ the structure of a [vector space](!/linear-algebra/vector-spaces), denoted $\\mathcal{L}(V, W)$. The zero element is the zero transformation, and the additive inverse of $T$ is $(-1)T$. When $V$ and $W$ are finite-dimensional, this space has dimension $\\dim(V) \\cdot \\dim(W)$, matching the number of entries in the representing matrix.`,
//     before: ``,
//     after: ``,
//     link: ``,
//   },
//   obj9: {
//     title: `Common Pitfalls`,
//     content: `Verifying linearity on a handful of specific vectors does not prove linearity. The conditions must hold for all vectors and all scalars simultaneously. A function can satisfy $T(\\mathbf{u} + \\mathbf{v}) = T(\\mathbf{u}) + T(\\mathbf{v})$ for certain pairs while failing for others.

// The condition $T(\\mathbf{0}) = \\mathbf{0}$ is necessary but not sufficient. Passing it eliminates many non-examples quickly, but a function with $T(\\mathbf{0}) = \\mathbf{0}$ can still fail additivity or homogeneity. The function $T(x) = x|x|$ satisfies $T(0) = 0$ but is not linear.

// A component-by-component check works for maps defined by explicit formulas. If $T(x_1, \\dots, x_n) = (f_1(\\mathbf{x}), \\dots, f_m(\\mathbf{x}))$, then $T$ is linear if and only if each component function $f_i$ is a linear expression in $x_1, \\dots, x_n$ — meaning $f_i = a_{i1}x_1 + a_{i2}x_2 + \\cdots + a_{in}x_n$ with no constant term. Any constant, product, power, or nonlinear function appearing in any component disqualifies the entire map.`,
//     before: ``,
//     after: ``,
//     link: ``,
//   },
//   obj10: {
//     title: `Summary: How Linear Maps Combine`,
//     content: `The four consequences-cluster sections above isolate distinct ways that linearity propagates through operations on the transformations themselves. The table below collects them in one place: composition produces another linear map, inversion preserves linearity, and the pointwise sum and scalar multiple of linear maps are themselves linear — giving the full set of all linear transformations from V to W the structure of a vector space in its own right.`,
//     before: ``,
//     after: ``,
//     link: ``,
//   },
// }


// tables-optimized: v4 | 2026-05-22 | 3 tables (obj4 comparison, obj5 aggregation, obj10 summary capstone)

// ---------- SECTIONS ----------

const sectionsContent = {
  obj1: {
    title: `The Two Linearity Conditions`,
    content: `A function $T: V \\to W$ is linear if it satisfies two conditions for all $\\mathbf{u}, \\mathbf{v} \\in V$ and all scalars $c \\in \\mathbb{R}$:

Additivity: $T(\\mathbf{u} + \\mathbf{v}) = T(\\mathbf{u}) + T(\\mathbf{v})$

Homogeneity: $T(c\\mathbf{v}) = cT(\\mathbf{v})$

Both conditions must hold for every choice of vectors and scalars — not just for specific examples. Verifying linearity on a few particular vectors does not suffice. Disproving linearity requires only a single counterexample: one pair of vectors where additivity fails, or one scalar where homogeneity fails.`,
    before: ``,
    after: ``,
    link: ``,
  },
  obj2: {
    title: `The One-Step Test`,
    content: `The two conditions can be combined into a single check. $T$ is linear if and only if

$$T(c\\mathbf{u} + d\\mathbf{v}) = cT(\\mathbf{u}) + dT(\\mathbf{v})$$

for all vectors $\\mathbf{u}, \\mathbf{v} \\in V$ and all scalars $c, d \\in \\mathbb{R}$. Setting $c = d = 1$ recovers additivity. Setting $\\mathbf{v} = \\mathbf{0}$ recovers homogeneity. So the combined condition implies both individual conditions, and the converse is straightforward.

The one-step test extends to arbitrary linear combinations: if $T$ is linear, then

$$T(c_1\\mathbf{v}_1 + c_2\\mathbf{v}_2 + \\cdots + c_k\\mathbf{v}_k) = c_1T(\\mathbf{v}_1) + c_2T(\\mathbf{v}_2) + \\cdots + c_kT(\\mathbf{v}_k)$$

Linear transformations commute with linear combinations of any length. This is the operational content of linearity — it says that $T$ can be "pulled through" any finite sum of scaled vectors.`,
    before: ``,
    after: ``,
    link: ``,
  },
  obj3: {
    title: `Proving Linearity`,
    content: `To prove a given function $T$ is linear, take arbitrary vectors $\\mathbf{u}, \\mathbf{v}$ and arbitrary scalars $c, d$. Compute $T(c\\mathbf{u} + d\\mathbf{v})$ using the formula that defines $T$, then simplify and show the result equals $cT(\\mathbf{u}) + dT(\\mathbf{v})$.

## Worked Example

Let $T: \\mathbb{R}^3 \\to \\mathbb{R}^2$ be defined by $T(x, y, z) = (2x - y, x + 3z)$. Take $\\mathbf{u} = (u_1, u_2, u_3)$ and $\\mathbf{v} = (v_1, v_2, v_3)$:

$$T(c\\mathbf{u} + d\\mathbf{v}) = T(cu_1 + dv_1, \\; cu_2 + dv_2, \\; cu_3 + dv_3)$$

$$= (2(cu_1 + dv_1) - (cu_2 + dv_2), \\; (cu_1 + dv_1) + 3(cu_3 + dv_3))$$

$$= (c(2u_1 - u_2) + d(2v_1 - v_2), \\; c(u_1 + 3u_3) + d(v_1 + 3v_3))$$

$$= c(2u_1 - u_2, \\; u_1 + 3u_3) + d(2v_1 - v_2, \\; v_1 + 3v_3) = cT(\\mathbf{u}) + dT(\\mathbf{v})$$

Linearity holds. The key observation is that every component of $T$ is a linear expression in the input coordinates — no products, powers, or constant terms appear.`,
    before: ``,
    after: ``,
    link: ``,
  },
  obj4: {
    title: `Disproving Linearity`,
    content: `To show $T$ is not linear, find a single concrete counterexample.

The fastest first check is $T(\\mathbf{0}) = \\mathbf{0}$. Every linear transformation sends $\\mathbf{0}$ to $\\mathbf{0}$, so if $T(\\mathbf{0}) \\neq \\mathbf{0}$, the function is immediately disqualified. This eliminates translations ($T(\\mathbf{v}) = \\mathbf{v} + \\mathbf{b}$), constant functions ($T(\\mathbf{v}) = \\mathbf{c}$), and any formula with a constant term.

If $T(\\mathbf{0}) = \\mathbf{0}$ passes, test additivity or homogeneity with specific inputs. For $T(x, y) = (x^2, y)$: $T(1, 0) + T(1, 0) = (1, 0) + (1, 0) = (2, 0)$, but $T((1, 0) + (1, 0)) = T(2, 0) = (4, 0) \\neq (2, 0)$. One failure is enough.

For $T(x) = x + 1$: $T(0) = 1 \\neq 0$. Done — no need to check anything else.

Products of unknowns, powers higher than $1$, absolute values, square roots, and constant terms all break linearity. If the formula for $T$ involves any of these, the function is almost certainly not linear (and a counterexample is usually easy to construct).`,
    before: ``,
    after: ``,
    link: ``,
  },
  obj5: {
    title: `Consequences of Linearity`,
    content: `Once linearity is established, several useful facts follow automatically. The most basic is that the zero vector maps to the zero vector:

@academic[formula_callout:Zero Vector Preservation
$$T(\\mathbf{0}_V) = \\mathbf{0}_W$$
/linear-algebra/formulas#zero_vector_preservation]@

@academic[formulas_link:Browse all linear algebra formulas
/linear-algebra/formulas]@

Proof: $T(\\mathbf{0}) = T(0 \\cdot \\mathbf{v}) = 0 \\cdot T(\\mathbf{v}) = \\mathbf{0}$.

$T(-\\mathbf{v}) = -T(\\mathbf{v})$: negation is preserved. Proof: $T(-\\mathbf{v}) = T((-1)\\mathbf{v}) = (-1)T(\\mathbf{v}) = -T(\\mathbf{v})$.

$T(\\mathbf{u} - \\mathbf{v}) = T(\\mathbf{u}) - T(\\mathbf{v})$: subtraction is preserved. Follows from combining additivity with the negation result.

If $\\{\\mathbf{v}_1, \\dots, \\mathbf{v}_k\\}$ is [linearly dependent](!/linear-algebra/vector-spaces/linear-independence), then $\\{T(\\mathbf{v}_1), \\dots, T(\\mathbf{v}_k)\\}$ is also dependent. Linear transformations can destroy independence (by collapsing vectors to zero) but cannot create it. A nonzero dependence relation $\\sum c_i \\mathbf{v}_i = \\mathbf{0}$ maps to $\\sum c_i T(\\mathbf{v}_i) = \\mathbf{0}$ with the same coefficients.

These are not additional axioms — they are free consequences of the two linearity conditions.`,
    before: ``,
    after: ``,
    link: ``,
  },
  obj6: {
    title: `Composition`,
    content: `If $T: U \\to V$ and $S: V \\to W$ are both linear, the composition $S \\circ T: U \\to W$ is also linear:

@academic[formula_callout:Composition Is Linear
$$(S \\circ T)(\\mathbf{u}) = S(T(\\mathbf{u})), \\qquad [S \\circ T] = [S]\\,[T]$$
/linear-algebra/formulas#composition_is_linear]@

@academic[formulas_link:Browse all linear algebra formulas
/linear-algebra/formulas]@

The linearity check:

$$(S \\circ T)(c\\mathbf{u} + d\\mathbf{v}) = S(T(c\\mathbf{u} + d\\mathbf{v})) = S(cT(\\mathbf{u}) + dT(\\mathbf{v})) = cS(T(\\mathbf{u})) + dS(T(\\mathbf{v}))$$

The first equality applies $T$'s linearity inside $S$; the second applies $S$'s linearity.

Composition is associative: $(R \\circ S) \\circ T = R \\circ (S \\circ T)$. It is not commutative: $S \\circ T$ and $T \\circ S$ are generally different (and may not even have compatible domains).

When both transformations are represented by [matrices](!/linear-algebra/transformations/matrix-representation), composition corresponds to matrix multiplication: the matrix of $S \\circ T$ is the product of the matrix of $S$ with the matrix of $T$. This is the fundamental reason matrix multiplication is defined as it is — it encodes the composition of the maps the matrices represent.`,
    before: ``,
    after: ``,
    link: ``,
  },
  obj7: {
    title: `Invertibility`,
    content: `A linear transformation $T: V \\to W$ is invertible if there exists a linear map $T^{-1}: W \\to V$ satisfying $T^{-1} \\circ T = I_V$ and $T \\circ T^{-1} = I_W$.

The inverse, when it exists, is itself linear. If $T^{-1}(\\mathbf{w}_1) = \\mathbf{v}_1$ and $T^{-1}(\\mathbf{w}_2) = \\mathbf{v}_2$, then $T(c\\mathbf{v}_1 + d\\mathbf{v}_2) = cT(\\mathbf{v}_1) + dT(\\mathbf{v}_2) = c\\mathbf{w}_1 + d\\mathbf{w}_2$, so $T^{-1}(c\\mathbf{w}_1 + d\\mathbf{w}_2) = c\\mathbf{v}_1 + d\\mathbf{v}_2 = cT^{-1}(\\mathbf{w}_1) + dT^{-1}(\\mathbf{w}_2)$.

$T$ is invertible if and only if it is bijective: injective (trivial [kernel](!/linear-algebra/transformations/image-kernel)) and surjective (image equals $W$). When $\\dim(V) = \\dim(W)$, these two conditions are equivalent — checking either one establishes both. For [matrix](!/linear-algebra/matrix) transformations, invertibility of $T$ corresponds to [invertibility](!/linear-algebra/matrix/inverse) of the matrix $A$.

An invertible linear transformation between spaces of the same [dimension](!/linear-algebra/vector-spaces/dimension) is called an isomorphism. It establishes that the two spaces are structurally identical as vector spaces.`,
    before: ``,
    after: ``,
    link: ``,
  },
  obj8: {
    title: `Sums and Scalar Multiples of Transformations`,
    content: `If $S, T: V \\to W$ are both linear, new transformations can be built from them.

The sum $(S + T)(\\mathbf{v}) = S(\\mathbf{v}) + T(\\mathbf{v})$ is linear: $(S + T)(c\\mathbf{u} + d\\mathbf{v}) = S(c\\mathbf{u} + d\\mathbf{v}) + T(c\\mathbf{u} + d\\mathbf{v}) = cS(\\mathbf{u}) + dS(\\mathbf{v}) + cT(\\mathbf{u}) + dT(\\mathbf{v}) = c(S + T)(\\mathbf{u}) + d(S + T)(\\mathbf{v})$.

The scalar multiple $(cT)(\\mathbf{v}) = cT(\\mathbf{v})$ is linear by a similar argument.

These operations give the set of all linear transformations from $V$ to $W$ the structure of a [vector space](!/linear-algebra/vector-spaces), denoted $\\mathcal{L}(V, W)$. The zero element is the zero transformation, and the additive inverse of $T$ is $(-1)T$. When $V$ and $W$ are finite-dimensional, this space has dimension $\\dim(V) \\cdot \\dim(W)$, matching the number of entries in the representing matrix.`,
    before: ``,
    after: ``,
    link: ``,
  },
  obj9: {
    title: `Common Pitfalls`,
    content: `Verifying linearity on a handful of specific vectors does not prove linearity. The conditions must hold for all vectors and all scalars simultaneously. A function can satisfy $T(\\mathbf{u} + \\mathbf{v}) = T(\\mathbf{u}) + T(\\mathbf{v})$ for certain pairs while failing for others.

The condition $T(\\mathbf{0}) = \\mathbf{0}$ is necessary but not sufficient. Passing it eliminates many non-examples quickly, but a function with $T(\\mathbf{0}) = \\mathbf{0}$ can still fail additivity or homogeneity. The function $T(x) = x|x|$ satisfies $T(0) = 0$ but is not linear.

A component-by-component check works for maps defined by explicit formulas. If $T(x_1, \\dots, x_n) = (f_1(\\mathbf{x}), \\dots, f_m(\\mathbf{x}))$, then $T$ is linear if and only if each component function $f_i$ is a linear expression in $x_1, \\dots, x_n$ — meaning $f_i = a_{i1}x_1 + a_{i2}x_2 + \\cdots + a_{in}x_n$ with no constant term. Any constant, product, power, or nonlinear function appearing in any component disqualifies the entire map.`,
    before: ``,
    after: ``,
    link: ``,
  },
  obj10: {
    title: `Summary: How Linear Maps Combine`,
    content: `The four consequences-cluster sections above isolate distinct ways that linearity propagates through operations on the transformations themselves. The table below collects them in one place: composition produces another linear map, inversion preserves linearity, and the pointwise sum and scalar multiple of linear maps are themselves linear — giving the full set of all linear transformations from V to W the structure of a vector space in its own right.`,
    before: ``,
    after: ``,
    link: ``,
  },
}

const introContent = {
  title: `What Linearity Gives You and How to Verify It`,
  content: `The two linearity conditions — preservation of addition and scalar multiplication — are the gateway to the entire theory. Proving them unlocks every tool of linear algebra; failing them shuts the door. This page covers how to verify linearity, what consequences follow from it, and how linear transformations interact through composition and inversion.`,
}


const faqQuestions = {
  obj1: {
    question: "What are the two conditions for a linear transformation?",
    answer: "A function T is linear if it satisfies additivity (T(u + v) = T(u) + T(v)) and homogeneity (T(cv) = cT(v)) for all vectors u, v and all scalars c. Equivalently, T(cu + dv) = cT(u) + dT(v) for all vectors and scalars — the one-step test.",
    sectionId: "1"
  },
  obj2: {
    question: "How do you prove a transformation is linear?",
    answer: "Take arbitrary vectors u, v and scalars c, d. Compute T(cu + dv) using T's formula, then simplify and show the result equals cT(u) + dT(v). The key is that every component must be a linear expression in the input coordinates — no constants, products, powers, or nonlinear functions.",
    sectionId: "3"
  },
  obj3: {
    question: "How do you disprove linearity?",
    answer: "Find a single counterexample. The fastest first check is T(0) = 0 — every linear map sends zero to zero, so T(0) ≠ 0 immediately disqualifies. If that passes, test additivity or homogeneity with specific inputs. One failure is enough.",
    sectionId: "4"
  },
  obj4: {
    question: "Is the composition of two linear transformations linear?",
    answer: "Yes. If T and S are both linear, the composition S ∘ T is linear: (S ∘ T)(cu + dv) = S(cT(u) + dT(v)) = cS(T(u)) + dS(T(v)). When represented by matrices, composition corresponds to matrix multiplication.",
    sectionId: "6"
  },
  obj5: {
    question: "When is a linear transformation invertible?",
    answer: "A linear transformation is invertible if and only if it is bijective — injective (trivial kernel) and surjective (image equals the codomain). When domain and codomain have equal dimension, checking either condition establishes both. The inverse is itself linear.",
    sectionId: "7"
  }
}


const schemas = {
  learningResource: {
    "@context": "https://schema.org",
    "@type": "LearningResource",
    "name": "Properties of Linear Transformations",
    "description": "Properties of linear transformations: linearity conditions, proving and disproving linearity, consequences, composition, invertibility, isomorphisms, and the space of linear maps.",
    "url": "https://www.learnmathclass.com/linear-algebra/transformations/properties",
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
      "name": "Properties of Linear Transformations"
    },
    "teaches": [
      "Additivity and homogeneity conditions",
      "The one-step linearity test",
      "Proving linearity with arbitrary vectors",
      "Disproving linearity with counterexamples",
      "Consequences: T(0) = 0, preservation of dependence",
      "Composition of linear transformations",
      "Invertibility, bijectivity, and isomorphisms",
      "Sums and scalar multiples of transformations"
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
        "name": "Properties",
        "item": "https://www.learnmathclass.com/linear-algebra/transformations/properties"
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
    obj5Table,
    summaryTable,
    faqQuestions,
    schemas,
    seoData: {
      title: "Linear Transformation Properties | Learn Math Class",
      description: "Properties of linear transformations: linearity conditions, proving and disproving linearity, consequences, composition, invertibility, isomorphisms, and the space of linear maps.",
      keywords: keyWords.join(", "),
      url: "/linear-algebra/transformations/properties",
      name: "Properties of Linear Transformations"
    },
  }
}
   }

export default function TransformationPropertiesPage({seoData, sectionsContent, introContent, obj4Table, obj5Table, summaryTable, faqQuestions, schemas}) {

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
          <div key={'obj5-table'} style={tableWrapStyle}
               dangerouslySetInnerHTML={{ __html: obj5Table }} />,
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
   <h1 className='title' style={{marginTop:'0px',marginBottom:'10px'}}>Properties of Linear Transformation</h1>
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