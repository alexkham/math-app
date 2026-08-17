// import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
// import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
// import IntroSection from '@/app/components/page-components/section/IntroContentSection'
// import Sections from '@/app/components/page-components/section/Sections'
// import SectionTableOfContents from '@/app/components/page-components/section/SectionTableofContents'
// import React from 'react'
// import '../../../pages.css'
// import Head from 'next/head'
// import KeyTermsCard from '@/app/components/page-components/KeyTermsCard'


// export async function getStaticProps(){
// const keyWords = [
//   "basis of vector space",
//   "vector space basis",
//   "basis definition linear algebra",
//   "linear independence and span",
//   "coordinates relative to basis",
//   "standard basis Rn",
//   "change of basis",
//   "change of basis matrix",
//   "unique representation vectors",
//   "coordinate vector",
//   "basis for column space",
//   "basis for null space",
//   "finding a basis",
//   "vector space dimension",
//   "isomorphism finite dimensional",
// ]

//   // •

// //   \u2022 First item
// // \u2022 Second item

  
// // <hr style="border-width:1px;"></hr>

// // <hr style="color:blue;" />

// // <hr style="border-color:#3498db; border-width:1px;" />



// // @span[backgroundColor:#e3f2fd,padding:4px 8px,borderRadius:4px,fontSize:12px]:[See All Probability Symbols and Notations](!/math-symbols/probability) →@

 
// // <div key={'notation-normal'} style={{background: 'linear-gradient(to right, #f1f5f9 0%, #e2e8f0 100%)', padding: '20px', margin: '16px 0', borderRadius: '8px', border: '2px solid #94a3b8',transform:'scale(0.9)'}}>
//         //     {processContent(sectionsContent.normal.notation)}
//         // </div>,


// //   <div key={'parameters-normal'} style={{background: 'linear-gradient(to right, #f8fafc 0%, #f1f5f9 100%)', padding: '20px', margin: '16px 0', borderRadius: '8px', border: '2px solid #cbd5e1',transform:'scale(0.9)'}}>
// //     {processContent(sectionsContent.normal.parameters)}
// // </div>,
        
// //  <div key={'pmf-geometric'} style={{background: 'linear-gradient(to right, #eff6ff 0%, #dbeafe 100%)', padding: '20px', margin: '16px 0', borderRadius: '8px', border: '2px solid #60a5fa',transform:'scale(0.9)'}}>
// //                   {processContent(sectionsContent.obj4.content)}
// //                   </div>,


// //  <div key={'dist'} style={{
// //                     textAlign: 'center',
// //                     transform: 'scale(0.98)',
// //                     transformOrigin: 'center',
// //                     marginTop:'50px',
// //                     marginLeft:'-150px'
// //                   }} dangerouslySetInnerHTML={{ 
// //                     __html:   sectionContent.distributions.svg,
// //                   }} />

  
// // URL: /linear-algebra/vector-spaces/
// // (The hub itself functions as the basis page — there is no separate /basis child page)


// // const sectionsContent = {
// //   obj1: {
// //     title: `What a Vector Space Is`,
// //     content: `Vectors in $\\mathbb{R}^n$ can be added and scaled. So can polynomials, [matrices](!/linear-algebra/matrix), and continuous functions. A vector space is the formal name for any collection of objects where these two operations — addition and scalar multiplication — satisfy ten algebraic [axioms](!/linear-algebra/vector-spaces/axioms): closure, commutativity, associativity, the existence of a zero element, additive inverses, and the expected distributive and identity laws for scalars.

// // The objects in a vector space are called vectors regardless of whether they look like arrows, columns of numbers, polynomials, or functions. The power of the abstraction is that every theorem proved from the axioms alone applies to every vector space simultaneously. [Linear independence](!/linear-algebra/vector-spaces/linear-independence), [span](!/linear-algebra/vector-spaces/span), basis, [dimension](!/linear-algebra/vector-spaces/dimension), and [subspaces](!/linear-algebra/vector-spaces/subspaces) are all defined from the axioms, and their properties carry over to any setting where the axioms hold.`,
// //     before: ``,
// //     after: ``,
// //     link: ``,
// //   },
// //   obj2: {
// //     title: `Basis: Definition`,
// //     content: `A basis for a vector space $V$ is a set of vectors $\\mathcal{B} = \\{\\mathbf{v}_1, \\mathbf{v}_2, \\dots, \\mathbf{v}_n\\}$ that satisfies two conditions simultaneously.

// // The set is [linearly independent](!/linear-algebra/vector-spaces/linear-independence): no vector in the set can be written as a linear combination of the others. Equivalently, the only combination $c_1\\mathbf{v}_1 + c_2\\mathbf{v}_2 + \\cdots + c_n\\mathbf{v}_n = \\mathbf{0}$ is the trivial one with all scalars equal to zero.

// // The set [spans](!/linear-algebra/vector-spaces/span) $V$: every vector in $V$ can be expressed as some linear combination of $\\mathbf{v}_1, \\dots, \\mathbf{v}_n$.

// // Independence means no vector in the basis is wasted. Spanning means no vector in $V$ is out of reach. A basis is a minimal spanning set — remove any element and the span shrinks. It is also a maximal independent set — add any vector from $V$ and independence breaks. These two characterizations are equivalent and place the basis at the exact boundary between "too few" and "too many."`,
// //     before: ``,
// //     after: ``,
// //     link: ``,
// //   },
// //   obj3: {
// //     title: `Unique Representation`,
// //     content: `If $\\mathcal{B} = \\{\\mathbf{v}_1, \\dots, \\mathbf{v}_n\\}$ is a basis for $V$, then every vector $\\mathbf{v} \\in V$ can be written as

// // $$\\mathbf{v} = c_1\\mathbf{v}_1 + c_2\\mathbf{v}_2 + \\cdots + c_n\\mathbf{v}_n$$

// // in exactly one way. Existence is guaranteed by the spanning condition — every vector is reachable. Uniqueness is guaranteed by independence: if two different sets of scalars both produced $\\mathbf{v}$, subtracting one from the other would give a nontrivial combination equal to $\\mathbf{0}$, contradicting independence.

// // This uniqueness is what separates a basis from an arbitrary spanning set. A spanning set that is not independent can represent some vectors in multiple ways — the representation is ambiguous. A basis eliminates all ambiguity: every vector has exactly one set of coefficients.`,
// //     before: ``,
// //     after: ``,
// //     link: ``,
// //   },
// //   obj4: {
// //     title: `Coordinates`,
// //     content: `The scalars $c_1, c_2, \\dots, c_n$ in the unique representation $\\mathbf{v} = c_1\\mathbf{v}_1 + \\cdots + c_n\\mathbf{v}_n$ are called the coordinates of $\\mathbf{v}$ relative to the basis $\\mathcal{B}$. They are collected into a coordinate vector:

// // $$[\\mathbf{v}]_\\mathcal{B} = \\begin{pmatrix} c_1 \\\\ c_2 \\\\ \\vdots \\\\ c_n \\end{pmatrix}$$

// // Coordinates depend entirely on the choice of basis. The same vector $\\mathbf{v}$ has different coordinates in different bases — the vector does not change, but its numerical description does.

// // To find the coordinates of $\\mathbf{v}$ relative to $\\mathcal{B}$, solve the [linear system](!/linear-algebra/linear-systems) $c_1\\mathbf{v}_1 + \\cdots + c_n\\mathbf{v}_n = \\mathbf{v}$. If the basis vectors are columns of a [matrix](!/linear-algebra/matrix) $B$, this is the system $B\\mathbf{c} = \\mathbf{v}$, and the coordinate vector is $\\mathbf{c} = B^{-1}\\mathbf{v}$ when $B$ is invertible. For the standard basis, $B = I$, so the coordinates are simply the components of $\\mathbf{v}$ itself.`,
// //     before: ``,
// //     after: ``,
// //     link: ``,
// //   },
// //   obj5: {
// //     title: `The Standard Basis for Rⁿ`,
// //     content: `The most familiar basis for $\\mathbb{R}^n$ is the standard basis $\\{\\mathbf{e}_1, \\mathbf{e}_2, \\dots, \\mathbf{e}_n\\}$, where $\\mathbf{e}_i$ has a $1$ in position $i$ and zeros elsewhere:

// // $$\\mathbf{e}_1 = \\begin{pmatrix} 1 \\\\ 0 \\\\ \\vdots \\\\ 0 \\end{pmatrix}, \\quad \\mathbf{e}_2 = \\begin{pmatrix} 0 \\\\ 1 \\\\ \\vdots \\\\ 0 \\end{pmatrix}, \\quad \\dots, \\quad \\mathbf{e}_n = \\begin{pmatrix} 0 \\\\ 0 \\\\ \\vdots \\\\ 1 \\end{pmatrix}$$

// // Independence is immediate — each vector has a $1$ in a position where all others have $0$, so no vector is a combination of the rest. Spanning follows from the fact that any vector $(v_1, \\dots, v_n) = v_1\\mathbf{e}_1 + \\cdots + v_n\\mathbf{e}_n$.

// // The standard basis has a special property: coordinates relative to it are just the components of the vector. For any other basis, finding coordinates requires solving a system. This is why the standard basis is the default — but it is one choice among infinitely many, and other bases are often better suited to particular problems.`,
// //     before: ``,
// //     after: ``,
// //     link: ``,
// //   },
// //   obj6: {
// //     title: `Other Standard Bases`,
// //     content: `Every vector space encountered in practice comes with a natural default basis.

// // The polynomial space $\\mathcal{P}_n$ of polynomials with degree at most $n$ has the monomial basis $\\{1, x, x^2, \\dots, x^n\\}$, consisting of $n + 1$ elements. Every polynomial $a_0 + a_1 x + \\cdots + a_n x^n$ is a linear combination of these monomials, and the coefficients are unique (a polynomial is determined by its coefficients). The coordinates of a polynomial relative to the monomial basis are its coefficients.

// // The [matrix](!/linear-algebra/matrix) space $\\mathbb{R}^{m \\times n}$ has the matrix unit basis $\\{E_{ij}\\}$, where $E_{ij}$ has a $1$ in position $(i,j)$ and zeros elsewhere. There are $mn$ such matrices, and every $m \\times n$ matrix is a unique linear combination of them. The coordinates of a matrix are its entries.

// // These are all "standard" bases in the sense that they are the most natural first choice. But many problems benefit from non-standard bases: [eigenvector](!/linear-algebra/eigenvalues-vectors) bases simplify matrix powers and differential equations, [orthonormal](!/linear-algebra/orthogonality/orthogonal-sets) bases simplify projections and least squares, and Fourier bases decompose periodic signals into frequency components. Choosing the right basis is often the key step in solving a problem.`,
// //     before: ``,
// //     after: ``,
// //     link: ``,
// //   },
// //   obj7: {
// //     title: `Finding a Basis for a Subspace`,
// //     content: `The three [subspaces](!/linear-algebra/vector-spaces/subspaces) associated with a matrix each have a basis that can be extracted from row reduction.

// // For the column space of an $m \\times n$ matrix $A$: row reduce $A$ and identify the pivot columns. The corresponding columns of the original matrix $A$ — not the echelon form — are a basis for $\\text{Col}(A)$. The echelon form reveals which columns are independent, but the original columns are the actual vectors spanning the column space.

// // For the null space: solve $A\\mathbf{x} = \\mathbf{0}$ by reducing to [RREF](!/linear-algebra/linear-systems/rref) and expressing the general solution in terms of free variables. Each free variable contributes one basis vector.

// // For the row space: the nonzero rows of the echelon form are a basis. Unlike the column space, the echelon form's rows — not the original rows — are used, because row operations change individual rows but preserve their span.

// // ## Worked Example

// // For $A = \\begin{pmatrix} 1 & 2 & 0 & 1 \\\\ 2 & 4 & 1 & 3 \\\\ 3 & 6 & 1 & 4 \\end{pmatrix}$, row reduction gives $\\begin{pmatrix} 1 & 2 & 0 & 1 \\\\ 0 & 0 & 1 & 1 \\\\ 0 & 0 & 0 & 0 \\end{pmatrix}$. Pivots are in columns $1$ and $3$. The column space basis is $\\{(1, 2, 3), (0, 1, 1)\\}$ — the first and third columns of the original $A$. The row space basis is $\\{(1, 2, 0, 1), (0, 0, 1, 1)\\}$. The null space has two free variables (columns $2$ and $4$), and solving yields a two-dimensional null space.`,
// //     before: ``,
// //     after: ``,
// //     link: ``,
// //   },
// //   obj8: {
// //     title: `Extending and Reducing to a Basis`,
// //     content: `Two fundamental operations guarantee that bases always exist in finite-dimensional spaces.

// // Extension: any linearly independent set can be grown into a basis by adding vectors one at a time. At each step, pick any vector not in the current [span](!/linear-algebra/vector-spaces/span) and adjoin it. Independence is preserved because the new vector is not a combination of the existing ones. The process stops when the span reaches all of $V$.

// // Reduction: any spanning set can be trimmed into a basis by removing redundant vectors. A vector is redundant if it lies in the span of the remaining vectors. Remove redundant vectors one at a time until what remains is independent. The span does not shrink, because each removed vector was already expressible in terms of the others.

// // Both processes terminate because [dimension](!/linear-algebra/vector-spaces/dimension) is finite — the independent set cannot grow past $n$ vectors, and the spanning set cannot shrink below $n$ vectors, where $n = \\dim(V)$. This means every finite-dimensional vector space has a basis, and the choice of basis is highly flexible.`,
// //     before: ``,
// //     after: ``,
// //     link: ``,
// //   },
// //   obj9: {
// //     title: `Change of Basis`,
// //     content: `Different bases assign different coordinates to the same vector. The change-of-basis matrix converts between them.

// // If $\\mathcal{B}$ and $\\mathcal{C}$ are two bases for $V$, the change-of-basis matrix $P_{\\mathcal{C} \\leftarrow \\mathcal{B}}$ satisfies

// // $$[\\mathbf{v}]_\\mathcal{C} = P_{\\mathcal{C} \\leftarrow \\mathcal{B}} \\, [\\mathbf{v}]_\\mathcal{B}$$

// // for every vector $\\mathbf{v} \\in V$. The columns of $P_{\\mathcal{C} \\leftarrow \\mathcal{B}}$ are the $\\mathcal{C}$-coordinate vectors of each $\\mathcal{B}$-basis vector. The reverse conversion uses the [inverse](!/linear-algebra/matrix/inverse): $P_{\\mathcal{B} \\leftarrow \\mathcal{C}} = P_{\\mathcal{C} \\leftarrow \\mathcal{B}}^{-1}$.

// // ## Worked Example

// // In $\\mathbb{R}^2$, let $\\mathcal{B} = \\{(1, 1), (1, -1)\\}$ and let $\\mathcal{C}$ be the standard basis. The $\\mathcal{C}$-coordinates of $(1, 1)$ are just $(1, 1)$, and the $\\mathcal{C}$-coordinates of $(1, -1)$ are $(1, -1)$. So $P_{\\mathcal{C} \\leftarrow \\mathcal{B}} = \\begin{pmatrix} 1 & 1 \\\\ 1 & -1 \\end{pmatrix}$. To find the $\\mathcal{B}$-coordinates of $\\mathbf{v} = (3, 1)$: solve $P\\mathbf{c} = (3, 1)$, giving $\\mathbf{c} = P^{-1}(3, 1) = \\frac{1}{-2}\\begin{pmatrix} -1 & -1 \\\\ -1 & 1 \\end{pmatrix}\\begin{pmatrix} 3 \\\\ 1 \\end{pmatrix} = (2, 1)$. So $[\\mathbf{v}]_\\mathcal{B} = (2, 1)$, meaning $\\mathbf{v} = 2(1, 1) + 1(1, -1)$.

// // Change of basis connects to [similarity](!/linear-algebra/linear-transformations/change-of-basis): if a [linear transformation](!/linear-algebra/linear-transformations) has matrix $A$ in basis $\\mathcal{B}$, its matrix in basis $\\mathcal{C}$ is $P^{-1}AP$. Choosing a good basis — one that simplifies $A$ into diagonal or triangular form — is the central idea behind [diagonalization](!/linear-algebra/eigenvalues-vectors/diagonalization).`,
// //     before: ``,
// //     after: ``,
// //     link: ``,
// //   },
// //   obj10: {
// //     title: `Coordinates and Isomorphism`,
// //     content: `Choosing a basis for an $n$-dimensional vector space $V$ creates a one-to-one correspondence between $V$ and $\\mathbb{R}^n$. Each vector $\\mathbf{v} \\in V$ maps to its coordinate vector $[\\mathbf{v}]_\\mathcal{B} \\in \\mathbb{R}^n$, and this mapping preserves addition and scalar multiplication:

// // $$[\\mathbf{u} + \\mathbf{v}]_\\mathcal{B} = [\\mathbf{u}]_\\mathcal{B} + [\\mathbf{v}]_\\mathcal{B}, \\qquad [c\\mathbf{v}]_\\mathcal{B} = c[\\mathbf{v}]_\\mathcal{B}$$

// // Such a structure-preserving bijection is called an isomorphism. Its existence means that every $n$-dimensional real vector space — $\\mathbb{R}^n$, $\\mathcal{P}_{n-1}$, $\\mathbb{R}^{m \\times k}$ with $mk = n$, solution spaces of ODEs — behaves identically to $\\mathbb{R}^n$ in all algebraic respects. The objects differ, but the linear algebra is the same.

// // [Dimension](!/linear-algebra/vector-spaces/dimension) is the single invariant that classifies finite-dimensional vector spaces up to isomorphism. Two spaces over the same field are isomorphic if and only if they have the same dimension. This is why dimension occupies such a central place in the theory.`,
// //     before: ``,
// //     after: ``,
// //     link: ``,
// //   },
// //   obj11: {
// //     title: `Independence and Span`,
// //     content: `The two concepts that a basis unifies — [linear independence](!/linear-algebra/vector-spaces/linear-independence) and [span](!/linear-algebra/vector-spaces/span) — each have their own rich theory.

// // Independence is tested by checking whether the homogeneous system $A\\mathbf{c} = \\mathbf{0}$ has only the trivial solution, where $A$ is the matrix whose columns are the vectors. For $n$ vectors in $\\mathbb{R}^n$, this reduces to checking whether the [determinant](!/linear-algebra/determinants) is nonzero. In $\\mathbb{R}^n$, at most $n$ vectors can be independent — any set of $n + 1$ or more is automatically dependent.

// // Span is tested by checking whether $A\\mathbf{c} = \\mathbf{b}$ is consistent for every $\\mathbf{b}$, or for a specific $\\mathbf{b}$ if the question is about membership. The span of a set is always a subspace, and its dimension equals the number of independent vectors in the set.

// // A set of exactly $n$ vectors in an $n$-dimensional space is a basis if and only if it is independent (spanning follows automatically), and if and only if it spans the space (independence follows automatically). At the magic count $n = \\dim(V)$, the two conditions become equivalent.`,
// //     before: ``,
// //     after: ``,
// //     link: ``,
// //   },
// //   obj12: {
// //     title: `Subspaces and the Fundamental Subspaces`,
// //     content: `A [subspace](!/linear-algebra/vector-spaces/subspaces) is a subset of a vector space that is itself a vector space under the same operations. The subspace test requires only two checks: closure under addition and closure under scalar multiplication. Lines and planes through the origin, null spaces, column spaces, and row spaces are all subspaces.

// // Every $m \\times n$ matrix $A$ defines four [fundamental subspaces](!/linear-algebra/vector-spaces/fundamental-subspaces): the column space in $\\mathbb{R}^m$ (dimension $r$), the row space in $\\mathbb{R}^n$ (dimension $r$), the null space in $\\mathbb{R}^n$ (dimension $n - r$), and the left null space in $\\mathbb{R}^m$ (dimension $m - r$), where $r = \\text{rank}(A)$.

// // These four subspaces split into two pairs of [orthogonal](!/linear-algebra/orthogonality) complements: the row space and null space are perpendicular in $\\mathbb{R}^n$, while the column space and left null space are perpendicular in $\\mathbb{R}^m$. The [rank](!/linear-algebra/matrix/rank) governs all four dimensions and completely determines the geometry of the linear map $\\mathbf{x} \\mapsto A\\mathbf{x}$.`,
// //     before: ``,
// //     after: ``,
// //     link: ``,
// //   },
// // };


// // URL: /linear-algebra/vector-spaces/
// // (The hub itself functions as the basis page — there is no separate /basis child page)


// const sectionsContent = {
//   obj1: {
//     title: `What a Vector Space Is`,
//     content: `Vectors in $\\mathbb{R}^n$ can be added and scaled. So can polynomials, [matrices](!/linear-algebra/matrix), and continuous functions. A vector space is the formal name for any collection of objects where these two operations — addition and scalar multiplication — satisfy ten algebraic [axioms](!/linear-algebra/vector-spaces/axioms): closure, commutativity, associativity, the existence of a zero element, additive inverses, and the expected distributive and identity laws for scalars.

// The objects in a vector space are called vectors regardless of whether they look like arrows, columns of numbers, polynomials, or functions. The power of the abstraction is that every theorem proved from the axioms alone applies to every vector space simultaneously. [Linear independence](!/linear-algebra/vector-spaces/linear-independence), [span](!/linear-algebra/vector-spaces/span), basis, [dimension](!/linear-algebra/vector-spaces/dimension), and [subspaces](!/linear-algebra/vector-spaces/subspaces) are all defined from the axioms, and their properties carry over to any setting where the axioms hold.`,
//     before: ``,
//     after: ``,
//     link: ``,
//   },
//   obj2: {
//     title: `Basis: Definition`,
//     content: `A basis for a vector space $V$ is a set of vectors $\\mathcal{B} = \\{\\mathbf{v}_1, \\mathbf{v}_2, \\dots, \\mathbf{v}_n\\}$ that satisfies two conditions simultaneously:

// @academic[formula_callout:Basis Definition
// $$\\mathcal{B} = \\{\\mathbf{v}_1, \\ldots, \\mathbf{v}_n\\} \\text{ is a basis for } V \\iff \\begin{cases} \\mathcal{B} \\text{ is linearly independent} \\\\ \\text{Span}(\\mathcal{B}) = V \\end{cases}$$
// /linear-algebra/formulas#basis_definition]@

// @academic[formulas_link:Browse all linear algebra formulas
// /linear-algebra/formulas]@

// The set is [linearly independent](!/linear-algebra/vector-spaces/linear-independence): no vector in the set can be written as a linear combination of the others. Equivalently, the only combination $c_1\\mathbf{v}_1 + c_2\\mathbf{v}_2 + \\cdots + c_n\\mathbf{v}_n = \\mathbf{0}$ is the trivial one with all scalars equal to zero.

// The set [spans](!/linear-algebra/vector-spaces/span) $V$: every vector in $V$ can be expressed as some linear combination of $\\mathbf{v}_1, \\dots, \\mathbf{v}_n$.

// Independence means no vector in the basis is wasted. Spanning means no vector in $V$ is out of reach. A basis is a minimal spanning set — remove any element and the span shrinks. It is also a maximal independent set — add any vector from $V$ and independence breaks. These two characterizations are equivalent and place the basis at the exact boundary between "too few" and "too many."`,
//     before: ``,
//     after: ``,
//     link: ``,
//   },
//   obj3: {
//     title: `Unique Representation`,
//     content: `If $\\mathcal{B} = \\{\\mathbf{v}_1, \\dots, \\mathbf{v}_n\\}$ is a basis for $V$, every vector $\\mathbf{v} \\in V$ has a unique representation as a linear combination of basis vectors:

// @academic[formula_callout:Unique Basis Representation
// $$\\forall\\, \\mathbf{v} \\in V,\\ \\exists!\\, (c_1, \\ldots, c_n): \\mathbf{v} = c_1\\mathbf{v}_1 + c_2\\mathbf{v}_2 + \\cdots + c_n\\mathbf{v}_n$$
// /linear-algebra/formulas#unique_basis_representation]@

// @academic[formulas_link:Browse all linear algebra formulas
// /linear-algebra/formulas]@

// Existence is guaranteed by the spanning condition — every vector is reachable. Uniqueness is guaranteed by independence: if two different sets of scalars both produced $\\mathbf{v}$, subtracting one from the other would give a nontrivial combination equal to $\\mathbf{0}$, contradicting independence.

// This uniqueness is what separates a basis from an arbitrary spanning set. A spanning set that is not independent can represent some vectors in multiple ways — the representation is ambiguous. A basis eliminates all ambiguity: every vector has exactly one set of coefficients.`,
//     before: ``,
//     after: ``,
//     link: ``,
//   },
//   obj4: {
//     title: `Coordinates`,
//     content: `The scalars $c_1, c_2, \\dots, c_n$ in the unique representation $\\mathbf{v} = c_1\\mathbf{v}_1 + \\cdots + c_n\\mathbf{v}_n$ are called the coordinates of $\\mathbf{v}$ relative to the basis $\\mathcal{B}$. They are collected into a coordinate vector:

// @academic[formula_callout:Coordinate Vector
// $$[\\mathbf{v}]_\\mathcal{B} = \\begin{pmatrix} c_1 \\\\ c_2 \\\\ \\vdots \\\\ c_n \\end{pmatrix} \\quad \\text{where } \\mathbf{v} = c_1\\mathbf{v}_1 + \\cdots + c_n\\mathbf{v}_n$$
// /linear-algebra/formulas#coordinate_vector]@

// @academic[formulas_link:Browse all linear algebra formulas
// /linear-algebra/formulas]@

// Coordinates depend entirely on the choice of basis. The same vector $\\mathbf{v}$ has different coordinates in different bases — the vector does not change, but its numerical description does.

// To find the coordinates of $\\mathbf{v}$ relative to $\\mathcal{B}$, solve the [linear system](!/linear-algebra/linear-systems) $c_1\\mathbf{v}_1 + \\cdots + c_n\\mathbf{v}_n = \\mathbf{v}$. If the basis vectors are columns of a [matrix](!/linear-algebra/matrix) $B$, this is the system $B\\mathbf{c} = \\mathbf{v}$, and the coordinate vector is $\\mathbf{c} = B^{-1}\\mathbf{v}$ when $B$ is invertible. For the standard basis, $B = I$, so the coordinates are simply the components of $\\mathbf{v}$ itself.`,
//     before: ``,
//     after: ``,
//     link: ``,
//   },
//   obj5: {
//     title: `The Standard Basis for Rⁿ`,
//     content: `The most familiar basis for $\\mathbb{R}^n$ is the standard basis $\\{\\mathbf{e}_1, \\mathbf{e}_2, \\dots, \\mathbf{e}_n\\}$, where $\\mathbf{e}_i$ has a $1$ in position $i$ and zeros elsewhere:

// @academic[formula_callout:Standard Basis (Rn)
// $$\\mathbf{e}_i = (0, \\ldots, 0, \\underset{i\\text{-th}}{1}, 0, \\ldots, 0), \\quad i = 1, \\ldots, n$$
// /linear-algebra/formulas#standard_basis_rn]@

// @academic[formulas_link:Browse all linear algebra formulas
// /linear-algebra/formulas]@

// Independence is immediate — each vector has a $1$ in a position where all others have $0$, so no vector is a combination of the rest. Spanning follows from the fact that any vector $(v_1, \\dots, v_n) = v_1\\mathbf{e}_1 + \\cdots + v_n\\mathbf{e}_n$.

// The standard basis has a special property: coordinates relative to it are just the components of the vector. For any other basis, finding coordinates requires solving a system. This is why the standard basis is the default — but it is one choice among infinitely many, and other bases are often better suited to particular problems.`,
//     before: ``,
//     after: ``,
//     link: ``,
//   },
//   obj6: {
//     title: `Other Standard Bases`,
//     content: `Every vector space encountered in practice comes with a natural default basis.

// The polynomial space $\\mathcal{P}_n$ of polynomials with degree at most $n$ has the monomial basis $\\{1, x, x^2, \\dots, x^n\\}$, consisting of $n + 1$ elements. Every polynomial $a_0 + a_1 x + \\cdots + a_n x^n$ is a linear combination of these monomials, and the coefficients are unique (a polynomial is determined by its coefficients). The coordinates of a polynomial relative to the monomial basis are its coefficients.

// The [matrix](!/linear-algebra/matrix) space $\\mathbb{R}^{m \\times n}$ has the matrix unit basis $\\{E_{ij}\\}$, where $E_{ij}$ has a $1$ in position $(i,j)$ and zeros elsewhere. There are $mn$ such matrices, and every $m \\times n$ matrix is a unique linear combination of them. The coordinates of a matrix are its entries.

// These are all "standard" bases in the sense that they are the most natural first choice. But many problems benefit from non-standard bases: [eigenvector](!/linear-algebra/eigenvalues-vectors) bases simplify matrix powers and differential equations, [orthonormal](!/linear-algebra/orthogonality/orthogonal-sets) bases simplify projections and least squares, and Fourier bases decompose periodic signals into frequency components. Choosing the right basis is often the key step in solving a problem.`,
//     before: ``,
//     after: ``,
//     link: ``,
//   },
//   obj7: {
//     title: `Finding a Basis for a Subspace`,
//     content: `The three [subspaces](!/linear-algebra/vector-spaces/subspaces) associated with a matrix each have a basis that can be extracted from row reduction.

// For the column space of an $m \\times n$ matrix $A$: row reduce $A$ and identify the pivot columns. The corresponding columns of the original matrix $A$ — not the echelon form — are a basis for $\\text{Col}(A)$. The echelon form reveals which columns are independent, but the original columns are the actual vectors spanning the column space.

// For the null space: solve $A\\mathbf{x} = \\mathbf{0}$ by reducing to [RREF](!/linear-algebra/linear-systems/rref) and expressing the general solution in terms of free variables. Each free variable contributes one basis vector.

// For the row space: the nonzero rows of the echelon form are a basis. Unlike the column space, the echelon form's rows — not the original rows — are used, because row operations change individual rows but preserve their span.

// ## Worked Example

// For $A = \\begin{pmatrix} 1 & 2 & 0 & 1 \\\\ 2 & 4 & 1 & 3 \\\\ 3 & 6 & 1 & 4 \\end{pmatrix}$, row reduction gives $\\begin{pmatrix} 1 & 2 & 0 & 1 \\\\ 0 & 0 & 1 & 1 \\\\ 0 & 0 & 0 & 0 \\end{pmatrix}$. Pivots are in columns $1$ and $3$. The column space basis is $\\{(1, 2, 3), (0, 1, 1)\\}$ — the first and third columns of the original $A$. The row space basis is $\\{(1, 2, 0, 1), (0, 0, 1, 1)\\}$. The null space has two free variables (columns $2$ and $4$), and solving yields a two-dimensional null space.`,
//     before: ``,
//     after: ``,
//     link: ``,
//   },
//   obj8: {
//     title: `Extending and Reducing to a Basis`,
//     content: `Two fundamental operations guarantee that bases always exist in finite-dimensional spaces.

// Extension: any linearly independent set can be grown into a basis by adding vectors one at a time. At each step, pick any vector not in the current [span](!/linear-algebra/vector-spaces/span) and adjoin it. Independence is preserved because the new vector is not a combination of the existing ones. The process stops when the span reaches all of $V$.

// Reduction: any spanning set can be trimmed into a basis by removing redundant vectors. A vector is redundant if it lies in the span of the remaining vectors. Remove redundant vectors one at a time until what remains is independent. The span does not shrink, because each removed vector was already expressible in terms of the others.

// Both processes terminate because [dimension](!/linear-algebra/vector-spaces/dimension) is finite — the independent set cannot grow past $n$ vectors, and the spanning set cannot shrink below $n$ vectors, where $n = \\dim(V)$. This means every finite-dimensional vector space has a basis, and the choice of basis is highly flexible.`,
//     before: ``,
//     after: ``,
//     link: ``,
//   },
//   obj9: {
//     title: `Change of Basis`,
//     content: `Different bases assign different coordinates to the same vector. The change-of-basis matrix converts between them.

// If $\\mathcal{B}$ and $\\mathcal{C}$ are two bases for $V$, the change-of-basis matrix $P_{\\mathcal{C} \\leftarrow \\mathcal{B}}$ satisfies

// @academic[formula_callout:Change of Basis Formula
// $$[\\mathbf{v}]_\\mathcal{C} = P_{\\mathcal{C} \\leftarrow \\mathcal{B}}\\, [\\mathbf{v}]_\\mathcal{B}$$
// /linear-algebra/formulas#change_of_basis_formula]@

// @academic[formulas_link:Browse all linear algebra formulas
// /linear-algebra/formulas]@

// for every vector $\\mathbf{v} \\in V$. The columns of $P_{\\mathcal{C} \\leftarrow \\mathcal{B}}$ are the $\\mathcal{C}$-coordinate vectors of each $\\mathcal{B}$-basis vector. The reverse conversion uses the [inverse](!/linear-algebra/matrix/inverse):

// @academic[formula_callout:Change of Basis Inverse
// $$P_{\\mathcal{B} \\leftarrow \\mathcal{C}} = \\bigl(P_{\\mathcal{C} \\leftarrow \\mathcal{B}}\\bigr)^{-1}$$
// /linear-algebra/formulas#change_of_basis_inverse]@

// @academic[formulas_link:Browse all linear algebra formulas
// /linear-algebra/formulas]@

// ## Worked Example

// In $\\mathbb{R}^2$, let $\\mathcal{B} = \\{(1, 1), (1, -1)\\}$ and let $\\mathcal{C}$ be the standard basis. The $\\mathcal{C}$-coordinates of $(1, 1)$ are just $(1, 1)$, and the $\\mathcal{C}$-coordinates of $(1, -1)$ are $(1, -1)$. So $P_{\\mathcal{C} \\leftarrow \\mathcal{B}} = \\begin{pmatrix} 1 & 1 \\\\ 1 & -1 \\end{pmatrix}$. To find the $\\mathcal{B}$-coordinates of $\\mathbf{v} = (3, 1)$: solve $P\\mathbf{c} = (3, 1)$, giving $\\mathbf{c} = P^{-1}(3, 1) = \\frac{1}{-2}\\begin{pmatrix} -1 & -1 \\\\ -1 & 1 \\end{pmatrix}\\begin{pmatrix} 3 \\\\ 1 \\end{pmatrix} = (2, 1)$. So $[\\mathbf{v}]_\\mathcal{B} = (2, 1)$, meaning $\\mathbf{v} = 2(1, 1) + 1(1, -1)$.

// Change of basis connects to [similarity](!/linear-algebra/linear-transformations/change-of-basis): if a [linear transformation](!/linear-algebra/linear-transformations) has matrix $A$ in basis $\\mathcal{B}$, its matrix in basis $\\mathcal{C}$ is $P^{-1}AP$. Choosing a good basis — one that simplifies $A$ into diagonal or triangular form — is the central idea behind [diagonalization](!/linear-algebra/eigenvalues-vectors/diagonalization).`,
//     before: ``,
//     after: ``,
//     link: ``,
//   },
//   obj10: {
//     title: `Coordinates and Isomorphism`,
//     content: `Choosing a basis for an $n$-dimensional vector space $V$ creates a one-to-one correspondence between $V$ and $\\mathbb{R}^n$. Each vector $\\mathbf{v} \\in V$ maps to its coordinate vector $[\\mathbf{v}]_\\mathcal{B} \\in \\mathbb{R}^n$, and this mapping preserves addition and scalar multiplication:

// @academic[formula_callout:Coordinate Map Linearity
// $$[\\mathbf{u} + \\mathbf{v}]_\\mathcal{B} = [\\mathbf{u}]_\\mathcal{B} + [\\mathbf{v}]_\\mathcal{B}, \\qquad [c\\mathbf{v}]_\\mathcal{B} = c\\,[\\mathbf{v}]_\\mathcal{B}$$
// /linear-algebra/formulas#coordinate_map_linearity]@

// @academic[formulas_link:Browse all linear algebra formulas
// /linear-algebra/formulas]@

// Such a structure-preserving bijection is called an isomorphism. Its existence means that every $n$-dimensional real vector space — $\\mathbb{R}^n$, $\\mathcal{P}_{n-1}$, $\\mathbb{R}^{m \\times k}$ with $mk = n$, solution spaces of ODEs — behaves identically to $\\mathbb{R}^n$ in all algebraic respects. The objects differ, but the linear algebra is the same.

// [Dimension](!/linear-algebra/vector-spaces/dimension) is the single invariant that classifies finite-dimensional vector spaces up to isomorphism. Two spaces over the same field are isomorphic if and only if they have the same dimension. This is why dimension occupies such a central place in the theory.`,
//     before: ``,
//     after: ``,
//     link: ``,
//   },
//   obj11: {
//     title: `Independence and Span`,
//     content: `The two concepts that a basis unifies — [linear independence](!/linear-algebra/vector-spaces/linear-independence) and [span](!/linear-algebra/vector-spaces/span) — each have their own rich theory.

// Independence is tested by checking whether the homogeneous system $A\\mathbf{c} = \\mathbf{0}$ has only the trivial solution, where $A$ is the matrix whose columns are the vectors. For $n$ vectors in $\\mathbb{R}^n$, this reduces to checking whether the [determinant](!/linear-algebra/determinants) is nonzero. In $\\mathbb{R}^n$, at most $n$ vectors can be independent — any set of $n + 1$ or more is automatically dependent.

// Span is tested by checking whether $A\\mathbf{c} = \\mathbf{b}$ is consistent for every $\\mathbf{b}$, or for a specific $\\mathbf{b}$ if the question is about membership. The span of a set is always a subspace, and its dimension equals the number of independent vectors in the set.

// A set of exactly $n$ vectors in an $n$-dimensional space is a basis if and only if it is independent (spanning follows automatically), and if and only if it spans the space (independence follows automatically). At the magic count $n = \\dim(V)$, the two conditions become equivalent.`,
//     before: ``,
//     after: ``,
//     link: ``,
//   },
//   obj12: {
//     title: `Subspaces and the Fundamental Subspaces`,
//     content: `A [subspace](!/linear-algebra/vector-spaces/subspaces) is a subset of a vector space that is itself a vector space under the same operations. The subspace test requires only two checks: closure under addition and closure under scalar multiplication. Lines and planes through the origin, null spaces, column spaces, and row spaces are all subspaces.

// Every $m \\times n$ matrix $A$ defines four [fundamental subspaces](!/linear-algebra/vector-spaces/fundamental-subspaces): the column space in $\\mathbb{R}^m$ (dimension $r$), the row space in $\\mathbb{R}^n$ (dimension $r$), the null space in $\\mathbb{R}^n$ (dimension $n - r$), and the left null space in $\\mathbb{R}^m$ (dimension $m - r$), where $r = \\text{rank}(A)$.

// These four subspaces split into two pairs of [orthogonal](!/linear-algebra/orthogonality) complements: the row space and null space are perpendicular in $\\mathbb{R}^n$, while the column space and left null space are perpendicular in $\\mathbb{R}^m$. The [rank](!/linear-algebra/matrix/rank) governs all four dimensions and completely determines the geometry of the linear map $\\mathbf{x} \\mapsto A\\mathbf{x}$.`,
//     before: ``,
//     after: ``,
//     link: ``,
//   },
// };

// const introContent = {
//   title: `The Abstract Structure Behind Linear Algebra`,
//   content: `A vector space is any collection of objects where addition and scalar multiplication obey a consistent set of rules. The concept of a basis — a minimal set of vectors from which every other vector can be built uniquely — is the central organizing idea. Choosing a basis assigns coordinates to every vector, connects abstract spaces to concrete computation in Rⁿ, and determines the dimension that classifies the space up to isomorphism.`,
// };



// const faqQuestions = {
//   obj1: {
//     question: "What is a basis of a vector space?",
//     answer: "A basis of a vector space V is a set of vectors that is both linearly independent and spans V. Independence means no vector in the set is a linear combination of the others; spanning means every vector in V is expressible as a linear combination of the basis vectors. A basis is simultaneously a minimal spanning set and a maximal independent set."
//   },
//   obj2: {
//     question: "Why are coordinates relative to a basis unique?",
//     answer: "If a basis B = {v_1, ..., v_n} spans V, every vector in V can be written as a linear combination of the basis vectors. Independence guarantees that this combination is unique: if two different sets of scalars produced the same vector, their difference would give a nontrivial combination equal to zero, contradicting linear independence."
//   },
//   obj3: {
//     question: "What is the standard basis for R^n?",
//     answer: "The standard basis for R^n is the set {e_1, e_2, ..., e_n}, where e_i has a 1 in position i and zeros elsewhere. Its key property is that the coordinates of any vector relative to the standard basis are simply the components of the vector itself, so no system of equations needs to be solved."
//   },
//   obj4: {
//     question: "How do you find a basis for the column space, row space, and null space of a matrix?",
//     answer: "Row reduce the matrix A. The original columns of A corresponding to pivot positions form a basis for the column space. The nonzero rows of the echelon form give a basis for the row space. Solving Ax = 0 with free variables produces basis vectors for the null space, one per free variable."
//   },
//   obj5: {
//     question: "What is a change-of-basis matrix?",
//     answer: "If B and C are two bases for V, the change-of-basis matrix P from B to C converts B-coordinates into C-coordinates: [v]_C = P times [v]_B. Its columns are the C-coordinate vectors of each B-basis vector. The reverse conversion uses the inverse of P. Change of basis is the foundation of similarity transforms and diagonalization."
//   },
// }



// const schemas = {
//   learningResource: {
//     "@context": "https://schema.org",
//     "@type": "LearningResource",
//     "name": "Basis of a Vector Space",
//     "description": "Learn the basis of a vector space: definition, unique representation, coordinates, standard basis, finding bases, change of basis, and isomorphism with R^n.",
//     "url": "https://www.learnmathclass.com/linear-algebra/vector-spaces/",
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
//       "name": "Basis of a Vector Space"
//     },
//     "teaches": [
//       "Definition of a basis as a linearly independent spanning set",
//       "Unique representation of vectors as linear combinations of basis vectors",
//       "Coordinates relative to a basis and the coordinate vector",
//       "Standard bases for R^n, polynomial spaces, and matrix spaces",
//       "Finding bases for the column space, row space, and null space of a matrix",
//       "Change of basis, change-of-basis matrix, and isomorphism of finite-dimensional vector spaces"
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
//         "name": "Vector Spaces",
//         "item": "https://www.learnmathclass.com/linear-algebra/vector-spaces/"
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
//      sectionsContent,
//      introContent,
//      faqQuestions,
//      schemas,
//      seoData: {
//        title: "Basis of a Vector Space and Coordinates | Learn Math Class",
//        description: "Learn the basis of a vector space: definition, unique representation, coordinates, standard basis, finding bases, change of basis, and isomorphism with R^n.",
//        keywords: keyWords.join(", "),
//        url: "/linear-algebra/vector-spaces/basis",
//        name: "Basis of a Vector Space"
//      },
//    }
// }
//    }

// export default function BasisVectorSpacePage({seoData, sectionsContent, introContent, faqQuestions, schemas}) {
    
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
//         ]
//     },
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
//  <Head>
//   <title>{seoData.title}</title>
//   <meta name="description" content={seoData.description} />
//   <meta name="keywords" content={seoData.keywords} />
//   <meta name="viewport" content="width=device-width, initial-scale=1" />
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
//    <h1 className='title' style={{marginTop:'0px',marginBottom:'10px'}}>Basis of Vector Space</h1>
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



import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
import IntroSection from '@/app/components/page-components/section/IntroContentSection'
import Sections from '@/app/components/page-components/section/Sections'
import SectionTableOfContents from '@/app/components/page-components/section/SectionTableofContents'
import React from 'react'
import '../../../pages.css'
import Head from 'next/head'
import IdentitySheet from '@/app/components/infographics/linear-algebra/IdentitySheet'
import DiagramFrame from '@/app/components/infographics/DiagramsFrame'
import KeyTermsCard from '@/app/components/page-components/KeyTermsCard'
import NotationSection from '@/app/components/page-components/content-components/NotationSection'


export async function getStaticProps(){
const keyWords = [
  "basis of vector space",
  "vector space basis",
  "basis definition linear algebra",
  "linear independence and span",
  "coordinates relative to basis",
  "standard basis Rn",
  "change of basis",
  "change of basis matrix",
  "unique representation vectors",
  "coordinate vector",
  "basis for column space",
  "basis for null space",
  "finding a basis",
  "vector space dimension",
  "isomorphism finite dimensional",
]

  // •

//   \u2022 First item
// \u2022 Second item

  
// <hr style="border-width:1px;"></hr>

// <hr style="color:blue;" />

// <hr style="border-color:#3498db; border-width:1px;" />



// @span[backgroundColor:#e3f2fd,padding:4px 8px,borderRadius:4px,fontSize:12px]:[See All Probability Symbols and Notations](!/math-symbols/probability) →@

 
// <div key={'notation-normal'} style={{background: 'linear-gradient(to right, #f1f5f9 0%, #e2e8f0 100%)', padding: '20px', margin: '16px 0', borderRadius: '8px', border: '2px solid #94a3b8',transform:'scale(0.9)'}}>
        //     {processContent(sectionsContent.normal.notation)}
        // </div>,


//   <div key={'parameters-normal'} style={{background: 'linear-gradient(to right, #f8fafc 0%, #f1f5f9 100%)', padding: '20px', margin: '16px 0', borderRadius: '8px', border: '2px solid #cbd5e1',transform:'scale(0.9)'}}>
//     {processContent(sectionsContent.normal.parameters)}
// </div>,
        
//  <div key={'pmf-geometric'} style={{background: 'linear-gradient(to right, #eff6ff 0%, #dbeafe 100%)', padding: '20px', margin: '16px 0', borderRadius: '8px', border: '2px solid #60a5fa',transform:'scale(0.9)'}}>
//                   {processContent(sectionsContent.obj4.content)}
//                   </div>,


//  <div key={'dist'} style={{
//                     textAlign: 'center',
//                     transform: 'scale(0.98)',
//                     transformOrigin: 'center',
//                     marginTop:'50px',
//                     marginLeft:'-150px'
//                   }} dangerouslySetInnerHTML={{ 
//                     __html:   sectionContent.distributions.svg,
//                   }} />

  
// URL: /linear-algebra/vector-spaces/
// (The hub itself functions as the basis page — there is no separate /basis child page)


// const sectionsContent = {
//   obj1: {
//     title: `What a Vector Space Is`,
//     content: `Vectors in $\\mathbb{R}^n$ can be added and scaled. So can polynomials, [matrices](!/linear-algebra/matrix), and continuous functions. A vector space is the formal name for any collection of objects where these two operations — addition and scalar multiplication — satisfy ten algebraic [axioms](!/linear-algebra/vector-spaces/axioms): closure, commutativity, associativity, the existence of a zero element, additive inverses, and the expected distributive and identity laws for scalars.

// The objects in a vector space are called vectors regardless of whether they look like arrows, columns of numbers, polynomials, or functions. The power of the abstraction is that every theorem proved from the axioms alone applies to every vector space simultaneously. [Linear independence](!/linear-algebra/vector-spaces/linear-independence), [span](!/linear-algebra/vector-spaces/span), basis, [dimension](!/linear-algebra/vector-spaces/dimension), and [subspaces](!/linear-algebra/vector-spaces/subspaces) are all defined from the axioms, and their properties carry over to any setting where the axioms hold.`,
//     before: ``,
//     after: ``,
//     link: ``,
//   },
//   obj2: {
//     title: `Basis: Definition`,
//     content: `A basis for a vector space $V$ is a set of vectors $\\mathcal{B} = \\{\\mathbf{v}_1, \\mathbf{v}_2, \\dots, \\mathbf{v}_n\\}$ that satisfies two conditions simultaneously.

// The set is [linearly independent](!/linear-algebra/vector-spaces/linear-independence): no vector in the set can be written as a linear combination of the others. Equivalently, the only combination $c_1\\mathbf{v}_1 + c_2\\mathbf{v}_2 + \\cdots + c_n\\mathbf{v}_n = \\mathbf{0}$ is the trivial one with all scalars equal to zero.

// The set [spans](!/linear-algebra/vector-spaces/span) $V$: every vector in $V$ can be expressed as some linear combination of $\\mathbf{v}_1, \\dots, \\mathbf{v}_n$.

// Independence means no vector in the basis is wasted. Spanning means no vector in $V$ is out of reach. A basis is a minimal spanning set — remove any element and the span shrinks. It is also a maximal independent set — add any vector from $V$ and independence breaks. These two characterizations are equivalent and place the basis at the exact boundary between "too few" and "too many."`,
//     before: ``,
//     after: ``,
//     link: ``,
//   },
//   obj3: {
//     title: `Unique Representation`,
//     content: `If $\\mathcal{B} = \\{\\mathbf{v}_1, \\dots, \\mathbf{v}_n\\}$ is a basis for $V$, then every vector $\\mathbf{v} \\in V$ can be written as

// $$\\mathbf{v} = c_1\\mathbf{v}_1 + c_2\\mathbf{v}_2 + \\cdots + c_n\\mathbf{v}_n$$

// in exactly one way. Existence is guaranteed by the spanning condition — every vector is reachable. Uniqueness is guaranteed by independence: if two different sets of scalars both produced $\\mathbf{v}$, subtracting one from the other would give a nontrivial combination equal to $\\mathbf{0}$, contradicting independence.

// This uniqueness is what separates a basis from an arbitrary spanning set. A spanning set that is not independent can represent some vectors in multiple ways — the representation is ambiguous. A basis eliminates all ambiguity: every vector has exactly one set of coefficients.`,
//     before: ``,
//     after: ``,
//     link: ``,
//   },
//   obj4: {
//     title: `Coordinates`,
//     content: `The scalars $c_1, c_2, \\dots, c_n$ in the unique representation $\\mathbf{v} = c_1\\mathbf{v}_1 + \\cdots + c_n\\mathbf{v}_n$ are called the coordinates of $\\mathbf{v}$ relative to the basis $\\mathcal{B}$. They are collected into a coordinate vector:

// $$[\\mathbf{v}]_\\mathcal{B} = \\begin{pmatrix} c_1 \\\\ c_2 \\\\ \\vdots \\\\ c_n \\end{pmatrix}$$

// Coordinates depend entirely on the choice of basis. The same vector $\\mathbf{v}$ has different coordinates in different bases — the vector does not change, but its numerical description does.

// To find the coordinates of $\\mathbf{v}$ relative to $\\mathcal{B}$, solve the [linear system](!/linear-algebra/linear-systems) $c_1\\mathbf{v}_1 + \\cdots + c_n\\mathbf{v}_n = \\mathbf{v}$. If the basis vectors are columns of a [matrix](!/linear-algebra/matrix) $B$, this is the system $B\\mathbf{c} = \\mathbf{v}$, and the coordinate vector is $\\mathbf{c} = B^{-1}\\mathbf{v}$ when $B$ is invertible. For the standard basis, $B = I$, so the coordinates are simply the components of $\\mathbf{v}$ itself.`,
//     before: ``,
//     after: ``,
//     link: ``,
//   },
//   obj5: {
//     title: `The Standard Basis for Rⁿ`,
//     content: `The most familiar basis for $\\mathbb{R}^n$ is the standard basis $\\{\\mathbf{e}_1, \\mathbf{e}_2, \\dots, \\mathbf{e}_n\\}$, where $\\mathbf{e}_i$ has a $1$ in position $i$ and zeros elsewhere:

// $$\\mathbf{e}_1 = \\begin{pmatrix} 1 \\\\ 0 \\\\ \\vdots \\\\ 0 \\end{pmatrix}, \\quad \\mathbf{e}_2 = \\begin{pmatrix} 0 \\\\ 1 \\\\ \\vdots \\\\ 0 \\end{pmatrix}, \\quad \\dots, \\quad \\mathbf{e}_n = \\begin{pmatrix} 0 \\\\ 0 \\\\ \\vdots \\\\ 1 \\end{pmatrix}$$

// Independence is immediate — each vector has a $1$ in a position where all others have $0$, so no vector is a combination of the rest. Spanning follows from the fact that any vector $(v_1, \\dots, v_n) = v_1\\mathbf{e}_1 + \\cdots + v_n\\mathbf{e}_n$.

// The standard basis has a special property: coordinates relative to it are just the components of the vector. For any other basis, finding coordinates requires solving a system. This is why the standard basis is the default — but it is one choice among infinitely many, and other bases are often better suited to particular problems.`,
//     before: ``,
//     after: ``,
//     link: ``,
//   },
//   obj6: {
//     title: `Other Standard Bases`,
//     content: `Every vector space encountered in practice comes with a natural default basis.

// The polynomial space $\\mathcal{P}_n$ of polynomials with degree at most $n$ has the monomial basis $\\{1, x, x^2, \\dots, x^n\\}$, consisting of $n + 1$ elements. Every polynomial $a_0 + a_1 x + \\cdots + a_n x^n$ is a linear combination of these monomials, and the coefficients are unique (a polynomial is determined by its coefficients). The coordinates of a polynomial relative to the monomial basis are its coefficients.

// The [matrix](!/linear-algebra/matrix) space $\\mathbb{R}^{m \\times n}$ has the matrix unit basis $\\{E_{ij}\\}$, where $E_{ij}$ has a $1$ in position $(i,j)$ and zeros elsewhere. There are $mn$ such matrices, and every $m \\times n$ matrix is a unique linear combination of them. The coordinates of a matrix are its entries.

// These are all "standard" bases in the sense that they are the most natural first choice. But many problems benefit from non-standard bases: [eigenvector](!/linear-algebra/eigenvalues-vectors) bases simplify matrix powers and differential equations, [orthonormal](!/linear-algebra/orthogonality/orthogonal-sets) bases simplify projections and least squares, and Fourier bases decompose periodic signals into frequency components. Choosing the right basis is often the key step in solving a problem.`,
//     before: ``,
//     after: ``,
//     link: ``,
//   },
//   obj7: {
//     title: `Finding a Basis for a Subspace`,
//     content: `The three [subspaces](!/linear-algebra/vector-spaces/subspaces) associated with a matrix each have a basis that can be extracted from row reduction.

// For the column space of an $m \\times n$ matrix $A$: row reduce $A$ and identify the pivot columns. The corresponding columns of the original matrix $A$ — not the echelon form — are a basis for $\\text{Col}(A)$. The echelon form reveals which columns are independent, but the original columns are the actual vectors spanning the column space.

// For the null space: solve $A\\mathbf{x} = \\mathbf{0}$ by reducing to [RREF](!/linear-algebra/linear-systems/rref) and expressing the general solution in terms of free variables. Each free variable contributes one basis vector.

// For the row space: the nonzero rows of the echelon form are a basis. Unlike the column space, the echelon form's rows — not the original rows — are used, because row operations change individual rows but preserve their span.

// ## Worked Example

// For $A = \\begin{pmatrix} 1 & 2 & 0 & 1 \\\\ 2 & 4 & 1 & 3 \\\\ 3 & 6 & 1 & 4 \\end{pmatrix}$, row reduction gives $\\begin{pmatrix} 1 & 2 & 0 & 1 \\\\ 0 & 0 & 1 & 1 \\\\ 0 & 0 & 0 & 0 \\end{pmatrix}$. Pivots are in columns $1$ and $3$. The column space basis is $\\{(1, 2, 3), (0, 1, 1)\\}$ — the first and third columns of the original $A$. The row space basis is $\\{(1, 2, 0, 1), (0, 0, 1, 1)\\}$. The null space has two free variables (columns $2$ and $4$), and solving yields a two-dimensional null space.`,
//     before: ``,
//     after: ``,
//     link: ``,
//   },
//   obj8: {
//     title: `Extending and Reducing to a Basis`,
//     content: `Two fundamental operations guarantee that bases always exist in finite-dimensional spaces.

// Extension: any linearly independent set can be grown into a basis by adding vectors one at a time. At each step, pick any vector not in the current [span](!/linear-algebra/vector-spaces/span) and adjoin it. Independence is preserved because the new vector is not a combination of the existing ones. The process stops when the span reaches all of $V$.

// Reduction: any spanning set can be trimmed into a basis by removing redundant vectors. A vector is redundant if it lies in the span of the remaining vectors. Remove redundant vectors one at a time until what remains is independent. The span does not shrink, because each removed vector was already expressible in terms of the others.

// Both processes terminate because [dimension](!/linear-algebra/vector-spaces/dimension) is finite — the independent set cannot grow past $n$ vectors, and the spanning set cannot shrink below $n$ vectors, where $n = \\dim(V)$. This means every finite-dimensional vector space has a basis, and the choice of basis is highly flexible.`,
//     before: ``,
//     after: ``,
//     link: ``,
//   },
//   obj9: {
//     title: `Change of Basis`,
//     content: `Different bases assign different coordinates to the same vector. The change-of-basis matrix converts between them.

// If $\\mathcal{B}$ and $\\mathcal{C}$ are two bases for $V$, the change-of-basis matrix $P_{\\mathcal{C} \\leftarrow \\mathcal{B}}$ satisfies

// $$[\\mathbf{v}]_\\mathcal{C} = P_{\\mathcal{C} \\leftarrow \\mathcal{B}} \\, [\\mathbf{v}]_\\mathcal{B}$$

// for every vector $\\mathbf{v} \\in V$. The columns of $P_{\\mathcal{C} \\leftarrow \\mathcal{B}}$ are the $\\mathcal{C}$-coordinate vectors of each $\\mathcal{B}$-basis vector. The reverse conversion uses the [inverse](!/linear-algebra/matrix/inverse): $P_{\\mathcal{B} \\leftarrow \\mathcal{C}} = P_{\\mathcal{C} \\leftarrow \\mathcal{B}}^{-1}$.

// ## Worked Example

// In $\\mathbb{R}^2$, let $\\mathcal{B} = \\{(1, 1), (1, -1)\\}$ and let $\\mathcal{C}$ be the standard basis. The $\\mathcal{C}$-coordinates of $(1, 1)$ are just $(1, 1)$, and the $\\mathcal{C}$-coordinates of $(1, -1)$ are $(1, -1)$. So $P_{\\mathcal{C} \\leftarrow \\mathcal{B}} = \\begin{pmatrix} 1 & 1 \\\\ 1 & -1 \\end{pmatrix}$. To find the $\\mathcal{B}$-coordinates of $\\mathbf{v} = (3, 1)$: solve $P\\mathbf{c} = (3, 1)$, giving $\\mathbf{c} = P^{-1}(3, 1) = \\frac{1}{-2}\\begin{pmatrix} -1 & -1 \\\\ -1 & 1 \\end{pmatrix}\\begin{pmatrix} 3 \\\\ 1 \\end{pmatrix} = (2, 1)$. So $[\\mathbf{v}]_\\mathcal{B} = (2, 1)$, meaning $\\mathbf{v} = 2(1, 1) + 1(1, -1)$.

// Change of basis connects to [similarity](!/linear-algebra/linear-transformations/change-of-basis): if a [linear transformation](!/linear-algebra/linear-transformations) has matrix $A$ in basis $\\mathcal{B}$, its matrix in basis $\\mathcal{C}$ is $P^{-1}AP$. Choosing a good basis — one that simplifies $A$ into diagonal or triangular form — is the central idea behind [diagonalization](!/linear-algebra/eigenvalues-vectors/diagonalization).`,
//     before: ``,
//     after: ``,
//     link: ``,
//   },
//   obj10: {
//     title: `Coordinates and Isomorphism`,
//     content: `Choosing a basis for an $n$-dimensional vector space $V$ creates a one-to-one correspondence between $V$ and $\\mathbb{R}^n$. Each vector $\\mathbf{v} \\in V$ maps to its coordinate vector $[\\mathbf{v}]_\\mathcal{B} \\in \\mathbb{R}^n$, and this mapping preserves addition and scalar multiplication:

// $$[\\mathbf{u} + \\mathbf{v}]_\\mathcal{B} = [\\mathbf{u}]_\\mathcal{B} + [\\mathbf{v}]_\\mathcal{B}, \\qquad [c\\mathbf{v}]_\\mathcal{B} = c[\\mathbf{v}]_\\mathcal{B}$$

// Such a structure-preserving bijection is called an isomorphism. Its existence means that every $n$-dimensional real vector space — $\\mathbb{R}^n$, $\\mathcal{P}_{n-1}$, $\\mathbb{R}^{m \\times k}$ with $mk = n$, solution spaces of ODEs — behaves identically to $\\mathbb{R}^n$ in all algebraic respects. The objects differ, but the linear algebra is the same.

// [Dimension](!/linear-algebra/vector-spaces/dimension) is the single invariant that classifies finite-dimensional vector spaces up to isomorphism. Two spaces over the same field are isomorphic if and only if they have the same dimension. This is why dimension occupies such a central place in the theory.`,
//     before: ``,
//     after: ``,
//     link: ``,
//   },
//   obj11: {
//     title: `Independence and Span`,
//     content: `The two concepts that a basis unifies — [linear independence](!/linear-algebra/vector-spaces/linear-independence) and [span](!/linear-algebra/vector-spaces/span) — each have their own rich theory.

// Independence is tested by checking whether the homogeneous system $A\\mathbf{c} = \\mathbf{0}$ has only the trivial solution, where $A$ is the matrix whose columns are the vectors. For $n$ vectors in $\\mathbb{R}^n$, this reduces to checking whether the [determinant](!/linear-algebra/determinants) is nonzero. In $\\mathbb{R}^n$, at most $n$ vectors can be independent — any set of $n + 1$ or more is automatically dependent.

// Span is tested by checking whether $A\\mathbf{c} = \\mathbf{b}$ is consistent for every $\\mathbf{b}$, or for a specific $\\mathbf{b}$ if the question is about membership. The span of a set is always a subspace, and its dimension equals the number of independent vectors in the set.

// A set of exactly $n$ vectors in an $n$-dimensional space is a basis if and only if it is independent (spanning follows automatically), and if and only if it spans the space (independence follows automatically). At the magic count $n = \\dim(V)$, the two conditions become equivalent.`,
//     before: ``,
//     after: ``,
//     link: ``,
//   },
//   obj12: {
//     title: `Subspaces and the Fundamental Subspaces`,
//     content: `A [subspace](!/linear-algebra/vector-spaces/subspaces) is a subset of a vector space that is itself a vector space under the same operations. The subspace test requires only two checks: closure under addition and closure under scalar multiplication. Lines and planes through the origin, null spaces, column spaces, and row spaces are all subspaces.

// Every $m \\times n$ matrix $A$ defines four [fundamental subspaces](!/linear-algebra/vector-spaces/fundamental-subspaces): the column space in $\\mathbb{R}^m$ (dimension $r$), the row space in $\\mathbb{R}^n$ (dimension $r$), the null space in $\\mathbb{R}^n$ (dimension $n - r$), and the left null space in $\\mathbb{R}^m$ (dimension $m - r$), where $r = \\text{rank}(A)$.

// These four subspaces split into two pairs of [orthogonal](!/linear-algebra/orthogonality) complements: the row space and null space are perpendicular in $\\mathbb{R}^n$, while the column space and left null space are perpendicular in $\\mathbb{R}^m$. The [rank](!/linear-algebra/matrix/rank) governs all four dimensions and completely determines the geometry of the linear map $\\mathbf{x} \\mapsto A\\mathbf{x}$.`,
//     before: ``,
//     after: ``,
//     link: ``,
//   },
// };


// URL: /linear-algebra/vector-spaces/
// (The hub itself functions as the basis page — there is no separate /basis child page)


const sectionsContent = {
  obj1: {
    title: `What a Vector Space Is`,
    content: `Vectors in $\\mathbb{R}^n$ can be added and scaled. So can polynomials, [matrices](!/linear-algebra/matrix), and continuous functions. A vector space is the formal name for any collection of objects where these two operations — addition and scalar multiplication — satisfy ten algebraic [axioms](!/linear-algebra/vector-spaces/axioms): closure, commutativity, associativity, the existence of a zero element, additive inverses, and the expected distributive and identity laws for scalars.

The objects in a vector space are called vectors regardless of whether they look like arrows, columns of numbers, polynomials, or functions. The power of the abstraction is that every theorem proved from the axioms alone applies to every vector space simultaneously. [Linear independence](!/linear-algebra/vector-spaces/linear-independence), [span](!/linear-algebra/vector-spaces/span), basis, [dimension](!/linear-algebra/vector-spaces/dimension), and [subspaces](!/linear-algebra/vector-spaces/subspaces) are all defined from the axioms, and their properties carry over to any setting where the axioms hold.`,
    before: ``,
    after: ``,
    link: ``,
  },
  obj2: {
    title: `Basis: Definition`,
    content: `A basis for a vector space $V$ is a set of vectors $\\mathcal{B} = \\{\\mathbf{v}_1, \\mathbf{v}_2, \\dots, \\mathbf{v}_n\\}$ that satisfies two conditions simultaneously:

@academic[formula_callout:Basis Definition
$$\\mathcal{B} = \\{\\mathbf{v}_1, \\ldots, \\mathbf{v}_n\\} \\text{ is a basis for } V \\iff \\begin{cases} \\mathcal{B} \\text{ is linearly independent} \\\\ \\text{Span}(\\mathcal{B}) = V \\end{cases}$$
/linear-algebra/formulas#basis_definition]@

@academic[formulas_link:Browse all linear algebra formulas
/linear-algebra/formulas]@

The set is [linearly independent](!/linear-algebra/vector-spaces/linear-independence): no vector in the set can be written as a linear combination of the others. Equivalently, the only combination $c_1\\mathbf{v}_1 + c_2\\mathbf{v}_2 + \\cdots + c_n\\mathbf{v}_n = \\mathbf{0}$ is the trivial one with all scalars equal to zero.

The set [spans](!/linear-algebra/vector-spaces/span) $V$: every vector in $V$ can be expressed as some linear combination of $\\mathbf{v}_1, \\dots, \\mathbf{v}_n$.

Independence means no vector in the basis is wasted. Spanning means no vector in $V$ is out of reach. A basis is a minimal spanning set — remove any element and the span shrinks. It is also a maximal independent set — add any vector from $V$ and independence breaks. These two characterizations are equivalent and place the basis at the exact boundary between "too few" and "too many."`,
    before: ``,
    after: ``,
    link: ``,
  },
  notation: {
    title: `Basis and Coordinate Notation`,
    lead: `A script letter for the collection, brackets that ask “in which coordinates?”, and a subscript arrow engineered to cancel like dominoes.`,
    inherited: `$\\text{Span}$ and $\\{\\ldots\\}$ — [span notation](!/linear-algebra/vector-spaces/span#notation); $\\mathbf{e}_i$ — [norm notation](!/linear-algebra/vectors/magnitude#notation); matrices and $B^{-1}$ — [matrix](!/linear-algebra/matrix/operations#notation) and [inverse notation](!/linear-algebra/matrix/inverse#notation).`,
    entries: [
      {
        id: 'script-basis',
        tex: `$\\mathcal{B}$ vs $B$`,
        read: `Script B, the basis; roman B, the matrix`,
        means: `Calligraphic letters name *collections*: $\\mathcal{B}$ is the set of basis vectors, while roman $B$ is the matrix whose columns they become — and the **Coordinates** section below legitimately uses both in one computation ($\\mathbf{c} = B^{-1}\\mathbf{v}$ for coordinates relative to $\\mathcal{B}$).`,
        cases: `The script convention extends across the subject: $\\mathcal{P}_n$ for the polynomial space, $\\mathcal{C}$ for a second basis — collections and spaces get the fancy typeface, their matrix incarnations the plain one.`,
        alsoWritten: `Plain $B = \\{\\mathbf{v}_1, \\ldots\\}$ in texts without calligraphic fonts — workable until a basis and its matrix share a page, which is exactly when the distinction earns its ink.`,
        confusedWith: `One object. The set and the matrix carry the same data but different species — a set has members, a matrix has products; conflating them writes $\\mathcal{B}\\mathbf{c}$, which multiplies nothing.`,
      },
      {
        id: 'coordinate-brackets',
        tex: `$[\\mathbf{v}]_{\\mathcal{B}}$`,
        read: `The coordinate vector of v, relative to B`,
        means: `The brackets ask “in which coordinates?” and the subscript answers. Defined in **Coordinates** below: the column of scalars expressing $\\mathbf{v}$ in the basis $\\mathcal{B}$. Same vector, different subscript, different numbers — the notation makes basis-dependence impossible to forget.`,
        cases: `In the standard basis the machinery collapses: $[\\mathbf{v}]_{\\mathcal{E}} = \\mathbf{v}$ — the coordinates *are* the components, which is why the subscript is usually dropped there and only there.`,
        alsoWritten: `$(\\mathbf{v})_{\\mathcal{B}}$ with parentheses, or $\\mathbf{v}_{\\mathcal{B}}$ bare in terse texts — the bracket form dominates because it survives expressions: $[T(\\mathbf{v})]_{\\mathcal{B}}$ parses cleanly.`,
        confusedWith: `The vector itself. $\\mathbf{v}$ lives in $V$; $[\\mathbf{v}]_{\\mathcal{B}}$ lives in $\\mathbb{R}^n$ — a *description* of $\\mathbf{v}$, not $\\mathbf{v}$. The gap between object and description is the entire content of coordinate isomorphism.`,
      },
      {
        id: 'backward-arrow-subscript',
        tex: `$P_{\\mathcal{C} \\leftarrow \\mathcal{B}}$`,
        read: `The change-of-basis matrix, from B to C`,
        means: `The subscript reads right to left — *from* $\\mathcal{B}$, *toward* $\\mathcal{C}$ — because the notation is engineered for the equation it lives in: in $[\\mathbf{v}]_{\\mathcal{C}} = P_{\\mathcal{C} \\leftarrow \\mathcal{B}}[\\mathbf{v}]_{\\mathcal{B}}$ of **Change of Basis** below, adjacent basis letters touch and match.`,
        cases: `The design pays off in chains: $P_{\\mathcal{D} \\leftarrow \\mathcal{C}}\\,P_{\\mathcal{C} \\leftarrow \\mathcal{B}} = P_{\\mathcal{D} \\leftarrow \\mathcal{B}}$ — inner letters cancel like dominoes — and reversal is the [inverse](!/linear-algebra/matrix/inverse#notation): $P_{\\mathcal{B} \\leftarrow \\mathcal{C}} = P_{\\mathcal{C} \\leftarrow \\mathcal{B}}^{-1}$.`,
        alsoWritten: `$P_{\\mathcal{B} \\to \\mathcal{C}}$ with a forward arrow in some texts — same matrix, arrow flipped; check each book's convention before trusting the direction.`,
        confusedWith: `Reading left to right. The arrow's tail names the *input* coordinates — reading it as “from $\\mathcal{C}$” applies the matrix backwards, and the mistake is self-concealing because the product still computes.`,
      },
    ],
    symbolsHref: `/math-symbols/linear-algebra`,
    symbolsLabel: `All linear algebra symbols`,
    parentHref: `/linear-algebra/vector-spaces`,
    parentLabel: `Vector Spaces`,
  },
  obj3: {
    title: `Unique Representation`,
    content: `If $\\mathcal{B} = \\{\\mathbf{v}_1, \\dots, \\mathbf{v}_n\\}$ is a basis for $V$, every vector $\\mathbf{v} \\in V$ has a unique representation as a linear combination of basis vectors:

@academic[formula_callout:Unique Basis Representation
$$\\forall\\, \\mathbf{v} \\in V,\\ \\exists!\\, (c_1, \\ldots, c_n): \\mathbf{v} = c_1\\mathbf{v}_1 + c_2\\mathbf{v}_2 + \\cdots + c_n\\mathbf{v}_n$$
/linear-algebra/formulas#unique_basis_representation]@

@academic[formulas_link:Browse all linear algebra formulas
/linear-algebra/formulas]@

Existence is guaranteed by the spanning condition — every vector is reachable. Uniqueness is guaranteed by independence: if two different sets of scalars both produced $\\mathbf{v}$, subtracting one from the other would give a nontrivial combination equal to $\\mathbf{0}$, contradicting independence.

This uniqueness is what separates a basis from an arbitrary spanning set. A spanning set that is not independent can represent some vectors in multiple ways — the representation is ambiguous. A basis eliminates all ambiguity: every vector has exactly one set of coefficients.`,
    before: ``,
    after: ``,
    link: ``,
  },
  obj4: {
    title: `Coordinates`,
    content: `The scalars $c_1, c_2, \\dots, c_n$ in the unique representation $\\mathbf{v} = c_1\\mathbf{v}_1 + \\cdots + c_n\\mathbf{v}_n$ are called the coordinates of $\\mathbf{v}$ relative to the basis $\\mathcal{B}$. They are collected into a coordinate vector:

@academic[formula_callout:Coordinate Vector
$$[\\mathbf{v}]_\\mathcal{B} = \\begin{pmatrix} c_1 \\\\ c_2 \\\\ \\vdots \\\\ c_n \\end{pmatrix} \\quad \\text{where } \\mathbf{v} = c_1\\mathbf{v}_1 + \\cdots + c_n\\mathbf{v}_n$$
/linear-algebra/formulas#coordinate_vector]@

@academic[formulas_link:Browse all linear algebra formulas
/linear-algebra/formulas]@

Coordinates depend entirely on the choice of basis. The same vector $\\mathbf{v}$ has different coordinates in different bases — the vector does not change, but its numerical description does.

To find the coordinates of $\\mathbf{v}$ relative to $\\mathcal{B}$, solve the [linear system](!/linear-algebra/linear-systems) $c_1\\mathbf{v}_1 + \\cdots + c_n\\mathbf{v}_n = \\mathbf{v}$. If the basis vectors are columns of a [matrix](!/linear-algebra/matrix) $B$, this is the system $B\\mathbf{c} = \\mathbf{v}$, and the coordinate vector is $\\mathbf{c} = B^{-1}\\mathbf{v}$ when $B$ is invertible. For the standard basis, $B = I$, so the coordinates are simply the components of $\\mathbf{v}$ itself.`,
    before: ``,
    after: ``,
    link: ``,
  },
  obj5: {
    title: `The Standard Basis for Rⁿ`,
    content: `The most familiar basis for $\\mathbb{R}^n$ is the standard basis $\\{\\mathbf{e}_1, \\mathbf{e}_2, \\dots, \\mathbf{e}_n\\}$, where $\\mathbf{e}_i$ has a $1$ in position $i$ and zeros elsewhere:

@academic[formula_callout:Standard Basis (Rn)
$$\\mathbf{e}_i = (0, \\ldots, 0, \\underset{i\\text{-th}}{1}, 0, \\ldots, 0), \\quad i = 1, \\ldots, n$$
/linear-algebra/formulas#standard_basis_rn]@

@academic[formulas_link:Browse all linear algebra formulas
/linear-algebra/formulas]@

Independence is immediate — each vector has a $1$ in a position where all others have $0$, so no vector is a combination of the rest. Spanning follows from the fact that any vector $(v_1, \\dots, v_n) = v_1\\mathbf{e}_1 + \\cdots + v_n\\mathbf{e}_n$.

The standard basis has a special property: coordinates relative to it are just the components of the vector. For any other basis, finding coordinates requires solving a system. This is why the standard basis is the default — but it is one choice among infinitely many, and other bases are often better suited to particular problems.`,
    before: ``,
    after: ``,
    link: ``,
  },
  obj6: {
    title: `Other Standard Bases`,
    content: `Every vector space encountered in practice comes with a natural default basis.

The polynomial space $\\mathcal{P}_n$ of polynomials with degree at most $n$ has the monomial basis $\\{1, x, x^2, \\dots, x^n\\}$, consisting of $n + 1$ elements. Every polynomial $a_0 + a_1 x + \\cdots + a_n x^n$ is a linear combination of these monomials, and the coefficients are unique (a polynomial is determined by its coefficients). The coordinates of a polynomial relative to the monomial basis are its coefficients.

The [matrix](!/linear-algebra/matrix) space $\\mathbb{R}^{m \\times n}$ has the matrix unit basis $\\{E_{ij}\\}$, where $E_{ij}$ has a $1$ in position $(i,j)$ and zeros elsewhere. There are $mn$ such matrices, and every $m \\times n$ matrix is a unique linear combination of them. The coordinates of a matrix are its entries.

These are all "standard" bases in the sense that they are the most natural first choice. But many problems benefit from non-standard bases: [eigenvector](!/linear-algebra/eigenvalues-vectors) bases simplify matrix powers and differential equations, [orthonormal](!/linear-algebra/orthogonality/orthogonal-sets) bases simplify projections and least squares, and Fourier bases decompose periodic signals into frequency components. Choosing the right basis is often the key step in solving a problem.`,
    before: ``,
    after: ``,
    link: ``,
  },
  obj7: {
    title: `Finding a Basis for a Subspace`,
    content: `The three [subspaces](!/linear-algebra/vector-spaces/subspaces) associated with a matrix each have a basis that can be extracted from row reduction.

For the column space of an $m \\times n$ matrix $A$: row reduce $A$ and identify the pivot columns. The corresponding columns of the original matrix $A$ — not the echelon form — are a basis for $\\text{Col}(A)$. The echelon form reveals which columns are independent, but the original columns are the actual vectors spanning the column space.

For the null space: solve $A\\mathbf{x} = \\mathbf{0}$ by reducing to [RREF](!/linear-algebra/linear-systems/rref) and expressing the general solution in terms of free variables. Each free variable contributes one basis vector.

For the row space: the nonzero rows of the echelon form are a basis. Unlike the column space, the echelon form's rows — not the original rows — are used, because row operations change individual rows but preserve their span.

## Worked Example

For $A = \\begin{pmatrix} 1 & 2 & 0 & 1 \\\\ 2 & 4 & 1 & 3 \\\\ 3 & 6 & 1 & 4 \\end{pmatrix}$, row reduction gives $\\begin{pmatrix} 1 & 2 & 0 & 1 \\\\ 0 & 0 & 1 & 1 \\\\ 0 & 0 & 0 & 0 \\end{pmatrix}$. Pivots are in columns $1$ and $3$. The column space basis is $\\{(1, 2, 3), (0, 1, 1)\\}$ — the first and third columns of the original $A$. The row space basis is $\\{(1, 2, 0, 1), (0, 0, 1, 1)\\}$. The null space has two free variables (columns $2$ and $4$), and solving yields a two-dimensional null space.`,
    before: ``,
    after: ``,
    link: ``,
  },
  obj8: {
    title: `Extending and Reducing to a Basis`,
    content: `Two fundamental operations guarantee that bases always exist in finite-dimensional spaces.

Extension: any linearly independent set can be grown into a basis by adding vectors one at a time. At each step, pick any vector not in the current [span](!/linear-algebra/vector-spaces/span) and adjoin it. Independence is preserved because the new vector is not a combination of the existing ones. The process stops when the span reaches all of $V$.

Reduction: any spanning set can be trimmed into a basis by removing redundant vectors. A vector is redundant if it lies in the span of the remaining vectors. Remove redundant vectors one at a time until what remains is independent. The span does not shrink, because each removed vector was already expressible in terms of the others.

Both processes terminate because [dimension](!/linear-algebra/vector-spaces/dimension) is finite — the independent set cannot grow past $n$ vectors, and the spanning set cannot shrink below $n$ vectors, where $n = \\dim(V)$. This means every finite-dimensional vector space has a basis, and the choice of basis is highly flexible.`,
    before: ``,
    after: ``,
    link: ``,
  },
  obj9: {
    title: `Change of Basis`,
    content: `Different bases assign different coordinates to the same vector. The change-of-basis matrix converts between them.

If $\\mathcal{B}$ and $\\mathcal{C}$ are two bases for $V$, the change-of-basis matrix $P_{\\mathcal{C} \\leftarrow \\mathcal{B}}$ satisfies

@academic[formula_callout:Change of Basis Formula
$$[\\mathbf{v}]_\\mathcal{C} = P_{\\mathcal{C} \\leftarrow \\mathcal{B}}\\, [\\mathbf{v}]_\\mathcal{B}$$
/linear-algebra/formulas#change_of_basis_formula]@

@academic[formulas_link:Browse all linear algebra formulas
/linear-algebra/formulas]@

for every vector $\\mathbf{v} \\in V$. The columns of $P_{\\mathcal{C} \\leftarrow \\mathcal{B}}$ are the $\\mathcal{C}$-coordinate vectors of each $\\mathcal{B}$-basis vector. The reverse conversion uses the [inverse](!/linear-algebra/matrix/inverse):

@academic[formula_callout:Change of Basis Inverse
$$P_{\\mathcal{B} \\leftarrow \\mathcal{C}} = \\bigl(P_{\\mathcal{C} \\leftarrow \\mathcal{B}}\\bigr)^{-1}$$
/linear-algebra/formulas#change_of_basis_inverse]@

@academic[formulas_link:Browse all linear algebra formulas
/linear-algebra/formulas]@

## Worked Example

In $\\mathbb{R}^2$, let $\\mathcal{B} = \\{(1, 1), (1, -1)\\}$ and let $\\mathcal{C}$ be the standard basis. The $\\mathcal{C}$-coordinates of $(1, 1)$ are just $(1, 1)$, and the $\\mathcal{C}$-coordinates of $(1, -1)$ are $(1, -1)$. So $P_{\\mathcal{C} \\leftarrow \\mathcal{B}} = \\begin{pmatrix} 1 & 1 \\\\ 1 & -1 \\end{pmatrix}$. To find the $\\mathcal{B}$-coordinates of $\\mathbf{v} = (3, 1)$: solve $P\\mathbf{c} = (3, 1)$, giving $\\mathbf{c} = P^{-1}(3, 1) = \\frac{1}{-2}\\begin{pmatrix} -1 & -1 \\\\ -1 & 1 \\end{pmatrix}\\begin{pmatrix} 3 \\\\ 1 \\end{pmatrix} = (2, 1)$. So $[\\mathbf{v}]_\\mathcal{B} = (2, 1)$, meaning $\\mathbf{v} = 2(1, 1) + 1(1, -1)$.

Change of basis connects to [similarity](!/linear-algebra/linear-transformations/change-of-basis): if a [linear transformation](!/linear-algebra/linear-transformations) has matrix $A$ in basis $\\mathcal{B}$, its matrix in basis $\\mathcal{C}$ is $P^{-1}AP$. Choosing a good basis — one that simplifies $A$ into diagonal or triangular form — is the central idea behind [diagonalization](!/linear-algebra/eigenvalues-vectors/diagonalization).`,
    before: ``,
    after: ``,
    link: ``,
  },
  obj10: {
    title: `Coordinates and Isomorphism`,
    content: `Choosing a basis for an $n$-dimensional vector space $V$ creates a one-to-one correspondence between $V$ and $\\mathbb{R}^n$. Each vector $\\mathbf{v} \\in V$ maps to its coordinate vector $[\\mathbf{v}]_\\mathcal{B} \\in \\mathbb{R}^n$, and this mapping preserves addition and scalar multiplication:

@academic[formula_callout:Coordinate Map Linearity
$$[\\mathbf{u} + \\mathbf{v}]_\\mathcal{B} = [\\mathbf{u}]_\\mathcal{B} + [\\mathbf{v}]_\\mathcal{B}, \\qquad [c\\mathbf{v}]_\\mathcal{B} = c\\,[\\mathbf{v}]_\\mathcal{B}$$
/linear-algebra/formulas#coordinate_map_linearity]@

@academic[formulas_link:Browse all linear algebra formulas
/linear-algebra/formulas]@

Such a structure-preserving bijection is called an isomorphism. Its existence means that every $n$-dimensional real vector space — $\\mathbb{R}^n$, $\\mathcal{P}_{n-1}$, $\\mathbb{R}^{m \\times k}$ with $mk = n$, solution spaces of ODEs — behaves identically to $\\mathbb{R}^n$ in all algebraic respects. The objects differ, but the linear algebra is the same.

[Dimension](!/linear-algebra/vector-spaces/dimension) is the single invariant that classifies finite-dimensional vector spaces up to isomorphism. Two spaces over the same field are isomorphic if and only if they have the same dimension. This is why dimension occupies such a central place in the theory.`,
    before: ``,
    after: ``,
    link: ``,
  },
  obj11: {
    title: `Independence and Span`,
    content: `The two concepts that a basis unifies — [linear independence](!/linear-algebra/vector-spaces/linear-independence) and [span](!/linear-algebra/vector-spaces/span) — each have their own rich theory.

Independence is tested by checking whether the homogeneous system $A\\mathbf{c} = \\mathbf{0}$ has only the trivial solution, where $A$ is the matrix whose columns are the vectors. For $n$ vectors in $\\mathbb{R}^n$, this reduces to checking whether the [determinant](!/linear-algebra/determinants) is nonzero. In $\\mathbb{R}^n$, at most $n$ vectors can be independent — any set of $n + 1$ or more is automatically dependent.

Span is tested by checking whether $A\\mathbf{c} = \\mathbf{b}$ is consistent for every $\\mathbf{b}$, or for a specific $\\mathbf{b}$ if the question is about membership. The span of a set is always a subspace, and its dimension equals the number of independent vectors in the set.

A set of exactly $n$ vectors in an $n$-dimensional space is a basis if and only if it is independent (spanning follows automatically), and if and only if it spans the space (independence follows automatically). At the magic count $n = \\dim(V)$, the two conditions become equivalent.`,
    before: ``,
    after: ``,
    link: ``,
  },
  obj12: {
    title: `Subspaces and the Fundamental Subspaces`,
    content: `A [subspace](!/linear-algebra/vector-spaces/subspaces) is a subset of a vector space that is itself a vector space under the same operations. The subspace test requires only two checks: closure under addition and closure under scalar multiplication. Lines and planes through the origin, null spaces, column spaces, and row spaces are all subspaces.

Every $m \\times n$ matrix $A$ defines four [fundamental subspaces](!/linear-algebra/vector-spaces/fundamental-subspaces): the column space in $\\mathbb{R}^m$ (dimension $r$), the row space in $\\mathbb{R}^n$ (dimension $r$), the null space in $\\mathbb{R}^n$ (dimension $n - r$), and the left null space in $\\mathbb{R}^m$ (dimension $m - r$), where $r = \\text{rank}(A)$.

These four subspaces split into two pairs of [orthogonal](!/linear-algebra/orthogonality) complements: the row space and null space are perpendicular in $\\mathbb{R}^n$, while the column space and left null space are perpendicular in $\\mathbb{R}^m$. The [rank](!/linear-algebra/matrix/rank) governs all four dimensions and completely determines the geometry of the linear map $\\mathbf{x} \\mapsto A\\mathbf{x}$.`,
    before: ``,
    after: ``,
    link: ``,
  },
};

const introContent = {
  title: `The Abstract Structure Behind Linear Algebra`,
  content: `A vector space is any collection of objects where addition and scalar multiplication obey a consistent set of rules. The concept of a basis — a minimal set of vectors from which every other vector can be built uniquely — is the central organizing idea. Choosing a basis assigns coordinates to every vector, connects abstract spaces to concrete computation in Rⁿ, and determines the dimension that classifies the space up to isomorphism.`,
};



const faqQuestions = {
  obj1: {
    question: "What is a basis of a vector space?",
    answer: "A basis of a vector space V is a set of vectors that is both linearly independent and spans V. Independence means no vector in the set is a linear combination of the others; spanning means every vector in V is expressible as a linear combination of the basis vectors. A basis is simultaneously a minimal spanning set and a maximal independent set."
  },
  obj2: {
    question: "Why are coordinates relative to a basis unique?",
    answer: "If a basis B = {v_1, ..., v_n} spans V, every vector in V can be written as a linear combination of the basis vectors. Independence guarantees that this combination is unique: if two different sets of scalars produced the same vector, their difference would give a nontrivial combination equal to zero, contradicting linear independence."
  },
  obj3: {
    question: "What is the standard basis for R^n?",
    answer: "The standard basis for R^n is the set {e_1, e_2, ..., e_n}, where e_i has a 1 in position i and zeros elsewhere. Its key property is that the coordinates of any vector relative to the standard basis are simply the components of the vector itself, so no system of equations needs to be solved."
  },
  obj4: {
    question: "How do you find a basis for the column space, row space, and null space of a matrix?",
    answer: "Row reduce the matrix A. The original columns of A corresponding to pivot positions form a basis for the column space. The nonzero rows of the echelon form give a basis for the row space. Solving Ax = 0 with free variables produces basis vectors for the null space, one per free variable."
  },
  obj5: {
    question: "What is a change-of-basis matrix?",
    answer: "If B and C are two bases for V, the change-of-basis matrix P from B to C converts B-coordinates into C-coordinates: [v]_C = P times [v]_B. Its columns are the C-coordinate vectors of each B-basis vector. The reverse conversion uses the inverse of P. Change of basis is the foundation of similarity transforms and diagonalization."
  },
}



const schemas = {
  learningResource: {
    "@context": "https://schema.org",
    "@type": "LearningResource",
    "name": "Basis of a Vector Space",
    "description": "Learn the basis of a vector space: definition, unique representation, coordinates, standard basis, finding bases, change of basis, and isomorphism with R^n.",
    "url": "https://www.learnmathclass.com/linear-algebra/vector-spaces/",
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
      "name": "Basis of a Vector Space"
    },
    "teaches": [
      "Definition of a basis as a linearly independent spanning set",
      "Unique representation of vectors as linear combinations of basis vectors",
      "Coordinates relative to a basis and the coordinate vector",
      "Standard bases for R^n, polynomial spaces, and matrix spaces",
      "Finding bases for the column space, row space, and null space of a matrix",
      "Change of basis, change-of-basis matrix, and isomorphism of finite-dimensional vector spaces"
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
        "name": "Vector Spaces",
        "item": "https://www.learnmathclass.com/linear-algebra/vector-spaces/"
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
     faqQuestions,
     schemas,
     seoData: {
       title: "Basis of a Vector Space and Coordinates | Learn Math Class",
       description: "Learn the basis of a vector space: definition, unique representation, coordinates, standard basis, finding bases, change of basis, and isomorphism with R^n.",
       keywords: keyWords.join(", "),
       url: "/linear-algebra/vector-spaces/basis",
       name: "Basis of a Vector Space"
     },
   }
}
   }

// obj6 — the default basis of each standard space, and what coordinates mean there
const standardBases = {
  kicker: 'Vector spaces \u00B7 standard bases',
  title: 'The default basis of each space',
  tallyLabel: 'spaces',
  intro: 'Every space met in practice comes with a natural first choice. The column worth reading is the last one \u2014 what a coordinate vector actually contains changes from space to space, even though the definition never does.',
  footnote: 'These are standard only in the sense of being the obvious first choice. Many problems are easier in a different basis: an [eigenvector basis](!/linear-algebra/eigen/diagonalization) makes matrix powers trivial, an [orthonormal basis](!/linear-algebra/orthogonality/orthogonal-sets) makes projection a dot product, and a Fourier basis turns a signal into frequencies. Choosing the basis is often the whole of solving the problem.',
  groups: [
    {
      heading: 'Coordinate spaces',
      identities: [
        {
          name: 'Real n-space',
          anchor: '#5',
          anchorLabel: 'Standard basis',
          formula: '$\\{\\mathbf{e}_1, \\mathbf{e}_2, \\ldots, \\mathbf{e}_n\\}$',
          condition: '$\\dim = n$ \u2014 coordinates are the components',
          note: 'Each $\\mathbf{e}_i$ has a single $1$ in position $i$. This is the basis where the distinction between a vector and its coordinate vector collapses \u2014 they are the same tuple \u2014 which is exactly why it hides what coordinates are and why the spaces below are worth stating separately.',
        },
      ],
    },
    {
      heading: 'Function and matrix spaces',
      identities: [
        {
          name: 'Polynomials of degree \u2264 n',
          formula: '$\\{1, x, x^2, \\ldots, x^n\\}$',
          condition: '$\\dim = n + 1$ \u2014 coordinates are the coefficients',
          strict: true,
          note: 'The monomial basis. A polynomial is determined by its coefficients, so $a_0 + a_1x + \\cdots + a_nx^n$ has coordinate vector $(a_0, \\ldots, a_n)$. Note the count: the constant term is a basis direction, so degree $\\leq 2$ gives dimension $3$.',
        },
        {
          name: 'Real m \u00D7 n matrices',
          formula: '$\\{E_{ij}\\}$, one per entry position',
          condition: '$\\dim = mn$ \u2014 coordinates are the entries',
          note: 'Each $E_{ij}$ carries a single $1$ at $(i,j)$. Every matrix is a unique combination of them, so the coordinate vector is the matrix read out entry by entry \u2014 the shape is a presentation choice, not extra structure.',
        },
      ],
    },
    {
      heading: 'What makes any of them work',
      identities: [
        {
          name: 'Unique representation',
          anchor: '#3',
          formula: '$\\mathbf{v} = c_1\\mathbf{b}_1 + \\cdots + c_n\\mathbf{b}_n$',
          condition: 'the $c_i$ are unique',
          key: true,
          note: 'Independence gives uniqueness and spanning gives existence, so every vector has exactly one coordinate vector. Without both halves the coordinate map is not a function \u2014 which is what a basis buys and a mere spanning set does not.',
        },
      ],
    },
  ],
}


export default function BasisVectorSpacePage({seoData, sectionsContent, introContent, faqQuestions, schemas}) {
    
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
          `The three spaces below are the ones worth having memorised, but the reason to compare them side by side is not the bases themselves — it is what a coordinate vector turns out to contain in each case. In $\\mathbb{R}^n$ the coordinates are the components, so nothing seems to have happened. In the polynomial and matrix spaces the coordinates are the coefficients and the entries, and the coordinate vector is visibly a different object from the thing it describes.`,
          <DiagramFrame
            key={'obj6-diagram'}
            id="standard-bases"
            title="The default basis of each space"
            source="/linear-algebra/vector-spaces/basis"
          >
            <IdentitySheet data={standardBases} theme="navy" variant="ledger" />
          </DiagramFrame>,
          `That difference is the whole content of [coordinates](#4). A basis does not describe a space so much as supply a dictionary between it and $\\mathbb{R}^n$, and the standard basis for $\\mathbb{R}^n$ is the degenerate case where the dictionary is the identity. Working in $\\mathcal{P}_3$ or $\\mathbb{R}^{2 \\times 2}$ makes the translation visible, and both are four-dimensional — so both have the same coordinate space, despite one being polynomials and the other matrices.`,
          `Two spaces sharing a dimension share a coordinate space, and that is what [isomorphism](#10) means: a polynomial of degree at most three and a $2 \\times 2$ matrix carry the same information, differently arranged. Anything provable from the axioms alone holds for both, which is why the finite-dimensional theory is stated once rather than once per kind of object.`,
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
        ]
    },
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
 <Head>
  <title>{seoData.title}</title>
  <meta name="description" content={seoData.description} />
  <meta name="keywords" content={seoData.keywords} />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
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
   <h1 className='title' style={{marginTop:'0px',marginBottom:'10px'}}>Basis of Vector Space</h1>
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