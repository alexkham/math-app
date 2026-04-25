

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
    },
  },


//     //vectors
//     {
//         name: "Vector",
//         formula: "A mathematical object that has both magnitude ($|\\vec{v}|$) and direction in space.",
//         fields: {
//           "definition": "$$\\vec{v} = \\begin{bmatrix} v_1 \\\\ v_2 \\\\ \\vdots \\\\ v_n \\end{bmatrix} \\quad \\text{or} \\quad \\vec{v} = \\begin{bmatrix} v_1 & v_2 & \\cdots & v_n \\end{bmatrix}$$",
//           "components": "Each element $v_i$ represents displacement along the corresponding axis",
//           "examples": `2D vector: $\\vec{v} = \\begin{bmatrix} 2 \\\\ 3 \\end{bmatrix}$ represents 2 units along x-axis, 3 along y-axis
      
//       3D vector: $\\vec{v} = \\begin{bmatrix} 1 \\\\ -2 \\\\ 4 \\end{bmatrix}$ represents displacements along x, y, and z axes`,
//           "notation": "Denoted by arrow overhead ($\\vec{v}$) or bold ($\\mathbf{v}$)"
//         },
//         category: "Vectors"
//       },
//     {
//         name: "Components",
//         formula: "The individual elements of a vector, e.g., (v1, v2, ..., vn).",
//         fields: [],
//         category: "Vectors Basic Terms"
//     },
//     {
//         name: "Vector Magnitude (Norm)",
//         formula: "Length of a vector, denoted as $|\\vec{v}|$ or $\\|\\vec{v}\\|$",
//         fields: {
//           "definition": "For an n-dimensional vector: $$|\\vec{v}| = \\sqrt{\\sum_{i=1}^n v_i^2}$$",
//           "common cases": `2D vector: $|\\vec{v}| = \\sqrt{v_1^2 + v_2^2}$
       
//        3D vector: $|\\vec{v}| = \\sqrt{v_1^2 + v_2^2 + v_3^2}$`,
//           "properties": "Always non-negative: $|\\vec{v}| \\geq 0$, equals zero only for zero vector",
//           "examples": `For $\\vec{v} = \\begin{bmatrix} 3 \\\\ 4 \\end{bmatrix}$:
//        $|\\vec{v}| = \\sqrt{3^2 + 4^2} = \\sqrt{25} = 5$`
//         },
//         category: "Vectors"
//        },
//        {
//         name: "Unit Vector",
//         formula: "Vector with magnitude of 1: $|\\vec{u}| = 1$",
//         fields: {
//           "definition": "Obtained by normalizing a vector: $$\\vec{u} = \\frac{\\vec{v}}{|\\vec{v}|}$$",
// //          "standard basis": `Standard unit vectors in $\\mathbb{R}^3$:
// // $$\\hat{i} = \\begin{bmatrix} 1 \\\\ 0 \\\\ 0 \\end{bmatrix}, \\quad
// // \\hat{j} = \\begin{bmatrix} 0 \\\\ 1 \\\\ 0 \\end{bmatrix}, \\quad
// // \\hat{k} = \\begin{bmatrix} 0 \\\\ 0 \\\\ 1 \\end{bmatrix}$$`,
// "standard basis": `Standard unit vectors in $\\mathbb{R}^3$:
// $$\\hat{i} = \\begin{bmatrix} 1 \\\\ 0 \\\\ 0 \\end{bmatrix}, \\quad \\hat{j} = \\begin{bmatrix} 0 \\\\ 1 \\\\ 0 \\end{bmatrix}, \\quad \\hat{k} = \\begin{bmatrix} 0 \\\\ 0 \\\\ 1 \\end{bmatrix}$$`,
//           "examples": `Normalizing $\\vec{v} = \\begin{bmatrix} 3 \\\\ 4 \\end{bmatrix}$:
//        $$\\vec{u} = \\frac{1}{5}\\begin{bmatrix} 3 \\\\ 4 \\end{bmatrix} = \\begin{bmatrix} 0.6 \\\\ 0.8 \\end{bmatrix}$$`,
//           "properties": "Unit vectors preserve direction while normalizing magnitude"
//         },
//         category: "Vectors"
//        },
//     {
//         name: "Zero Vector (Null Vector)",
//         formula: "A vector where all components are zero: $\\vec{0}$ or $\\mathbf{0}$",
//         fields: {
//             "column": "Column vector form: $$\\begin{bmatrix} 0 \\\\ 0 \\\\ \\vdots \\\\ 0 \\end{bmatrix}$$",
//             "row": "Row vector form: $$\\begin{bmatrix} 0 & 0 & \\cdots & 0 \\end{bmatrix}$$",
//             "properties": "Key property: $\\vec{0} + \\vec{v} = \\vec{v}$ for any vector $\\vec{v}$"
//         },
//         category: "Vectors"
//     },
//     {
//         name: "Column Vector",
//         formula: "A $n \\times 1$ matrix (vertical array of numbers): $$\\vec{v} = \\begin{bmatrix} v_1 \\\\ v_2 \\\\ \\vdots \\\\ v_n \\end{bmatrix}$$",
//         fields: {
//             "examples": "Examples: $$\\begin{bmatrix} 2 \\\\ -1 \\\\ 4 \\end{bmatrix} \\quad \\begin{bmatrix} x \\\\ y \\\\ z \\end{bmatrix}$$",
//             "properties": "Can be transposed to get a row vector: $$\\vec{v}^T = \\begin{bmatrix} v_1 & v_2 & \\cdots & v_n \\end{bmatrix}$$"
//         },
//         category: "Vectors"
//      },
//      {
//         name: "Row Vector",
//         formula: "A $1 \\times n$ matrix (horizontal array of numbers): $$\\vec{v} = \\begin{bmatrix} v_1 & v_2 & \\cdots & v_n \\end{bmatrix}$$",
//         fields: {
//             "examples": "Examples: $$\\begin{bmatrix} 2 & -1 & 4 \\end{bmatrix} \\quad \\begin{bmatrix} x & y & z \\end{bmatrix}$$",
//             "properties": "Can be transposed to get a column vector: $$\\vec{v}^T = \\begin{bmatrix} v_1 \\\\ v_2 \\\\ \\vdots \\\\ v_n \\end{bmatrix}$$"
//         },
//         category: "Vectors"
//      },
//      {
//         "name": "Vector Addition",
//         "formula": "For vectors $u,v$ in $\\mathbb{R}^n$: $(u + v)_i = u_i + v_i$",
//         "fields": {
//             "Properties": "$u + v = v + u$\n$u + (v + w) = (u + v) + w$\n$u + 0 = u$",
//             "Example": "$$\\begin{bmatrix} 1 \\\\ 2 \\\\ 3 \\end{bmatrix} + \\begin{bmatrix} 4 \\\\ 5 \\\\ 6 \\end{bmatrix} = \\begin{bmatrix} 5 \\\\ 7 \\\\ 9 \\end{bmatrix}$$"
//         },
//         "category": "Vector Operations"
//      },
//      {
//         "name": "Scalar Multiplication",
//         "formula": "For scalar $c$ and vector $v$: $(cv)_i = cv_i$",
//         "fields": {
//             "Properties": "$c(u + v) = cu + cv$\n$(c + d)v = cv + dv$\n$(cd)v = c(dv)$",
//             "Example": "$$3\\begin{bmatrix} 2 \\\\ -1 \\\\ 4 \\end{bmatrix} = \\begin{bmatrix} 6 \\\\ -3 \\\\ 12 \\end{bmatrix}$$"
//         },
//         "category": "Vector Operations"
//      },
//     {
//         name: "Linear Combination",
//         formula: "A vector $\\vec{v}$ is a linear combination of vectors $\\{\\vec{v_1}, \\vec{v_2}, ..., \\vec{v_n}\\}$ if it can be written as $\\vec{v} = c_1\\vec{v_1} + c_2\\vec{v_2} + ... + c_n\\vec{v_n}$ for some scalars $c_1, c_2, ..., c_n$",
//         fields: {
//           "geometric": `The set of all possible linear combinations forms:
//        - A line if one nonzero vector
//        - A plane if two linearly independent vectors
//        - A space if three linearly independent vectors`,
//           "examples": `Vector $\\vec{v} = \\begin{bmatrix} 5 \\\\ 7 \\end{bmatrix}$ as linear combination:
//        $$\\vec{v} = 2\\begin{bmatrix} 1 \\\\ 2 \\end{bmatrix} + 3\\begin{bmatrix} 1 \\\\ 1 \\end{bmatrix}$$`
//         },
//         category: "Vectors"
//        },
//        {
//         "name": "Dot Product",
//         "formula": "For vectors $u,v$ in $\\mathbb{R}^n$: $u\\cdot v = \\sum_{i=1}^n u_iv_i$",
//         "fields": {
//             "Properties": "$u\\cdot v = v\\cdot u$\n$u\\cdot u = \\|u\\|^2$\n$(cu)\\cdot v = c(u\\cdot v)$",
//             "Geometric": "$$u\\cdot v = \\|u\\|\\|v\\|\\cos\\theta$$ where $\\theta$ is angle between vectors",
//             "Example": "$$\\begin{bmatrix} 1 \\\\ 2 \\\\ 3 \\end{bmatrix} \\cdot \\begin{bmatrix} 4 \\\\ 5 \\\\ 6 \\end{bmatrix} = 1(4) + 2(5) + 3(6) = 32$$"
//         },
//         "category": "Vector Operations"
//      },
//      {
//         "name": "Cross Product",
//         "formula": "For $u,v$ in $\\mathbb{R}^3$: $u\\times v = \\|u\\|\\|v\\|\\sin\\theta\\, \\mathbf{n}$",
//         "fields": {
//             "Computation": "$$\\begin{bmatrix} u_1 \\\\ u_2 \\\\ u_3 \\end{bmatrix} \\times \\begin{bmatrix} v_1 \\\\ v_2 \\\\ v_3 \\end{bmatrix} = \\begin{bmatrix} u_2v_3 - u_3v_2 \\\\ u_3v_1 - u_1v_3 \\\\ u_1v_2 - u_2v_1 \\end{bmatrix}$$",
//             "Properties": "$u\\times v = -(v\\times u)$\n$u\\times u = 0$\n$\\|u\\times v\\| = \\|u\\|\\|v\\|\\sin\\theta$",
//             "Applications": "Normal vectors\nTorque calculation\nArea of parallelogram: $\\|u\\times v\\|$"
//         },
//         "category": "Vector Operations"
//      },
//     {
//         name: "Vector Projection",
//         formula: "Orthogonal projection of vector $\\vec{v}$ onto vector $\\vec{u}$ is the vector component of $\\vec{v}$ parallel to $\\vec{u}$, given by: $\\text{proj}_{\\vec{u}}\\vec{v} = \\frac{\\vec{v} \\cdot \\vec{u}}{|\\vec{u}|^2}\\vec{u}$",
//         fields: {
//           "formula expanded": `For vectors $\\vec{v}$ and $\\vec{u}$:
//        $$\\text{proj}_{\\vec{u}}\\vec{v} = \\frac{\\vec{v} \\cdot \\vec{u}}{\\vec{u} \\cdot \\vec{u}}\\vec{u} = (\\vec{v} \\cdot \\hat{u})\\hat{u}$$`,
//           "geometric": `The projection decomposes $\\vec{v}$ into:
//        - Parallel component: $\\text{proj}_{\\vec{u}}\\vec{v}$ (along $\\vec{u}$)
//        - Perpendicular component: $\\vec{v} - \\text{proj}_{\\vec{u}}\\vec{v}$`,
//           "examples": `For $\\vec{v} = \\begin{bmatrix} 3 \\\\ 4 \\end{bmatrix}$ onto $\\vec{u} = \\begin{bmatrix} 1 \\\\ 0 \\end{bmatrix}$:
//        $$\\text{proj}_{\\vec{u}}\\vec{v} = \\begin{bmatrix} 3 \\\\ 0 \\end{bmatrix}$$`
//         },
//         category: "Vectors"
//        },
//        {
//         name: "Linearly Independent Vectors",
//         formula: "A set of vectors $\\{\\vec{v_1}, \\vec{v_2}, ..., \\vec{v_n}\\}$ is linearly independent if the equation $c_1\\vec{v_1} + c_2\\vec{v_2} + ... + c_n\\vec{v_n} = \\vec{0}$ is satisfied only when all $c_i = 0$",
//         fields: {
//           "geometric": `In $\\mathbb{R}^2$:
//        - Two vectors are linearly independent if neither is a scalar multiple of the other
//        - In $\\mathbb{R}^3$, three vectors are linearly independent if none lies in the plane formed by the other two`,
//           "examples": `Linearly independent vectors:
//        $$\\vec{v_1} = \\begin{bmatrix} 1 \\\\ 0 \\end{bmatrix}, \\quad \\vec{v_2} = \\begin{bmatrix} 0 \\\\ 1 \\end{bmatrix}$$
       
//        Linearly dependent vectors:
//        $$\\vec{v_1} = \\begin{bmatrix} 1 \\\\ 2 \\end{bmatrix}, \\quad \\vec{v_2} = \\begin{bmatrix} 2 \\\\ 4 \\end{bmatrix}$$`
//         },
//         category: "Vectors"
//        },
//        {
//         name: "Linearly Dependent Vectors",
//         formula: "A set of vectors $\\{\\vec{v_1}, \\vec{v_2}, ..., \\vec{v_n}\\}$ is linearly dependent if there exist scalars $c_1, c_2, ..., c_n$, not all zero, such that $c_1\\vec{v_1} + c_2\\vec{v_2} + ... + c_n\\vec{v_n} = \\vec{0}$",
//         fields: {
//           "geometric": `In $\\mathbb{R}^2$:
//        - Two vectors are linearly dependent if one is a scalar multiple of the other
//        - In $\\mathbb{R}^3$, three vectors are linearly dependent if one lies in the plane formed by the other two`,
//           "examples": `$$\\vec{v_1} = \\begin{bmatrix} 2 \\\\ 4 \\end{bmatrix}, \\quad \\vec{v_2} = \\begin{bmatrix} 1 \\\\ 2 \\end{bmatrix}$$
//        Here $2\\vec{v_2} = \\vec{v_1}$, making them linearly dependent`
//         },
//         category: "Vectors"
//        },
//        {
//         name: "Vector Space",
//         formula: "A set $V$ with vectors $\\vec{u}, \\vec{v} \\in V$ and scalars $c$ is a vector space if it's closed under addition ($\\vec{u} + \\vec{v} \\in V$) and scalar multiplication ($c\\vec{v} \\in V$), and satisfies the vector space axioms",
//         fields: {
//           "axioms": `For all $\\vec{u}, \\vec{v}, \\vec{w} \\in V$ and scalars $c,d$:
//        - Commutativity: $\\vec{u} + \\vec{v} = \\vec{v} + \\vec{u}$
//        - Associativity: $(\\vec{u} + \\vec{v}) + \\vec{w} = \\vec{u} + (\\vec{v} + \\vec{w})$
//        - Zero vector: $\\exists \\vec{0}$ such that $\\vec{v} + \\vec{0} = \\vec{v}$
//        - Additive inverse: $\\exists -\\vec{v}$ such that $\\vec{v} + (-\\vec{v}) = \\vec{0}$
//        - Distributivity: $c(\\vec{u} + \\vec{v}) = c\\vec{u} + c\\vec{v}$`,
//           "examples": `Common vector spaces:
//        - $\\mathbb{R}^n$: n-dimensional real vectors
//        - Matrices of fixed size
//        - Polynomials of degree ≤ n`
//         },
//         category: "Vectors"
//        },
//        {
//         name: "Vector Subspace",
//         formula: "A subset $W$ of a vector space $V$ is a subspace if it's closed under addition and scalar multiplication: for all $\\vec{u}, \\vec{v} \\in W$ and scalar $c$, both $\\vec{u} + \\vec{v} \\in W$ and $c\\vec{v} \\in W$",
//         fields: {
//           "properties": `Any subspace must:
//        - Contain zero vector
//        - Be closed under linear combinations
//        - Form a vector space itself`,
//           "examples": `Common subspaces of $\\mathbb{R}^3$:
//        - Any plane through origin
//        - Any line through origin
//        - The zero subspace $\\{\\vec{0}\\}$`
//         },
//         category: "Vectors"
//        },
//        {
//         name: "Span",
//         formula: "The span of vectors $\\{\\vec{v_1}, \\vec{v_2}, ..., \\vec{v_n}\\}$ is the set of all their linear combinations: $\\text{span}\\{\\vec{v_1}, \\vec{v_2}, ..., \\vec{v_n}\\} = \\{c_1\\vec{v_1} + c_2\\vec{v_2} + ... + c_n\\vec{v_n} | c_i \\in \\mathbb{R}\\}$",
//         fields: {
//           "geometric": `Span represents:
//        - A line through origin (one vector)
//        - A plane through origin (two linearly independent vectors)
//        - All of $\\mathbb{R}^3$ (three linearly independent vectors)`,
//           "examples": `$$\\text{span}\\left\\{\\begin{bmatrix} 1 \\\\ 0 \\end{bmatrix}, \\begin{bmatrix} 0 \\\\ 1 \\end{bmatrix}\\right\\} = \\mathbb{R}^2$$
//        $$\\text{span}\\left\\{\\begin{bmatrix} 1 \\\\ 2 \\end{bmatrix}, \\begin{bmatrix} 2 \\\\ 4 \\end{bmatrix}\\right\\} = \\text{line through origin}$$`
//         },
//         category: "Vectors"
//        },
//        {
//         name: "Basis",
//         formula: "A basis of a vector space $V$ is a linearly independent set of vectors that spans $V$. For any vector $\\vec{v} \\in V$, there exists a unique representation $\\vec{v} = c_1\\vec{v_1} + c_2\\vec{v_2} + ... + c_n\\vec{v_n}$",
//         fields: {
//           "properties": `- Contains minimum number of vectors needed to span space
//        - Linearly independent and spans entire space
//        - Number of vectors = dimension of space`,
//           "examples": `Standard basis for $\\mathbb{R}^3$:
//        $$\\left\\{\\begin{bmatrix} 1 \\\\ 0 \\\\ 0 \\end{bmatrix}, \\begin{bmatrix} 0 \\\\ 1 \\\\ 0 \\end{bmatrix}, \\begin{bmatrix} 0 \\\\ 0 \\\\ 1 \\end{bmatrix}\\right\\}$$`
//         },
//         category: "Vectors"
//        },
//        {
//         name: "Dimension",
//         formula: "The dimension of a vector space $V$ is the number of vectors in any basis of $V$, denoted $\\dim(V)$",
//         fields: {
//           "properties": `- Independent of choice of basis
//        - Equal to maximum number of linearly independent vectors
//        - $\\dim(\\mathbb{R}^n) = n$`,
//           "examples": `- $\\dim(\\mathbb{R}^2) = 2$ (plane)
//        - $\\dim(\\mathbb{R}^3) = 3$ (space)
//        - $\\dim(\\{\\vec{0}\\}) = 0$ (zero space)
//        - $\\dim(\\text{line}) = 1$`
//         },
//         category: "Vectors"
//        },
//        {
//         name: "Orthogonal Vectors",
//         formula: "Two vectors $\\vec{u}$ and $\\vec{v}$ are orthogonal if their dot product is zero: $\\vec{u} \\cdot \\vec{v} = 0$",
//         fields: {
//           "geometric": "Orthogonal vectors are perpendicular to each other, forming a 90° angle",
//       "examples": "$$\\begin{bmatrix} 1 \\\\ 0 \\end{bmatrix}, \\quad \\begin{bmatrix} 0 \\\\ 1 \\end{bmatrix}$$\n$$\\vec{u} \\cdot \\vec{v} = 1(0) + 0(1) = 0$$"
//         },
//         category: "Vectors"
//        },
//        {
//         name: "Orthonormal Vectors",
//         formula: "A set of vectors is orthonormal if they are orthogonal to each other and each has unit length: $\\vec{u_i} \\cdot \\vec{u_j} = \\delta_{ij}$ where $\\delta_{ij}$ is the Kronecker delta",
//         fields: {
//           "properties": ` Orthogonal to each other
//  Each vector has magnitude equal to 1
//  Form an orthonormal basis if they span the space`,
//         "examples": "Standard basis vectors are orthonormal: $$\\hat{i} = \\begin{bmatrix} 1 \\\\ 0 \\\\ 0 \\end{bmatrix}, \\quad \\hat{j} = \\begin{bmatrix} 0 \\\\ 1 \\\\ 0 \\end{bmatrix}, \\quad \\hat{k} = \\begin{bmatrix} 0 \\\\ 0 \\\\ 1 \\end{bmatrix}$$"
//         },
//         category: "Vectors"
//        },
//        {
//         "name": "Gram-Schmidt Process",
//         "formula": "Produces orthonormal basis $\\{u_1,\\ldots,u_n\\}$ from linearly independent vectors $\\{v_1,\\ldots,v_n\\}$",
//         "fields": {
//             "Process": "$$u_1 = \\frac{v_1}{\\|v_1\\|},\\ u_k = \\frac{v_k - \\sum_{i=1}^{k-1}\\text{proj}_{u_i}(v_k)}{\\|v_k - \\sum_{i=1}^{k-1}\\text{proj}_{u_i}(v_k)\\|}$$",
//             "Example": "For $v_1 = \\begin{bmatrix} 1 \\\\ 1 \\\\ 0 \\end{bmatrix}, v_2 = \\begin{bmatrix} 1 \\\\ 0 \\\\ 1 \\end{bmatrix}$:\n$$u_1 = \\frac{1}{\\sqrt{2}}\\begin{bmatrix} 1 \\\\ 1 \\\\ 0 \\end{bmatrix}, u_2 = \\frac{1}{\\sqrt{6}}\\begin{bmatrix} 1 \\\\ -1 \\\\ 2 \\end{bmatrix}$$"
//         },
//         "category": "Vectors Orthogonality"
//      },
//      {
//         "name": "Direction Cosines",
//         "formula": "For vector $v$, cosines with axes: $\\cos\\alpha = \\frac{v_x}{\\|v\\|}, \\cos\\beta = \\frac{v_y}{\\|v\\|}, \\cos\\gamma = \\frac{v_z}{\\|v\\|}$",
//         "fields": {
//             "Properties": "$\\cos^2\\alpha + \\cos^2\\beta + \\cos^2\\gamma = 1$",
//             "Example": "Vector $\\begin{bmatrix} 1 \\\\ 1 \\\\ 1 \\end{bmatrix}$ has direction cosines:\n$$\\cos\\alpha = \\cos\\beta = \\cos\\gamma = \\frac{1}{\\sqrt{3}}$$"
//         },
//         "category": "Vectors Geometric Interpretations"
//      },
//      {
//         "name": "Linear Transformation",
//         "formula": "Function $T: V \\to W$ where $T(au + bv) = aT(u) + bT(v)$",
//         "fields": {
//             "Properties": "Preserves linear combinations\nCan be represented by matrix multiplication\n$T(0) = 0$",
//             "Matrix Form": "For transformation $T: \\mathbb{R}^n \\to \\mathbb{R}^m$:\n$$T(x) = Ax$$ where $A$ is $m\\times n$ matrix",
//             "Examples": "Rotation\nScaling\nProjection\nReflection"
//         },
//         "category": "Vectors Transformations"
//      },
//      {
//         "name": "Matrix Representation",
//         "formula": "For transformation $T$ with basis $\\{v_1,\\ldots,v_n\\}$, $[T]_{\\mathcal{B}} = [T(v_1)\\cdots T(v_n)]$",
//         "fields": {
//             "Properties": "$[T(v)]_{\\mathcal{B}} = [T]_{\\mathcal{B}}[v]_{\\mathcal{B}}$\n$[T]_{\\mathcal{C}} = P^{-1}[T]_{\\mathcal{B}}P$ for change of basis $P$",
//             "Example": "Rotation by $\\theta$ in $\\mathbb{R}^2$: $$\\begin{bmatrix} \\cos\\theta & -\\sin\\theta \\\\ \\sin\\theta & \\cos\\theta \\end{bmatrix}$$"
//         },
//         "category": "Vectors Transformations"
//      },
//      {
//         "name": "Gradient Vector",
//         "formula": "For scalar function $f(x_1,\\ldots,x_n)$: $\\nabla f = \\left(\\frac{\\partial f}{\\partial x_1},\\ldots,\\frac{\\partial f}{\\partial x_n}\\right)$",
//         "fields": {
//             "Properties": "Points in direction of steepest increase\nPerpendicular to level curves/surfaces\n$\\nabla(fg) = f\\nabla g + g\\nabla f$",
//             "Example": "For $f(x,y) = x^2 + xy + y^2$:\n$$\\nabla f = (2x + y, x + 2y)$$"
//         },
//         "category": "Vectors Applications"
//      },
//      {
//         "name": "Position Vector",
//         "formula": "Vector $\\vec{r} = (x,y,z)$ from origin to point $P(x,y,z)$",
//         "fields": {
//             "Properties": "Length gives distance from origin: $\\|\\vec{r}\\|$\nDirection gives orientation in space",
//             "Applications": "Velocity: $\\vec{v} = \\frac{d\\vec{r}}{dt}$\nAcceleration: $\\vec{a} = \\frac{d^2\\vec{r}}{dt^2}$",
//             "Example": "Point $P(3,4,5)$ has position vector:\n$$\\vec{r} = 3\\hat{i} + 4\\hat{j} + 5\\hat{k} = \\begin{bmatrix} 3 \\\\ 4 \\\\ 5 \\end{bmatrix}$$"
//         },
//         "category": "Vectors Applications"
//      },
//     // {
//     //     name: "Force Vector",
//     //     formula: "In physics, a vector representing a force with magnitude and direction.",
//     //     fields: [],
//     //     category: "Vectors Applications"
//     // },




//        //matrices
//        {
//         "name": "Matrix",
//         "formula": "A rectangular array of elements $a_{ij}$ in $m$ rows and $n$ columns",
//         "fields": {
//             "Notation": "$$A = [a_{ij}]_{m\\times n} = \\begin{bmatrix} a_{11} & a_{12} & \\cdots & a_{1n} \\\\ a_{21} & a_{22} & \\cdots & a_{2n} \\\\ \\vdots & \\vdots & \\ddots & \\vdots \\\\ a_{m1} & a_{m2} & \\cdots & a_{mn} \\end{bmatrix}$$",
//             "Properties": "Size: $m \\times n$\nElements: $a_{ij}$ where $i$ is row, $j$ is column"
//         },
//         "category": "Matrices Basic Terms"
//      },
//      {
//         "name": "Row Matrix",
//         "formula": "Matrix of size $1 \\times n$ (single row)",
//         "fields": {
//             "Form": "$$A = \\begin{bmatrix} a_1 & a_2 & \\cdots & a_n \\end{bmatrix}$$",
//             "Applications": "Row vector representation\nLinear combinations"
//         },
//         "category": "Matrices Basic Terms"
//      },
//      {
//         "name": "Column Matrix",
//         "formula": "Matrix of size $m \\times 1$ (single column)",
//         "fields": {
//             "Form": "$$A = \\begin{bmatrix} a_1 \\\\ a_2 \\\\ \\vdots \\\\ a_m \\end{bmatrix}$$",
//             "Applications": "Vector representation\nSolutions to linear systems"
//         },
//         "category": "Matrices Basic Terms"
//      },
//         {
//             name: "Square Matrix",
//             formula: "A [matrix](!/linear-algebra/definitions#matrix) with an equal number of rows and columns, often associated with special properties like determinants and eigenvalues.",
//             fields: {
//                 "$n \\times n$": "A square matrix of size n×n with arbitrary elements: $$A = \\begin{bmatrix} a_{11} & a_{12} & \\cdots & a_{1n} \\\\ a_{21} & a_{22} & \\cdots & a_{2n} \\\\ \\vdots & \\vdots & \\ddots & \\vdots \\\\ a_{n1} & a_{n2} & \\cdots & a_{nn} \\end{bmatrix}$$",
//             },
//             category: "Matrices Basic Terms"
//         },
//         {
//             name:"Zero Matrix",
//             formula:"A [matrix](!/linear-algebra/definitions#matrix) with all elements are equal to zero. Also called **null matrix**.",
//             fields:{
//                 "rectangular": "Zero matrix can have any dimensions $m \\times n$: $$O = \\begin{bmatrix} 0 & 0 & \\cdots & 0 \\\\ 0 & 0 & \\cdots & 0 \\\\ \\vdots & \\vdots & \\ddots & \\vdots \\\\ 0 & 0 & \\cdots & 0 \\end{bmatrix}$$",
//                 "$n \\times n$": "Square zero matrix has equal number of rows and columns: $$O_n = \\begin{bmatrix} 0 & 0 & \\cdots & 0 \\\\ 0 & 0 & \\cdots & 0 \\\\ \\vdots & \\vdots & \\ddots & \\vdots \\\\ 0 & 0 & \\cdots & 0 \\end{bmatrix}$$",

//             },
//             category:"Matrices Basic Terms"

//         },
//         {
//             name: "Main Diagonal",
//             formula: "In a [square matrix](!/linear-algebra/definitions#square_matrix), the main diagonal (or principal diagonal, or leading diagonal) consists of elements where row index equals column index.",
//             fields: {
//                 "$n \\times n$": "For an $n \\times n$ matrix $A=[a_{ij}]$, main diagonal contains elements where $i=j$: $$A = \\begin{bmatrix} a_{11} & a_{12} & \\cdots & a_{1n} \\\\ a_{21} & a_{22} & \\cdots & a_{2n} \\\\ \\vdots & \\vdots & \\ddots & \\vdots \\\\ a_{n1} & a_{n2} & \\cdots & a_{nn} \\end{bmatrix}$$ Here $a_{11}, a_{22}, ..., a_{nn}$ form the main diagonal",
//                 "$2 \\times 2$": "In 2×2 matrix, elements $a_{11}$ and $a_{22}$ form main diagonal: $$\\begin{bmatrix} a_{11} & a_{12} \\\\ a_{21} & a_{22} \\end{bmatrix}$$",
//                 "$3 \\times 3$": "In 3×3 matrix, elements $a_{11}$, $a_{22}$, and $a_{33}$ form main diagonal: $$\\begin{bmatrix} a_{11} & a_{12} & a_{13} \\\\ a_{21} & a_{22} & a_{23} \\\\ a_{31} & a_{32} & a_{33} \\end{bmatrix}$$"
//             },
//             category: "Matrices Basic Terms"
//          },
//          {
//             name: "Triangular Matrix",
//             formula: "A square matrix where all the elements either above or below the [main diagonal](!/linear-algebra/definitions#main_diagonal) are zero.",
//             fields: {
//                 // "$n \\times n$": "Upper triangular matrix has zeros below diagonal: $$U = \\begin{bmatrix} u_{11} & u_{12} & u_{13} & \\cdots & u_{1n} \\\\ 0 & u_{22} & u_{23} & \\cdots & u_{2n} \\\\ 0 & 0 & u_{33} & \\cdots & u_{3n} \\\\ \\vdots & \\vdots & \\vdots & \\ddots & \\vdots \\\\ 0 & 0 & 0 & \\cdots & u_{nn} \\end{bmatrix}$$ Lower triangular has zeros above diagonal: $$L = \\begin{bmatrix} l_{11} & 0 & 0 & \\cdots & 0 \\\\ l_{21} & l_{22} & 0 & \\cdots & 0 \\\\ l_{31} & l_{32} & l_{33} & \\cdots & 0 \\\\ \\vdots & \\vdots & \\vdots & \\ddots & \\vdots \\\\ l_{n1} & l_{n2} & l_{n3} & \\cdots & l_{nn} \\end{bmatrix}$$",
//                 "$2 \\times 2$": "2×2 examples:\nUpper triangular: $$\\begin{bmatrix} 1 & 2 \\\\ 0 & 3 \\end{bmatrix}$$ Lower triangular: $$\\begin{bmatrix} 1 & 0 \\\\ 4 & 3 \\end{bmatrix}$$",
//                 "$3 \\times 3$": "3×3 examples:\nUpper triangular: $$\\begin{bmatrix} 1 & 2 & 3 \\\\ 0 & 4 & 5 \\\\ 0 & 0 & 6 \\end{bmatrix}$$ Lower triangular: $$\\begin{bmatrix} 1 & 0 & 0 \\\\ 4 & 5 & 0 \\\\ 7 & 8 & 9 \\end{bmatrix}$$",
//                 "$n \\times n$": "Upper triangular matrix: $$U = \\begin{bmatrix} \\color{blue}u_{11} & u_{12} & u_{13} & \\cdots & u_{1n} \\\\ 0 & \\color{blue}u_{22} & u_{23} & \\cdots & u_{2n} \\\\ 0 & 0 & \\color{blue}u_{33} & \\cdots & u_{3n} \\\\ \\vdots & \\vdots & \\vdots & \\ddots & \\vdots \\\\ 0 & 0 & 0 & \\cdots & \\color{blue}u_{nn} \\end{bmatrix}$$ Lower triangular: $$L = \\begin{bmatrix} \\color{blue}l_{11} & 0 & 0 & \\cdots & 0 \\\\ l_{21} & \\color{blue}l_{22} & 0 & \\cdots & 0 \\\\ l_{31} & l_{32} & \\color{blue}l_{33} & \\cdots & 0 \\\\ \\vdots & \\vdots & \\vdots & \\ddots & \\vdots \\\\ l_{n1} & l_{n2} & l_{n3} & \\cdots & \\color{blue}l_{nn} \\end{bmatrix}$$"
//             },
//             category: "Special Matrices"
//          },
//          {
//             name: "Upper Triangular Matrix",
//             formula: "A [square matrix](!/linear-algebra/definitions#square_matrix) with zeros below the [main diagonal](!/linear-algebra/definitions#main_diagonal). All elements $a_{ij}=0$ where $i > j$.",
//             fields: {
//                 "$n \\times n$": "General form of upper triangular matrix: $$U = \\begin{bmatrix} \\color{red}u_{11} & u_{12} & u_{13} & \\cdots & u_{1n} \\\\ 0 & \\color{red}u_{22} & u_{23} & \\cdots & u_{2n} \\\\ 0 & 0 & \\color{red}u_{33} & \\cdots & u_{3n} \\\\ \\vdots & \\vdots & \\vdots & \\ddots & \\vdots \\\\ 0 & 0 & 0 & \\cdots & \\color{red}u_{nn} \\end{bmatrix}$$ where diagonal elements $\\color{red}u_{ii}$ can be any real numbers",
//                 "$2 \\times 2$": "2×2 example: $$\\begin{bmatrix} \\color{red}4 & 2 \\\\ 0 & \\color{red}3 \\end{bmatrix}$$",
//                 "$3 \\times 3$": "3×3 example: $$\\begin{bmatrix} \\color{red}1 & 5 & 3 \\\\ 0 & \\color{red}4 & 2 \\\\ 0 & 0 & \\color{red}6 \\end{bmatrix}$$"
//             },
//             category: "Special Matrices"
//          },
//          {
//             name: "Lower Triangular Matrix",
//             formula: "A square [matrix](!/linear-algebra/definitions#matrix) with zeros above the [main diagonal](!/linear-algebra/definitions#main_diagonal). All elements $a_{ij}=0$ where $i < j$.",
//             fields: {
//                 "$n \\times n$": "General form of lower triangular matrix: $$L = \\begin{bmatrix} \\color{red}l_{11} & 0 & 0 & \\cdots & 0 \\\\ l_{21} & \\color{red}l_{22} & 0 & \\cdots & 0 \\\\ l_{31} & l_{32} & \\color{red}l_{33} & \\cdots & 0 \\\\ \\vdots & \\vdots & \\vdots & \\ddots & \\vdots \\\\ l_{n1} & l_{n2} & l_{n3} & \\cdots & \\color{red}l_{nn} \\end{bmatrix}$$ where diagonal elements $\\color{red}l_{ii}$ can be any real numbers",
//                 "$2 \\times 2$": "2×2 example: $$\\begin{bmatrix} \\color{red}3 & 0 \\\\ 2 & \\color{red}4 \\end{bmatrix}$$",
//                 "$3 \\times 3$": "3×3 example: $$\\begin{bmatrix} \\color{red}1 & 0 & 0 \\\\ 4 & \\color{red}2 & 0 \\\\ 7 & 5 & \\color{red}3 \\end{bmatrix}$$"
//             },
//             category: "Special Matrices"
//          },

//         {
//             name: "Identity Matrix",
//             formula: "A square matrix with 1s on the [main diagonal](!/linear-algebra/definitions#main_diagonal) and 0s elsewhere.",
//             fields: {
                
//                  "$n \\times n$":"A square matrix of size n×n that has 1s on the [main diagonal](!/linear-algebra/definitions#main_diagonal) and 0s elsewhere: $$I_n = \\begin{bmatrix} 1 & 0 & \\cdots & 0 \\\\ 0 & 1 & \\cdots & 0 \\\\ \\vdots & \\vdots & \\ddots & \\vdots \\\\ 0 & 0 & \\cdots & 1 \\end{bmatrix}$$",
//                  "$2 \\times 2$": "**Identity matrix of size 2x2**: $$I_2 = \\begin{bmatrix} 1 & 0 \\\\ 0 & 1 \\end{bmatrix}$$ ",
//                  "$3 \\times 3$": "**Identity matrix of size 3x3**: $$I_3 = \\begin{bmatrix} 1 & 0 & 0 \\\\ 0 & 1 & 0 \\\\ 0 & 0 & 1 \\end{bmatrix}$$",
//                  "$4 \\times 4$": "**Identity matrix of size 4x4**: $$I_4 = \\begin{bmatrix} 1 & 0 & 0 & 0 \\\\ 0 & 1 & 0 & 0 \\\\ 0 & 0 & 1 & 0 \\\\ 0 & 0 & 0 & 1 \\end{bmatrix}$$"
//             },
//             category: "Special Matrices"
//         },
//         {
//             name: "Anti-symmetric(Skew-symmetric) Matrix",
//             formula: "A square matrix that equals the negative of its transpose: $A = -A^T$. All diagonal elements must be zero.",
//             fields: {
//                 "$n \\times n$": "General form: $$A = \\begin{bmatrix} \\color{red}0 & a_{12} & a_{13} & \\cdots & a_{1n} \\\\ -a_{12} & \\color{red}0 & a_{23} & \\cdots & a_{2n} \\\\ -a_{13} & -a_{23} & \\color{red}0 & \\cdots & a_{3n} \\\\ \\vdots & \\vdots & \\vdots & \\ddots & \\vdots \\\\ -a_{1n} & -a_{2n} & -a_{3n} & \\cdots & \\color{red}0 \\end{bmatrix}$$ where $a_{ij} = -a_{ji}$ for all $i,j$",
//                 "$2 \\times 2$": "2×2 example: $$\\begin{bmatrix} \\color{red}0 & 2 \\\\ -2 & \\color{red}0 \\end{bmatrix}$$",
//                 "$3 \\times 3$": "3×3 example: $$\\begin{bmatrix} \\color{red}0 & 3 & 1 \\\\ -3 & \\color{red}0 & 2 \\\\ -1 & -2 & \\color{red}0 \\end{bmatrix}$$"
//             },
//             category: "Special Matrices"
//          },
//         {
//             name: "Diagonal Matrix",
//             formula: "A square matrix with non-zero elements only on the [main diagonal](!/linear-algebra/definitions#main_diagonal).",
//             fields: {
//                 "$n \\times n$": "A diagonal matrix of size n×n contains arbitrary values on [main diagonal](!/linear-algebra/definitions#main_diagonal): $$D_n = \\begin{bmatrix} d_1 & 0 & \\cdots & 0 \\\\ 0 & d_2 & \\cdots & 0 \\\\ \\vdots & \\vdots & \\ddots & \\vdots \\\\ 0 & 0 & \\cdots & d_n \\end{bmatrix}$$",

//             },
//             category: "Special Matrices"
//         },
//         {
//             name: "Symmetric Matrix",
//             formula: "A matrix equal to its transpose, $A = A^T$.",
//             fields: {
//                "$n \\times n$": "A symmetric matrix elements mirror across [main diagonal](!/linear-algebra/definitions#main_diagonal): $$A = \\begin{bmatrix} a_{11} & a_{12} & a_{13} & \\cdots & a_{1n} \\\\ a_{12} & a_{22} & a_{23} & \\cdots & a_{2n} \\\\ a_{13} & a_{23} & a_{33} & \\cdots & a_{3n} \\\\ \\vdots & \\vdots & \\vdots & \\ddots & \\vdots \\\\ a_{1n} & a_{2n} & a_{3n} & \\cdots & a_{nn} \\end{bmatrix}$$ where $a_{12}=a_{21}, a_{13}=a_{31}, ..., a_{ij}=a_{ji}$",
//             },
//             category: "Special Matrices"
//         },
//         {
//             "name": "Transposition",
//             "formula": "An operation that flips a matrix over its main diagonal, switching rows and columns: $(A^T)_{ij} = A_{ji}$",
//             "fields": {
//                 "$n \\times m$": "For matrix $A$ of size $n \\times m$, its transpose $A^T$ is of size $m \\times n$: $$A = \\begin{bmatrix} a_{11} & a_{12} & a_{13} \\\\ a_{21} & a_{22} & a_{23} \\end{bmatrix} \\rightarrow A^T = \\begin{bmatrix} a_{11} & a_{21} \\\\ a_{12} & a_{22} \\\\ a_{13} & a_{23} \\end{bmatrix}$$",
//                 "Properties": "$(A^T)^T = A \\\\ (AB)^T = B^T A^T \\\\ (A + B)^T = A^T + B^T$"
//             },
//             "category": "Matrix Operations"
//         },
//         {
//             "name": "Matrix Addition",
//             "formula": "For matrices $A,B$ of same size, $(A+B)_{ij} = A_{ij} + B_{ij}$",
//             "fields": {
//                 "Example": "$$\\begin{bmatrix} 1 & 2 \\\\ 3 & 4 \\end{bmatrix} + \\begin{bmatrix} 5 & 6 \\\\ 7 & 8 \\end{bmatrix} = \\begin{bmatrix} 6 & 8 \\\\ 10 & 12 \\end{bmatrix}$$",
//                 "Properties": "Commutative: $A + B = B + A \\\\$ Associative: $(A + B) + C = A + (B + C)$"
//             },
//             "category": "Matrix Operations"
//         },
//         {
//             "name": "Scalar Addition (Matrix)",
//             "formula": "For scalar $c$ and matrix $A$, $(c+A)_{ij} = c + A_{ij}$",
//             "fields": {
//                 "Example": "$$2 + \\begin{bmatrix} 1 & 3 \\\\ 2 & 4 \\end{bmatrix} = \\begin{bmatrix} 3 & 5 \\\\ 4 & 6 \\end{bmatrix}$$",
//                 "Properties": "Commutative: $c + A = A + c$"
//             },
//             "category": "Matrix Operations"
//         },
//         {
//             "name": "Scalar Multiplication(Matrix)",
//             "formula": "For scalar $c$ and matrix $A$, $(cA)_{ij} = cA_{ij}$",
//             "fields": {
//                 "Example": "$$2\\begin{bmatrix} 1 & 3 \\\\ 2 & 4 \\end{bmatrix} = \\begin{bmatrix} 2 & 6 \\\\ 4 & 8 \\end{bmatrix}$$",
//                 "Properties": "Associative: $a(bA) = (ab)A \\\\$ Distributive: $a(A + B) = aA + aB \\\\ (a + b)A = aA + bA$"
//             },
//             "category": "Matrix Operations"
//          },
//          {
//             "name": "Matrix Multiplication",
//             "formula": "For matrices $A_{m\\times n}, B_{n\\times p}$, $(AB)_{ij} = \\sum_{k=1}^n a_{ik}b_{kj}$",
//             "fields": {
//                 "Example": "$$\\begin{bmatrix} 1 & 2 \\\\ 3 & 4 \\end{bmatrix} \\begin{bmatrix} 5 & 6 \\\\ 7 & 8 \\end{bmatrix} = \\begin{bmatrix} 1(5) + 2(7) & 1(6) + 2(8) \\\\ 3(5) + 4(7) & 3(6) + 4(8) \\end{bmatrix} = \\begin{bmatrix} 19 & 22 \\\\ 43 & 50 \\end{bmatrix}$$",
//                 "Properties": "Not commutative: $AB \\neq BA \\\\$ Associative: $(AB)C = A(BC) \\\\$ Distributive: $A(B + C) = AB + AC$"
//             },
//             "category": "Matrix Operations"
//          },
//          {
//             "name": "Determinant",
//             "formula": "For square matrix $A$, denoted $\\det(A)$ or $|A|$",
//             "fields": {
//                 "$2 \\times 2$": "$$\\begin{vmatrix} a & b \\\\ c & d \\end{vmatrix} = ad - bc$$",
//                 "$3 \\times 3$": "$$\\begin{vmatrix} a_{11} & a_{12} & a_{13} \\\\ a_{21} & a_{22} & a_{23} \\\\ a_{31} & a_{32} & a_{33} \\end{vmatrix} = a_{11}a_{22}a_{33} + a_{12}a_{23}a_{31} + a_{13}a_{21}a_{32} - a_{13}a_{22}a_{31} - a_{11}a_{23}a_{32} - a_{12}a_{21}a_{33}$$",
//                 "Properties": "For square matrices: $\\\\ \\det(AB) = \\det(A)\\det(B) \\\\ \\det(A^T) = \\det(A) \\\\ A$ invertible $\\iff \\det(A) \\neq 0$"
//             },
//             "category": "Matrix Properties"
//          },
//          {
//             "name": "Inverse Matrix",
//             "formula": "For square matrix $A$, its inverse $A^{-1}$ satisfies $AA^{-1} = A^{-1}A = I$",
//             "fields": {
//                 "$2 \\times 2$": "For $A = \\begin{bmatrix} a & b \\\\ c & d \\end{bmatrix}$, if $\\det(A) \\neq 0$: $$A^{-1} = \\frac{1}{ad-bc}\\begin{bmatrix} d & -b \\\\ -c & a \\end{bmatrix}$$",
//                 "Properties": "$(A^{-1})^{-1} = A \\\\ (AB)^{-1} = B^{-1}A^{-1} \\\\ \\det(A^{-1}) = \\frac{1}{\\det(A)}$"
//             },
//             "category": "Matrix Properties"
//          },
//          {
//             "name": "Rank",
//             "formula": "Number of linearly independent rows/columns, denoted $\\text{rank}(A)$",
//             "fields": {
//                 "Properties": "$\\text{rank}(A) \\leq \\min(m,n)$ for $A_{m\\times n} \\\\ \\text{rank}(A) = \\text{rank}(A^T) \\\\ \\text{rank}(AB) \\leq \\min(\\text{rank}(A), \\text{rank}(B))$",
//                 "Full rank": "Matrix has maximum possible rank: $\\text{rank}(A) = \\min(m,n)$"
//             },
//             "category": "Matrix Properties"
//          },
//          {
//             "name": "Trace",
//             "formula": "Sum of main diagonal elements: $\\text{tr}(A) = \\sum_{i=1}^n a_{ii}$",
//             "fields": {
//                 "Example": "$$\\text{tr}\\begin{bmatrix} 2 & 1 \\\\ 4 & 3 \\end{bmatrix} = 2 + 3 = 5$$",
//                 "Properties": "$\\text{tr}(A + B) = \\text{tr}(A) + \\text{tr}(B) \\\\ \\text{tr}(AB) = \\text{tr}(BA) \\\\ \\text{tr}(cA) = c\\text{tr}(A)$"
//             },
//             "category": "Matrix Properties"
//          },
//          {
//             "name": "Echelon Form",
//             "formula": "Matrix where each row's leading non-zero entry (pivot) is to the right of pivots in rows above",
//             "fields": {
//                 "Example": "$$\\begin{bmatrix} 1 & 2 & 3 \\\\ 0 & 4 & 5 \\\\ 0 & 0 & 6 \\end{bmatrix}$$",
//                 "Properties": "Leading entry in any row is to the right of leading entries above $\\\\$ All zero rows are at the bottom $\\\\$ Each leading entry has zeros below it"
//             },
//             "category": "Matrix Transformations"
//          },
//          {
//             "name": "Reduced Row Echelon Form",
//             "formula": "Row echelon form where each pivot is 1 and is the only non-zero entry in its column",
//             "fields": {
//                 "Example": "$$\\begin{bmatrix} 1 & 0 & 0 & a \\\\ 0 & 1 & 0 & b \\\\ 0 & 0 & 1 & c \\end{bmatrix}$$",
//                 "Properties": "Leading 1s (pivots) are the only non-zero entries in their columns \n Each pivot is 1 \n Unique for each matrix \n Used in solving systems of equations"
//             },
//             "category": "Matrix Transformations"
//          },
//          {
//             "name": "Elementary Matrix",
//             "formula": "Matrix representing one elementary row operation on identity matrix",
//             "fields": {
//                 "Row swap": "$$E = \\begin{bmatrix} 0 & 1 & 0 \\\\ 1 & 0 & 0 \\\\ 0 & 0 & 1 \\end{bmatrix}$$ swaps rows 1 and 2",
//                 "Row scale": "$$E = \\begin{bmatrix} 2 & 0 & 0 \\\\ 0 & 1 & 0 \\\\ 0 & 0 & 1 \\end{bmatrix}$$ multiplies row 1 by 2",
//                 "Row addition": "$$E = \\begin{bmatrix} 1 & 0 & 0 \\\\ 3 & 1 & 0 \\\\ 0 & 0 & 1 \\end{bmatrix}$$ adds 3 times row 1 to row 2"
//             },
//             "category": "Special Matrices"
//          },
//          {
//             "name": "Orthogonal Matrix",
//             "formula": "Square matrix $A$ where $A^T = A^{-1}$, equivalently $AA^T = A^TA = I$",
//             "fields": {
//                 "Properties": "$\\det(A) = \\pm 1 \\\\ A^T A = AA^T = I \\\\ (AB)^T(AB) = I$ for orthogonal $A,B$",
//                 "Examples": "Rotation matrices: $$\\begin{bmatrix} \\cos\\theta & -\\sin\\theta \\\\ \\sin\\theta & \\cos\\theta \\end{bmatrix}$$ Reflection matrices: $$\\begin{bmatrix} \\cos 2\\theta & \\sin 2\\theta \\\\ \\sin 2\\theta & -\\cos 2\\theta \\end{bmatrix}$$",
//                 "Applications": "Preserve lengths and angles \n Used in rotations and reflections \n Important in orthogonal transformations"
//             },
//             "category": "Special Matrices"
//          },
//         {
//             name:"Scalar Matrix",
//             formula:"A [square matrix](!/linear-algebra/definitions#square_matrix) where all element are equal to zero except those on main diagonal which are equal to constant number.",
//             fields:{
//                 "$n \\times n$": "A scalar matrix is a diagonal matrix where all diagonal entries are equal: $$\\lambda I = \\begin{bmatrix} \\lambda & 0 & \\cdots & 0 \\\\ 0 & \\lambda & \\cdots & 0 \\\\ \\vdots & \\vdots & \\ddots & \\vdots \\\\ 0 & 0 & \\cdots & \\lambda \\end{bmatrix}$$ where $\\lambda$ is any real number",
//                 "$2 \\times 2$": "A 2×2 scalar matrix example: $$\\begin{bmatrix} 3 & 0 \\\\ 0 & 3 \\end{bmatrix}$$",
//                 "$3 \\times 3$": "A 3×3 scalar matrix example: $$\\begin{bmatrix} 5 & 0 & 0 \\\\ 0 & 5 & 0 \\\\ 0 & 0 & 5 \\end{bmatrix}$$",
                

//             },
//             category:"Special Matrices"

//         },
//         {
//             "name": "Adjoint",
//             "formula": "For matrix $A$, adjoint (adj$(A)$) is transpose of cofactor matrix",
//             "fields": {
//                 "$2 \\times 2$": "For $A = \\begin{bmatrix} a & b \\\\ c & d \\end{bmatrix}$: $$\\text{adj}(A) = \\begin{bmatrix} d & -c \\\\ -b & a \\end{bmatrix}$$",
//                 "Properties": "$A\\text{ adj}(A) = \\text{adj}(A)A = \\det(A)I \\\\ A^{-1} = \\frac{1}{\\det(A)}\\text{adj}(A)$ when $\\det(A) \\neq 0$"
//             },
//             "category": "Matrix Transformations"
//          },
//          {
//             "name": "Matrix Size",
//             "formula": "Matrix with $m$ rows and $n$ columns denoted as $A_{m\\times n}$ or $A \\in \\mathbb{R}^{m\\times n}$",
//             "fields": {
//                 "Types": "Square matrix: $m = n$\nRectangular matrix: $m \\neq n$\nColumn vector: $n = 1$\nRow vector: $m = 1$",
//                 "Properties": "For multiplication $AB$: $A_{m\\times n}B_{n\\times p} = C_{m\\times p}$"
//             },
//             "category": "Matrix Properties"
//          },
//          {
//             "name": "Eigenvalues",
//             "formula": "Scalar $\\lambda$ satisfying $Av = \\lambda v$ for nonzero vector $v$ (eigenvector)",
//             "fields": {
//                 "Calculation": "Found by solving characteristic equation: $$\\det(A - \\lambda I) = 0$$",
//                 "Properties": "$\\text{tr}(A) = \\sum \\lambda_i \\\\ \\det(A) = \\prod \\lambda_i \\\\ \\lambda(A^{-1}) = \\frac{1}{\\lambda(A)}$ if $A$ invertible",
//                 "Example": "For $A = \\begin{bmatrix} 3 & 1 \\\\ 0 & 2 \\end{bmatrix}$: $$\\det\\begin{bmatrix} 3-\\lambda & 1 \\\\ 0 & 2-\\lambda \\end{bmatrix} = 0 \\implies \\lambda = 2,3$$"
//             },
//             "category": "Matrix Properties"
//          },
//          {
//             "name": "Eigenvectors",
//             "formula": "Nonzero vector $v$ satisfying $Av = \\lambda v$ for eigenvalue $\\lambda$",
//             "fields": {
//                 "Properties": "$v_1,v_2$ with distinct $\\lambda_1,\\lambda_2$ are linearly independent\n$kv$ is also eigenvector if $v$ is eigenvector",
//                 "Example": "For $A = \\begin{bmatrix} 3 & 1 \\\\ 0 & 2 \\end{bmatrix}$ with $\\lambda = 3$:\n$$\\begin{bmatrix} 0 & 1 \\\\ 0 & -1 \\end{bmatrix}\\begin{bmatrix} x \\\\ y \\end{bmatrix} = \\begin{bmatrix} 0 \\\\ 0 \\end{bmatrix} \\implies v = \\begin{bmatrix} 1 \\\\ 0 \\end{bmatrix}$$"
//             },
//             "category": "Matrix Properties"
//          },
//          {
//             "name": "Singular Matrix",
//             "formula": "Square matrix with $\\det(A) = 0$",
//             "fields": {
//                 "Properties": "$\\text{rank}(A) < n$ for $n \\times n$ matrix\nSystem $Ax = b$ has no unique solution\nNon-invertible: $A^{-1}$ doesn't exist",
//                 "Example": "$$\\begin{bmatrix} 1 & 2 \\\\ 2 & 4 \\end{bmatrix}$$ has dependent rows/columns"
//             },
//             "category": "Special Matrices"
//          },
//          {
//             "name": "Augmented Matrix",
//             "formula": "Matrix $[A|b]$ representing system $Ax = b$",
//             "fields": {
//                 "Example": "System: $x + 2y = 5$ \n$3x - y = 1$ becomes:\n$$\\left[\\begin{array}{cc|c} 1 & 2 & 5 \\\\ 3 & -1 & 1 \\end{array}\\right]$$",
//                 "Applications": "Solve systems using row operations\nFind inverse matrix\nGaussian elimination"
//             },
//             "category": "Matrix Applications"
//          },
//          {
//             "name": "LU Decomposition",
//             "formula": "Matrix $A = LU$ where $L$ is lower triangular and $U$ is upper triangular",
//             "fields": {
//                 "Example": "$$\\begin{bmatrix} 2 & 1 \\\\ 8 & 7 \\end{bmatrix} = \\begin{bmatrix} 1 & 0 \\\\ 4 & 1 \\end{bmatrix}\\begin{bmatrix} 2 & 1 \\\\ 0 & 3 \\end{bmatrix}$$",
//                 "Applications": "Solve $Ax = b$ efficiently\nCompute determinant as product of diagonal entries\nFactorize once, solve for multiple $b$"
//             },
//             "category": "Matrix Transformations"
//          },
//          {
//             "name": "QR Decomposition",
//             "formula": "Matrix $A = QR$ where $Q$ is orthogonal ($Q^TQ = I$) and $R$ is upper triangular",
//             "fields": {
//                 "Properties": "$Q^TQ = QQ^T = I$\n$R_{ii} \\geq 0$ for standard QR",
//                 "Applications": "Solve least squares problems\nCompute eigenvalues\nSolve systems of equations"
//             },
//             "category": "Matrix Transformations"
//          },
//          {
//             "name": "Positive Definite Matrix",
//             "formula": "Symmetric matrix $A$ where $x^TAx > 0$ for all nonzero $x$",
//             "fields": {
//                 "Properties": "$\\lambda_i > 0$ for all eigenvalues\n$A^{-1}$ exists and is positive definite\n$x^TAx > 0$ for all $x \\neq 0$",
//                 "Example": "$$\\begin{bmatrix} 2 & -1 \\\\ -1 & 2 \\end{bmatrix}$$ with eigenvalues 1, 3",
//                 "Tests": "$\\det(A_k) > 0$ for all leading principal minors\nCholesky decomposition exists: $A = LL^T$"
//             },
//             "category": "Special Matrices"
//          },
//          {
//             "name": "Diagonalization",
//             "formula": "Matrix $A = PDP^{-1}$ where $D$ is diagonal matrix of eigenvalues",
//             "fields": {
//                 "Conditions": "Matrix $A$ is diagonalizable if:\n$n$ linearly independent eigenvectors exist\nGeometric multiplicity equals algebraic multiplicity",
//                 "Result": "$$D = \\begin{bmatrix} \\lambda_1 & 0 & \\cdots \\\\ 0 & \\lambda_2 & \\cdots \\\\ \\vdots & \\vdots & \\ddots \\end{bmatrix}$$ where $P$ columns are eigenvectors",
//                 "Applications": "Compute $A^n$ easily: $A^n = PD^nP^{-1}$\nSolve systems of differential equations"
//             },
//             "category": "Matrix Transformations"
//          },
//          {
//             "name": "Block Matrix",
//             "formula": "Matrix partitioned into submatrices $A_{ij}$",
//             "fields": {
//                 "Example": "$$\\begin{bmatrix} A_{11} & A_{12} \\\\ A_{21} & A_{22} \\end{bmatrix}$$ where each $A_{ij}$ is a matrix",
//                 "Operations": "$(AB)_{ij} = \\sum_k A_{ik}B_{kj}$\n$\\begin{bmatrix} A & B \\\\ C & D \\end{bmatrix}^{-1} = \\begin{bmatrix} P & Q \\\\ R & S \\end{bmatrix}$ (if exists)"
//             },
//             "category": "Special Matrices"
//          },
//          {
//             "name": "Sparse Matrix",
//             "formula": "Matrix with mostly zero elements, typically $O(n)$ nonzero elements",
//             "fields": {
//                 "Storage": "Store only nonzero elements with indices\nCompressed Row Storage (CRS)\nCompressed Column Storage (CCS)",
//                 "Example": "$$\\begin{bmatrix} 1 & 0 & 2 & 0 \\\\ 0 & 0 & 3 & 0 \\\\ 0 & 0 & 0 & 4 \\\\ 5 & 0 & 0 & 0 \\end{bmatrix}$$",
//                 "Applications": "Network adjacency matrices\nFinite element analysis\nLarge system solving"
//             },
//             "category": "Special Matrices"
//          }
    
    

];
 export default linearAlgebraTermsList;