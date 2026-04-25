import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
import IntroSection from '@/app/components/page-components/section/IntroContentSection'
import Sections from '@/app/components/page-components/section/Sections'
import SectionTableOfContents from '@/app/components/page-components/section/SectionTableofContents'
import React from 'react'
import '../../pages.css'
import Head from 'next/head'
import KeyTermsCard from '@/app/components/page-components/KeyTermsCard'


export async function getStaticProps(){
const keyWords = [
  "vector spaces",
  "vector space definition",
  "vector space axioms",
  "ten axioms vector space",
  "subspace linear algebra",
  "linear independence",
  "span vector space",
  "basis and dimension",
  "Rn vector space",
  "polynomial vector space",
  "four fundamental subspaces",
  "vector space examples",
  "vector space non-examples",
  "field of scalars"
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

//     const sectionsContent={

//     obj1:{
//       title:``,
//       content:``,
//       before:``,
//       after:``,
//       link:'',
  
  
//     },
//     obj2:{
//       title:``,
//       content:``,
//       before:``,
//       after:``,
//       link:'',
  
//     },
  
//     obj3:{
  
//       title:``,
//       content:``,
//       before:``,
//       after:``,
//       link:'',
  
//     },
//     obj4:{
//       title:``,
//       content:``,
//       before:``,
//       after:``,
//       link:'',
  
//     },
//     obj5:{
//       title:``,
//       content:``,
//       before:``,
//       after:``,
//       link:'',
  
//     },
//     obj6:{
//       title:``,
//       content:``,
//       before:``,
//       after:``,
//       link:'',
  
//     },
//     obj7:{
//       title:``,
//       content:``,
//       before:``,
//       after:``,
//       link:'',
  
//     },
//     obj8:{
//       title:``,
//       content:``,
//       before:``,
//       after:``,
//       link:'',
  
//     },
//     obj9:{
//       title:``,
//       content:``,
//       before:``,
//       after:``,
//       link:'',
  
//     },
//     obj10:{
//       title:``,
//       content:``,
//       before:``,
//       after:``,
//       link:'',
  
//     },
//     obj11:{
//       title:``,
//       content:``,
//       before:``,
//       after:``,
//       link:'',
  
//     },
//     obj12:{
//       title:``,
//       content:``,
//       before:``,
//       after:``,
//       link:'',
  
//     },
//     obj13:{
//       title:``,
//       content:``,
//       before:``,
//       after:``,
//       link:'',
//       link:'',
  
//     },
//     obj14:{
//       title:``,
//       content:``,
//       before:``,
//       after:``,
//       link:'',
//       link:'',
  
//     },


//     obj15:{
  
//       title:``,
//       content:``,
//       before:``,
//       after:``,
//       link:'',
  
//     }
  
//   }

// const sectionsContent = {
//   obj1: {
//     title: `The Idea of a Vector Space`,
//     content: `The vectors of introductory linear algebra are columns of numbers in $\\mathbb{R}^n$. They can be added entry by entry and multiplied by scalars. But these same two operations — addition and scaling — appear in many other mathematical settings. Polynomials can be added and scaled. [Matrices](!/linear-algebra/matrix) can be added and scaled. Continuous functions on an interval can be added and scaled. In each case, the same algebraic patterns hold: addition is commutative and associative, scaling distributes over sums, and a zero element absorbs addition.

// A vector space is the formal name for any collection of objects where addition and scalar multiplication behave according to these patterns. The objects are called vectors, regardless of whether they look like arrows, columns of numbers, polynomials, or functions. The power of this abstraction is that any theorem proved from the axioms alone — without reference to a specific type of object — applies to every vector space simultaneously.`,
//     before: ``,
//     after: ``,
//     link: ``,
//   },
//   obj2: {
//     title: `Definition: The Ten Axioms`,
//     content: `A vector space over a field $\\mathbb{F}$ is a set $V$ together with two operations — addition ($\\mathbf{u} + \\mathbf{v}$) and scalar multiplication ($c\\mathbf{v}$) — satisfying ten axioms.

// ## Addition Axioms

// For all $\\mathbf{u}, \\mathbf{v}, \\mathbf{w} \\in V$:

// Closure: $\\mathbf{u} + \\mathbf{v} \\in V$.

// Commutativity: $\\mathbf{u} + \\mathbf{v} = \\mathbf{v} + \\mathbf{u}$.

// Associativity: $(\\mathbf{u} + \\mathbf{v}) + \\mathbf{w} = \\mathbf{u} + (\\mathbf{v} + \\mathbf{w})$.

// Zero vector: There exists $\\mathbf{0} \\in V$ such that $\\mathbf{v} + \\mathbf{0} = \\mathbf{v}$ for all $\\mathbf{v}$.

// Additive inverse: For every $\\mathbf{v} \\in V$, there exists $-\\mathbf{v} \\in V$ such that $\\mathbf{v} + (-\\mathbf{v}) = \\mathbf{0}$.

// ## Scalar Multiplication Axioms

// For all $\\mathbf{u}, \\mathbf{v} \\in V$ and all scalars $c, d \\in \\mathbb{F}$:

// Closure: $c\\mathbf{v} \\in V$.

// Associativity: $c(d\\mathbf{v}) = (cd)\\mathbf{v}$.

// Distributivity over vector addition: $c(\\mathbf{u} + \\mathbf{v}) = c\\mathbf{u} + c\\mathbf{v}$.

// Distributivity over scalar addition: $(c + d)\\mathbf{v} = c\\mathbf{v} + d\\mathbf{v}$.

// Multiplicative identity: $1\\mathbf{v} = \\mathbf{v}$.

// These ten conditions are the complete definition. Any set with two operations satisfying all ten is a vector space; any set that violates even one is not.`,
//     before: ``,
//     after: ``,
//     link: ``,
//   },
//   obj3: {
//     title: `The Field of Scalars`,
//     content: `The scalars in a vector space come from a field — a set where addition, subtraction, multiplication, and division (by nonzero elements) all work and satisfy the standard arithmetic laws. The real numbers $\\mathbb{R}$ and the [complex numbers](!/algebra/complex-numbers) $\\mathbb{C}$ are the two fields that appear most often in linear algebra.

// A vector space over $\\mathbb{R}$ is called a real vector space. A vector space over $\\mathbb{C}$ is called a complex vector space. The choice of field affects which scalars are available for multiplication, and this in turn affects the structure of the space. For example, every real symmetric matrix has real eigenvalues, but a general real matrix may have complex eigenvalues — a phenomenon that only becomes visible when the scalar field is extended from $\\mathbb{R}$ to $\\mathbb{C}$.

// On this site, the scalar field is $\\mathbb{R}$ unless explicitly stated otherwise. The axioms and definitions carry over to $\\mathbb{C}$ without modification, but some results — particularly in spectral theory — depend on which field is in play.`,
//     before: ``,
//     after: ``,
//     link: ``,
//   },
//   obj4: {
//     title: `The Standard Example: Rⁿ`,
//     content: `The most concrete vector space is $\\mathbb{R}^n$, the set of all ordered $n$-tuples of real numbers:

// $$\\mathbb{R}^n = \\{(v_1, v_2, \\dots, v_n) : v_i \\in \\mathbb{R}\\}$$

// Addition and scalar multiplication are defined entry by entry:

// $$(u_1, \\dots, u_n) + (v_1, \\dots, v_n) = (u_1 + v_1, \\dots, u_n + v_n)$$

// $$c(v_1, \\dots, v_n) = (cv_1, \\dots, cv_n)$$

// All ten axioms hold. The zero vector is $(0, 0, \\dots, 0)$. The additive inverse of $(v_1, \\dots, v_n)$ is $(-v_1, \\dots, -v_n)$. Commutativity, associativity, and the distributive laws follow from the corresponding properties of real number arithmetic applied entry by entry.

// Every vector in $\\mathbb{R}^n$ can be identified with a column [vector](!/linear-algebra/vectors) or with a point in $n$-dimensional space. This is the vector space that underlies coordinate geometry, [matrix](!/linear-algebra/matrix) algebra, and nearly all computational methods in linear algebra.`,
//     before: ``,
//     after: ``,
//     link: ``,
//   },
//   obj5: {
//     title: `Other Examples of Vector Spaces`,
//     content: `The axioms are satisfied by many objects that do not look like columns of numbers.

// The set $\\mathbb{R}^{m \\times n}$ of all $m \\times n$ real [matrices](!/linear-algebra/matrix), with entry-by-entry addition and scalar multiplication, is a vector space. Its zero vector is the zero matrix $O$, and it has dimension $mn$.

// The set $\\mathcal{P}_n$ of all polynomials of degree at most $n$ is a vector space under ordinary polynomial addition and scalar multiplication. The zero vector is the zero polynomial, and the space has dimension $n + 1$. The set $\\mathcal{P}$ of all polynomials (with no degree bound) is also a vector space, but it is infinite-dimensional — no finite set of polynomials spans it.

// The set $C[a, b]$ of all continuous real-valued functions on the interval $[a, b]$ is a vector space with pointwise operations: $(f + g)(x) = f(x) + g(x)$ and $(cf)(x) = c \\cdot f(x)$. The zero vector is the function that is identically zero. This space is infinite-dimensional.

// The set of all solutions to a homogeneous linear ordinary differential equation $y'' + py' + qy = 0$ (with continuous coefficients $p, q$) is a vector space of dimension $2$. Every solution is a linear combination of two independent solutions — a fact that depends entirely on the vector space structure of the solution set.

// Despite the variety of these objects, the same ten axioms govern all of them. A theorem about abstract vector spaces applies to each.`,
//     before: ``,
//     after: ``,
//     link: ``,
//   },
//   obj6: {
//     title: `Non-Examples`,
//     content: `The axioms are genuine constraints, and many natural-looking sets fail them.

// The set of all polynomials of degree exactly $n$ (not "at most $n$") is not a vector space. Adding two polynomials of degree $n$ can cancel the leading term, producing a polynomial of lower degree — closure under addition fails.

// The set of positive real numbers with ordinary addition is not a vector space. It has no zero element: there is no positive real number $z$ satisfying $x + z = x$ for all $x > 0$. If addition is replaced by multiplication and scalar multiplication is replaced by exponentiation ($c \\cdot x = x^c$), the set does become a vector space — but the operations must be the right ones.

// The set $\\mathbb{R}^2$ can be equipped with non-standard operations that break the axioms. For instance, defining addition as $(u_1, u_2) \\oplus (v_1, v_2) = (u_1 + v_1, 0)$ fails associativity and destroys the connection between the second component and the vector space structure.

// These examples illustrate that being a vector space is a property of both the set and its operations. The same set can be a vector space under one pair of operations and fail under another.`,
//     before: ``,
//     after: ``,
//     link: ``,
//   },
//   obj7: {
//     title: `Immediate Consequences of the Axioms`,
//     content: `Several useful facts follow from the ten axioms alone — they are not additional assumptions but provable theorems.

// Scaling any vector by zero gives the zero vector: $0\\mathbf{v} = \\mathbf{0}$. The proof uses distributivity: $0\\mathbf{v} = (0 + 0)\\mathbf{v} = 0\\mathbf{v} + 0\\mathbf{v}$, and subtracting $0\\mathbf{v}$ from both sides gives $\\mathbf{0} = 0\\mathbf{v}$.

// Scaling the zero vector by any scalar gives the zero vector: $c\\mathbf{0} = \\mathbf{0}$. Similar argument using $c\\mathbf{0} = c(\\mathbf{0} + \\mathbf{0}) = c\\mathbf{0} + c\\mathbf{0}$.

// Scaling by $-1$ produces the additive inverse: $(-1)\\mathbf{v} = -\\mathbf{v}$. This follows from $\\mathbf{v} + (-1)\\mathbf{v} = 1\\mathbf{v} + (-1)\\mathbf{v} = (1 + (-1))\\mathbf{v} = 0\\mathbf{v} = \\mathbf{0}$.

// If $c\\mathbf{v} = \\mathbf{0}$, then either $c = 0$ or $\\mathbf{v} = \\mathbf{0}$. There are no "zero divisors" in a vector space — a nonzero scalar cannot annihilate a nonzero vector.

// The zero vector is unique, and the additive inverse of each vector is unique. These facts ensure that the algebraic structure is well-defined and unambiguous.`,
//     before: ``,
//     after: ``,
//     link: ``,
//   },
//   obj8: {
//     title: `Subspaces`,
//     content: `A [subspace](!/linear-algebra/vector-spaces/subspaces) is a subset of a vector space that is itself a vector space under the same operations. Most of the ten axioms — commutativity, associativity, distributivity — are inherited automatically from the ambient space. The only conditions that need checking are closure: the subset must be closed under addition and closed under scalar multiplication.

// The subspace test states that a nonempty subset $W \\subseteq V$ is a subspace if and only if $\\mathbf{u} + \\mathbf{v} \\in W$ and $c\\mathbf{v} \\in W$ for all $\\mathbf{u}, \\mathbf{v} \\in W$ and all scalars $c$. Closure under scalar multiplication with $c = 0$ guarantees that the zero vector belongs to $W$.

// In $\\mathbb{R}^3$, the subspaces are: the zero vector alone, lines through the origin, planes through the origin, and $\\mathbb{R}^3$ itself. A line or plane that does not pass through the origin is not a subspace — it does not contain $\\mathbf{0}$.

// The most important examples of subspaces arise from matrices. The null space of $A$ (all solutions to $A\\mathbf{x} = \\mathbf{0}$), the column space of $A$ (all possible outputs $A\\mathbf{x}$), and the row space of $A$ (the span of the rows) are all subspaces.`,
//     before: ``,
//     after: ``,
//     link: ``,
//   },
//   obj9: {
//     title: `Linear Independence and Span`,
//     content: `Two foundational concepts determine the internal structure of any vector space.

// A set of vectors is [linearly independent](!/linear-algebra/vector-spaces/linear-independence) if no vector in the set can be expressed as a linear combination of the others. Equivalently, the only combination $c_1\\mathbf{v}_1 + c_2\\mathbf{v}_2 + \\cdots + c_k\\mathbf{v}_k = \\mathbf{0}$ is the trivial one where all scalars are zero. Independence means there is no redundancy — every vector contributes something that the others cannot replicate.

// The [span](!/linear-algebra/vector-spaces/span) of a set of vectors is the collection of all their linear combinations. It is always a subspace — the smallest subspace containing every vector in the set. Spanning means complete coverage: if the span of a set equals $V$, then every vector in $V$ can be built from the set.

// Independence says "no vector is wasted." Spanning says "every vector is reachable." A set that satisfies both conditions simultaneously — independent and spanning — is a [basis](!/linear-algebra/vector-spaces/basis).`,
//     before: ``,
//     after: ``,
//     link: ``,
//   },
//   obj10: {
//     title: `Basis and Dimension`,
//     content: `A [basis](!/linear-algebra/vector-spaces/basis) for a vector space $V$ is a linearly independent set that spans $V$. Every vector in $V$ can be written as a linear combination of the basis vectors in exactly one way — the coefficients in this unique representation are called coordinates.

// A remarkable theorem guarantees that every basis for a given vector space has the same number of elements. This number is the [dimension](!/linear-algebra/vector-spaces/dimension) of $V$, written $\\dim(V)$.

// The space $\\mathbb{R}^n$ has dimension $n$, with the standard basis $\\{\\mathbf{e}_1, \\mathbf{e}_2, \\dots, \\mathbf{e}_n\\}$ where $\\mathbf{e}_i$ has a $1$ in position $i$ and zeros elsewhere. The polynomial space $\\mathcal{P}_n$ has dimension $n + 1$, with the standard basis $\\{1, x, x^2, \\dots, x^n\\}$. The matrix space $\\mathbb{R}^{m \\times n}$ has dimension $mn$.

// Dimension is the single invariant that classifies finite-dimensional vector spaces: two spaces over the same field are structurally identical (isomorphic) if and only if they have the same dimension.`,
//     before: ``,
//     after: ``,
//     link: ``,
//   },
//   obj11: {
//     title: `The Four Fundamental Subspaces`,
//     content: `Every $m \\times n$ matrix $A$ defines four [subspaces](!/linear-algebra/vector-spaces/fundamental-subspaces) that together form its complete structural portrait.

// The column space $\\text{Col}(A)$, a subspace of $\\mathbb{R}^m$, consists of all vectors of the form $A\\mathbf{x}$. Its dimension is the [rank](!/linear-algebra/matrix/rank) $r$. The row space $\\text{Row}(A)$, a subspace of $\\mathbb{R}^n$, consists of all linear combinations of the rows. Its dimension is also $r$.

// The null space $\\text{Null}(A)$, a subspace of $\\mathbb{R}^n$, contains all vectors that $A$ sends to $\\mathbf{0}$. Its dimension is $n - r$. The left null space $\\text{Null}(A^T)$, a subspace of $\\mathbb{R}^m$, contains all vectors $\\mathbf{y}$ satisfying $A^T\\mathbf{y} = \\mathbf{0}$. Its dimension is $m - r$.

// These four subspaces split into two pairs of [orthogonal](!/linear-algebra/orthogonality) complements: the row space and null space are perpendicular in $\\mathbb{R}^n$, while the column space and left null space are perpendicular in $\\mathbb{R}^m$. The rank $r$ governs all four dimensions and determines the complete geometry of the linear map $\\mathbf{x} \\mapsto A\\mathbf{x}$.`,
//     before: ``,
//     after: ``,
//     link: ``,
//   },
// }


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
    content: `A basis for a vector space $V$ is a set of vectors $\\mathcal{B} = \\{\\mathbf{v}_1, \\mathbf{v}_2, \\dots, \\mathbf{v}_n\\}$ that satisfies two conditions simultaneously.

The set is [linearly independent](!/linear-algebra/vector-spaces/linear-independence): no vector in the set can be written as a linear combination of the others. Equivalently, the only combination $c_1\\mathbf{v}_1 + c_2\\mathbf{v}_2 + \\cdots + c_n\\mathbf{v}_n = \\mathbf{0}$ is the trivial one with all scalars equal to zero.

The set [spans](!/linear-algebra/vector-spaces/span) $V$: every vector in $V$ can be expressed as some linear combination of $\\mathbf{v}_1, \\dots, \\mathbf{v}_n$.

Independence means no vector in the basis is wasted. Spanning means no vector in $V$ is out of reach. A basis is a minimal spanning set — remove any element and the span shrinks. It is also a maximal independent set — add any vector from $V$ and independence breaks. These two characterizations are equivalent and place the basis at the exact boundary between "too few" and "too many."`,
    before: ``,
    after: ``,
    link: ``,
  },
  obj3: {
    title: `Unique Representation`,
    content: `If $\\mathcal{B} = \\{\\mathbf{v}_1, \\dots, \\mathbf{v}_n\\}$ is a basis for $V$, then every vector $\\mathbf{v} \\in V$ can be written as

$$\\mathbf{v} = c_1\\mathbf{v}_1 + c_2\\mathbf{v}_2 + \\cdots + c_n\\mathbf{v}_n$$

in exactly one way. Existence is guaranteed by the spanning condition — every vector is reachable. Uniqueness is guaranteed by independence: if two different sets of scalars both produced $\\mathbf{v}$, subtracting one from the other would give a nontrivial combination equal to $\\mathbf{0}$, contradicting independence.

This uniqueness is what separates a basis from an arbitrary spanning set. A spanning set that is not independent can represent some vectors in multiple ways — the representation is ambiguous. A basis eliminates all ambiguity: every vector has exactly one set of coefficients.`,
    before: ``,
    after: ``,
    link: ``,
  },
  obj4: {
    title: `Coordinates`,
    content: `The scalars $c_1, c_2, \\dots, c_n$ in the unique representation $\\mathbf{v} = c_1\\mathbf{v}_1 + \\cdots + c_n\\mathbf{v}_n$ are called the coordinates of $\\mathbf{v}$ relative to the basis $\\mathcal{B}$. They are collected into a coordinate vector:

$$[\\mathbf{v}]_\\mathcal{B} = \\begin{pmatrix} c_1 \\\\ c_2 \\\\ \\vdots \\\\ c_n \\end{pmatrix}$$

Coordinates depend entirely on the choice of basis. The same vector $\\mathbf{v}$ has different coordinates in different bases — the vector does not change, but its numerical description does.

To find the coordinates of $\\mathbf{v}$ relative to $\\mathcal{B}$, solve the [linear system](!/linear-algebra/linear-systems) $c_1\\mathbf{v}_1 + \\cdots + c_n\\mathbf{v}_n = \\mathbf{v}$. If the basis vectors are columns of a [matrix](!/linear-algebra/matrix) $B$, this is the system $B\\mathbf{c} = \\mathbf{v}$, and the coordinate vector is $\\mathbf{c} = B^{-1}\\mathbf{v}$ when $B$ is invertible. For the standard basis, $B = I$, so the coordinates are simply the components of $\\mathbf{v}$ itself.`,
    before: ``,
    after: ``,
    link: ``,
  },
  obj5: {
    title: `The Standard Basis for Rⁿ`,
    content: `The most familiar basis for $\\mathbb{R}^n$ is the standard basis $\\{\\mathbf{e}_1, \\mathbf{e}_2, \\dots, \\mathbf{e}_n\\}$, where $\\mathbf{e}_i$ has a $1$ in position $i$ and zeros elsewhere:

$$\\mathbf{e}_1 = \\begin{pmatrix} 1 \\\\ 0 \\\\ \\vdots \\\\ 0 \\end{pmatrix}, \\quad \\mathbf{e}_2 = \\begin{pmatrix} 0 \\\\ 1 \\\\ \\vdots \\\\ 0 \\end{pmatrix}, \\quad \\dots, \\quad \\mathbf{e}_n = \\begin{pmatrix} 0 \\\\ 0 \\\\ \\vdots \\\\ 1 \\end{pmatrix}$$

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

These are all "standard" bases in the sense that they are the most natural first choice. But many problems benefit from non-standard bases: [eigenvector](!/linear-algebra/eigen) bases simplify matrix powers and differential equations, [orthonormal](!/linear-algebra/orthogonality/orthogonal-sets) bases simplify projections and least squares, and Fourier bases decompose periodic signals into frequency components. Choosing the right basis is often the key step in solving a problem.`,
    before: ``,
    after: ``,
    link: ``,
  },
  obj7: {
    title: `Finding a Basis for a Subspace`,
    content: `The three [subspaces](!/linear-algebra/vector-spaces/subspaces) associated with a matrix each have a basis that can be extracted from row reduction.

For the column space of an $m \\times n$ matrix $A$: row reduce $A$ and identify the pivot columns. The corresponding columns of the original matrix $A$ — not the echelon form — are a basis for $\\text{Col}(A)$. The echelon form reveals which columns are independent, but the original columns are the actual vectors spanning the column space.

For the null space: solve $A\\mathbf{x} = \\mathbf{0}$ by reducing to [RREF](!/linear-algebra/linear-systems/echelon-form) and expressing the general solution in terms of free variables. Each free variable contributes one basis vector.

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

$$[\\mathbf{v}]_\\mathcal{C} = P_{\\mathcal{C} \\leftarrow \\mathcal{B}} \\, [\\mathbf{v}]_\\mathcal{B}$$

for every vector $\\mathbf{v} \\in V$. The columns of $P_{\\mathcal{C} \\leftarrow \\mathcal{B}}$ are the $\\mathcal{C}$-coordinate vectors of each $\\mathcal{B}$-basis vector. The reverse conversion uses the [inverse](!/linear-algebra/matrix/inverse): $P_{\\mathcal{B} \\leftarrow \\mathcal{C}} = P_{\\mathcal{C} \\leftarrow \\mathcal{B}}^{-1}$.

## Worked Example

In $\\mathbb{R}^2$, let $\\mathcal{B} = \\{(1, 1), (1, -1)\\}$ and let $\\mathcal{C}$ be the standard basis. The $\\mathcal{C}$-coordinates of $(1, 1)$ are just $(1, 1)$, and the $\\mathcal{C}$-coordinates of $(1, -1)$ are $(1, -1)$. So $P_{\\mathcal{C} \\leftarrow \\mathcal{B}} = \\begin{pmatrix} 1 & 1 \\\\ 1 & -1 \\end{pmatrix}$. To find the $\\mathcal{B}$-coordinates of $\\mathbf{v} = (3, 1)$: solve $P\\mathbf{c} = (3, 1)$, giving $\\mathbf{c} = P^{-1}(3, 1) = \\frac{1}{-2}\\begin{pmatrix} -1 & -1 \\\\ -1 & 1 \\end{pmatrix}\\begin{pmatrix} 3 \\\\ 1 \\end{pmatrix} = (2, 1)$. So $[\\mathbf{v}]_\\mathcal{B} = (2, 1)$, meaning $\\mathbf{v} = 2(1, 1) + 1(1, -1)$.

Change of basis connects to [similarity](!/linear-algebra/transformations/basis-change): if a [linear transformation](!/linear-algebra/transformations) has matrix $A$ in basis $\\mathcal{B}$, its matrix in basis $\\mathcal{C}$ is $P^{-1}AP$. Choosing a good basis — one that simplifies $A$ into diagonal or triangular form — is the central idea behind [diagonalization](!/linear-algebra/eigen/diagonalization).`,
    before: ``,
    after: ``,
    link: ``,
  },
  obj10: {
    title: `Coordinates and Isomorphism`,
    content: `Choosing a basis for an $n$-dimensional vector space $V$ creates a one-to-one correspondence between $V$ and $\\mathbb{R}^n$. Each vector $\\mathbf{v} \\in V$ maps to its coordinate vector $[\\mathbf{v}]_\\mathcal{B} \\in \\mathbb{R}^n$, and this mapping preserves addition and scalar multiplication:

$$[\\mathbf{u} + \\mathbf{v}]_\\mathcal{B} = [\\mathbf{u}]_\\mathcal{B} + [\\mathbf{v}]_\\mathcal{B}, \\qquad [c\\mathbf{v}]_\\mathcal{B} = c[\\mathbf{v}]_\\mathcal{B}$$

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

Every $m \\times n$ matrix $A$ defines four [fundamental subspaces](!/linear-algebra/vector-spaces/fundamental-spaces): the column space in $\\mathbb{R}^m$ (dimension $r$), the row space in $\\mathbb{R}^n$ (dimension $r$), the null space in $\\mathbb{R}^n$ (dimension $n - r$), and the left null space in $\\mathbb{R}^m$ (dimension $m - r$), where $r = \\text{rank}(A)$.

These four subspaces split into two pairs of [orthogonal](!/linear-algebra/orthogonality) complements: the row space and null space are perpendicular in $\\mathbb{R}^n$, while the column space and left null space are perpendicular in $\\mathbb{R}^m$. The rank governs all four dimensions and completely determines the geometry of the linear map $\\mathbf{x} \\mapsto A\\mathbf{x}$.`,
    before: ``,
    after: ``,
    link: ``,
  },
}


 const introContent = {
  title: `The Abstract Structure Behind Linear Algebra`,
  content: `Vectors in the plane can be added and scaled. So can polynomials, matrices, and functions. A vector space is any collection of objects where these two operations make sense and obey a consistent set of rules. By isolating this common structure, results proved once in the abstract apply to every concrete setting — from coordinate geometry to differential equations to signal processing.`,
}


const faqQuestions = {
  obj1: {
    question: "What is a vector space?",
    answer: "A vector space is a set V with two operations — addition and scalar multiplication — satisfying ten axioms: closure, commutativity, associativity, zero vector, additive inverse, scalar closure, scalar associativity, two distributive laws, and multiplicative identity. Any set satisfying all ten is a vector space.",
    sectionId: "2"
  },
  obj2: {
    question: "What are examples of vector spaces besides Rⁿ?",
    answer: "The set of m×n matrices with entry-by-entry operations, polynomials of degree at most n, continuous functions on an interval, and solution sets of homogeneous differential equations are all vector spaces. Any collection where addition and scaling satisfy the ten axioms qualifies.",
    sectionId: "5"
  },
  obj3: {
    question: "What is a subspace?",
    answer: "A subspace is a subset of a vector space that is itself a vector space under the same operations. The only conditions to check are closure under addition and scalar multiplication. In R³, the subspaces are the zero vector, lines through the origin, planes through the origin, and R³ itself.",
    sectionId: "8"
  },
  obj4: {
    question: "What is a basis and what is dimension?",
    answer: "A basis is a linearly independent set that spans the entire space. Every vector has a unique representation as a linear combination of basis vectors. Every basis for a given space has the same number of elements — this number is the dimension. Two spaces with the same dimension over the same field are isomorphic.",
    sectionId: "10"
  },
  obj5: {
    question: "What are the four fundamental subspaces of a matrix?",
    answer: "Every m×n matrix A defines four subspaces: the column space (dimension r) and left null space (dimension m−r) in Rᵐ, and the row space (dimension r) and null space (dimension n−r) in Rⁿ. The row space and null space are orthogonal complements, as are the column space and left null space.",
    sectionId: "11"
  }
}


const schemas = {
  learningResource: {
    "@context": "https://schema.org",
    "@type": "LearningResource",
    "name": "Vector Spaces",
    "description": "Vector spaces in linear algebra: ten axioms, Rⁿ and abstract examples, subspaces, linear independence, span, basis, dimension, and the four fundamental subspaces of a matrix.",
    "url": "https://www.learnmathclass.com/linear-algebra/vector-spaces",
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
      "name": "Vector Spaces"
    },
    "teaches": [
      "Vector space definition and ten axioms",
      "The field of scalars: real and complex",
      "Rⁿ as the standard vector space",
      "Polynomial, matrix, and function space examples",
      "Non-examples and axiom failures",
      "Subspaces and the subspace test",
      "Linear independence, span, basis, and dimension",
      "The four fundamental subspaces of a matrix"
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
        "item": "https://www.learnmathclass.com/linear-algebra/vector-spaces"
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
//         url: "/linear-algebra/vector-spaces",
//          name: "name"
//       },
        
//        }
//     }

return {
  props:{
    sectionsContent,
    introContent,
    faqQuestions,
    schemas,
    seoData: {
      title: "Vector Spaces: Axioms, Basis & Dimension | Learn Math Class",
      description: "Vector spaces in linear algebra: ten axioms, Rⁿ and abstract examples, subspaces, linear independence, span, basis, dimension, and the four fundamental subspaces of a matrix.",
      keywords: keyWords.join(", "),
      url: "/linear-algebra/vector-spaces",
      name: "Vector Spaces"
    },
  }
}
   }

// export default function PageTemplate({seoData,sectionsContent , introContent}) {
export default function VectorSpacesPage({seoData, sectionsContent, introContent, faqQuestions, schemas}) {
    
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
   <h1 className='title' style={{marginTop:'-50px',marginBottom:'0px'}}>Vector Spaces</h1>
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
