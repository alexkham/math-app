

const linearAlgebraTermsList = [
    //vectors
    {
        name: "Vector",
        formula: "A mathematical object that has both magnitude ($|\\vec{v}|$) and direction in space.",
        fields: {
          "definition": "$$\\vec{v} = \\begin{bmatrix} v_1 \\\\ v_2 \\\\ \\vdots \\\\ v_n \\end{bmatrix} \\quad \\text{or} \\quad \\vec{v} = \\begin{bmatrix} v_1 & v_2 & \\cdots & v_n \\end{bmatrix}$$",
          "components": "Each element $v_i$ represents displacement along the corresponding axis",
          "examples": `2D vector: $\\vec{v} = \\begin{bmatrix} 2 \\\\ 3 \\end{bmatrix}$ represents 2 units along x-axis, 3 along y-axis
      
      3D vector: $\\vec{v} = \\begin{bmatrix} 1 \\\\ -2 \\\\ 4 \\end{bmatrix}$ represents displacements along x, y, and z axes`,
          "notation": "Denoted by arrow overhead ($\\vec{v}$) or bold ($\\mathbf{v}$)"
        },
        category: "Vectors"
      },
    {
        name: "Components",
        formula: "The individual elements of a vector, e.g., (v1, v2, ..., vn).",
        fields: [],
        category: "Vectors Basic Terms"
    },
    {
        name: "Vector Magnitude (Norm)",
        formula: "Length of a vector, denoted as $|\\vec{v}|$ or $\\|\\vec{v}\\|$",
        fields: {
          "definition": "For an n-dimensional vector: $$|\\vec{v}| = \\sqrt{\\sum_{i=1}^n v_i^2}$$",
          "common cases": `2D vector: $|\\vec{v}| = \\sqrt{v_1^2 + v_2^2}$
       
       3D vector: $|\\vec{v}| = \\sqrt{v_1^2 + v_2^2 + v_3^2}$`,
          "properties": "Always non-negative: $|\\vec{v}| \\geq 0$, equals zero only for zero vector",
          "examples": `For $\\vec{v} = \\begin{bmatrix} 3 \\\\ 4 \\end{bmatrix}$:
       $|\\vec{v}| = \\sqrt{3^2 + 4^2} = \\sqrt{25} = 5$`
        },
        category: "Vectors"
       },
       {
        name: "Unit Vector",
        formula: "Vector with magnitude of 1: $|\\vec{u}| = 1$",
        fields: {
          "definition": "Obtained by normalizing a vector: $$\\vec{u} = \\frac{\\vec{v}}{|\\vec{v}|}$$",
//          "standard basis": `Standard unit vectors in $\\mathbb{R}^3$:
// $$\\hat{i} = \\begin{bmatrix} 1 \\\\ 0 \\\\ 0 \\end{bmatrix}, \\quad
// \\hat{j} = \\begin{bmatrix} 0 \\\\ 1 \\\\ 0 \\end{bmatrix}, \\quad
// \\hat{k} = \\begin{bmatrix} 0 \\\\ 0 \\\\ 1 \\end{bmatrix}$$`,
"standard basis": `Standard unit vectors in $\\mathbb{R}^3$:
$$\\hat{i} = \\begin{bmatrix} 1 \\\\ 0 \\\\ 0 \\end{bmatrix}, \\quad \\hat{j} = \\begin{bmatrix} 0 \\\\ 1 \\\\ 0 \\end{bmatrix}, \\quad \\hat{k} = \\begin{bmatrix} 0 \\\\ 0 \\\\ 1 \\end{bmatrix}$$`,
          "examples": `Normalizing $\\vec{v} = \\begin{bmatrix} 3 \\\\ 4 \\end{bmatrix}$:
       $$\\vec{u} = \\frac{1}{5}\\begin{bmatrix} 3 \\\\ 4 \\end{bmatrix} = \\begin{bmatrix} 0.6 \\\\ 0.8 \\end{bmatrix}$$`,
          "properties": "Unit vectors preserve direction while normalizing magnitude"
        },
        category: "Vectors"
       },
    {
        name: "Zero Vector (Null Vector)",
        formula: "A vector where all components are zero: $\\vec{0}$ or $\\mathbf{0}$",
        fields: {
            "column": "Column vector form: $$\\begin{bmatrix} 0 \\\\ 0 \\\\ \\vdots \\\\ 0 \\end{bmatrix}$$",
            "row": "Row vector form: $$\\begin{bmatrix} 0 & 0 & \\cdots & 0 \\end{bmatrix}$$",
            "properties": "Key property: $\\vec{0} + \\vec{v} = \\vec{v}$ for any vector $\\vec{v}$"
        },
        category: "Vectors"
    },
    {
        name: "Column Vector",
        formula: "A $n \\times 1$ matrix (vertical array of numbers): $$\\vec{v} = \\begin{bmatrix} v_1 \\\\ v_2 \\\\ \\vdots \\\\ v_n \\end{bmatrix}$$",
        fields: {
            "examples": "Examples: $$\\begin{bmatrix} 2 \\\\ -1 \\\\ 4 \\end{bmatrix} \\quad \\begin{bmatrix} x \\\\ y \\\\ z \\end{bmatrix}$$",
            "properties": "Can be transposed to get a row vector: $$\\vec{v}^T = \\begin{bmatrix} v_1 & v_2 & \\cdots & v_n \\end{bmatrix}$$"
        },
        category: "Vectors"
     },
     {
        name: "Row Vector",
        formula: "A $1 \\times n$ matrix (horizontal array of numbers): $$\\vec{v} = \\begin{bmatrix} v_1 & v_2 & \\cdots & v_n \\end{bmatrix}$$",
        fields: {
            "examples": "Examples: $$\\begin{bmatrix} 2 & -1 & 4 \\end{bmatrix} \\quad \\begin{bmatrix} x & y & z \\end{bmatrix}$$",
            "properties": "Can be transposed to get a column vector: $$\\vec{v}^T = \\begin{bmatrix} v_1 \\\\ v_2 \\\\ \\vdots \\\\ v_n \\end{bmatrix}$$"
        },
        category: "Vectors"
     },
     {
        "name": "Vector Addition",
        "formula": "For vectors $u,v$ in $\\mathbb{R}^n$: $(u + v)_i = u_i + v_i$",
        "fields": {
            "Properties": "$u + v = v + u$\n$u + (v + w) = (u + v) + w$\n$u + 0 = u$",
            "Example": "$$\\begin{bmatrix} 1 \\\\ 2 \\\\ 3 \\end{bmatrix} + \\begin{bmatrix} 4 \\\\ 5 \\\\ 6 \\end{bmatrix} = \\begin{bmatrix} 5 \\\\ 7 \\\\ 9 \\end{bmatrix}$$"
        },
        "category": "Vector Operations"
     },
     {
        "name": "Scalar Multiplication",
        "formula": "For scalar $c$ and vector $v$: $(cv)_i = cv_i$",
        "fields": {
            "Properties": "$c(u + v) = cu + cv$\n$(c + d)v = cv + dv$\n$(cd)v = c(dv)$",
            "Example": "$$3\\begin{bmatrix} 2 \\\\ -1 \\\\ 4 \\end{bmatrix} = \\begin{bmatrix} 6 \\\\ -3 \\\\ 12 \\end{bmatrix}$$"
        },
        "category": "Vector Operations"
     },
    {
        name: "Linear Combination",
        formula: "A vector $\\vec{v}$ is a linear combination of vectors $\\{\\vec{v_1}, \\vec{v_2}, ..., \\vec{v_n}\\}$ if it can be written as $\\vec{v} = c_1\\vec{v_1} + c_2\\vec{v_2} + ... + c_n\\vec{v_n}$ for some scalars $c_1, c_2, ..., c_n$",
        fields: {
          "geometric": `The set of all possible linear combinations forms:
       - A line if one nonzero vector
       - A plane if two linearly independent vectors
       - A space if three linearly independent vectors`,
          "examples": `Vector $\\vec{v} = \\begin{bmatrix} 5 \\\\ 7 \\end{bmatrix}$ as linear combination:
       $$\\vec{v} = 2\\begin{bmatrix} 1 \\\\ 2 \\end{bmatrix} + 3\\begin{bmatrix} 1 \\\\ 1 \\end{bmatrix}$$`
        },
        category: "Vectors"
       },
       {
        "name": "Dot Product",
        "formula": "For vectors $u,v$ in $\\mathbb{R}^n$: $u\\cdot v = \\sum_{i=1}^n u_iv_i$",
        "fields": {
            "Properties": "$u\\cdot v = v\\cdot u$\n$u\\cdot u = \\|u\\|^2$\n$(cu)\\cdot v = c(u\\cdot v)$",
            "Geometric": "$$u\\cdot v = \\|u\\|\\|v\\|\\cos\\theta$$ where $\\theta$ is angle between vectors",
            "Example": "$$\\begin{bmatrix} 1 \\\\ 2 \\\\ 3 \\end{bmatrix} \\cdot \\begin{bmatrix} 4 \\\\ 5 \\\\ 6 \\end{bmatrix} = 1(4) + 2(5) + 3(6) = 32$$"
        },
        "category": "Vector Operations"
     },
     {
        "name": "Cross Product",
        "formula": "For $u,v$ in $\\mathbb{R}^3$: $u\\times v = \\|u\\|\\|v\\|\\sin\\theta\\, \\mathbf{n}$",
        "fields": {
            "Computation": "$$\\begin{bmatrix} u_1 \\\\ u_2 \\\\ u_3 \\end{bmatrix} \\times \\begin{bmatrix} v_1 \\\\ v_2 \\\\ v_3 \\end{bmatrix} = \\begin{bmatrix} u_2v_3 - u_3v_2 \\\\ u_3v_1 - u_1v_3 \\\\ u_1v_2 - u_2v_1 \\end{bmatrix}$$",
            "Properties": "$u\\times v = -(v\\times u)$\n$u\\times u = 0$\n$\\|u\\times v\\| = \\|u\\|\\|v\\|\\sin\\theta$",
            "Applications": "Normal vectors\nTorque calculation\nArea of parallelogram: $\\|u\\times v\\|$"
        },
        "category": "Vector Operations"
     },
    {
        name: "Vector Projection",
        formula: "Orthogonal projection of vector $\\vec{v}$ onto vector $\\vec{u}$ is the vector component of $\\vec{v}$ parallel to $\\vec{u}$, given by: $\\text{proj}_{\\vec{u}}\\vec{v} = \\frac{\\vec{v} \\cdot \\vec{u}}{|\\vec{u}|^2}\\vec{u}$",
        fields: {
          "formula expanded": `For vectors $\\vec{v}$ and $\\vec{u}$:
       $$\\text{proj}_{\\vec{u}}\\vec{v} = \\frac{\\vec{v} \\cdot \\vec{u}}{\\vec{u} \\cdot \\vec{u}}\\vec{u} = (\\vec{v} \\cdot \\hat{u})\\hat{u}$$`,
          "geometric": `The projection decomposes $\\vec{v}$ into:
       - Parallel component: $\\text{proj}_{\\vec{u}}\\vec{v}$ (along $\\vec{u}$)
       - Perpendicular component: $\\vec{v} - \\text{proj}_{\\vec{u}}\\vec{v}$`,
          "examples": `For $\\vec{v} = \\begin{bmatrix} 3 \\\\ 4 \\end{bmatrix}$ onto $\\vec{u} = \\begin{bmatrix} 1 \\\\ 0 \\end{bmatrix}$:
       $$\\text{proj}_{\\vec{u}}\\vec{v} = \\begin{bmatrix} 3 \\\\ 0 \\end{bmatrix}$$`
        },
        category: "Vectors"
       },
       {
        name: "Linearly Independent Vectors",
        formula: "A set of vectors $\\{\\vec{v_1}, \\vec{v_2}, ..., \\vec{v_n}\\}$ is linearly independent if the equation $c_1\\vec{v_1} + c_2\\vec{v_2} + ... + c_n\\vec{v_n} = \\vec{0}$ is satisfied only when all $c_i = 0$",
        fields: {
          "geometric": `In $\\mathbb{R}^2$:
       - Two vectors are linearly independent if neither is a scalar multiple of the other
       - In $\\mathbb{R}^3$, three vectors are linearly independent if none lies in the plane formed by the other two`,
          "examples": `Linearly independent vectors:
       $$\\vec{v_1} = \\begin{bmatrix} 1 \\\\ 0 \\end{bmatrix}, \\quad \\vec{v_2} = \\begin{bmatrix} 0 \\\\ 1 \\end{bmatrix}$$
       
       Linearly dependent vectors:
       $$\\vec{v_1} = \\begin{bmatrix} 1 \\\\ 2 \\end{bmatrix}, \\quad \\vec{v_2} = \\begin{bmatrix} 2 \\\\ 4 \\end{bmatrix}$$`
        },
        category: "Vectors"
       },
       {
        name: "Linearly Dependent Vectors",
        formula: "A set of vectors $\\{\\vec{v_1}, \\vec{v_2}, ..., \\vec{v_n}\\}$ is linearly dependent if there exist scalars $c_1, c_2, ..., c_n$, not all zero, such that $c_1\\vec{v_1} + c_2\\vec{v_2} + ... + c_n\\vec{v_n} = \\vec{0}$",
        fields: {
          "geometric": `In $\\mathbb{R}^2$:
       - Two vectors are linearly dependent if one is a scalar multiple of the other
       - In $\\mathbb{R}^3$, three vectors are linearly dependent if one lies in the plane formed by the other two`,
          "examples": `$$\\vec{v_1} = \\begin{bmatrix} 2 \\\\ 4 \\end{bmatrix}, \\quad \\vec{v_2} = \\begin{bmatrix} 1 \\\\ 2 \\end{bmatrix}$$
       Here $2\\vec{v_2} = \\vec{v_1}$, making them linearly dependent`
        },
        category: "Vectors"
       },
       {
        name: "Vector Space",
        formula: "A set $V$ with vectors $\\vec{u}, \\vec{v} \\in V$ and scalars $c$ is a vector space if it's closed under addition ($\\vec{u} + \\vec{v} \\in V$) and scalar multiplication ($c\\vec{v} \\in V$), and satisfies the vector space axioms",
        fields: {
          "axioms": `For all $\\vec{u}, \\vec{v}, \\vec{w} \\in V$ and scalars $c,d$:
       - Commutativity: $\\vec{u} + \\vec{v} = \\vec{v} + \\vec{u}$
       - Associativity: $(\\vec{u} + \\vec{v}) + \\vec{w} = \\vec{u} + (\\vec{v} + \\vec{w})$
       - Zero vector: $\\exists \\vec{0}$ such that $\\vec{v} + \\vec{0} = \\vec{v}$
       - Additive inverse: $\\exists -\\vec{v}$ such that $\\vec{v} + (-\\vec{v}) = \\vec{0}$
       - Distributivity: $c(\\vec{u} + \\vec{v}) = c\\vec{u} + c\\vec{v}$`,
          "examples": `Common vector spaces:
       - $\\mathbb{R}^n$: n-dimensional real vectors
       - Matrices of fixed size
       - Polynomials of degree ≤ n`
        },
        category: "Vectors"
       },
       {
        name: "Vector Subspace",
        formula: "A subset $W$ of a vector space $V$ is a subspace if it's closed under addition and scalar multiplication: for all $\\vec{u}, \\vec{v} \\in W$ and scalar $c$, both $\\vec{u} + \\vec{v} \\in W$ and $c\\vec{v} \\in W$",
        fields: {
          "properties": `Any subspace must:
       - Contain zero vector
       - Be closed under linear combinations
       - Form a vector space itself`,
          "examples": `Common subspaces of $\\mathbb{R}^3$:
       - Any plane through origin
       - Any line through origin
       - The zero subspace $\\{\\vec{0}\\}$`
        },
        category: "Vectors"
       },
       {
        name: "Span",
        formula: "The span of vectors $\\{\\vec{v_1}, \\vec{v_2}, ..., \\vec{v_n}\\}$ is the set of all their linear combinations: $\\text{span}\\{\\vec{v_1}, \\vec{v_2}, ..., \\vec{v_n}\\} = \\{c_1\\vec{v_1} + c_2\\vec{v_2} + ... + c_n\\vec{v_n} | c_i \\in \\mathbb{R}\\}$",
        fields: {
          "geometric": `Span represents:
       - A line through origin (one vector)
       - A plane through origin (two linearly independent vectors)
       - All of $\\mathbb{R}^3$ (three linearly independent vectors)`,
          "examples": `$$\\text{span}\\left\\{\\begin{bmatrix} 1 \\\\ 0 \\end{bmatrix}, \\begin{bmatrix} 0 \\\\ 1 \\end{bmatrix}\\right\\} = \\mathbb{R}^2$$
       $$\\text{span}\\left\\{\\begin{bmatrix} 1 \\\\ 2 \\end{bmatrix}, \\begin{bmatrix} 2 \\\\ 4 \\end{bmatrix}\\right\\} = \\text{line through origin}$$`
        },
        category: "Vectors"
       },
       {
        name: "Basis",
        formula: "A basis of a vector space $V$ is a linearly independent set of vectors that spans $V$. For any vector $\\vec{v} \\in V$, there exists a unique representation $\\vec{v} = c_1\\vec{v_1} + c_2\\vec{v_2} + ... + c_n\\vec{v_n}$",
        fields: {
          "properties": `- Contains minimum number of vectors needed to span space
       - Linearly independent and spans entire space
       - Number of vectors = dimension of space`,
          "examples": `Standard basis for $\\mathbb{R}^3$:
       $$\\left\\{\\begin{bmatrix} 1 \\\\ 0 \\\\ 0 \\end{bmatrix}, \\begin{bmatrix} 0 \\\\ 1 \\\\ 0 \\end{bmatrix}, \\begin{bmatrix} 0 \\\\ 0 \\\\ 1 \\end{bmatrix}\\right\\}$$`
        },
        category: "Vectors"
       },
       {
        name: "Dimension",
        formula: "The dimension of a vector space $V$ is the number of vectors in any basis of $V$, denoted $\\dim(V)$",
        fields: {
          "properties": `- Independent of choice of basis
       - Equal to maximum number of linearly independent vectors
       - $\\dim(\\mathbb{R}^n) = n$`,
          "examples": `- $\\dim(\\mathbb{R}^2) = 2$ (plane)
       - $\\dim(\\mathbb{R}^3) = 3$ (space)
       - $\\dim(\\{\\vec{0}\\}) = 0$ (zero space)
       - $\\dim(\\text{line}) = 1$`
        },
        category: "Vectors"
       },
       {
        name: "Orthogonal Vectors",
        formula: "Two vectors $\\vec{u}$ and $\\vec{v}$ are orthogonal if their dot product is zero: $\\vec{u} \\cdot \\vec{v} = 0$",
        fields: {
          "geometric": "Orthogonal vectors are perpendicular to each other, forming a 90° angle",
      "examples": "$$\\begin{bmatrix} 1 \\\\ 0 \\end{bmatrix}, \\quad \\begin{bmatrix} 0 \\\\ 1 \\end{bmatrix}$$\n$$\\vec{u} \\cdot \\vec{v} = 1(0) + 0(1) = 0$$"
        },
        category: "Vectors"
       },
       {
        name: "Orthonormal Vectors",
        formula: "A set of vectors is orthonormal if they are orthogonal to each other and each has unit length: $\\vec{u_i} \\cdot \\vec{u_j} = \\delta_{ij}$ where $\\delta_{ij}$ is the Kronecker delta",
        fields: {
          "properties": ` Orthogonal to each other
 Each vector has magnitude equal to 1
 Form an orthonormal basis if they span the space`,
        "examples": "Standard basis vectors are orthonormal: $$\\hat{i} = \\begin{bmatrix} 1 \\\\ 0 \\\\ 0 \\end{bmatrix}, \\quad \\hat{j} = \\begin{bmatrix} 0 \\\\ 1 \\\\ 0 \\end{bmatrix}, \\quad \\hat{k} = \\begin{bmatrix} 0 \\\\ 0 \\\\ 1 \\end{bmatrix}$$"
        },
        category: "Vectors"
       },
       {
        "name": "Gram-Schmidt Process",
        "formula": "Produces orthonormal basis $\\{u_1,\\ldots,u_n\\}$ from linearly independent vectors $\\{v_1,\\ldots,v_n\\}$",
        "fields": {
            "Process": "$$u_1 = \\frac{v_1}{\\|v_1\\|},\\ u_k = \\frac{v_k - \\sum_{i=1}^{k-1}\\text{proj}_{u_i}(v_k)}{\\|v_k - \\sum_{i=1}^{k-1}\\text{proj}_{u_i}(v_k)\\|}$$",
            "Example": "For $v_1 = \\begin{bmatrix} 1 \\\\ 1 \\\\ 0 \\end{bmatrix}, v_2 = \\begin{bmatrix} 1 \\\\ 0 \\\\ 1 \\end{bmatrix}$:\n$$u_1 = \\frac{1}{\\sqrt{2}}\\begin{bmatrix} 1 \\\\ 1 \\\\ 0 \\end{bmatrix}, u_2 = \\frac{1}{\\sqrt{6}}\\begin{bmatrix} 1 \\\\ -1 \\\\ 2 \\end{bmatrix}$$"
        },
        "category": "Vectors Orthogonality"
     },
     {
        "name": "Direction Cosines",
        "formula": "For vector $v$, cosines with axes: $\\cos\\alpha = \\frac{v_x}{\\|v\\|}, \\cos\\beta = \\frac{v_y}{\\|v\\|}, \\cos\\gamma = \\frac{v_z}{\\|v\\|}$",
        "fields": {
            "Properties": "$\\cos^2\\alpha + \\cos^2\\beta + \\cos^2\\gamma = 1$",
            "Example": "Vector $\\begin{bmatrix} 1 \\\\ 1 \\\\ 1 \\end{bmatrix}$ has direction cosines:\n$$\\cos\\alpha = \\cos\\beta = \\cos\\gamma = \\frac{1}{\\sqrt{3}}$$"
        },
        "category": "Vectors Geometric Interpretations"
     },
     {
        "name": "Linear Transformation",
        "formula": "Function $T: V \\to W$ where $T(au + bv) = aT(u) + bT(v)$",
        "fields": {
            "Properties": "Preserves linear combinations\nCan be represented by matrix multiplication\n$T(0) = 0$",
            "Matrix Form": "For transformation $T: \\mathbb{R}^n \\to \\mathbb{R}^m$:\n$$T(x) = Ax$$ where $A$ is $m\\times n$ matrix",
            "Examples": "Rotation\nScaling\nProjection\nReflection"
        },
        "category": "Vectors Transformations"
     },
     {
        "name": "Matrix Representation",
        "formula": "For transformation $T$ with basis $\\{v_1,\\ldots,v_n\\}$, $[T]_{\\mathcal{B}} = [T(v_1)\\cdots T(v_n)]$",
        "fields": {
            "Properties": "$[T(v)]_{\\mathcal{B}} = [T]_{\\mathcal{B}}[v]_{\\mathcal{B}}$\n$[T]_{\\mathcal{C}} = P^{-1}[T]_{\\mathcal{B}}P$ for change of basis $P$",
            "Example": "Rotation by $\\theta$ in $\\mathbb{R}^2$: $$\\begin{bmatrix} \\cos\\theta & -\\sin\\theta \\\\ \\sin\\theta & \\cos\\theta \\end{bmatrix}$$"
        },
        "category": "Vectors Transformations"
     },
     {
        "name": "Gradient Vector",
        "formula": "For scalar function $f(x_1,\\ldots,x_n)$: $\\nabla f = \\left(\\frac{\\partial f}{\\partial x_1},\\ldots,\\frac{\\partial f}{\\partial x_n}\\right)$",
        "fields": {
            "Properties": "Points in direction of steepest increase\nPerpendicular to level curves/surfaces\n$\\nabla(fg) = f\\nabla g + g\\nabla f$",
            "Example": "For $f(x,y) = x^2 + xy + y^2$:\n$$\\nabla f = (2x + y, x + 2y)$$"
        },
        "category": "Vectors Applications"
     },
     {
        "name": "Position Vector",
        "formula": "Vector $\\vec{r} = (x,y,z)$ from origin to point $P(x,y,z)$",
        "fields": {
            "Properties": "Length gives distance from origin: $\\|\\vec{r}\\|$\nDirection gives orientation in space",
            "Applications": "Velocity: $\\vec{v} = \\frac{d\\vec{r}}{dt}$\nAcceleration: $\\vec{a} = \\frac{d^2\\vec{r}}{dt^2}$",
            "Example": "Point $P(3,4,5)$ has position vector:\n$$\\vec{r} = 3\\hat{i} + 4\\hat{j} + 5\\hat{k} = \\begin{bmatrix} 3 \\\\ 4 \\\\ 5 \\end{bmatrix}$$"
        },
        "category": "Vectors Applications"
     },
    // {
    //     name: "Force Vector",
    //     formula: "In physics, a vector representing a force with magnitude and direction.",
    //     fields: [],
    //     category: "Vectors Applications"
    // },




       //matrices
       {
        "name": "Matrix",
        "formula": "A rectangular array of elements $a_{ij}$ in $m$ rows and $n$ columns",
        "fields": {
            "Notation": "$$A = [a_{ij}]_{m\\times n} = \\begin{bmatrix} a_{11} & a_{12} & \\cdots & a_{1n} \\\\ a_{21} & a_{22} & \\cdots & a_{2n} \\\\ \\vdots & \\vdots & \\ddots & \\vdots \\\\ a_{m1} & a_{m2} & \\cdots & a_{mn} \\end{bmatrix}$$",
            "Properties": "Size: $m \\times n$\nElements: $a_{ij}$ where $i$ is row, $j$ is column"
        },
        "category": "Matrices Basic Terms"
     },
     {
        "name": "Row Matrix",
        "formula": "Matrix of size $1 \\times n$ (single row)",
        "fields": {
            "Form": "$$A = \\begin{bmatrix} a_1 & a_2 & \\cdots & a_n \\end{bmatrix}$$",
            "Applications": "Row vector representation\nLinear combinations"
        },
        "category": "Matrices Basic Terms"
     },
     {
        "name": "Column Matrix",
        "formula": "Matrix of size $m \\times 1$ (single column)",
        "fields": {
            "Form": "$$A = \\begin{bmatrix} a_1 \\\\ a_2 \\\\ \\vdots \\\\ a_m \\end{bmatrix}$$",
            "Applications": "Vector representation\nSolutions to linear systems"
        },
        "category": "Matrices Basic Terms"
     },
        {
            name: "Square Matrix",
            formula: "A [matrix](!/linear-algebra/definitions#matrix) with an equal number of rows and columns, often associated with special properties like determinants and eigenvalues.",
            fields: {
                "$n \\times n$": "A square matrix of size n×n with arbitrary elements: $$A = \\begin{bmatrix} a_{11} & a_{12} & \\cdots & a_{1n} \\\\ a_{21} & a_{22} & \\cdots & a_{2n} \\\\ \\vdots & \\vdots & \\ddots & \\vdots \\\\ a_{n1} & a_{n2} & \\cdots & a_{nn} \\end{bmatrix}$$",
            },
            category: "Matrices Basic Terms"
        },
        {
            name:"Zero Matrix",
            formula:"A [matrix](!/linear-algebra/definitions#matrix) with all elements are equal to zero. Also called **null matrix**.",
            fields:{
                "rectangular": "Zero matrix can have any dimensions $m \\times n$: $$O = \\begin{bmatrix} 0 & 0 & \\cdots & 0 \\\\ 0 & 0 & \\cdots & 0 \\\\ \\vdots & \\vdots & \\ddots & \\vdots \\\\ 0 & 0 & \\cdots & 0 \\end{bmatrix}$$",
                "$n \\times n$": "Square zero matrix has equal number of rows and columns: $$O_n = \\begin{bmatrix} 0 & 0 & \\cdots & 0 \\\\ 0 & 0 & \\cdots & 0 \\\\ \\vdots & \\vdots & \\ddots & \\vdots \\\\ 0 & 0 & \\cdots & 0 \\end{bmatrix}$$",

            },
            category:"Matrices Basic Terms"

        },
        {
            name: "Main Diagonal",
            formula: "In a [square matrix](!/linear-algebra/definitions#square_matrix), the main diagonal (or principal diagonal, or leading diagonal) consists of elements where row index equals column index.",
            fields: {
                "$n \\times n$": "For an $n \\times n$ matrix $A=[a_{ij}]$, main diagonal contains elements where $i=j$: $$A = \\begin{bmatrix} a_{11} & a_{12} & \\cdots & a_{1n} \\\\ a_{21} & a_{22} & \\cdots & a_{2n} \\\\ \\vdots & \\vdots & \\ddots & \\vdots \\\\ a_{n1} & a_{n2} & \\cdots & a_{nn} \\end{bmatrix}$$ Here $a_{11}, a_{22}, ..., a_{nn}$ form the main diagonal",
                "$2 \\times 2$": "In 2×2 matrix, elements $a_{11}$ and $a_{22}$ form main diagonal: $$\\begin{bmatrix} a_{11} & a_{12} \\\\ a_{21} & a_{22} \\end{bmatrix}$$",
                "$3 \\times 3$": "In 3×3 matrix, elements $a_{11}$, $a_{22}$, and $a_{33}$ form main diagonal: $$\\begin{bmatrix} a_{11} & a_{12} & a_{13} \\\\ a_{21} & a_{22} & a_{23} \\\\ a_{31} & a_{32} & a_{33} \\end{bmatrix}$$"
            },
            category: "Matrices Basic Terms"
         },
         {
            name: "Triangular Matrix",
            formula: "A square matrix where all the elements either above or below the [main diagonal](!/linear-algebra/definitions#main_diagonal) are zero.",
            fields: {
                // "$n \\times n$": "Upper triangular matrix has zeros below diagonal: $$U = \\begin{bmatrix} u_{11} & u_{12} & u_{13} & \\cdots & u_{1n} \\\\ 0 & u_{22} & u_{23} & \\cdots & u_{2n} \\\\ 0 & 0 & u_{33} & \\cdots & u_{3n} \\\\ \\vdots & \\vdots & \\vdots & \\ddots & \\vdots \\\\ 0 & 0 & 0 & \\cdots & u_{nn} \\end{bmatrix}$$ Lower triangular has zeros above diagonal: $$L = \\begin{bmatrix} l_{11} & 0 & 0 & \\cdots & 0 \\\\ l_{21} & l_{22} & 0 & \\cdots & 0 \\\\ l_{31} & l_{32} & l_{33} & \\cdots & 0 \\\\ \\vdots & \\vdots & \\vdots & \\ddots & \\vdots \\\\ l_{n1} & l_{n2} & l_{n3} & \\cdots & l_{nn} \\end{bmatrix}$$",
                "$2 \\times 2$": "2×2 examples:\nUpper triangular: $$\\begin{bmatrix} 1 & 2 \\\\ 0 & 3 \\end{bmatrix}$$ Lower triangular: $$\\begin{bmatrix} 1 & 0 \\\\ 4 & 3 \\end{bmatrix}$$",
                "$3 \\times 3$": "3×3 examples:\nUpper triangular: $$\\begin{bmatrix} 1 & 2 & 3 \\\\ 0 & 4 & 5 \\\\ 0 & 0 & 6 \\end{bmatrix}$$ Lower triangular: $$\\begin{bmatrix} 1 & 0 & 0 \\\\ 4 & 5 & 0 \\\\ 7 & 8 & 9 \\end{bmatrix}$$",
                "$n \\times n$": "Upper triangular matrix: $$U = \\begin{bmatrix} \\color{blue}u_{11} & u_{12} & u_{13} & \\cdots & u_{1n} \\\\ 0 & \\color{blue}u_{22} & u_{23} & \\cdots & u_{2n} \\\\ 0 & 0 & \\color{blue}u_{33} & \\cdots & u_{3n} \\\\ \\vdots & \\vdots & \\vdots & \\ddots & \\vdots \\\\ 0 & 0 & 0 & \\cdots & \\color{blue}u_{nn} \\end{bmatrix}$$ Lower triangular: $$L = \\begin{bmatrix} \\color{blue}l_{11} & 0 & 0 & \\cdots & 0 \\\\ l_{21} & \\color{blue}l_{22} & 0 & \\cdots & 0 \\\\ l_{31} & l_{32} & \\color{blue}l_{33} & \\cdots & 0 \\\\ \\vdots & \\vdots & \\vdots & \\ddots & \\vdots \\\\ l_{n1} & l_{n2} & l_{n3} & \\cdots & \\color{blue}l_{nn} \\end{bmatrix}$$"
            },
            category: "Special Matrices"
         },
         {
            name: "Upper Triangular Matrix",
            formula: "A [square matrix](!/linear-algebra/definitions#square_matrix) with zeros below the [main diagonal](!/linear-algebra/definitions#main_diagonal). All elements $a_{ij}=0$ where $i > j$.",
            fields: {
                "$n \\times n$": "General form of upper triangular matrix: $$U = \\begin{bmatrix} \\color{red}u_{11} & u_{12} & u_{13} & \\cdots & u_{1n} \\\\ 0 & \\color{red}u_{22} & u_{23} & \\cdots & u_{2n} \\\\ 0 & 0 & \\color{red}u_{33} & \\cdots & u_{3n} \\\\ \\vdots & \\vdots & \\vdots & \\ddots & \\vdots \\\\ 0 & 0 & 0 & \\cdots & \\color{red}u_{nn} \\end{bmatrix}$$ where diagonal elements $\\color{red}u_{ii}$ can be any real numbers",
                "$2 \\times 2$": "2×2 example: $$\\begin{bmatrix} \\color{red}4 & 2 \\\\ 0 & \\color{red}3 \\end{bmatrix}$$",
                "$3 \\times 3$": "3×3 example: $$\\begin{bmatrix} \\color{red}1 & 5 & 3 \\\\ 0 & \\color{red}4 & 2 \\\\ 0 & 0 & \\color{red}6 \\end{bmatrix}$$"
            },
            category: "Special Matrices"
         },
         {
            name: "Lower Triangular Matrix",
            formula: "A square [matrix](!/linear-algebra/definitions#matrix) with zeros above the [main diagonal](!/linear-algebra/definitions#main_diagonal). All elements $a_{ij}=0$ where $i < j$.",
            fields: {
                "$n \\times n$": "General form of lower triangular matrix: $$L = \\begin{bmatrix} \\color{red}l_{11} & 0 & 0 & \\cdots & 0 \\\\ l_{21} & \\color{red}l_{22} & 0 & \\cdots & 0 \\\\ l_{31} & l_{32} & \\color{red}l_{33} & \\cdots & 0 \\\\ \\vdots & \\vdots & \\vdots & \\ddots & \\vdots \\\\ l_{n1} & l_{n2} & l_{n3} & \\cdots & \\color{red}l_{nn} \\end{bmatrix}$$ where diagonal elements $\\color{red}l_{ii}$ can be any real numbers",
                "$2 \\times 2$": "2×2 example: $$\\begin{bmatrix} \\color{red}3 & 0 \\\\ 2 & \\color{red}4 \\end{bmatrix}$$",
                "$3 \\times 3$": "3×3 example: $$\\begin{bmatrix} \\color{red}1 & 0 & 0 \\\\ 4 & \\color{red}2 & 0 \\\\ 7 & 5 & \\color{red}3 \\end{bmatrix}$$"
            },
            category: "Special Matrices"
         },

        {
            name: "Identity Matrix",
            formula: "A square matrix with 1s on the [main diagonal](!/linear-algebra/definitions#main_diagonal) and 0s elsewhere.",
            fields: {
                
                 "$n \\times n$":"A square matrix of size n×n that has 1s on the [main diagonal](!/linear-algebra/definitions#main_diagonal) and 0s elsewhere: $$I_n = \\begin{bmatrix} 1 & 0 & \\cdots & 0 \\\\ 0 & 1 & \\cdots & 0 \\\\ \\vdots & \\vdots & \\ddots & \\vdots \\\\ 0 & 0 & \\cdots & 1 \\end{bmatrix}$$",
                 "$2 \\times 2$": "**Identity matrix of size 2x2**: $$I_2 = \\begin{bmatrix} 1 & 0 \\\\ 0 & 1 \\end{bmatrix}$$ ",
                 "$3 \\times 3$": "**Identity matrix of size 3x3**: $$I_3 = \\begin{bmatrix} 1 & 0 & 0 \\\\ 0 & 1 & 0 \\\\ 0 & 0 & 1 \\end{bmatrix}$$",
                 "$4 \\times 4$": "**Identity matrix of size 4x4**: $$I_4 = \\begin{bmatrix} 1 & 0 & 0 & 0 \\\\ 0 & 1 & 0 & 0 \\\\ 0 & 0 & 1 & 0 \\\\ 0 & 0 & 0 & 1 \\end{bmatrix}$$"
            },
            category: "Special Matrices"
        },
        {
            name: "Anti-symmetric(Skew-symmetric) Matrix",
            formula: "A square matrix that equals the negative of its transpose: $A = -A^T$. All diagonal elements must be zero.",
            fields: {
                "$n \\times n$": "General form: $$A = \\begin{bmatrix} \\color{red}0 & a_{12} & a_{13} & \\cdots & a_{1n} \\\\ -a_{12} & \\color{red}0 & a_{23} & \\cdots & a_{2n} \\\\ -a_{13} & -a_{23} & \\color{red}0 & \\cdots & a_{3n} \\\\ \\vdots & \\vdots & \\vdots & \\ddots & \\vdots \\\\ -a_{1n} & -a_{2n} & -a_{3n} & \\cdots & \\color{red}0 \\end{bmatrix}$$ where $a_{ij} = -a_{ji}$ for all $i,j$",
                "$2 \\times 2$": "2×2 example: $$\\begin{bmatrix} \\color{red}0 & 2 \\\\ -2 & \\color{red}0 \\end{bmatrix}$$",
                "$3 \\times 3$": "3×3 example: $$\\begin{bmatrix} \\color{red}0 & 3 & 1 \\\\ -3 & \\color{red}0 & 2 \\\\ -1 & -2 & \\color{red}0 \\end{bmatrix}$$"
            },
            category: "Special Matrices"
         },
        {
            name: "Diagonal Matrix",
            formula: "A square matrix with non-zero elements only on the [main diagonal](!/linear-algebra/definitions#main_diagonal).",
            fields: {
                "$n \\times n$": "A diagonal matrix of size n×n contains arbitrary values on [main diagonal](!/linear-algebra/definitions#main_diagonal): $$D_n = \\begin{bmatrix} d_1 & 0 & \\cdots & 0 \\\\ 0 & d_2 & \\cdots & 0 \\\\ \\vdots & \\vdots & \\ddots & \\vdots \\\\ 0 & 0 & \\cdots & d_n \\end{bmatrix}$$",

            },
            category: "Special Matrices"
        },
        {
            name: "Symmetric Matrix",
            formula: "A matrix equal to its transpose, $A = A^T$.",
            fields: {
               "$n \\times n$": "A symmetric matrix elements mirror across [main diagonal](!/linear-algebra/definitions#main_diagonal): $$A = \\begin{bmatrix} a_{11} & a_{12} & a_{13} & \\cdots & a_{1n} \\\\ a_{12} & a_{22} & a_{23} & \\cdots & a_{2n} \\\\ a_{13} & a_{23} & a_{33} & \\cdots & a_{3n} \\\\ \\vdots & \\vdots & \\vdots & \\ddots & \\vdots \\\\ a_{1n} & a_{2n} & a_{3n} & \\cdots & a_{nn} \\end{bmatrix}$$ where $a_{12}=a_{21}, a_{13}=a_{31}, ..., a_{ij}=a_{ji}$",
            },
            category: "Special Matrices"
        },
        {
            "name": "Transposition",
            "formula": "An operation that flips a matrix over its main diagonal, switching rows and columns: $(A^T)_{ij} = A_{ji}$",
            "fields": {
                "$n \\times m$": "For matrix $A$ of size $n \\times m$, its transpose $A^T$ is of size $m \\times n$: $$A = \\begin{bmatrix} a_{11} & a_{12} & a_{13} \\\\ a_{21} & a_{22} & a_{23} \\end{bmatrix} \\rightarrow A^T = \\begin{bmatrix} a_{11} & a_{21} \\\\ a_{12} & a_{22} \\\\ a_{13} & a_{23} \\end{bmatrix}$$",
                "Properties": "$(A^T)^T = A \\\\ (AB)^T = B^T A^T \\\\ (A + B)^T = A^T + B^T$"
            },
            "category": "Matrix Operations"
        },
        {
            "name": "Matrix Addition",
            "formula": "For matrices $A,B$ of same size, $(A+B)_{ij} = A_{ij} + B_{ij}$",
            "fields": {
                "Example": "$$\\begin{bmatrix} 1 & 2 \\\\ 3 & 4 \\end{bmatrix} + \\begin{bmatrix} 5 & 6 \\\\ 7 & 8 \\end{bmatrix} = \\begin{bmatrix} 6 & 8 \\\\ 10 & 12 \\end{bmatrix}$$",
                "Properties": "Commutative: $A + B = B + A \\\\$ Associative: $(A + B) + C = A + (B + C)$"
            },
            "category": "Matrix Operations"
        },
        {
            "name": "Scalar Addition (Matrix)",
            "formula": "For scalar $c$ and matrix $A$, $(c+A)_{ij} = c + A_{ij}$",
            "fields": {
                "Example": "$$2 + \\begin{bmatrix} 1 & 3 \\\\ 2 & 4 \\end{bmatrix} = \\begin{bmatrix} 3 & 5 \\\\ 4 & 6 \\end{bmatrix}$$",
                "Properties": "Commutative: $c + A = A + c$"
            },
            "category": "Matrix Operations"
        },
        {
            "name": "Scalar Multiplication(Matrix)",
            "formula": "For scalar $c$ and matrix $A$, $(cA)_{ij} = cA_{ij}$",
            "fields": {
                "Example": "$$2\\begin{bmatrix} 1 & 3 \\\\ 2 & 4 \\end{bmatrix} = \\begin{bmatrix} 2 & 6 \\\\ 4 & 8 \\end{bmatrix}$$",
                "Properties": "Associative: $a(bA) = (ab)A \\\\$ Distributive: $a(A + B) = aA + aB \\\\ (a + b)A = aA + bA$"
            },
            "category": "Matrix Operations"
         },
         {
            "name": "Matrix Multiplication",
            "formula": "For matrices $A_{m\\times n}, B_{n\\times p}$, $(AB)_{ij} = \\sum_{k=1}^n a_{ik}b_{kj}$",
            "fields": {
                "Example": "$$\\begin{bmatrix} 1 & 2 \\\\ 3 & 4 \\end{bmatrix} \\begin{bmatrix} 5 & 6 \\\\ 7 & 8 \\end{bmatrix} = \\begin{bmatrix} 1(5) + 2(7) & 1(6) + 2(8) \\\\ 3(5) + 4(7) & 3(6) + 4(8) \\end{bmatrix} = \\begin{bmatrix} 19 & 22 \\\\ 43 & 50 \\end{bmatrix}$$",
                "Properties": "Not commutative: $AB \\neq BA \\\\$ Associative: $(AB)C = A(BC) \\\\$ Distributive: $A(B + C) = AB + AC$"
            },
            "category": "Matrix Operations"
         },
         {
            "name": "Determinant",
            "formula": "For square matrix $A$, denoted $\\det(A)$ or $|A|$",
            "fields": {
                "$2 \\times 2$": "$$\\begin{vmatrix} a & b \\\\ c & d \\end{vmatrix} = ad - bc$$",
                "$3 \\times 3$": "$$\\begin{vmatrix} a_{11} & a_{12} & a_{13} \\\\ a_{21} & a_{22} & a_{23} \\\\ a_{31} & a_{32} & a_{33} \\end{vmatrix} = a_{11}a_{22}a_{33} + a_{12}a_{23}a_{31} + a_{13}a_{21}a_{32} - a_{13}a_{22}a_{31} - a_{11}a_{23}a_{32} - a_{12}a_{21}a_{33}$$",
                "Properties": "For square matrices: $\\\\ \\det(AB) = \\det(A)\\det(B) \\\\ \\det(A^T) = \\det(A) \\\\ A$ invertible $\\iff \\det(A) \\neq 0$"
            },
            "category": "Matrix Properties"
         },
         {
            "name": "Inverse Matrix",
            "formula": "For square matrix $A$, its inverse $A^{-1}$ satisfies $AA^{-1} = A^{-1}A = I$",
            "fields": {
                "$2 \\times 2$": "For $A = \\begin{bmatrix} a & b \\\\ c & d \\end{bmatrix}$, if $\\det(A) \\neq 0$: $$A^{-1} = \\frac{1}{ad-bc}\\begin{bmatrix} d & -b \\\\ -c & a \\end{bmatrix}$$",
                "Properties": "$(A^{-1})^{-1} = A \\\\ (AB)^{-1} = B^{-1}A^{-1} \\\\ \\det(A^{-1}) = \\frac{1}{\\det(A)}$"
            },
            "category": "Matrix Properties"
         },
         {
            "name": "Rank",
            "formula": "Number of linearly independent rows/columns, denoted $\\text{rank}(A)$",
            "fields": {
                "Properties": "$\\text{rank}(A) \\leq \\min(m,n)$ for $A_{m\\times n} \\\\ \\text{rank}(A) = \\text{rank}(A^T) \\\\ \\text{rank}(AB) \\leq \\min(\\text{rank}(A), \\text{rank}(B))$",
                "Full rank": "Matrix has maximum possible rank: $\\text{rank}(A) = \\min(m,n)$"
            },
            "category": "Matrix Properties"
         },
         {
            "name": "Trace",
            "formula": "Sum of main diagonal elements: $\\text{tr}(A) = \\sum_{i=1}^n a_{ii}$",
            "fields": {
                "Example": "$$\\text{tr}\\begin{bmatrix} 2 & 1 \\\\ 4 & 3 \\end{bmatrix} = 2 + 3 = 5$$",
                "Properties": "$\\text{tr}(A + B) = \\text{tr}(A) + \\text{tr}(B) \\\\ \\text{tr}(AB) = \\text{tr}(BA) \\\\ \\text{tr}(cA) = c\\text{tr}(A)$"
            },
            "category": "Matrix Properties"
         },
         {
            "name": "Echelon Form",
            "formula": "Matrix where each row's leading non-zero entry (pivot) is to the right of pivots in rows above",
            "fields": {
                "Example": "$$\\begin{bmatrix} 1 & 2 & 3 \\\\ 0 & 4 & 5 \\\\ 0 & 0 & 6 \\end{bmatrix}$$",
                "Properties": "Leading entry in any row is to the right of leading entries above $\\\\$ All zero rows are at the bottom $\\\\$ Each leading entry has zeros below it"
            },
            "category": "Matrix Transformations"
         },
         {
            "name": "Reduced Row Echelon Form",
            "formula": "Row echelon form where each pivot is 1 and is the only non-zero entry in its column",
            "fields": {
                "Example": "$$\\begin{bmatrix} 1 & 0 & 0 & a \\\\ 0 & 1 & 0 & b \\\\ 0 & 0 & 1 & c \\end{bmatrix}$$",
                "Properties": "Leading 1s (pivots) are the only non-zero entries in their columns \n Each pivot is 1 \n Unique for each matrix \n Used in solving systems of equations"
            },
            "category": "Matrix Transformations"
         },
         {
            "name": "Elementary Matrix",
            "formula": "Matrix representing one elementary row operation on identity matrix",
            "fields": {
                "Row swap": "$$E = \\begin{bmatrix} 0 & 1 & 0 \\\\ 1 & 0 & 0 \\\\ 0 & 0 & 1 \\end{bmatrix}$$ swaps rows 1 and 2",
                "Row scale": "$$E = \\begin{bmatrix} 2 & 0 & 0 \\\\ 0 & 1 & 0 \\\\ 0 & 0 & 1 \\end{bmatrix}$$ multiplies row 1 by 2",
                "Row addition": "$$E = \\begin{bmatrix} 1 & 0 & 0 \\\\ 3 & 1 & 0 \\\\ 0 & 0 & 1 \\end{bmatrix}$$ adds 3 times row 1 to row 2"
            },
            "category": "Special Matrices"
         },
         {
            "name": "Orthogonal Matrix",
            "formula": "Square matrix $A$ where $A^T = A^{-1}$, equivalently $AA^T = A^TA = I$",
            "fields": {
                "Properties": "$\\det(A) = \\pm 1 \\\\ A^T A = AA^T = I \\\\ (AB)^T(AB) = I$ for orthogonal $A,B$",
                "Examples": "Rotation matrices: $$\\begin{bmatrix} \\cos\\theta & -\\sin\\theta \\\\ \\sin\\theta & \\cos\\theta \\end{bmatrix}$$ Reflection matrices: $$\\begin{bmatrix} \\cos 2\\theta & \\sin 2\\theta \\\\ \\sin 2\\theta & -\\cos 2\\theta \\end{bmatrix}$$",
                "Applications": "Preserve lengths and angles \n Used in rotations and reflections \n Important in orthogonal transformations"
            },
            "category": "Special Matrices"
         },
        {
            name:"Scalar Matrix",
            formula:"A [square matrix](!/linear-algebra/definitions#square_matrix) where all element are equal to zero except those on main diagonal which are equal to constant number.",
            fields:{
                "$n \\times n$": "A scalar matrix is a diagonal matrix where all diagonal entries are equal: $$\\lambda I = \\begin{bmatrix} \\lambda & 0 & \\cdots & 0 \\\\ 0 & \\lambda & \\cdots & 0 \\\\ \\vdots & \\vdots & \\ddots & \\vdots \\\\ 0 & 0 & \\cdots & \\lambda \\end{bmatrix}$$ where $\\lambda$ is any real number",
                "$2 \\times 2$": "A 2×2 scalar matrix example: $$\\begin{bmatrix} 3 & 0 \\\\ 0 & 3 \\end{bmatrix}$$",
                "$3 \\times 3$": "A 3×3 scalar matrix example: $$\\begin{bmatrix} 5 & 0 & 0 \\\\ 0 & 5 & 0 \\\\ 0 & 0 & 5 \\end{bmatrix}$$",
                

            },
            category:"Special Matrices"

        },
        {
            "name": "Adjoint",
            "formula": "For matrix $A$, adjoint (adj$(A)$) is transpose of cofactor matrix",
            "fields": {
                "$2 \\times 2$": "For $A = \\begin{bmatrix} a & b \\\\ c & d \\end{bmatrix}$: $$\\text{adj}(A) = \\begin{bmatrix} d & -c \\\\ -b & a \\end{bmatrix}$$",
                "Properties": "$A\\text{ adj}(A) = \\text{adj}(A)A = \\det(A)I \\\\ A^{-1} = \\frac{1}{\\det(A)}\\text{adj}(A)$ when $\\det(A) \\neq 0$"
            },
            "category": "Matrix Transformations"
         },
         {
            "name": "Matrix Size",
            "formula": "Matrix with $m$ rows and $n$ columns denoted as $A_{m\\times n}$ or $A \\in \\mathbb{R}^{m\\times n}$",
            "fields": {
                "Types": "Square matrix: $m = n$\nRectangular matrix: $m \\neq n$\nColumn vector: $n = 1$\nRow vector: $m = 1$",
                "Properties": "For multiplication $AB$: $A_{m\\times n}B_{n\\times p} = C_{m\\times p}$"
            },
            "category": "Matrix Properties"
         },
         {
            "name": "Eigenvalues",
            "formula": "Scalar $\\lambda$ satisfying $Av = \\lambda v$ for nonzero vector $v$ (eigenvector)",
            "fields": {
                "Calculation": "Found by solving characteristic equation: $$\\det(A - \\lambda I) = 0$$",
                "Properties": "$\\text{tr}(A) = \\sum \\lambda_i \\\\ \\det(A) = \\prod \\lambda_i \\\\ \\lambda(A^{-1}) = \\frac{1}{\\lambda(A)}$ if $A$ invertible",
                "Example": "For $A = \\begin{bmatrix} 3 & 1 \\\\ 0 & 2 \\end{bmatrix}$: $$\\det\\begin{bmatrix} 3-\\lambda & 1 \\\\ 0 & 2-\\lambda \\end{bmatrix} = 0 \\implies \\lambda = 2,3$$"
            },
            "category": "Matrix Properties"
         },
         {
            "name": "Eigenvectors",
            "formula": "Nonzero vector $v$ satisfying $Av = \\lambda v$ for eigenvalue $\\lambda$",
            "fields": {
                "Properties": "$v_1,v_2$ with distinct $\\lambda_1,\\lambda_2$ are linearly independent\n$kv$ is also eigenvector if $v$ is eigenvector",
                "Example": "For $A = \\begin{bmatrix} 3 & 1 \\\\ 0 & 2 \\end{bmatrix}$ with $\\lambda = 3$:\n$$\\begin{bmatrix} 0 & 1 \\\\ 0 & -1 \\end{bmatrix}\\begin{bmatrix} x \\\\ y \\end{bmatrix} = \\begin{bmatrix} 0 \\\\ 0 \\end{bmatrix} \\implies v = \\begin{bmatrix} 1 \\\\ 0 \\end{bmatrix}$$"
            },
            "category": "Matrix Properties"
         },
         {
            "name": "Singular Matrix",
            "formula": "Square matrix with $\\det(A) = 0$",
            "fields": {
                "Properties": "$\\text{rank}(A) < n$ for $n \\times n$ matrix\nSystem $Ax = b$ has no unique solution\nNon-invertible: $A^{-1}$ doesn't exist",
                "Example": "$$\\begin{bmatrix} 1 & 2 \\\\ 2 & 4 \\end{bmatrix}$$ has dependent rows/columns"
            },
            "category": "Special Matrices"
         },
         {
            "name": "Augmented Matrix",
            "formula": "Matrix $[A|b]$ representing system $Ax = b$",
            "fields": {
                "Example": "System: $x + 2y = 5$ \n$3x - y = 1$ becomes:\n$$\\left[\\begin{array}{cc|c} 1 & 2 & 5 \\\\ 3 & -1 & 1 \\end{array}\\right]$$",
                "Applications": "Solve systems using row operations\nFind inverse matrix\nGaussian elimination"
            },
            "category": "Matrix Applications"
         },
         {
            "name": "LU Decomposition",
            "formula": "Matrix $A = LU$ where $L$ is lower triangular and $U$ is upper triangular",
            "fields": {
                "Example": "$$\\begin{bmatrix} 2 & 1 \\\\ 8 & 7 \\end{bmatrix} = \\begin{bmatrix} 1 & 0 \\\\ 4 & 1 \\end{bmatrix}\\begin{bmatrix} 2 & 1 \\\\ 0 & 3 \\end{bmatrix}$$",
                "Applications": "Solve $Ax = b$ efficiently\nCompute determinant as product of diagonal entries\nFactorize once, solve for multiple $b$"
            },
            "category": "Matrix Transformations"
         },
         {
            "name": "QR Decomposition",
            "formula": "Matrix $A = QR$ where $Q$ is orthogonal ($Q^TQ = I$) and $R$ is upper triangular",
            "fields": {
                "Properties": "$Q^TQ = QQ^T = I$\n$R_{ii} \\geq 0$ for standard QR",
                "Applications": "Solve least squares problems\nCompute eigenvalues\nSolve systems of equations"
            },
            "category": "Matrix Transformations"
         },
         {
            "name": "Positive Definite Matrix",
            "formula": "Symmetric matrix $A$ where $x^TAx > 0$ for all nonzero $x$",
            "fields": {
                "Properties": "$\\lambda_i > 0$ for all eigenvalues\n$A^{-1}$ exists and is positive definite\n$x^TAx > 0$ for all $x \\neq 0$",
                "Example": "$$\\begin{bmatrix} 2 & -1 \\\\ -1 & 2 \\end{bmatrix}$$ with eigenvalues 1, 3",
                "Tests": "$\\det(A_k) > 0$ for all leading principal minors\nCholesky decomposition exists: $A = LL^T$"
            },
            "category": "Special Matrices"
         },
         {
            "name": "Diagonalization",
            "formula": "Matrix $A = PDP^{-1}$ where $D$ is diagonal matrix of eigenvalues",
            "fields": {
                "Conditions": "Matrix $A$ is diagonalizable if:\n$n$ linearly independent eigenvectors exist\nGeometric multiplicity equals algebraic multiplicity",
                "Result": "$$D = \\begin{bmatrix} \\lambda_1 & 0 & \\cdots \\\\ 0 & \\lambda_2 & \\cdots \\\\ \\vdots & \\vdots & \\ddots \\end{bmatrix}$$ where $P$ columns are eigenvectors",
                "Applications": "Compute $A^n$ easily: $A^n = PD^nP^{-1}$\nSolve systems of differential equations"
            },
            "category": "Matrix Transformations"
         },
         {
            "name": "Block Matrix",
            "formula": "Matrix partitioned into submatrices $A_{ij}$",
            "fields": {
                "Example": "$$\\begin{bmatrix} A_{11} & A_{12} \\\\ A_{21} & A_{22} \\end{bmatrix}$$ where each $A_{ij}$ is a matrix",
                "Operations": "$(AB)_{ij} = \\sum_k A_{ik}B_{kj}$\n$\\begin{bmatrix} A & B \\\\ C & D \\end{bmatrix}^{-1} = \\begin{bmatrix} P & Q \\\\ R & S \\end{bmatrix}$ (if exists)"
            },
            "category": "Special Matrices"
         },
         {
            "name": "Sparse Matrix",
            "formula": "Matrix with mostly zero elements, typically $O(n)$ nonzero elements",
            "fields": {
                "Storage": "Store only nonzero elements with indices\nCompressed Row Storage (CRS)\nCompressed Column Storage (CCS)",
                "Example": "$$\\begin{bmatrix} 1 & 0 & 2 & 0 \\\\ 0 & 0 & 3 & 0 \\\\ 0 & 0 & 0 & 4 \\\\ 5 & 0 & 0 & 0 \\end{bmatrix}$$",
                "Applications": "Network adjacency matrices\nFinite element analysis\nLarge system solving"
            },
            "category": "Special Matrices"
         }
    
    

];
 export default linearAlgebraTermsList;