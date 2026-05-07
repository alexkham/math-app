const linearAlgebraFormulasList = [
    // Linear Algebra Formulas — Batch 1A
// Section: /linear-algebra/formulas
// Categories: Representation (4), Operations (5), Norm & Distance (6)
// 15 entries



  // ═══════════════════════════════════════════
  // CATEGORY: Representation (4)
  // ═══════════════════════════════════════════

  {
    name: 'Vector Component Form',
    entity: 'vector',
    category: 'Representation',
    formula: `$$\\mathbf{v} = (v_1, v_2, \\ldots, v_n) \\in \\mathbb{R}^n$$`,
    link: { label: 'What Is a Vector', url: '/linear-algebra/vectors#1' },
    explanation: `An $n$-dimensional vector is specified as an ordered tuple of $n$ real numbers. Each entry $v_i$ is a component, encoding signed displacement along the $i$-th coordinate axis. The component form bridges the geometric picture (an arrow with magnitude and direction) and the algebraic object on which all subsequent operations act.`,
    notation: `Boldface $\\mathbf{v}$ or arrow $\\vec{v}$ distinguishes vectors from scalars. Column form $\\mathbf{v} = \\begin{pmatrix} v_1 \\\\ \\vdots \\\\ v_n \\end{pmatrix}$ is required when vectors interact with matrices on the right of a product.`,
    related_formulas: `- [Standard Basis Decomposition](!/linear-algebra/formulas#standard_basis_decomposition)
- [Euclidean Norm](!/linear-algebra/formulas#euclidean_norm)`,
    related_definitions: `- [Vector](!/linear-algebra/definitions#vector)
- [Scalar](!/linear-algebra/definitions#scalar)`,
  },

  {
    name: 'Standard Basis Decomposition',
    entity: 'vector',
    category: 'Representation',
    formula: `$$\\mathbf{v} = v_1 \\mathbf{e}_1 + v_2 \\mathbf{e}_2 + \\cdots + v_n \\mathbf{e}_n$$`,
    link: { label: 'Notation and Representation', url: '/linear-algebra/vectors#2' },
    explanation: `Every vector in $\\mathbb{R}^n$ is the linear combination of the standard basis vectors $\\mathbf{e}_i$, with the components $v_i$ themselves serving as the coefficients. The decomposition makes the link between coordinates and basis explicit — coordinates are the weights in the expansion against a fixed reference frame.`,
    notation: `In $\\mathbb{R}^3$ the standard basis is commonly written $\\mathbf{i} = (1,0,0)$, $\\mathbf{j} = (0,1,0)$, $\\mathbf{k} = (0,0,1)$. In general $\\mathbb{R}^n$, the notation $\\mathbf{e}_1, \\ldots, \\mathbf{e}_n$ is standard, where $\\mathbf{e}_i$ has a $1$ in position $i$ and zeros elsewhere.`,
    related_formulas: `- [Vector Component Form](!/linear-algebra/formulas#vector_component_form)
- [Linear Combination](!/linear-algebra/formulas#linear_combination)`,
    related_definitions: `- [Vector](!/linear-algebra/definitions#vector)
- [Basis](!/linear-algebra/definitions#basis)
- [Linear Combination](!/linear-algebra/definitions#linear_combination)`,
  },

  {
    name: 'Direction Cosines',
    entity: 'vector',
    category: 'Representation',
    formula: `$$\\cos\\alpha = \\frac{v_1}{\\|\\mathbf{v}\\|}, \\quad \\cos\\beta = \\frac{v_2}{\\|\\mathbf{v}\\|}, \\quad \\cos\\gamma = \\frac{v_3}{\\|\\mathbf{v}\\|}$$`,
    link: { label: '', url: '' }, // TODO: target /linear-algebra/vectors/properties — not currently displayed
    explanation: `The direction cosines are the cosines of the angles a nonzero vector makes with the three positive coordinate axes in $\\mathbb{R}^3$. They package directional information into three scalars and depend only on the unit vector $\\hat{\\mathbf{v}} = \\mathbf{v}/\\|\\mathbf{v}\\|$, not on the length of $\\mathbf{v}$.`,
    conditions: `Defined for nonzero vectors only. Generalizes to $\\mathbb{R}^n$ as $\\cos\\theta_i = v_i / \\|\\mathbf{v}\\|$ for $i = 1, \\ldots, n$.`,
    related_formulas: `- [Direction Cosines Identity](!/linear-algebra/formulas#direction_cosines_identity)
- [Vector Normalization](!/linear-algebra/formulas#vector_normalization)`,
    related_definitions: `- [Vector](!/linear-algebra/definitions#vector)
- [Unit Vector](!/linear-algebra/definitions#unit_vector)`,
  },

  {
    name: 'Direction Cosines Identity',
    entity: 'vector',
    category: 'Representation',
    formula: `$$\\cos^2\\alpha + \\cos^2\\beta + \\cos^2\\gamma = 1$$`,
    link: { label: '', url: '' }, // TODO: target /linear-algebra/vectors/properties — not currently displayed
    explanation: `The three direction cosines of a vector in $\\mathbb{R}^3$ are not independent — their squares sum to $1$. This identity follows directly from $\\|\\hat{\\mathbf{v}}\\|^2 = 1$ when $\\hat{\\mathbf{v}}$ is expressed in components.`,
    derivation: `$\\hat{\\mathbf{v}} = (\\cos\\alpha, \\cos\\beta, \\cos\\gamma)$ is a unit vector, so $\\|\\hat{\\mathbf{v}}\\|^2 = \\cos^2\\alpha + \\cos^2\\beta + \\cos^2\\gamma = 1$.`,
    related_formulas: `- [Direction Cosines](!/linear-algebra/formulas#direction_cosines)
- [Vector Normalization](!/linear-algebra/formulas#vector_normalization)`,
    related_definitions: `- [Unit Vector](!/linear-algebra/definitions#unit_vector)`,
  },

  // ═══════════════════════════════════════════
  // CATEGORY: Operations (5)
  // ═══════════════════════════════════════════

  {
    name: 'Vector Addition',
    entity: 'vector',
    category: 'Operations',
    formula: `$$\\mathbf{a} + \\mathbf{b} = (a_1 + b_1,\\ a_2 + b_2,\\ \\ldots,\\ a_n + b_n)$$`,
    link: { label: 'Vector Addition', url: '/linear-algebra/vectors/basic-operations#1' },
    explanation: `Addition pairs corresponding components and sums them. The result is again a vector in the same $\\mathbb{R}^n$. Geometrically, the tip-to-tail or parallelogram constructions both produce the same sum.`,
    conditions: `Both vectors must lie in the same $\\mathbb{R}^n$. Adding vectors of different dimensions is undefined.`,
    related_formulas: `- [Vector Subtraction](!/linear-algebra/formulas#vector_subtraction)
- [Scalar Multiplication of Vectors](!/linear-algebra/formulas#scalar_multiplication_of_vectors)`,
    related_definitions: `- [Vector](!/linear-algebra/definitions#vector)`,
  },

  {
    name: 'Vector Subtraction',
    entity: 'vector',
    category: 'Operations',
    formula: `$$\\mathbf{a} - \\mathbf{b} = \\mathbf{a} + (-\\mathbf{b}) = (a_1 - b_1,\\ a_2 - b_2,\\ \\ldots,\\ a_n - b_n)$$`,
    link: { label: 'Vector Subtraction', url: '/linear-algebra/vectors/basic-operations#3' },
    explanation: `Subtraction is addition combined with negation. Geometrically, with $\\mathbf{a}$ and $\\mathbf{b}$ drawn from a common tail, the difference $\\mathbf{a} - \\mathbf{b}$ runs from the tip of $\\mathbf{b}$ to the tip of $\\mathbf{a}$. This connects subtraction directly to distance: $d(\\mathbf{a}, \\mathbf{b}) = \\|\\mathbf{a} - \\mathbf{b}\\|$.`,
    related_formulas: `- [Vector Addition](!/linear-algebra/formulas#vector_addition)
- [Distance Formula](!/linear-algebra/formulas#distance_formula)`,
    related_definitions: `- [Vector](!/linear-algebra/definitions#vector)`,
  },

  {
    name: 'Scalar Multiplication of Vectors',
    entity: 'vector',
    category: 'Operations',
    formula: `$$c\\mathbf{a} = (ca_1,\\ ca_2,\\ \\ldots,\\ ca_n)$$`,
    link: { label: 'Scalar Multiplication', url: '/linear-algebra/vectors/basic-operations#4' },
    explanation: `Multiplying a vector by a scalar $c$ scales every component by $c$. Geometrically, the result has length $|c|\\,\\|\\mathbf{a}\\|$ and points in the same direction as $\\mathbf{a}$ when $c > 0$, the opposite direction when $c < 0$, and collapses to $\\mathbf{0}$ when $c = 0$.`,
    related_formulas: `- [Vector Addition](!/linear-algebra/formulas#vector_addition)
- [Norm Scaling Property](!/linear-algebra/formulas#norm_scaling_property)`,
    related_definitions: `- [Vector](!/linear-algebra/definitions#vector)
- [Scalar](!/linear-algebra/definitions#scalar)`,
  },

  {
    name: 'Linear Combination',
    entity: 'linear_combination',
    category: 'Operations',
    formula: `$$c_1 \\mathbf{v}_1 + c_2 \\mathbf{v}_2 + \\cdots + c_k \\mathbf{v}_k$$`,
    link: { label: 'Linear Combinations', url: '/linear-algebra/vectors/linear-combinations#1' },
    explanation: `A weighted sum of vectors, with scalar weights $c_i \\in \\mathbb{R}$. Vector addition and scalar multiplication are both special cases. Asking whether a vector $\\mathbf{b}$ is a linear combination of $\\mathbf{v}_1, \\ldots, \\mathbf{v}_k$ is equivalent to asking whether the system $A\\mathbf{x} = \\mathbf{b}$ has a solution, where $A$ has the $\\mathbf{v}_i$ as columns.`,
    related_formulas: `- [Span](!/linear-algebra/formulas#span)
- [Standard Basis Decomposition](!/linear-algebra/formulas#standard_basis_decomposition)`,
    related_definitions: `- [Linear Combination](!/linear-algebra/definitions#linear_combination)
- [Span](!/linear-algebra/definitions#span)
- [Linear Independence](!/linear-algebra/definitions#linear_independence)`,
  },

  {
    name: 'Span',
    entity: 'linear_combination',
    category: 'Operations',
    formula: `$$\\text{Span}\\{\\mathbf{v}_1, \\ldots, \\mathbf{v}_k\\} = \\{c_1 \\mathbf{v}_1 + \\cdots + c_k \\mathbf{v}_k \\mid c_i \\in \\mathbb{R}\\}$$`,
    link: { label: 'Span', url: '/linear-algebra/vectors/linear-combinations#3' },
    explanation: `The span is the set of every linear combination of the given vectors. It is always a subspace of $\\mathbb{R}^n$ containing the zero vector. The geometric shape reflects the input — a line for one nonzero vector, a plane for two non-parallel vectors, all of $\\mathbb{R}^n$ for $n$ linearly independent vectors.`,
    related_formulas: `- [Linear Combination](!/linear-algebra/formulas#linear_combination)`,
    related_definitions: `- [Span](!/linear-algebra/definitions#span)
- [Linear Combination](!/linear-algebra/definitions#linear_combination)
- [Subspace](!/linear-algebra/definitions#subspace)`,
  },

  // ═══════════════════════════════════════════
  // CATEGORY: Norm & Distance (6)
  // ═══════════════════════════════════════════

  {
    name: 'Euclidean Norm',
    entity: 'magnitude',
    category: 'Norm & Distance',
    formula: `$$\\|\\mathbf{v}\\| = \\sqrt{v_1^2 + v_2^2 + \\cdots + v_n^2} = \\sqrt{\\sum_{i=1}^{n} v_i^2}$$`,
    link: { label: 'The General Norm', url: '/linear-algebra/vectors/magnitude#2' },
    explanation: `The norm assigns a single non-negative real number — the length — to every vector in $\\mathbb{R}^n$. In $\\mathbb{R}^2$ and $\\mathbb{R}^3$ this matches the geometric length via the Pythagorean theorem; the formula extends the concept algebraically to any dimension.`,
    derivation: `In $\\mathbb{R}^2$, the Pythagorean theorem on the right triangle with legs $v_1$ and $v_2$ gives $\\|\\mathbf{v}\\|^2 = v_1^2 + v_2^2$. In $\\mathbb{R}^3$, applying the theorem twice — once in the $xy$-plane to get $\\sqrt{v_1^2 + v_2^2}$, then again with the vertical component $v_3$ — yields $\\|\\mathbf{v}\\|^2 = v_1^2 + v_2^2 + v_3^2$. The pattern continues by induction in higher dimensions.`,
    related_formulas: `- [Distance Formula](!/linear-algebra/formulas#distance_formula)
- [Vector Normalization](!/linear-algebra/formulas#vector_normalization)
- [Self Dot Product](!/linear-algebra/formulas#self_dot_product)`,
    related_definitions: `- [Magnitude](!/linear-algebra/definitions#magnitude)
- [Vector](!/linear-algebra/definitions#vector)`,
  },

  {
    name: 'Distance Formula',
    entity: 'magnitude',
    category: 'Norm & Distance',
    formula: `$$d(\\mathbf{a}, \\mathbf{b}) = \\|\\mathbf{a} - \\mathbf{b}\\| = \\sqrt{(a_1 - b_1)^2 + (a_2 - b_2)^2 + \\cdots + (a_n - b_n)^2}$$`,
    link: { label: 'Distance Between Vectors', url: '/linear-algebra/vectors/magnitude#4' },
    explanation: `The Euclidean distance between two vectors is the norm of their difference. For position vectors, this is the straight-line distance between the points they identify. The distance is symmetric, non-negative, and zero only when $\\mathbf{a} = \\mathbf{b}$.`,
    related_formulas: `- [Euclidean Norm](!/linear-algebra/formulas#euclidean_norm)
- [Vector Subtraction](!/linear-algebra/formulas#vector_subtraction)`,
    related_definitions: `- [Magnitude](!/linear-algebra/definitions#magnitude)`,
  },

  {
    name: 'Vector Normalization',
    entity: 'unit_vector',
    category: 'Norm & Distance',
    formula: `$$\\hat{\\mathbf{v}} = \\frac{\\mathbf{v}}{\\|\\mathbf{v}\\|}$$`,
    link: { label: 'Normalization', url: '/linear-algebra/vectors/magnitude#6' },
    explanation: `Dividing a nonzero vector by its norm produces the unit vector pointing in the same direction. Normalization extracts pure direction by stripping out length information.`,
    conditions: `Defined only for $\\mathbf{v} \\neq \\mathbf{0}$. The zero vector cannot be normalized — it has no direction.`,
    derivation: `By the norm scaling property, $\\|\\hat{\\mathbf{v}}\\| = \\left\\|\\frac{\\mathbf{v}}{\\|\\mathbf{v}\\|}\\right\\| = \\frac{\\|\\mathbf{v}\\|}{\\|\\mathbf{v}\\|} = 1$. Since $1/\\|\\mathbf{v}\\| > 0$, the direction is preserved.`,
    related_formulas: `- [Euclidean Norm](!/linear-algebra/formulas#euclidean_norm)
- [Norm Scaling Property](!/linear-algebra/formulas#norm_scaling_property)
- [Direction Cosines](!/linear-algebra/formulas#direction_cosines)`,
    related_definitions: `- [Unit Vector](!/linear-algebra/definitions#unit_vector)
- [Magnitude](!/linear-algebra/definitions#magnitude)`,
  },

  {
    name: 'Norm Scaling Property',
    entity: 'magnitude',
    category: 'Norm & Distance',
    formula: `$$\\|c\\mathbf{v}\\| = |c|\\,\\|\\mathbf{v}\\|$$`,
    link: { label: 'Properties of the Norm', url: '/linear-algebra/vectors/magnitude#3' },
    explanation: `Multiplying a vector by a scalar $c$ multiplies its norm by $|c|$. The absolute value is required because a negative scalar reverses direction without producing a negative length.`,
    derivation: `$\\|c\\mathbf{v}\\|^2 = (c v_1)^2 + \\cdots + (c v_n)^2 = c^2(v_1^2 + \\cdots + v_n^2) = c^2 \\|\\mathbf{v}\\|^2$. Taking square roots gives $\\|c\\mathbf{v}\\| = |c|\\,\\|\\mathbf{v}\\|$.`,
    related_formulas: `- [Euclidean Norm](!/linear-algebra/formulas#euclidean_norm)
- [Scalar Multiplication of Vectors](!/linear-algebra/formulas#scalar_multiplication_of_vectors)`,
    related_definitions: `- [Magnitude](!/linear-algebra/definitions#magnitude)`,
  },

  {
    name: 'Triangle Inequality',
    entity: 'magnitude',
    category: 'Norm & Distance',
    formula: `$$\\|\\mathbf{a} + \\mathbf{b}\\| \\leq \\|\\mathbf{a}\\| + \\|\\mathbf{b}\\|$$`,
    link: { label: 'Properties of the Norm', url: '/linear-algebra/vectors/magnitude#3' },
    explanation: `The length of a sum never exceeds the sum of the lengths. Geometrically, the direct path from start to finish in the tip-to-tail construction is no longer than the path that traces both vectors end to end.`,
    conditions: `Equality holds if and only if $\\mathbf{a}$ and $\\mathbf{b}$ point in the same direction (one is a non-negative scalar multiple of the other).`,
    derivation: `Square both sides and use $\\|\\mathbf{a} + \\mathbf{b}\\|^2 = \\|\\mathbf{a}\\|^2 + 2(\\mathbf{a} \\cdot \\mathbf{b}) + \\|\\mathbf{b}\\|^2$. By Cauchy–Schwarz, $\\mathbf{a} \\cdot \\mathbf{b} \\leq \\|\\mathbf{a}\\|\\,\\|\\mathbf{b}\\|$, so $\\|\\mathbf{a} + \\mathbf{b}\\|^2 \\leq \\|\\mathbf{a}\\|^2 + 2\\|\\mathbf{a}\\|\\,\\|\\mathbf{b}\\| + \\|\\mathbf{b}\\|^2 = (\\|\\mathbf{a}\\| + \\|\\mathbf{b}\\|)^2$. Taking square roots gives the inequality.`,
    related_formulas: `- [Cauchy-Schwarz Inequality](!/linear-algebra/formulas#cauchy_schwarz_inequality)
- [Euclidean Norm](!/linear-algebra/formulas#euclidean_norm)`,
    related_definitions: `- [Magnitude](!/linear-algebra/definitions#magnitude)`,
  },

  {
    name: 'Cauchy-Schwarz Inequality',
    entity: 'dot_product',
    category: 'Norm & Distance',
    formula: `$$|\\mathbf{a} \\cdot \\mathbf{b}| \\leq \\|\\mathbf{a}\\|\\,\\|\\mathbf{b}\\|$$`,
    link: { label: 'The Cauchy–Schwarz Inequality', url: '/linear-algebra/vectors/dot-product#8' },
    explanation: `The absolute value of the dot product is bounded by the product of the norms. This bound makes the angle formula well-posed — the ratio $\\frac{\\mathbf{a} \\cdot \\mathbf{b}}{\\|\\mathbf{a}\\|\\,\\|\\mathbf{b}\\|}$ always lies in $[-1, 1]$, where $\\arccos$ is defined.`,
    conditions: `Equality holds if and only if $\\mathbf{a}$ and $\\mathbf{b}$ are parallel (one is a scalar multiple of the other).`,
    derivation: `Geometric: $|\\mathbf{a} \\cdot \\mathbf{b}| = \\|\\mathbf{a}\\|\\,\\|\\mathbf{b}\\|\\,|\\cos\\theta| \\leq \\|\\mathbf{a}\\|\\,\\|\\mathbf{b}\\|$ since $|\\cos\\theta| \\leq 1$. Algebraic: $\\|\\mathbf{a} - t\\mathbf{b}\\|^2 \\geq 0$ for all real $t$ defines a non-negative quadratic in $t$, whose discriminant must be $\\leq 0$. Writing this out yields $(\\mathbf{a} \\cdot \\mathbf{b})^2 \\leq \\|\\mathbf{a}\\|^2 \\|\\mathbf{b}\\|^2$.`,
    related_formulas: `- [Triangle Inequality](!/linear-algebra/formulas#triangle_inequality)
- [Angle Between Vectors](!/linear-algebra/formulas#angle_between_vectors)
- [Dot Product (Geometric)](!/linear-algebra/formulas#dot_product_geometric)`,
    related_definitions: `- [Dot Product](!/linear-algebra/definitions#dot_product)
- [Inner Product](!/linear-algebra/definitions#inner_product)
- [Magnitude](!/linear-algebra/definitions#magnitude)`,
  },

// Linear Algebra Formulas — Batch 1B
// Section: /linear-algebra/formulas
// Categories: Dot Product (8), Cross Product (8), Triple Products (4)
// 20 entries



  // ═══════════════════════════════════════════
  // CATEGORY: Dot Product (8)
  // ═══════════════════════════════════════════

  {
    name: 'Dot Product (Algebraic)',
    entity: 'dot_product',
    category: 'Dot Product',
    formula: `$$\\mathbf{a} \\cdot \\mathbf{b} = a_1 b_1 + a_2 b_2 + \\cdots + a_n b_n = \\sum_{i=1}^{n} a_i b_i$$`,
    link: { label: 'Algebraic Definition', url: '/linear-algebra/vectors/dot-product#1' },
    explanation: `The dot product collapses two vectors into a single scalar by multiplying corresponding components and summing the results. Unlike addition or scalar multiplication, the output is not a vector — it is a number that measures how the two vectors relate.`,
    conditions: `Both vectors must lie in the same $\\mathbb{R}^n$. The formula extends to any $n$ without modification.`,
    related_formulas: `- [Dot Product (Geometric)](!/linear-algebra/formulas#dot_product_geometric)
- [Self Dot Product](!/linear-algebra/formulas#self_dot_product)
- [Orthogonality Condition](!/linear-algebra/formulas#orthogonality_condition)`,
    related_definitions: `- [Dot Product](!/linear-algebra/definitions#dot_product)
- [Inner Product](!/linear-algebra/definitions#inner_product)`,
  },

  {
    name: 'Dot Product (Geometric)',
    entity: 'dot_product',
    category: 'Dot Product',
    formula: `$$\\mathbf{a} \\cdot \\mathbf{b} = \\|\\mathbf{a}\\|\\,\\|\\mathbf{b}\\|\\cos\\theta$$`,
    link: { label: 'Geometric Definition', url: '/linear-algebra/vectors/dot-product#2' },
    explanation: `The dot product equals the product of the norms scaled by the cosine of the angle between the vectors. This form reveals what the dot product measures — directional alignment. It is positive for acute angles, zero for perpendicular vectors, and negative for obtuse angles.`,
    conditions: `Both vectors nonzero, with $\\theta \\in [0, \\pi]$ the angle between them when drawn from a common point.`,
    derivation: `Apply the law of cosines to the triangle with sides $\\mathbf{a}$, $\\mathbf{b}$, $\\mathbf{a} - \\mathbf{b}$: $\\|\\mathbf{a} - \\mathbf{b}\\|^2 = \\|\\mathbf{a}\\|^2 + \\|\\mathbf{b}\\|^2 - 2\\|\\mathbf{a}\\|\\,\\|\\mathbf{b}\\|\\cos\\theta$. Expand the left side as $(\\mathbf{a} - \\mathbf{b}) \\cdot (\\mathbf{a} - \\mathbf{b}) = \\|\\mathbf{a}\\|^2 - 2(\\mathbf{a} \\cdot \\mathbf{b}) + \\|\\mathbf{b}\\|^2$. Equating and cancelling yields $\\mathbf{a} \\cdot \\mathbf{b} = \\|\\mathbf{a}\\|\\,\\|\\mathbf{b}\\|\\cos\\theta$.`,
    related_formulas: `- [Dot Product (Algebraic)](!/linear-algebra/formulas#dot_product_algebraic)
- [Angle Between Vectors](!/linear-algebra/formulas#angle_between_vectors)
- [Cauchy-Schwarz Inequality](!/linear-algebra/formulas#cauchy_schwarz_inequality)`,
    related_definitions: `- [Dot Product](!/linear-algebra/definitions#dot_product)`,
  },

  {
    name: 'Angle Between Vectors',
    entity: 'dot_product',
    category: 'Dot Product',
    formula: `$$\\cos\\theta = \\frac{\\mathbf{a} \\cdot \\mathbf{b}}{\\|\\mathbf{a}\\|\\,\\|\\mathbf{b}\\|}$$`,
    link: { label: 'The Angle Between Vectors', url: '/linear-algebra/vectors/dot-product#5' },
    explanation: `Solving the geometric form of the dot product for $\\cos\\theta$ extracts the angle between two vectors from their components. The right side equals $\\hat{\\mathbf{a}} \\cdot \\hat{\\mathbf{b}}$ — the dot product of the normalized vectors — confirming that the angle depends only on direction, not magnitude.`,
    conditions: `Defined only for nonzero $\\mathbf{a}$ and $\\mathbf{b}$. The Cauchy–Schwarz inequality guarantees the right side lies in $[-1, 1]$, so $\\arccos$ produces a valid angle in $[0, \\pi]$. In dimensions $n > 3$, this formula serves as the definition of the angle between two vectors.`,
    related_formulas: `- [Dot Product (Geometric)](!/linear-algebra/formulas#dot_product_geometric)
- [Cauchy-Schwarz Inequality](!/linear-algebra/formulas#cauchy_schwarz_inequality)
- [Orthogonality Condition](!/linear-algebra/formulas#orthogonality_condition)`,
    related_definitions: `- [Dot Product](!/linear-algebra/definitions#dot_product)`,
  },

  {
    name: 'Self Dot Product',
    entity: 'dot_product',
    category: 'Dot Product',
    formula: `$$\\mathbf{v} \\cdot \\mathbf{v} = v_1^2 + v_2^2 + \\cdots + v_n^2 = \\|\\mathbf{v}\\|^2$$`,
    link: { label: 'Properties of the Dot Product', url: '/linear-algebra/vectors/dot-product#4' },
    explanation: `The dot product of a vector with itself equals the square of its norm. This identity ties the algebraic operation directly to length — squared length is not a separate concept but a special case of the dot product. It also gives an alternative norm formula: $\\|\\mathbf{v}\\| = \\sqrt{\\mathbf{v} \\cdot \\mathbf{v}}$.`,
    related_formulas: `- [Euclidean Norm](!/linear-algebra/formulas#euclidean_norm)
- [Dot Product (Algebraic)](!/linear-algebra/formulas#dot_product_algebraic)`,
    related_definitions: `- [Dot Product](!/linear-algebra/definitions#dot_product)
- [Magnitude](!/linear-algebra/definitions#magnitude)`,
  },

  {
    name: 'Orthogonality Condition',
    entity: 'orthogonal_vectors',
    category: 'Dot Product',
    formula: `$$\\mathbf{a} \\cdot \\mathbf{b} = 0 \\iff \\mathbf{a} \\perp \\mathbf{b}$$`,
    link: { label: 'Orthogonality', url: '/linear-algebra/vectors/dot-product#7' },
    explanation: `Two vectors are orthogonal precisely when their dot product is zero. In $\\mathbb{R}^2$ and $\\mathbb{R}^3$ this matches geometric perpendicularity; in higher dimensions, the algebraic condition serves as the definition. The zero vector is orthogonal to every vector by convention.`,
    conditions: `Holds in any $\\mathbb{R}^n$ and generalizes to any inner product space.`,
    related_formulas: `- [Dot Product (Geometric)](!/linear-algebra/formulas#dot_product_geometric)
- [Angle Between Vectors](!/linear-algebra/formulas#angle_between_vectors)
- [Parallelism Test (Cross Product)](!/linear-algebra/formulas#parallelism_test_cross_product)`,
    related_definitions: `- [Orthogonal Vectors](!/linear-algebra/definitions#orthogonal_vectors)
- [Dot Product](!/linear-algebra/definitions#dot_product)`,
  },

  {
    name: 'Scalar Projection',
    entity: 'dot_product',
    category: 'Dot Product',
    formula: `$$\\text{comp}_{\\mathbf{b}}\\,\\mathbf{a} = \\frac{\\mathbf{a} \\cdot \\mathbf{b}}{\\|\\mathbf{b}\\|}$$`,
    link: { label: 'Orthogonal Projection', url: '/linear-algebra/vectors/dot-product#9' },
    explanation: `The signed length of the projection of $\\mathbf{a}$ onto the direction of $\\mathbf{b}$. Positive when $\\mathbf{a}$ leans toward $\\mathbf{b}$, negative when away, zero when orthogonal. The result is a scalar carrying signed-distance information along the direction of $\\mathbf{b}$.`,
    conditions: `Requires $\\mathbf{b} \\neq \\mathbf{0}$.`,
    related_formulas: `- [Vector Projection](!/linear-algebra/formulas#vector_projection)
- [Orthogonal Decomposition](!/linear-algebra/formulas#orthogonal_decomposition)`,
    related_definitions: `- [Dot Product](!/linear-algebra/definitions#dot_product)`,
  },

  {
    name: 'Vector Projection',
    entity: 'dot_product',
    category: 'Dot Product',
    formula: `$$\\text{proj}_{\\mathbf{b}}\\,\\mathbf{a} = \\frac{\\mathbf{a} \\cdot \\mathbf{b}}{\\|\\mathbf{b}\\|^2}\\,\\mathbf{b} = \\frac{\\mathbf{a} \\cdot \\mathbf{b}}{\\mathbf{b} \\cdot \\mathbf{b}}\\,\\mathbf{b}$$`,
    link: { label: 'Orthogonal Projection', url: '/linear-algebra/vectors/dot-product#9' },
    explanation: `The component of $\\mathbf{a}$ in the direction of $\\mathbf{b}$, expressed as an actual vector parallel to $\\mathbf{b}$. The scalar projection rescaled by $\\mathbf{b}/\\|\\mathbf{b}\\|$ to produce a vector with the appropriate length and orientation.`,
    conditions: `Requires $\\mathbf{b} \\neq \\mathbf{0}$.`,
    related_formulas: `- [Scalar Projection](!/linear-algebra/formulas#scalar_projection)
- [Orthogonal Decomposition](!/linear-algebra/formulas#orthogonal_decomposition)`,
    related_definitions: `- [Dot Product](!/linear-algebra/definitions#dot_product)`,
  },

  {
    name: 'Orthogonal Decomposition',
    entity: 'orthogonal_vectors',
    category: 'Dot Product',
    formula: `$$\\mathbf{a} = \\text{proj}_{\\mathbf{b}}\\,\\mathbf{a} + \\mathbf{a}_{\\perp}, \\quad \\mathbf{a}_{\\perp} = \\mathbf{a} - \\text{proj}_{\\mathbf{b}}\\,\\mathbf{a}$$`,
    link: { label: 'Orthogonal Projection', url: '/linear-algebra/vectors/dot-product#9' },
    explanation: `Every vector $\\mathbf{a}$ splits uniquely into a component along $\\mathbf{b}$ and a component perpendicular to $\\mathbf{b}$. The perpendicular part satisfies $\\mathbf{a}_{\\perp} \\cdot \\mathbf{b} = 0$. This decomposition underlies Gram–Schmidt orthogonalization and least-squares fitting.`,
    conditions: `Requires $\\mathbf{b} \\neq \\mathbf{0}$.`,
    derivation: `Verify orthogonality: $\\mathbf{a}_{\\perp} \\cdot \\mathbf{b} = (\\mathbf{a} - \\text{proj}_{\\mathbf{b}}\\,\\mathbf{a}) \\cdot \\mathbf{b} = \\mathbf{a} \\cdot \\mathbf{b} - \\frac{\\mathbf{a} \\cdot \\mathbf{b}}{\\mathbf{b} \\cdot \\mathbf{b}}(\\mathbf{b} \\cdot \\mathbf{b}) = \\mathbf{a} \\cdot \\mathbf{b} - \\mathbf{a} \\cdot \\mathbf{b} = 0$.`,
    related_formulas: `- [Vector Projection](!/linear-algebra/formulas#vector_projection)
- [Scalar Projection](!/linear-algebra/formulas#scalar_projection)
- [Orthogonality Condition](!/linear-algebra/formulas#orthogonality_condition)`,
    related_definitions: `- [Orthogonal Vectors](!/linear-algebra/definitions#orthogonal_vectors)
- [Dot Product](!/linear-algebra/definitions#dot_product)`,
  },

  // ═══════════════════════════════════════════
  // CATEGORY: Cross Product (8)
  // ═══════════════════════════════════════════

  {
    name: 'Cross Product (Component Form)',
    entity: 'cross_product',
    category: 'Cross Product',
    formula: `$$\\mathbf{a} \\times \\mathbf{b} = (a_2 b_3 - a_3 b_2,\\ a_3 b_1 - a_1 b_3,\\ a_1 b_2 - a_2 b_1)$$`,
    link: { label: 'Algebraic Definition', url: '/linear-algebra/vectors/cross-product#1' },
    explanation: `The cross product takes two vectors in $\\mathbb{R}^3$ and returns a third vector built from cyclic differences of pairwise products. Unlike the dot product, the output is a vector — perpendicular to both inputs — and the operation is defined exclusively in three dimensions.`,
    conditions: `Both vectors must lie in $\\mathbb{R}^3$. No analogue exists in $\\mathbb{R}^n$ for $n \\neq 3$ (in $\\mathbb{R}^7$ a related construction exists, but it is not part of standard linear algebra).`,
    related_formulas: `- [Cross Product (Determinant Form)](!/linear-algebra/formulas#cross_product_determinant_form)
- [Cross Product Magnitude](!/linear-algebra/formulas#cross_product_magnitude)
- [Standard Basis Cross Products](!/linear-algebra/formulas#standard_basis_cross_products)`,
    related_definitions: `- [Cross Product](!/linear-algebra/definitions#cross_product)`,
  },

  {
    name: 'Cross Product (Determinant Form)',
    entity: 'cross_product',
    category: 'Cross Product',
    formula: `$$\\mathbf{a} \\times \\mathbf{b} = \\begin{vmatrix} \\mathbf{i} & \\mathbf{j} & \\mathbf{k} \\\\ a_1 & a_2 & a_3 \\\\ b_1 & b_2 & b_3 \\end{vmatrix}$$`,
    link: { label: 'Algebraic Definition', url: '/linear-algebra/vectors/cross-product#1' },
    explanation: `A symbolic $3 \\times 3$ determinant with the standard basis vectors in the first row. Cofactor expansion along that row reproduces the component formula term by term. Placing vectors in the top row makes this a notational device rather than a true determinant, but it is the standard mnemonic for organizing the six products and their signs.`,
    conditions: `Restricted to $\\mathbb{R}^3$.`,
    related_formulas: `- [Cross Product (Component Form)](!/linear-algebra/formulas#cross_product_component_form)
- [Scalar Triple Product](!/linear-algebra/formulas#scalar_triple_product)`,
    related_definitions: `- [Cross Product](!/linear-algebra/definitions#cross_product)
- [Determinant](!/linear-algebra/definitions#determinant)`,
  },

  {
    name: 'Cross Product Magnitude',
    entity: 'cross_product',
    category: 'Cross Product',
    formula: `$$\\|\\mathbf{a} \\times \\mathbf{b}\\| = \\|\\mathbf{a}\\|\\,\\|\\mathbf{b}\\|\\sin\\theta$$`,
    link: { label: 'Geometric Interpretation', url: '/linear-algebra/vectors/cross-product#3' },
    explanation: `The length of $\\mathbf{a} \\times \\mathbf{b}$ equals the area of the parallelogram spanned by $\\mathbf{a}$ and $\\mathbf{b}$. The cross product peaks at $\\theta = \\pi/2$ (rectangle, maximum area) and vanishes at $\\theta = 0$ or $\\pi$ (parallel vectors, no area). This complements the dot product, which involves $\\cos\\theta$ rather than $\\sin\\theta$.`,
    conditions: `$\\theta \\in [0, \\pi]$ is the angle between the vectors. Restricted to $\\mathbb{R}^3$.`,
    related_formulas: `- [Parallelogram Area](!/linear-algebra/formulas#parallelogram_area)
- [Parallelism Test (Cross Product)](!/linear-algebra/formulas#parallelism_test_cross_product)
- [Dot Product (Geometric)](!/linear-algebra/formulas#dot_product_geometric)`,
    related_definitions: `- [Cross Product](!/linear-algebra/definitions#cross_product)`,
  },

  {
    name: 'Standard Basis Cross Products',
    entity: 'cross_product',
    category: 'Cross Product',
    formula: `$$\\mathbf{i} \\times \\mathbf{j} = \\mathbf{k}, \\quad \\mathbf{j} \\times \\mathbf{k} = \\mathbf{i}, \\quad \\mathbf{k} \\times \\mathbf{i} = \\mathbf{j}$$`,
    link: { label: 'Standard Basis Cross Products', url: '/linear-algebra/vectors/cross-product#2' },
    explanation: `The cross products of the standard basis vectors follow a cyclic loop $\\mathbf{i} \\to \\mathbf{j} \\to \\mathbf{k} \\to \\mathbf{i}$. Going forward around the loop yields a positive basis vector; reversing the order negates the result. Any cross product in $\\mathbb{R}^3$ reduces to these nine cases via distributivity.`,
    variants: `Reversed pairs flip sign:
$$\\mathbf{j} \\times \\mathbf{i} = -\\mathbf{k}, \\quad \\mathbf{k} \\times \\mathbf{j} = -\\mathbf{i}, \\quad \\mathbf{i} \\times \\mathbf{k} = -\\mathbf{j}$$
Self-cross products vanish:
$$\\mathbf{i} \\times \\mathbf{i} = \\mathbf{j} \\times \\mathbf{j} = \\mathbf{k} \\times \\mathbf{k} = \\mathbf{0}$$`,
    related_formulas: `- [Cross Product (Component Form)](!/linear-algebra/formulas#cross_product_component_form)
- [Cross Product Anti-Commutativity](!/linear-algebra/formulas#cross_product_anti_commutativity)`,
    related_definitions: `- [Cross Product](!/linear-algebra/definitions#cross_product)`,
  },

  {
    name: 'Cross Product Anti-Commutativity',
    entity: 'cross_product',
    category: 'Cross Product',
    formula: `$$\\mathbf{a} \\times \\mathbf{b} = -(\\mathbf{b} \\times \\mathbf{a})$$`,
    link: { label: 'Properties of the Cross Product', url: '/linear-algebra/vectors/cross-product#5' },
    explanation: `Swapping the operands reverses the output. In the right-hand rule, exchanging which vector the fingers follow and which they curl toward sends the thumb the other way. This contrasts sharply with the dot product, where order does not matter.`,
    related_formulas: `- [Cross Product (Component Form)](!/linear-algebra/formulas#cross_product_component_form)
- [Standard Basis Cross Products](!/linear-algebra/formulas#standard_basis_cross_products)`,
    related_definitions: `- [Cross Product](!/linear-algebra/definitions#cross_product)`,
  },

  {
    name: 'Parallelism Test (Cross Product)',
    entity: 'cross_product',
    category: 'Cross Product',
    formula: `$$\\mathbf{a} \\times \\mathbf{b} = \\mathbf{0} \\iff \\mathbf{a} \\parallel \\mathbf{b}$$`,
    link: { label: 'Parallel Vectors and the Cross Product', url: '/linear-algebra/vectors/cross-product#6' },
    explanation: `Two vectors in $\\mathbb{R}^3$ are parallel exactly when their cross product is the zero vector. The geometric reason: parallel vectors form an angle of $0$ or $\\pi$, making $\\sin\\theta = 0$ and collapsing the cross product magnitude. The zero vector is parallel to every vector by convention.`,
    conditions: `Restricted to $\\mathbb{R}^3$. Pairs naturally with the orthogonality condition $\\mathbf{a} \\cdot \\mathbf{b} = 0$ — together they detect the two angular extremes.`,
    related_formulas: `- [Cross Product Magnitude](!/linear-algebra/formulas#cross_product_magnitude)
- [Orthogonality Condition](!/linear-algebra/formulas#orthogonality_condition)`,
    related_definitions: `- [Cross Product](!/linear-algebra/definitions#cross_product)`,
  },

  {
    name: 'Vector Triple Product',
    entity: 'cross_product',
    category: 'Cross Product',
    formula: `$$\\mathbf{a} \\times (\\mathbf{b} \\times \\mathbf{c}) = (\\mathbf{a} \\cdot \\mathbf{c})\\,\\mathbf{b} - (\\mathbf{a} \\cdot \\mathbf{b})\\,\\mathbf{c}$$`,
    link: { label: 'Properties of the Cross Product', url: '/linear-algebra/vectors/cross-product#5' },
    explanation: `The triple cross product reduces to a linear combination of the inner two vectors, with coefficients given by dot products. The mnemonic "BAC minus CAB" captures the order: the middle vector $\\mathbf{b}$ comes first, scaled by $\\mathbf{a} \\cdot \\mathbf{c}$. Useful for simplifying nested cross products without expanding components.`,
    variants: `The reversed grouping yields a different vector — the cross product is not associative:
$$(\\mathbf{a} \\times \\mathbf{b}) \\times \\mathbf{c} = (\\mathbf{a} \\cdot \\mathbf{c})\\,\\mathbf{b} - (\\mathbf{b} \\cdot \\mathbf{c})\\,\\mathbf{a}$$`,
    related_formulas: `- [Cross Product (Component Form)](!/linear-algebra/formulas#cross_product_component_form)
- [Lagrange Identity](!/linear-algebra/formulas#lagrange_identity)
- [Scalar Triple Product](!/linear-algebra/formulas#scalar_triple_product)`,
    related_definitions: `- [Cross Product](!/linear-algebra/definitions#cross_product)
- [Dot Product](!/linear-algebra/definitions#dot_product)`,
  },

  {
    name: 'Lagrange Identity',
    entity: 'cross_product',
    category: 'Cross Product',
    formula: `$$(\\mathbf{a} \\times \\mathbf{b}) \\cdot (\\mathbf{c} \\times \\mathbf{d}) = (\\mathbf{a} \\cdot \\mathbf{c})(\\mathbf{b} \\cdot \\mathbf{d}) - (\\mathbf{a} \\cdot \\mathbf{d})(\\mathbf{b} \\cdot \\mathbf{c})$$`,
    link: { label: 'Properties of the Cross Product', url: '/linear-algebra/vectors/cross-product#5' },
    explanation: `The dot product of two cross products expands into a $2 \\times 2$ determinant of dot products. Setting $\\mathbf{c} = \\mathbf{a}$ and $\\mathbf{d} = \\mathbf{b}$ recovers the magnitude identity $\\|\\mathbf{a} \\times \\mathbf{b}\\|^2 = \\|\\mathbf{a}\\|^2 \\|\\mathbf{b}\\|^2 - (\\mathbf{a} \\cdot \\mathbf{b})^2$, which is equivalent to $\\sin^2\\theta = 1 - \\cos^2\\theta$.`,
    related_formulas: `- [Vector Triple Product](!/linear-algebra/formulas#vector_triple_product)
- [Cross Product Magnitude](!/linear-algebra/formulas#cross_product_magnitude)`,
    related_definitions: `- [Cross Product](!/linear-algebra/definitions#cross_product)
- [Dot Product](!/linear-algebra/definitions#dot_product)`,
  },

  // ═══════════════════════════════════════════
  // CATEGORY: Triple Products (4)
  // ═══════════════════════════════════════════

  {
    name: 'Scalar Triple Product',
    entity: 'cross_product',
    category: 'Triple Products',
    formula: `$$\\mathbf{a} \\cdot (\\mathbf{b} \\times \\mathbf{c}) = \\begin{vmatrix} a_1 & a_2 & a_3 \\\\ b_1 & b_2 & b_3 \\\\ c_1 & c_2 & c_3 \\end{vmatrix}$$`,
    link: { label: 'The Scalar Triple Product', url: '/linear-algebra/vectors/cross-product#7' },
    explanation: `Three vectors in $\\mathbb{R}^3$ combine into a single scalar via a cross product nested inside a dot product. The result is the signed volume of the parallelepiped with the three vectors as edges. The determinant arrangement of the nine components computes the same number.`,
    conditions: `Restricted to $\\mathbb{R}^3$. The scalar triple product is invariant under cyclic permutation: $\\mathbf{a} \\cdot (\\mathbf{b} \\times \\mathbf{c}) = \\mathbf{b} \\cdot (\\mathbf{c} \\times \\mathbf{a}) = \\mathbf{c} \\cdot (\\mathbf{a} \\times \\mathbf{b})$. Swapping any two factors flips the sign. The product vanishes precisely when the three vectors are coplanar.`,
    related_formulas: `- [Parallelepiped Volume](!/linear-algebra/formulas#parallelepiped_volume)
- [Cross Product (Determinant Form)](!/linear-algebra/formulas#cross_product_determinant_form)
- [Vector Triple Product](!/linear-algebra/formulas#vector_triple_product)`,
    related_definitions: `- [Cross Product](!/linear-algebra/definitions#cross_product)
- [Determinant](!/linear-algebra/definitions#determinant)`,
  },

  {
    name: 'Parallelogram Area',
    entity: 'cross_product',
    category: 'Triple Products',
    formula: `$$\\text{Area} = \\|\\mathbf{a} \\times \\mathbf{b}\\|$$`,
    link: { label: 'Geometric Interpretation', url: '/linear-algebra/vectors/cross-product#3' },
    explanation: `The magnitude of the cross product equals the area of the parallelogram with adjacent sides $\\mathbf{a}$ and $\\mathbf{b}$. From the magnitude formula $\\|\\mathbf{a}\\|\\,\\|\\mathbf{b}\\|\\sin\\theta$ — the standard base-times-height formula for parallelogram area, where $\\|\\mathbf{b}\\|\\sin\\theta$ is the height perpendicular to $\\mathbf{a}$.`,
    variants: `Triangle area is half the parallelogram:
$$\\text{Area}(\\triangle) = \\tfrac{1}{2}\\|\\mathbf{a} \\times \\mathbf{b}\\|$$`,
    related_formulas: `- [Cross Product Magnitude](!/linear-algebra/formulas#cross_product_magnitude)
- [Parallelepiped Volume](!/linear-algebra/formulas#parallelepiped_volume)`,
    related_definitions: `- [Cross Product](!/linear-algebra/definitions#cross_product)`,
  },

  {
    name: 'Parallelepiped Volume',
    entity: 'cross_product',
    category: 'Triple Products',
    formula: `$$V = |\\mathbf{a} \\cdot (\\mathbf{b} \\times \\mathbf{c})|$$`,
    link: { label: 'The Scalar Triple Product', url: '/linear-algebra/vectors/cross-product#7' },
    explanation: `The absolute value of the scalar triple product equals the volume of the parallelepiped with edges $\\mathbf{a}$, $\\mathbf{b}$, $\\mathbf{c}$. The signed version of the triple product encodes orientation — positive for right-handed triples, negative for left-handed. Taking the absolute value strips that information to leave the geometric volume.`,
    conditions: `$V = 0$ if and only if the three vectors are coplanar.`,
    related_formulas: `- [Scalar Triple Product](!/linear-algebra/formulas#scalar_triple_product)
- [Pyramid Volume](!/linear-algebra/formulas#pyramid_volume)
- [Parallelogram Area](!/linear-algebra/formulas#parallelogram_area)`,
    related_definitions: `- [Cross Product](!/linear-algebra/definitions#cross_product)
- [Determinant](!/linear-algebra/definitions#determinant)`,
  },

  {
    name: 'Pyramid Volume',
    entity: 'cross_product',
    category: 'Triple Products',
    formula: `$$V = \\tfrac{1}{6}|\\mathbf{a} \\cdot (\\mathbf{b} \\times \\mathbf{c})|$$`,
    link: { label: 'The Scalar Triple Product', url: '/linear-algebra/vectors/cross-product#7' },
    explanation: `The volume of the tetrahedron (triangular pyramid) with edges $\\mathbf{a}$, $\\mathbf{b}$, $\\mathbf{c}$ from a common vertex is one-sixth of the corresponding parallelepiped volume. The factor $\\tfrac{1}{6}$ comes from $\\tfrac{1}{3}$ (general pyramid: $V = \\tfrac{1}{3} \\cdot \\text{base} \\cdot \\text{height}$) times $\\tfrac{1}{2}$ (the triangular base is half the parallelogram base).`,
    related_formulas: `- [Parallelepiped Volume](!/linear-algebra/formulas#parallelepiped_volume)
- [Scalar Triple Product](!/linear-algebra/formulas#scalar_triple_product)`,
    related_definitions: `- [Cross Product](!/linear-algebra/definitions#cross_product)`,
  },


// Linear Algebra Formulas — Batch 2A
// Section: /linear-algebra/formulas
// Categories: Vector Space (3), Subspaces (2), Span (3), Linear Independence (5)
// 13 entries



  // ═══════════════════════════════════════════
  // CATEGORY: Vector Space (3)
  // ═══════════════════════════════════════════

  {
    name: 'Vector Space Axioms',
    entity: 'vector_space',
    category: 'Vector Space',
    formula: `$$\\begin{aligned}
&\\text{For all } \\mathbf{u}, \\mathbf{v}, \\mathbf{w} \\in V \\text{ and all } c, d \\in \\mathbb{F}: \\\\
&(1)\\ \\mathbf{u} + \\mathbf{v} \\in V \\quad (2)\\ \\mathbf{u} + \\mathbf{v} = \\mathbf{v} + \\mathbf{u} \\\\
&(3)\\ (\\mathbf{u} + \\mathbf{v}) + \\mathbf{w} = \\mathbf{u} + (\\mathbf{v} + \\mathbf{w}) \\\\
&(4)\\ \\exists\\, \\mathbf{0} \\in V: \\mathbf{v} + \\mathbf{0} = \\mathbf{v} \\\\
&(5)\\ \\exists\\, -\\mathbf{v} \\in V: \\mathbf{v} + (-\\mathbf{v}) = \\mathbf{0} \\\\
&(6)\\ c\\mathbf{v} \\in V \\quad (7)\\ c(d\\mathbf{v}) = (cd)\\mathbf{v} \\\\
&(8)\\ c(\\mathbf{u} + \\mathbf{v}) = c\\mathbf{u} + c\\mathbf{v} \\\\
&(9)\\ (c + d)\\mathbf{v} = c\\mathbf{v} + d\\mathbf{v} \\quad (10)\\ 1\\mathbf{v} = \\mathbf{v}
\\end{aligned}$$`,
    link: { label: 'The Ten Axioms', url: '/linear-algebra/vector-spaces/axioms#2' },
    explanation: `A vector space over a field $\\mathbb{F}$ is a set $V$ with two operations — vector addition and scalar multiplication — satisfying ten axioms. Five govern addition (closure, commutativity, associativity, zero, inverse), and five govern scalar multiplication (closure, scalar associativity, two distributive laws, multiplicative identity). Any structure satisfying all ten inherits the entire theory of linear algebra; any structure violating even one is disqualified.`,
    conditions: `The scalar field $\\mathbb{F}$ is typically $\\mathbb{R}$ or $\\mathbb{C}$. Every axiom must hold — failure of even one disqualifies the structure. Examples include $\\mathbb{R}^n$, polynomial spaces $\\mathcal{P}_n$, matrix spaces $\\mathbb{R}^{m \\times n}$, and continuous-function spaces $C[a,b]$.`,
    related_formulas: `- [Scalar-Zero Property](!/linear-algebra/formulas#scalar_zero_property)
- [Negative One Scalar](!/linear-algebra/formulas#negative_one_scalar)
- [Subspace Test](!/linear-algebra/formulas#subspace_test)`,
    related_definitions: `- [Vector Space](!/linear-algebra/definitions#vector_space)
- [Vector](!/linear-algebra/definitions#vector)
- [Scalar](!/linear-algebra/definitions#scalar)`,
  },

  {
    name: 'Scalar-Zero Property',
    entity: 'vector_space',
    category: 'Vector Space',
    formula: `$$0\\mathbf{v} = \\mathbf{0}, \\quad c\\mathbf{0} = \\mathbf{0}$$`,
    link: { label: 'Immediate Consequences of the Axioms', url: '/linear-algebra/vector-spaces/axioms#9' },
    explanation: `The scalar zero annihilates every vector, and any scalar applied to the zero vector returns the zero vector. Both facts are theorems derived from the axioms — not separate assumptions. They establish that the two distinct "zeros" (scalar $0$ in the field, vector $\\mathbf{0}$ in $V$) interact through scalar multiplication in the expected way.`,
    derivation: `For $0\\mathbf{v} = \\mathbf{0}$: by the distributive axiom, $0\\mathbf{v} = (0+0)\\mathbf{v} = 0\\mathbf{v} + 0\\mathbf{v}$. Adding $-(0\\mathbf{v})$ to both sides yields $\\mathbf{0} = 0\\mathbf{v}$. For $c\\mathbf{0} = \\mathbf{0}$: $c\\mathbf{0} = c(\\mathbf{0}+\\mathbf{0}) = c\\mathbf{0} + c\\mathbf{0}$, then add $-(c\\mathbf{0})$ to both sides.`,
    related_formulas: `- [Vector Space Axioms](!/linear-algebra/formulas#vector_space_axioms)
- [Negative One Scalar](!/linear-algebra/formulas#negative_one_scalar)`,
    related_definitions: `- [Vector Space](!/linear-algebra/definitions#vector_space)`,
  },

  {
    name: 'Negative One Scalar',
    entity: 'vector_space',
    category: 'Vector Space',
    formula: `$$(-1)\\mathbf{v} = -\\mathbf{v}$$`,
    link: { label: 'Immediate Consequences of the Axioms', url: '/linear-algebra/vector-spaces/axioms#9' },
    explanation: `Scaling a vector by $-1$ produces its additive inverse. This identifies the additive inverse $-\\mathbf{v}$ (introduced by axiom 5) with a specific scalar product, removing any ambiguity about what negation means in a vector space.`,
    derivation: `By the distributive and identity axioms: $\\mathbf{v} + (-1)\\mathbf{v} = 1\\mathbf{v} + (-1)\\mathbf{v} = (1 + (-1))\\mathbf{v} = 0\\mathbf{v} = \\mathbf{0}$. Since $-\\mathbf{v}$ is the unique vector satisfying $\\mathbf{v} + (-\\mathbf{v}) = \\mathbf{0}$, conclude $(-1)\\mathbf{v} = -\\mathbf{v}$.`,
    related_formulas: `- [Vector Space Axioms](!/linear-algebra/formulas#vector_space_axioms)
- [Scalar-Zero Property](!/linear-algebra/formulas#scalar_zero_property)`,
    related_definitions: `- [Vector Space](!/linear-algebra/definitions#vector_space)`,
  },

  // ═══════════════════════════════════════════
  // CATEGORY: Subspaces (2)
  // ═══════════════════════════════════════════

  {
    name: 'Subspace Test',
    entity: 'subspace',
    category: 'Subspaces',
    formula: `$$W \\subseteq V \\text{ is a subspace} \\iff \\begin{cases} W \\neq \\emptyset \\\\ \\mathbf{u}, \\mathbf{v} \\in W \\Rightarrow \\mathbf{u} + \\mathbf{v} \\in W \\\\ \\mathbf{v} \\in W,\\ c \\in \\mathbb{F} \\Rightarrow c\\mathbf{v} \\in W \\end{cases}$$`,
    link: { label: 'The Subspace Test', url: '/linear-algebra/vector-spaces/subspaces#2' },
    explanation: `A nonempty subset of a vector space is a subspace exactly when it is closed under addition and under scalar multiplication. The other axioms (commutativity, associativity, distributivity) hold automatically because vectors in $W$ are vectors in $V$. Closure is the only thing that can fail.`,
    conditions: `Nonemptiness is essential — once $W$ contains any vector $\\mathbf{v}$, scalar closure with $c = 0$ forces $\\mathbf{0} \\in W$. So checking $\\mathbf{0} \\in W$ is often the fastest test: if $\\mathbf{0} \\notin W$, then $W$ is not a subspace.`,
    related_formulas: `- [Subspace Test (Combined)](!/linear-algebra/formulas#subspace_test_combined)
- [Span Is Smallest Subspace](!/linear-algebra/formulas#span_is_smallest_subspace)`,
    related_definitions: `- [Subspace](!/linear-algebra/definitions#subspace)
- [Vector Space](!/linear-algebra/definitions#vector_space)`,
  },

  {
    name: 'Subspace Test Combined',
    entity: 'subspace',
    category: 'Subspaces',
    formula: `$$W \\subseteq V \\text{ is a subspace} \\iff W \\neq \\emptyset \\text{ and } c\\mathbf{u} + d\\mathbf{v} \\in W \\text{ for all } \\mathbf{u}, \\mathbf{v} \\in W,\\ c, d \\in \\mathbb{F}$$`,
    link: { label: 'The Subspace Test', url: '/linear-algebra/vector-spaces/subspaces#2' },
    explanation: `The two closure conditions can be compressed into a single closure-under-linear-combinations condition. Setting $d = 0$ recovers scalar closure; setting $c = d = 1$ recovers additive closure. The combined form is more efficient in proofs and in algorithmic verification.`,
    related_formulas: `- [Subspace Test](!/linear-algebra/formulas#subspace_test)`,
    related_definitions: `- [Subspace](!/linear-algebra/definitions#subspace)`,
  },

  // ═══════════════════════════════════════════
  // CATEGORY: Span (3)
  // ═══════════════════════════════════════════

  {
    name: 'Span (Set Definition)',
    entity: 'span',
    category: 'Span',
    formula: `$$\\text{Span}\\{\\mathbf{v}_1, \\ldots, \\mathbf{v}_k\\} = \\left\\{c_1\\mathbf{v}_1 + c_2\\mathbf{v}_2 + \\cdots + c_k\\mathbf{v}_k \\mid c_i \\in \\mathbb{F}\\right\\}$$`,
    link: { label: 'Definition', url: '/linear-algebra/vector-spaces/span#1' },
    explanation: `The span of a finite set of vectors is the set of all linear combinations of those vectors. As the scalar coefficients range over $\\mathbb{F}$, the span sweeps out an entire subspace. By convention, $\\text{Span}\\,\\emptyset = \\{\\mathbf{0}\\}$.`,
    related_formulas: `- [Span Membership](!/linear-algebra/formulas#span_membership_criterion)
- [Span Is Smallest Subspace](!/linear-algebra/formulas#span_is_smallest_subspace)
- [Linear Combination](!/linear-algebra/formulas#linear_combination)`,
    related_definitions: `- [Span](!/linear-algebra/definitions#span)
- [Linear Combination](!/linear-algebra/definitions#linear_combination)
- [Subspace](!/linear-algebra/definitions#subspace)`,
  },

  {
    name: 'Span Membership Criterion',
    entity: 'span',
    category: 'Span',
    formula: `$$\\mathbf{b} \\in \\text{Span}\\{\\mathbf{v}_1, \\ldots, \\mathbf{v}_k\\} \\iff A\\mathbf{c} = \\mathbf{b} \\text{ is consistent}$$`,
    link: { label: 'Testing Whether a Vector Is in a Span', url: '/linear-algebra/vector-spaces/span#4' },
    explanation: `Testing whether $\\mathbf{b}$ lies in the span of given vectors reduces to a linear-system solvability question. Arrange the spanning vectors as columns of a matrix $A$; then $\\mathbf{b}$ is in the span iff the system $A\\mathbf{c} = \\mathbf{b}$ has at least one solution. Row-reducing the augmented matrix $[A \\mid \\mathbf{b}]$ decides the question: a contradiction row $[0\\,\\cdots\\,0 \\mid d \\neq 0]$ means $\\mathbf{b} \\notin \\text{Span}$, no contradiction means $\\mathbf{b} \\in \\text{Span}$.`,
    notation: `$A = [\\mathbf{v}_1\\ \\mathbf{v}_2\\ \\cdots\\ \\mathbf{v}_k]$ is the matrix whose columns are the spanning vectors. The unknown $\\mathbf{c}$ is the column of coefficients in the linear combination.`,
    related_formulas: `- [Span (Set Definition)](!/linear-algebra/formulas#span_set_definition)
- [Linear Independence Matrix Test](!/linear-algebra/formulas#linear_independence_matrix_test)`,
    related_definitions: `- [Span](!/linear-algebra/definitions#span)
- [Linear Combination](!/linear-algebra/definitions#linear_combination)`,
  },

  {
    name: 'Span Is Smallest Subspace',
    entity: 'span',
    category: 'Span',
    formula: `$$\\text{Span}(K) = \\bigcap_{\\substack{W \\text{ subspace} \\\\ K \\subseteq W}} W$$`,
    link: { label: 'Definition', url: '/linear-algebra/vector-spaces/span#1' },
    explanation: `The span of a set $K$ is the smallest subspace containing $K$. Equivalently, it is the intersection of all subspaces that contain $K$ — a subspace itself, since intersections of subspaces are subspaces. Any subspace containing $K$ must also contain every linear combination of vectors in $K$, so $\\text{Span}(K)$ is contained in every such subspace, making it the minimal one.`,
    conditions: `Holds in any vector space and for any subset $K \\subseteq V$ (including $K = \\emptyset$, where the intersection is $\\{\\mathbf{0}\\}$).`,
    related_formulas: `- [Span (Set Definition)](!/linear-algebra/formulas#span_set_definition)
- [Subspace Test](!/linear-algebra/formulas#subspace_test)`,
    related_definitions: `- [Span](!/linear-algebra/definitions#span)
- [Subspace](!/linear-algebra/definitions#subspace)`,
  },

  // ═══════════════════════════════════════════
  // CATEGORY: Linear Independence (5)
  // ═══════════════════════════════════════════

  {
    name: 'Linear Independence Equation',
    entity: 'linear_independence',
    category: 'Linear Independence',
    formula: `$$\\{\\mathbf{v}_1, \\ldots, \\mathbf{v}_k\\} \\text{ is independent} \\iff \\bigl(c_1\\mathbf{v}_1 + \\cdots + c_k\\mathbf{v}_k = \\mathbf{0} \\Rightarrow c_1 = \\cdots = c_k = 0\\bigr)$$`,
    link: { label: 'Definition', url: '/linear-algebra/vector-spaces/linear-independence#1' },
    explanation: `A set is linearly independent when the only linear combination producing the zero vector is the trivial one — every coefficient must be zero. Any nontrivial relation (some coefficient nonzero) means at least one vector is redundant: it can be expressed as a combination of the others.`,
    conditions: `A single nonzero vector is always independent. Any set containing the zero vector is automatically dependent (since $1 \\cdot \\mathbf{0} = \\mathbf{0}$ is a nontrivial relation). Every subset of an independent set is independent.`,
    related_formulas: `- [Linear Independence Matrix Test](!/linear-algebra/formulas#linear_independence_matrix_test)
- [Linear Independence Determinant Test](!/linear-algebra/formulas#linear_independence_determinant_test)
- [Max Independent Set Size](!/linear-algebra/formulas#max_independent_set_size)`,
    related_definitions: `- [Linear Independence](!/linear-algebra/definitions#linear_independence)
- [Linear Combination](!/linear-algebra/definitions#linear_combination)`,
  },

  {
    name: 'Linear Independence Matrix Test',
    entity: 'linear_independence',
    category: 'Linear Independence',
    formula: `$$\\{\\mathbf{v}_1, \\ldots, \\mathbf{v}_k\\} \\subset \\mathbb{R}^m \\text{ is independent} \\iff A\\mathbf{c} = \\mathbf{0} \\text{ has only the trivial solution}$$`,
    link: { label: 'Testing Independence: The Homogeneous System', url: '/linear-algebra/vector-spaces/linear-independence#3' },
    explanation: `For column vectors in $\\mathbb{R}^m$, independence is equivalent to triviality of the homogeneous system whose coefficient matrix has those vectors as columns. Row-reduce $A = [\\mathbf{v}_1\\ \\cdots\\ \\mathbf{v}_k]$: independence holds iff every column has a pivot (no free variables). If any column is free, a nontrivial null-space vector gives a dependence relation.`,
    conditions: `Applies to vectors in $\\mathbb{R}^m$. For abstract vector spaces, work directly from the definition or use a coordinate map after fixing a basis.`,
    related_formulas: `- [Linear Independence Equation](!/linear-algebra/formulas#linear_independence_equation)
- [Linear Independence Determinant Test](!/linear-algebra/formulas#linear_independence_determinant_test)
- [Span Membership Criterion](!/linear-algebra/formulas#span_membership_criterion)`,
    related_definitions: `- [Linear Independence](!/linear-algebra/definitions#linear_independence)`,
  },

  {
    name: 'Linear Independence Determinant Test',
    entity: 'linear_independence',
    category: 'Linear Independence',
    formula: `$$\\{\\mathbf{v}_1, \\ldots, \\mathbf{v}_n\\} \\subset \\mathbb{R}^n \\text{ is independent} \\iff \\det[\\mathbf{v}_1\\ \\cdots\\ \\mathbf{v}_n] \\neq 0$$`,
    link: { label: 'Testing Independence: The Determinant', url: '/linear-algebra/vector-spaces/linear-independence#4' },
    explanation: `When the number of vectors equals the dimension of the ambient space, independence reduces to a single number — the determinant of the matrix whose columns are the vectors. Nonzero determinant means independence; zero determinant means dependence. This follows from the invertible matrix theorem: $A$ is invertible iff its columns are independent iff $\\det(A) \\neq 0$.`,
    conditions: `Applies only to the square case: exactly $n$ vectors in $\\mathbb{R}^n$. For non-square configurations (fewer or more than $n$ vectors), use the matrix test via row reduction.`,
    related_formulas: `- [Linear Independence Matrix Test](!/linear-algebra/formulas#linear_independence_matrix_test)
- [Linear Independence Equation](!/linear-algebra/formulas#linear_independence_equation)`,
    related_definitions: `- [Linear Independence](!/linear-algebra/definitions#linear_independence)
- [Determinant](!/linear-algebra/definitions#determinant)`,
  },

  {
    name: 'Max Independent Set Size',
    entity: 'linear_independence',
    category: 'Linear Independence',
    formula: `$$|S| > \\dim V \\Rightarrow S \\text{ is dependent}$$`,
    link: { label: 'Dimension and Independence', url: '/linear-algebra/vector-spaces/dimension#5' },
    explanation: `In an $n$-dimensional vector space, no independent set can have more than $n$ elements. Any collection of $n+1$ or more vectors is automatically dependent — independence imposes a hard ceiling at the dimension. Conversely, any independent set with exactly $\\dim V$ elements is automatically a basis: the spanning condition comes for free at the magic count.`,
    conditions: `Requires $V$ to be finite-dimensional. In infinite-dimensional spaces, arbitrarily large independent sets exist.`,
    related_formulas: `- [Linear Independence Equation](!/linear-algebra/formulas#linear_independence_equation)
- [Dimension Definition](!/linear-algebra/formulas#dimension_definition)`,
    related_definitions: `- [Linear Independence](!/linear-algebra/definitions#linear_independence)
- [Dimension](!/linear-algebra/definitions#dimension)`,
  },

  {
    name: 'Wronskian Test',
    entity: 'linear_independence',
    category: 'Linear Independence',
    formula: `$$W(f_1, \\ldots, f_n)(x) = \\det\\begin{pmatrix} f_1(x) & \\cdots & f_n(x) \\\\ f_1'(x) & \\cdots & f_n'(x) \\\\ \\vdots & \\ddots & \\vdots \\\\ f_1^{(n-1)}(x) & \\cdots & f_n^{(n-1)}(x) \\end{pmatrix}$$`,
    link: { label: 'The Wronskian Test for Functions', url: '/linear-algebra/vector-spaces/linear-independence#7' },
    explanation: `The Wronskian is a determinant built from successive derivatives of $n$ functions, each differentiable at least $n-1$ times. If $W(f_1, \\ldots, f_n)(x_0) \\neq 0$ at any single point $x_0$, the functions are linearly independent on the entire interval. The Wronskian provides a usable independence test in function spaces, where the column-matrix approach does not apply directly.`,
    conditions: `Nonvanishing at one point implies independence. The converse (vanishing implies dependence) requires the additional hypothesis that the functions are solutions of a single linear ODE with continuous coefficients — without this, counterexamples exist.`,
    related_formulas: `- [Linear Independence Equation](!/linear-algebra/formulas#linear_independence_equation)
- [Linear Independence Determinant Test](!/linear-algebra/formulas#linear_independence_determinant_test)`,
    related_definitions: `- [Linear Independence](!/linear-algebra/definitions#linear_independence)
- [Determinant](!/linear-algebra/definitions#determinant)`,
  },

// Linear Algebra Formulas — Batch 2B
// Section: /linear-algebra/formulas
// Categories: Basis & Coordinates (7), Dimension & Rank (8)
// 15 entries



  // ═══════════════════════════════════════════
  // CATEGORY: Basis & Coordinates (7)
  // ═══════════════════════════════════════════

  {
    name: 'Basis Definition',
    entity: 'basis',
    category: 'Basis & Coordinates',
    formula: `$$\\mathcal{B} = \\{\\mathbf{v}_1, \\ldots, \\mathbf{v}_n\\} \\text{ is a basis for } V \\iff \\begin{cases} \\mathcal{B} \\text{ is linearly independent} \\\\ \\text{Span}(\\mathcal{B}) = V \\end{cases}$$`,
    link: { label: 'Basis: Definition', url: '/linear-algebra/vector-spaces#2' },
    explanation: `A basis is a set that is independent and spans the space — the two conditions hold simultaneously. Independence guarantees no vector is wasted; spanning guarantees no vector in $V$ is unreachable. Equivalently, a basis is a maximal independent set, or a minimal spanning set.`,
    related_formulas: `- [Linear Independence Equation](!/linear-algebra/formulas#linear_independence_equation)
- [Span (Set Definition)](!/linear-algebra/formulas#span_set_definition)
- [Unique Basis Representation](!/linear-algebra/formulas#unique_basis_representation)
- [Dimension Definition](!/linear-algebra/formulas#dimension_definition)`,
    related_definitions: `- [Basis](!/linear-algebra/definitions#basis)
- [Linear Independence](!/linear-algebra/definitions#linear_independence)
- [Span](!/linear-algebra/definitions#span)`,
  },

  {
    name: 'Unique Basis Representation',
    entity: 'basis',
    category: 'Basis & Coordinates',
    formula: `$$\\forall\\, \\mathbf{v} \\in V,\\ \\exists!\\, (c_1, \\ldots, c_n): \\mathbf{v} = c_1\\mathbf{v}_1 + c_2\\mathbf{v}_2 + \\cdots + c_n\\mathbf{v}_n$$`,
    link: { label: 'Unique Representation', url: '/linear-algebra/vector-spaces#3' },
    explanation: `Every vector in $V$ admits exactly one representation as a linear combination of basis vectors. Existence follows from the spanning condition, uniqueness from independence: if two coefficient sets both produced $\\mathbf{v}$, their difference would give a nontrivial relation equal to $\\mathbf{0}$. This unique representation is what makes coordinates well-defined.`,
    derivation: `Existence: spanning gives at least one expansion $\\mathbf{v} = \\sum c_i \\mathbf{v}_i$. Uniqueness: if also $\\mathbf{v} = \\sum c'_i \\mathbf{v}_i$, then $\\sum (c_i - c'_i)\\mathbf{v}_i = \\mathbf{0}$. By independence, $c_i - c'_i = 0$ for all $i$, so $c_i = c'_i$.`,
    related_formulas: `- [Basis Definition](!/linear-algebra/formulas#basis_definition)
- [Coordinate Vector](!/linear-algebra/formulas#coordinate_vector)`,
    related_definitions: `- [Basis](!/linear-algebra/definitions#basis)
- [Linear Combination](!/linear-algebra/definitions#linear_combination)`,
  },

  {
    name: 'Coordinate Vector',
    entity: 'basis',
    category: 'Basis & Coordinates',
    formula: `$$[\\mathbf{v}]_\\mathcal{B} = \\begin{pmatrix} c_1 \\\\ c_2 \\\\ \\vdots \\\\ c_n \\end{pmatrix} \\quad \\text{where } \\mathbf{v} = c_1\\mathbf{v}_1 + \\cdots + c_n\\mathbf{v}_n$$`,
    link: { label: 'Coordinates', url: '/linear-algebra/vector-spaces#4' },
    explanation: `The coordinate vector of $\\mathbf{v}$ relative to basis $\\mathcal{B}$ packages the unique expansion coefficients into a column in $\\mathbb{F}^n$. Coordinates depend on the choice of basis — the same vector has different coordinates in different bases. For the standard basis of $\\mathbb{R}^n$, coordinates coincide with components.`,
    conditions: `Defined for finite-dimensional $V$ once an ordered basis $\\mathcal{B}$ is fixed. To compute, solve $B\\mathbf{c} = \\mathbf{v}$ where $B = [\\mathbf{v}_1\\ \\cdots\\ \\mathbf{v}_n]$; if $B$ is invertible, $\\mathbf{c} = B^{-1}\\mathbf{v}$.`,
    related_formulas: `- [Unique Basis Representation](!/linear-algebra/formulas#unique_basis_representation)
- [Change of Basis Formula](!/linear-algebra/formulas#change_of_basis_formula)
- [Coordinate Map Linearity](!/linear-algebra/formulas#coordinate_map_linearity)`,
    related_definitions: `- [Basis](!/linear-algebra/definitions#basis)`,
  },

  {
    name: 'Standard Basis (Rn)',
    entity: 'basis',
    category: 'Basis & Coordinates',
    formula: `$$\\mathbf{e}_i = (0, \\ldots, 0, \\underset{i\\text{-th}}{1}, 0, \\ldots, 0), \\quad i = 1, \\ldots, n$$`,
    link: { label: 'The Standard Basis for Rⁿ', url: '/linear-algebra/vector-spaces#5' },
    explanation: `The standard basis of $\\mathbb{R}^n$ consists of $n$ vectors, each with a $1$ in one position and zeros elsewhere. Independence is immediate: no vector is a combination of the others. Spanning follows from $(v_1, \\ldots, v_n) = v_1\\mathbf{e}_1 + \\cdots + v_n\\mathbf{e}_n$. Coordinates relative to this basis coincide with the components themselves — the reason it is the default choice.`,
    notation: `In $\\mathbb{R}^3$, the alternative notation $\\mathbf{i} = \\mathbf{e}_1$, $\\mathbf{j} = \\mathbf{e}_2$, $\\mathbf{k} = \\mathbf{e}_3$ is also standard.`,
    related_formulas: `- [Basis Definition](!/linear-algebra/formulas#basis_definition)
- [Standard Basis Decomposition](!/linear-algebra/formulas#standard_basis_decomposition)`,
    related_definitions: `- [Basis](!/linear-algebra/definitions#basis)
- [Vector](!/linear-algebra/definitions#vector)`,
  },

  {
    name: 'Change of Basis Formula',
    entity: 'basis',
    category: 'Basis & Coordinates',
    formula: `$$[\\mathbf{v}]_\\mathcal{C} = P_{\\mathcal{C} \\leftarrow \\mathcal{B}}\\, [\\mathbf{v}]_\\mathcal{B}$$`,
    link: { label: 'Change of Basis', url: '/linear-algebra/vector-spaces#9' },
    explanation: `Coordinates of the same vector in two different bases are related by left-multiplication by the change-of-basis matrix. The columns of $P_{\\mathcal{C} \\leftarrow \\mathcal{B}}$ are the $\\mathcal{C}$-coordinate vectors of each $\\mathcal{B}$-basis vector. Knowing $[\\mathbf{v}]_\\mathcal{B}$, this matrix produces $[\\mathbf{v}]_\\mathcal{C}$ in one multiplication.`,
    notation: `$P_{\\mathcal{C} \\leftarrow \\mathcal{B}}$ converts $\\mathcal{B}$-coordinates into $\\mathcal{C}$-coordinates. The arrow direction in the subscript is read right-to-left: input on the right, output on the left.`,
    related_formulas: `- [Coordinate Vector](!/linear-algebra/formulas#coordinate_vector)
- [Change of Basis Inverse](!/linear-algebra/formulas#change_of_basis_inverse)`,
    related_definitions: `- [Basis](!/linear-algebra/definitions#basis)`,
  },

  {
    name: 'Change of Basis Inverse',
    entity: 'basis',
    category: 'Basis & Coordinates',
    formula: `$$P_{\\mathcal{B} \\leftarrow \\mathcal{C}} = \\bigl(P_{\\mathcal{C} \\leftarrow \\mathcal{B}}\\bigr)^{-1}$$`,
    link: { label: 'Change of Basis', url: '/linear-algebra/vector-spaces#9' },
    explanation: `Reversing the direction of a basis change inverts the matrix. The two change-of-basis matrices in opposite directions are inverses of each other, so once one is computed, the other is obtained by matrix inversion. Both matrices are invertible because basis vectors are linearly independent.`,
    related_formulas: `- [Change of Basis Formula](!/linear-algebra/formulas#change_of_basis_formula)`,
    related_definitions: `- [Basis](!/linear-algebra/definitions#basis)`,
  },

  {
    name: 'Coordinate Map Linearity',
    entity: 'basis',
    category: 'Basis & Coordinates',
    formula: `$$[\\mathbf{u} + \\mathbf{v}]_\\mathcal{B} = [\\mathbf{u}]_\\mathcal{B} + [\\mathbf{v}]_\\mathcal{B}, \\qquad [c\\mathbf{v}]_\\mathcal{B} = c\\,[\\mathbf{v}]_\\mathcal{B}$$`,
    link: { label: 'Coordinates and Isomorphism', url: '/linear-algebra/vector-spaces#10' },
    explanation: `The coordinate map $\\mathbf{v} \\mapsto [\\mathbf{v}]_\\mathcal{B}$ preserves both vector operations. Together with bijectivity, this makes it an isomorphism $V \\to \\mathbb{F}^n$. Every $n$-dimensional vector space over $\\mathbb{F}$ is therefore structurally identical to $\\mathbb{F}^n$ — polynomials, matrices, and ODE solution spaces all reduce to coordinate computations once a basis is fixed.`,
    related_formulas: `- [Coordinate Vector](!/linear-algebra/formulas#coordinate_vector)
- [Basis Definition](!/linear-algebra/formulas#basis_definition)`,
    related_definitions: `- [Basis](!/linear-algebra/definitions#basis)`,
  },

  // ═══════════════════════════════════════════
  // CATEGORY: Dimension & Rank (8)
  // ═══════════════════════════════════════════

  {
    name: 'Dimension Definition',
    entity: 'dimension',
    category: 'Dimension & Rank',
    formula: `$$\\dim(V) = |\\mathcal{B}| \\quad \\text{for any basis } \\mathcal{B} \\text{ of } V$$`,
    link: { label: 'Definition', url: '/linear-algebra/vector-spaces/dimension#1' },
    explanation: `The dimension of $V$ is the number of vectors in any basis. The basis size theorem guarantees that all bases have the same cardinality, so the count is intrinsic to $V$, not an artifact of basis choice. By convention, $\\dim\\{\\mathbf{0}\\} = 0$ (the empty set is a basis for the zero space).`,
    conditions: `Defined for finite-dimensional spaces. Standard examples: $\\dim \\mathbb{R}^n = n$, $\\dim \\mathcal{P}_n = n+1$, $\\dim \\mathbb{R}^{m \\times n} = mn$.`,
    related_formulas: `- [Basis Definition](!/linear-algebra/formulas#basis_definition)
- [Subspace Dimension Inequality](!/linear-algebra/formulas#subspace_dimension_inequality)
- [Max Independent Set Size](!/linear-algebra/formulas#max_independent_set_size)`,
    related_definitions: `- [Dimension](!/linear-algebra/definitions#dimension)
- [Basis](!/linear-algebra/definitions#basis)`,
  },

  {
    name: 'Subspace Dimension Inequality',
    entity: 'dimension',
    category: 'Dimension & Rank',
    formula: `$$W \\subseteq V \\Rightarrow \\dim(W) \\leq \\dim(V), \\quad \\text{with equality} \\iff W = V$$`,
    link: { label: 'Dimension of Subspaces', url: '/linear-algebra/vector-spaces/dimension#7' },
    explanation: `A subspace cannot exceed its parent space in dimension, and matches it only when the subspace is the whole space. Any basis of $W$ is an independent set in $V$, hence has size at most $\\dim V$. Equality means the basis of $W$ already spans $V$, forcing $W = V$.`,
    conditions: `Requires $V$ finite-dimensional. Possible subspace dimensions in $\\mathbb{R}^3$: $0$ (origin), $1$ (lines through origin), $2$ (planes through origin), $3$ ($\\mathbb{R}^3$ itself).`,
    related_formulas: `- [Dimension Definition](!/linear-algebra/formulas#dimension_definition)
- [Dimension Sum Formula](!/linear-algebra/formulas#dimension_sum_formula)`,
    related_definitions: `- [Subspace](!/linear-algebra/definitions#subspace)
- [Dimension](!/linear-algebra/definitions#dimension)`,
  },

  {
    name: 'Dimension Sum Formula',
    entity: 'dimension',
    category: 'Dimension & Rank',
    formula: `$$\\dim(W_1 + W_2) = \\dim(W_1) + \\dim(W_2) - \\dim(W_1 \\cap W_2)$$`,
    link: { label: 'The Dimension Formula for Subspace Sums', url: '/linear-algebra/vector-spaces/dimension#8' },
    explanation: `The dimension of a sum of subspaces is the sum of their dimensions minus the dimension of their intersection — the linear-algebra analogue of inclusion-exclusion for set sizes. Vectors in $W_1 \\cap W_2$ are counted once in each summand, so the intersection is subtracted to avoid double-counting.`,
    derivation: `Take a basis $\\{\\mathbf{u}_1, \\ldots, \\mathbf{u}_k\\}$ of $W_1 \\cap W_2$. Extend to a basis $\\{\\mathbf{u}_1, \\ldots, \\mathbf{u}_k, \\mathbf{v}_1, \\ldots, \\mathbf{v}_p\\}$ of $W_1$ and to a basis $\\{\\mathbf{u}_1, \\ldots, \\mathbf{u}_k, \\mathbf{w}_1, \\ldots, \\mathbf{w}_q\\}$ of $W_2$. The combined set $\\{\\mathbf{u}_i, \\mathbf{v}_j, \\mathbf{w}_l\\}$ is a basis of $W_1 + W_2$, with size $k + p + q = (k+p) + (k+q) - k = \\dim W_1 + \\dim W_2 - \\dim(W_1 \\cap W_2)$.`,
    related_formulas: `- [Direct Sum Criterion](!/linear-algebra/formulas#direct_sum_criterion)
- [Direct Sum Dimension](!/linear-algebra/formulas#direct_sum_dimension)
- [Subspace Dimension Inequality](!/linear-algebra/formulas#subspace_dimension_inequality)`,
    related_definitions: `- [Subspace](!/linear-algebra/definitions#subspace)
- [Dimension](!/linear-algebra/definitions#dimension)`,
  },

  {
    name: 'Direct Sum Criterion',
    entity: 'subspace',
    category: 'Dimension & Rank',
    formula: `$$V = W_1 \\oplus W_2 \\iff V = W_1 + W_2 \\text{ and } W_1 \\cap W_2 = \\{\\mathbf{0}\\}$$`,
    link: { label: 'The Dimension Formula for Subspace Sums', url: '/linear-algebra/vector-spaces/dimension#8' },
    explanation: `A sum of two subspaces is direct exactly when the intersection is trivial. The trivial-intersection condition is what guarantees uniqueness of the decomposition $\\mathbf{v} = \\mathbf{w}_1 + \\mathbf{w}_2$: any two decompositions would differ by a nonzero vector lying in both $W_1$ and $W_2$, contradicting $W_1 \\cap W_2 = \\{\\mathbf{0}\\}$.`,
    variants: `Equivalent characterization via uniqueness of decomposition:
$$V = W_1 \\oplus W_2 \\iff \\forall\\, \\mathbf{v} \\in V,\\ \\exists!\\, (\\mathbf{w}_1, \\mathbf{w}_2) \\in W_1 \\times W_2: \\mathbf{v} = \\mathbf{w}_1 + \\mathbf{w}_2$$
Equivalent characterization via the zero vector:
$$V = W_1 \\oplus W_2 \\iff V = W_1 + W_2 \\text{ and } \\mathbf{0} = \\mathbf{w}_1 + \\mathbf{w}_2 \\Rightarrow \\mathbf{w}_1 = \\mathbf{w}_2 = \\mathbf{0}$$`,
    related_formulas: `- [Dimension Sum Formula](!/linear-algebra/formulas#dimension_sum_formula)
- [Direct Sum Dimension](!/linear-algebra/formulas#direct_sum_dimension)`,
    related_definitions: `- [Subspace](!/linear-algebra/definitions#subspace)
- [Vector Space](!/linear-algebra/definitions#vector_space)`,
  },

  {
    name: 'Direct Sum Dimension',
    entity: 'dimension',
    category: 'Dimension & Rank',
    formula: `$$V = W_1 \\oplus W_2 \\Rightarrow \\dim(V) = \\dim(W_1) + \\dim(W_2)$$`,
    link: { label: 'The Dimension Formula for Subspace Sums', url: '/linear-algebra/vector-spaces/dimension#8' },
    explanation: `For a direct sum, dimensions add cleanly. The dimension formula for sums reduces to plain addition because the intersection has dimension zero. Conversely, if $V = W_1 + W_2$ and $\\dim V = \\dim W_1 + \\dim W_2$, the sum is automatically direct.`,
    derivation: `Apply the dimension sum formula with $\\dim(W_1 \\cap W_2) = \\dim\\{\\mathbf{0}\\} = 0$.`,
    related_formulas: `- [Dimension Sum Formula](!/linear-algebra/formulas#dimension_sum_formula)
- [Direct Sum Criterion](!/linear-algebra/formulas#direct_sum_criterion)`,
    related_definitions: `- [Subspace](!/linear-algebra/definitions#subspace)
- [Dimension](!/linear-algebra/definitions#dimension)`,
  },

  {
    name: 'Rank-Nullity Theorem (Matrix Form)',
    entity: 'column_space',
    category: 'Dimension & Rank',
    formula: `$$\\dim(\\text{Col}\\,A) + \\dim(\\text{Null}\\,A) = n$$`,
    link: { label: 'The Rank-Nullity Theorem as a Dimension Statement', url: '/linear-algebra/vector-spaces/dimension#9' },
    explanation: `For an $m \\times n$ matrix $A$, the dimensions of the column space and the null space sum to $n$ — the dimension of the domain $\\mathbb{R}^n$. The $n$ degrees of freedom in the input split between what survives the map (column space) and what is annihilated (null space). No dimensions are created or destroyed.`,
    notation: `$\\dim(\\text{Col}\\,A) = \\text{rank}(A)$ is the rank, and $\\dim(\\text{Null}\\,A) = n - \\text{rank}(A)$ is the nullity. The number of pivot columns is the rank; the number of free variables is the nullity.`,
    variants: `Codomain version (using transpose):
$$\\dim(\\text{Col}\\,A) + \\dim(\\text{Null}\\,A^T) = m$$
Row-space version:
$$\\dim(\\text{Row}\\,A) + \\dim(\\text{Null}\\,A) = n$$`,
    related_formulas: `- [Four Subspaces Dimensions](!/linear-algebra/formulas#four_fundamental_subspaces_dimensions)
- [Row Rank Equals Column Rank](!/linear-algebra/formulas#row_rank_equals_column_rank)`,
    related_definitions: `- [Column Space](!/linear-algebra/definitions#column_space)
- [Null Space](!/linear-algebra/definitions#null_space)
- [Dimension](!/linear-algebra/definitions#dimension)`,
  },

  {
    name: 'Four Fundamental Subspaces Dimensions',
    entity: 'column_space',
    category: 'Dimension & Rank',
    formula: `$$\\begin{aligned} \\dim(\\text{Col}\\,A) &= r & \\dim(\\text{Row}\\,A) &= r \\\\ \\dim(\\text{Null}\\,A) &= n - r & \\dim(\\text{Null}\\,A^T) &= m - r \\end{aligned}$$`,
    link: { label: 'Dimension Accounting', url: '/linear-algebra/vector-spaces/fundamental-spaces#6' },
    explanation: `For an $m \\times n$ matrix of rank $r$, all four fundamental subspaces have dimensions determined by $r$. The column space and row space share dimension $r$ (despite living in different ambient spaces). The null space takes the remaining $n - r$ dimensions of the domain, the left null space takes the remaining $m - r$ dimensions of the codomain. Domain dimensions sum to $n$, codomain dimensions sum to $m$.`,
    conditions: `$r = \\text{rank}(A)$. Constraints: $0 \\leq r \\leq \\min(m, n)$.`,
    related_formulas: `- [Rank-Nullity Theorem (Matrix Form)](!/linear-algebra/formulas#rank_nullity_theorem_matrix_form)
- [Row Rank Equals Column Rank](!/linear-algebra/formulas#row_rank_equals_column_rank)`,
    related_definitions: `- [Column Space](!/linear-algebra/definitions#column_space)
- [Row Space](!/linear-algebra/definitions#row_space)
- [Null Space](!/linear-algebra/definitions#null_space)
- [Left Null Space](!/linear-algebra/definitions#left_null_space)`,
  },

  {
    name: 'Row Rank Equals Column Rank',
    entity: 'row_space',
    category: 'Dimension & Rank',
    formula: `$$\\dim(\\text{Row}\\,A) = \\dim(\\text{Col}\\,A) = \\text{rank}(A)$$`,
    link: { label: 'Overview', url: '/linear-algebra/vector-spaces/fundamental-spaces#1' },
    explanation: `The row space and column space of any matrix have the same dimension, despite living in different ambient spaces ($\\mathbb{R}^n$ and $\\mathbb{R}^m$ respectively). This common value is the rank. The result is unexpected — the rows and columns of a matrix encode different information, yet the number of independent rows always equals the number of independent columns.`,
    derivation: `Row reduction preserves the row space, so $\\dim(\\text{Row}\\,A)$ equals the number of nonzero rows in echelon form, which equals the number of pivots. Each pivot lies in a distinct column, and the corresponding columns of the original $A$ form a basis for the column space, so $\\dim(\\text{Col}\\,A)$ also equals the number of pivots.`,
    related_formulas: `- [Rank-Nullity Theorem (Matrix Form)](!/linear-algebra/formulas#rank_nullity_theorem_matrix_form)
- [Four Fundamental Subspaces Dimensions](!/linear-algebra/formulas#four_fundamental_subspaces_dimensions)`,
    related_definitions: `- [Row Space](!/linear-algebra/definitions#row_space)
- [Column Space](!/linear-algebra/definitions#column_space)`,
  },


// Linear Algebra Formulas — Batch 3A
// Section: /linear-algebra/formulas
// Categories: Operations (10), Transpose & Symmetry (9)
// 19 entries



  // ═══════════════════════════════════════════
  // CATEGORY: Operations (10)
  // ═══════════════════════════════════════════

  {
    name: 'Matrix Equality',
    entity: 'matrix',
    category: 'Operations',
    formula: `$$A = B \\iff a_{ij} = b_{ij} \\text{ for all } i, j$$`,
    link: { label: 'Matrix Equality and the Zero Matrix', url: '/linear-algebra/matrix#3' },
    explanation: `Two matrices are equal precisely when they share the same dimensions and every corresponding entry matches. A single mismatched entry breaks equality. Matrices of different shapes are never equal regardless of contents — a $2 \\times 3$ matrix cannot equal a $3 \\times 2$ matrix.`,
    conditions: `Both matrices must have the same dimensions $m \\times n$.`,
    related_formulas: `- [Matrix Addition](!/linear-algebra/formulas#matrix_addition)
- [Transpose Definition](!/linear-algebra/formulas#transpose_definition)`,
    related_definitions: `- [Matrix](!/linear-algebra/definitions#matrix)`,
  },

  {
    name: 'Matrix Addition',
    entity: 'matrix',
    category: 'Operations',
    formula: `$$(A + B)_{ij} = a_{ij} + b_{ij}$$`,
    link: { label: 'Matrix Addition', url: '/linear-algebra/matrix/operations#1' },
    explanation: `Matrix addition is performed entry by entry. The sum has the same shape as the operands. Equipped with addition and scalar multiplication, the set of $m \\times n$ matrices forms a vector space of dimension $mn$.`,
    conditions: `$A, B \\in \\mathbb{R}^{m \\times n}$ — same dimensions required.`,
    variants: `**Commutativity:** $A + B = B + A$
**Associativity:** $(A + B) + C = A + (B + C)$
**Identity:** $A + O = A$ where $O$ is the zero matrix
**Inverse:** $A + (-A) = O$`,
    related_formulas: `- [Matrix Subtraction](!/linear-algebra/formulas#matrix_subtraction)
- [Scalar Multiplication of Matrices](!/linear-algebra/formulas#scalar_multiplication_of_matrices)
- [Vector Addition](!/linear-algebra/formulas#vector_addition)`,
    related_definitions: `- [Matrix](!/linear-algebra/definitions#matrix)`,
  },

  {
    name: 'Matrix Subtraction',
    entity: 'matrix',
    category: 'Operations',
    formula: `$$(A - B)_{ij} = a_{ij} - b_{ij}$$`,
    link: { label: 'Matrix Subtraction', url: '/linear-algebra/matrix/operations#2' },
    explanation: `Subtraction is defined as addition of the additive inverse: $A - B = A + (-B)$. Entry by entry, this corresponds to subtracting matching components.`,
    conditions: `$A, B \\in \\mathbb{R}^{m \\times n}$ — same dimensions required.`,
    related_formulas: `- [Matrix Addition](!/linear-algebra/formulas#matrix_addition)
- [Scalar Multiplication of Matrices](!/linear-algebra/formulas#scalar_multiplication_of_matrices)`,
    related_definitions: `- [Matrix](!/linear-algebra/definitions#matrix)`,
  },

  {
    name: 'Scalar Multiplication of Matrices',
    entity: 'matrix',
    category: 'Operations',
    formula: `$$(cA)_{ij} = c \\cdot a_{ij}$$`,
    link: { label: 'Scalar Multiplication', url: '/linear-algebra/matrix/operations#3' },
    explanation: `Multiplying a matrix by a scalar scales every entry by that scalar. Together with addition, this operation gives the matrix space its vector space structure.`,
    variants: `**Distributivity over matrix sum:** $c(A + B) = cA + cB$
**Distributivity over scalar sum:** $(c + d)A = cA + dA$
**Associativity:** $c(dA) = (cd)A$
**Identity:** $1 \\cdot A = A$
**Annihilation:** $0 \\cdot A = O$`,
    related_formulas: `- [Matrix Addition](!/linear-algebra/formulas#matrix_addition)
- [Linear Combination](!/linear-algebra/formulas#linear_combination)
- [Scalar Multiplication of Vectors](!/linear-algebra/formulas#scalar_multiplication_of_vectors)`,
    related_definitions: `- [Matrix](!/linear-algebra/definitions#matrix)
- [Scalar](!/linear-algebra/definitions#scalar)`,
  },

  {
    name: 'Matrix Multiplication',
    entity: 'matrix',
    category: 'Operations',
    formula: `$$(AB)_{ij} = \\sum_{k=1}^{n} a_{ik}\\, b_{kj}$$`,
    link: { label: 'Matrix Multiplication — Definition', url: '/linear-algebra/matrix/operations#5' },
    explanation: `The $(i,j)$ entry of the product is the dot product of row $i$ of $A$ with column $j$ of $B$. The number of columns of $A$ must equal the number of rows of $B$, and the result has dimensions $m \\times p$.`,
    conditions: `$A \\in \\mathbb{R}^{m \\times n}$, $B \\in \\mathbb{R}^{n \\times p}$. Inner dimensions must match.`,
    variants: `**Column form:** column $j$ of $AB$ equals $A$ times column $j$ of $B$
**Row form:** row $i$ of $AB$ equals row $i$ of $A$ times $B$
**Outer-product form:** $AB = \\sum_{k=1}^{n} \\mathbf{a}_k \\mathbf{b}_k^T$ where $\\mathbf{a}_k$ is the $k$-th column of $A$ and $\\mathbf{b}_k^T$ is the $k$-th row of $B$`,
    related_formulas: `- [Matrix-Vector Product (Column Form)](!/linear-algebra/formulas#matrix_vector_product_column_form)
- [Matrix Multiplication Associativity](!/linear-algebra/formulas#matrix_multiplication_associativity)
- [Matrix Multiplication Non-Commutativity](!/linear-algebra/formulas#matrix_multiplication_non_commutativity)
- [Dot Product (Algebraic)](!/linear-algebra/formulas#dot_product_algebraic)`,
    related_definitions: `- [Matrix](!/linear-algebra/definitions#matrix)`,
  },

  {
    name: 'Matrix-Vector Product (Column Form)',
    entity: 'matrix',
    category: 'Operations',
    formula: `$$A\\mathbf{x} = x_1 \\mathbf{a}_1 + x_2 \\mathbf{a}_2 + \\cdots + x_n \\mathbf{a}_n$$`,
    link: { label: 'Matrices as Collections of Vectors', url: '/linear-algebra/matrix#4' },
    explanation: `The product $A\\mathbf{x}$ is a linear combination of the columns of $A$, weighted by the entries of $\\mathbf{x}$. This single observation underlies the theory of linear systems, transformations, and the column space.`,
    notation: `$\\mathbf{a}_1, \\ldots, \\mathbf{a}_n$ are the columns of $A$; $x_1, \\ldots, x_n$ are the entries of $\\mathbf{x}$.`,
    related_formulas: `- [Matrix Multiplication](!/linear-algebra/formulas#matrix_multiplication)
- [Linear Combination](!/linear-algebra/formulas#linear_combination)
- [Span Membership](!/linear-algebra/formulas#span_membership_criterion)`,
    related_definitions: `- [Matrix](!/linear-algebra/definitions#matrix)
- [Linear Combination](!/linear-algebra/definitions#linear_combination)
- [Column Space](!/linear-algebra/definitions#column_space)`,
  },

  {
    name: 'Matrix Multiplication Associativity',
    entity: 'matrix',
    category: 'Operations',
    formula: `$$(AB)C = A(BC)$$`,
    link: { label: 'Matrix Multiplication — Properties', url: '/linear-algebra/matrix/operations#6' },
    explanation: `Matrix multiplication is associative whenever both products are defined. The grouping of three or more factors does not affect the result, allowing chains $ABCD$ to be written without parentheses.`,
    conditions: `Dimensions must align: if $A$ is $m \\times n$, $B$ is $n \\times p$, and $C$ is $p \\times q$, both $(AB)C$ and $A(BC)$ are $m \\times q$.`,
    related_formulas: `- [Matrix Multiplication](!/linear-algebra/formulas#matrix_multiplication)
- [Matrix Multiplication Distributivity](!/linear-algebra/formulas#matrix_multiplication_distributivity)`,
    related_definitions: `- [Matrix](!/linear-algebra/definitions#matrix)`,
  },

  {
    name: 'Matrix Multiplication Distributivity',
    entity: 'matrix',
    category: 'Operations',
    formula: `$$A(B + C) = AB + AC, \\qquad (A + B)C = AC + BC$$`,
    link: { label: 'Matrix Multiplication — Properties', url: '/linear-algebra/matrix/operations#6' },
    explanation: `Matrix multiplication distributes over matrix addition from both sides. Because multiplication is non-commutative, the left- and right-distributive laws are stated separately, but both hold whenever dimensions align.`,
    conditions: `For the left law: $B$ and $C$ must have the same shape, and $A$ must be conformable on the left. For the right law: $A$ and $B$ must have the same shape, and $C$ must be conformable on the right.`,
    variants: `**Scalar pass-through:** $c(AB) = (cA)B = A(cB)$ for any scalar $c$`,
    related_formulas: `- [Matrix Multiplication](!/linear-algebra/formulas#matrix_multiplication)
- [Matrix Multiplication Associativity](!/linear-algebra/formulas#matrix_multiplication_associativity)`,
    related_definitions: `- [Matrix](!/linear-algebra/definitions#matrix)`,
  },

  {
    name: 'Matrix Multiplication Non-Commutativity',
    entity: 'matrix',
    category: 'Operations',
    formula: `$$AB \\neq BA \\quad \\text{in general}$$`,
    link: { label: 'Matrix Multiplication — Properties', url: '/linear-algebra/matrix/operations#6' },
    explanation: `Matrix multiplication does not generally commute, even when both products are defined and have matching dimensions. This asymmetry distinguishes matrix algebra from scalar arithmetic and has far-reaching consequences for inverses, powers, and transformations.`,
    derivation: `Counterexample: $A = \\begin{pmatrix} 1 & 2 \\\\ 0 & 0 \\end{pmatrix}$, $B = \\begin{pmatrix} 0 & 0 \\\\ 3 & 4 \\end{pmatrix}$ give $AB = \\begin{pmatrix} 6 & 8 \\\\ 0 & 0 \\end{pmatrix}$ and $BA = \\begin{pmatrix} 0 & 0 \\\\ 3 & 6 \\end{pmatrix}$. The two products differ.`,
    variants: `**Commuting matrices:** $A$ and $B$ commute when $AB = BA$. Diagonal matrices commute with each other; scalar matrices $cI$ commute with every square matrix of the same order.
**Zero divisors:** $AB = O$ does not imply $A = O$ or $B = O$.
**Cancellation fails:** $AB = AC$ does not imply $B = C$ unless $A$ is invertible.`,
    related_formulas: `- [Matrix Multiplication](!/linear-algebra/formulas#matrix_multiplication)
- [Inverse of Product](!/linear-algebra/formulas#inverse_of_product)`,
    related_definitions: `- [Matrix](!/linear-algebra/definitions#matrix)`,
  },

  {
    name: 'Matrix Power',
    entity: 'square_matrix',
    category: 'Operations',
    formula: `$$A^0 = I, \\qquad A^k = \\underbrace{A \\cdot A \\cdots A}_{k \\text{ factors}}, \\qquad A^{-k} = (A^{-1})^k$$`,
    link: { label: 'Matrix Powers', url: '/linear-algebra/matrix/operations#9' },
    explanation: `Powers are defined for square matrices through repeated multiplication, with $A^0 = I$ by convention. Negative powers exist only when $A$ is invertible. The standard exponent laws $A^j A^k = A^{j+k}$ and $(A^j)^k = A^{jk}$ hold for all integers when $A$ is invertible, and for non-negative integers in general.`,
    conditions: `$A$ must be square. Negative powers require $A$ to be invertible.`,
    variants: `**Failure of $(AB)^k = A^k B^k$:** non-commutativity blocks this rule. The identity $(AB)^2 = ABAB$ does not in general equal $A^2 B^2$.`,
    related_formulas: `- [Diagonal Matrix Power](!/linear-algebra/formulas#diagonal_matrix_power)
- [Inverse of Power](!/linear-algebra/formulas#inverse_of_power)
- [Matrix Multiplication](!/linear-algebra/formulas#matrix_multiplication)`,
    related_definitions: `- [Square Matrix](!/linear-algebra/definitions#square_matrix)`,
  },

  // ═══════════════════════════════════════════
  // CATEGORY: Transpose & Symmetry (9)
  // ═══════════════════════════════════════════

  {
    name: 'Transpose Definition',
    entity: 'matrix',
    category: 'Transpose & Symmetry',
    formula: `$$(A^T)_{ij} = a_{ji}$$`,
    link: { label: 'The Transpose', url: '/linear-algebra/matrix/operations#8' },
    explanation: `The transpose flips a matrix across its main diagonal, converting rows into columns. An $m \\times n$ matrix becomes $n \\times m$, with the $(i,j)$ entry of $A^T$ taken from the $(j,i)$ entry of $A$.`,
    related_formulas: `- [Transpose Involution](!/linear-algebra/formulas#transpose_involution)
- [Transpose of Sum](!/linear-algebra/formulas#transpose_of_sum)
- [Transpose of Product](!/linear-algebra/formulas#transpose_of_product)
- [Symmetric Matrix Definition](!/linear-algebra/formulas#symmetric_matrix_definition)`,
    related_definitions: `- [Matrix](!/linear-algebra/definitions#matrix)`,
  },

  {
    name: 'Transpose Involution',
    entity: 'matrix',
    category: 'Transpose & Symmetry',
    formula: `$$(A^T)^T = A$$`,
    link: { label: 'The Transpose', url: '/linear-algebra/matrix/operations#8' },
    explanation: `Transposing twice returns the original matrix. The transpose is its own inverse operation.`,
    related_formulas: `- [Transpose Definition](!/linear-algebra/formulas#transpose_definition)`,
    related_definitions: `- [Matrix](!/linear-algebra/definitions#matrix)`,
  },

  {
    name: 'Transpose of Sum',
    entity: 'matrix',
    category: 'Transpose & Symmetry',
    formula: `$$(A + B)^T = A^T + B^T$$`,
    link: { label: 'The Transpose', url: '/linear-algebra/matrix/operations#8' },
    explanation: `Transposition distributes over matrix addition. Together with $(cA)^T = cA^T$, this makes transposition a linear operation on the space of matrices.`,
    conditions: `$A$ and $B$ must have the same dimensions.`,
    related_formulas: `- [Transpose Definition](!/linear-algebra/formulas#transpose_definition)
- [Transpose of Scalar Multiple](!/linear-algebra/formulas#transpose_of_scalar_multiple)
- [Matrix Addition](!/linear-algebra/formulas#matrix_addition)`,
    related_definitions: `- [Matrix](!/linear-algebra/definitions#matrix)`,
  },

  {
    name: 'Transpose of Scalar Multiple',
    entity: 'matrix',
    category: 'Transpose & Symmetry',
    formula: `$$(cA)^T = c\\, A^T$$`,
    link: { label: 'The Transpose', url: '/linear-algebra/matrix/operations#8' },
    explanation: `Scalar multiplication commutes with transposition. The scalar passes through unchanged.`,
    related_formulas: `- [Transpose Definition](!/linear-algebra/formulas#transpose_definition)
- [Transpose of Sum](!/linear-algebra/formulas#transpose_of_sum)`,
    related_definitions: `- [Matrix](!/linear-algebra/definitions#matrix)
- [Scalar](!/linear-algebra/definitions#scalar)`,
  },

  {
    name: 'Transpose of Product',
    entity: 'matrix',
    category: 'Transpose & Symmetry',
    formula: `$$(AB)^T = B^T A^T$$`,
    link: { label: 'The Transpose', url: '/linear-algebra/matrix/operations#8' },
    explanation: `The transpose of a product is the product of the transposes in reversed order. The order reversal is essential — it accommodates the dimension matching that the product requires.`,
    derivation: `The $(i,j)$ entry of $(AB)^T$ is the $(j,i)$ entry of $AB$, namely $\\sum_k a_{jk} b_{ki}$. The $(i,j)$ entry of $B^T A^T$ is $\\sum_k (B^T)_{ik}(A^T)_{kj} = \\sum_k b_{ki} a_{jk}$. The two sums are identical.`,
    variants: `**Multi-factor:** $(A_1 A_2 \\cdots A_k)^T = A_k^T \\cdots A_2^T A_1^T$
**Inverse analogue:** $(AB)^{-1} = B^{-1} A^{-1}$ — the same reversal pattern`,
    related_formulas: `- [Transpose Definition](!/linear-algebra/formulas#transpose_definition)
- [Inverse of Product](!/linear-algebra/formulas#inverse_of_product)
- [Inverse of Transpose](!/linear-algebra/formulas#inverse_of_transpose)`,
    related_definitions: `- [Matrix](!/linear-algebra/definitions#matrix)`,
  },

  {
    name: 'Symmetric Matrix Definition',
    entity: 'symmetric_matrix',
    category: 'Transpose & Symmetry',
    formula: `$$A = A^T \\iff a_{ij} = a_{ji} \\text{ for all } i, j$$`,
    link: { label: 'Symmetric Matrices', url: '/linear-algebra/matrix/types#5' },
    explanation: `A symmetric matrix equals its own transpose. The matrix is mirrored across its main diagonal, fully determined by entries on and above the diagonal. Symmetric matrices have all-real eigenvalues and admit orthogonal diagonalization.`,
    conditions: `$A$ must be square.`,
    variants: `**Skew-symmetric:** $A^T = -A$ (see [Skew-Symmetric Matrix Definition](!/linear-algebra/formulas#skew_symmetric_matrix_definition))
**Hermitian (complex):** $A^* = A$ where $A^*$ is the conjugate transpose`,
    related_formulas: `- [Skew-Symmetric Matrix Definition](!/linear-algebra/formulas#skew_symmetric_matrix_definition)
- [Symmetric Skew Decomposition](!/linear-algebra/formulas#symmetric_skew_decomposition)
- [Gram Matrix Symmetry](!/linear-algebra/formulas#gram_matrix_symmetry)
- [Transpose Definition](!/linear-algebra/formulas#transpose_definition)`,
    related_definitions: `- [Symmetric Matrix](!/linear-algebra/definitions#symmetric_matrix)`,
  },

  {
    name: 'Skew-Symmetric Matrix Definition',
    entity: 'symmetric_matrix',
    category: 'Transpose & Symmetry',
    formula: `$$A^T = -A \\iff a_{ij} = -a_{ji}$$`,
    link: { label: 'Skew-Symmetric Matrices', url: '/linear-algebra/matrix/types#6' },
    explanation: `A skew-symmetric matrix negates under transposition. Setting $i = j$ in $a_{ii} = -a_{ii}$ forces every diagonal entry to zero. Real skew-symmetric matrices have eigenvalues that are zero or purely imaginary.`,
    conditions: `$A$ must be square. Diagonal entries are necessarily zero. For odd order, $\\det(A) = 0$.`,
    related_formulas: `- [Symmetric Matrix Definition](!/linear-algebra/formulas#symmetric_matrix_definition)
- [Symmetric Skew Decomposition](!/linear-algebra/formulas#symmetric_skew_decomposition)
- [Cross Product as Skew Matrix](!/linear-algebra/formulas#cross_product_skew_matrix)
- [Trace Symmetric Skew Product](!/linear-algebra/formulas#trace_symmetric_skew_product)`,
    related_definitions: `- [Symmetric Matrix](!/linear-algebra/definitions#symmetric_matrix)`,
  },

  {
    name: 'Symmetric Skew Decomposition',
    entity: 'symmetric_matrix',
    category: 'Transpose & Symmetry',
    formula: `$$A = \\tfrac{1}{2}(A + A^T) + \\tfrac{1}{2}(A - A^T)$$`,
    link: { label: 'Skew-Symmetric Matrices', url: '/linear-algebra/matrix/types#6' },
    explanation: `Every square matrix splits uniquely into a symmetric part $\\tfrac{1}{2}(A + A^T)$ and a skew-symmetric part $\\tfrac{1}{2}(A - A^T)$. The decomposition mirrors how every function of two variables splits into symmetric and antisymmetric components.`,
    conditions: `$A$ must be square.`,
    derivation: `Let $S = \\tfrac{1}{2}(A + A^T)$. Then $S^T = \\tfrac{1}{2}(A^T + A) = S$, so $S$ is symmetric. Let $K = \\tfrac{1}{2}(A - A^T)$. Then $K^T = \\tfrac{1}{2}(A^T - A) = -K$, so $K$ is skew-symmetric. Their sum is $A$. Uniqueness: if $A = S' + K'$ with $S'$ symmetric and $K'$ skew-symmetric, transposing gives $A^T = S' - K'$, and solving yields $S' = S$, $K' = K$.`,
    related_formulas: `- [Symmetric Matrix Definition](!/linear-algebra/formulas#symmetric_matrix_definition)
- [Skew-Symmetric Matrix Definition](!/linear-algebra/formulas#skew_symmetric_matrix_definition)`,
    related_definitions: `- [Symmetric Matrix](!/linear-algebra/definitions#symmetric_matrix)`,
  },

  {
    name: 'Gram Matrix Symmetry',
    entity: 'symmetric_matrix',
    category: 'Transpose & Symmetry',
    formula: `$$(A^T A)^T = A^T A, \\qquad (A A^T)^T = A A^T$$`,
    link: { label: 'The Transpose', url: '/linear-algebra/matrix/operations#8' },
    explanation: `For any matrix $A$ of any shape, the products $A^T A$ and $A A^T$ are symmetric. These Gram matrices appear in least squares, the singular value decomposition, and inner-product computations.`,
    derivation: `Apply the transpose-of-product rule: $(A^T A)^T = A^T (A^T)^T = A^T A$. The same argument shows $(AA^T)^T = AA^T$.`,
    related_formulas: `- [Symmetric Matrix Definition](!/linear-algebra/formulas#symmetric_matrix_definition)
- [Transpose of Product](!/linear-algebra/formulas#transpose_of_product)
- [Gram Rank Identity](!/linear-algebra/formulas#gram_rank_identity)`,
    related_definitions: `- [Symmetric Matrix](!/linear-algebra/definitions#symmetric_matrix)
- [Matrix](!/linear-algebra/definitions#matrix)`,
  },


// Linear Algebra Formulas — Batch 3B
// Section: /linear-algebra/formulas
// Category: Special Matrix Types (14)
// 14 entries



  // ═══════════════════════════════════════════
  // CATEGORY: Special Matrix Types (14)
  // ═══════════════════════════════════════════

  {
    name: 'Identity Matrix Definition',
    entity: 'identity_matrix',
    category: 'Special Matrix Types',
    formula: `$$I_n = [\\delta_{ij}], \\qquad \\delta_{ij} = \\begin{cases} 1 & i = j \\\\ 0 & i \\neq j \\end{cases}$$`,
    link: { label: 'The Identity Matrix', url: '/linear-algebra/matrix/types#2' },
    explanation: `The identity matrix has ones on the main diagonal and zeros elsewhere. The Kronecker delta $\\delta_{ij}$ is shorthand for this pattern. The subscript $n$ is dropped when size is clear from context.`,
    notation: `$\\delta_{ij}$ is the Kronecker delta — equal to $1$ when indices match and $0$ otherwise.`,
    related_formulas: `- [Identity Matrix Property](!/linear-algebra/formulas#identity_matrix_property)
- [Diagonal Matrix Definition](!/linear-algebra/formulas#diagonal_matrix_definition)`,
    related_definitions: `- [Identity Matrix](!/linear-algebra/definitions#identity_matrix)`,
  },

  {
    name: 'Identity Matrix Property',
    entity: 'identity_matrix',
    category: 'Special Matrix Types',
    formula: `$$AI = IA = A$$`,
    link: { label: 'The Identity Matrix', url: '/linear-algebra/matrix/types#2' },
    explanation: `The identity matrix is the multiplicative identity for matrix multiplication. Multiplying any matrix by $I$ on either side returns the original matrix unchanged, provided dimensions are compatible.`,
    conditions: `For $A$ of shape $m \\times n$: $I_m A = A I_n = A$.`,
    related_formulas: `- [Identity Matrix Definition](!/linear-algebra/formulas#identity_matrix_definition)
- [Matrix Multiplication](!/linear-algebra/formulas#matrix_multiplication)
- [Inverse Definition](!/linear-algebra/formulas#inverse_definition)`,
    related_definitions: `- [Identity Matrix](!/linear-algebra/definitions#identity_matrix)`,
  },

  {
    name: 'Diagonal Matrix Definition',
    entity: 'diagonal_matrix',
    category: 'Special Matrix Types',
    formula: `$$D = \\operatorname{diag}(d_1, d_2, \\ldots, d_n) \\iff d_{ij} = 0 \\text{ for } i \\neq j$$`,
    link: { label: 'Diagonal Matrices', url: '/linear-algebra/matrix/types#3' },
    explanation: `A diagonal matrix has nonzero entries only on the main diagonal. Diagonal matrices are the easiest to compute with: products, powers, and inverses all reduce to operations on the diagonal entries alone.`,
    conditions: `$D$ must be square.`,
    variants: `**Product:** $\\operatorname{diag}(d_1, \\ldots, d_n) \\cdot \\operatorname{diag}(e_1, \\ldots, e_n) = \\operatorname{diag}(d_1 e_1, \\ldots, d_n e_n)$
**Scalar matrix:** $cI = \\operatorname{diag}(c, c, \\ldots, c)$`,
    related_formulas: `- [Diagonal Matrix Power](!/linear-algebra/formulas#diagonal_matrix_power)
- [Diagonal Matrix Inverse](!/linear-algebra/formulas#diagonal_matrix_inverse)
- [Diagonal Matrix Determinant](!/linear-algebra/formulas#diagonal_matrix_determinant)
- [Identity Matrix Definition](!/linear-algebra/formulas#identity_matrix_definition)`,
    related_definitions: `- [Diagonal Matrix](!/linear-algebra/definitions#diagonal_matrix)`,
  },

  {
    name: 'Diagonal Matrix Power',
    entity: 'diagonal_matrix',
    category: 'Special Matrix Types',
    formula: `$$D^k = \\operatorname{diag}(d_1^k, d_2^k, \\ldots, d_n^k)$$`,
    link: { label: 'Diagonal Matrices', url: '/linear-algebra/matrix/types#3' },
    explanation: `Each diagonal entry is raised to the $k$-th power independently. This trivial behavior is the principal reason diagonalization is so useful: writing $A = PDP^{-1}$ converts an expensive matrix power into a cheap diagonal power, $A^k = PD^kP^{-1}$.`,
    related_formulas: `- [Diagonal Matrix Definition](!/linear-algebra/formulas#diagonal_matrix_definition)
- [Matrix Power](!/linear-algebra/formulas#matrix_power)
- [Diagonal Matrix Inverse](!/linear-algebra/formulas#diagonal_matrix_inverse)`,
    related_definitions: `- [Diagonal Matrix](!/linear-algebra/definitions#diagonal_matrix)`,
  },

  {
    name: 'Diagonal Matrix Determinant',
    entity: 'diagonal_matrix',
    category: 'Special Matrix Types',
    formula: `$$\\det\\bigl(\\operatorname{diag}(d_1, \\ldots, d_n)\\bigr) = d_1 d_2 \\cdots d_n$$`,
    link: { label: 'Diagonal Matrices', url: '/linear-algebra/matrix/types#3' },
    explanation: `The determinant of a diagonal matrix is the product of its diagonal entries. The matrix is invertible precisely when every diagonal entry is nonzero.`,
    related_formulas: `- [Diagonal Matrix Definition](!/linear-algebra/formulas#diagonal_matrix_definition)
- [Triangular Matrix Determinant](!/linear-algebra/formulas#triangular_matrix_determinant)
- [Diagonal Matrix Inverse](!/linear-algebra/formulas#diagonal_matrix_inverse)`,
    related_definitions: `- [Diagonal Matrix](!/linear-algebra/definitions#diagonal_matrix)
- [Determinant](!/linear-algebra/definitions#determinant)`,
  },

  {
    name: 'Triangular Matrix Determinant',
    entity: 'matrix',
    category: 'Special Matrix Types',
    formula: `$$\\det(T) = t_{11} \\, t_{22} \\cdots t_{nn}$$`,
    link: { label: 'Triangular Matrices', url: '/linear-algebra/matrix/types#4' },
    explanation: `For an upper or lower triangular matrix, the determinant is the product of its diagonal entries. The eigenvalues are also the diagonal entries, both readable directly without further computation.`,
    conditions: `$T$ must be triangular — all entries above the diagonal zero (lower) or all entries below the diagonal zero (upper).`,
    related_formulas: `- [Diagonal Matrix Determinant](!/linear-algebra/formulas#diagonal_matrix_determinant)`,
    related_definitions: `- [Determinant](!/linear-algebra/definitions#determinant)`,
  },

  {
    name: 'Orthogonal Matrix Definition',
    entity: 'orthogonal_matrix',
    category: 'Special Matrix Types',
    formula: `$$Q^T Q = Q Q^T = I$$`,
    link: { label: 'Orthogonal Matrices', url: '/linear-algebra/matrix/types#7' },
    explanation: `An orthogonal matrix has its transpose as its inverse. Equivalently, the columns form an orthonormal set, and so do the rows. Orthogonal matrices preserve lengths and angles — they are the linear isometries.`,
    conditions: `$Q$ must be square. Both products $Q^TQ$ and $QQ^T$ must equal $I$.`,
    variants: `**Length preservation:** $\\|Q\\mathbf{x}\\| = \\|\\mathbf{x}\\|$ for every vector $\\mathbf{x}$
**Inner-product preservation:** $(Q\\mathbf{x}) \\cdot (Q\\mathbf{y}) = \\mathbf{x} \\cdot \\mathbf{y}$
**Inverse is transpose:** $Q^{-1} = Q^T$`,
    related_formulas: `- [Orthogonal Matrix Inverse](!/linear-algebra/formulas#orthogonal_matrix_inverse)
- [Orthogonal Matrix Determinant](!/linear-algebra/formulas#orthogonal_matrix_determinant)
- [Inverse Definition](!/linear-algebra/formulas#inverse_definition)`,
    related_definitions: `- [Orthogonal Matrix](!/linear-algebra/definitions#orthogonal_matrix)
- [Orthonormal Set](!/linear-algebra/definitions#orthonormal_set)`,
  },

  {
    name: 'Orthogonal Matrix Determinant',
    entity: 'orthogonal_matrix',
    category: 'Special Matrix Types',
    formula: `$$\\det(Q) = \\pm 1$$`,
    link: { label: 'Orthogonal Matrices', url: '/linear-algebra/matrix/types#7' },
    explanation: `Every orthogonal matrix has determinant $+1$ or $-1$. The value $+1$ corresponds to a rotation and $-1$ to an orientation-reversing transformation involving a reflection.`,
    derivation: `From $Q^T Q = I$ and the multiplicative property of the determinant: $1 = \\det(I) = \\det(Q^T Q) = \\det(Q^T)\\det(Q) = \\det(Q)^2$. Thus $\\det(Q) = \\pm 1$.`,
    related_formulas: `- [Orthogonal Matrix Definition](!/linear-algebra/formulas#orthogonal_matrix_definition)`,
    related_definitions: `- [Orthogonal Matrix](!/linear-algebra/definitions#orthogonal_matrix)
- [Determinant](!/linear-algebra/definitions#determinant)`,
  },

  {
    name: 'Idempotent Matrix Definition',
    entity: 'square_matrix',
    category: 'Special Matrix Types',
    formula: `$$A^2 = A$$`,
    link: { label: 'Nilpotent and Idempotent Matrices', url: '/linear-algebra/matrix/types#8' },
    explanation: `An idempotent matrix is unchanged by squaring — applying it twice equals applying it once. Idempotent matrices are precisely the projections: they project $\\mathbb{R}^n$ onto their column space along their null space. The eigenvalues are restricted to $0$ and $1$.`,
    conditions: `$A$ must be square.`,
    related_formulas: `- [Idempotent Rank Trace](!/linear-algebra/formulas#idempotent_rank_trace)
- [Trace Sum of Eigenvalues](!/linear-algebra/formulas#trace_sum_of_eigenvalues)`,
    related_definitions: `- [Square Matrix](!/linear-algebra/definitions#square_matrix)`,
  },

  {
    name: 'Idempotent Rank Trace',
    entity: 'square_matrix',
    category: 'Special Matrix Types',
    formula: `$$A^2 = A \\implies \\operatorname{rank}(A) = \\operatorname{tr}(A)$$`,
    link: { label: 'Nilpotent and Idempotent Matrices', url: '/linear-algebra/matrix/types#8' },
    explanation: `For an idempotent matrix, the rank equals the trace. Both quantities count the number of eigenvalues equal to $1$ — the trace by the eigenvalue-sum identity, the rank as the dimension of the image.`,
    derivation: `The eigenvalues of an idempotent matrix satisfy $\\lambda^2 = \\lambda$, so $\\lambda \\in \\{0, 1\\}$. The trace equals the sum of eigenvalues, which counts the $1$'s. The rank equals the dimension of the image, which equals the algebraic multiplicity of the eigenvalue $1$ (idempotent matrices are diagonalizable). Both equal the same count.`,
    related_formulas: `- [Idempotent Matrix Definition](!/linear-algebra/formulas#idempotent_matrix_definition)
- [Trace Sum of Eigenvalues](!/linear-algebra/formulas#trace_sum_of_eigenvalues)
- [Trace Definition](!/linear-algebra/formulas#trace_definition)`,
    related_definitions: `- [Rank](!/linear-algebra/definitions#rank)
- [Trace](!/linear-algebra/definitions#trace)`,
  },

  {
    name: 'Nilpotent Matrix Definition',
    entity: 'square_matrix',
    category: 'Special Matrix Types',
    formula: `$$A^k = O \\quad \\text{for some } k \\geq 1$$`,
    link: { label: 'Nilpotent and Idempotent Matrices', url: '/linear-algebra/matrix/types#8' },
    explanation: `A nilpotent matrix becomes the zero matrix at some power. The smallest such $k$ is the index of nilpotency. Every eigenvalue of a nilpotent matrix is zero, forcing both the determinant and the trace to vanish.`,
    conditions: `$A$ must be square. The index $k$ satisfies $1 \\leq k \\leq n$ where $n$ is the order.`,
    related_formulas: `- [Neumann Series Nilpotent](!/linear-algebra/formulas#neumann_series_nilpotent)
- [Trace Definition](!/linear-algebra/formulas#trace_definition)`,
    related_definitions: `- [Square Matrix](!/linear-algebra/definitions#square_matrix)`,
  },

  {
    name: 'Neumann Series Nilpotent',
    entity: 'square_matrix',
    category: 'Special Matrix Types',
    formula: `$$A^k = O \\implies (I - A)^{-1} = I + A + A^2 + \\cdots + A^{k-1}$$`,
    link: { label: 'Nilpotent and Idempotent Matrices', url: '/linear-algebra/matrix/types#8' },
    explanation: `When $A$ is nilpotent of index $k$, $I - A$ is invertible with inverse equal to a finite geometric series. The series terminates at the $(k-1)$-th term because higher powers are zero.`,
    derivation: `Compute $(I - A)(I + A + A^2 + \\cdots + A^{k-1}) = I + A + \\cdots + A^{k-1} - A - A^2 - \\cdots - A^k = I - A^k = I$. Symmetric calculation gives $(I + A + \\cdots + A^{k-1})(I - A) = I$.`,
    related_formulas: `- [Nilpotent Matrix Definition](!/linear-algebra/formulas#nilpotent_matrix_definition)
- [Inverse Definition](!/linear-algebra/formulas#inverse_definition)`,
    related_definitions: `- [Square Matrix](!/linear-algebra/definitions#square_matrix)
- [Inverse Matrix](!/linear-algebra/definitions#inverse_matrix)`,
  },

  {
    name: 'Involutory Matrix Definition',
    entity: 'square_matrix',
    category: 'Special Matrix Types',
    formula: `$$A^2 = I$$`,
    link: { label: 'Involutory and Permutation Matrices', url: '/linear-algebra/matrix/types#9' },
    explanation: `An involutory matrix is its own inverse. Applying it twice returns every vector to its starting point. The eigenvalues are restricted to $\\pm 1$. Reflections are the prototypical examples: reflecting twice across the same line or plane returns the identity.`,
    conditions: `$A$ must be square. Equivalently, $A^{-1} = A$.`,
    variants: `**Construction from idempotent:** $A = 2P - I$ is involutory whenever $P$ is idempotent`,
    related_formulas: `- [Inverse Involution](!/linear-algebra/formulas#inverse_involution)
- [Idempotent Matrix Definition](!/linear-algebra/formulas#idempotent_matrix_definition)`,
    related_definitions: `- [Square Matrix](!/linear-algebra/definitions#square_matrix)
- [Inverse Matrix](!/linear-algebra/definitions#inverse_matrix)`,
  },

  {
    name: 'Cross Product Skew Matrix',
    entity: 'cross_product',
    category: 'Special Matrix Types',
    formula: `$$\\mathbf{a} \\times \\mathbf{b} = [\\mathbf{a}]_\\times \\mathbf{b}, \\qquad [\\mathbf{a}]_\\times = \\begin{pmatrix} 0 & -a_3 & a_2 \\\\ a_3 & 0 & -a_1 \\\\ -a_2 & a_1 & 0 \\end{pmatrix}$$`,
    link: { label: 'Skew-Symmetric Matrices', url: '/linear-algebra/matrix/types#6' },
    explanation: `The cross product in $\\mathbb{R}^3$ can be expressed as a matrix-vector multiplication. The $3 \\times 3$ skew-symmetric matrix $[\\mathbf{a}]_\\times$, built from the components of $\\mathbf{a}$, acts on $\\mathbf{b}$ to produce the cross product. This reformulation lets cross-product computations participate in the algebra of matrix products.`,
    conditions: `Defined only for $\\mathbf{a}, \\mathbf{b} \\in \\mathbb{R}^3$.`,
    related_formulas: `- [Cross Product (Component Form)](!/linear-algebra/formulas#cross_product_component_form)
- [Skew-Symmetric Matrix Definition](!/linear-algebra/formulas#skew_symmetric_matrix_definition)`,
    related_definitions: `- [Cross Product](!/linear-algebra/definitions#cross_product)
- [Symmetric Matrix](!/linear-algebra/definitions#symmetric_matrix)`,
  },

// Linear Algebra Formulas — Batch 3C
// Section: /linear-algebra/formulas
// Category: Inverse (15)
// 15 entries



  // ═══════════════════════════════════════════
  // CATEGORY: Inverse (15)
  // ═══════════════════════════════════════════

  {
    name: 'Inverse Definition',
    entity: 'inverse_matrix',
    category: 'Inverse',
    formula: `$$A A^{-1} = A^{-1} A = I$$`,
    link: { label: 'Definition of the Inverse', url: '/linear-algebra/matrix/inverse#1' },
    explanation: `The inverse of a square matrix $A$ — when it exists — is the unique matrix $A^{-1}$ that produces the identity from both sides. A matrix possessing an inverse is called invertible (or nonsingular); a matrix without one is singular. Uniqueness follows from a short associativity argument.`,
    conditions: `$A$ must be square. The inverse exists if and only if $\\det(A) \\neq 0$.`,
    derivation: `Suppose $B$ and $C$ both satisfy the inverse equations. Then $B = IB = (CA)B = C(AB) = CI = C$, so the inverse is unique whenever it exists.`,
    related_formulas: `- [Inverse Involution](!/linear-algebra/formulas#inverse_involution)
- [Inverse 2x2 Formula](!/linear-algebra/formulas#inverse_2x2_formula)
- [Invertible Matrix Theorem](!/linear-algebra/formulas#invertible_matrix_theorem)
- [Identity Matrix Property](!/linear-algebra/formulas#identity_matrix_property)`,
    related_definitions: `- [Inverse Matrix](!/linear-algebra/definitions#inverse_matrix)
- [Singular Matrix](!/linear-algebra/definitions#singular_matrix)`,
  },

  {
    name: 'Inverse 2x2 Formula',
    entity: 'inverse_matrix',
    category: 'Inverse',
    formula: `$$\\begin{pmatrix} a & b \\\\ c & d \\end{pmatrix}^{-1} = \\frac{1}{ad - bc}\\begin{pmatrix} d & -b \\\\ -c & a \\end{pmatrix}$$`,
    link: { label: 'The 2×2 Inverse Formula', url: '/linear-algebra/matrix/inverse#2' },
    explanation: `For a $2 \\times 2$ matrix, the inverse is obtained by swapping the diagonal entries, negating the off-diagonal entries, and dividing by the determinant. This is the smallest case where the inverse has a simple closed form.`,
    conditions: `$ad - bc \\neq 0$. When $ad - bc = 0$, the matrix is singular and no inverse exists.`,
    related_formulas: `- [Inverse Definition](!/linear-algebra/formulas#inverse_definition)
- [Inverse via Adjugate](!/linear-algebra/formulas#inverse_via_adjugate)`,
    related_definitions: `- [Inverse Matrix](!/linear-algebra/definitions#inverse_matrix)
- [Determinant](!/linear-algebra/definitions#determinant)`,
  },

  {
    name: 'Inverse via Adjugate',
    entity: 'inverse_matrix',
    category: 'Inverse',
    formula: `$$A^{-1} = \\frac{1}{\\det(A)}\\, \\operatorname{adj}(A)$$`,
    link: { label: 'Computing the Inverse via the Adjugate', url: '/linear-algebra/matrix/inverse#5' },
    explanation: `When $A$ is invertible, the inverse equals the adjugate divided by the determinant. The adjugate is the transpose of the cofactor matrix, so each entry of $A^{-1}$ is a signed minor of $A$ divided by $\\det(A)$. The formula is exact and fully symbolic, but expensive — for numerical work, row reduction is far cheaper.`,
    conditions: `$\\det(A) \\neq 0$.`,
    notation: `$\\operatorname{adj}(A)$ is the adjugate (classical adjoint) — the transpose of the cofactor matrix. The $(i,j)$ entry of $\\operatorname{adj}(A)$ is the $(j,i)$ cofactor of $A$.`,
    related_formulas: `- [Inverse Definition](!/linear-algebra/formulas#inverse_definition)
- [Inverse 2x2 Formula](!/linear-algebra/formulas#inverse_2x2_formula)
- [Inverse via Row Reduction](!/linear-algebra/formulas#inverse_via_row_reduction)`,
    related_definitions: `- [Inverse Matrix](!/linear-algebra/definitions#inverse_matrix)
- [Cofactor Matrix](!/linear-algebra/definitions#cofactor_matrix)
- [Determinant](!/linear-algebra/definitions#determinant)
- [Cofactor](!/linear-algebra/definitions#cofactor)`,
  },

  {
    name: 'Inverse via Row Reduction',
    entity: 'inverse_matrix',
    category: 'Inverse',
    formula: `$$[A \\mid I] \\;\\xrightarrow{\\text{row ops}}\\; [I \\mid A^{-1}]$$`,
    link: { label: 'Computing the Inverse by Row Reduction', url: '/linear-algebra/matrix/inverse#4' },
    explanation: `Form the augmented matrix $[A \\mid I]$ and apply row operations until the left half becomes the identity. The right half then holds $A^{-1}$. If the left half develops a row of zeros at any stage, $A$ is singular and no inverse exists.`,
    conditions: `$A$ must be square. Reduction succeeds if and only if $A$ is invertible.`,
    derivation: `Each row operation corresponds to left-multiplication by an elementary matrix. If operations $E_1, \\ldots, E_k$ reduce $A$ to $I$, then $E_k \\cdots E_1 A = I$, so $A^{-1} = E_k \\cdots E_1$. Applying the same operations to $I$ produces exactly this product.`,
    related_formulas: `- [Inverse Definition](!/linear-algebra/formulas#inverse_definition)
- [Inverse via Adjugate](!/linear-algebra/formulas#inverse_via_adjugate)
- [Invertible Matrix Theorem](!/linear-algebra/formulas#invertible_matrix_theorem)`,
    related_definitions: `- [Inverse Matrix](!/linear-algebra/definitions#inverse_matrix)
- [Reduced Row Echelon Form](!/linear-algebra/definitions#reduced_row_echelon_form)`,
  },

  {
    name: 'Inverse Involution',
    entity: 'inverse_matrix',
    category: 'Inverse',
    formula: `$$(A^{-1})^{-1} = A$$`,
    link: { label: 'Properties of the Inverse', url: '/linear-algebra/matrix/inverse#6' },
    explanation: `Inverting twice returns the original matrix. Inversion is its own inverse operation, mirroring the analogous property of transposition.`,
    conditions: `$A$ must be invertible.`,
    related_formulas: `- [Inverse Definition](!/linear-algebra/formulas#inverse_definition)
- [Inverse of Product](!/linear-algebra/formulas#inverse_of_product)
- [Transpose Involution](!/linear-algebra/formulas#transpose_involution)`,
    related_definitions: `- [Inverse Matrix](!/linear-algebra/definitions#inverse_matrix)`,
  },

  {
    name: 'Inverse of Product',
    entity: 'inverse_matrix',
    category: 'Inverse',
    formula: `$$(AB)^{-1} = B^{-1} A^{-1}$$`,
    link: { label: 'Properties of the Inverse', url: '/linear-algebra/matrix/inverse#6' },
    explanation: `The inverse of a product is the product of the inverses in reversed order. The reversal mirrors the rule for transpose of a product: to undo "first $B$, then $A$," undo $A$ first, then $B$.`,
    conditions: `Both $A$ and $B$ must be invertible square matrices of the same order.`,
    derivation: `Verify directly: $(AB)(B^{-1}A^{-1}) = A(BB^{-1})A^{-1} = AIA^{-1} = AA^{-1} = I$. The other product computes the same way.`,
    variants: `**Multi-factor:** $(A_1 A_2 \\cdots A_k)^{-1} = A_k^{-1} \\cdots A_2^{-1} A_1^{-1}$`,
    related_formulas: `- [Inverse Definition](!/linear-algebra/formulas#inverse_definition)
- [Transpose of Product](!/linear-algebra/formulas#transpose_of_product)
- [Inverse of Transpose](!/linear-algebra/formulas#inverse_of_transpose)`,
    related_definitions: `- [Inverse Matrix](!/linear-algebra/definitions#inverse_matrix)`,
  },

  {
    name: 'Inverse of Transpose',
    entity: 'inverse_matrix',
    category: 'Inverse',
    formula: `$$(A^T)^{-1} = (A^{-1})^T$$`,
    link: { label: 'Properties of the Inverse', url: '/linear-algebra/matrix/inverse#6' },
    explanation: `Transposing and inverting commute. The two operations can be applied in either order with the same result. A useful corollary: the inverse of a symmetric invertible matrix is symmetric.`,
    conditions: `$A$ must be invertible.`,
    derivation: `Take the transpose of $AA^{-1} = I$ to get $(A^{-1})^T A^T = I^T = I$. By uniqueness of the inverse, $(A^{-1})^T$ is the inverse of $A^T$.`,
    related_formulas: `- [Inverse Definition](!/linear-algebra/formulas#inverse_definition)
- [Transpose of Product](!/linear-algebra/formulas#transpose_of_product)
- [Symmetric Matrix Definition](!/linear-algebra/formulas#symmetric_matrix_definition)`,
    related_definitions: `- [Inverse Matrix](!/linear-algebra/definitions#inverse_matrix)`,
  },

  {
    name: 'Inverse of Scalar Multiple',
    entity: 'inverse_matrix',
    category: 'Inverse',
    formula: `$$(cA)^{-1} = \\frac{1}{c}\\, A^{-1}$$`,
    link: { label: 'Properties of the Inverse', url: '/linear-algebra/matrix/inverse#6' },
    explanation: `Scaling a matrix by a nonzero scalar scales its inverse by the reciprocal. The scalar passes through inversion in the natural way.`,
    conditions: `$A$ invertible and $c \\neq 0$.`,
    related_formulas: `- [Inverse Definition](!/linear-algebra/formulas#inverse_definition)
- [Scalar Multiplication of Matrices](!/linear-algebra/formulas#scalar_multiplication_of_matrices)`,
    related_definitions: `- [Inverse Matrix](!/linear-algebra/definitions#inverse_matrix)`,
  },

  {
    name: 'Inverse of Power',
    entity: 'inverse_matrix',
    category: 'Inverse',
    formula: `$$(A^k)^{-1} = (A^{-1})^k = A^{-k}$$`,
    link: { label: 'Properties of the Inverse', url: '/linear-algebra/matrix/inverse#6' },
    explanation: `The inverse of a power is the power of the inverse, and both equal the corresponding negative power. With this identity, the exponent laws $A^j A^k = A^{j+k}$ and $(A^j)^k = A^{jk}$ extend to all integers.`,
    conditions: `$A$ must be invertible. $k$ is any integer.`,
    related_formulas: `- [Matrix Power](!/linear-algebra/formulas#matrix_power)
- [Inverse Definition](!/linear-algebra/formulas#inverse_definition)
- [Inverse Involution](!/linear-algebra/formulas#inverse_involution)`,
    related_definitions: `- [Inverse Matrix](!/linear-algebra/definitions#inverse_matrix)`,
  },

  {
    name: 'Determinant of Inverse',
    entity: 'inverse_matrix',
    category: 'Inverse',
    formula: `$$\\det(A^{-1}) = \\frac{1}{\\det(A)}$$`,
    link: { label: 'Properties of the Inverse', url: '/linear-algebra/matrix/inverse#6' },
    explanation: `The determinant of the inverse is the reciprocal of the determinant. The identity provides a quick consistency check on inverse computations.`,
    conditions: `$A$ must be invertible (equivalently, $\\det(A) \\neq 0$).`,
    derivation: `From the multiplicative property of the determinant: $\\det(A)\\det(A^{-1}) = \\det(AA^{-1}) = \\det(I) = 1$. Dividing both sides by $\\det(A)$ gives the result.`,
    related_formulas: `- [Inverse Definition](!/linear-algebra/formulas#inverse_definition)`,
    related_definitions: `- [Inverse Matrix](!/linear-algebra/definitions#inverse_matrix)
- [Determinant](!/linear-algebra/definitions#determinant)`,
  },

  {
    name: 'Diagonal Matrix Inverse',
    entity: 'diagonal_matrix',
    category: 'Inverse',
    formula: `$$\\operatorname{diag}(d_1, \\ldots, d_n)^{-1} = \\operatorname{diag}\\!\\left(\\frac{1}{d_1}, \\ldots, \\frac{1}{d_n}\\right)$$`,
    link: { label: 'Inverses of Special Matrix Types', url: '/linear-algebra/matrix/inverse#8' },
    explanation: `The inverse of an invertible diagonal matrix is obtained by reciprocating each diagonal entry. The matrix is invertible if and only if every diagonal entry is nonzero.`,
    conditions: `$d_i \\neq 0$ for all $i$.`,
    related_formulas: `- [Diagonal Matrix Definition](!/linear-algebra/formulas#diagonal_matrix_definition)
- [Diagonal Matrix Power](!/linear-algebra/formulas#diagonal_matrix_power)
- [Diagonal Matrix Determinant](!/linear-algebra/formulas#diagonal_matrix_determinant)`,
    related_definitions: `- [Diagonal Matrix](!/linear-algebra/definitions#diagonal_matrix)
- [Inverse Matrix](!/linear-algebra/definitions#inverse_matrix)`,
  },

  {
    name: 'Orthogonal Matrix Inverse',
    entity: 'orthogonal_matrix',
    category: 'Inverse',
    formula: `$$Q^{-1} = Q^T$$`,
    link: { label: 'Inverses of Special Matrix Types', url: '/linear-algebra/matrix/inverse#8' },
    explanation: `For an orthogonal matrix, the inverse equals the transpose. This is the cheapest matrix inverse to compute: no arithmetic is required, only a re-indexing of entries.`,
    conditions: `$Q$ must be orthogonal: $Q^T Q = QQ^T = I$.`,
    related_formulas: `- [Orthogonal Matrix Definition](!/linear-algebra/formulas#orthogonal_matrix_definition)
- [Inverse of Transpose](!/linear-algebra/formulas#inverse_of_transpose)`,
    related_definitions: `- [Orthogonal Matrix](!/linear-algebra/definitions#orthogonal_matrix)
- [Inverse Matrix](!/linear-algebra/definitions#inverse_matrix)`,
  },

  {
    name: 'Solve System via Inverse',
    entity: 'inverse_matrix',
    category: 'Inverse',
    formula: `$$A\\mathbf{x} = \\mathbf{b} \\implies \\mathbf{x} = A^{-1}\\mathbf{b}$$`,
    link: { label: 'Solving Systems with the Inverse', url: '/linear-algebra/matrix/inverse#7' },
    explanation: `When the coefficient matrix is invertible, the linear system has the unique solution $A^{-1}\\mathbf{b}$. The formula is the matrix analogue of dividing both sides by $A$. Computationally, however, row reduction or LU factorization is preferred — computing $A^{-1}$ explicitly is roughly three times more expensive and less numerically stable.`,
    conditions: `$A$ must be square and invertible.`,
    derivation: `Multiply both sides of $A\\mathbf{x} = \\mathbf{b}$ on the left by $A^{-1}$: $A^{-1}A\\mathbf{x} = A^{-1}\\mathbf{b}$, simplifying to $\\mathbf{x} = A^{-1}\\mathbf{b}$.`,
    related_formulas: `- [Inverse Definition](!/linear-algebra/formulas#inverse_definition)
- [Invertible Matrix Theorem](!/linear-algebra/formulas#invertible_matrix_theorem)`,
    related_definitions: `- [Inverse Matrix](!/linear-algebra/definitions#inverse_matrix)
- [System of Linear Equations](!/linear-algebra/definitions#system_of_linear_equations)`,
  },

  {
    name: 'Invertible Matrix Theorem',
    entity: 'inverse_matrix',
    category: 'Inverse',
    formula: `$$\\begin{aligned}
\\text{For } A \\in \\mathbb{R}^{n \\times n}, \\text{ the following are equivalent:} & \\\\
(1)\\ A \\text{ is invertible} \\quad (2)\\ \\det(A) \\neq 0 \\quad (3)\\ \\operatorname{rank}(A) = n & \\\\
(4)\\ \\text{columns of } A \\text{ are linearly independent} & \\\\
(5)\\ \\text{rows of } A \\text{ are linearly independent} & \\\\
(6)\\ \\text{columns of } A \\text{ span } \\mathbb{R}^n \\quad (7)\\ \\text{columns form a basis of } \\mathbb{R}^n & \\\\
(8)\\ A\\mathbf{x} = \\mathbf{0} \\text{ has only the trivial solution} & \\\\
(9)\\ A\\mathbf{x} = \\mathbf{b} \\text{ has a unique solution for every } \\mathbf{b} & \\\\
(10)\\ \\operatorname{Null}(A) = \\{\\mathbf{0}\\} & \\\\
(11)\\ \\operatorname{rref}(A) = I \\quad (12)\\ A \\text{ is a product of elementary matrices} & \\\\
(13)\\ 0 \\text{ is not an eigenvalue of } A &
\\end{aligned}$$`,
    link: { label: 'When Does the Inverse Exist?', url: '/linear-algebra/matrix/inverse#3' },
    explanation: `The Invertible Matrix Theorem collects equivalent characterizations of invertibility, each approaching it from a different angle — algebraic, geometric, computational, spectral. Proving any one condition automatically establishes all the others. Checking the determinant is often the fastest hand test; row reduction is preferred for large-scale computation.`,
    conditions: `$A$ must be square ($n \\times n$). The theorem fails entirely for non-square matrices, where the very notion of two-sided inverse is undefined.`,
    related_formulas: `- [Inverse Definition](!/linear-algebra/formulas#inverse_definition)
- [Determinant of Inverse](!/linear-algebra/formulas#determinant_of_inverse)
- [Linear Independence Determinant Test](!/linear-algebra/formulas#linear_independence_determinant_test)
- [Linear Independence Matrix Test](!/linear-algebra/formulas#linear_independence_matrix_test)
- [Rank Bounds](!/linear-algebra/formulas#rank_bounds)`,
    related_definitions: `- [Inverse Matrix](!/linear-algebra/definitions#inverse_matrix)
- [Singular Matrix](!/linear-algebra/definitions#singular_matrix)
- [Determinant](!/linear-algebra/definitions#determinant)
- [Rank](!/linear-algebra/definitions#rank)
- [Linear Independence](!/linear-algebra/definitions#linear_independence)
- [Basis](!/linear-algebra/definitions#basis)`,
  },

  {
    name: 'Singular Matrix Definition',
    entity: 'singular_matrix',
    category: 'Inverse',
    formula: `$$A \\text{ singular} \\iff \\det(A) = 0 \\iff \\operatorname{rank}(A) < n$$`,
    link: { label: 'Singular and Nonsingular Matrices', url: '/linear-algebra/matrix/types#10' },
    explanation: `A singular matrix has determinant zero, equivalently rank less than $n$, equivalently no inverse. Its columns are linearly dependent, and as a transformation it collapses at least one dimension — its image is a proper subspace of $\\mathbb{R}^n$. Singularity is the negation of invertibility.`,
    conditions: `$A$ must be square ($n \\times n$).`,
    related_formulas: `- [Invertible Matrix Theorem](!/linear-algebra/formulas#invertible_matrix_theorem)
- [Inverse Definition](!/linear-algebra/formulas#inverse_definition)`,
    related_definitions: `- [Singular Matrix](!/linear-algebra/definitions#singular_matrix)
- [Inverse Matrix](!/linear-algebra/definitions#inverse_matrix)
- [Determinant](!/linear-algebra/definitions#determinant)
- [Rank](!/linear-algebra/definitions#rank)`,
  },

// Linear Algebra Formulas — Batch 3D
// Section: /linear-algebra/formulas
// Categories: Rank (8), Trace (11)
// 19 entries



  // ═══════════════════════════════════════════
  // CATEGORY: Rank (8)
  // ═══════════════════════════════════════════

  {
    name: 'Rank Bounds',
    entity: 'rank',
    category: 'Rank',
    formula: `$$0 \\leq \\operatorname{rank}(A) \\leq \\min(m, n)$$`,
    link: { label: 'What Rank Measures', url: '/linear-algebra/matrix/rank#1' },
    explanation: `The rank is bounded above by the smaller dimension of the matrix. When equality holds, the matrix has full rank — every row and every column contributes information that no combination of the others can reproduce. The lower bound zero is achieved only by the zero matrix.`,
    conditions: `$A \\in \\mathbb{R}^{m \\times n}$.`,
    variants: `**Full column rank:** $\\operatorname{rank}(A) = n$ — all $n$ columns independent
**Full row rank:** $\\operatorname{rank}(A) = m$ — all $m$ rows independent
**Square full rank:** when $m = n$ and $\\operatorname{rank}(A) = n$, $A$ is invertible`,
    related_formulas: `- [Rank of Transpose](!/linear-algebra/formulas#rank_of_transpose)
- [Rank Product Inequality](!/linear-algebra/formulas#rank_product_inequality)
- [Invertible Matrix Theorem](!/linear-algebra/formulas#invertible_matrix_theorem)`,
    related_definitions: `- [Rank](!/linear-algebra/definitions#rank)`,
  },

  {
    name: 'Rank of Transpose',
    entity: 'rank',
    category: 'Rank',
    formula: `$$\\operatorname{rank}(A^T) = \\operatorname{rank}(A)$$`,
    link: { label: 'Properties of Rank', url: '/linear-algebra/matrix/rank#7' },
    explanation: `Transposition preserves rank. This is a restatement of the deeper theorem that the column rank and row rank of any matrix are equal — transposition swaps the roles of rows and columns but leaves the common value unchanged.`,
    related_formulas: `- [Row Rank Equals Column Rank](!/linear-algebra/formulas#row_rank_equals_column_rank)
- [Rank Bounds](!/linear-algebra/formulas#rank_bounds)
- [Transpose Definition](!/linear-algebra/formulas#transpose_definition)`,
    related_definitions: `- [Rank](!/linear-algebra/definitions#rank)
- [Row Space](!/linear-algebra/definitions#row_space)
- [Column Space](!/linear-algebra/definitions#column_space)`,
  },

  {
    name: 'Rank Product Inequality',
    entity: 'rank',
    category: 'Rank',
    formula: `$$\\operatorname{rank}(AB) \\leq \\min\\bigl(\\operatorname{rank}(A), \\operatorname{rank}(B)\\bigr)$$`,
    link: { label: 'Properties of Rank', url: '/linear-algebra/matrix/rank#7' },
    explanation: `Multiplying two matrices cannot create independent directions that were not already present in both factors. The rank of a product is bounded by the smaller of the two factor ranks.`,
    conditions: `$A \\in \\mathbb{R}^{m \\times n}$, $B \\in \\mathbb{R}^{n \\times p}$.`,
    related_formulas: `- [Sylvester Rank Inequality](!/linear-algebra/formulas#sylvester_rank_inequality)
- [Rank Sum Inequality](!/linear-algebra/formulas#rank_sum_inequality)
- [Rank Invariance Under Invertible Multiplication](!/linear-algebra/formulas#rank_invariance_invertible)`,
    related_definitions: `- [Rank](!/linear-algebra/definitions#rank)`,
  },

  {
    name: 'Sylvester Rank Inequality',
    entity: 'rank',
    category: 'Rank',
    formula: `$$\\operatorname{rank}(A) + \\operatorname{rank}(B) - n \\leq \\operatorname{rank}(AB)$$`,
    link: { label: 'Properties of Rank', url: '/linear-algebra/matrix/rank#7' },
    explanation: `Sylvester's lower bound on the rank of a product. The rank cannot drop too far below the sum of factor ranks — at most by $n$, the inner dimension. Combined with the upper bound, this constrains $\\operatorname{rank}(AB)$ from both sides.`,
    conditions: `$A \\in \\mathbb{R}^{m \\times n}$, $B \\in \\mathbb{R}^{n \\times p}$. The bound becomes meaningful only when $\\operatorname{rank}(A) + \\operatorname{rank}(B) > n$.`,
    related_formulas: `- [Rank Product Inequality](!/linear-algebra/formulas#rank_product_inequality)`,
    related_definitions: `- [Rank](!/linear-algebra/definitions#rank)`,
  },

  {
    name: 'Rank Sum Inequality',
    entity: 'rank',
    category: 'Rank',
    formula: `$$\\operatorname{rank}(A + B) \\leq \\operatorname{rank}(A) + \\operatorname{rank}(B)$$`,
    link: { label: 'Properties of Rank', url: '/linear-algebra/matrix/rank#7' },
    explanation: `The rank of a sum is bounded by the sum of the ranks. Equality holds when the column spaces of $A$ and $B$ intersect only at the origin.`,
    conditions: `$A$ and $B$ must have the same dimensions.`,
    related_formulas: `- [Rank Product Inequality](!/linear-algebra/formulas#rank_product_inequality)
- [Matrix Addition](!/linear-algebra/formulas#matrix_addition)`,
    related_definitions: `- [Rank](!/linear-algebra/definitions#rank)`,
  },

  {
    name: 'Rank Invariance Invertible',
    entity: 'rank',
    category: 'Rank',
    formula: `$$\\operatorname{rank}(PAQ) = \\operatorname{rank}(A)$$`,
    link: { label: 'Properties of Rank', url: '/linear-algebra/matrix/rank#7' },
    explanation: `Multiplying $A$ by invertible matrices on either side preserves rank exactly. Invertible matrices neither collapse dimensions nor create new ones — they reshape the row and column spaces without altering their dimension.`,
    conditions: `$P$ and $Q$ must be invertible square matrices of compatible sizes.`,
    related_formulas: `- [Rank Product Inequality](!/linear-algebra/formulas#rank_product_inequality)
- [Invertible Matrix Theorem](!/linear-algebra/formulas#invertible_matrix_theorem)`,
    related_definitions: `- [Rank](!/linear-algebra/definitions#rank)
- [Inverse Matrix](!/linear-algebra/definitions#inverse_matrix)`,
  },

  {
    name: 'Gram Rank Identity',
    entity: 'rank',
    category: 'Rank',
    formula: `$$\\operatorname{rank}(A^T A) = \\operatorname{rank}(A A^T) = \\operatorname{rank}(A)$$`,
    link: { label: 'Rank of Special Matrices', url: '/linear-algebra/matrix/rank#8' },
    explanation: `The Gram matrices $A^T A$ and $A A^T$ have the same rank as $A$. This identity underlies least squares: even when $A$ is rectangular, $A^T A$ has the same rank, and is invertible precisely when $A$ has full column rank.`,
    derivation: `The null spaces of $A$ and $A^T A$ are equal: if $A\\mathbf{x} = \\mathbf{0}$, then $A^T A\\mathbf{x} = \\mathbf{0}$; conversely $A^T A\\mathbf{x} = \\mathbf{0}$ implies $\\mathbf{x}^T A^T A \\mathbf{x} = \\|A\\mathbf{x}\\|^2 = 0$, so $A\\mathbf{x} = \\mathbf{0}$. Equal nullities with the same column count $n$ force equal ranks by the rank-nullity theorem.`,
    related_formulas: `- [Gram Matrix Symmetry](!/linear-algebra/formulas#gram_matrix_symmetry)
- [Rank-Nullity Theorem (Matrix Form)](!/linear-algebra/formulas#rank_nullity_theorem_matrix_form)
- [Rank of Transpose](!/linear-algebra/formulas#rank_of_transpose)`,
    related_definitions: `- [Rank](!/linear-algebra/definitions#rank)`,
  },

  {
    name: 'Rank-One Outer Product',
    entity: 'rank',
    category: 'Rank',
    formula: `$$A = \\mathbf{u}\\mathbf{v}^T \\implies \\operatorname{rank}(A) = 1 \\quad (\\mathbf{u}, \\mathbf{v} \\neq \\mathbf{0})$$`,
    link: { label: 'Rank of Special Matrices', url: '/linear-algebra/matrix/rank#8' },
    explanation: `Every rank-one matrix is an outer product $\\mathbf{u}\\mathbf{v}^T$ of two nonzero vectors. Each column of $A$ is a scalar multiple of $\\mathbf{u}$, so the column space is the one-dimensional line through $\\mathbf{u}$. The rows are scalar multiples of $\\mathbf{v}^T$. Rank-one matrices are the building blocks of the outer-product expansion of matrix multiplication and of low-rank approximation.`,
    conditions: `Both $\\mathbf{u}$ and $\\mathbf{v}$ must be nonzero. The shape is $m \\times n$ when $\\mathbf{u} \\in \\mathbb{R}^m$ and $\\mathbf{v} \\in \\mathbb{R}^n$.`,
    related_formulas: `- [Rank Bounds](!/linear-algebra/formulas#rank_bounds)
- [Matrix Multiplication](!/linear-algebra/formulas#matrix_multiplication)`,
    related_definitions: `- [Rank](!/linear-algebra/definitions#rank)`,
  },

  // ═══════════════════════════════════════════
  // CATEGORY: Trace (11)
  // ═══════════════════════════════════════════

  {
    name: 'Trace Definition',
    entity: 'trace',
    category: 'Trace',
    formula: `$$\\operatorname{tr}(A) = \\sum_{i=1}^{n} a_{ii} = a_{11} + a_{22} + \\cdots + a_{nn}$$`,
    link: { label: 'Definition', url: '/linear-algebra/matrix/trace#1' },
    explanation: `The trace of a square matrix is the sum of its diagonal entries. Off-diagonal entries play no role. Defined only for square matrices, the trace encodes spectral information that is not obvious from its simple definition: it equals the sum of eigenvalues and is invariant under similarity.`,
    conditions: `$A$ must be square.`,
    related_formulas: `- [Trace Linearity](!/linear-algebra/formulas#trace_linearity)
- [Trace Sum of Eigenvalues](!/linear-algebra/formulas#trace_sum_of_eigenvalues)
- [Trace Cyclic Property](!/linear-algebra/formulas#trace_cyclic_property)`,
    related_definitions: `- [Trace](!/linear-algebra/definitions#trace)
- [Square Matrix](!/linear-algebra/definitions#square_matrix)`,
  },

  {
    name: 'Trace Linearity',
    entity: 'trace',
    category: 'Trace',
    formula: `$$\\operatorname{tr}(cA + dB) = c\\operatorname{tr}(A) + d\\operatorname{tr}(B)$$`,
    link: { label: 'Linearity', url: '/linear-algebra/matrix/trace#2' },
    explanation: `The trace is a linear function from the space of $n \\times n$ matrices to the scalars. Both additivity ($\\operatorname{tr}(A + B) = \\operatorname{tr}(A) + \\operatorname{tr}(B)$) and scalar homogeneity ($\\operatorname{tr}(cA) = c\\operatorname{tr}(A)$) follow immediately from summing diagonal entries.`,
    conditions: `$A$ and $B$ must be square of the same order.`,
    related_formulas: `- [Trace Definition](!/linear-algebra/formulas#trace_definition)
- [Trace of Transpose](!/linear-algebra/formulas#trace_of_transpose)`,
    related_definitions: `- [Trace](!/linear-algebra/definitions#trace)`,
  },

  {
    name: 'Trace of Transpose',
    entity: 'trace',
    category: 'Trace',
    formula: `$$\\operatorname{tr}(A^T) = \\operatorname{tr}(A)$$`,
    link: { label: 'Linearity', url: '/linear-algebra/matrix/trace#2' },
    explanation: `Transposition leaves the diagonal entries fixed, so the trace is unaffected.`,
    related_formulas: `- [Trace Definition](!/linear-algebra/formulas#trace_definition)
- [Transpose Definition](!/linear-algebra/formulas#transpose_definition)`,
    related_definitions: `- [Trace](!/linear-algebra/definitions#trace)`,
  },

  {
    name: 'Trace Cyclic Property',
    entity: 'trace',
    category: 'Trace',
    formula: `$$\\operatorname{tr}(AB) = \\operatorname{tr}(BA)$$`,
    link: { label: 'The Cyclic Property', url: '/linear-algebra/matrix/trace#4' },
    explanation: `The trace is invariant under cyclic permutations of a product. Notably, $AB$ and $BA$ need not have the same dimensions — if $A$ is $m \\times n$ and $B$ is $n \\times m$, the products are $m \\times m$ and $n \\times n$ respectively, yet share the same trace.`,
    derivation: `$\\operatorname{tr}(AB) = \\sum_i \\sum_k a_{ik} b_{ki} = \\sum_k \\sum_i b_{ki} a_{ik} = \\operatorname{tr}(BA)$. Both sums range over identical index pairs.`,
    variants: `**Three factors:** $\\operatorname{tr}(ABC) = \\operatorname{tr}(BCA) = \\operatorname{tr}(CAB)$ — only cyclic reorderings, not arbitrary swaps. $\\operatorname{tr}(ABC) \\neq \\operatorname{tr}(ACB)$ in general.`,
    related_formulas: `- [Trace of Commutator](!/linear-algebra/formulas#trace_of_commutator)
- [Trace Similarity Invariance](!/linear-algebra/formulas#trace_similarity_invariance)
- [Trace Definition](!/linear-algebra/formulas#trace_definition)`,
    related_definitions: `- [Trace](!/linear-algebra/definitions#trace)`,
  },

  {
    name: 'Trace Sum of Eigenvalues',
    entity: 'trace',
    category: 'Trace',
    formula: `$$\\operatorname{tr}(A) = \\sum_{i=1}^{n} \\lambda_i$$`,
    link: { label: 'Trace and Eigenvalues', url: '/linear-algebra/matrix/trace#5' },
    explanation: `The trace equals the sum of the eigenvalues, counted with algebraic multiplicity. This identity links a trivially computable quantity to spectral information that ordinarily requires solving a degree-$n$ polynomial. The companion identity $\\det(A) = \\prod \\lambda_i$ relates the determinant to the product of eigenvalues.`,
    conditions: `Eigenvalues are counted with algebraic multiplicity; complex eigenvalues are permitted.`,
    derivation: `Expand the characteristic polynomial $p(\\lambda) = \\det(A - \\lambda I)$. The coefficient of $\\lambda^{n-1}$ is $(-1)^{n-1}\\operatorname{tr}(A)$. By Vieta's formulas applied to $p$, the sum of roots equals $\\operatorname{tr}(A)$.`,
    related_formulas: `- [Trace Definition](!/linear-algebra/formulas#trace_definition)
- [Idempotent Rank-Trace Identity](!/linear-algebra/formulas#idempotent_rank_trace)`,
    related_definitions: `- [Trace](!/linear-algebra/definitions#trace)
- [Eigenvalue](!/linear-algebra/definitions#eigenvalue)
- [Characteristic Polynomial](!/linear-algebra/definitions#characteristic_polynomial)
- [Algebraic Multiplicity](!/linear-algebra/definitions#algebraic_multiplicity)`,
  },

  {
    name: 'Trace Similarity Invariance',
    entity: 'trace',
    category: 'Trace',
    formula: `$$\\operatorname{tr}(P^{-1}AP) = \\operatorname{tr}(A)$$`,
    link: { label: 'Trace and Similarity', url: '/linear-algebra/matrix/trace#6' },
    explanation: `Similar matrices have equal trace. The trace is a property of the linear transformation itself, not of any particular matrix representation — the value is independent of the chosen basis.`,
    conditions: `$P$ must be invertible.`,
    derivation: `$\\operatorname{tr}(P^{-1}AP) = \\operatorname{tr}(APP^{-1}) = \\operatorname{tr}(A)$ by the cyclic property.`,
    related_formulas: `- [Trace Cyclic Property](!/linear-algebra/formulas#trace_cyclic_property)
- [Trace Sum of Eigenvalues](!/linear-algebra/formulas#trace_sum_of_eigenvalues)`,
    related_definitions: `- [Trace](!/linear-algebra/definitions#trace)
- [Similar Matrices](!/linear-algebra/definitions#similar_matrices)`,
  },

  {
    name: 'Trace of Commutator',
    entity: 'trace',
    category: 'Trace',
    formula: `$$\\operatorname{tr}(AB - BA) = 0$$`,
    link: { label: 'Trace of Commutators', url: '/linear-algebra/matrix/trace#8' },
    explanation: `The commutator $[A, B] = AB - BA$ always has trace zero, regardless of the matrices involved. A consequence: the identity matrix $I$ can never be written as a commutator over $\\mathbb{R}$ or $\\mathbb{C}$, since $\\operatorname{tr}(I) = n \\neq 0$.`,
    derivation: `By trace linearity and the cyclic property: $\\operatorname{tr}(AB - BA) = \\operatorname{tr}(AB) - \\operatorname{tr}(BA) = 0$.`,
    related_formulas: `- [Trace Cyclic Property](!/linear-algebra/formulas#trace_cyclic_property)
- [Trace Linearity](!/linear-algebra/formulas#trace_linearity)`,
    related_definitions: `- [Trace](!/linear-algebra/definitions#trace)`,
  },

  {
    name: 'Trace Symmetric Skew Product',
    entity: 'trace',
    category: 'Trace',
    formula: `$$\\operatorname{tr}(SK) = 0 \\quad (S^T = S, \\; K^T = -K)$$`,
    link: { label: 'Trace Identities', url: '/linear-algebra/matrix/trace#9' },
    explanation: `The trace of a product of a symmetric matrix and a skew-symmetric matrix vanishes. The identity reflects an orthogonality between symmetric and skew-symmetric subspaces under the Frobenius inner product.`,
    derivation: `Using cyclic property and definitions: $\\operatorname{tr}(SK) = \\operatorname{tr}((SK)^T) = \\operatorname{tr}(K^T S^T) = \\operatorname{tr}(-KS) = -\\operatorname{tr}(KS) = -\\operatorname{tr}(SK)$. The only number equal to its own negative is zero.`,
    related_formulas: `- [Trace Cyclic Property](!/linear-algebra/formulas#trace_cyclic_property)
- [Symmetric Matrix Definition](!/linear-algebra/formulas#symmetric_matrix_definition)
- [Skew-Symmetric Matrix Definition](!/linear-algebra/formulas#skew_symmetric_matrix_definition)
- [Frobenius Inner Product](!/linear-algebra/formulas#frobenius_inner_product)`,
    related_definitions: `- [Trace](!/linear-algebra/definitions#trace)
- [Symmetric Matrix](!/linear-algebra/definitions#symmetric_matrix)`,
  },

  {
    name: 'Trace Orthonormal Basis',
    entity: 'trace',
    category: 'Trace',
    formula: `$$\\operatorname{tr}(A) = \\sum_{i=1}^{n} \\mathbf{q}_i^T A \\mathbf{q}_i$$`,
    link: { label: 'Trace Identities', url: '/linear-algebra/matrix/trace#9' },
    explanation: `For any orthonormal basis $\\{\\mathbf{q}_1, \\ldots, \\mathbf{q}_n\\}$ of $\\mathbb{R}^n$, the trace can be computed as the sum of quadratic forms $\\mathbf{q}_i^T A \\mathbf{q}_i$. The result is independent of which orthonormal basis is used — another manifestation of similarity invariance, since change of orthonormal basis is an orthogonal similarity.`,
    conditions: `$\\{\\mathbf{q}_1, \\ldots, \\mathbf{q}_n\\}$ must be an orthonormal basis. The standard basis $\\{\\mathbf{e}_1, \\ldots, \\mathbf{e}_n\\}$ recovers the usual definition: $\\mathbf{e}_i^T A \\mathbf{e}_i = a_{ii}$.`,
    related_formulas: `- [Trace Definition](!/linear-algebra/formulas#trace_definition)
- [Trace Similarity Invariance](!/linear-algebra/formulas#trace_similarity_invariance)`,
    related_definitions: `- [Trace](!/linear-algebra/definitions#trace)
- [Orthonormal Set](!/linear-algebra/definitions#orthonormal_set)`,
  },

  {
    name: 'Frobenius Inner Product',
    entity: 'trace',
    category: 'Trace',
    formula: `$$\\langle A, B \\rangle_F = \\operatorname{tr}(A^T B) = \\sum_{i,j} a_{ij} b_{ij}$$`,
    link: { label: 'The Frobenius Inner Product', url: '/linear-algebra/matrix/trace#7' },
    explanation: `The trace defines an inner product on the space of matrices. It is the dot product of $A$ and $B$ viewed as vectors of $n^2$ entries. It is symmetric, bilinear, and positive definite — bringing geometric concepts (angles, orthogonality, projections) to bear on matrices themselves.`,
    conditions: `$A, B \\in \\mathbb{R}^{m \\times n}$ — same dimensions required.`,
    related_formulas: `- [Frobenius Norm](!/linear-algebra/formulas#frobenius_norm)
- [Trace Definition](!/linear-algebra/formulas#trace_definition)
- [Dot Product (Algebraic)](!/linear-algebra/formulas#dot_product_algebraic)`,
    related_definitions: `- [Trace](!/linear-algebra/definitions#trace)
- [Inner Product](!/linear-algebra/definitions#inner_product)`,
  },

  {
    name: 'Frobenius Norm',
    entity: 'trace',
    category: 'Trace',
    formula: `$$\\|A\\|_F = \\sqrt{\\operatorname{tr}(A^T A)} = \\sqrt{\\sum_{i,j} a_{ij}^2}$$`,
    link: { label: 'The Frobenius Inner Product', url: '/linear-algebra/matrix/trace#7' },
    explanation: `The Frobenius norm measures the total size of a matrix as the square root of the sum of squares of all entries — the matrix analogue of Euclidean length. Induced by the Frobenius inner product, it is one of several common matrix norms (alongside the operator norm and nuclear norm) and is the simplest to compute.`,
    related_formulas: `- [Frobenius Inner Product](!/linear-algebra/formulas#frobenius_inner_product)
- [Euclidean Norm](!/linear-algebra/formulas#euclidean_norm)
- [Trace Definition](!/linear-algebra/formulas#trace_definition)`,
    related_definitions: `- [Trace](!/linear-algebra/definitions#trace)`,
  },


// Linear Algebra Formulas — Batch 4A
// Section: /linear-algebra/formulas
// Categories: Definitions (4), Cofactor Structure (4), Cofactor Expansion (2), Row Operation Effects (3)
// 13 entries



  // ═══════════════════════════════════════════
  // CATEGORY: Definitions (4)
  // ═══════════════════════════════════════════

  {
    name: 'Determinant 2x2',
    entity: 'determinant',
    category: 'Definitions',
    formula: `$$\\det\\begin{pmatrix} a & b \\\\ c & d \\end{pmatrix} = ad - bc$$`,
    link: { label: 'The 2×2 Formula', url: '/linear-algebra/determinants#2' },
    explanation: `For a $2 \\times 2$ matrix, the determinant is the product of the main diagonal minus the product of the anti-diagonal. The matrix is invertible exactly when this number is nonzero.`,
    conditions: `$A$ must be $2 \\times 2$.`,
    variants: `**Signed parallelogram area:** $|ad - bc|$ equals the area of the parallelogram spanned by the columns $(a,c)$ and $(b,d)$; the sign records orientation`,
    related_formulas: `- [Determinant 3x3](!/linear-algebra/formulas#determinant_3x3)
- [Determinant Signed Area 2D](!/linear-algebra/formulas#determinant_signed_area_2d)
- [Inverse 2x2 Formula](!/linear-algebra/formulas#inverse_2x2_formula)`,
    related_definitions: `- [Determinant](!/linear-algebra/definitions#determinant)`,
  },

  {
    name: 'Determinant 3x3',
    entity: 'determinant',
    category: 'Definitions',
    formula: `$$\\det(A) = a_{11}(a_{22}a_{33} - a_{23}a_{32}) - a_{12}(a_{21}a_{33} - a_{23}a_{31}) + a_{13}(a_{21}a_{32} - a_{22}a_{31})$$`,
    link: { label: 'The 3×3 Formula', url: '/linear-algebra/determinants#3' },
    explanation: `The expansion along the first row: each entry $a_{1j}$ multiplies the $2 \\times 2$ determinant of the submatrix obtained by deleting row $1$ and column $j$. The signs alternate $+, -, +$.`,
    conditions: `$A$ must be $3 \\times 3$.`,
    variants: `**Sarrus rule:** sum of the three downward diagonals (with the first two columns rewritten on the right) minus the sum of the three upward diagonals — equivalent shortcut for $3 \\times 3$ only`,
    related_formulas: `- [Determinant 2x2](!/linear-algebra/formulas#determinant_2x2)
- [Laplace Row Expansion](!/linear-algebra/formulas#laplace_row_expansion)
- [Determinant Signed Volume 3D](!/linear-algebra/formulas#determinant_signed_volume_3d)`,
    related_definitions: `- [Determinant](!/linear-algebra/definitions#determinant)`,
  },

  {
    name: 'Determinant Recursive Definition',
    entity: 'determinant',
    category: 'Definitions',
    formula: `$$\\det(A) = \\begin{cases} a_{11} & n = 1 \\\\ \\displaystyle\\sum_{j=1}^{n} (-1)^{1+j} \\, a_{1j} \\, M_{1j} & n \\geq 2 \\end{cases}$$`,
    link: { label: 'The General n×n Determinant', url: '/linear-algebra/determinants#4' },
    explanation: `The recursive definition: an $n \\times n$ determinant reduces to $n$ determinants of size $(n-1) \\times (n-1)$, each of which reduces further until reaching $1 \\times 1$ matrices. The expansion above uses row $1$, but any row or column gives the same value.`,
    conditions: `$A$ must be square. $M_{1j}$ is the $(1,j)$ minor — the determinant of the submatrix obtained by deleting row $1$ and column $j$.`,
    notation: `$M_{ij}$ denotes the $(i,j)$ minor of $A$.`,
    related_formulas: `- [Laplace Row Expansion](!/linear-algebra/formulas#laplace_row_expansion)
- [Determinant Permutation Formula](!/linear-algebra/formulas#determinant_permutation_formula)
- [Cofactor Definition](!/linear-algebra/formulas#cofactor_definition)`,
    related_definitions: `- [Determinant](!/linear-algebra/definitions#determinant)
- [Cofactor](!/linear-algebra/definitions#cofactor)`,
  },

  {
    name: 'Determinant Permutation Formula',
    entity: 'determinant',
    category: 'Definitions',
    formula: `$$\\det(A) = \\sum_{\\sigma \\in S_n} \\operatorname{sgn}(\\sigma) \\, a_{\\sigma(1),1} \\, a_{\\sigma(2),2} \\cdots a_{\\sigma(n),n}$$`,
    link: { label: 'Transpose Invariance', url: '/linear-algebra/determinants/properties#6' },
    explanation: `The closed-form non-recursive definition: sum over all $n!$ permutations of $\\{1, 2, \\ldots, n\\}$, weighting each by the permutation's sign and the product of $n$ entries it selects (one per row and one per column).`,
    notation: `$S_n$ is the symmetric group of permutations of $\\{1, \\ldots, n\\}$. $\\operatorname{sgn}(\\sigma) = +1$ for even permutations, $-1$ for odd.`,
    conditions: `$A$ must be $n \\times n$ square.`,
    variants: `**Column-permutation form:** $\\det(A) = \\sum_{\\sigma \\in S_n} \\operatorname{sgn}(\\sigma) \\, a_{1,\\sigma(1)} \\cdots a_{n,\\sigma(n)}$ — equivalent via transpose invariance`,
    related_formulas: `- [Determinant Recursive Definition](!/linear-algebra/formulas#determinant_recursive_definition)
- [Laplace Row Expansion](!/linear-algebra/formulas#laplace_row_expansion)`,
    related_definitions: `- [Determinant](!/linear-algebra/definitions#determinant)`,
  },

  // ═══════════════════════════════════════════
  // CATEGORY: Cofactor Structure (4)
  // ═══════════════════════════════════════════

  {
    name: 'Minor Definition',
    entity: 'minor',
    category: 'Cofactor Structure',
    formula: `$$M_{ij} = \\det\\!\\left(A^{(i,j)}\\right)$$`,
    link: { label: 'Minors', url: '/linear-algebra/determinants/cofactors#1' },
    explanation: `The $(i,j)$ minor of $A$ is the determinant of the $(n-1) \\times (n-1)$ submatrix obtained by deleting row $i$ and column $j$. The minor is itself a determinant — a scalar, not a matrix.`,
    notation: `$A^{(i,j)}$ denotes the submatrix of $A$ with row $i$ and column $j$ removed.`,
    conditions: `$A$ must be square of order $n \\geq 2$.`,
    related_formulas: `- [Cofactor Definition](!/linear-algebra/formulas#cofactor_definition)
- [Laplace Row Expansion](!/linear-algebra/formulas#laplace_row_expansion)`,
    related_definitions: `- [Minor](!/linear-algebra/definitions#minor)
- [Determinant](!/linear-algebra/definitions#determinant)`,
  },

  {
    name: 'Cofactor Definition',
    entity: 'cofactor',
    category: 'Cofactor Structure',
    formula: `$$C_{ij} = (-1)^{i+j} \\, M_{ij}$$`,
    link: { label: 'Cofactors and the Sign Pattern', url: '/linear-algebra/determinants/cofactors#2' },
    explanation: `The $(i,j)$ cofactor is the signed minor. The factor $(-1)^{i+j}$ produces a checkerboard pattern starting with $+$ at position $(1,1)$ and alternating from there. The position alone determines the sign — the entries of $A$ play no role.`,
    related_formulas: `- [Minor Definition](!/linear-algebra/formulas#minor_definition)
- [Cofactor Matrix Definition](!/linear-algebra/formulas#cofactor_matrix_definition)
- [Laplace Row Expansion](!/linear-algebra/formulas#laplace_row_expansion)`,
    related_definitions: `- [Cofactor](!/linear-algebra/definitions#cofactor)
- [Minor](!/linear-algebra/definitions#minor)`,
  },

  {
    name: 'Cofactor Matrix Definition',
    entity: 'cofactor_matrix',
    category: 'Cofactor Structure',
    formula: `$$\\operatorname{cof}(A) = \\bigl[C_{ij}\\bigr]_{n \\times n}$$`,
    link: { label: 'The Cofactor Matrix', url: '/linear-algebra/determinants/cofactors#5' },
    explanation: `The cofactor matrix has entry $C_{ij}$ at position $(i,j)$. It is not the matrix of minors — the alternating sign factors are already incorporated. Each row of $\\operatorname{cof}(A)$ contains the cofactors needed for Laplace expansion along the corresponding row of $A$, and each column contains those needed for column expansion.`,
    related_formulas: `- [Cofactor Definition](!/linear-algebra/formulas#cofactor_definition)
- [Adjugate Definition](!/linear-algebra/formulas#adjugate_definition)
- [Adjugate Identity](!/linear-algebra/formulas#adjugate_identity)`,
    related_definitions: `- [Cofactor Matrix](!/linear-algebra/definitions#cofactor_matrix)
- [Cofactor](!/linear-algebra/definitions#cofactor)`,
  },

  {
    name: 'Adjugate Definition',
    entity: 'cofactor_matrix',
    category: 'Cofactor Structure',
    formula: `$$\\operatorname{adj}(A) = \\operatorname{cof}(A)^T$$`,
    link: { label: 'The Adjugate', url: '/linear-algebra/determinants/cofactors#6' },
    explanation: `The adjugate (also called the classical adjoint) is the transpose of the cofactor matrix. Equivalently, $[\\operatorname{adj}(A)]_{ij} = C_{ji}$ — the $(i,j)$ entry of the adjugate is the $(j,i)$ cofactor of $A$.`,
    related_formulas: `- [Cofactor Matrix Definition](!/linear-algebra/formulas#cofactor_matrix_definition)
- [Adjugate Identity](!/linear-algebra/formulas#adjugate_identity)
- [Inverse via Adjugate](!/linear-algebra/formulas#inverse_via_adjugate)`,
    related_definitions: `- [Cofactor Matrix](!/linear-algebra/definitions#cofactor_matrix)`,
  },

  // ═══════════════════════════════════════════
  // CATEGORY: Cofactor Expansion (2)
  // ═══════════════════════════════════════════

  {
    name: 'Laplace Row Expansion',
    entity: 'determinant',
    category: 'Cofactor Expansion',
    formula: `$$\\det(A) = \\sum_{j=1}^{n} a_{ij} \\, C_{ij} \\qquad \\text{for any fixed row } i$$`,
    link: { label: 'Laplace Expansion Along a Row', url: '/linear-algebra/determinants/cofactors#3' },
    explanation: `The determinant equals the sum of each entry in row $i$ multiplied by its cofactor, regardless of which row is chosen. The freedom to pick any row makes the formula practical: a row with many zeros eliminates entire sub-determinants from the sum.`,
    conditions: `$A$ must be square of order $n \\geq 2$. The choice of row $i$ is arbitrary; all rows produce the same value.`,
    variants: `**Expanded form:** $\\det(A) = \\sum_{j=1}^{n} (-1)^{i+j} \\, a_{ij} \\, M_{ij}$`,
    related_formulas: `- [Laplace Column Expansion](!/linear-algebra/formulas#laplace_column_expansion)
- [Cofactor Definition](!/linear-algebra/formulas#cofactor_definition)
- [Determinant Recursive Definition](!/linear-algebra/formulas#determinant_recursive_definition)`,
    related_definitions: `- [Determinant](!/linear-algebra/definitions#determinant)
- [Cofactor](!/linear-algebra/definitions#cofactor)`,
  },

  {
    name: 'Laplace Column Expansion',
    entity: 'determinant',
    category: 'Cofactor Expansion',
    formula: `$$\\det(A) = \\sum_{i=1}^{n} a_{ij} \\, C_{ij} \\qquad \\text{for any fixed column } j$$`,
    link: { label: 'Laplace Expansion Along a Column', url: '/linear-algebra/determinants/cofactors#4' },
    explanation: `The determinant equals the sum of each entry in column $j$ multiplied by its cofactor, for any choice of column. Column expansion gives the same result as row expansion — a consequence of $\\det(A^T) = \\det(A)$, which lets every column expansion be reinterpreted as a row expansion on the transpose.`,
    conditions: `$A$ must be square of order $n \\geq 2$. The choice of column $j$ is arbitrary.`,
    variants: `**Expanded form:** $\\det(A) = \\sum_{i=1}^{n} (-1)^{i+j} \\, a_{ij} \\, M_{ij}$`,
    related_formulas: `- [Laplace Row Expansion](!/linear-algebra/formulas#laplace_row_expansion)
- [Cofactor Definition](!/linear-algebra/formulas#cofactor_definition)
- [Determinant of Transpose](!/linear-algebra/formulas#determinant_of_transpose)`,
    related_definitions: `- [Determinant](!/linear-algebra/definitions#determinant)
- [Cofactor](!/linear-algebra/definitions#cofactor)`,
  },

  // ═══════════════════════════════════════════
  // CATEGORY: Row Operation Effects (3)
  // ═══════════════════════════════════════════

  {
    name: 'Determinant Row Swap',
    entity: 'determinant',
    category: 'Row Operation Effects',
    formula: `$$\\det(B) = -\\det(A)$$`,
    link: { label: 'Effect of Row Swaps', url: '/linear-algebra/determinants/properties#1' },
    explanation: `Swapping two rows of a matrix flips the sign of its determinant. The same rule holds for column swaps, by transpose invariance.`,
    conditions: `$B$ obtained from $A$ by exchanging any two distinct rows.`,
    derivation: `**Corollary — equal rows force the determinant to vanish.** If $A$ has two identical rows, swapping them changes nothing yet flips the determinant's sign: $\\det(A) = -\\det(A)$, forcing $\\det(A) = 0$.`,
    related_formulas: `- [Determinant Row Scaling](!/linear-algebra/formulas#determinant_row_scaling)
- [Determinant Row Addition](!/linear-algebra/formulas#determinant_row_addition)`,
    related_definitions: `- [Determinant](!/linear-algebra/definitions#determinant)`,
  },

  {
    name: 'Determinant Row Scaling',
    entity: 'determinant',
    category: 'Row Operation Effects',
    formula: `$$\\det(B) = k \\, \\det(A)$$`,
    link: { label: 'Effect of Row Scaling', url: '/linear-algebra/determinants/properties#2' },
    explanation: `Multiplying a single row by a scalar $k$ multiplies the determinant by $k$. The same rule applies to columns. A common factor in any one row can be pulled out in front of the determinant — useful for hand simplification before further computation.`,
    conditions: `$B$ obtained from $A$ by multiplying one row by $k$. Affects exactly one row, not the whole matrix — see [Determinant of Scalar Multiple](!/linear-algebra/formulas#determinant_of_scalar_multiple) for whole-matrix scaling, which produces $k^n \\det(A)$.`,
    related_formulas: `- [Determinant Row Swap](!/linear-algebra/formulas#determinant_row_swap)
- [Determinant Row Addition](!/linear-algebra/formulas#determinant_row_addition)
- [Determinant of Scalar Multiple](!/linear-algebra/formulas#determinant_of_scalar_multiple)`,
    related_definitions: `- [Determinant](!/linear-algebra/definitions#determinant)`,
  },

  {
    name: 'Determinant Row Addition',
    entity: 'determinant',
    category: 'Row Operation Effects',
    formula: `$$\\det(B) = \\det(A)$$`,
    link: { label: 'Effect of Row Addition', url: '/linear-algebra/determinants/properties#3' },
    explanation: `Adding a scalar multiple of one row to a different row leaves the determinant completely unchanged. This is the operation that does the heavy lifting in Gaussian elimination, and it costs nothing in determinant terms — making row reduction the practical method for computing determinants of large matrices.`,
    conditions: `$B$ obtained from $A$ by replacing row $i$ with row $i$ plus $c$ times row $k$, with $i \\neq k$. The two rows involved must be distinct.`,
    related_formulas: `- [Determinant Row Swap](!/linear-algebra/formulas#determinant_row_swap)
- [Determinant Row Scaling](!/linear-algebra/formulas#determinant_row_scaling)`,
    related_definitions: `- [Determinant](!/linear-algebra/definitions#determinant)`,
  },




  // Linear Algebra Formulas — Batch 4B
// Section: /linear-algebra/formulas
// Categories: Algebraic Properties (5), Special Determinants (2), Adjugate & Inverse (1),
//             Linear Systems (1), Geometric Interpretation (5), Eigenvalue Connection (1)
// 15 entries



  // ═══════════════════════════════════════════
  // CATEGORY: Algebraic Properties (5)
  // ═══════════════════════════════════════════

  {
    name: 'Determinant of Transpose',
    entity: 'determinant',
    category: 'Algebraic Properties',
    formula: `$$\\det(A^T) = \\det(A)$$`,
    link: { label: 'Transpose Invariance', url: '/linear-algebra/determinants/properties#6' },
    explanation: `Transposing a matrix does not change its determinant. The practical consequence is that every row-based property of the determinant has a column-based counterpart: column swap flips sign, column scaling scales the determinant, column expansion equals row expansion.`,
    derivation: `From the permutation formula, transposing $A$ replaces each permutation $\\sigma$ in the sum with its inverse $\\sigma^{-1}$. Since a permutation and its inverse have the same sign, every term in the expansion is unchanged.`,
    related_formulas: `- [Laplace Column Expansion](!/linear-algebra/formulas#laplace_column_expansion)
- [Transpose Involution](!/linear-algebra/formulas#transpose_involution)
- [Determinant of Product](!/linear-algebra/formulas#determinant_of_product)`,
    related_definitions: `- [Determinant](!/linear-algebra/definitions#determinant)`,
  },

  {
    name: 'Determinant of Product',
    entity: 'determinant',
    category: 'Algebraic Properties',
    formula: `$$\\det(AB) = \\det(A) \\, \\det(B)$$`,
    link: { label: 'The Multiplicative Property', url: '/linear-algebra/determinants/properties#5' },
    explanation: `The determinant of a product equals the product of determinants — one of the most powerful structural facts about determinants. Geometrically, composing linear maps multiplies their volume-scaling factors; algebraically, this identity unlocks corollaries for inverses, powers, and similar matrices.`,
    conditions: `$A$ and $B$ must be square of the same order.`,
    variants: `**Commutativity of $\\det$:** $\\det(AB) = \\det(BA)$ even when $AB \\neq BA$ as matrices
**Not additive:** $\\det(A + B) \\neq \\det(A) + \\det(B)$ in general (counterexample: $A = B = I$ gives $\\det(2I) = 2^n \\neq 2$)`,
    related_formulas: `- [Determinant of Inverse](!/linear-algebra/formulas#determinant_of_inverse)
- [Determinant of Power](!/linear-algebra/formulas#determinant_of_power)
- [Inverse of Product](!/linear-algebra/formulas#inverse_of_product)`,
    related_definitions: `- [Determinant](!/linear-algebra/definitions#determinant)`,
  },

  {
    name: 'Determinant of Scalar Multiple',
    entity: 'determinant',
    category: 'Algebraic Properties',
    formula: `$$\\det(kA) = k^n \\, \\det(A)$$`,
    link: { label: 'Effect of Row Scaling', url: '/linear-algebra/determinants/properties#2' },
    explanation: `Scaling the entire matrix by $k$ scales the determinant by $k^n$, not by $k$. The factor passes through each of the $n$ rows independently — a common error is to forget the exponent. Distinct from row scaling, which scales only one row and contributes a single factor of $k$.`,
    conditions: `$A$ must be $n \\times n$ square.`,
    derivation: `Scaling $A$ by $k$ is equivalent to scaling each of its $n$ rows by $k$. Each row scaling contributes a factor of $k$ to the determinant by the row-scaling rule, and $n$ rows contribute $k^n$ in total.`,
    related_formulas: `- [Determinant Row Scaling](!/linear-algebra/formulas#determinant_row_scaling)
- [Scalar Multiplication of Matrices](!/linear-algebra/formulas#scalar_multiplication_of_matrices)`,
    related_definitions: `- [Determinant](!/linear-algebra/definitions#determinant)`,
  },

  {
    name: 'Determinant of Power',
    entity: 'determinant',
    category: 'Algebraic Properties',
    formula: `$$\\det(A^k) = \\bigl(\\det(A)\\bigr)^k$$`,
    link: { label: 'The Multiplicative Property', url: '/linear-algebra/determinants/properties#5' },
    explanation: `The determinant of a matrix power is the corresponding power of the determinant. Direct corollary of the multiplicative property applied $k$ times.`,
    conditions: `$A$ must be square. $k$ is a non-negative integer; the identity extends to negative integers when $A$ is invertible (using $\\det(A^{-1}) = 1/\\det(A)$).`,
    related_formulas: `- [Determinant of Product](!/linear-algebra/formulas#determinant_of_product)
- [Matrix Power](!/linear-algebra/formulas#matrix_power)`,
    related_definitions: `- [Determinant](!/linear-algebra/definitions#determinant)`,
  },

  {
    name: 'Determinant of Identity',
    entity: 'determinant',
    category: 'Algebraic Properties',
    formula: `$$\\det(I_n) = 1$$`,
    link: { label: 'Triangular and Diagonal Matrices', url: '/linear-algebra/determinants/properties#7' },
    explanation: `The identity matrix has determinant $1$. Follows directly from the diagonal-product rule for triangular matrices: $I_n$ is diagonal with every diagonal entry equal to $1$.`,
    related_formulas: `- [Identity Matrix Property](!/linear-algebra/formulas#identity_matrix_property)
- [Triangular Matrix Determinant](!/linear-algebra/formulas#triangular_matrix_determinant)`,
    related_definitions: `- [Determinant](!/linear-algebra/definitions#determinant)
- [Identity Matrix](!/linear-algebra/definitions#identity_matrix)`,
  },

  // ═══════════════════════════════════════════
  // CATEGORY: Special Determinants (2)
  // ═══════════════════════════════════════════

  {
    name: 'Block Triangular Determinant',
    entity: 'determinant',
    category: 'Special Determinants',
    formula: `$$\\det\\begin{pmatrix} A_{11} & A_{12} \\\\ 0 & A_{22} \\end{pmatrix} = \\det(A_{11}) \\, \\det(A_{22})$$`,
    link: { label: 'Block Triangular Matrices', url: '/linear-algebra/determinants/properties#8' },
    explanation: `For a block upper triangular matrix with square diagonal blocks, the determinant factors as the product of the diagonal-block determinants. The off-diagonal block $A_{12}$ contributes nothing — only the triangular placement of the zero block matters.`,
    conditions: `$A_{11}$ and $A_{22}$ must be square. The bottom-left block must be zero (or equivalently, top-right zero for block lower triangular form).`,
    variants: `**$k$ blocks:** $\\det(A) = \\det(A_{11}) \\, \\det(A_{22}) \\cdots \\det(A_{kk})$ for any block triangular structure with $k$ square diagonal blocks`,
    related_formulas: `- [Triangular Matrix Determinant](!/linear-algebra/formulas#triangular_matrix_determinant)
- [Diagonal Matrix Determinant](!/linear-algebra/formulas#diagonal_matrix_determinant)`,
    related_definitions: `- [Determinant](!/linear-algebra/definitions#determinant)`,
  },

  {
    name: 'Vandermonde Determinant',
    entity: 'determinant',
    category: 'Special Determinants',
    formula: `$$\\det(V) = \\prod_{1 \\leq i < j \\leq n} (x_j - x_i)$$`,
    link: { label: 'Vandermonde and Structured Determinants', url: '/linear-algebra/determinants/applications#6' },
    explanation: `The determinant of a Vandermonde matrix is the product of all pairwise differences of the nodes. It is nonzero precisely when all nodes are distinct — the algebraic foundation guaranteeing that a polynomial of degree at most $n-1$ is uniquely determined by its values at $n$ distinct points.`,
    notation: `$V$ is the $n \\times n$ Vandermonde matrix with $V_{ij} = x_i^{j-1}$, built from $n$ nodes $x_1, \\ldots, x_n$. The product runs over all $\\binom{n}{2}$ pairs with $j > i$.`,
    conditions: `Nodes $x_1, \\ldots, x_n$ may be any scalars in the field.`,
    related_formulas: `- [Wronskian Test](!/linear-algebra/formulas#wronskian_test)
- [Linear Independence Determinant Test](!/linear-algebra/formulas#linear_independence_determinant_test)`,
    related_definitions: `- [Determinant](!/linear-algebra/definitions#determinant)`,
  },

  // ═══════════════════════════════════════════
  // CATEGORY: Adjugate & Inverse (1)
  // ═══════════════════════════════════════════

  {
    name: 'Adjugate Identity',
    entity: 'cofactor_matrix',
    category: 'Adjugate & Inverse',
    formula: `$$A \\cdot \\operatorname{adj}(A) = \\operatorname{adj}(A) \\cdot A = \\det(A) \\, I$$`,
    link: { label: 'The Adjugate', url: '/linear-algebra/determinants/cofactors#6' },
    explanation: `The product of $A$ with its adjugate equals the determinant times the identity. This is the structural identity that yields the explicit inverse formula $A^{-1} = \\operatorname{adj}(A) / \\det(A)$ whenever $\\det(A) \\neq 0$, and it holds for every square matrix — invertible or not.`,
    derivation: `The $(i,k)$ entry of $A \\cdot \\operatorname{adj}(A)$ is $\\sum_j a_{ij} C_{kj}$. When $i = k$, this is the Laplace expansion of $\\det(A)$ along row $i$, giving the diagonal entries. When $i \\neq k$, the sum pairs entries of row $i$ with cofactors of a different row $k$ — equivalent to expanding the determinant of a matrix with two identical rows, which is always zero.`,
    related_formulas: `- [Adjugate Definition](!/linear-algebra/formulas#adjugate_definition)
- [Inverse via Adjugate](!/linear-algebra/formulas#inverse_via_adjugate)
- [Cramer's Rule](!/linear-algebra/formulas#cramers_rule)`,
    related_definitions: `- [Cofactor Matrix](!/linear-algebra/definitions#cofactor_matrix)
- [Determinant](!/linear-algebra/definitions#determinant)`,
  },

  // ═══════════════════════════════════════════
  // CATEGORY: Linear Systems (1)
  // ═══════════════════════════════════════════

  {
    name: 'Cramers Rule',
    entity: 'determinant',
    category: 'Linear Systems',
    formula: `$$x_i = \\frac{\\det(A_i)}{\\det(A)}$$`,
    link: { label: 'Cramer', url: '/linear-algebra/determinants/applications#1' },
    explanation: `For a square linear system $A\\mathbf{x} = \\mathbf{b}$ with nonzero determinant, each component of the solution is a ratio of determinants. The numerator uses a modified version of $A$ with column $i$ replaced by the right-hand side. Of theoretical importance — the solution is a rational function of the data — but computationally expensive: $n+1$ determinant evaluations versus the $O(n^3)$ cost of Gaussian elimination.`,
    notation: `$A_i$ is the matrix formed by replacing column $i$ of $A$ with the right-hand side vector $\\mathbf{b}$. All other columns of $A$ are unchanged.`,
    conditions: `$A$ must be square with $\\det(A) \\neq 0$. The system has the unique solution given by the formula for each $i = 1, \\ldots, n$.`,
    related_formulas: `- [Inverse via Adjugate](!/linear-algebra/formulas#inverse_via_adjugate)
- [Solve System via Inverse](!/linear-algebra/formulas#solve_system_via_inverse)
- [Invertible Matrix Theorem](!/linear-algebra/formulas#invertible_matrix_theorem)`,
    related_definitions: `- [Determinant](!/linear-algebra/definitions#determinant)`,
  },

  // ═══════════════════════════════════════════
  // CATEGORY: Geometric Interpretation (5)
  // ═══════════════════════════════════════════

  {
    name: 'Determinant Signed Area 2D',
    entity: 'determinant',
    category: 'Geometric Interpretation',
    formula: `$$\\text{signed area}(\\mathbf{u}, \\mathbf{v}) = \\det\\begin{pmatrix} \\mathbf{u} & \\mathbf{v} \\end{pmatrix} = ad - bc$$`,
    link: { label: 'Signed Area in Two Dimensions', url: '/linear-algebra/determinants/geometry#1' },
    explanation: `The determinant of a $2 \\times 2$ matrix equals the signed area of the parallelogram spanned by its columns. Positive value means the columns are counterclockwise-ordered, negative means clockwise, zero means parallel.`,
    notation: `$\\mathbf{u} = (a, c)$ and $\\mathbf{v} = (b, d)$ are the columns of the matrix, viewed as vectors in $\\mathbb{R}^2$.`,
    conditions: `$\\mathbf{u}, \\mathbf{v} \\in \\mathbb{R}^2$. The unsigned area is $|ad - bc|$.`,
    related_formulas: `- [Determinant 2x2](!/linear-algebra/formulas#determinant_2x2)
- [Parallelogram Area](!/linear-algebra/formulas#parallelogram_area)
- [Triangle Area via Determinant](!/linear-algebra/formulas#triangle_area_via_determinant)`,
    related_definitions: `- [Determinant](!/linear-algebra/definitions#determinant)`,
  },

  {
    name: 'Determinant Signed Volume 3D',
    entity: 'determinant',
    category: 'Geometric Interpretation',
    formula: `$$\\text{signed volume}(\\mathbf{a}, \\mathbf{b}, \\mathbf{c}) = \\det\\begin{pmatrix} \\mathbf{a} & \\mathbf{b} & \\mathbf{c} \\end{pmatrix} = \\mathbf{a} \\cdot (\\mathbf{b} \\times \\mathbf{c})$$`,
    link: { label: 'Signed Volume in Three Dimensions', url: '/linear-algebra/determinants/geometry#2' },
    explanation: `The $3 \\times 3$ determinant equals the signed volume of the parallelepiped spanned by its column vectors, identical to the scalar triple product. Positive value means right-handed system, negative means left-handed, zero means coplanar.`,
    conditions: `$\\mathbf{a}, \\mathbf{b}, \\mathbf{c} \\in \\mathbb{R}^3$. Unsigned volume is $|\\det|$.`,
    related_formulas: `- [Scalar Triple Product](!/linear-algebra/formulas#scalar_triple_product)
- [Parallelepiped Volume](!/linear-algebra/formulas#parallelepiped_volume)
- [Cross Product (Determinant Form)](!/linear-algebra/formulas#cross_product_determinant_form)`,
    related_definitions: `- [Determinant](!/linear-algebra/definitions#determinant)
- [Cross Product](!/linear-algebra/definitions#cross_product)`,
  },

  {
    name: 'Determinant Volume Scaling Factor',
    entity: 'determinant',
    category: 'Geometric Interpretation',
    formula: `$$\\operatorname{vol}\\bigl(A(S)\\bigr) = |\\det(A)| \\cdot \\operatorname{vol}(S)$$`,
    link: { label: 'The General Case: n-Dimensional Volume Scaling', url: '/linear-algebra/determinants/geometry#3' },
    explanation: `The linear map $\\mathbf{x} \\mapsto A\\mathbf{x}$ scales every $n$-dimensional region by the factor $|\\det(A)|$. When $|\\det(A)| > 1$ volumes expand; when $0 < |\\det(A)| < 1$ they compress; when $|\\det(A)| = 1$ they are preserved (rotations and reflections); when $\\det(A) = 0$ the image collapses to a lower-dimensional subspace.`,
    notation: `$A(S) = \\{A\\mathbf{x} : \\mathbf{x} \\in S\\}$ is the image of region $S$ under the linear map. $\\operatorname{vol}$ denotes $n$-dimensional volume (Lebesgue measure).`,
    conditions: `$A$ is $n \\times n$. $S \\subseteq \\mathbb{R}^n$ is any measurable region.`,
    related_formulas: `- [Determinant Signed Area 2D](!/linear-algebra/formulas#determinant_signed_area_2d)
- [Determinant Signed Volume 3D](!/linear-algebra/formulas#determinant_signed_volume_3d)
- [Determinant of Product](!/linear-algebra/formulas#determinant_of_product)`,
    related_definitions: `- [Determinant](!/linear-algebra/definitions#determinant)
- [Linear Transformation](!/linear-algebra/definitions#linear_transformation)`,
  },

  {
    name: 'Triangle Area via Determinant',
    entity: 'determinant',
    category: 'Geometric Interpretation',
    formula: `$$\\text{Area} = \\frac{1}{2} \\left| \\det\\begin{pmatrix} x_2 - x_1 & x_3 - x_1 \\\\ y_2 - y_1 & y_3 - y_1 \\end{pmatrix} \\right|$$`,
    link: { label: 'Area and Volume Formulas from Determinants', url: '/linear-algebra/determinants/geometry#7' },
    explanation: `The area of a triangle with vertices $(x_1, y_1)$, $(x_2, y_2)$, $(x_3, y_3)$ is half the absolute value of the determinant whose columns are the edge vectors from vertex $1$ to the other two. The triangle occupies exactly half the parallelogram spanned by these edges.`,
    conditions: `Vertices are points in $\\mathbb{R}^2$. The factor $\\frac{1}{2}$ accounts for the triangle being half the parallelogram.`,
    related_formulas: `- [Determinant Signed Area 2D](!/linear-algebra/formulas#determinant_signed_area_2d)
- [Parallelogram Area](!/linear-algebra/formulas#parallelogram_area)`,
    related_definitions: `- [Determinant](!/linear-algebra/definitions#determinant)`,
  },

  {
    name: 'Tetrahedron Volume via Determinant',
    entity: 'determinant',
    category: 'Geometric Interpretation',
    formula: `$$V = \\frac{1}{6} \\left| \\det\\begin{pmatrix} \\mathbf{e}_1 & \\mathbf{e}_2 & \\mathbf{e}_3 \\end{pmatrix} \\right|$$`,
    link: { label: 'Area and Volume Formulas from Determinants', url: '/linear-algebra/determinants/geometry#7' },
    explanation: `The volume of a tetrahedron in $\\mathbb{R}^3$ equals one-sixth the absolute value of the determinant whose columns are the three edge vectors emanating from any single chosen vertex. The factor $\\frac{1}{6}$ arises because a tetrahedron occupies one-sixth of the parallelepiped spanned by its three edges.`,
    notation: `$\\mathbf{e}_1, \\mathbf{e}_2, \\mathbf{e}_3$ are the edge vectors from a chosen vertex of the tetrahedron to the other three vertices.`,
    conditions: `The four vertices lie in $\\mathbb{R}^3$ and are not coplanar (otherwise volume is zero).`,
    related_formulas: `- [Determinant Signed Volume 3D](!/linear-algebra/formulas#determinant_signed_volume_3d)
- [Parallelepiped Volume](!/linear-algebra/formulas#parallelepiped_volume)
- [Pyramid Volume](!/linear-algebra/formulas#pyramid_volume)`,
    related_definitions: `- [Determinant](!/linear-algebra/definitions#determinant)`,
  },

  // ═══════════════════════════════════════════
  // CATEGORY: Eigenvalue Connection (1)
  // ═══════════════════════════════════════════

  {
    name: 'Determinant Product of Eigenvalues',
    entity: 'determinant',
    category: 'Eigenvalue Connection',
    formula: `$$\\det(A) = \\lambda_1 \\, \\lambda_2 \\cdots \\lambda_n$$`,
    link: { label: 'The Characteristic Polynomial', url: '/linear-algebra/determinants/applications#4' },
    explanation: `The determinant equals the product of all eigenvalues, counted with algebraic multiplicity. Combined with the trace identity $\\operatorname{tr}(A) = \\sum \\lambda_i$, this links the determinant and trace to the eigenvalue spectrum and gives an immediate invertibility criterion: $A$ is invertible if and only if no eigenvalue is zero.`,
    derivation: `From the characteristic polynomial $p(\\lambda) = \\det(A - \\lambda I)$: setting $\\lambda = 0$ gives $p(0) = \\det(A)$, so the constant term equals the determinant. Since the roots of $p$ are the eigenvalues, the product-of-roots formula yields $\\det(A) = \\prod_i \\lambda_i$ (up to a sign that vanishes when written this way).`,
    conditions: `$A$ is $n \\times n$ over a field where the characteristic polynomial fully splits (always over $\\mathbb{C}$). Eigenvalues are counted with algebraic multiplicity.`,
    related_formulas: `- [Trace Sum of Eigenvalues](!/linear-algebra/formulas#trace_sum_of_eigenvalues)
- [Invertible Matrix Theorem](!/linear-algebra/formulas#invertible_matrix_theorem)`,
    related_definitions: `- [Determinant](!/linear-algebra/definitions#determinant)
- [Eigenvalue](!/linear-algebra/definitions#eigenvalue)`,
  },



  // Linear Algebra Formulas — Batch 5a — Linear Systems
// Standard Forms (4) + Echelon Forms (4) = 8 entries
// Section: /linear-algebra/linear-systems + /linear-algebra/linear-systems/echelon-form
//
// Cross-batch related_formulas marked // VERIFY — confirm IDs against B2/B3 data files


  // ═══════════════════════════════════════════
  // CATEGORY: Standard Forms (4 entries)
  // ═══════════════════════════════════════════

  {
    name: 'Linear Equation Standard Form',
    entity: 'system_of_linear_equations',
    category: 'Standard Forms',
    formula: `$$a_1 x_1 + a_2 x_2 + \\cdots + a_n x_n = b$$`,
    link: { label: 'What a Linear System Is', url: '/linear-algebra/linear-systems#1' },
    explanation: `A single linear equation in $n$ unknowns. Each unknown $x_i$ appears to the first power and is multiplied by a scalar coefficient $a_i$. The right-hand side $b$ is a constant. No products of unknowns, no powers above one, no transcendental functions.`,
    notation: `$x_1, \\ldots, x_n$ are the unknowns. $a_1, \\ldots, a_n$ are the coefficients of the unknowns. $b$ is the constant term (right-hand side).`,
    conditions: `Coefficients $a_i$ and constant $b$ are scalars from a field $F$ (typically $\\mathbb{R}$ or $\\mathbb{C}$).`,
    related_formulas: `
- [Linear System Matrix Form](!/linear-algebra/formulas#linear_system_matrix_form)
- [Vector Equation Form](!/linear-algebra/formulas#vector_equation_form)`,
    related_definitions: `
- [System of Linear Equations](!/linear-algebra/definitions#system_of_linear_equations)`,
  },

  {
    name: 'Linear System Matrix Form',
    entity: 'system_of_linear_equations',
    category: 'Standard Forms',
    formula: `$$A\\mathbf{x} = \\mathbf{b}$$`,
    link: { label: 'Writing a System in Matrix Form', url: '/linear-algebra/linear-systems#2' },
    explanation: `Compresses an entire system of $m$ equations in $n$ unknowns into a single matrix equation. Each row of $A$ encodes one equation; each column corresponds to one unknown. Asking whether the system has a solution becomes asking whether $\\mathbf{b}$ lies in the column space of $A$.`,
    notation: `$A$ is the $m \\times n$ coefficient matrix. $\\mathbf{x} \\in F^n$ is the column vector of unknowns. $\\mathbf{b} \\in F^m$ is the column vector of constants.`,
    variants: `
Vector equation form (linear combination of columns):

$$x_1 \\mathbf{a}_1 + x_2 \\mathbf{a}_2 + \\cdots + x_n \\mathbf{a}_n = \\mathbf{b}$$`,
    related_formulas: `
- [Linear Equation Standard Form](!/linear-algebra/formulas#linear_equation_standard_form)
- [Vector Equation Form](!/linear-algebra/formulas#vector_equation_form)
- [Augmented Matrix Construction](!/linear-algebra/formulas#augmented_matrix_construction)
- [Solve System via Inverse](!/linear-algebra/formulas#solve_system_via_inverse) // VERIFY (B3)
- [Cramer's Rule](!/linear-algebra/formulas#cramers_rule)`,
    related_definitions: `
- [System of Linear Equations](!/linear-algebra/definitions#system_of_linear_equations)
- [Matrix](!/linear-algebra/definitions#matrix)
- [Column Space](!/linear-algebra/definitions#column_space)`,
  },

  {
    name: 'Vector Equation Form',
    entity: 'system_of_linear_equations',
    category: 'Standard Forms',
    formula: `$$x_1 \\mathbf{a}_1 + x_2 \\mathbf{a}_2 + \\cdots + x_n \\mathbf{a}_n = \\mathbf{b}$$`,
    link: { label: 'Writing a System in Matrix Form', url: '/linear-algebra/linear-systems#2' },
    explanation: `Recasts the system as a linear combination of the columns of $A$, weighted by the entries of $\\mathbf{x}$. Each $\\mathbf{a}_j$ is the $j$-th column of $A$. The system has a solution exactly when $\\mathbf{b}$ can be assembled from the columns — that is, when $\\mathbf{b}$ lies in their span.`,
    notation: `$\\mathbf{a}_1, \\ldots, \\mathbf{a}_n$ are the columns of $A$, each a vector in $F^m$. The scalars $x_1, \\ldots, x_n$ are the entries of the unknown vector $\\mathbf{x}$.`,
    related_formulas: `
- [Linear System Matrix Form](!/linear-algebra/formulas#linear_system_matrix_form)`,
    related_definitions: `
- [System of Linear Equations](!/linear-algebra/definitions#system_of_linear_equations)
- [Linear Combination](!/linear-algebra/definitions#linear_combination)
- [Column Space](!/linear-algebra/definitions#column_space)`,
  },

  {
    name: 'Augmented Matrix Construction',
    entity: 'augmented_matrix',
    category: 'Standard Forms',
    formula: `$$[A \\mid \\mathbf{b}] = \\left(\\begin{array}{cccc|c} a_{11} & a_{12} & \\cdots & a_{1n} & b_1 \\\\ a_{21} & a_{22} & \\cdots & a_{2n} & b_2 \\\\ \\vdots & \\vdots & \\ddots & \\vdots & \\vdots \\\\ a_{m1} & a_{m2} & \\cdots & a_{mn} & b_m \\end{array}\\right)$$`,
    link: { label: 'The Augmented Matrix', url: '/linear-algebra/linear-systems#3' },
    explanation: `Packages the coefficient matrix $A$ and the right-hand side $\\mathbf{b}$ into a single $m \\times (n+1)$ matrix. The vertical bar is purely notational. Row operations performed on $[A \\mid \\mathbf{b}]$ correspond directly to legal manipulations of the underlying equations.`,
    conditions: `$A$ is $m \\times n$, $\\mathbf{b}$ is $m \\times 1$. Result is $m \\times (n+1)$.`,
    related_formulas: `
- [Linear System Matrix Form](!/linear-algebra/formulas#linear_system_matrix_form)
- [Solvability Rank Criterion](!/linear-algebra/formulas#solvability_rank_criterion)`,
    related_definitions: `
- [Augmented Matrix](!/linear-algebra/definitions#augmented_matrix)
- [Matrix](!/linear-algebra/definitions#matrix)`,
  },

  // ═══════════════════════════════════════════
  // CATEGORY: Echelon Forms (4 entries)
  // ═══════════════════════════════════════════

  {
    name: 'Row Echelon Form Definition',
    entity: 'row_echelon_form',
    category: 'Echelon Forms',
    formula: `$$\\text{REF: } \\begin{pmatrix} \\boxed{\\ast} & \\bullet & \\bullet & \\bullet & \\bullet \\\\ 0 & \\boxed{\\ast} & \\bullet & \\bullet & \\bullet \\\\ 0 & 0 & 0 & \\boxed{\\ast} & \\bullet \\\\ 0 & 0 & 0 & 0 & 0 \\end{pmatrix}$$`,
    link: { label: 'Row Echelon Form', url: '/linear-algebra/linear-systems/echelon-form#1' },
    explanation: `A matrix is in row echelon form if (1) every zero row sits at the bottom, (2) the leading nonzero entry of each row (the pivot, $\\boxed{\\ast}$) is strictly to the right of the pivot in the row above, and (3) every entry below a pivot is zero. Bullets $\\bullet$ denote arbitrary entries.`,
    conditions: `Three structural conditions on row positions: zero rows at bottom, staircase pivot pattern, zeros below each pivot. REF is not unique — different reductions can yield different echelon forms.`,
    related_formulas: `
- [Reduced Row Echelon Form Definition](!/linear-algebra/formulas#reduced_row_echelon_form_definition)
- [Pivot Definition](!/linear-algebra/formulas#pivot_definition)
- [Elementary Row Operations](!/linear-algebra/formulas#elementary_row_operations)`,
    related_definitions: `
- [Row Echelon Form](!/linear-algebra/definitions#row_echelon_form)
- [Pivot](!/linear-algebra/definitions#pivot)`,
  },

  {
    name: 'Reduced Row Echelon Form Definition',
    entity: 'reduced_row_echelon_form',
    category: 'Echelon Forms',
    formula: `$$\\text{RREF: } \\begin{pmatrix} \\boxed{1} & 0 & \\bullet & 0 & \\bullet \\\\ 0 & \\boxed{1} & \\bullet & 0 & \\bullet \\\\ 0 & 0 & 0 & \\boxed{1} & \\bullet \\\\ 0 & 0 & 0 & 0 & 0 \\end{pmatrix}$$`,
    link: { label: 'Reduced Row Echelon Form', url: '/linear-algebra/linear-systems/echelon-form#2' },
    explanation: `RREF satisfies all REF conditions plus two more: every pivot equals $1$, and every pivot is the only nonzero entry in its column (zeros above and below). Each pivot column becomes a unit vector. Free columns (bullets) can contain anything.`,
    conditions: `Builds on REF with two added conditions: pivots normalized to $1$, pivot columns cleared above and below.`,
    related_formulas: `
- [Row Echelon Form Definition](!/linear-algebra/formulas#row_echelon_form_definition)
- [RREF Uniqueness](!/linear-algebra/formulas#rref_uniqueness)
- [Pivot Definition](!/linear-algebra/formulas#pivot_definition)`,
    related_definitions: `
- [Reduced Row Echelon Form](!/linear-algebra/definitions#reduced_row_echelon_form)
- [Row Echelon Form](!/linear-algebra/definitions#row_echelon_form)
- [Pivot](!/linear-algebra/definitions#pivot)`,
  },

  {
    name: 'RREF Uniqueness',
    entity: 'reduced_row_echelon_form',
    category: 'Echelon Forms',
    formula: `$$\\text{RREF}(A) \\text{ is unique}$$`,
    link: { label: 'Uniqueness of RREF', url: '/linear-algebra/linear-systems/echelon-form#3' },
    explanation: `Every matrix has exactly one reduced row echelon form. No matter which sequence of row operations is used to reach RREF, the result is identical. This makes pivot positions, rank, and free-variable structure intrinsic properties of the matrix.`,
    conditions: `Holds over any field. RREF uniqueness contrasts with REF, which is not unique.`,
    notation: `Gap entry — the site states uniqueness in prose but does not display a formal equation. Recorded here as a named theorem in cheat-sheet form.`,
    related_formulas: `
- [Reduced Row Echelon Form Definition](!/linear-algebra/formulas#reduced_row_echelon_form_definition)
- [Row Echelon Form Definition](!/linear-algebra/formulas#row_echelon_form_definition)`,
    related_definitions: `
- [Reduced Row Echelon Form](!/linear-algebra/definitions#reduced_row_echelon_form)`,
  },

  {
    name: 'Pivot Definition',
    entity: 'pivot',
    category: 'Echelon Forms',
    formula: `$$\\text{pivot} = \\text{leading nonzero entry of a row in echelon form}$$`,
    link: { label: 'Row Echelon Form', url: '/linear-algebra/linear-systems/echelon-form#1' },
    explanation: `The pivot of a nonzero row in echelon form is its leftmost nonzero entry. The column containing a pivot is a pivot column; all other columns are free columns. The number of pivots equals the rank of the matrix.`,
    notation: `Pivot positions are the row–column pairs $(i, j)$ where pivots occur. Pivot columns correspond to bound (pivot) variables; free columns correspond to free variables.`,
    related_formulas: `
- [Row Echelon Form Definition](!/linear-algebra/formulas#row_echelon_form_definition)
- [Free Variables Count](!/linear-algebra/formulas#free_variables_count)`,
    related_definitions: `
- [Pivot](!/linear-algebra/definitions#pivot)
- [Row Echelon Form](!/linear-algebra/definitions#row_echelon_form)`,
  },




  // Linear Algebra Formulas — Batch 5b — Linear Systems
// Operations (2) + Solvability (3) + Homogeneous Systems (2) = 7 entries
// Section: /linear-algebra/linear-systems/gaussian-elimination + /solvability + /homogeneous
//
// Cross-batch related_formulas marked // VERIFY — confirm IDs against B2/B3 data files


  // ═══════════════════════════════════════════
  // CATEGORY: Elementary Row Operations (2 entries)
  // ═══════════════════════════════════════════

  {
    name: 'Elementary Row Operations',
    entity: 'row_echelon_form',
    category: 'Elementary Row Operations',
    formula: `$$\\begin{aligned} R_i &\\leftrightarrow R_j \\quad \\text{(swap)} \\\\ kR_i &\\to R_i, \\quad k \\neq 0 \\quad \\text{(scaling)} \\\\ R_i + cR_j &\\to R_i \\quad \\text{(addition)} \\end{aligned}$$`,
    link: { label: 'The Three Elementary Row Operations', url: '/linear-algebra/linear-systems/gaussian-elimination#2' },
    explanation: `The three operations that transform an augmented matrix without altering the solution set. Row swap reorders equations. Row scaling rescales an equation by a nonzero factor. Row addition replaces a row with itself plus a multiple of another row — this is the operation that performs elimination.`,
    conditions: `The scalar $k$ must be nonzero (multiplying by zero would destroy information). All three operations are reversible: swaps undo themselves, scaling by $k$ is reversed by scaling by $1/k$, and adding $cR_j$ is reversed by subtracting $cR_j$.`,
    notation: `$R_i$ denotes the $i$-th row. Each operation corresponds to left-multiplication by an elementary matrix.`,
    related_formulas: `
- [Row Echelon Form Definition](!/linear-algebra/formulas#row_echelon_form_definition)
- [Row Equivalence Preserves Solutions](!/linear-algebra/formulas#row_equivalence_preserves_solutions)
- [Determinant Row Swap](!/linear-algebra/formulas#determinant_row_swap)
- [Determinant Row Scaling](!/linear-algebra/formulas#determinant_row_scaling)
- [Determinant Row Addition](!/linear-algebra/formulas#determinant_row_addition)`,
    related_definitions: `
- [Row Echelon Form](!/linear-algebra/definitions#row_echelon_form)`,
  },

  {
    name: 'Row Equivalence Preserves Solutions',
    entity: 'system_of_linear_equations',
    category: 'Elementary Row Operations',
    formula: `$$[A \\mid \\mathbf{b}] \\sim [A' \\mid \\mathbf{b}'] \\;\\Longrightarrow\\; \\text{Sol}(A\\mathbf{x} = \\mathbf{b}) = \\text{Sol}(A'\\mathbf{x} = \\mathbf{b}')$$`,
    link: { label: 'Elementary Row Operations', url: '/linear-algebra/linear-systems#6' },
    explanation: `If two augmented matrices are row-equivalent (one is reachable from the other by a finite sequence of elementary row operations), their associated linear systems have identical solution sets. This is what justifies Gaussian elimination as a solution method — every step preserves the answer.`,
    conditions: `Row equivalence ($\\sim$) means a finite sequence of elementary row operations connects the two matrices. The result holds for any field.`,
    notation: `Gap entry — site states the result in prose ("none of these changes the solution set"; "no solutions are created or destroyed") but does not display a formal equation. Recorded here as a named result in cheat-sheet form. $\\text{Sol}(\\cdot)$ denotes the solution set.`,
    related_formulas: `
- [Elementary Row Operations](!/linear-algebra/formulas#elementary_row_operations)`,
    related_definitions: `
- [System of Linear Equations](!/linear-algebra/definitions#system_of_linear_equations)
- [Row Echelon Form](!/linear-algebra/definitions#row_echelon_form)`,
  },

  // ═══════════════════════════════════════════
  // CATEGORY: Solvability (3 entries)
  // ═══════════════════════════════════════════

  {
    name: 'Free Variables Count',
    entity: 'system_of_linear_equations',
    category: 'Solvability',
    formula: `$$\\text{(number of free variables)} = n - \\text{rank}(A)$$`,
    link: { label: 'Pivot Columns and Free Columns', url: '/linear-algebra/linear-systems/echelon-form#4' },
    explanation: `In the echelon form of an $m \\times n$ coefficient matrix, the number of pivot columns equals $\\text{rank}(A)$. The remaining $n - \\text{rank}(A)$ columns are free, and each contributes one free parameter to the solution. When this count is zero, the solution (if it exists) is unique; when positive, the solution set is infinite.`,
    notation: `$n$ is the number of unknowns. Pivot variables are the unknowns whose columns contain pivots; free variables are the rest.`,
    related_formulas: `
- [Pivot Definition](!/linear-algebra/formulas#pivot_definition)
- [Solvability Rank Criterion](!/linear-algebra/formulas#solvability_rank_criterion)
- [Homogeneous Solution Space Dimension](!/linear-algebra/formulas#homogeneous_solution_space_dimension)`,
    related_definitions: `
- [Rank](!/linear-algebra/definitions#rank)
- [Pivot](!/linear-algebra/definitions#pivot)`,
  },

  {
    name: 'Solvability Rank Criterion',
    entity: 'system_of_linear_equations',
    category: 'Solvability',
    formula: `$$A\\mathbf{x} = \\mathbf{b} \\text{ is consistent} \\iff \\text{rank}(A) = \\text{rank}([A \\mid \\mathbf{b}])$$`,
    link: { label: 'The Rouché-Capelli Theorem', url: '/linear-algebra/linear-systems/solvability#5' },
    explanation: `A linear system has at least one solution if and only if appending $\\mathbf{b}$ as a column to the coefficient matrix does not increase the rank. Equivalently, $\\mathbf{b}$ must lie in the column space of $A$. Also known as the Rouché-Capelli theorem (or Kronecker-Capelli theorem).`,
    conditions: `Holds for systems of any shape — square, overdetermined ($m > n$), or underdetermined ($m < n$). Three exhaustive cases follow from comparing the rank to $n$:

- $\\text{rank}(A) < \\text{rank}([A \\mid \\mathbf{b}])$: no solution
- $\\text{rank}(A) = \\text{rank}([A \\mid \\mathbf{b}]) = n$: exactly one solution
- $\\text{rank}(A) = \\text{rank}([A \\mid \\mathbf{b}]) < n$: infinitely many solutions`,
    related_formulas: `
- [Augmented Matrix Construction](!/linear-algebra/formulas#augmented_matrix_construction)
- [Free Variables Count](!/linear-algebra/formulas#free_variables_count)
- [Solution Structure Decomposition](!/linear-algebra/formulas#solution_structure_decomposition)
- [Invertible Matrix Theorem](!/linear-algebra/formulas#invertible_matrix_theorem) // VERIFY (B3)`,
    related_definitions: `
- [System of Linear Equations](!/linear-algebra/definitions#system_of_linear_equations)
- [Augmented Matrix](!/linear-algebra/definitions#augmented_matrix)
- [Rank](!/linear-algebra/definitions#rank)
- [Column Space](!/linear-algebra/definitions#column_space)`,
  },

  {
    name: 'Solution Structure Decomposition',
    entity: 'system_of_linear_equations',
    category: 'Solvability',
    formula: `$$\\mathbf{x} = \\mathbf{x}_p + \\mathbf{x}_h, \\quad \\mathbf{x}_h \\in \\text{Null}(A)$$`,
    link: { label: 'Structure of the Solution Set', url: '/linear-algebra/linear-systems/solvability#10' },
    explanation: `Every solution to a consistent non-homogeneous system $A\\mathbf{x} = \\mathbf{b}$ decomposes into a particular solution $\\mathbf{x}_p$ plus a homogeneous component $\\mathbf{x}_h$ from the null space of $A$. The particular solution accounts for $\\mathbf{b}$; the null-space component accounts for the freedom. The full solution set is an affine subspace — the null space translated by $\\mathbf{x}_p$.`,
    conditions: `Requires the system to be consistent. The decomposition is not unique in $\\mathbf{x}_p$ — any particular solution works — but the set $\\mathbf{x}_p + \\text{Null}(A)$ is uniquely determined.`,
    notation: `$\\mathbf{x}_p$ is any particular solution to $A\\mathbf{x} = \\mathbf{b}$. $\\mathbf{x}_h$ ranges over the null space $\\text{Null}(A) = \\{\\mathbf{v} : A\\mathbf{v} = \\mathbf{0}\\}$.`,
    related_formulas: `
- [Solvability Rank Criterion](!/linear-algebra/formulas#solvability_rank_criterion)
- [Homogeneous Solution Space Dimension](!/linear-algebra/formulas#homogeneous_solution_space_dimension)`,
    related_definitions: `
- [System of Linear Equations](!/linear-algebra/definitions#system_of_linear_equations)
- [Null Space (Kernel)](!/linear-algebra/definitions#null_space)
- [Homogeneous System](!/linear-algebra/definitions#homogeneous_system)`,
  },

  // ═══════════════════════════════════════════
  // CATEGORY: Homogeneous Systems (2 entries)
  // ═══════════════════════════════════════════

  {
    name: 'Homogeneous Solution Space Dimension',
    entity: 'homogeneous_system',
    category: 'Homogeneous Systems',
    formula: `$$\\dim \\text{Null}(A) = n - \\text{rank}(A)$$`,
    link: { label: 'The Solution Set Is the Null Space', url: '/linear-algebra/linear-systems/homogeneous#3' },
    explanation: `The solution set of a homogeneous system $A\\mathbf{x} = \\mathbf{0}$ equals the null space of $A$ — a subspace of $\\mathbb{R}^n$. Its dimension (the nullity of $A$) is $n$ minus the rank. When the nullity is zero, only the trivial solution exists; when positive, the solution set is a flat through the origin of that dimension.`,
    conditions: `$A$ is $m \\times n$ over a field $F$. The result holds without restriction on $m$ vs $n$.`,
    notation: `This is the matrix form of rank-nullity, framed in solving-systems language. Same identity from a different perspective.`,
    related_formulas: `
- [Free Variables Count](!/linear-algebra/formulas#free_variables_count)
- [Solution Structure Decomposition](!/linear-algebra/formulas#solution_structure_decomposition)
- [Underdetermined Homogeneous Has Nontrivial](!/linear-algebra/formulas#underdetermined_homogeneous_has_nontrivial)
- [Rank Nullity Theorem Matrix Form](!/linear-algebra/formulas#rank_nullity_theorem_matrix_form) // VERIFY (B2)`,
    related_definitions: `
- [Homogeneous System](!/linear-algebra/definitions#homogeneous_system)
- [Null Space (Kernel)](!/linear-algebra/definitions#null_space)
- [Rank](!/linear-algebra/definitions#rank)
- [Dimension](!/linear-algebra/definitions#dimension)`,
  },

  {
    name: 'Underdetermined Homogeneous Has Nontrivial',
    entity: 'homogeneous_system',
    category: 'Homogeneous Systems',
    formula: `$$n > m \\;\\Longrightarrow\\; A\\mathbf{x} = \\mathbf{0} \\text{ has a nontrivial solution}$$`,
    link: { label: 'When Do Nontrivial Solutions Exist?', url: '/linear-algebra/linear-systems/homogeneous#2' },
    explanation: `A homogeneous system with more unknowns than equations always has a nonzero solution. The rank of an $m \\times n$ matrix cannot exceed $m$, so when $n > m$ the rank is strictly less than $n$, leaving at least $n - m$ free variables.`,
    conditions: `$A$ is $m \\times n$ with $n > m$. The result is unconditional — it holds for every such matrix over any field.`,
    notation: `Nontrivial solution: any $\\mathbf{x} \\neq \\mathbf{0}$ satisfying $A\\mathbf{x} = \\mathbf{0}$. The trivial solution $\\mathbf{x} = \\mathbf{0}$ always exists for homogeneous systems.`,
    related_formulas: `
- [Homogeneous Solution Space Dimension](!/linear-algebra/formulas#homogeneous_solution_space_dimension)
- [Free Variables Count](!/linear-algebra/formulas#free_variables_count)`,
    related_definitions: `
- [Homogeneous System](!/linear-algebra/definitions#homogeneous_system)
- [Rank](!/linear-algebra/definitions#rank)`,
  },



];


  export default linearAlgebraFormulasList;



 // {
    //   name: "Vector Addition",
    //   formula: "$\\mathbf{u} + \\mathbf{v} = \\begin{bmatrix} u_1 + v_1 \\\\ u_2 + v_2 \\\\ \\vdots \\\\ u_n + v_n \\end{bmatrix}$",
    //   fields: {
    //     "Explanation": "This operation adds two vectors component-wise. It's fundamental in vector algebra and represents combining two vectors to get a resultant vector. Vector addition is used in physics for combining forces, velocities, and other vector quantities.",
    //     "$\\mathbf{u}, \\mathbf{v}$": "Vectors in $\\mathbb{R}^n$",
    //     "$u_i, v_i$": "Components of vectors $\\mathbf{u}$ and $\\mathbf{v}$",
    //     "Example": "For $\\mathbf{u} = \\begin{bmatrix}1 \\\\ 3\\end{bmatrix}$ and $\\mathbf{v} = \\begin{bmatrix}2 \\\\ 4\\end{bmatrix}$, $\\mathbf{u} + \\mathbf{v} = \\begin{bmatrix}1+2 \\\\ 3+4\\end{bmatrix} = \\begin{bmatrix}3 \\\\ 7\\end{bmatrix}$",
    //     "Use Cases": "Adding forces, velocities, or any quantities represented by vectors"
    //   },
    //   category: "Vector Operations"
    // },
    // {
    //   name: "Scalar Multiplication",
    //   formula: "$c\\mathbf{v} = \\begin{bmatrix} c \\cdot v_1 \\\\ c \\cdot v_2 \\\\ \\vdots \\\\ c \\cdot v_n \\end{bmatrix}$",
    //   fields: {
    //     "Explanation": "This operation multiplies each component of a vector by a scalar. It scales the vector by stretching or compressing it without changing its direction (unless the scalar is negative, which also reverses the direction).",
    //     "$c$": "Scalar (real number)",
    //     "$\\mathbf{v}$": "Vector in $\\mathbb{R}^n$",
    //     "$v_i$": "Components of vector $\\mathbf{v}$",
    //     "Example": "For $c = 3$ and $\\mathbf{v} = \\begin{bmatrix}2 \\\\ -1\\end{bmatrix}$, $c\\mathbf{v} = \\begin{bmatrix}3 \\cdot 2 \\\\ 3 \\cdot (-1)\\end{bmatrix} = \\begin{bmatrix}6 \\\\ -3\\end{bmatrix}$",
    //     "Use Cases": "Scaling vectors in physics and engineering applications"
    //   },
    //   category: "Vector Operations"
    // },
    // {
    //   name: "Dot Product (Inner Product)",
    //   formula: "$\\mathbf{u} \\cdot \\mathbf{v} = u_1v_1 + u_2v_2 + \\dots + u_nv_n$",
    //   fields: {
    //     "Explanation": "The dot product computes a scalar from two vectors. It measures the extent to which two vectors point in the same direction and is used to find angles between vectors and projections.",
    //     "$\\mathbf{u}, \\mathbf{v}$": "Vectors in $\\mathbb{R}^n$",
    //     "$u_i, v_i$": "Components of vectors $\\mathbf{u}$ and $\\mathbf{v}$",
    //     "Example": "For $\\mathbf{u} = \\begin{bmatrix}1 \\\\ 2\\end{bmatrix}$ and $\\mathbf{v} = \\begin{bmatrix}3 \\\\ 4\\end{bmatrix}$, $\\mathbf{u} \\cdot \\mathbf{v} = (1)(3) + (2)(4) = 11$",
    //     "Use Cases": "Calculating work, projections, and determining orthogonality"
    //   },
    //   category: "Vector Operations"
    // },
    // {
    //   name: "Cross Product",
    //   formula: "$\\mathbf{u} \\times \\mathbf{v} = \\begin{bmatrix} u_2v_3 - u_3v_2 \\\\ u_3v_1 - u_1v_3 \\\\ u_1v_2 - u_2v_1 \\end{bmatrix}$",
    //   fields: {
    //     "Explanation": "The cross product of two vectors in $\\mathbb{R}^3$ results in a vector that is perpendicular to both, with a magnitude equal to the area of the parallelogram they span.",
    //     "$\\mathbf{u}, \\mathbf{v}$": "Vectors in $\\mathbb{R}^3$",
    //     "$u_i, v_i$": "Components of vectors $\\mathbf{u}$ and $\\mathbf{v}$",
    //     "Example": "For $\\mathbf{u} = \\begin{bmatrix}1 \\\\ 0 \\\\ 0\\end{bmatrix}$ and $\\mathbf{v} = \\begin{bmatrix}0 \\\\ 1 \\\\ 0\\end{bmatrix}$, $\\mathbf{u} \\times \\mathbf{v} = \\begin{bmatrix}0 \\\\ 0 \\\\ 1\\end{bmatrix}$",
    //     "Use Cases": "Calculating torque, rotational motion, and normal vectors"
    //   },
    //   category: "Vector Operations"
    // },
    // {
    //   name: "Matrix Addition",
    //   formula: "$\\mathbf{A} + \\mathbf{B} = \\begin{bmatrix} a_{11} + b_{11} & \\dots & a_{1n} + b_{1n} \\\\ \\vdots & \\ddots & \\vdots \\\\ a_{m1} + b_{m1} & \\dots & a_{mn} + b_{mn} \\end{bmatrix}$",
    //   fields: {
    //     "Explanation": "Matrices of the same dimensions can be added by adding their corresponding elements. This operation is fundamental in linear algebra and has applications in systems of equations and transformations.",
    //     "$\\mathbf{A}, \\mathbf{B}$": "Matrices of size $m \\times n$",
    //     "$a_{ij}, b_{ij}$": "Elements of matrices $\\mathbf{A}$ and $\\mathbf{B}$",
    //     "Example": "For $\\mathbf{A} = \\begin{bmatrix}1 & 2 \\\\ 3 & 4\\end{bmatrix}$ and $\\mathbf{B} = \\begin{bmatrix}5 & 6 \\\\ 7 & 8\\end{bmatrix}$, $\\mathbf{A} + \\mathbf{B} = \\begin{bmatrix}6 & 8 \\\\ 10 & 12\\end{bmatrix}$",
    //     "Use Cases": "Combining linear transformations, solving matrix equations"
    //   },
    //   category: "Matrix Operations"
    // },
    // {
    //   name: "Scalar Multiplication of a Matrix",
    //   formula: "$c\\mathbf{A} = \\begin{bmatrix} c \\cdot a_{11} & \\dots & c \\cdot a_{1n} \\\\ \\vdots & \\ddots & \\vdots \\\\ c \\cdot a_{m1} & \\dots & c \\cdot a_{mn} \\end{bmatrix}$",
    //   fields: {
    //     "Explanation": "Each element of the matrix is multiplied by the scalar. This operation scales the matrix and is essential in linear transformations and eigenvalue problems.",
    //     "$c$": "Scalar (real number)",
    //     "$\\mathbf{A}$": "Matrix of size $m \\times n$",
    //     "$a_{ij}$": "Elements of matrix $\\mathbf{A}$",
    //     "Example": "For $c = 2$ and $\\mathbf{A} = \\begin{bmatrix}1 & -1 \\\\ 0 & 3\\end{bmatrix}$, $c\\mathbf{A} = \\begin{bmatrix}2 & -2 \\\\ 0 & 6\\end{bmatrix}$",
    //     "Use Cases": "Scaling transformations, adjusting system responses"
    //   },
    //   category: "Matrix Operations"
    // },
    // {
    //   name: "Matrix Multiplication",
    //   formula: "$(\\mathbf{AB})_{ij} = \\sum_{k=1}^{n} a_{ik}b_{kj}$",
    //   fields: {
    //     "Explanation": "Matrix multiplication combines two matrices to produce a new matrix. It's not commutative in general and represents the composition of linear transformations.",
    //     "$\\mathbf{A}$": "Matrix of size $m \\times n$",
    //     "$\\mathbf{B}$": "Matrix of size $n \\times p$",
    //     "$(\\mathbf{AB})_{ij}$": "Element in row $i$, column $j$ of the product matrix",
    //     "Example": "For $\\mathbf{A} = \\begin{bmatrix}1 & 2\\end{bmatrix}$ and $\\mathbf{B} = \\begin{bmatrix}3 \\\\ 4\\end{bmatrix}$, $\\mathbf{AB} = (1)(3) + (2)(4) = 11$",
    //     "Use Cases": "Transformations, solving systems of equations"
    //   },
    //   category: "Matrix Operations"
    // },
    // {
    //   name: "Determinant of a 2x2 Matrix",
    //   formula: "$\\det(\\mathbf{A}) = ad - bc$",
    //   fields: {
    //     "Explanation": "The determinant of a 2x2 matrix gives the scaling factor of the linear transformation represented by the matrix. It's also used to determine invertibility.",
    //     "$\\mathbf{A}$": "Matrix $\\begin{bmatrix} a & b \\\\ c & d \\end{bmatrix}$",
    //     "$a, b, c, d$": "Elements of matrix $\\mathbf{A}$",
    //     "Example": "For $\\mathbf{A} = \\begin{bmatrix}2 & 3 \\\\ 1 & 4\\end{bmatrix}$, $\\det(\\mathbf{A}) = (2)(4) - (3)(1) = 5$",
    //     "Use Cases": "Checking invertibility, area scaling"
    //   },
    //   category: "Determinants"
    // },
    // {
    //   name: "Inverse of a 2x2 Matrix",
    //   formula: "$\\mathbf{A}^{-1} = \\frac{1}{\\det(\\mathbf{A})} \\begin{bmatrix} d & -b \\\\ -c & a \\end{bmatrix}$",
    //   fields: {
    //     "Explanation": "The inverse of a matrix reverses the effect of the original matrix. For a 2x2 matrix, the inverse exists if and only if the determinant is non-zero.",
    //     "$\\mathbf{A}$": "Matrix $\\begin{bmatrix} a & b \\\\ c & d \\end{bmatrix}$",
    //     "$\\det(\\mathbf{A})$": "Determinant of $\\mathbf{A}$",
    //     "$\\mathbf{A}^{-1}$": "Inverse of matrix $\\mathbf{A}$",
    //     "Example": "For $\\mathbf{A} = \\begin{bmatrix}2 & 1 \\\\ 5 & 3\\end{bmatrix}$, $\\det(\\mathbf{A}) = 1$, so $\\mathbf{A}^{-1} = \\begin{bmatrix} 3 & -1 \\\\ -5 & 2 \\end{bmatrix}$",
    //     "Use Cases": "Solving linear systems, undoing transformations"
    //   },
    //   category: "Matrix Inverses"
    // },
    // {
    //   name: "Eigenvalues and Eigenvectors",
    //   formula: "$\\mathbf{A}\\mathbf{x} = \\lambda\\mathbf{x}$",
    //   fields: {
    //     "Explanation": "An eigenvalue is a scalar that indicates how much the eigenvector is stretched or compressed during the transformation represented by $\\mathbf{A}$. Eigenvectors point in directions that are invariant under the transformation.",
    //     "$\\mathbf{A}$": "Square matrix",
    //     "$\\mathbf{x}$": "Eigenvector",
    //     "$\\lambda$": "Eigenvalue",
    //     "Example": "For $\\mathbf{A} = \\begin{bmatrix}2 & 0 \\\\ 0 & 3\\end{bmatrix}$, eigenvalues are $\\lambda = 2, 3$ with corresponding eigenvectors along the x and y axes.",
    //     "Use Cases": "Stability analysis, quantum mechanics, principal component analysis"
    //   },
    //   category: "Eigenvalues and Eigenvectors"
    // },
    // {
    //   name: "Cramer's Rule",
    //   formula: "$x_i = \\frac{\\det(\\mathbf{A}_i)}{\\det(\\mathbf{A})}$",
    //   fields: {
    //     "Explanation": "Cramer's Rule provides a method to solve a system of linear equations using determinants, applicable when the system has a unique solution.",
    //     "$\\mathbf{A}$": "Coefficient matrix",
    //     "$\\mathbf{A}_i$": "Matrix $\\mathbf{A}$ with its $i$-th column replaced by the constants vector $\\mathbf{b}$",
    //     "$\\det(\\mathbf{A})$": "Determinant of $\\mathbf{A}$",
    //     "$x_i$": "Solution for variable $x_i$",
    //     "Example": "For $\\begin{cases} 2x + y = 5 \\\\ x - y = 1 \\end{cases}$, solve for $x$ and $y$ using determinants.",
    //     "Use Cases": "Solving small systems of equations"
    //   },
    //   category: "Systems of Equations"
    // },
    // {
    //   name: "Rank of a Matrix",
    //   formula: "The rank is the maximum number of linearly independent rows or columns.",
    //   fields: {
    //     "Explanation": "The rank indicates the dimension of the vector space spanned by the rows or columns. It determines the solvability of linear systems.",
    //     "$\\mathbf{A}$": "Matrix",
    //     "Example": "A $3 \\times 3$ matrix with rank 2 has linearly dependent rows or columns.",
    //     "Use Cases": "Analyzing solutions of linear systems, determining invertibility"
    //   },
    //   category: "Matrix Properties"
    // },
    // {
    //   name: "Linear Transformation",
    //   formula: "$T(c\\mathbf{u} + d\\mathbf{v}) = cT(\\mathbf{u}) + dT(\\mathbf{v})$",
    //   fields: {
    //     "Explanation": "A function is a linear transformation if it preserves vector addition and scalar multiplication. Linear transformations can be represented by matrices.",
    //     "$T$": "Linear transformation",
    //     "$\\mathbf{u}, \\mathbf{v}$": "Vectors",
    //     "$c, d$": "Scalars",
    //     "Example": "Rotation, reflection, and scaling transformations are linear.",
    //     "Use Cases": "Computer graphics, differential equations"
    //   },
    //   category: "Linear Transformations"
    // },
    // {
    //   name: "Orthogonality",
    //   formula: "$\\mathbf{u} \\cdot \\mathbf{v} = 0$",
    //   fields: {
    //     "Explanation": "Two vectors are orthogonal if their dot product is zero, meaning they are perpendicular in space.",
    //     "$\\mathbf{u}, \\mathbf{v}$": "Vectors",
    //     "Example": "Vectors $\\begin{bmatrix}1 \\\\ 0\\end{bmatrix}$ and $\\begin{bmatrix}0 \\\\ 1\\end{bmatrix}$ are orthogonal.",
    //     "Use Cases": "Projections, defining coordinate systems"
    //   },
    //   category: "Vector Properties"
    // },
    // {
    //   name: "Norm of a Vector",
    //   formula: "$\\|\\mathbf{v}\\| = \\sqrt{v_1^2 + v_2^2 + \\dots + v_n^2}$",
    //   fields: {
    //     "Explanation": "The norm (or length) of a vector is a measure of its magnitude in space.",
    //     "$\\mathbf{v}$": "Vector",
    //     "$v_i$": "Components of $\\mathbf{v}$",
    //     "Example": "For $\\mathbf{v} = \\begin{bmatrix}3 \\\\ 4\\end{bmatrix}$, $\\|\\mathbf{v}\\| = 5$",
    //     "Use Cases": "Calculating distances, normalizing vectors"
    //   },
    //   category: "Vector Operations"
    // },
    // {
    //   name: "Unit Vector",
    //   formula: "$\\mathbf{u} = \\frac{\\mathbf{v}}{\\|\\mathbf{v}\\|}$",
    //   fields: {
    //     "Explanation": "A unit vector has a magnitude of 1 and indicates direction. Any vector can be converted to a unit vector by dividing by its norm.",
    //     "$\\mathbf{v}$": "Original vector",
    //     "$\\mathbf{u}$": "Unit vector in the direction of $\\mathbf{v}$",
    //     "Example": "For $\\mathbf{v} = \\begin{bmatrix}3 \\\\ 4\\end{bmatrix}$, $\\mathbf{u} = \\begin{bmatrix} \\frac{3}{5} \\\\ \\frac{4}{5} \\end{bmatrix}$",
    //     "Use Cases": "Direction representation, projections"
    //   },
    //   category: "Vector Operations"
    // },
    // {
    //   name: "Projection of a Vector",
    //   formula: "$\\text{proj}_{\\mathbf{v}} \\mathbf{u} = \\left( \\frac{\\mathbf{u} \\cdot \\mathbf{v}}{\\|\\mathbf{v}\\|^2} \\right) \\mathbf{v}$",
    //   fields: {
    //     "Explanation": "The projection of $\\mathbf{u}$ onto $\\mathbf{v}$ is the component of $\\mathbf{u}$ in the direction of $\\mathbf{v}$. It is used in decomposing vectors and in least squares approximations.",
    //     "$\\mathbf{u}, \\mathbf{v}$": "Vectors",
    //     "$\\|\\mathbf{v}\\|$": "Norm of $\\mathbf{v}$",
    //     "Example": "Projecting $\\mathbf{u} = \\begin{bmatrix}2 \\\\ 3\\end{bmatrix}$ onto $\\mathbf{v} = \\begin{bmatrix}1 \\\\ 0\\end{bmatrix}$ yields $\\begin{bmatrix}2 \\\\ 0\\end{bmatrix}$",
    //     "Use Cases": "Shadow computations, component analysis"
    //   },
    //   category: "Vector Operations"
    // }