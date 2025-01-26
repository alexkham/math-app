

const linearAlgebraTermsList = [
    //vectors
    {
        name: "Vector",
        formula: "An object with both magnitude and direction.",
        fields: [],
        category: "Vectors Basic Terms"
    },
    {
        name: "Components",
        formula: "The individual elements of a vector, e.g., (v1, v2, ..., vn).",
        fields: [],
        category: "Vectors Basic Terms"
    },
    {
        name: "Magnitude/Norm",
        formula: "The length of a vector, denoted as ||v||.",
        fields: [],
        category: "Vectors Basic Terms"
    },
    {
        name: "Unit Vector",
        formula: "A vector with a magnitude of 1.",
        fields: [],
        category: "Vectors Basic Terms"
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
        name: "Vector Addition",
        formula: "Adding two vectors component-wise.",
        fields: [],
        category: "Vector Operations"
    },
    {
        name: "Scalar Multiplication",
        formula: "Multiplying a vector by a scalar.",
        fields: [],
        category: "Vector Operations"
    },
    {
        name: "Linear Combination",
        formula: "A combination of vectors using scalar multiplication and addition.",
        fields: [],
        category: "Vector Operations"
    },
    {
        name: "Dot Product (Inner Product)",
        formula: "The sum of the products of corresponding components,  $u·v = Σui * vi$.",
        fields: [],
        category: "Vector Operations"
    },
    {
        name: "Cross Product",
        formula: "A vector perpendicular to two given vectors in R^3.",
        fields: [],
        category: "Vector Operations"
    },
    {
        name: "Projection",
        formula: "The shadow of one vector onto another.",
        fields: [],
        category: "Vector Operations"
    },
    {
        name: "Linearly Independent Vectors",
        formula: "Vectors that cannot be expressed as a linear combination of others.",
        fields: [],
        category: "Vectors Linear Dependence and Independence"
    },
    {
        name: "Linearly Dependent Vectors",
        formula: "Vectors that can be expressed as a linear combination of others.",
        fields: [],
        category: "Vectors Linear Dependence and Independence"
    },
    {
        name: "Vector Space",
        formula: "A set of vectors closed under addition and scalar multiplication.",
        fields: [],
        category: "Vector Spaces"
    },
    {
        name: "Subspace",
        formula: "A subset of a vector space that is also a vector space.",
        fields: [],
        category: "Vector Spaces"
    },
    {
        name: "Span",
        formula: "The set of all linear combinations of a given set of vectors.",
        fields: [],
        category: "Vector Spaces"
    },
    {
        name: "Basis",
        formula: "A set of linearly independent vectors that span a vector space.",
        fields: [],
        category: "Vector Spaces"
    },
    {
        name: "Dimension",
        formula: "The number of vectors in a basis.",
        fields: [],
        category: "Vector Spaces"
    },
    {
        name: "Orthogonal Vectors",
        formula: "Vectors with a dot product of 0.",
        fields: [],
        category: "Vectors Orthogonality"
    },
    {
        name: "Orthonormal Basis",
        formula: "A set of orthogonal vectors that are also unit vectors.",
        fields: [],
        category: "Vectors Orthogonality"
    },
    {
        name: "Gram-Schmidt Process",
        formula: "A method to convert a set of vectors into an orthonormal set.",
        fields: [],
        category: "Vectors Orthogonality"
    },
    {
        name: "Direction Cosines",
        formula: "Cosines of the angles between a vector and the coordinate axes.",
        fields: [],
        category: "Vectors Geometric Interpretations"
    },
    {
        name: "Vector Projection",
        formula: "The component of one vector along another vector.",
        fields: [],
        category: "Vectors Geometric Interpretations"
    },
    {
        name: "Linear Transformation",
        formula: "A mapping that preserves vector addition and scalar multiplication.",
        fields: [],
        category: "Vectors Transformations"
    },
    {
        name: "Matrix Representation",
        formula: "A matrix used to represent a linear transformation acting on vectors.",
        fields: [],
        category: "Vectors Transformations"
    },
    {
        name: "Gradient Vector",
        formula: "A vector of partial derivatives indicating the direction of steepest ascent.",
        fields: [],
        category: "Vectors Applications"
    },
    {
        name: "Position Vector",
        formula: "A vector indicating a point's position relative to the origin.",
        fields: [],
        category: "Vectors Applications"
    },
    {
        name: "Force Vector",
        formula: "In physics, a vector representing a force with magnitude and direction.",
        fields: [],
        category: "Vectors Applications"
    },




       //matrices
        {
            name: "Matrix",
            formula: "A rectangular array of numbers or symbols arranged in rows and columns, used to represent systems of equations, transformations, or data.",
            fields: [],
            category: "Matrices Basic Terms"
        },
        {
            name: "Row Matrix",
            formula: "A [matrix](!/linear-algebra/definitions#matrix) with a single row, e.g., [a b c].",
            fields: [],
            category: "Matrices Basic Terms"
        },
        {
            name: "Column Matrix",
            formula: "A [matrix](!/linear-algebra/definitions#matrix) with a single column, e.g., [a; b; c].",
            fields: [],
            category: "Matrices Basic Terms"
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
            category: "Matrix Basic Terms"
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
            name: "Transpose",
            formula: "A matrix obtained by swapping rows and columns.",
            fields: [],
            category: "Matrix Operations"
        },
        {
            name: "Matrix Addition",
            formula: "Adding corresponding elements of two matrices of the same size.",
            fields: [],
            category: "Matrix Operations"
        },
        {
            name: "Scalar Multiplication",
            formula: "Multiplying every element of a matrix by a scalar.",
            fields: [],
            category: "Matrix Operations"
        },
        {
            name: "Matrix Multiplication",
            formula: "Combining two matrices by multiplying rows of the first by columns of the second.",
            fields: [],
            category: "Matrix Operations"
        },
        {
            name: "Determinant",
            formula: "A scalar value summarizing the properties of a square matrix.",
            fields: [],
            category: "Matrix Properties"
        },
        {
            name: "Inverse Matrix",
            formula: "A matrix A^-1 such that A * A^-1 = I.",
            fields: [],
            category: "Matrix Properties"
        },
        {
            name: "Rank",
            formula: "The maximum number of linearly independent rows or columns in a matrix.",
            fields: [],
            category: "Matrix Properties"
        },
        {
            name: "Trace",
            formula: "The sum of the diagonal elements of a square matrix.",
            fields: [],
            category: "Matrix Properties"
        },
        {
            name: "Echelon Form",
            formula: "A matrix form where each row starts with more leading zeros than the previous one.",
            fields: [],
            category: "Matrix Transformations"
        },
        {
            name: "Reduced Row Echelon Form",
            formula: "A row-echelon form where leading coefficients are 1 and are the only non-zero entries in their column.",
            fields: [],
            category: "Matrix Transformations"
        },
        {
            name: "Elementary Matrix",
            formula: "A matrix derived from the identity matrix by performing a single row operation.",
            fields: [],
            category: "Special Matrices"
        },
        {
            name: "Orthogonal Matrix",
            formula: "A matrix whose transpose is its inverse, A^T = A^-1.",
            fields: [],
            category: "Special Matrices"
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
            name: "Adjoint",
            formula: "The transpose of the cofactor matrix of a square matrix.",
            fields: [],
            category: "Matrix Transformations"
        },
        {
            name: "Eigenvalues",
            formula: "Scalars λ such that A*v = λ*v for a square matrix A and vector v.",
            fields: [],
            category: "Matrix Properties"
        },
        {
            name: "Eigenvectors",
            formula: "Vectors v that satisfy A*v = λ*v for a square matrix A and scalar λ.",
            fields: [],
            category: "Matrix Properties"
        },
        {
            name: "Singular Matrix",
            formula: "A square matrix with determinant equal to zero (non-invertible).",
            fields: [],
            category: "Special Matrices"
        },
        {
            name: "Augmented Matrix",
            formula: "A matrix that combines the coefficients and constants of a system of linear equations.",
            fields: [],
            category: "Matrix Applications"
        },
        {
            name: "LU Decomposition",
            formula: "A factorization of a matrix into a lower triangular matrix (L) and an upper triangular matrix (U).",
            fields: [],
            category: "Matrix Transformations"
        },
        {
            name: "QR Decomposition",
            formula: "A factorization of a matrix into an orthogonal matrix (Q) and an upper triangular matrix (R).",
            fields: [],
            category: "Matrix Transformations"
        },
        {
            name: "Positive Definite Matrix",
            formula: "A symmetric matrix where all eigenvalues are positive.",
            fields: [],
            category: "Special Matrices"
        },
        {
            name: "Diagonalization",
            formula: "The process of converting a matrix into a diagonal matrix using a similarity transformation.",
            fields: [],
            category: "Matrix Transformations"
        },
        {
            name: "Block Matrix",
            formula: "A matrix partitioned into smaller submatrices.",
            fields: [],
            category: "Special Matrices"
        },
        {
            name: "Sparse Matrix",
            formula: "A matrix with most of its elements equal to zero.",
            fields: [],
            category: "Special Matrices"
        }
    
    

];
 export default linearAlgebraTermsList;