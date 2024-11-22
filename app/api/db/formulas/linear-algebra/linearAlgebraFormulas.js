const linearAlgebraFormulasList = [
    {
      name: "Vector Addition",
      formula: "$\\mathbf{u} + \\mathbf{v} = \\begin{bmatrix} u_1 + v_1 \\\\ u_2 + v_2 \\\\ \\vdots \\\\ u_n + v_n \\end{bmatrix}$",
      fields: {
        "Explanation": "This operation adds two vectors component-wise. It's fundamental in vector algebra and represents combining two vectors to get a resultant vector. Vector addition is used in physics for combining forces, velocities, and other vector quantities.",
        "$\\mathbf{u}, \\mathbf{v}$": "Vectors in $\\mathbb{R}^n$",
        "$u_i, v_i$": "Components of vectors $\\mathbf{u}$ and $\\mathbf{v}$",
        "Example": "For $\\mathbf{u} = \\begin{bmatrix}1 \\\\ 3\\end{bmatrix}$ and $\\mathbf{v} = \\begin{bmatrix}2 \\\\ 4\\end{bmatrix}$, $\\mathbf{u} + \\mathbf{v} = \\begin{bmatrix}1+2 \\\\ 3+4\\end{bmatrix} = \\begin{bmatrix}3 \\\\ 7\\end{bmatrix}$",
        "Use Cases": "Adding forces, velocities, or any quantities represented by vectors"
      },
      category: "Vector Operations"
    },
    {
      name: "Scalar Multiplication",
      formula: "$c\\mathbf{v} = \\begin{bmatrix} c \\cdot v_1 \\\\ c \\cdot v_2 \\\\ \\vdots \\\\ c \\cdot v_n \\end{bmatrix}$",
      fields: {
        "Explanation": "This operation multiplies each component of a vector by a scalar. It scales the vector by stretching or compressing it without changing its direction (unless the scalar is negative, which also reverses the direction).",
        "$c$": "Scalar (real number)",
        "$\\mathbf{v}$": "Vector in $\\mathbb{R}^n$",
        "$v_i$": "Components of vector $\\mathbf{v}$",
        "Example": "For $c = 3$ and $\\mathbf{v} = \\begin{bmatrix}2 \\\\ -1\\end{bmatrix}$, $c\\mathbf{v} = \\begin{bmatrix}3 \\cdot 2 \\\\ 3 \\cdot (-1)\\end{bmatrix} = \\begin{bmatrix}6 \\\\ -3\\end{bmatrix}$",
        "Use Cases": "Scaling vectors in physics and engineering applications"
      },
      category: "Vector Operations"
    },
    {
      name: "Dot Product (Inner Product)",
      formula: "$\\mathbf{u} \\cdot \\mathbf{v} = u_1v_1 + u_2v_2 + \\dots + u_nv_n$",
      fields: {
        "Explanation": "The dot product computes a scalar from two vectors. It measures the extent to which two vectors point in the same direction and is used to find angles between vectors and projections.",
        "$\\mathbf{u}, \\mathbf{v}$": "Vectors in $\\mathbb{R}^n$",
        "$u_i, v_i$": "Components of vectors $\\mathbf{u}$ and $\\mathbf{v}$",
        "Example": "For $\\mathbf{u} = \\begin{bmatrix}1 \\\\ 2\\end{bmatrix}$ and $\\mathbf{v} = \\begin{bmatrix}3 \\\\ 4\\end{bmatrix}$, $\\mathbf{u} \\cdot \\mathbf{v} = (1)(3) + (2)(4) = 11$",
        "Use Cases": "Calculating work, projections, and determining orthogonality"
      },
      category: "Vector Operations"
    },
    {
      name: "Cross Product",
      formula: "$\\mathbf{u} \\times \\mathbf{v} = \\begin{bmatrix} u_2v_3 - u_3v_2 \\\\ u_3v_1 - u_1v_3 \\\\ u_1v_2 - u_2v_1 \\end{bmatrix}$",
      fields: {
        "Explanation": "The cross product of two vectors in $\\mathbb{R}^3$ results in a vector that is perpendicular to both, with a magnitude equal to the area of the parallelogram they span.",
        "$\\mathbf{u}, \\mathbf{v}$": "Vectors in $\\mathbb{R}^3$",
        "$u_i, v_i$": "Components of vectors $\\mathbf{u}$ and $\\mathbf{v}$",
        "Example": "For $\\mathbf{u} = \\begin{bmatrix}1 \\\\ 0 \\\\ 0\\end{bmatrix}$ and $\\mathbf{v} = \\begin{bmatrix}0 \\\\ 1 \\\\ 0\\end{bmatrix}$, $\\mathbf{u} \\times \\mathbf{v} = \\begin{bmatrix}0 \\\\ 0 \\\\ 1\\end{bmatrix}$",
        "Use Cases": "Calculating torque, rotational motion, and normal vectors"
      },
      category: "Vector Operations"
    },
    {
      name: "Matrix Addition",
      formula: "$\\mathbf{A} + \\mathbf{B} = \\begin{bmatrix} a_{11} + b_{11} & \\dots & a_{1n} + b_{1n} \\\\ \\vdots & \\ddots & \\vdots \\\\ a_{m1} + b_{m1} & \\dots & a_{mn} + b_{mn} \\end{bmatrix}$",
      fields: {
        "Explanation": "Matrices of the same dimensions can be added by adding their corresponding elements. This operation is fundamental in linear algebra and has applications in systems of equations and transformations.",
        "$\\mathbf{A}, \\mathbf{B}$": "Matrices of size $m \\times n$",
        "$a_{ij}, b_{ij}$": "Elements of matrices $\\mathbf{A}$ and $\\mathbf{B}$",
        "Example": "For $\\mathbf{A} = \\begin{bmatrix}1 & 2 \\\\ 3 & 4\\end{bmatrix}$ and $\\mathbf{B} = \\begin{bmatrix}5 & 6 \\\\ 7 & 8\\end{bmatrix}$, $\\mathbf{A} + \\mathbf{B} = \\begin{bmatrix}6 & 8 \\\\ 10 & 12\\end{bmatrix}$",
        "Use Cases": "Combining linear transformations, solving matrix equations"
      },
      category: "Matrix Operations"
    },
    {
      name: "Scalar Multiplication of a Matrix",
      formula: "$c\\mathbf{A} = \\begin{bmatrix} c \\cdot a_{11} & \\dots & c \\cdot a_{1n} \\\\ \\vdots & \\ddots & \\vdots \\\\ c \\cdot a_{m1} & \\dots & c \\cdot a_{mn} \\end{bmatrix}$",
      fields: {
        "Explanation": "Each element of the matrix is multiplied by the scalar. This operation scales the matrix and is essential in linear transformations and eigenvalue problems.",
        "$c$": "Scalar (real number)",
        "$\\mathbf{A}$": "Matrix of size $m \\times n$",
        "$a_{ij}$": "Elements of matrix $\\mathbf{A}$",
        "Example": "For $c = 2$ and $\\mathbf{A} = \\begin{bmatrix}1 & -1 \\\\ 0 & 3\\end{bmatrix}$, $c\\mathbf{A} = \\begin{bmatrix}2 & -2 \\\\ 0 & 6\\end{bmatrix}$",
        "Use Cases": "Scaling transformations, adjusting system responses"
      },
      category: "Matrix Operations"
    },
    {
      name: "Matrix Multiplication",
      formula: "$(\\mathbf{AB})_{ij} = \\sum_{k=1}^{n} a_{ik}b_{kj}$",
      fields: {
        "Explanation": "Matrix multiplication combines two matrices to produce a new matrix. It's not commutative in general and represents the composition of linear transformations.",
        "$\\mathbf{A}$": "Matrix of size $m \\times n$",
        "$\\mathbf{B}$": "Matrix of size $n \\times p$",
        "$(\\mathbf{AB})_{ij}$": "Element in row $i$, column $j$ of the product matrix",
        "Example": "For $\\mathbf{A} = \\begin{bmatrix}1 & 2\\end{bmatrix}$ and $\\mathbf{B} = \\begin{bmatrix}3 \\\\ 4\\end{bmatrix}$, $\\mathbf{AB} = (1)(3) + (2)(4) = 11$",
        "Use Cases": "Transformations, solving systems of equations"
      },
      category: "Matrix Operations"
    },
    {
      name: "Determinant of a 2x2 Matrix",
      formula: "$\\det(\\mathbf{A}) = ad - bc$",
      fields: {
        "Explanation": "The determinant of a 2x2 matrix gives the scaling factor of the linear transformation represented by the matrix. It's also used to determine invertibility.",
        "$\\mathbf{A}$": "Matrix $\\begin{bmatrix} a & b \\\\ c & d \\end{bmatrix}$",
        "$a, b, c, d$": "Elements of matrix $\\mathbf{A}$",
        "Example": "For $\\mathbf{A} = \\begin{bmatrix}2 & 3 \\\\ 1 & 4\\end{bmatrix}$, $\\det(\\mathbf{A}) = (2)(4) - (3)(1) = 5$",
        "Use Cases": "Checking invertibility, area scaling"
      },
      category: "Determinants"
    },
    {
      name: "Inverse of a 2x2 Matrix",
      formula: "$\\mathbf{A}^{-1} = \\frac{1}{\\det(\\mathbf{A})} \\begin{bmatrix} d & -b \\\\ -c & a \\end{bmatrix}$",
      fields: {
        "Explanation": "The inverse of a matrix reverses the effect of the original matrix. For a 2x2 matrix, the inverse exists if and only if the determinant is non-zero.",
        "$\\mathbf{A}$": "Matrix $\\begin{bmatrix} a & b \\\\ c & d \\end{bmatrix}$",
        "$\\det(\\mathbf{A})$": "Determinant of $\\mathbf{A}$",
        "$\\mathbf{A}^{-1}$": "Inverse of matrix $\\mathbf{A}$",
        "Example": "For $\\mathbf{A} = \\begin{bmatrix}2 & 1 \\\\ 5 & 3\\end{bmatrix}$, $\\det(\\mathbf{A}) = 1$, so $\\mathbf{A}^{-1} = \\begin{bmatrix} 3 & -1 \\\\ -5 & 2 \\end{bmatrix}$",
        "Use Cases": "Solving linear systems, undoing transformations"
      },
      category: "Matrix Inverses"
    },
    {
      name: "Eigenvalues and Eigenvectors",
      formula: "$\\mathbf{A}\\mathbf{x} = \\lambda\\mathbf{x}$",
      fields: {
        "Explanation": "An eigenvalue is a scalar that indicates how much the eigenvector is stretched or compressed during the transformation represented by $\\mathbf{A}$. Eigenvectors point in directions that are invariant under the transformation.",
        "$\\mathbf{A}$": "Square matrix",
        "$\\mathbf{x}$": "Eigenvector",
        "$\\lambda$": "Eigenvalue",
        "Example": "For $\\mathbf{A} = \\begin{bmatrix}2 & 0 \\\\ 0 & 3\\end{bmatrix}$, eigenvalues are $\\lambda = 2, 3$ with corresponding eigenvectors along the x and y axes.",
        "Use Cases": "Stability analysis, quantum mechanics, principal component analysis"
      },
      category: "Eigenvalues and Eigenvectors"
    },
    {
      name: "Cramer's Rule",
      formula: "$x_i = \\frac{\\det(\\mathbf{A}_i)}{\\det(\\mathbf{A})}$",
      fields: {
        "Explanation": "Cramer's Rule provides a method to solve a system of linear equations using determinants, applicable when the system has a unique solution.",
        "$\\mathbf{A}$": "Coefficient matrix",
        "$\\mathbf{A}_i$": "Matrix $\\mathbf{A}$ with its $i$-th column replaced by the constants vector $\\mathbf{b}$",
        "$\\det(\\mathbf{A})$": "Determinant of $\\mathbf{A}$",
        "$x_i$": "Solution for variable $x_i$",
        "Example": "For $\\begin{cases} 2x + y = 5 \\\\ x - y = 1 \\end{cases}$, solve for $x$ and $y$ using determinants.",
        "Use Cases": "Solving small systems of equations"
      },
      category: "Systems of Equations"
    },
    {
      name: "Rank of a Matrix",
      formula: "The rank is the maximum number of linearly independent rows or columns.",
      fields: {
        "Explanation": "The rank indicates the dimension of the vector space spanned by the rows or columns. It determines the solvability of linear systems.",
        "$\\mathbf{A}$": "Matrix",
        "Example": "A $3 \\times 3$ matrix with rank 2 has linearly dependent rows or columns.",
        "Use Cases": "Analyzing solutions of linear systems, determining invertibility"
      },
      category: "Matrix Properties"
    },
    {
      name: "Linear Transformation",
      formula: "$T(c\\mathbf{u} + d\\mathbf{v}) = cT(\\mathbf{u}) + dT(\\mathbf{v})$",
      fields: {
        "Explanation": "A function is a linear transformation if it preserves vector addition and scalar multiplication. Linear transformations can be represented by matrices.",
        "$T$": "Linear transformation",
        "$\\mathbf{u}, \\mathbf{v}$": "Vectors",
        "$c, d$": "Scalars",
        "Example": "Rotation, reflection, and scaling transformations are linear.",
        "Use Cases": "Computer graphics, differential equations"
      },
      category: "Linear Transformations"
    },
    {
      name: "Orthogonality",
      formula: "$\\mathbf{u} \\cdot \\mathbf{v} = 0$",
      fields: {
        "Explanation": "Two vectors are orthogonal if their dot product is zero, meaning they are perpendicular in space.",
        "$\\mathbf{u}, \\mathbf{v}$": "Vectors",
        "Example": "Vectors $\\begin{bmatrix}1 \\\\ 0\\end{bmatrix}$ and $\\begin{bmatrix}0 \\\\ 1\\end{bmatrix}$ are orthogonal.",
        "Use Cases": "Projections, defining coordinate systems"
      },
      category: "Vector Properties"
    },
    {
      name: "Norm of a Vector",
      formula: "$\\|\\mathbf{v}\\| = \\sqrt{v_1^2 + v_2^2 + \\dots + v_n^2}$",
      fields: {
        "Explanation": "The norm (or length) of a vector is a measure of its magnitude in space.",
        "$\\mathbf{v}$": "Vector",
        "$v_i$": "Components of $\\mathbf{v}$",
        "Example": "For $\\mathbf{v} = \\begin{bmatrix}3 \\\\ 4\\end{bmatrix}$, $\\|\\mathbf{v}\\| = 5$",
        "Use Cases": "Calculating distances, normalizing vectors"
      },
      category: "Vector Operations"
    },
    {
      name: "Unit Vector",
      formula: "$\\mathbf{u} = \\frac{\\mathbf{v}}{\\|\\mathbf{v}\\|}$",
      fields: {
        "Explanation": "A unit vector has a magnitude of 1 and indicates direction. Any vector can be converted to a unit vector by dividing by its norm.",
        "$\\mathbf{v}$": "Original vector",
        "$\\mathbf{u}$": "Unit vector in the direction of $\\mathbf{v}$",
        "Example": "For $\\mathbf{v} = \\begin{bmatrix}3 \\\\ 4\\end{bmatrix}$, $\\mathbf{u} = \\begin{bmatrix} \\frac{3}{5} \\\\ \\frac{4}{5} \\end{bmatrix}$",
        "Use Cases": "Direction representation, projections"
      },
      category: "Vector Operations"
    },
    {
      name: "Projection of a Vector",
      formula: "$\\text{proj}_{\\mathbf{v}} \\mathbf{u} = \\left( \\frac{\\mathbf{u} \\cdot \\mathbf{v}}{\\|\\mathbf{v}\\|^2} \\right) \\mathbf{v}$",
      fields: {
        "Explanation": "The projection of $\\mathbf{u}$ onto $\\mathbf{v}$ is the component of $\\mathbf{u}$ in the direction of $\\mathbf{v}$. It is used in decomposing vectors and in least squares approximations.",
        "$\\mathbf{u}, \\mathbf{v}$": "Vectors",
        "$\\|\\mathbf{v}\\|$": "Norm of $\\mathbf{v}$",
        "Example": "Projecting $\\mathbf{u} = \\begin{bmatrix}2 \\\\ 3\\end{bmatrix}$ onto $\\mathbf{v} = \\begin{bmatrix}1 \\\\ 0\\end{bmatrix}$ yields $\\begin{bmatrix}2 \\\\ 0\\end{bmatrix}$",
        "Use Cases": "Shadow computations, component analysis"
      },
      category: "Vector Operations"
    }
  ];
  
  export default linearAlgebraFormulasList;
  