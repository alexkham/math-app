

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
        name: "Zero Vector",
        formula: "A vector where all components are zero.",
        fields: [],
        category: "Vectors Basic Terms"
    },
    {
        name: "Column Vector",
        formula: "A vector written as a column, e.g., [x, y, z]^T.",
        fields: [],
        category: "Vectors Basic Terms"
    },
    {
        name: "Row Vector",
        formula: "A vector written as a row, e.g., [x, y, z].",
        fields: [],
        category: "Vectors Basic Terms"
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
        formula: "The sum of the products of corresponding components, u·v = Σui * vi.",
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
            formula: "A matrix with a single row, e.g., [a b c].",
            fields: [],
            category: "Matrices Basic Terms"
        },
        {
            name: "Column Matrix",
            formula: "A matrix with a single column, e.g., [a; b; c].",
            fields: [],
            category: "Matrices Basic Terms"
        },
        {
            name: "Square Matrix",
            formula: "A matrix with an equal number of rows and columns, often associated with special properties like determinants and eigenvalues.",
            fields: [],
            category: "Matrices Basic Terms"
        },
        {
            name: "Identity Matrix",
            formula: "A square matrix with 1s on the diagonal and 0s elsewhere.",
            fields: [],
            category: "Special Matrices"
        },
        {
            name: "Diagonal Matrix",
            formula: "A square matrix with non-zero elements only on the diagonal.",
            fields: [],
            category: "Special Matrices"
        },
        {
            name: "Symmetric Matrix",
            formula: "A matrix equal to its transpose, A = A^T.",
            fields: [],
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