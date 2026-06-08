

// const linearAlgebraTermsList = [


   

//   // ═══════════════════════════════════════════
//   // CATEGORY: Vectors (7 terms)
//   // ═══════════════════════════════════════════

//   {
//     id: 'vector',
//     name: 'Vector',
//     category: 'Vectors',
//     formula: `An ordered list of $n$ real numbers: $\\mathbf{v} = (v_1, v_2, \\ldots, v_n) \\in \\mathbb{R}^n$`,
//     link: { url: '/linear-algebra/vectors#1', label: 'Vectors' },
//     fields: {
//       intuition: `A quantity with both magnitude and direction. In $\\mathbb{R}^2$ and $\\mathbb{R}^3$, vectors can be visualized as arrows from the origin to a point.`,
//       notation: `Column notation: $\\mathbf{v} = \\begin{pmatrix} v_1 \\\\ v_2 \\\\ \\vdots \\\\ v_n \\end{pmatrix}$. Boldface $\\mathbf{v}$ or arrow $\\vec{v}$ distinguishes vectors from [scalars](!/linear-algebra/definitions#scalar).`,
//       'related concepts': `• [Scalar](!/linear-algebra/definitions#scalar)
// • [Magnitude](!/linear-algebra/definitions#magnitude)
// • [Linear Combination](!/linear-algebra/definitions#linear_combination)
// • [Vector Space](!/linear-algebra/definitions#vector_space)`,
//     },
//   },

//   {
//     id: 'scalar',
//     name: 'Scalar',
//     category: 'Vectors',
//     formula: `An element of the underlying field — in standard linear algebra, a real number $c \\in \\mathbb{R}$`,
//     link: { url: '/linear-algebra/vectors#1', label: 'Vectors' },
//     fields: {
//       intuition: `A single number used to scale vectors. Multiplying a [vector](!/linear-algebra/definitions#vector) by a scalar changes its length without altering its direction (unless the scalar is negative, which reverses direction).`,
//       'related concepts': `• [Vector](!/linear-algebra/definitions#vector)
// • [Linear Combination](!/linear-algebra/definitions#linear_combination)`,
//     },
//   },

//   {
//     id: 'magnitude',
//     name: 'Magnitude (Norm)',
//     category: 'Vectors',
//     formula: `The length of a [vector](!/linear-algebra/definitions#vector), measured as its distance from the origin:
// $$\\|\\mathbf{v}\\| = \\sqrt{v_1^2 + v_2^2 + \\cdots + v_n^2}$$`,
//     link: { url: '/linear-algebra/vectors/magnitude#2', label: 'Vector Magnitude' },
//     fields: {
//       intuition: `In $\\mathbb{R}^2$, this reduces to the hypotenuse given by the Pythagorean theorem. The concept generalizes to any $\\mathbb{R}^n$.`,
//       properties: `• $\\|\\mathbf{v}\\| \\geq 0$, with equality only when $\\mathbf{v} = \\mathbf{0}$
// • $\\|c\\mathbf{v}\\| = |c|\\,\\|\\mathbf{v}\\|$ for any scalar $c$
// • Triangle inequality: $\\|\\mathbf{u} + \\mathbf{v}\\| \\leq \\|\\mathbf{u}\\| + \\|\\mathbf{v}\\|$`,
//       'related concepts': `• [Unit Vector](!/linear-algebra/definitions#unit_vector)
// • [Dot Product](!/linear-algebra/definitions#dot_product)
// • [Inner Product](!/linear-algebra/definitions#inner_product)`,
//     },
//   },

//   {
//     id: 'unit_vector',
//     name: 'Unit Vector',
//     category: 'Vectors',
//     formula: `A vector $\\hat{\\mathbf{u}}$ with $\\|\\hat{\\mathbf{u}}\\| = 1$`,
//     link: { url: '/linear-algebra/vectors/magnitude#5', label: 'Vector Magnitude' },
//     fields: {
//       intuition: `A vector that encodes direction only, with all length information removed. Any nonzero vector $\\mathbf{v}$ can be normalized to a unit vector by dividing by its [magnitude](!/linear-algebra/definitions#magnitude): $\\hat{\\mathbf{v}} = \\frac{\\mathbf{v}}{\\|\\mathbf{v}\\|}$.`,
//       notation: `The hat symbol $\\hat{\\mathbf{u}}$ denotes a unit vector. The standard unit vectors in $\\mathbb{R}^3$ are $\\mathbf{e}_1 = (1,0,0)$, $\\mathbf{e}_2 = (0,1,0)$, $\\mathbf{e}_3 = (0,0,1)$.`,
//       'related concepts': `• [Magnitude](!/linear-algebra/definitions#magnitude)
// • [Orthonormal Set](!/linear-algebra/definitions#orthonormal_set)
// • [Basis](!/linear-algebra/definitions#basis)`,
//     },
//   },

//   {
//     id: 'dot_product',
//     name: 'Dot Product',
//     category: 'Vectors',
//     formula: `An operation that takes two [vectors](!/linear-algebra/definitions#vector) and returns a [scalar](!/linear-algebra/definitions#scalar), computed by summing the products of corresponding components:
// $$\\mathbf{u} \\cdot \\mathbf{v} = u_1 v_1 + u_2 v_2 + \\cdots + u_n v_n = \\|\\mathbf{u}\\|\\,\\|\\mathbf{v}\\|\\cos\\theta$$`,
//     link: { url: '/linear-algebra/vectors/dot-product#1', label: 'Dot Product' },
//     fields: {
//       intuition: `A scalar measure of how much two vectors point in the same direction. Positive when the angle between them is acute, zero when perpendicular, negative when obtuse.`,
//       properties: `• Commutative: $\\mathbf{u} \\cdot \\mathbf{v} = \\mathbf{v} \\cdot \\mathbf{u}$
// • Distributive: $\\mathbf{u} \\cdot (\\mathbf{v} + \\mathbf{w}) = \\mathbf{u} \\cdot \\mathbf{v} + \\mathbf{u} \\cdot \\mathbf{w}$
// • $\\mathbf{v} \\cdot \\mathbf{v} = \\|\\mathbf{v}\\|^2$`,
//       'related concepts': `• [Inner Product](!/linear-algebra/definitions#inner_product)
// • [Orthogonal Vectors](!/linear-algebra/definitions#orthogonal_vectors)
// • [Magnitude](!/linear-algebra/definitions#magnitude)`,
//     },
//   },

//   {
//     id: 'cross_product',
//     name: 'Cross Product',
//     category: 'Vectors',
//     formula: `A binary operation on two vectors in $\\mathbb{R}^3$ that produces a vector perpendicular to both inputs:
// $$\\mathbf{u} \\times \\mathbf{v} = \\begin{pmatrix} u_2 v_3 - u_3 v_2 \\\\ u_3 v_1 - u_1 v_3 \\\\ u_1 v_2 - u_2 v_1 \\end{pmatrix}$$`,
//     link: { url: '/linear-algebra/vectors/cross-product#1', label: 'Cross Product' },
//     fields: {
//       intuition: `Its [magnitude](!/linear-algebra/definitions#magnitude) equals the area of the parallelogram spanned by the two vectors. The direction follows the right-hand rule.`,
//       properties: `• Anti-commutative: $\\mathbf{u} \\times \\mathbf{v} = -(\\mathbf{v} \\times \\mathbf{u})$
// • $\\|\\mathbf{u} \\times \\mathbf{v}\\| = \\|\\mathbf{u}\\|\\,\\|\\mathbf{v}\\|\\sin\\theta$
// • $\\mathbf{u} \\times \\mathbf{v} = \\mathbf{0}$ if and only if $\\mathbf{u}$ and $\\mathbf{v}$ are parallel`,
//       'related concepts': `• [Dot Product](!/linear-algebra/definitions#dot_product)
// • [Determinant](!/linear-algebra/definitions#determinant)`,
//     },
//   },

//   {
//     id: 'linear_combination',
//     name: 'Linear Combination',
//     category: 'Vectors',
//     formula: `A sum of [vectors](!/linear-algebra/definitions#vector), each multiplied by a [scalar](!/linear-algebra/definitions#scalar) coefficient:
// $$c_1\\mathbf{v}_1 + c_2\\mathbf{v}_2 + \\cdots + c_k\\mathbf{v}_k$$`,
//     link: { url: '/linear-algebra/vectors/linear-combinations#1', label: 'Linear Combinations' },
//     fields: {
//       intuition: `A new vector built by scaling given vectors and adding the results. The set of all possible linear combinations of a collection of vectors defines their [span](!/linear-algebra/definitions#span).`,
//       'related concepts': `• [Span](!/linear-algebra/definitions#span)
// • [Linear Independence](!/linear-algebra/definitions#linear_independence)
// • [Basis](!/linear-algebra/definitions#basis)`,
//     },
//   },

//   // ═══════════════════════════════════════════
//   // CATEGORY: Vector Spaces (10 terms)
//   // ═══════════════════════════════════════════

//   {
//     id: 'vector_space',
//     name: 'Vector Space',
//     category: 'Vector Spaces',
//     formula: `A set $V$ equipped with vector addition and scalar multiplication satisfying the [vector space axioms](!/linear-algebra/vector-spaces/axioms)`,
//     link: { url: '/linear-algebra/vector-spaces#1', label: 'Vector Spaces' },
//     fields: {
//       intuition: `A collection of objects (vectors) that can be added together and scaled by numbers, where these operations behave predictably. $\\mathbb{R}^n$ is the most familiar example, but the concept extends to function spaces, polynomial spaces, and more.`,
//       examples: `• $\\mathbb{R}^n$ — the space of $n$-tuples of real numbers
// • The set of all $m \\times n$ matrices
// • The set of all polynomials of degree at most $n$
// • The set of all continuous functions on an interval`,
//       'related concepts': `• [Subspace](!/linear-algebra/definitions#subspace)
// • [Basis](!/linear-algebra/definitions#basis)
// • [Dimension](!/linear-algebra/definitions#dimension)`,
//     },
//   },

//   {
//     id: 'subspace',
//     name: 'Subspace',
//     category: 'Vector Spaces',
//     formula: `A nonempty subset $W \\subseteq V$ that is itself a [vector space](!/linear-algebra/definitions#vector_space) under the same operations`,
//     link: { url: '/linear-algebra/vector-spaces/subspaces#1', label: 'Subspaces' },
//     fields: {
//       intuition: `A subset of a vector space that is closed under addition and scalar multiplication. Every subspace must contain the zero vector.`,
//       properties: `To verify $W$ is a subspace, check three conditions:
// • $\\mathbf{0} \\in W$
// • If $\\mathbf{u}, \\mathbf{v} \\in W$, then $\\mathbf{u} + \\mathbf{v} \\in W$
// • If $\\mathbf{u} \\in W$ and $c \\in \\mathbb{R}$, then $c\\mathbf{u} \\in W$`,
//       'related concepts': `• [Vector Space](!/linear-algebra/definitions#vector_space)
// • [Column Space](!/linear-algebra/definitions#column_space)
// • [Null Space](!/linear-algebra/definitions#null_space)
// • [Span](!/linear-algebra/definitions#span)`,
//     },
//   },

//   {
//     id: 'span',
//     name: 'Span',
//     category: 'Vector Spaces',
//     formula: `The set of all [linear combinations](!/linear-algebra/definitions#linear_combination) of a given collection of vectors:
// $$\\text{Span}\\{\\mathbf{v}_1, \\ldots, \\mathbf{v}_k\\} = \\{c_1\\mathbf{v}_1 + \\cdots + c_k\\mathbf{v}_k \\mid c_i \\in \\mathbb{R}\\}$$`,
//     link: { url: '/linear-algebra/vector-spaces/span#1', label: 'Span' },
//     fields: {
//       intuition: `Geometrically, spanning two non-parallel vectors in $\\mathbb{R}^3$ gives a plane; spanning three linearly independent vectors fills the entire space.`,
//       properties: `• $\\text{Span}\\{\\mathbf{v}_1, \\ldots, \\mathbf{v}_k\\}$ is always a [subspace](!/linear-algebra/definitions#subspace)
// • Adding a vector already in the span does not enlarge it
// • The span of the columns of a matrix $A$ is the [column space](!/linear-algebra/definitions#column_space) of $A$`,
//       'related concepts': `• [Linear Combination](!/linear-algebra/definitions#linear_combination)
// • [Linear Independence](!/linear-algebra/definitions#linear_independence)
// • [Basis](!/linear-algebra/definitions#basis)`,
//     },
//   },

//   {
//     id: 'linear_independence',
//     name: 'Linear Independence',
//     category: 'Vector Spaces',
//     formula: `Vectors $\\mathbf{v}_1, \\ldots, \\mathbf{v}_k$ are linearly independent if the only solution to
// $$c_1\\mathbf{v}_1 + \\cdots + c_k\\mathbf{v}_k = \\mathbf{0}$$
// is $c_1 = c_2 = \\cdots = c_k = 0$`,
//     link: { url: '/linear-algebra/vector-spaces/linear-independence#1', label: 'Linear Independence' },
//     fields: {
//       intuition: `No vector in the set can be written as a [linear combination](!/linear-algebra/definitions#linear_combination) of the others. Each vector contributes a genuinely new direction. Removing any one reduces the [span](!/linear-algebra/definitions#span).`,
//       'common errors': `Linear independence is a property of a set of vectors, not of individual vectors. A single nonzero vector is always linearly independent; the question only becomes meaningful for two or more vectors.`,
//       'related concepts': `• [Basis](!/linear-algebra/definitions#basis)
// • [Dimension](!/linear-algebra/definitions#dimension)
// • [Rank](!/linear-algebra/definitions#rank)`,
//     },
//   },

//   {
//     id: 'basis',
//     name: 'Basis',
//     category: 'Vector Spaces',
//     formula: `A set $\\{\\mathbf{v}_1, \\ldots, \\mathbf{v}_n\\}$ that is [linearly independent](!/linear-algebra/definitions#linear_independence) and [spans](!/linear-algebra/definitions#span) the entire [vector space](!/linear-algebra/definitions#vector_space)`,
//     link: { url: '/linear-algebra/vector-spaces#2', label: 'Vector Spaces' },
//     fields: {
//       intuition: `A minimal set of vectors that can produce every vector in the space through linear combinations. Every vector has a unique representation as a linear combination of basis vectors.`,
//       examples: `• Standard basis for $\\mathbb{R}^3$: $\\{\\mathbf{e}_1, \\mathbf{e}_2, \\mathbf{e}_3\\}$
// • Any two non-parallel vectors form a basis for $\\mathbb{R}^2$
// • $\\{1, x, x^2, \\ldots, x^n\\}$ is a basis for polynomials of degree $\\leq n$`,
//       'related concepts': `• [Dimension](!/linear-algebra/definitions#dimension)
// • [Change of Basis Matrix](!/linear-algebra/definitions#change_of_basis_matrix)
// • [Orthonormal Set](!/linear-algebra/definitions#orthonormal_set)`,
//     },
//   },

//   {
//     id: 'dimension',
//     name: 'Dimension',
//     category: 'Vector Spaces',
//     formula: `The number of vectors in any [basis](!/linear-algebra/definitions#basis) of a [vector space](!/linear-algebra/definitions#vector_space) $V$, denoted $\\dim(V)$`,
//     link: { url: '/linear-algebra/vector-spaces/dimension#1', label: 'Dimension' },
//     fields: {
//       intuition: `The number of independent directions in a space. $\\mathbb{R}^3$ is three-dimensional because any basis has exactly three vectors.`,
//       properties: `• All bases of a given vector space have the same number of vectors
// • $\\dim(\\mathbb{R}^n) = n$
// • If $W$ is a [subspace](!/linear-algebra/definitions#subspace) of $V$, then $\\dim(W) \\leq \\dim(V)$`,
//       'related concepts': `• [Basis](!/linear-algebra/definitions#basis)
// • [Rank](!/linear-algebra/definitions#rank)`,
//     },
//   },

//   {
//     id: 'column_space',
//     name: 'Column Space',
//     category: 'Vector Spaces',
//     formula: `The set of all vectors expressible as $A\\mathbf{x}$ — equivalently, the [span](!/linear-algebra/definitions#span) of the columns of $A$:
// $$\\text{Col}(A) = \\{A\\mathbf{x} \\mid \\mathbf{x} \\in \\mathbb{R}^n\\}$$`,
//     link: { url: '/linear-algebra/vector-spaces/fundamental-spaces#2', label: 'Fundamental Spaces' },
//     fields: {
//       intuition: `The set of all vectors $\\mathbf{b}$ for which $A\\mathbf{x} = \\mathbf{b}$ has a solution. It captures everything the matrix can "reach" as output.`,
//       properties: `• $\\text{Col}(A)$ is a [subspace](!/linear-algebra/definitions#subspace) of $\\mathbb{R}^m$ (for an $m \\times n$ matrix)
// • $\\dim(\\text{Col}(A)) = \\text{rank}(A)$
// • $\\text{Col}(A) = \\text{Im}(T)$ where $T(\\mathbf{x}) = A\\mathbf{x}$`,
//       'related concepts': `• [Null Space](!/linear-algebra/definitions#null_space)
// • [Row Space](!/linear-algebra/definitions#row_space)
// • [Rank](!/linear-algebra/definitions#rank)
// • [Image](!/linear-algebra/definitions#image)`,
//     },
//   },

//   {
//     id: 'null_space',
//     name: 'Null Space (Kernel)',
//     category: 'Vector Spaces',
//     formula: `The set of all solutions to the [homogeneous system](!/linear-algebra/definitions#homogeneous_system) $A\\mathbf{x} = \\mathbf{0}$:
// $$\\text{Nul}(A) = \\{\\mathbf{x} \\in \\mathbb{R}^n \\mid A\\mathbf{x} = \\mathbf{0}\\}$$`,
//     link: { url: '/linear-algebra/vector-spaces/fundamental-spaces#4', label: 'Fundamental Spaces' },
//     fields: {
//       intuition: `The set of all inputs that the matrix sends to the zero vector. If the null space contains only $\\mathbf{0}$, the matrix is injective (one-to-one). A larger null space means the matrix "collapses" some directions.`,
//       properties: `• $\\text{Nul}(A)$ is a [subspace](!/linear-algebra/definitions#subspace) of $\\mathbb{R}^n$
// • $\\dim(\\text{Nul}(A)) = n - \\text{rank}(A)$ (rank-nullity)
// • $A$ is invertible if and only if $\\text{Nul}(A) = \\{\\mathbf{0}\\}$`,
//       'related concepts': `• [Column Space](!/linear-algebra/definitions#column_space)
// • [Rank](!/linear-algebra/definitions#rank)
// • [Homogeneous System](!/linear-algebra/definitions#homogeneous_system)
// • [Image](!/linear-algebra/definitions#image)`,
//     },
//   },

//   {
//     id: 'row_space',
//     name: 'Row Space',
//     category: 'Vector Spaces',
//     formula: `The [span](!/linear-algebra/definitions#span) of the rows of a [matrix](!/linear-algebra/definitions#matrix), equivalently the [column space](!/linear-algebra/definitions#column_space) of its transpose:
// $$\\text{Row}(A) = \\text{Col}(A^T)$$`,
//     link: { url: '/linear-algebra/vector-spaces/fundamental-spaces#3', label: 'Fundamental Spaces' },
//     fields: {
//       intuition: `A subspace of $\\mathbb{R}^n$ spanned by the rows of $A$. Row operations change individual rows but preserve the row space, making [echelon form](!/linear-algebra/definitions#row_echelon_form) useful for finding a basis.`,
//       properties: `• $\\dim(\\text{Row}(A)) = \\text{rank}(A) = \\dim(\\text{Col}(A))$
// • The row space is the [orthogonal complement](!/linear-algebra/definitions#orthogonal_complement) of the [null space](!/linear-algebra/definitions#null_space)`,
//       'related concepts': `• [Column Space](!/linear-algebra/definitions#column_space)
// • [Left Null Space](!/linear-algebra/definitions#left_null_space)
// • [Rank](!/linear-algebra/definitions#rank)`,
//     },
//   },

//   {
//     id: 'left_null_space',
//     name: 'Left Null Space',
//     category: 'Vector Spaces',
//     formula: `The [null space](!/linear-algebra/definitions#null_space) of the transpose $A^T$ — the set of all vectors $\\mathbf{y}$ satisfying $A^T\\mathbf{y} = \\mathbf{0}$:
// $$\\text{Nul}(A^T) = \\{\\mathbf{y} \\in \\mathbb{R}^m \\mid A^T\\mathbf{y} = \\mathbf{0}\\}$$`,
//     link: { url: '/linear-algebra/vector-spaces/fundamental-spaces#5', label: 'Fundamental Spaces' },
//     fields: {
//       intuition: `It completes the four fundamental subspaces: [column space](!/linear-algebra/definitions#column_space), [null space](!/linear-algebra/definitions#null_space), [row space](!/linear-algebra/definitions#row_space), and left null space.`,
//       properties: `• $\\text{Nul}(A^T)$ is the [orthogonal complement](!/linear-algebra/definitions#orthogonal_complement) of $\\text{Col}(A)$
// • $\\dim(\\text{Nul}(A^T)) = m - \\text{rank}(A)$`,
//       'related concepts': `• [Column Space](!/linear-algebra/definitions#column_space)
// • [Row Space](!/linear-algebra/definitions#row_space)
// • [Null Space](!/linear-algebra/definitions#null_space)`,
//     },
//   },

//   // ═══════════════════════════════════════════
//   // CATEGORY: Matrices (10 terms)
//   // ═══════════════════════════════════════════

//   {
//     id: 'matrix',
//     name: 'Matrix',
//     category: 'Matrices',
//     formula: `A rectangular array of numbers with $m$ rows and $n$ columns: $A \\in \\mathbb{R}^{m \\times n}$`,
//     link: { url: '/linear-algebra/matrix#1', label: 'Matrices' },
//     fields: {
//       intuition: `A compact way to encode a [linear transformation](!/linear-algebra/definitions#linear_transformation) or a [system of linear equations](!/linear-algebra/definitions#system_of_linear_equations). The entry in row $i$, column $j$ is denoted $a_{ij}$.`,
//       notation: `Capital letters $A, B, C$ denote matrices. $A_{m \\times n}$ indicates dimensions. $[A]_{ij}$ or $a_{ij}$ denotes the entry at position $(i,j)$.`,
//       'related concepts': `• [Square Matrix](!/linear-algebra/definitions#square_matrix)
// • [Inverse Matrix](!/linear-algebra/definitions#inverse_matrix)
// • [Determinant](!/linear-algebra/definitions#determinant)`,
//     },
//   },

//   {
//     id: 'square_matrix',
//     name: 'Square Matrix',
//     category: 'Matrices',
//     formula: `A [matrix](!/linear-algebra/definitions#matrix) with equal numbers of rows and columns: $A \\in \\mathbb{R}^{n \\times n}$`,
//     link: { url: '/linear-algebra/matrix/types#1', label: 'Matrix Types' },
//     fields: {
//       intuition: `Only square matrices can have [determinants](!/linear-algebra/definitions#determinant), [eigenvalues](!/linear-algebra/definitions#eigenvalue), [inverses](!/linear-algebra/definitions#inverse_matrix), and a [trace](!/linear-algebra/definitions#trace). They represent transformations from a space to itself.`,
//       'related concepts': `• [Identity Matrix](!/linear-algebra/definitions#identity_matrix)
// • [Diagonal Matrix](!/linear-algebra/definitions#diagonal_matrix)
// • [Symmetric Matrix](!/linear-algebra/definitions#symmetric_matrix)`,
//     },
//   },

//   {
//     id: 'identity_matrix',
//     name: 'Identity Matrix',
//     category: 'Matrices',
//     formula: `The [square matrix](!/linear-algebra/definitions#square_matrix) with $1$s on the main diagonal and $0$s elsewhere, denoted $I_n$:
// $$I_n = \\begin{pmatrix} 1 & 0 & \\cdots & 0 \\\\ 0 & 1 & \\cdots & 0 \\\\ \\vdots & \\vdots & \\ddots & \\vdots \\\\ 0 & 0 & \\cdots & 1 \\end{pmatrix}$$`,
//     link: { url: '/linear-algebra/matrix/types#2', label: 'Matrix Types' },
//     fields: {
//       intuition: `The matrix that leaves every vector unchanged: $I\\mathbf{v} = \\mathbf{v}$. It is the multiplicative identity for matrices, analogous to the number $1$.`,
//       properties: `• $AI = IA = A$ for any compatible matrix $A$
// • $\\det(I_n) = 1$
// • All [eigenvalues](!/linear-algebra/definitions#eigenvalue) are $1$`,
//       'related concepts': `• [Inverse Matrix](!/linear-algebra/definitions#inverse_matrix)
// • [Diagonal Matrix](!/linear-algebra/definitions#diagonal_matrix)`,
//     },
//   },

//   {
//     id: 'symmetric_matrix',
//     name: 'Symmetric Matrix',
//     category: 'Matrices',
//     formula: `A [square matrix](!/linear-algebra/definitions#square_matrix) satisfying $A = A^T$`,
//     link: { url: '/linear-algebra/matrix/types#5', label: 'Matrix Types' },
//     fields: {
//       intuition: `A matrix that equals its own transpose — entries are mirrored across the main diagonal. Symmetric matrices arise naturally in distance, covariance, and quadratic form problems.`,
//       properties: `• All [eigenvalues](!/linear-algebra/definitions#eigenvalue) are real
// • Eigenvectors from distinct eigenvalues are [orthogonal](!/linear-algebra/definitions#orthogonal_vectors)
// • Always diagonalizable via an [orthogonal matrix](!/linear-algebra/definitions#orthogonal_matrix)`,
//       'related concepts': `• [Positive Definite Matrix](!/linear-algebra/definitions#positive_definite_matrix)
// • [Orthogonal Matrix](!/linear-algebra/definitions#orthogonal_matrix)`,
//     },
//   },

//   {
//     id: 'inverse_matrix',
//     name: 'Inverse Matrix',
//     category: 'Matrices',
//     formula: `A [square matrix](!/linear-algebra/definitions#square_matrix) $A^{-1}$ such that $AA^{-1} = A^{-1}A = I$`,
//     link: { url: '/linear-algebra/matrix/inverse#1', label: 'Matrix Inverse' },
//     fields: {
//       intuition: `The matrix that "undoes" the transformation applied by $A$. If $A$ maps $\\mathbf{x}$ to $\\mathbf{b}$, then $A^{-1}$ maps $\\mathbf{b}$ back to $\\mathbf{x}$.`,
//       properties: `• Exists if and only if $\\det(A) \\neq 0$
// • $(AB)^{-1} = B^{-1}A^{-1}$ — order reverses
// • $(A^{-1})^{-1} = A$
// • $(A^T)^{-1} = (A^{-1})^T$`,
//       'related concepts': `• [Singular Matrix](!/linear-algebra/definitions#singular_matrix)
// • [Determinant](!/linear-algebra/definitions#determinant)`,
//     },
//   },

//   {
//     id: 'singular_matrix',
//     name: 'Singular Matrix',
//     category: 'Matrices',
//     formula: `A [square matrix](!/linear-algebra/definitions#square_matrix) $A$ with $\\det(A) = 0$`,
//     link: { url: '/linear-algebra/determinants#5', label: 'Determinants' },
//     fields: {
//       intuition: `A matrix that collapses at least one dimension — it maps some nonzero vector to $\\mathbf{0}$. A singular matrix has no [inverse](!/linear-algebra/definitions#inverse_matrix) and the system $A\\mathbf{x} = \\mathbf{b}$ either has no solution or infinitely many.`,
//       properties: `• $\\det(A) = 0$
// • $\\text{rank}(A) < n$
// • $\\text{Nul}(A) \\neq \\{\\mathbf{0}\\}$
// • $\\lambda = 0$ is an [eigenvalue](!/linear-algebra/definitions#eigenvalue)`,
//       'related concepts': `• [Inverse Matrix](!/linear-algebra/definitions#inverse_matrix)
// • [Determinant](!/linear-algebra/definitions#determinant)
// • [Rank](!/linear-algebra/definitions#rank)`,
//     },
//   },

//   {
//     id: 'rank',
//     name: 'Rank',
//     category: 'Matrices',
//     formula: `The number of [linearly independent](!/linear-algebra/definitions#linear_independence) columns (equivalently, rows) in a [matrix](!/linear-algebra/definitions#matrix):
// $$\\text{rank}(A) = \\dim(\\text{Col}(A)) = \\dim(\\text{Row}(A))$$`,
//     link: { url: '/linear-algebra/matrix/rank#1', label: 'Matrix Rank' },
//     fields: {
//       intuition: `It measures the "effective dimensionality" of the transformation — how many independent output directions the matrix produces.`,
//       properties: `• $\\text{rank}(A) = \\text{rank}(A^T)$
// • $\\text{rank}(A) + \\dim(\\text{Nul}(A)) = n$ (number of columns)
// • $\\text{rank}(A) \\leq \\min(m, n)$
// • The number of [pivots](!/linear-algebra/definitions#pivot) in echelon form`,
//       'related concepts': `• [Dimension](!/linear-algebra/definitions#dimension)
// • [Column Space](!/linear-algebra/definitions#column_space)
// • [Null Space](!/linear-algebra/definitions#null_space)`,
//     },
//   },

//   {
//     id: 'trace',
//     name: 'Trace',
//     category: 'Matrices',
//     formula: `The sum of the main diagonal entries of a [square matrix](!/linear-algebra/definitions#square_matrix):
// $$\\text{tr}(A) = a_{11} + a_{22} + \\cdots + a_{nn} = \\sum_{i=1}^{n} a_{ii}$$`,
//     link: { url: '/linear-algebra/matrix/trace#1', label: 'Matrix Trace' },
//     fields: {
//       intuition: `It equals the sum of all [eigenvalues](!/linear-algebra/definitions#eigenvalue) (counted with multiplicity), providing a quick invariant of the matrix.`,
//       properties: `• $\\text{tr}(A + B) = \\text{tr}(A) + \\text{tr}(B)$
// • $\\text{tr}(cA) = c\\,\\text{tr}(A)$
// • $\\text{tr}(AB) = \\text{tr}(BA)$
// • $\\text{tr}(A) = \\lambda_1 + \\lambda_2 + \\cdots + \\lambda_n$`,
//       'related concepts': `• [Determinant](!/linear-algebra/definitions#determinant)
// • [Eigenvalue](!/linear-algebra/definitions#eigenvalue)`,
//     },
//   },

//   {
//     id: 'diagonal_matrix',
//     name: 'Diagonal Matrix',
//     category: 'Matrices',
//     formula: `A [square matrix](!/linear-algebra/definitions#square_matrix) where $a_{ij} = 0$ for all $i \\neq j$`,
//     link: { url: '/linear-algebra/matrix/types#3', label: 'Matrix Types' },
//     fields: {
//       intuition: `A matrix whose only nonzero entries lie on the main diagonal. Diagonal matrices scale each coordinate axis independently, making them the simplest matrices to work with.`,
//       properties: `• $\\det(D) = d_{11} \\cdot d_{22} \\cdots d_{nn}$
// • $D^k = \\text{diag}(d_{11}^k, d_{22}^k, \\ldots, d_{nn}^k)$
// • Invertible if and only if all diagonal entries are nonzero`,
//       'related concepts': `• [Identity Matrix](!/linear-algebra/definitions#identity_matrix)
// • [Eigenvalue](!/linear-algebra/definitions#eigenvalue)`,
//     },
//   },

//   {
//     id: 'positive_definite_matrix',
//     name: 'Positive Definite Matrix',
//     category: 'Matrices',
//     formula: `A [symmetric matrix](!/linear-algebra/definitions#symmetric_matrix) $A$ satisfying $\\mathbf{x}^T A \\mathbf{x} > 0$ for all nonzero $\\mathbf{x}$`,
//     link: { url: '/linear-algebra/decompositions/cholesky#2', label: 'Cholesky Decomposition' },
//     fields: {
//       intuition: `A matrix where the associated quadratic form is always positive — it curves upward in every direction, like a bowl. Positive definite matrices generalize the idea of a positive number to matrix algebra.`,
//       properties: `• All [eigenvalues](!/linear-algebra/definitions#eigenvalue) are positive
// • All [pivots](!/linear-algebra/definitions#pivot) are positive
// • $\\det(A) > 0$
// • Admits a unique Cholesky factorization $A = LL^T$`,
//       'related concepts': `• [Symmetric Matrix](!/linear-algebra/definitions#symmetric_matrix)
// • [Eigenvalue](!/linear-algebra/definitions#eigenvalue)`,
//     },
//   },

//   // ═══════════════════════════════════════════
//   // CATEGORY: Determinants (4 terms)
//   // ═══════════════════════════════════════════

//   {
//     id: 'determinant',
//     name: 'Determinant',
//     category: 'Determinants',
//     formula: `A scalar $\\det(A) \\in \\mathbb{R}$ assigned to every [square matrix](!/linear-algebra/definitions#square_matrix), defined recursively via [cofactor](!/linear-algebra/definitions#cofactor) expansion`,
//     link: { url: '/linear-algebra/determinants#1', label: 'Determinants' },
//     fields: {
//       intuition: `The signed volume scaling factor of the [linear transformation](!/linear-algebra/definitions#linear_transformation) represented by the matrix. A determinant of zero means the transformation collapses space into a lower dimension.`,
//       properties: `• $\\det(AB) = \\det(A)\\det(B)$
// • $\\det(A^T) = \\det(A)$
// • $\\det(A^{-1}) = 1/\\det(A)$
// • $\\det(cA) = c^n \\det(A)$ for $n \\times n$ matrix
// • $\\det(A) = \\prod \\lambda_i$ (product of [eigenvalues](!/linear-algebra/definitions#eigenvalue))`,
//       'related concepts': `• [Minor](!/linear-algebra/definitions#minor)
// • [Cofactor](!/linear-algebra/definitions#cofactor)
// • [Singular Matrix](!/linear-algebra/definitions#singular_matrix)
// • [Inverse Matrix](!/linear-algebra/definitions#inverse_matrix)`,
//     },
//   },

//   {
//     id: 'minor',
//     name: 'Minor',
//     category: 'Determinants',
//     formula: `The [determinant](!/linear-algebra/definitions#determinant) of the submatrix obtained by deleting row $i$ and column $j$ from a [matrix](!/linear-algebra/definitions#matrix):
// $$M_{ij} = \\det(\\hat{A}_{ij})$$`,
//     link: { url: '/linear-algebra/determinants/cofactors#1', label: 'Cofactors' },
//     fields: {
//       intuition: `Minors are the building blocks for [cofactors](!/linear-algebra/definitions#cofactor) and, through them, for the full determinant computation.`,
//       'related concepts': `• [Cofactor](!/linear-algebra/definitions#cofactor)
// • [Determinant](!/linear-algebra/definitions#determinant)
// • [Cofactor Matrix](!/linear-algebra/definitions#cofactor_matrix)`,
//     },
//   },

//   {
//     id: 'cofactor',
//     name: 'Cofactor',
//     category: 'Determinants',
//     formula: `A signed [minor](!/linear-algebra/definitions#minor), with sign determined by the position $(i,j)$:
// $$C_{ij} = (-1)^{i+j} M_{ij}$$`,
//     link: { url: '/linear-algebra/determinants/cofactors#2', label: 'Cofactors' },
//     fields: {
//       intuition: `The sign alternates in a checkerboard pattern ($+, -, +, \\ldots$). Cofactors are used in the expansion formula for [determinants](!/linear-algebra/definitions#determinant) and in computing the [adjugate](!/linear-algebra/definitions#cofactor_matrix).`,
//       'related concepts': `• [Minor](!/linear-algebra/definitions#minor)
// • [Determinant](!/linear-algebra/definitions#determinant)
// • [Cofactor Matrix](!/linear-algebra/definitions#cofactor_matrix)`,
//     },
//   },

//   {
//     id: 'cofactor_matrix',
//     name: 'Cofactor Matrix (Adjugate)',
//     category: 'Determinants',
//     formula: `The transpose of the matrix of [cofactors](!/linear-algebra/definitions#cofactor) of $A$:
// $$\\text{adj}(A) = C^T$$`,
//     link: { url: '/linear-algebra/determinants/cofactors#6', label: 'Cofactors' },
//     fields: {
//       intuition: `It provides a formula for the [inverse](!/linear-algebra/definitions#inverse_matrix): $A^{-1} = \\frac{1}{\\det(A)}\\,\\text{adj}(A)$.`,
//       'related concepts': `• [Cofactor](!/linear-algebra/definitions#cofactor)
// • [Inverse Matrix](!/linear-algebra/definitions#inverse_matrix)
// • [Determinant](!/linear-algebra/definitions#determinant)`,
//     },
//   },

//   // ═══════════════════════════════════════════
//   // CATEGORY: Linear Systems (6 terms)
//   // ═══════════════════════════════════════════

//   {
//     id: 'system_of_linear_equations',
//     name: 'System of Linear Equations',
//     category: 'Linear Systems',
//     formula: `A collection of equations $A\\mathbf{x} = \\mathbf{b}$ where $A$ is an $m \\times n$ [matrix](!/linear-algebra/definitions#matrix) and $\\mathbf{b} \\in \\mathbb{R}^m$`,
//     link: { url: '/linear-algebra/linear-systems#1', label: 'Linear Systems' },
//     fields: {
//       intuition: `A set of linear equations sharing the same unknowns. The system has either no solution, exactly one solution, or infinitely many solutions — there is no other possibility.`,
//       'related concepts': `• [Augmented Matrix](!/linear-algebra/definitions#augmented_matrix)
// • [Row Echelon Form](!/linear-algebra/definitions#row_echelon_form)
// • [Homogeneous System](!/linear-algebra/definitions#homogeneous_system)`,
//     },
//   },

//   {
//     id: 'augmented_matrix',
//     name: 'Augmented Matrix',
//     category: 'Linear Systems',
//     formula: `The [matrix](!/linear-algebra/definitions#matrix) formed by appending the right-hand side vector $\\mathbf{b}$ as an additional column to the coefficient matrix $A$, written $[A \\mid \\mathbf{b}]$`,
//     link: { url: '/linear-algebra/linear-systems#3', label: 'Linear Systems' },
//     fields: {
//       intuition: `A compact notation that combines the coefficient matrix and the right-hand side into a single matrix, so row operations can be applied to the entire system at once.`,
//       'related concepts': `• [System of Linear Equations](!/linear-algebra/definitions#system_of_linear_equations)
// • [Row Echelon Form](!/linear-algebra/definitions#row_echelon_form)`,
//     },
//   },

//   {
//     id: 'row_echelon_form',
//     name: 'Row Echelon Form',
//     category: 'Linear Systems',
//     formula: `A matrix where:
// • all zero rows are at the bottom
// • each leading entry ([pivot](!/linear-algebra/definitions#pivot)) is to the right of the pivot in the row above
// • all entries below each pivot are zero`,
//     link: { url: '/linear-algebra/linear-systems/echelon-form#1', label: 'Echelon Form' },
//     fields: {
//       intuition: `A staircase pattern achieved by row operations, making back-substitution possible. The number of pivots equals the [rank](!/linear-algebra/definitions#rank).`,
//       'related concepts': `• [Reduced Row Echelon Form](!/linear-algebra/definitions#reduced_row_echelon_form)
// • [Pivot](!/linear-algebra/definitions#pivot)
// • [Rank](!/linear-algebra/definitions#rank)`,
//     },
//   },

//   {
//     id: 'reduced_row_echelon_form',
//     name: 'Reduced Row Echelon Form',
//     category: 'Linear Systems',
//     formula: `[Row echelon form](!/linear-algebra/definitions#row_echelon_form) with the additional requirements:
// • every [pivot](!/linear-algebra/definitions#pivot) is $1$
// • each pivot is the only nonzero entry in its column`,
//     link: { url: '/linear-algebra/linear-systems/echelon-form#2', label: 'Echelon Form' },
//     fields: {
//       intuition: `The fully simplified form of a matrix under row operations. Unlike row echelon form, the reduced form is unique — every matrix has exactly one RREF.`,
//       notation: `Abbreviated RREF or rref$(A)$.`,
//       'related concepts': `• [Row Echelon Form](!/linear-algebra/definitions#row_echelon_form)
// • [Pivot](!/linear-algebra/definitions#pivot)`,
//     },
//   },

//   {
//     id: 'pivot',
//     name: 'Pivot',
//     category: 'Linear Systems',
//     formula: `The first nonzero entry in each row of a matrix in [row echelon form](!/linear-algebra/definitions#row_echelon_form)`,
//     link: { url: '/linear-algebra/linear-systems/echelon-form#4', label: 'Echelon Form' },
//     fields: {
//       intuition: `Pivots mark the "independent" columns. The number of pivots determines the [rank](!/linear-algebra/definitions#rank); columns without pivots correspond to free variables in the solution.`,
//       'related concepts': `• [Row Echelon Form](!/linear-algebra/definitions#row_echelon_form)
// • [Rank](!/linear-algebra/definitions#rank)`,
//     },
//   },

//   {
//     id: 'homogeneous_system',
//     name: 'Homogeneous System',
//     category: 'Linear Systems',
//     formula: `A [system of linear equations](!/linear-algebra/definitions#system_of_linear_equations) in which every equation equals zero: $A\\mathbf{x} = \\mathbf{0}$`,
//     link: { url: '/linear-algebra/linear-systems/homogeneous#1', label: 'Homogeneous Systems' },
//     fields: {
//       intuition: `It always has at least the trivial solution $\\mathbf{x} = \\mathbf{0}$. Nontrivial solutions exist if and only if $\\text{rank}(A) < n$.`,
//       properties: `• The solution set is the [null space](!/linear-algebra/definitions#null_space) of $A$
// • If $m < n$ (more unknowns than equations), nontrivial solutions always exist`,
//       'related concepts': `• [Null Space](!/linear-algebra/definitions#null_space)
// • [System of Linear Equations](!/linear-algebra/definitions#system_of_linear_equations)`,
//     },
//   },

//   // ═══════════════════════════════════════════
//   // CATEGORY: Transformations (5 terms)
//   // ═══════════════════════════════════════════

//   {
//     id: 'linear_transformation',
//     name: 'Linear Transformation',
//     category: 'Transformations',
//     formula: `A function $T: V \\to W$ between [vector spaces](!/linear-algebra/definitions#vector_space) that preserves addition and scalar multiplication:
// $$T(\\mathbf{u} + \\mathbf{v}) = T(\\mathbf{u}) + T(\\mathbf{v})$$
// $$T(c\\mathbf{u}) = cT(\\mathbf{u})$$`,
//     link: { url: '/linear-algebra/transformations#1', label: 'Linear Transformations' },
//     fields: {
//       intuition: `Lines map to lines (or to the origin), and the origin stays fixed. Every linear transformation between finite-dimensional spaces can be represented by a [matrix](!/linear-algebra/definitions#matrix).`,
//       examples: `• Rotation, reflection, scaling, shearing in $\\mathbb{R}^2$
// • The derivative operator on polynomials
// • Matrix multiplication: $T(\\mathbf{x}) = A\\mathbf{x}$`,
//       'related concepts': `• [Matrix Representation](!/linear-algebra/definitions#matrix_representation)
// • [Image](!/linear-algebra/definitions#image)
// • [Null Space](!/linear-algebra/definitions#null_space)`,
//     },
//   },

//   {
//     id: 'image',
//     name: 'Image (Range)',
//     category: 'Transformations',
//     formula: `The set of all output vectors of a [linear transformation](!/linear-algebra/definitions#linear_transformation):
// $$\\text{Im}(T) = \\{T(\\mathbf{v}) \\mid \\mathbf{v} \\in V\\}$$`,
//     link: { url: '/linear-algebra/transformations/image-kernel#1', label: 'Image and Kernel' },
//     fields: {
//       intuition: `For a matrix transformation $T(\\mathbf{x}) = A\\mathbf{x}$, the image equals the [column space](!/linear-algebra/definitions#column_space) of $A$.`,
//       'related concepts': `• [Column Space](!/linear-algebra/definitions#column_space)
// • [Null Space](!/linear-algebra/definitions#null_space)
// • [Rank](!/linear-algebra/definitions#rank)`,
//     },
//   },

//   {
//     id: 'matrix_representation',
//     name: 'Matrix Representation',
//     category: 'Transformations',
//     formula: `A [matrix](!/linear-algebra/definitions#matrix) $A$ such that $T(\\mathbf{v}) = A[\\mathbf{v}]_{\\mathcal{B}}$ for a chosen [basis](!/linear-algebra/definitions#basis) $\\mathcal{B}$`,
//     link: { url: '/linear-algebra/transformations/matrix-representation#1', label: 'Matrix Representation' },
//     fields: {
//       intuition: `Every [linear transformation](!/linear-algebra/definitions#linear_transformation) between finite-dimensional spaces can be encoded as a matrix once bases are chosen. Different bases produce different matrices representing the same transformation.`,
//       'related concepts': `• [Linear Transformation](!/linear-algebra/definitions#linear_transformation)
// • [Change of Basis Matrix](!/linear-algebra/definitions#change_of_basis_matrix)
// • [Similar Matrices](!/linear-algebra/definitions#similar_matrices)`,
//     },
//   },

//   {
//     id: 'change_of_basis_matrix',
//     name: 'Change of Basis Matrix',
//     category: 'Transformations',
//     formula: `A matrix $P$ that converts coordinates from one [basis](!/linear-algebra/definitions#basis) to another: $[\\mathbf{v}]_{\\mathcal{B}'} = P^{-1}[\\mathbf{v}]_{\\mathcal{B}}$`,
//     link: { url: '/linear-algebra/transformations/basis-change#2', label: 'Basis Change' },
//     fields: {
//       intuition: `The same vector can be described using different coordinate systems (bases). The change of basis matrix translates between these coordinate systems.`,
//       'related concepts': `• [Basis](!/linear-algebra/definitions#basis)
// • [Similar Matrices](!/linear-algebra/definitions#similar_matrices)
// • [Matrix Representation](!/linear-algebra/definitions#matrix_representation)`,
//     },
//   },

//   {
//     id: 'similar_matrices',
//     name: 'Similar Matrices',
//     category: 'Transformations',
//     formula: `Matrices $A$ and $B$ are similar if $B = P^{-1}AP$ for some invertible matrix $P$`,
//     link: { url: '/linear-algebra/transformations/basis-change#3', label: 'Basis Change' },
//     fields: {
//       intuition: `Two matrices are similar when they represent the same [linear transformation](!/linear-algebra/definitions#linear_transformation) under different [bases](!/linear-algebra/definitions#basis). They share all basis-independent properties.`,
//       properties: `Similar matrices have the same:
// • [Determinant](!/linear-algebra/definitions#determinant)
// • [Trace](!/linear-algebra/definitions#trace)
// • [Eigenvalues](!/linear-algebra/definitions#eigenvalue)
// • [Rank](!/linear-algebra/definitions#rank)
// • [Characteristic polynomial](!/linear-algebra/definitions#characteristic_polynomial)`,
//       'related concepts': `• [Change of Basis Matrix](!/linear-algebra/definitions#change_of_basis_matrix)`,
//     },
//   },

//   // ═══════════════════════════════════════════
//   // CATEGORY: Eigen (7 terms)
//   // ═══════════════════════════════════════════

//   {
//     id: 'eigenvalue',
//     name: 'Eigenvalue',
//     category: 'Eigen',
//     formula: `A scalar $\\lambda$ such that $A\\mathbf{v} = \\lambda\\mathbf{v}$ for some nonzero [vector](!/linear-algebra/definitions#vector) $\\mathbf{v}$`,
//     link: { url: '/linear-algebra/eigen#2', label: 'Eigenvalues and Eigenvectors' },
//     fields: {
//       intuition: `The factor by which the [linear transformation](!/linear-algebra/definitions#linear_transformation) stretches or compresses an [eigenvector](!/linear-algebra/definitions#eigenvector). A negative eigenvalue means the eigenvector's direction is reversed.`,
//       properties: `• Found by solving $\\det(A - \\lambda I) = 0$
// • $\\sum \\lambda_i = \\text{tr}(A)$
// • $\\prod \\lambda_i = \\det(A)$
// • A [singular matrix](!/linear-algebra/definitions#singular_matrix) has $\\lambda = 0$ as an eigenvalue`,
//       'related concepts': `• [Eigenvector](!/linear-algebra/definitions#eigenvector)
// • [Eigenspace](!/linear-algebra/definitions#eigenspace)
// • [Characteristic Polynomial](!/linear-algebra/definitions#characteristic_polynomial)
// • [Singular Value](!/linear-algebra/definitions#singular_value)`,
//     },
//   },

//   {
//     id: 'eigenvector',
//     name: 'Eigenvector',
//     category: 'Eigen',
//     formula: `A nonzero vector $\\mathbf{v}$ such that $A\\mathbf{v} = \\lambda\\mathbf{v}$ for some scalar $\\lambda$`,
//     link: { url: '/linear-algebra/eigen#2', label: 'Eigenvalues and Eigenvectors' },
//     fields: {
//       intuition: `A direction that the matrix preserves — the transformation only stretches or compresses along this direction without rotating it. Eigenvectors from distinct [eigenvalues](!/linear-algebra/definitions#eigenvalue) are always [linearly independent](!/linear-algebra/definitions#linear_independence).`,
//       'common errors': `The zero vector is never an eigenvector, even though $A\\mathbf{0} = \\lambda\\mathbf{0}$ for any $\\lambda$. The definition requires $\\mathbf{v} \\neq \\mathbf{0}$.`,
//       'related concepts': `• [Eigenvalue](!/linear-algebra/definitions#eigenvalue)
// • [Eigenspace](!/linear-algebra/definitions#eigenspace)`,
//     },
//   },

//   {
//     id: 'eigenspace',
//     name: 'Eigenspace',
//     category: 'Eigen',
//     formula: `The set of all [eigenvectors](!/linear-algebra/definitions#eigenvector) for a given [eigenvalue](!/linear-algebra/definitions#eigenvalue) $\\lambda$, together with the zero vector — equivalently, the [null space](!/linear-algebra/definitions#null_space) of $(A - \\lambda I)$:
// $$E_\\lambda = \\text{Nul}(A - \\lambda I)$$`,
//     link: { url: '/linear-algebra/eigen#4', label: 'Eigenvalues and Eigenvectors' },
//     fields: {
//       intuition: `It is always a [subspace](!/linear-algebra/definitions#subspace), and its [dimension](!/linear-algebra/definitions#dimension) reveals how many independent eigenvector directions exist for that eigenvalue.`,
//       properties: `• $\\dim(E_\\lambda)$ is the [geometric multiplicity](!/linear-algebra/definitions#geometric_multiplicity) of $\\lambda$
// • $1 \\leq \\dim(E_\\lambda) \\leq$ [algebraic multiplicity](!/linear-algebra/definitions#algebraic_multiplicity) of $\\lambda$`,
//       'related concepts': `• [Eigenvalue](!/linear-algebra/definitions#eigenvalue)
// • [Eigenvector](!/linear-algebra/definitions#eigenvector)
// • [Null Space](!/linear-algebra/definitions#null_space)`,
//     },
//   },

//   {
//     id: 'characteristic_polynomial',
//     name: 'Characteristic Polynomial',
//     category: 'Eigen',
//     formula: `The polynomial whose roots are the [eigenvalues](!/linear-algebra/definitions#eigenvalue) of $A$, obtained by computing:
// $$p(\\lambda) = \\det(A - \\lambda I)$$`,
//     link: { url: '/linear-algebra/eigen/characteristic-equation#2', label: 'Characteristic Equation' },
//     fields: {
//       intuition: `For an $n \\times n$ matrix, the characteristic polynomial has degree $n$, so there are at most $n$ eigenvalues (counted with multiplicity).`,
//       properties: `• The constant term is $\\det(A)$ (up to sign)
// • The coefficient of $\\lambda^{n-1}$ is $\\pm\\text{tr}(A)$
// • [Similar matrices](!/linear-algebra/definitions#similar_matrices) have the same characteristic polynomial`,
//       'related concepts': `• [Eigenvalue](!/linear-algebra/definitions#eigenvalue)
// • [Algebraic Multiplicity](!/linear-algebra/definitions#algebraic_multiplicity)
// • [Determinant](!/linear-algebra/definitions#determinant)`,
//     },
//   },

//   {
//     id: 'algebraic_multiplicity',
//     name: 'Algebraic Multiplicity',
//     category: 'Eigen',
//     formula: `The multiplicity of $\\lambda$ as a root of the [characteristic polynomial](!/linear-algebra/definitions#characteristic_polynomial)`,
//     link: { url: '/linear-algebra/eigen/characteristic-equation#6', label: 'Characteristic Equation' },
//     fields: {
//       intuition: `How many times the eigenvalue appears as a root. If $p(\\lambda) = (\\lambda - 2)^3(\\lambda + 1)$, then $\\lambda = 2$ has algebraic multiplicity $3$ and $\\lambda = -1$ has algebraic multiplicity $1$.`,
//       'related concepts': `• [Geometric Multiplicity](!/linear-algebra/definitions#geometric_multiplicity)
// • [Characteristic Polynomial](!/linear-algebra/definitions#characteristic_polynomial)`,
//     },
//   },

//   {
//     id: 'geometric_multiplicity',
//     name: 'Geometric Multiplicity',
//     category: 'Eigen',
//     formula: `The [dimension](!/linear-algebra/definitions#dimension) of the [eigenspace](!/linear-algebra/definitions#eigenspace) associated with an [eigenvalue](!/linear-algebra/definitions#eigenvalue) $\\lambda$:
// $$\\text{geo. mult.}(\\lambda) = \\dim(E_\\lambda) = \\dim(\\text{Nul}(A - \\lambda I))$$`,
//     link: { url: '/linear-algebra/eigen/properties#3', label: 'Eigenvalue Properties' },
//     fields: {
//       intuition: `The number of independent [eigenvector](!/linear-algebra/definitions#eigenvector) directions for a given eigenvalue. A matrix is diagonalizable if and only if every eigenvalue has geometric multiplicity equal to its [algebraic multiplicity](!/linear-algebra/definitions#algebraic_multiplicity).`,
//       'related concepts': `• [Algebraic Multiplicity](!/linear-algebra/definitions#algebraic_multiplicity)
// • [Eigenspace](!/linear-algebra/definitions#eigenspace)`,
//     },
//   },

//   {
//     id: 'singular_value',
//     name: 'Singular Value',
//     category: 'Eigen',
//     formula: `A nonnegative scalar measuring how much a matrix stretches space along each principal direction, derived from the [eigenvalues](!/linear-algebra/definitions#eigenvalue) of $A^TA$:
// $$\\sigma_i = \\sqrt{\\lambda_i(A^TA)}$$`,
//     link: { url: '/linear-algebra/decompositions/svd#3', label: 'SVD' },
//     fields: {
//       intuition: `Unlike eigenvalues, singular values are always nonnegative and exist for any matrix, not just square ones.`,
//       properties: `• $\\sigma_1 \\geq \\sigma_2 \\geq \\cdots \\geq \\sigma_r > 0$ (ordered by convention)
// • $\\sigma_1 = \\|A\\|$ (the operator norm)
// • $\\prod \\sigma_i = |\\det(A)|$ for square matrices
// • Number of nonzero singular values equals the [rank](!/linear-algebra/definitions#rank)`,
//       'related concepts': `• [Eigenvalue](!/linear-algebra/definitions#eigenvalue)
// • [Rank](!/linear-algebra/definitions#rank)`,
//     },
//   },

//   // ═══════════════════════════════════════════
//   // CATEGORY: Orthogonality (6 terms)
//   // ═══════════════════════════════════════════

//   {
//     id: 'inner_product',
//     name: 'Inner Product',
//     category: 'Orthogonality',
//     formula: `A function $\\langle \\cdot, \\cdot \\rangle: V \\times V \\to \\mathbb{R}$ satisfying symmetry, linearity, and positive-definiteness`,
//     link: { url: '/linear-algebra/orthogonality/inner-product#8', label: 'Inner Product' },
//     fields: {
//       intuition: `A generalization of the [dot product](!/linear-algebra/definitions#dot_product) to abstract [vector spaces](!/linear-algebra/definitions#vector_space). It defines notions of length, angle, and orthogonality in spaces where the standard dot product may not apply.`,
//       properties: `• Symmetry: $\\langle \\mathbf{u}, \\mathbf{v} \\rangle = \\langle \\mathbf{v}, \\mathbf{u} \\rangle$
// • Linearity: $\\langle a\\mathbf{u} + b\\mathbf{w}, \\mathbf{v} \\rangle = a\\langle \\mathbf{u}, \\mathbf{v} \\rangle + b\\langle \\mathbf{w}, \\mathbf{v} \\rangle$
// • Positive-definiteness: $\\langle \\mathbf{v}, \\mathbf{v} \\rangle > 0$ for $\\mathbf{v} \\neq \\mathbf{0}$`,
//       'related concepts': `• [Dot Product](!/linear-algebra/definitions#dot_product)
// • [Orthogonal Vectors](!/linear-algebra/definitions#orthogonal_vectors)
// • [Magnitude](!/linear-algebra/definitions#magnitude)`,
//     },
//   },

//   {
//     id: 'orthogonal_vectors',
//     name: 'Orthogonal Vectors',
//     category: 'Orthogonality',
//     formula: `Vectors $\\mathbf{u}$ and $\\mathbf{v}$ are orthogonal if $\\langle \\mathbf{u}, \\mathbf{v} \\rangle = 0$`,
//     link: { url: '/linear-algebra/orthogonality#1', label: 'Orthogonality' },
//     fields: {
//       intuition: `Perpendicular vectors. Their [dot product](!/linear-algebra/definitions#dot_product) (or [inner product](!/linear-algebra/definitions#inner_product)) is zero, meaning they share no component in each other's direction.`,
//       notation: `Written $\\mathbf{u} \\perp \\mathbf{v}$.`,
//       'related concepts': `• [Orthogonal Set](!/linear-algebra/definitions#orthogonal_set)
// • [Orthogonal Complement](!/linear-algebra/definitions#orthogonal_complement)
// • [Inner Product](!/linear-algebra/definitions#inner_product)`,
//     },
//   },

//   {
//     id: 'orthogonal_set',
//     name: 'Orthogonal Set',
//     category: 'Orthogonality',
//     formula: `A set of vectors $\\{\\mathbf{v}_1, \\ldots, \\mathbf{v}_k\\}$ where $\\langle \\mathbf{v}_i, \\mathbf{v}_j \\rangle = 0$ for all $i \\neq j$`,
//     link: { url: '/linear-algebra/orthogonality/orthogonal-sets#1', label: 'Orthogonal Sets' },
//     fields: {
//       intuition: `A collection of mutually perpendicular vectors. Every orthogonal set of nonzero vectors is automatically [linearly independent](!/linear-algebra/definitions#linear_independence).`,
//       'related concepts': `• [Orthonormal Set](!/linear-algebra/definitions#orthonormal_set)
// • [Orthogonal Vectors](!/linear-algebra/definitions#orthogonal_vectors)
// • [Basis](!/linear-algebra/definitions#basis)`,
//     },
//   },

//   {
//     id: 'orthonormal_set',
//     name: 'Orthonormal Set',
//     category: 'Orthogonality',
//     formula: `An [orthogonal set](!/linear-algebra/definitions#orthogonal_set) where every vector is a [unit vector](!/linear-algebra/definitions#unit_vector): $\\langle \\mathbf{v}_i, \\mathbf{v}_j \\rangle = \\delta_{ij}$`,
//     link: { url: '/linear-algebra/orthogonality/orthogonal-sets#3', label: 'Orthogonal Sets' },
//     fields: {
//       intuition: `Mutually perpendicular vectors, each of length $1$. An orthonormal [basis](!/linear-algebra/definitions#basis) gives the simplest coordinate system — coordinates are just inner products with the basis vectors.`,
//       notation: `$\\delta_{ij}$ is the Kronecker delta: $1$ if $i = j$, $0$ otherwise.`,
//       'related concepts': `• [Orthogonal Set](!/linear-algebra/definitions#orthogonal_set)
// • [Orthogonal Matrix](!/linear-algebra/definitions#orthogonal_matrix)
// • [Unit Vector](!/linear-algebra/definitions#unit_vector)`,
//     },
//   },

//   {
//     id: 'orthogonal_complement',
//     name: 'Orthogonal Complement',
//     category: 'Orthogonality',
//     formula: `The set of all vectors in $V$ that are [orthogonal](!/linear-algebra/definitions#orthogonal_vectors) to every vector in a [subspace](!/linear-algebra/definitions#subspace) $W$:
// $$W^\\perp = \\{\\mathbf{v} \\in V \\mid \\langle \\mathbf{v}, \\mathbf{w} \\rangle = 0 \\text{ for all } \\mathbf{w} \\in W\\}$$`,
//     link: { url: '/linear-algebra/orthogonality#3', label: 'Orthogonality' },
//     fields: {
//       intuition: `Together, $W$ and $W^\\perp$ span the entire space, with no overlap except the zero vector.`,
//       properties: `• $W^\\perp$ is a [subspace](!/linear-algebra/definitions#subspace)
// • $\\dim(W) + \\dim(W^\\perp) = \\dim(V)$
// • $(W^\\perp)^\\perp = W$
// • The [row space](!/linear-algebra/definitions#row_space) and [null space](!/linear-algebra/definitions#null_space) are orthogonal complements`,
//       'related concepts': `• [Null Space](!/linear-algebra/definitions#null_space)
// • [Row Space](!/linear-algebra/definitions#row_space)`,
//     },
//   },

//   {
//     id: 'orthogonal_matrix',
//     name: 'Orthogonal Matrix',
//     category: 'Orthogonality',
//     formula: `A [square matrix](!/linear-algebra/definitions#square_matrix) $Q$ satisfying $Q^TQ = QQ^T = I$`,
//     link: { url: '/linear-algebra/matrix/types#7', label: 'Matrix Types' },
//     fields: {
//       intuition: `A matrix whose columns (and rows) form an [orthonormal set](!/linear-algebra/definitions#orthonormal_set). Orthogonal matrices preserve lengths and angles — they represent rotations and reflections.`,
//       properties: `• $Q^{-1} = Q^T$
// • $\\det(Q) = \\pm 1$
// • $\\|Q\\mathbf{v}\\| = \\|\\mathbf{v}\\|$ for all $\\mathbf{v}$
// • All [eigenvalues](!/linear-algebra/definitions#eigenvalue) have absolute value $1$`,
//       'related concepts': `• [Orthonormal Set](!/linear-algebra/definitions#orthonormal_set)
// • [Symmetric Matrix](!/linear-algebra/definitions#symmetric_matrix)`,
//     },
//   },



// ];
//  export default linearAlgebraTermsList;


const linearAlgebraTermsList = [


   

  // ═══════════════════════════════════════════
  // CATEGORY: Vectors (7 terms)
  // ═══════════════════════════════════════════

  {
    id: 'vector',
    name: 'Vector',
    category: 'Vectors',
    formula: `An ordered list of $n$ real numbers: $\\mathbf{v} = (v_1, v_2, \\ldots, v_n) \\in \\mathbb{R}^n$`,
    link: { url: '/linear-algebra/vectors#1', label: 'Vectors' },
    fields: {
      intuition: `A quantity with both magnitude and direction. In $\\mathbb{R}^2$ and $\\mathbb{R}^3$, vectors can be visualized as arrows from the origin to a point.`,
      notation: `Column notation: $\\mathbf{v} = \\begin{pmatrix} v_1 \\\\ v_2 \\\\ \\vdots \\\\ v_n \\end{pmatrix}$. Boldface $\\mathbf{v}$ or arrow $\\vec{v}$ distinguishes vectors from [scalars](!/linear-algebra/definitions#scalar).`,
      'related concepts': `• [Scalar](!/linear-algebra/definitions#scalar)
• [Magnitude](!/linear-algebra/definitions#magnitude)
• [Linear Combination](!/linear-algebra/definitions#linear_combination)
• [Vector Space](!/linear-algebra/definitions#vector_space)`,
      'related formulas': `• [Euclidean Norm](!/linear-algebra/formulas#magnitude)
• [Standard Basis (Rn)](!/linear-algebra/formulas#basis)
• [Vector Component Form](!/linear-algebra/formulas#vector)
• [Vector Space Axioms](!/linear-algebra/formulas#vector_space)`,
    },
  },

  {
    id: 'scalar',
    name: 'Scalar',
    category: 'Vectors',
    formula: `An element of the underlying field — in standard linear algebra, a real number $c \\in \\mathbb{R}$`,
    link: { url: '/linear-algebra/vectors#1', label: 'Vectors' },
    fields: {
      intuition: `A single number used to scale vectors. Multiplying a [vector](!/linear-algebra/definitions#vector) by a scalar changes its length without altering its direction (unless the scalar is negative, which reverses direction).`,
      'related concepts': `• [Vector](!/linear-algebra/definitions#vector)
• [Linear Combination](!/linear-algebra/definitions#linear_combination)`,
      'related formulas': `• [Scalar Multiplication of Matrices](!/linear-algebra/formulas#matrix)
• [Vector Component Form](!/linear-algebra/formulas#vector)
• [Vector Space Axioms](!/linear-algebra/formulas#vector_space)`,
    },
  },

  {
    id: 'magnitude',
    name: 'Magnitude (Norm)',
    category: 'Vectors',
    formula: `The length of a [vector](!/linear-algebra/definitions#vector), measured as its distance from the origin:
$$\\|\\mathbf{v}\\| = \\sqrt{v_1^2 + v_2^2 + \\cdots + v_n^2}$$`,
    link: { url: '/linear-algebra/vectors/magnitude#2', label: 'Vector Magnitude' },
    fields: {
      intuition: `In $\\mathbb{R}^2$, this reduces to the hypotenuse given by the Pythagorean theorem. The concept generalizes to any $\\mathbb{R}^n$.`,
      properties: `• $\\|\\mathbf{v}\\| \\geq 0$, with equality only when $\\mathbf{v} = \\mathbf{0}$
• $\\|c\\mathbf{v}\\| = |c|\\,\\|\\mathbf{v}\\|$ for any scalar $c$
• Triangle inequality: $\\|\\mathbf{u} + \\mathbf{v}\\| \\leq \\|\\mathbf{u}\\| + \\|\\mathbf{v}\\|$`,
      'related concepts': `• [Unit Vector](!/linear-algebra/definitions#unit_vector)
• [Dot Product](!/linear-algebra/definitions#dot_product)
• [Inner Product](!/linear-algebra/definitions#inner_product)`,
      'related formulas': `• [Cauchy-Schwarz Inequality](!/linear-algebra/formulas#dot_product)
• [Euclidean Norm](!/linear-algebra/formulas#magnitude)
• [Vector Normalization](!/linear-algebra/formulas#unit_vector)`,
    },
  },

  {
    id: 'unit_vector',
    name: 'Unit Vector',
    category: 'Vectors',
    formula: `A vector $\\hat{\\mathbf{u}}$ with $\\|\\hat{\\mathbf{u}}\\| = 1$`,
    link: { url: '/linear-algebra/vectors/magnitude#5', label: 'Vector Magnitude' },
    fields: {
      intuition: `A vector that encodes direction only, with all length information removed. Any nonzero vector $\\mathbf{v}$ can be normalized to a unit vector by dividing by its [magnitude](!/linear-algebra/definitions#magnitude): $\\hat{\\mathbf{v}} = \\frac{\\mathbf{v}}{\\|\\mathbf{v}\\|}$.`,
      notation: `The hat symbol $\\hat{\\mathbf{u}}$ denotes a unit vector. The standard unit vectors in $\\mathbb{R}^3$ are $\\mathbf{e}_1 = (1,0,0)$, $\\mathbf{e}_2 = (0,1,0)$, $\\mathbf{e}_3 = (0,0,1)$.`,
      'related concepts': `• [Magnitude](!/linear-algebra/definitions#magnitude)
• [Orthonormal Set](!/linear-algebra/definitions#orthonormal_set)
• [Basis](!/linear-algebra/definitions#basis)`,
      'related formulas': `• [Direction Cosines](!/linear-algebra/formulas#vector)
• [Vector Normalization](!/linear-algebra/formulas#unit_vector)`,
    },
  },

  {
    id: 'dot_product',
    name: 'Dot Product',
    category: 'Vectors',
    formula: `An operation that takes two [vectors](!/linear-algebra/definitions#vector) and returns a [scalar](!/linear-algebra/definitions#scalar), computed by summing the products of corresponding components:
$$\\mathbf{u} \\cdot \\mathbf{v} = u_1 v_1 + u_2 v_2 + \\cdots + u_n v_n = \\|\\mathbf{u}\\|\\,\\|\\mathbf{v}\\|\\cos\\theta$$`,
    link: { url: '/linear-algebra/vectors/dot-product#1', label: 'Dot Product' },
    fields: {
      intuition: `A scalar measure of how much two vectors point in the same direction. Positive when the angle between them is acute, zero when perpendicular, negative when obtuse.`,
      properties: `• Commutative: $\\mathbf{u} \\cdot \\mathbf{v} = \\mathbf{v} \\cdot \\mathbf{u}$
• Distributive: $\\mathbf{u} \\cdot (\\mathbf{v} + \\mathbf{w}) = \\mathbf{u} \\cdot \\mathbf{v} + \\mathbf{u} \\cdot \\mathbf{w}$
• $\\mathbf{v} \\cdot \\mathbf{v} = \\|\\mathbf{v}\\|^2$`,
      'related concepts': `• [Inner Product](!/linear-algebra/definitions#inner_product)
• [Orthogonal Vectors](!/linear-algebra/definitions#orthogonal_vectors)
• [Magnitude](!/linear-algebra/definitions#magnitude)`,
      'related formulas': `• [Cauchy-Schwarz Inequality](!/linear-algebra/formulas#dot_product)
• [Orthogonality Condition](!/linear-algebra/formulas#orthogonal_vectors)
• [Vector Triple Product](!/linear-algebra/formulas#cross_product)`,
    },
  },

  {
    id: 'cross_product',
    name: 'Cross Product',
    category: 'Vectors',
    formula: `A binary operation on two vectors in $\\mathbb{R}^3$ that produces a vector perpendicular to both inputs:
$$\\mathbf{u} \\times \\mathbf{v} = \\begin{pmatrix} u_2 v_3 - u_3 v_2 \\\\ u_3 v_1 - u_1 v_3 \\\\ u_1 v_2 - u_2 v_1 \\end{pmatrix}$$`,
    link: { url: '/linear-algebra/vectors/cross-product#1', label: 'Cross Product' },
    fields: {
      intuition: `Its [magnitude](!/linear-algebra/definitions#magnitude) equals the area of the parallelogram spanned by the two vectors. The direction follows the right-hand rule.`,
      properties: `• Anti-commutative: $\\mathbf{u} \\times \\mathbf{v} = -(\\mathbf{v} \\times \\mathbf{u})$
• $\\|\\mathbf{u} \\times \\mathbf{v}\\| = \\|\\mathbf{u}\\|\\,\\|\\mathbf{v}\\|\\sin\\theta$
• $\\mathbf{u} \\times \\mathbf{v} = \\mathbf{0}$ if and only if $\\mathbf{u}$ and $\\mathbf{v}$ are parallel`,
      'related concepts': `• [Dot Product](!/linear-algebra/definitions#dot_product)
• [Determinant](!/linear-algebra/definitions#determinant)`,
      'related formulas': `• [Cross Product (Component Form)](!/linear-algebra/formulas#cross_product)
• [Determinant Signed Volume 3D](!/linear-algebra/formulas#determinant)`,
    },
  },

  {
    id: 'linear_combination',
    name: 'Linear Combination',
    category: 'Vectors',
    formula: `A sum of [vectors](!/linear-algebra/definitions#vector), each multiplied by a [scalar](!/linear-algebra/definitions#scalar) coefficient:
$$c_1\\mathbf{v}_1 + c_2\\mathbf{v}_2 + \\cdots + c_k\\mathbf{v}_k$$`,
    link: { url: '/linear-algebra/vectors/linear-combinations#1', label: 'Linear Combinations' },
    fields: {
      intuition: `A new vector built by scaling given vectors and adding the results. The set of all possible linear combinations of a collection of vectors defines their [span](!/linear-algebra/definitions#span).`,
      'related concepts': `• [Span](!/linear-algebra/definitions#span)
• [Linear Independence](!/linear-algebra/definitions#linear_independence)
• [Basis](!/linear-algebra/definitions#basis)`,
      'related formulas': `• [Linear Combination](!/linear-algebra/formulas#linear_combination)
• [Linear Independence Equation](!/linear-algebra/formulas#linear_independence)
• [Matrix-Vector Product (Column Form)](!/linear-algebra/formulas#matrix)
• [Span (Set Definition)](!/linear-algebra/formulas#span)
• [Standard Basis Decomposition](!/linear-algebra/formulas#vector)
• [Unique Basis Representation](!/linear-algebra/formulas#basis)
• [Vector Equation Form](!/linear-algebra/formulas#system_of_linear_equations)`,
    },
  },

  // ═══════════════════════════════════════════
  // CATEGORY: Vector Spaces (10 terms)
  // ═══════════════════════════════════════════

  {
    id: 'vector_space',
    name: 'Vector Space',
    category: 'Vector Spaces',
    formula: `A set $V$ equipped with vector addition and scalar multiplication satisfying the [vector space axioms](!/linear-algebra/vector-spaces/axioms)`,
    link: { url: '/linear-algebra/vector-spaces#1', label: 'Vector Spaces' },
    fields: {
      intuition: `A collection of objects (vectors) that can be added together and scaled by numbers, where these operations behave predictably. $\\mathbb{R}^n$ is the most familiar example, but the concept extends to function spaces, polynomial spaces, and more.`,
      examples: `• $\\mathbb{R}^n$ — the space of $n$-tuples of real numbers
• The set of all $m \\times n$ matrices
• The set of all polynomials of degree at most $n$
• The set of all continuous functions on an interval`,
      'related concepts': `• [Subspace](!/linear-algebra/definitions#subspace)
• [Basis](!/linear-algebra/definitions#basis)
• [Dimension](!/linear-algebra/definitions#dimension)`,
      'related formulas': `• [Inner Product Axioms](!/linear-algebra/formulas#inner_product)
• [Linear Transformation Definition](!/linear-algebra/formulas#linear_transformation)
• [Subspace Test](!/linear-algebra/formulas#subspace)
• [Vector Space Axioms](!/linear-algebra/formulas#vector_space)`,
    },
  },

  {
    id: 'subspace',
    name: 'Subspace',
    category: 'Vector Spaces',
    formula: `A nonempty subset $W \\subseteq V$ that is itself a [vector space](!/linear-algebra/definitions#vector_space) under the same operations`,
    link: { url: '/linear-algebra/vector-spaces/subspaces#1', label: 'Subspaces' },
    fields: {
      intuition: `A subset of a vector space that is closed under addition and scalar multiplication. Every subspace must contain the zero vector.`,
      properties: `To verify $W$ is a subspace, check three conditions:
• $\\mathbf{0} \\in W$
• If $\\mathbf{u}, \\mathbf{v} \\in W$, then $\\mathbf{u} + \\mathbf{v} \\in W$
• If $\\mathbf{u} \\in W$ and $c \\in \\mathbb{R}$, then $c\\mathbf{u} \\in W$`,
      'related concepts': `• [Vector Space](!/linear-algebra/definitions#vector_space)
• [Column Space](!/linear-algebra/definitions#column_space)
• [Null Space](!/linear-algebra/definitions#null_space)
• [Span](!/linear-algebra/definitions#span)`,
      'related formulas': `• [Eigenspace](!/linear-algebra/formulas#eigenspace)
• [Image Definition](!/linear-algebra/formulas#image)
• [Kernel Definition](!/linear-algebra/formulas#kernel)
• [Orthogonal Complement Definition](!/linear-algebra/formulas#orthogonal_complement)
• [Projection onto Subspace](!/linear-algebra/formulas#projection)
• [Span](!/linear-algebra/formulas#linear_combination)
• [Span (Set Definition)](!/linear-algebra/formulas#span)
• [Subspace Dimension Inequality](!/linear-algebra/formulas#dimension)
• [Subspace Test](!/linear-algebra/formulas#subspace)`,
    },
  },

  {
    id: 'span',
    name: 'Span',
    category: 'Vector Spaces',
    formula: `The set of all [linear combinations](!/linear-algebra/definitions#linear_combination) of a given collection of vectors:
$$\\text{Span}\\{\\mathbf{v}_1, \\ldots, \\mathbf{v}_k\\} = \\{c_1\\mathbf{v}_1 + \\cdots + c_k\\mathbf{v}_k \\mid c_i \\in \\mathbb{R}\\}$$`,
    link: { url: '/linear-algebra/vector-spaces/span#1', label: 'Span' },
    fields: {
      intuition: `Geometrically, spanning two non-parallel vectors in $\\mathbb{R}^3$ gives a plane; spanning three linearly independent vectors fills the entire space.`,
      properties: `• $\\text{Span}\\{\\mathbf{v}_1, \\ldots, \\mathbf{v}_k\\}$ is always a [subspace](!/linear-algebra/definitions#subspace)
• Adding a vector already in the span does not enlarge it
• The span of the columns of a matrix $A$ is the [column space](!/linear-algebra/definitions#column_space) of $A$`,
      'related concepts': `• [Linear Combination](!/linear-algebra/definitions#linear_combination)
• [Linear Independence](!/linear-algebra/definitions#linear_independence)
• [Basis](!/linear-algebra/definitions#basis)`,
      'related formulas': `• [Basis Definition](!/linear-algebra/formulas#basis)
• [Linear Combination](!/linear-algebra/formulas#linear_combination)
• [Span (Set Definition)](!/linear-algebra/formulas#span)`,
    },
  },

  {
    id: 'linear_independence',
    name: 'Linear Independence',
    category: 'Vector Spaces',
    formula: `Vectors $\\mathbf{v}_1, \\ldots, \\mathbf{v}_k$ are linearly independent if the only solution to
$$c_1\\mathbf{v}_1 + \\cdots + c_k\\mathbf{v}_k = \\mathbf{0}$$
is $c_1 = c_2 = \\cdots = c_k = 0$`,
    link: { url: '/linear-algebra/vector-spaces/linear-independence#1', label: 'Linear Independence' },
    fields: {
      intuition: `No vector in the set can be written as a [linear combination](!/linear-algebra/definitions#linear_combination) of the others. Each vector contributes a genuinely new direction. Removing any one reduces the [span](!/linear-algebra/definitions#span).`,
      'common errors': `Linear independence is a property of a set of vectors, not of individual vectors. A single nonzero vector is always linearly independent; the question only becomes meaningful for two or more vectors.`,
      'related concepts': `• [Basis](!/linear-algebra/definitions#basis)
• [Dimension](!/linear-algebra/definitions#dimension)
• [Rank](!/linear-algebra/definitions#rank)`,
      'related formulas': `• [Basis Definition](!/linear-algebra/formulas#basis)
• [Independence of Distinct Eigenvectors](!/linear-algebra/formulas#eigenvector)
• [Invertible Matrix Theorem](!/linear-algebra/formulas#inverse_matrix)
• [Linear Combination](!/linear-algebra/formulas#linear_combination)
• [Linear Independence Equation](!/linear-algebra/formulas#linear_independence)
• [Orthogonal Set Independence](!/linear-algebra/formulas#orthogonal_set)`,
    },
  },

  {
    id: 'basis',
    name: 'Basis',
    category: 'Vector Spaces',
    formula: `A set $\\{\\mathbf{v}_1, \\ldots, \\mathbf{v}_n\\}$ that is [linearly independent](!/linear-algebra/definitions#linear_independence) and [spans](!/linear-algebra/definitions#span) the entire [vector space](!/linear-algebra/definitions#vector_space)`,
    link: { url: '/linear-algebra/vector-spaces#2', label: 'Vector Spaces' },
    fields: {
      intuition: `A minimal set of vectors that can produce every vector in the space through linear combinations. Every vector has a unique representation as a linear combination of basis vectors.`,
      examples: `• Standard basis for $\\mathbb{R}^3$: $\\{\\mathbf{e}_1, \\mathbf{e}_2, \\mathbf{e}_3\\}$
• Any two non-parallel vectors form a basis for $\\mathbb{R}^2$
• $\\{1, x, x^2, \\ldots, x^n\\}$ is a basis for polynomials of degree $\\leq n$`,
      'related concepts': `• [Dimension](!/linear-algebra/definitions#dimension)
• [Change of Basis Matrix](!/linear-algebra/definitions#change_of_basis_matrix)
• [Orthonormal Set](!/linear-algebra/definitions#orthonormal_set)`,
      'related formulas': `• [Basis Definition](!/linear-algebra/formulas#basis)
• [Dimension Definition](!/linear-algebra/formulas#dimension)
• [Invertible Matrix Theorem](!/linear-algebra/formulas#inverse_matrix)
• [Similarity Relation](!/linear-algebra/formulas#similar_matrices)
• [Standard Basis Decomposition](!/linear-algebra/formulas#vector)
• [Standard Matrix](!/linear-algebra/formulas#linear_transformation)`,
    },
  },

  {
    id: 'dimension',
    name: 'Dimension',
    category: 'Vector Spaces',
    formula: `The number of vectors in any [basis](!/linear-algebra/definitions#basis) of a [vector space](!/linear-algebra/definitions#vector_space) $V$, denoted $\\dim(V)$`,
    link: { url: '/linear-algebra/vector-spaces/dimension#1', label: 'Dimension' },
    fields: {
      intuition: `The number of independent directions in a space. $\\mathbb{R}^3$ is three-dimensional because any basis has exactly three vectors.`,
      properties: `• All bases of a given vector space have the same number of vectors
• $\\dim(\\mathbb{R}^n) = n$
• If $W$ is a [subspace](!/linear-algebra/definitions#subspace) of $V$, then $\\dim(W) \\leq \\dim(V)$`,
      'related concepts': `• [Basis](!/linear-algebra/definitions#basis)
• [Rank](!/linear-algebra/definitions#rank)`,
      'related formulas': `• [Complement Dimension Sum](!/linear-algebra/formulas#orthogonal_complement)
• [Dimension Definition](!/linear-algebra/formulas#dimension)
• [Homogeneous Solution Space Dimension](!/linear-algebra/formulas#homogeneous_system)
• [Max Independent Set Size](!/linear-algebra/formulas#linear_independence)
• [Rank-Nullity for Maps](!/linear-algebra/formulas#linear_transformation)
• [Rank-Nullity Theorem (Matrix Form)](!/linear-algebra/formulas#column_space)`,
    },
  },

  {
    id: 'column_space',
    name: 'Column Space',
    category: 'Vector Spaces',
    formula: `The set of all vectors expressible as $A\\mathbf{x}$ — equivalently, the [span](!/linear-algebra/definitions#span) of the columns of $A$:
$$\\text{Col}(A) = \\{A\\mathbf{x} \\mid \\mathbf{x} \\in \\mathbb{R}^n\\}$$`,
    link: { url: '/linear-algebra/vector-spaces/fundamental-spaces#2', label: 'Fundamental Spaces' },
    fields: {
      intuition: `The set of all vectors $\\mathbf{b}$ for which $A\\mathbf{x} = \\mathbf{b}$ has a solution. It captures everything the matrix can "reach" as output.`,
      properties: `• $\\text{Col}(A)$ is a [subspace](!/linear-algebra/definitions#subspace) of $\\mathbb{R}^m$ (for an $m \\times n$ matrix)
• $\\dim(\\text{Col}(A)) = \\text{rank}(A)$
• $\\text{Col}(A) = \\text{Im}(T)$ where $T(\\mathbf{x}) = A\\mathbf{x}$`,
      'related concepts': `• [Null Space](!/linear-algebra/definitions#null_space)
• [Row Space](!/linear-algebra/definitions#row_space)
• [Rank](!/linear-algebra/definitions#rank)
• [Image](!/linear-algebra/definitions#image)`,
      'related formulas': `• [Image Definition](!/linear-algebra/formulas#image)
• [Linear System Matrix Form](!/linear-algebra/formulas#system_of_linear_equations)
• [Matrix-Vector Product (Column Form)](!/linear-algebra/formulas#matrix)
• [Rank of Transpose](!/linear-algebra/formulas#rank)
• [Rank-Nullity Theorem (Matrix Form)](!/linear-algebra/formulas#column_space)
• [Row Rank Equals Column Rank](!/linear-algebra/formulas#row_space)
• [SVD Four Fundamental Subspaces](!/linear-algebra/formulas#svd)`,
    },
  },

  {
    id: 'null_space',
    name: 'Null Space (Kernel)',
    category: 'Vector Spaces',
    formula: `The set of all solutions to the [homogeneous system](!/linear-algebra/definitions#homogeneous_system) $A\\mathbf{x} = \\mathbf{0}$:
$$\\text{Nul}(A) = \\{\\mathbf{x} \\in \\mathbb{R}^n \\mid A\\mathbf{x} = \\mathbf{0}\\}$$`,
    link: { url: '/linear-algebra/vector-spaces/fundamental-spaces#4', label: 'Fundamental Spaces' },
    fields: {
      intuition: `The set of all inputs that the matrix sends to the zero vector. If the null space contains only $\\mathbf{0}$, the matrix is injective (one-to-one). A larger null space means the matrix "collapses" some directions.`,
      properties: `• $\\text{Nul}(A)$ is a [subspace](!/linear-algebra/definitions#subspace) of $\\mathbb{R}^n$
• $\\dim(\\text{Nul}(A)) = n - \\text{rank}(A)$ (rank-nullity)
• $A$ is invertible if and only if $\\text{Nul}(A) = \\{\\mathbf{0}\\}$`,
      'related concepts': `• [Column Space](!/linear-algebra/definitions#column_space)
• [Rank](!/linear-algebra/definitions#rank)
• [Homogeneous System](!/linear-algebra/definitions#homogeneous_system)
• [Image](!/linear-algebra/definitions#image)`,
      'related formulas': `• [Eigenspace](!/linear-algebra/formulas#eigenspace)
• [Homogeneous Solution Space Dimension](!/linear-algebra/formulas#homogeneous_system)
• [Kernel Definition](!/linear-algebra/formulas#kernel)
• [Rank-Nullity Theorem (Matrix Form)](!/linear-algebra/formulas#column_space)
• [Solution Structure Decomposition](!/linear-algebra/formulas#system_of_linear_equations)
• [SVD Four Fundamental Subspaces](!/linear-algebra/formulas#svd)`,
    },
  },

  {
    id: 'row_space',
    name: 'Row Space',
    category: 'Vector Spaces',
    formula: `The [span](!/linear-algebra/definitions#span) of the rows of a [matrix](!/linear-algebra/definitions#matrix), equivalently the [column space](!/linear-algebra/definitions#column_space) of its transpose:
$$\\text{Row}(A) = \\text{Col}(A^T)$$`,
    link: { url: '/linear-algebra/vector-spaces/fundamental-spaces#3', label: 'Fundamental Spaces' },
    fields: {
      intuition: `A subspace of $\\mathbb{R}^n$ spanned by the rows of $A$. Row operations change individual rows but preserve the row space, making [echelon form](!/linear-algebra/definitions#row_echelon_form) useful for finding a basis.`,
      properties: `• $\\dim(\\text{Row}(A)) = \\text{rank}(A) = \\dim(\\text{Col}(A))$
• The row space is the [orthogonal complement](!/linear-algebra/definitions#orthogonal_complement) of the [null space](!/linear-algebra/definitions#null_space)`,
      'related concepts': `• [Column Space](!/linear-algebra/definitions#column_space)
• [Left Null Space](!/linear-algebra/definitions#left_null_space)
• [Rank](!/linear-algebra/definitions#rank)`,
      'related formulas': `• [Four Fundamental Subspaces Dimensions](!/linear-algebra/formulas#column_space)
• [Rank of Transpose](!/linear-algebra/formulas#rank)
• [Row Rank Equals Column Rank](!/linear-algebra/formulas#row_space)
• [SVD Four Fundamental Subspaces](!/linear-algebra/formulas#svd)`,
    },
  },

  {
    id: 'left_null_space',
    name: 'Left Null Space',
    category: 'Vector Spaces',
    formula: `The [null space](!/linear-algebra/definitions#null_space) of the transpose $A^T$ — the set of all vectors $\\mathbf{y}$ satisfying $A^T\\mathbf{y} = \\mathbf{0}$:
$$\\text{Nul}(A^T) = \\{\\mathbf{y} \\in \\mathbb{R}^m \\mid A^T\\mathbf{y} = \\mathbf{0}\\}$$`,
    link: { url: '/linear-algebra/vector-spaces/fundamental-spaces#5', label: 'Fundamental Spaces' },
    fields: {
      intuition: `It completes the four fundamental subspaces: [column space](!/linear-algebra/definitions#column_space), [null space](!/linear-algebra/definitions#null_space), [row space](!/linear-algebra/definitions#row_space), and left null space.`,
      properties: `• $\\text{Nul}(A^T)$ is the [orthogonal complement](!/linear-algebra/definitions#orthogonal_complement) of $\\text{Col}(A)$
• $\\dim(\\text{Nul}(A^T)) = m - \\text{rank}(A)$`,
      'related concepts': `• [Column Space](!/linear-algebra/definitions#column_space)
• [Row Space](!/linear-algebra/definitions#row_space)
• [Null Space](!/linear-algebra/definitions#null_space)`,
      'related formulas': `• [Four Fundamental Subspaces Dimensions](!/linear-algebra/formulas#column_space)`,
    },
  },

  // ═══════════════════════════════════════════
  // CATEGORY: Matrices (10 terms)
  // ═══════════════════════════════════════════

  {
    id: 'matrix',
    name: 'Matrix',
    category: 'Matrices',
    formula: `A rectangular array of numbers with $m$ rows and $n$ columns: $A \\in \\mathbb{R}^{m \\times n}$`,
    link: { url: '/linear-algebra/matrix#1', label: 'Matrices' },
    fields: {
      intuition: `A compact way to encode a [linear transformation](!/linear-algebra/definitions#linear_transformation) or a [system of linear equations](!/linear-algebra/definitions#system_of_linear_equations). The entry in row $i$, column $j$ is denoted $a_{ij}$.`,
      notation: `Capital letters $A, B, C$ denote matrices. $A_{m \\times n}$ indicates dimensions. $[A]_{ij}$ or $a_{ij}$ denotes the entry at position $(i,j)$.`,
      'related concepts': `• [Square Matrix](!/linear-algebra/definitions#square_matrix)
• [Inverse Matrix](!/linear-algebra/definitions#inverse_matrix)
• [Determinant](!/linear-algebra/definitions#determinant)`,
      'related formulas': `• [Augmented Matrix Construction](!/linear-algebra/formulas#augmented_matrix)
• [Gram Matrix Symmetry](!/linear-algebra/formulas#symmetric_matrix)
• [Linear System Matrix Form](!/linear-algebra/formulas#system_of_linear_equations)
• [Matrix Equality](!/linear-algebra/formulas#matrix)
• [Standard Matrix](!/linear-algebra/formulas#linear_transformation)`,
    },
  },

  {
    id: 'square_matrix',
    name: 'Square Matrix',
    category: 'Matrices',
    formula: `A [matrix](!/linear-algebra/definitions#matrix) with equal numbers of rows and columns: $A \\in \\mathbb{R}^{n \\times n}$`,
    link: { url: '/linear-algebra/matrix/types#1', label: 'Matrix Types' },
    fields: {
      intuition: `Only square matrices can have [determinants](!/linear-algebra/definitions#determinant), [eigenvalues](!/linear-algebra/definitions#eigenvalue), [inverses](!/linear-algebra/definitions#inverse_matrix), and a [trace](!/linear-algebra/definitions#trace). They represent transformations from a space to itself.`,
      'related concepts': `• [Identity Matrix](!/linear-algebra/definitions#identity_matrix)
• [Diagonal Matrix](!/linear-algebra/definitions#diagonal_matrix)
• [Symmetric Matrix](!/linear-algebra/definitions#symmetric_matrix)`,
      'related formulas': `• [Matrix Power](!/linear-algebra/formulas#square_matrix)
• [Trace Definition](!/linear-algebra/formulas#trace)`,
    },
  },

  {
    id: 'identity_matrix',
    name: 'Identity Matrix',
    category: 'Matrices',
    formula: `The [square matrix](!/linear-algebra/definitions#square_matrix) with $1$s on the main diagonal and $0$s elsewhere, denoted $I_n$:
$$I_n = \\begin{pmatrix} 1 & 0 & \\cdots & 0 \\\\ 0 & 1 & \\cdots & 0 \\\\ \\vdots & \\vdots & \\ddots & \\vdots \\\\ 0 & 0 & \\cdots & 1 \\end{pmatrix}$$`,
    link: { url: '/linear-algebra/matrix/types#2', label: 'Matrix Types' },
    fields: {
      intuition: `The matrix that leaves every vector unchanged: $I\\mathbf{v} = \\mathbf{v}$. It is the multiplicative identity for matrices, analogous to the number $1$.`,
      properties: `• $AI = IA = A$ for any compatible matrix $A$
• $\\det(I_n) = 1$
• All [eigenvalues](!/linear-algebra/definitions#eigenvalue) are $1$`,
      'related concepts': `• [Inverse Matrix](!/linear-algebra/definitions#inverse_matrix)
• [Diagonal Matrix](!/linear-algebra/definitions#diagonal_matrix)`,
      'related formulas': `• [Determinant of Identity](!/linear-algebra/formulas#determinant)
• [Identity Matrix Definition](!/linear-algebra/formulas#identity_matrix)`,
    },
  },

  {
    id: 'symmetric_matrix',
    name: 'Symmetric Matrix',
    category: 'Matrices',
    formula: `A [square matrix](!/linear-algebra/definitions#square_matrix) satisfying $A = A^T$`,
    link: { url: '/linear-algebra/matrix/types#5', label: 'Matrix Types' },
    fields: {
      intuition: `A matrix that equals its own transpose — entries are mirrored across the main diagonal. Symmetric matrices arise naturally in distance, covariance, and quadratic form problems.`,
      properties: `• All [eigenvalues](!/linear-algebra/definitions#eigenvalue) are real
• Eigenvectors from distinct eigenvalues are [orthogonal](!/linear-algebra/definitions#orthogonal_vectors)
• Always diagonalizable via an [orthogonal matrix](!/linear-algebra/definitions#orthogonal_matrix)`,
      'related concepts': `• [Positive Definite Matrix](!/linear-algebra/definitions#positive_definite_matrix)
• [Orthogonal Matrix](!/linear-algebra/definitions#orthogonal_matrix)`,
      'related formulas': `• [Cross Product Skew Matrix](!/linear-algebra/formulas#cross_product)
• [Special Matrix Eigenvalue Restrictions](!/linear-algebra/formulas#eigenvalue)
• [Spectral Theorem](!/linear-algebra/formulas#diagonalizable_matrix)
• [Symmetric Matrix Definition](!/linear-algebra/formulas#symmetric_matrix)
• [Trace Symmetric Skew Product](!/linear-algebra/formulas#trace)`,
    },
  },

  {
    id: 'inverse_matrix',
    name: 'Inverse Matrix',
    category: 'Matrices',
    formula: `A [square matrix](!/linear-algebra/definitions#square_matrix) $A^{-1}$ such that $AA^{-1} = A^{-1}A = I$`,
    link: { url: '/linear-algebra/matrix/inverse#1', label: 'Matrix Inverse' },
    fields: {
      intuition: `The matrix that "undoes" the transformation applied by $A$. If $A$ maps $\\mathbf{x}$ to $\\mathbf{b}$, then $A^{-1}$ maps $\\mathbf{b}$ back to $\\mathbf{x}$.`,
      properties: `• Exists if and only if $\\det(A) \\neq 0$
• $(AB)^{-1} = B^{-1}A^{-1}$ — order reverses
• $(A^{-1})^{-1} = A$
• $(A^T)^{-1} = (A^{-1})^T$`,
      'related concepts': `• [Singular Matrix](!/linear-algebra/definitions#singular_matrix)
• [Determinant](!/linear-algebra/definitions#determinant)`,
      'related formulas': `• [Diagonal Matrix Inverse](!/linear-algebra/formulas#diagonal_matrix)
• [Eigenvalue of Inverse](!/linear-algebra/formulas#eigenvalue)
• [Inverse Definition](!/linear-algebra/formulas#inverse_matrix)
• [Neumann Series Nilpotent](!/linear-algebra/formulas#square_matrix)
• [Orthogonal Matrix Inverse](!/linear-algebra/formulas#orthogonal_matrix)
• [Rank Invariance Invertible](!/linear-algebra/formulas#rank)
• [Singular Matrix Definition](!/linear-algebra/formulas#singular_matrix)`,
    },
  },

  {
    id: 'singular_matrix',
    name: 'Singular Matrix',
    category: 'Matrices',
    formula: `A [square matrix](!/linear-algebra/definitions#square_matrix) $A$ with $\\det(A) = 0$`,
    link: { url: '/linear-algebra/determinants#5', label: 'Determinants' },
    fields: {
      intuition: `A matrix that collapses at least one dimension — it maps some nonzero vector to $\\mathbf{0}$. A singular matrix has no [inverse](!/linear-algebra/definitions#inverse_matrix) and the system $A\\mathbf{x} = \\mathbf{b}$ either has no solution or infinitely many.`,
      properties: `• $\\det(A) = 0$
• $\\text{rank}(A) < n$
• $\\text{Nul}(A) \\neq \\{\\mathbf{0}\\}$
• $\\lambda = 0$ is an [eigenvalue](!/linear-algebra/definitions#eigenvalue)`,
      'related concepts': `• [Inverse Matrix](!/linear-algebra/definitions#inverse_matrix)
• [Determinant](!/linear-algebra/definitions#determinant)
• [Rank](!/linear-algebra/definitions#rank)`,
      'related formulas': `• [Inverse Definition](!/linear-algebra/formulas#inverse_matrix)
• [Singular Matrix Definition](!/linear-algebra/formulas#singular_matrix)`,
    },
  },

  {
    id: 'rank',
    name: 'Rank',
    category: 'Matrices',
    formula: `The number of [linearly independent](!/linear-algebra/definitions#linear_independence) columns (equivalently, rows) in a [matrix](!/linear-algebra/definitions#matrix):
$$\\text{rank}(A) = \\dim(\\text{Col}(A)) = \\dim(\\text{Row}(A))$$`,
    link: { url: '/linear-algebra/matrix/rank#1', label: 'Matrix Rank' },
    fields: {
      intuition: `It measures the "effective dimensionality" of the transformation — how many independent output directions the matrix produces.`,
      properties: `• $\\text{rank}(A) = \\text{rank}(A^T)$
• $\\text{rank}(A) + \\dim(\\text{Nul}(A)) = n$ (number of columns)
• $\\text{rank}(A) \\leq \\min(m, n)$
• The number of [pivots](!/linear-algebra/definitions#pivot) in echelon form`,
      'related concepts': `• [Dimension](!/linear-algebra/definitions#dimension)
• [Column Space](!/linear-algebra/definitions#column_space)
• [Null Space](!/linear-algebra/definitions#null_space)`,
      'related formulas': `• [Free Variables Count](!/linear-algebra/formulas#system_of_linear_equations)
• [Homogeneous Solution Space Dimension](!/linear-algebra/formulas#homogeneous_system)
• [Idempotent Rank Trace](!/linear-algebra/formulas#square_matrix)
• [Invertible Matrix Theorem](!/linear-algebra/formulas#inverse_matrix)
• [Rank Bounds](!/linear-algebra/formulas#rank)
• [Singular Matrix Definition](!/linear-algebra/formulas#singular_matrix)
• [SVD Rank](!/linear-algebra/formulas#svd)`,
    },
  },

  {
    id: 'trace',
    name: 'Trace',
    category: 'Matrices',
    formula: `The sum of the main diagonal entries of a [square matrix](!/linear-algebra/definitions#square_matrix):
$$\\text{tr}(A) = a_{11} + a_{22} + \\cdots + a_{nn} = \\sum_{i=1}^{n} a_{ii}$$`,
    link: { url: '/linear-algebra/matrix/trace#1', label: 'Matrix Trace' },
    fields: {
      intuition: `It equals the sum of all [eigenvalues](!/linear-algebra/definitions#eigenvalue) (counted with multiplicity), providing a quick invariant of the matrix.`,
      properties: `• $\\text{tr}(A + B) = \\text{tr}(A) + \\text{tr}(B)$
• $\\text{tr}(cA) = c\\,\\text{tr}(A)$
• $\\text{tr}(AB) = \\text{tr}(BA)$
• $\\text{tr}(A) = \\lambda_1 + \\lambda_2 + \\cdots + \\lambda_n$`,
      'related concepts': `• [Determinant](!/linear-algebra/definitions#determinant)
• [Eigenvalue](!/linear-algebra/definitions#eigenvalue)`,
      'related formulas': `• [Idempotent Rank Trace](!/linear-algebra/formulas#square_matrix)
• [Trace Definition](!/linear-algebra/formulas#trace)`,
    },
  },

  {
    id: 'diagonal_matrix',
    name: 'Diagonal Matrix',
    category: 'Matrices',
    formula: `A [square matrix](!/linear-algebra/definitions#square_matrix) where $a_{ij} = 0$ for all $i \\neq j$`,
    link: { url: '/linear-algebra/matrix/types#3', label: 'Matrix Types' },
    fields: {
      intuition: `A matrix whose only nonzero entries lie on the main diagonal. Diagonal matrices scale each coordinate axis independently, making them the simplest matrices to work with.`,
      properties: `• $\\det(D) = d_{11} \\cdot d_{22} \\cdots d_{nn}$
• $D^k = \\text{diag}(d_{11}^k, d_{22}^k, \\ldots, d_{nn}^k)$
• Invertible if and only if all diagonal entries are nonzero`,
      'related concepts': `• [Identity Matrix](!/linear-algebra/definitions#identity_matrix)
• [Eigenvalue](!/linear-algebra/definitions#eigenvalue)`,
      'related formulas': `• [Diagonal Matrix Definition](!/linear-algebra/formulas#diagonal_matrix)
• [Diagonalization Formula](!/linear-algebra/formulas#similar_matrices)`,
    },
  },

  {
    id: 'positive_definite_matrix',
    name: 'Positive Definite Matrix',
    category: 'Matrices',
    formula: `A [symmetric matrix](!/linear-algebra/definitions#symmetric_matrix) $A$ satisfying $\\mathbf{x}^T A \\mathbf{x} > 0$ for all nonzero $\\mathbf{x}$`,
    link: { url: '/linear-algebra/decompositions/cholesky#2', label: 'Cholesky Decomposition' },
    fields: {
      intuition: `A matrix where the associated quadratic form is always positive — it curves upward in every direction, like a bowl. Positive definite matrices generalize the idea of a positive number to matrix algebra.`,
      properties: `• All [eigenvalues](!/linear-algebra/definitions#eigenvalue) are positive
• All [pivots](!/linear-algebra/definitions#pivot) are positive
• $\\det(A) > 0$
• Admits a unique Cholesky factorization $A = LL^T$`,
      'related concepts': `• [Symmetric Matrix](!/linear-algebra/definitions#symmetric_matrix)
• [Eigenvalue](!/linear-algebra/definitions#eigenvalue)`,
      'related formulas': `• [Cholesky Decomposition](!/linear-algebra/formulas#cholesky_decomposition)
• [Quadratic Form Diagonalization](!/linear-algebra/formulas#diagonalizable_matrix)`,
    },
  },

  // ═══════════════════════════════════════════
  // CATEGORY: Determinants (4 terms)
  // ═══════════════════════════════════════════

  {
    id: 'determinant',
    name: 'Determinant',
    category: 'Determinants',
    formula: `A scalar $\\det(A) \\in \\mathbb{R}$ assigned to every [square matrix](!/linear-algebra/definitions#square_matrix), defined recursively via [cofactor](!/linear-algebra/definitions#cofactor) expansion`,
    link: { url: '/linear-algebra/determinants#1', label: 'Determinants' },
    fields: {
      intuition: `The signed volume scaling factor of the [linear transformation](!/linear-algebra/definitions#linear_transformation) represented by the matrix. A determinant of zero means the transformation collapses space into a lower dimension.`,
      properties: `• $\\det(AB) = \\det(A)\\det(B)$
• $\\det(A^T) = \\det(A)$
• $\\det(A^{-1}) = 1/\\det(A)$
• $\\det(cA) = c^n \\det(A)$ for $n \\times n$ matrix
• $\\det(A) = \\prod \\lambda_i$ (product of [eigenvalues](!/linear-algebra/definitions#eigenvalue))`,
      'related concepts': `• [Minor](!/linear-algebra/definitions#minor)
• [Cofactor](!/linear-algebra/definitions#cofactor)
• [Singular Matrix](!/linear-algebra/definitions#singular_matrix)
• [Inverse Matrix](!/linear-algebra/definitions#inverse_matrix)`,
      'related formulas': `• [Adjugate Identity](!/linear-algebra/formulas#cofactor_matrix)
• [Cross Product (Determinant Form)](!/linear-algebra/formulas#cross_product)
• [Determinant 2x2](!/linear-algebra/formulas#determinant)
• [Determinant via LU](!/linear-algebra/formulas#lu_decomposition)
• [Diagonal Matrix Determinant](!/linear-algebra/formulas#diagonal_matrix)
• [Inverse 2x2 Formula](!/linear-algebra/formulas#inverse_matrix)
• [Linear Independence Determinant Test](!/linear-algebra/formulas#linear_independence)
• [Minor Definition](!/linear-algebra/formulas#minor)
• [Orthogonal Matrix Determinant](!/linear-algebra/formulas#orthogonal_matrix)
• [Singular Matrix Definition](!/linear-algebra/formulas#singular_matrix)
• [Triangular Matrix Determinant](!/linear-algebra/formulas#matrix)`,
    },
  },

  {
    id: 'minor',
    name: 'Minor',
    category: 'Determinants',
    formula: `The [determinant](!/linear-algebra/definitions#determinant) of the submatrix obtained by deleting row $i$ and column $j$ from a [matrix](!/linear-algebra/definitions#matrix):
$$M_{ij} = \\det(\\hat{A}_{ij})$$`,
    link: { url: '/linear-algebra/determinants/cofactors#1', label: 'Cofactors' },
    fields: {
      intuition: `Minors are the building blocks for [cofactors](!/linear-algebra/definitions#cofactor) and, through them, for the full determinant computation.`,
      'related concepts': `• [Cofactor](!/linear-algebra/definitions#cofactor)
• [Determinant](!/linear-algebra/definitions#determinant)
• [Cofactor Matrix](!/linear-algebra/definitions#cofactor_matrix)`,
      'related formulas': `• [Cofactor Definition](!/linear-algebra/formulas#cofactor)
• [Minor Definition](!/linear-algebra/formulas#minor)`,
    },
  },

  {
    id: 'cofactor',
    name: 'Cofactor',
    category: 'Determinants',
    formula: `A signed [minor](!/linear-algebra/definitions#minor), with sign determined by the position $(i,j)$:
$$C_{ij} = (-1)^{i+j} M_{ij}$$`,
    link: { url: '/linear-algebra/determinants/cofactors#2', label: 'Cofactors' },
    fields: {
      intuition: `The sign alternates in a checkerboard pattern ($+, -, +, \\ldots$). Cofactors are used in the expansion formula for [determinants](!/linear-algebra/definitions#determinant) and in computing the [adjugate](!/linear-algebra/definitions#cofactor_matrix).`,
      'related concepts': `• [Minor](!/linear-algebra/definitions#minor)
• [Determinant](!/linear-algebra/definitions#determinant)
• [Cofactor Matrix](!/linear-algebra/definitions#cofactor_matrix)`,
      'related formulas': `• [Cofactor Definition](!/linear-algebra/formulas#cofactor)
• [Cofactor Matrix Definition](!/linear-algebra/formulas#cofactor_matrix)
• [Determinant Recursive Definition](!/linear-algebra/formulas#determinant)
• [Inverse via Adjugate](!/linear-algebra/formulas#inverse_matrix)`,
    },
  },

  {
    id: 'cofactor_matrix',
    name: 'Cofactor Matrix (Adjugate)',
    category: 'Determinants',
    formula: `The transpose of the matrix of [cofactors](!/linear-algebra/definitions#cofactor) of $A$:
$$\\text{adj}(A) = C^T$$`,
    link: { url: '/linear-algebra/determinants/cofactors#6', label: 'Cofactors' },
    fields: {
      intuition: `It provides a formula for the [inverse](!/linear-algebra/definitions#inverse_matrix): $A^{-1} = \\frac{1}{\\det(A)}\\,\\text{adj}(A)$.`,
      'related concepts': `• [Cofactor](!/linear-algebra/definitions#cofactor)
• [Inverse Matrix](!/linear-algebra/definitions#inverse_matrix)
• [Determinant](!/linear-algebra/definitions#determinant)`,
      'related formulas': `• [Cofactor Matrix Definition](!/linear-algebra/formulas#cofactor_matrix)
• [Inverse via Adjugate](!/linear-algebra/formulas#inverse_matrix)`,
    },
  },

  // ═══════════════════════════════════════════
  // CATEGORY: Linear Systems (6 terms)
  // ═══════════════════════════════════════════

  {
    id: 'system_of_linear_equations',
    name: 'System of Linear Equations',
    category: 'Linear Systems',
    formula: `A collection of equations $A\\mathbf{x} = \\mathbf{b}$ where $A$ is an $m \\times n$ [matrix](!/linear-algebra/definitions#matrix) and $\\mathbf{b} \\in \\mathbb{R}^m$`,
    link: { url: '/linear-algebra/linear-systems#1', label: 'Linear Systems' },
    fields: {
      intuition: `A set of linear equations sharing the same unknowns. The system has either no solution, exactly one solution, or infinitely many solutions — there is no other possibility.`,
      'related concepts': `• [Augmented Matrix](!/linear-algebra/definitions#augmented_matrix)
• [Row Echelon Form](!/linear-algebra/definitions#row_echelon_form)
• [Homogeneous System](!/linear-algebra/definitions#homogeneous_system)`,
      'related formulas': `• [Linear Equation Standard Form](!/linear-algebra/formulas#system_of_linear_equations)
• [Solve System via Inverse](!/linear-algebra/formulas#inverse_matrix)`,
    },
  },

  {
    id: 'augmented_matrix',
    name: 'Augmented Matrix',
    category: 'Linear Systems',
    formula: `The [matrix](!/linear-algebra/definitions#matrix) formed by appending the right-hand side vector $\\mathbf{b}$ as an additional column to the coefficient matrix $A$, written $[A \\mid \\mathbf{b}]$`,
    link: { url: '/linear-algebra/linear-systems#3', label: 'Linear Systems' },
    fields: {
      intuition: `A compact notation that combines the coefficient matrix and the right-hand side into a single matrix, so row operations can be applied to the entire system at once.`,
      'related concepts': `• [System of Linear Equations](!/linear-algebra/definitions#system_of_linear_equations)
• [Row Echelon Form](!/linear-algebra/definitions#row_echelon_form)`,
      'related formulas': `• [Augmented Matrix Construction](!/linear-algebra/formulas#augmented_matrix)
• [Solvability Rank Criterion](!/linear-algebra/formulas#system_of_linear_equations)`,
    },
  },

  {
    id: 'row_echelon_form',
    name: 'Row Echelon Form',
    category: 'Linear Systems',
    formula: `A matrix where:
• all zero rows are at the bottom
• each leading entry ([pivot](!/linear-algebra/definitions#pivot)) is to the right of the pivot in the row above
• all entries below each pivot are zero`,
    link: { url: '/linear-algebra/linear-systems/echelon-form#1', label: 'Echelon Form' },
    fields: {
      intuition: `A staircase pattern achieved by row operations, making back-substitution possible. The number of pivots equals the [rank](!/linear-algebra/definitions#rank).`,
      'related concepts': `• [Reduced Row Echelon Form](!/linear-algebra/definitions#reduced_row_echelon_form)
• [Pivot](!/linear-algebra/definitions#pivot)
• [Rank](!/linear-algebra/definitions#rank)`,
      'related formulas': `• [Pivot Definition](!/linear-algebra/formulas#pivot)
• [Reduced Row Echelon Form Definition](!/linear-algebra/formulas#reduced_row_echelon_form)
• [Row Echelon Form Definition](!/linear-algebra/formulas#row_echelon_form)
• [Row Equivalence Preserves Solutions](!/linear-algebra/formulas#system_of_linear_equations)`,
    },
  },

  {
    id: 'reduced_row_echelon_form',
    name: 'Reduced Row Echelon Form',
    category: 'Linear Systems',
    formula: `[Row echelon form](!/linear-algebra/definitions#row_echelon_form) with the additional requirements:
• every [pivot](!/linear-algebra/definitions#pivot) is $1$
• each pivot is the only nonzero entry in its column`,
    link: { url: '/linear-algebra/linear-systems/echelon-form#2', label: 'Echelon Form' },
    fields: {
      intuition: `The fully simplified form of a matrix under row operations. Unlike row echelon form, the reduced form is unique — every matrix has exactly one RREF.`,
      notation: `Abbreviated RREF or rref$(A)$.`,
      'related concepts': `• [Row Echelon Form](!/linear-algebra/definitions#row_echelon_form)
• [Pivot](!/linear-algebra/definitions#pivot)`,
      'related formulas': `• [Inverse via Row Reduction](!/linear-algebra/formulas#inverse_matrix)
• [Reduced Row Echelon Form Definition](!/linear-algebra/formulas#reduced_row_echelon_form)`,
    },
  },

  {
    id: 'pivot',
    name: 'Pivot',
    category: 'Linear Systems',
    formula: `The first nonzero entry in each row of a matrix in [row echelon form](!/linear-algebra/definitions#row_echelon_form)`,
    link: { url: '/linear-algebra/linear-systems/echelon-form#4', label: 'Echelon Form' },
    fields: {
      intuition: `Pivots mark the "independent" columns. The number of pivots determines the [rank](!/linear-algebra/definitions#rank); columns without pivots correspond to free variables in the solution.`,
      'related concepts': `• [Row Echelon Form](!/linear-algebra/definitions#row_echelon_form)
• [Rank](!/linear-algebra/definitions#rank)`,
      'related formulas': `• [Free Variables Count](!/linear-algebra/formulas#system_of_linear_equations)
• [Pivot Definition](!/linear-algebra/formulas#pivot)
• [Reduced Row Echelon Form Definition](!/linear-algebra/formulas#reduced_row_echelon_form)
• [Row Echelon Form Definition](!/linear-algebra/formulas#row_echelon_form)`,
    },
  },

  {
    id: 'homogeneous_system',
    name: 'Homogeneous System',
    category: 'Linear Systems',
    formula: `A [system of linear equations](!/linear-algebra/definitions#system_of_linear_equations) in which every equation equals zero: $A\\mathbf{x} = \\mathbf{0}$`,
    link: { url: '/linear-algebra/linear-systems/homogeneous#1', label: 'Homogeneous Systems' },
    fields: {
      intuition: `It always has at least the trivial solution $\\mathbf{x} = \\mathbf{0}$. Nontrivial solutions exist if and only if $\\text{rank}(A) < n$.`,
      properties: `• The solution set is the [null space](!/linear-algebra/definitions#null_space) of $A$
• If $m < n$ (more unknowns than equations), nontrivial solutions always exist`,
      'related concepts': `• [Null Space](!/linear-algebra/definitions#null_space)
• [System of Linear Equations](!/linear-algebra/definitions#system_of_linear_equations)`,
      'related formulas': `• [Homogeneous Solution Space Dimension](!/linear-algebra/formulas#homogeneous_system)
• [Solution Structure Decomposition](!/linear-algebra/formulas#system_of_linear_equations)`,
    },
  },

  // ═══════════════════════════════════════════
  // CATEGORY: Transformations (5 terms)
  // ═══════════════════════════════════════════

  {
    id: 'linear_transformation',
    name: 'Linear Transformation',
    category: 'Transformations',
    formula: `A function $T: V \\to W$ between [vector spaces](!/linear-algebra/definitions#vector_space) that preserves addition and scalar multiplication:
$$T(\\mathbf{u} + \\mathbf{v}) = T(\\mathbf{u}) + T(\\mathbf{v})$$
$$T(c\\mathbf{u}) = cT(\\mathbf{u})$$`,
    link: { url: '/linear-algebra/transformations#1', label: 'Linear Transformations' },
    fields: {
      intuition: `Lines map to lines (or to the origin), and the origin stays fixed. Every linear transformation between finite-dimensional spaces can be represented by a [matrix](!/linear-algebra/definitions#matrix).`,
      examples: `• Rotation, reflection, scaling, shearing in $\\mathbb{R}^2$
• The derivative operator on polynomials
• Matrix multiplication: $T(\\mathbf{x}) = A\\mathbf{x}$`,
      'related concepts': `• [Matrix Representation](!/linear-algebra/definitions#matrix_representation)
• [Image](!/linear-algebra/definitions#image)
• [Null Space](!/linear-algebra/definitions#null_space)`,
      'related formulas': `• [Determinant Volume Scaling Factor](!/linear-algebra/formulas#determinant)
• [Injectivity Kernel Criterion](!/linear-algebra/formulas#kernel)
• [Linear Transformation Definition](!/linear-algebra/formulas#linear_transformation)
• [Similarity Relation](!/linear-algebra/formulas#similar_matrices)`,
    },
  },

  {
    id: 'image',
    name: 'Image (Range)',
    category: 'Transformations',
    formula: `The set of all output vectors of a [linear transformation](!/linear-algebra/definitions#linear_transformation):
$$\\text{Im}(T) = \\{T(\\mathbf{v}) \\mid \\mathbf{v} \\in V\\}$$`,
    link: { url: '/linear-algebra/transformations/image-kernel#1', label: 'Image and Kernel' },
    fields: {
      intuition: `For a matrix transformation $T(\\mathbf{x}) = A\\mathbf{x}$, the image equals the [column space](!/linear-algebra/definitions#column_space) of $A$.`,
      'related concepts': `• [Column Space](!/linear-algebra/definitions#column_space)
• [Null Space](!/linear-algebra/definitions#null_space)
• [Rank](!/linear-algebra/definitions#rank)`,
      'related formulas': `• [Image Definition](!/linear-algebra/formulas#image)
• [Rank-Nullity for Maps](!/linear-algebra/formulas#linear_transformation)`,
    },
  },

  {
    id: 'matrix_representation',
    name: 'Matrix Representation',
    category: 'Transformations',
    formula: `A [matrix](!/linear-algebra/definitions#matrix) $A$ such that $T(\\mathbf{v}) = A[\\mathbf{v}]_{\\mathcal{B}}$ for a chosen [basis](!/linear-algebra/definitions#basis) $\\mathcal{B}$`,
    link: { url: '/linear-algebra/transformations/matrix-representation#1', label: 'Matrix Representation' },
    fields: {
      intuition: `Every [linear transformation](!/linear-algebra/definitions#linear_transformation) between finite-dimensional spaces can be encoded as a matrix once bases are chosen. Different bases produce different matrices representing the same transformation.`,
      'related concepts': `• [Linear Transformation](!/linear-algebra/definitions#linear_transformation)
• [Change of Basis Matrix](!/linear-algebra/definitions#change_of_basis_matrix)
• [Similar Matrices](!/linear-algebra/definitions#similar_matrices)`,
    },
  },

  {
    id: 'change_of_basis_matrix',
    name: 'Change of Basis Matrix',
    category: 'Transformations',
    formula: `A matrix $P$ that converts coordinates from one [basis](!/linear-algebra/definitions#basis) to another: $[\\mathbf{v}]_{\\mathcal{B}'} = P^{-1}[\\mathbf{v}]_{\\mathcal{B}}$`,
    link: { url: '/linear-algebra/transformations/basis-change#2', label: 'Basis Change' },
    fields: {
      intuition: `The same vector can be described using different coordinate systems (bases). The change of basis matrix translates between these coordinate systems.`,
      'related concepts': `• [Basis](!/linear-algebra/definitions#basis)
• [Similar Matrices](!/linear-algebra/definitions#similar_matrices)
• [Matrix Representation](!/linear-algebra/definitions#matrix_representation)`,
    },
  },

  {
    id: 'similar_matrices',
    name: 'Similar Matrices',
    category: 'Transformations',
    formula: `Matrices $A$ and $B$ are similar if $B = P^{-1}AP$ for some invertible matrix $P$`,
    link: { url: '/linear-algebra/transformations/basis-change#3', label: 'Basis Change' },
    fields: {
      intuition: `Two matrices are similar when they represent the same [linear transformation](!/linear-algebra/definitions#linear_transformation) under different [bases](!/linear-algebra/definitions#basis). They share all basis-independent properties.`,
      properties: `Similar matrices have the same:
• [Determinant](!/linear-algebra/definitions#determinant)
• [Trace](!/linear-algebra/definitions#trace)
• [Eigenvalues](!/linear-algebra/definitions#eigenvalue)
• [Rank](!/linear-algebra/definitions#rank)
• [Characteristic polynomial](!/linear-algebra/definitions#characteristic_polynomial)`,
      'related concepts': `• [Change of Basis Matrix](!/linear-algebra/definitions#change_of_basis_matrix)`,
      'related formulas': `• [Real Canonical Form 2x2](!/linear-algebra/formulas#diagonalizable_matrix)
• [Similarity Relation](!/linear-algebra/formulas#similar_matrices)
• [Trace Similarity Invariance](!/linear-algebra/formulas#trace)`,
    },
  },

  // ═══════════════════════════════════════════
  // CATEGORY: Eigen (7 terms)
  // ═══════════════════════════════════════════

  {
    id: 'eigenvalue',
    name: 'Eigenvalue',
    category: 'Eigen',
    formula: `A scalar $\\lambda$ such that $A\\mathbf{v} = \\lambda\\mathbf{v}$ for some nonzero [vector](!/linear-algebra/definitions#vector) $\\mathbf{v}$`,
    link: { url: '/linear-algebra/eigen#2', label: 'Eigenvalues and Eigenvectors' },
    fields: {
      intuition: `The factor by which the [linear transformation](!/linear-algebra/definitions#linear_transformation) stretches or compresses an [eigenvector](!/linear-algebra/definitions#eigenvector). A negative eigenvalue means the eigenvector's direction is reversed.`,
      properties: `• Found by solving $\\det(A - \\lambda I) = 0$
• $\\sum \\lambda_i = \\text{tr}(A)$
• $\\prod \\lambda_i = \\det(A)$
• A [singular matrix](!/linear-algebra/definitions#singular_matrix) has $\\lambda = 0$ as an eigenvalue`,
      'related concepts': `• [Eigenvector](!/linear-algebra/definitions#eigenvector)
• [Eigenspace](!/linear-algebra/definitions#eigenspace)
• [Characteristic Polynomial](!/linear-algebra/definitions#characteristic_polynomial)
• [Singular Value](!/linear-algebra/definitions#singular_value)`,
      'related formulas': `• [Characteristic Equation](!/linear-algebra/formulas#characteristic_polynomial)
• [Determinant Product of Eigenvalues](!/linear-algebra/formulas#determinant)
• [Diagonalization Formula](!/linear-algebra/formulas#similar_matrices)
• [Eigenvalue Definition](!/linear-algebra/formulas#eigenvalue)
• [Matrix Exponential](!/linear-algebra/formulas#diagonalizable_matrix)
• [QR Algorithm for Eigenvalues](!/linear-algebra/formulas#qr_decomposition)
• [Singular Values](!/linear-algebra/formulas#svd)
• [Trace Sum of Eigenvalues](!/linear-algebra/formulas#trace)`,
    },
  },

  {
    id: 'eigenvector',
    name: 'Eigenvector',
    category: 'Eigen',
    formula: `A nonzero vector $\\mathbf{v}$ such that $A\\mathbf{v} = \\lambda\\mathbf{v}$ for some scalar $\\lambda$`,
    link: { url: '/linear-algebra/eigen#2', label: 'Eigenvalues and Eigenvectors' },
    fields: {
      intuition: `A direction that the matrix preserves — the transformation only stretches or compresses along this direction without rotating it. Eigenvectors from distinct [eigenvalues](!/linear-algebra/definitions#eigenvalue) are always [linearly independent](!/linear-algebra/definitions#linear_independence).`,
      'common errors': `The zero vector is never an eigenvector, even though $A\\mathbf{0} = \\lambda\\mathbf{0}$ for any $\\lambda$. The definition requires $\\mathbf{v} \\neq \\mathbf{0}$.`,
      'related concepts': `• [Eigenvalue](!/linear-algebra/definitions#eigenvalue)
• [Eigenspace](!/linear-algebra/definitions#eigenspace)`,
      'related formulas': `• [Eigenvalue Definition](!/linear-algebra/formulas#eigenvalue)
• [Independence of Distinct Eigenvectors](!/linear-algebra/formulas#eigenvector)`,
    },
  },

  {
    id: 'eigenspace',
    name: 'Eigenspace',
    category: 'Eigen',
    formula: `The set of all [eigenvectors](!/linear-algebra/definitions#eigenvector) for a given [eigenvalue](!/linear-algebra/definitions#eigenvalue) $\\lambda$, together with the zero vector — equivalently, the [null space](!/linear-algebra/definitions#null_space) of $(A - \\lambda I)$:
$$E_\\lambda = \\text{Nul}(A - \\lambda I)$$`,
    link: { url: '/linear-algebra/eigen#4', label: 'Eigenvalues and Eigenvectors' },
    fields: {
      intuition: `It is always a [subspace](!/linear-algebra/definitions#subspace), and its [dimension](!/linear-algebra/definitions#dimension) reveals how many independent eigenvector directions exist for that eigenvalue.`,
      properties: `• $\\dim(E_\\lambda)$ is the [geometric multiplicity](!/linear-algebra/definitions#geometric_multiplicity) of $\\lambda$
• $1 \\leq \\dim(E_\\lambda) \\leq$ [algebraic multiplicity](!/linear-algebra/definitions#algebraic_multiplicity) of $\\lambda$`,
      'related concepts': `• [Eigenvalue](!/linear-algebra/definitions#eigenvalue)
• [Eigenvector](!/linear-algebra/definitions#eigenvector)
• [Null Space](!/linear-algebra/definitions#null_space)`,
      'related formulas': `• [Eigenspace](!/linear-algebra/formulas#eigenspace)
• [Multiplicity Inequality](!/linear-algebra/formulas#eigenvalue)`,
    },
  },

  {
    id: 'characteristic_polynomial',
    name: 'Characteristic Polynomial',
    category: 'Eigen',
    formula: `The polynomial whose roots are the [eigenvalues](!/linear-algebra/definitions#eigenvalue) of $A$, obtained by computing:
$$p(\\lambda) = \\det(A - \\lambda I)$$`,
    link: { url: '/linear-algebra/eigen/characteristic-equation#2', label: 'Characteristic Equation' },
    fields: {
      intuition: `For an $n \\times n$ matrix, the characteristic polynomial has degree $n$, so there are at most $n$ eigenvalues (counted with multiplicity).`,
      properties: `• The constant term is $\\det(A)$ (up to sign)
• The coefficient of $\\lambda^{n-1}$ is $\\pm\\text{tr}(A)$
• [Similar matrices](!/linear-algebra/definitions#similar_matrices) have the same characteristic polynomial`,
      'related concepts': `• [Eigenvalue](!/linear-algebra/definitions#eigenvalue)
• [Algebraic Multiplicity](!/linear-algebra/definitions#algebraic_multiplicity)
• [Determinant](!/linear-algebra/definitions#determinant)`,
      'related formulas': `• [Characteristic Equation](!/linear-algebra/formulas#characteristic_polynomial)
• [Trace Sum of Eigenvalues](!/linear-algebra/formulas#trace)`,
    },
  },

  {
    id: 'algebraic_multiplicity',
    name: 'Algebraic Multiplicity',
    category: 'Eigen',
    formula: `The multiplicity of $\\lambda$ as a root of the [characteristic polynomial](!/linear-algebra/definitions#characteristic_polynomial)`,
    link: { url: '/linear-algebra/eigen/characteristic-equation#6', label: 'Characteristic Equation' },
    fields: {
      intuition: `How many times the eigenvalue appears as a root. If $p(\\lambda) = (\\lambda - 2)^3(\\lambda + 1)$, then $\\lambda = 2$ has algebraic multiplicity $3$ and $\\lambda = -1$ has algebraic multiplicity $1$.`,
      'related concepts': `• [Geometric Multiplicity](!/linear-algebra/definitions#geometric_multiplicity)
• [Characteristic Polynomial](!/linear-algebra/definitions#characteristic_polynomial)`,
      'related formulas': `• [Diagonalizability Condition](!/linear-algebra/formulas#diagonalizable_matrix)
• [Multiplicity Inequality](!/linear-algebra/formulas#eigenvalue)
• [Trace Sum of Eigenvalues](!/linear-algebra/formulas#trace)`,
    },
  },

  {
    id: 'geometric_multiplicity',
    name: 'Geometric Multiplicity',
    category: 'Eigen',
    formula: `The [dimension](!/linear-algebra/definitions#dimension) of the [eigenspace](!/linear-algebra/definitions#eigenspace) associated with an [eigenvalue](!/linear-algebra/definitions#eigenvalue) $\\lambda$:
$$\\text{geo. mult.}(\\lambda) = \\dim(E_\\lambda) = \\dim(\\text{Nul}(A - \\lambda I))$$`,
    link: { url: '/linear-algebra/eigen/properties#3', label: 'Eigenvalue Properties' },
    fields: {
      intuition: `The number of independent [eigenvector](!/linear-algebra/definitions#eigenvector) directions for a given eigenvalue. A matrix is diagonalizable if and only if every eigenvalue has geometric multiplicity equal to its [algebraic multiplicity](!/linear-algebra/definitions#algebraic_multiplicity).`,
      'related concepts': `• [Algebraic Multiplicity](!/linear-algebra/definitions#algebraic_multiplicity)
• [Eigenspace](!/linear-algebra/definitions#eigenspace)`,
      'related formulas': `• [Diagonalizability Condition](!/linear-algebra/formulas#diagonalizable_matrix)
• [Multiplicity Inequality](!/linear-algebra/formulas#eigenvalue)`,
    },
  },

  {
    id: 'singular_value',
    name: 'Singular Value',
    category: 'Eigen',
    formula: `A nonnegative scalar measuring how much a matrix stretches space along each principal direction, derived from the [eigenvalues](!/linear-algebra/definitions#eigenvalue) of $A^TA$:
$$\\sigma_i = \\sqrt{\\lambda_i(A^TA)}$$`,
    link: { url: '/linear-algebra/decompositions/svd#3', label: 'SVD' },
    fields: {
      intuition: `Unlike eigenvalues, singular values are always nonnegative and exist for any matrix, not just square ones.`,
      properties: `• $\\sigma_1 \\geq \\sigma_2 \\geq \\cdots \\geq \\sigma_r > 0$ (ordered by convention)
• $\\sigma_1 = \\|A\\|$ (the operator norm)
• $\\prod \\sigma_i = |\\det(A)|$ for square matrices
• Number of nonzero singular values equals the [rank](!/linear-algebra/definitions#rank)`,
      'related concepts': `• [Eigenvalue](!/linear-algebra/definitions#eigenvalue)
• [Rank](!/linear-algebra/definitions#rank)`,
      'related formulas': `• [SVD](!/linear-algebra/formulas#svd)`,
    },
  },

  // ═══════════════════════════════════════════
  // CATEGORY: Orthogonality (6 terms)
  // ═══════════════════════════════════════════

  {
    id: 'inner_product',
    name: 'Inner Product',
    category: 'Orthogonality',
    formula: `A function $\\langle \\cdot, \\cdot \\rangle: V \\times V \\to \\mathbb{R}$ satisfying symmetry, linearity, and positive-definiteness`,
    link: { url: '/linear-algebra/orthogonality/inner-product#8', label: 'Inner Product' },
    fields: {
      intuition: `A generalization of the [dot product](!/linear-algebra/definitions#dot_product) to abstract [vector spaces](!/linear-algebra/definitions#vector_space). It defines notions of length, angle, and orthogonality in spaces where the standard dot product may not apply.`,
      properties: `• Symmetry: $\\langle \\mathbf{u}, \\mathbf{v} \\rangle = \\langle \\mathbf{v}, \\mathbf{u} \\rangle$
• Linearity: $\\langle a\\mathbf{u} + b\\mathbf{w}, \\mathbf{v} \\rangle = a\\langle \\mathbf{u}, \\mathbf{v} \\rangle + b\\langle \\mathbf{w}, \\mathbf{v} \\rangle$
• Positive-definiteness: $\\langle \\mathbf{v}, \\mathbf{v} \\rangle > 0$ for $\\mathbf{v} \\neq \\mathbf{0}$`,
      'related concepts': `• [Dot Product](!/linear-algebra/definitions#dot_product)
• [Orthogonal Vectors](!/linear-algebra/definitions#orthogonal_vectors)
• [Magnitude](!/linear-algebra/definitions#magnitude)`,
      'related formulas': `• [Cauchy-Schwarz Inequality](!/linear-algebra/formulas#dot_product)
• [Cauchy-Schwarz Inequality (General)](!/linear-algebra/formulas#inner_product)
• [Frobenius Inner Product](!/linear-algebra/formulas#trace)`,
    },
  },

  {
    id: 'orthogonal_vectors',
    name: 'Orthogonal Vectors',
    category: 'Orthogonality',
    formula: `Vectors $\\mathbf{u}$ and $\\mathbf{v}$ are orthogonal if $\\langle \\mathbf{u}, \\mathbf{v} \\rangle = 0$`,
    link: { url: '/linear-algebra/orthogonality#1', label: 'Orthogonality' },
    fields: {
      intuition: `Perpendicular vectors. Their [dot product](!/linear-algebra/definitions#dot_product) (or [inner product](!/linear-algebra/definitions#inner_product)) is zero, meaning they share no component in each other's direction.`,
      notation: `Written $\\mathbf{u} \\perp \\mathbf{v}$.`,
      'related concepts': `• [Orthogonal Set](!/linear-algebra/definitions#orthogonal_set)
• [Orthogonal Complement](!/linear-algebra/definitions#orthogonal_complement)
• [Inner Product](!/linear-algebra/definitions#inner_product)`,
      'related formulas': `• [Orthogonality Condition](!/linear-algebra/formulas#orthogonal_vectors)
• [Pythagorean Theorem](!/linear-algebra/formulas#inner_product)`,
    },
  },

  {
    id: 'orthogonal_set',
    name: 'Orthogonal Set',
    category: 'Orthogonality',
    formula: `A set of vectors $\\{\\mathbf{v}_1, \\ldots, \\mathbf{v}_k\\}$ where $\\langle \\mathbf{v}_i, \\mathbf{v}_j \\rangle = 0$ for all $i \\neq j$`,
    link: { url: '/linear-algebra/orthogonality/orthogonal-sets#1', label: 'Orthogonal Sets' },
    fields: {
      intuition: `A collection of mutually perpendicular vectors. Every orthogonal set of nonzero vectors is automatically [linearly independent](!/linear-algebra/definitions#linear_independence).`,
      'related concepts': `• [Orthonormal Set](!/linear-algebra/definitions#orthonormal_set)
• [Orthogonal Vectors](!/linear-algebra/definitions#orthogonal_vectors)
• [Basis](!/linear-algebra/definitions#basis)`,
      'related formulas': `• [Orthogonal Set Independence](!/linear-algebra/formulas#orthogonal_set)`,
    },
  },

  {
    id: 'orthonormal_set',
    name: 'Orthonormal Set',
    category: 'Orthogonality',
    formula: `An [orthogonal set](!/linear-algebra/definitions#orthogonal_set) where every vector is a [unit vector](!/linear-algebra/definitions#unit_vector): $\\langle \\mathbf{v}_i, \\mathbf{v}_j \\rangle = \\delta_{ij}$`,
    link: { url: '/linear-algebra/orthogonality/orthogonal-sets#3', label: 'Orthogonal Sets' },
    fields: {
      intuition: `Mutually perpendicular vectors, each of length $1$. An orthonormal [basis](!/linear-algebra/definitions#basis) gives the simplest coordinate system — coordinates are just inner products with the basis vectors.`,
      notation: `$\\delta_{ij}$ is the Kronecker delta: $1$ if $i = j$, $0$ otherwise.`,
      'related concepts': `• [Orthogonal Set](!/linear-algebra/definitions#orthogonal_set)
• [Orthogonal Matrix](!/linear-algebra/definitions#orthogonal_matrix)
• [Unit Vector](!/linear-algebra/definitions#unit_vector)`,
      'related formulas': `• [Orthogonal Matrix Definition](!/linear-algebra/formulas#orthogonal_matrix)
• [Orthonormal Set](!/linear-algebra/formulas#orthogonal_set)
• [Spectral Decomposition](!/linear-algebra/formulas#diagonalizable_matrix)
• [Trace Orthonormal Basis](!/linear-algebra/formulas#trace)`,
    },
  },

  {
    id: 'orthogonal_complement',
    name: 'Orthogonal Complement',
    category: 'Orthogonality',
    formula: `The set of all vectors in $V$ that are [orthogonal](!/linear-algebra/definitions#orthogonal_vectors) to every vector in a [subspace](!/linear-algebra/definitions#subspace) $W$:
$$W^\\perp = \\{\\mathbf{v} \\in V \\mid \\langle \\mathbf{v}, \\mathbf{w} \\rangle = 0 \\text{ for all } \\mathbf{w} \\in W\\}$$`,
    link: { url: '/linear-algebra/orthogonality#3', label: 'Orthogonality' },
    fields: {
      intuition: `Together, $W$ and $W^\\perp$ span the entire space, with no overlap except the zero vector.`,
      properties: `• $W^\\perp$ is a [subspace](!/linear-algebra/definitions#subspace)
• $\\dim(W) + \\dim(W^\\perp) = \\dim(V)$
• $(W^\\perp)^\\perp = W$
• The [row space](!/linear-algebra/definitions#row_space) and [null space](!/linear-algebra/definitions#null_space) are orthogonal complements`,
      'related concepts': `• [Null Space](!/linear-algebra/definitions#null_space)
• [Row Space](!/linear-algebra/definitions#row_space)`,
      'related formulas': `• [Complementary Projection](!/linear-algebra/formulas#projection)
• [Orthogonal Complement Definition](!/linear-algebra/formulas#orthogonal_complement)`,
    },
  },

  {
    id: 'orthogonal_matrix',
    name: 'Orthogonal Matrix',
    category: 'Orthogonality',
    formula: `A [square matrix](!/linear-algebra/definitions#square_matrix) $Q$ satisfying $Q^TQ = QQ^T = I$`,
    link: { url: '/linear-algebra/matrix/types#7', label: 'Matrix Types' },
    fields: {
      intuition: `A matrix whose columns (and rows) form an [orthonormal set](!/linear-algebra/definitions#orthonormal_set). Orthogonal matrices preserve lengths and angles — they represent rotations and reflections.`,
      properties: `• $Q^{-1} = Q^T$
• $\\det(Q) = \\pm 1$
• $\\|Q\\mathbf{v}\\| = \\|\\mathbf{v}\\|$ for all $\\mathbf{v}$
• All [eigenvalues](!/linear-algebra/definitions#eigenvalue) have absolute value $1$`,
      'related concepts': `• [Orthonormal Set](!/linear-algebra/definitions#orthonormal_set)
• [Symmetric Matrix](!/linear-algebra/definitions#symmetric_matrix)`,
      'related formulas': `• [Orthogonal Matrix Definition](!/linear-algebra/formulas#orthogonal_matrix)
• [Orthonormal Columns Projection](!/linear-algebra/formulas#projection)
• [QR Decomposition](!/linear-algebra/formulas#qr_decomposition)
• [Rotation Matrix 2D](!/linear-algebra/formulas#linear_transformation)
• [Spectral Theorem](!/linear-algebra/formulas#diagonalizable_matrix)
• [SVD](!/linear-algebra/formulas#svd)`,
    },
  },



];
 export default linearAlgebraTermsList;